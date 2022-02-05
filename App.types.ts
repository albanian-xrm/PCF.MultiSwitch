import { IHandler, ISubscriber, SwitchValue } from "@albanian-xrm/multi-switch/notifier";

export interface IAppProps {
    checkboxes?: boolean;
    disabled?: boolean;
    initialVisible: boolean;
    options: ComponentFramework.PropertyHelper.OptionMetadata[] | undefined;
    selectedOptions: number[] | null,
    onValueChanged: IHandler<SwitchValue>;
    notifier: ISubscriber<SwitchValue>;
    disabledNotifier: ISubscriber<boolean>;
    visibleNotifier: ISubscriber<boolean>;
}