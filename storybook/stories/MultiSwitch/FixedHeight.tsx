/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import Template from '../Template';
import { StoryArgs } from '../StoryArgs';
import { StoryObj } from '@storybook/react';
import { getFromResource } from '../getFromResource';

export const FixedHeight = Template.bind({}) as StoryObj<StoryArgs>;
FixedHeight.args = {
  height: 100,
};

FixedHeight.parameters = {
  controls: {
    include: [getFromResource('Height_Display_Key')],
  },
};
