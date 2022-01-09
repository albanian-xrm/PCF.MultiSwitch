import { IHandler, ISubscriber, SwitchValue } from "@albanian-xrm/multi-switch/notifier";

export interface IAppProps {
    sender: string;
    options: ComponentFramework.PropertyHelper.OptionMetadata[] | undefined;
    disabled?: boolean;
    selectedOptions: number[] | null,
    onValueChanged: IHandler<SwitchValue>;
    notifier: ISubscriber<SwitchValue>;
    disabledNotifier: ISubscriber<boolean>;
}