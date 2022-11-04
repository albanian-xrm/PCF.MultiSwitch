import { IInputs } from "@albanian-xrm/multi-switch/generated/ManifestTypes";

export type CheckedHandler = (checked: boolean, value: number) => void;

type Enum<T> = T extends ComponentFramework.PropertyTypes.EnumProperty<infer T> ? T : never;

export interface IAppProps {
  checkboxes?: boolean;
  disabled?: boolean;
  onChecked: CheckedHandler;
  options: ComponentFramework.PropertyHelper.OptionMetadata[];
  selectedOptions: number[];
  visible: boolean;
  horizontal: boolean;
  fixedHeight?: number;
  columns?: number;
  pillColorOn?: string;
  pillColorOff?: string;
  pillColorHoverOn?: string;
  thumbColorOn?: string;
  thumbColorOff?: string;
  thumbColorHoverOff?: string;
  useColorForLabel?: Enum<IInputs['useColorForLabel']>
}

export interface IProps {
  overflowY: string;
  height: number;
}
