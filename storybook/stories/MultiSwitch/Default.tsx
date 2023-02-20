/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { StoryObj } from '@storybook/react';
import Template from '../Template';
import { StoryArgs } from '../StoryArgs';

export const Default = Template.bind({}) as StoryObj<StoryArgs>;

Default.parameters = {
  controls: {
    include: ['selectedOptions', 'controlType', 'orientation'],
  },
};
