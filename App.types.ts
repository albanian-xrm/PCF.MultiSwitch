export type CheckedHandler = (checked: boolean, value: number) => void;

export interface IAppProps {
    checkboxes?: boolean;
    disabled?: boolean;
    horizontal?: boolean;
    onChecked: CheckedHandler;
    options: ComponentFramework.PropertyHelper.OptionMetadata[];
    selectedOptions: number[],
    visible: boolean;
}