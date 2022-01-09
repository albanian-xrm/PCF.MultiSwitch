import { createElement } from 'react';
import { render } from 'react-dom';

import App from '@albanian-xrm/multi-switch/App';
import { IHandler, notifier, disabledNotifier, SwitchValue } from '@albanian-xrm/multi-switch/notifier';
import { IInputs, IOutputs } from '@albanian-xrm/multi-switch/generated/ManifestTypes';

export class MultiSwitch implements ComponentFramework.StandardControl<IInputs, IOutputs> {
  private _notifier = notifier;
  private _disabledNotifier = disabledNotifier;
  private _value: {[sender:string]: number[]} = {};
  private _disabled: {[sender:string]: boolean} = {};
  private _selection: number[];
  /**
   * Empty constructor.
   */
  constructor() {}

  /**
   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
   * Data-set values are not initialized here, use updateView.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
   */
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary,
    container: HTMLDivElement,
  ): void {
    const sender = context.parameters.selection.attributes?.LogicalName || '';
    
    const onValueChanged: IHandler<SwitchValue> = (updatedValue) => {
      this._value[sender] = updatedValue || [];
      this._selection = [...this._value[sender]];
      notifyOutputChanged();
    };
    this._disabled[sender] = context.mode.isControlDisabled;
    const disabled = this._disabled[sender];
    const options = context.parameters.selection.attributes?.Options;
    const selectedOptions = context.parameters.selection.raw;
    this._value[sender] = selectedOptions || [];
    const notifier = this._notifier;
    const disabledNotifier = this._disabledNotifier;
    const app = createElement(
      App,
      { disabled, options, selectedOptions, onValueChanged, notifier, disabledNotifier, sender },
      null,
    );
    // Add control initialization code
    render(app, container);
  }

  /**
   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
   */
  public updateView(context: ComponentFramework.Context<IInputs>): void {
    const sender = context.parameters.selection.attributes?.LogicalName || '';
    if (this._disabled[sender] != context.mode.isControlDisabled) {
      this._disabled[sender] = context.mode.isControlDisabled;
      disabledNotifier.notify(sender, this._disabled[sender]);
    }
    // Add code to update control view
    const newValues = context.parameters.selection.raw || [];
    if (
      newValues.length == this._value[sender].length &&
      newValues.every((value) => this._value[sender].findIndex((oldValue) => oldValue === value) >= 0)
    ) {
      return;
    }
    this._notifier.notify(sender, context.parameters.selection.raw);
  }

  /**
   * It is called by the framework prior to a control receiving new data.
   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
   */
  public getOutputs(): IOutputs {
    return { selection: [...this._selection] };
  }

  /**
   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
   * i.e. cancelling any pending remote calls, removing listeners, etc.
   */
  public destroy(): void {
    // Add code to cleanup control if necessary
  }
}
