/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { StoryObj } from '@storybook/html';
import type { StoryArgs } from '../StoryArgs';
import { getFromResource } from '../getFromResource';
import renderGenerator from '../renderGenerator';

export const Colors: StoryObj<StoryArgs> = {
  render: renderGenerator(),
  args: {
    useColorForLabel: 'No',
    pillColorOn: '#d72626',
    thumbColorOn: '#3b1a1a',
    pillColorHoverOn: '#c93535',
    pillColorOff: '#d35e5e',
    thumbColorOff: '#b01414',
    thumbColorHoverOff: '#fdfdfd',
  },
  parameters: {
    controls: {
      include: [
        getFromResource('UseColorForLabel_Display_Key'),
        getFromResource('PillColorOn_Display_Key'),
        getFromResource('PillColorHoverOn_Display_Key'),
        getFromResource('ThumbColorOn_Display_Key'),
        getFromResource('PillColorOff_Display_Key'),
        getFromResource('ThumbColorOff_Display_Key'),
        getFromResource('ThumbColorHoverOff_Display_Key'),
      ],
    },
  },
};

