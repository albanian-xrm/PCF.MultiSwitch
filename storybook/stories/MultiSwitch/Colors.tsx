/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { StoryObj } from '@storybook/react';
import Template from '../Template';
import { StoryArgs } from '../StoryArgs';
import { getFromResource } from '../getFromResource';

export const Colors = Template.bind({}) as StoryObj<StoryArgs>;
Colors.args = {
  useColorForLabel: 'No',
  pillColorOn: undefined,
  thumbColorOn: undefined,
  pillColorHoverOn: undefined,
  pillColorOff: undefined,
  thumbColorOff: undefined,
  thumbColorHoverOff: undefined,
};

Colors.parameters = {
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
};
