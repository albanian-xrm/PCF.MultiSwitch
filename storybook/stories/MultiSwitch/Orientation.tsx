/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import Template from '../Template';
import { StoryArgs } from '../StoryArgs';
import { StoryObj } from '@storybook/react';

export const Orientation = Template.bind({}) as StoryObj<StoryArgs>;
Orientation.args = {
  orientation: '0',
  columns: 5,
};

Orientation.parameters = {
  controls: {
    include: ['orientation', 'columns'],
  },
};
