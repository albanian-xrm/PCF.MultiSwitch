/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { StoryObj } from '@storybook/html';
import type { StoryArgs } from '../StoryArgs';
import { getFromResource } from '../getFromResource';
import renderGenerator from '../renderGenerator';

export const Default = {
  render: renderGenerator(),
  parameters: {
    controls: {
      include: [
        getFromResource('Property_Display_Key'),
        getFromResource('ControlType_Display_Key'),
        getFromResource('Orientation_Display_Key'),
      ],
    },
  },
} as StoryObj<StoryArgs>;
