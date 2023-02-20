/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { StoryObj } from '@storybook/react';
import Template from '../Template';
import { StoryArgs } from '../StoryArgs';

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
      'useColorForLabel',
      'pillColorOn',
      'pillColorHoverOn',
      'thumbColorOn',
      'pillColorOff',
      'thumbColorOff',
      'thumbColorHoverOff',
    ],
  },
};
