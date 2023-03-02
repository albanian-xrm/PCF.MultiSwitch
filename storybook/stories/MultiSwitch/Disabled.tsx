/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import Template from '../Template';
import { StoryArgs } from '../StoryArgs';
import { StoryObj } from '@storybook/react';

export const Disabled = Template.bind({}) as StoryObj<StoryArgs>;

Disabled.args = {
  isDisabled: true,
  isVisible: true,
  selection: [],
};

Disabled.parameters = {
  controls: {
    include: ['Disabled'],
  },
};
