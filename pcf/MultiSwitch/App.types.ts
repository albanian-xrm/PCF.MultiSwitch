import type { IInputs } from './generated/ManifestTypes';

export type CheckedHandler = (checked: boolean, value: number) => void;

type Enum<T> = T extends ComponentFramework.PropertyTypes.EnumProperty<infer InferredT> ? InferredT : never;

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
  useColorForLabel?: Enum<IInputs['useColorForLabel']>;
  banishedChoices?: number[];
  relatedChoices?: number[];
  groupSize?: number;
}

export interface IProps {
  overflowY: string;
  height: number;
}
