import { IHandler, ISubscriber, SwitchValue } from "@albanian-xrm/multi-switch/notifier";

export interface IAppProps {
    options: ComponentFramework.PropertyHelper.OptionMetadata[] | undefined;
    disabled?: boolean;
    initialVisible: boolean;
    selectedOptions: number[] | null,
    onValueChanged: IHandler<SwitchValue>;
    notifier: ISubscriber<SwitchValue>;
    disabledNotifier: ISubscriber<boolean>;
    visibleNotifier: ISubscriber<boolean>;
}