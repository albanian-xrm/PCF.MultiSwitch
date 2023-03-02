/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

export interface StoryArgs {
  selectionMetadata: ComponentFramework.PropertyHelper.OptionMetadata[];
  isVisible: boolean;
  isDisabled: boolean;
  selection: number[] | null;
  columns: number;
  controlType: '0' | '1';
  height: number;
  orientation: '0' | '1';
  pillColorHoverOn: string | null;
  pillColorOff: string | null;
  pillColorOn: string | null;
  thumbColorHoverOff: string | null;
  thumbColorOff: string | null;
  thumbColorOn: string | null;
  useColorForLabel: 'Yes' | 'No';
  banishedChoices: string;
  groupSize: number;
  relatedChoices: number[];
  relatedChoicesMetadata: ComponentFramework.PropertyHelper.OptionMetadata[];
}
