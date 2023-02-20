/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import Template from '../Template';
import { StoryArgs } from '../StoryArgs';
import { StoryObj } from '@storybook/react';

export const OptionsGroup = Template.bind({}) as StoryObj<StoryArgs>;
OptionsGroup.args = {
  columns: 2,
};

OptionsGroup.parameters = {
  controls: {
    include: ['columns'],
  },
};
