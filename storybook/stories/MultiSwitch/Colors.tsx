/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { StoryObj } from '@storybook/html';
import { StoryArgs } from '../StoryArgs';
import { getFromResource } from '../getFromResource';
import renderGenerator from 'stories/renderGenerator';

export const Colors: StoryObj<StoryArgs> = {
  render: renderGenerator(),
  args: {
    useColorForLabel: 'No',
    pillColorOn: undefined,
    thumbColorOn: undefined,
    pillColorHoverOn: undefined,
    pillColorOff: undefined,
    thumbColorOff: undefined,
    thumbColorHoverOff: undefined,
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

