/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import Template from '../Template';
import { StoryArgs } from '../StoryArgs';
import { StoryObj } from '@storybook/react';

export const Visibility = Template.bind({}) as StoryObj<StoryArgs>;
Visibility.args = {
  isDisabled: false,
  isVisible: true,
  selection: [],
};

Visibility.parameters = {
  controls: {
    include: ['Visible'],
  },
};
