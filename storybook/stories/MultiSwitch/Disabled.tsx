/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import Template from '../Template';
import { StoryArgs } from '../StoryArgs';
import { StoryObj } from '@storybook/react';

export const Disabled = Template.bind({}) as StoryObj<StoryArgs>;

Disabled.args = {
  disabled: true,
  visible: true,
  selectedOptions: [],
};

Disabled.parameters = {
  controls: {
    include: ['disabled'],
  },
};
