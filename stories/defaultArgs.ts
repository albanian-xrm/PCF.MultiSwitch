/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { StoryArgs } from './StoryArgs';

import {
  FIFTH_OPTION,
  FIRST_OPTION,
  FOURTH_OPTION,
  EIGHTH_OPTION,
  ELEVENTH_OPTION,
  NINTH_OPTION,
  TENTH_OPTION,
  SECOND_OPTION,
  SEVENTH_OPTION,
  SIXTH_OPTION,
  THIRD_OPTION,
} from './MultiSwitch/Constants';

export const defaultArgs: Partial<StoryArgs> = {
  isVisible: true,
  isDisabled: false,
  height: 0,
  controlType: '0',
  orientation: '0',
  pillColorHoverOn: null,
  pillColorOff: null,
  pillColorOn: null,
  thumbColorHoverOff: null,
  thumbColorOff: null,
  thumbColorOn: null,
  useColorForLabel: 'No',
  columns: 1,
  selectionMetadata: [
    { Value: 0, Label: FIRST_OPTION, Color: '#dd0000' },
    { Value: 1, Label: SECOND_OPTION, Color: '#dd0000' },
    { Value: 2, Label: THIRD_OPTION, Color: '#dddd00' },
    { Value: 4, Label: FOURTH_OPTION, Color: '#dddd00' },
    { Value: 5, Label: FIFTH_OPTION, Color: '#dddddd' },
    { Value: 6, Label: SIXTH_OPTION, Color: '#dddddd' },
    { Value: 7, Label: SEVENTH_OPTION, Color: '#dddddd' },
    { Value: 8, Label: EIGHTH_OPTION, Color: '#dddddd' },
    { Value: 9, Label: NINTH_OPTION, Color: '#dddddd' },
    { Value: 10, Label: TENTH_OPTION, Color: '#dddddd' },
    { Value: 11, Label: ELEVENTH_OPTION, Color: '#dddddd' },
  ],
  selection: [],
};
