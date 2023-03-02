/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { StoryObj } from '@storybook/react';
import Template from '../Template';
import { StoryArgs } from '../StoryArgs';
import { getFromResource } from '../getFromResource';

export const Default = Template.bind({}) as StoryObj<StoryArgs>;

Default.parameters = {
  controls: {
    include: [
      getFromResource('Property_Display_Key'),
      getFromResource('ControlType_Display_Key'),
      getFromResource('Orientation_Display_Key'),
    ],
  },
};
