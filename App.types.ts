export type CheckedHandler = (checked: boolean, value: number) => void;
export interface IAppProps {
  checkboxes?: boolean;
  disabled?: boolean;
  onChecked: CheckedHandler;
  options: ComponentFramework.PropertyHelper.OptionMetadata[];
  selectedOptions: number[];
  visible: boolean;
  fixedHeight?: number | null;
  columns?: number;
}

export interface IProps {
  overflowY: string;
  height: number;
}
