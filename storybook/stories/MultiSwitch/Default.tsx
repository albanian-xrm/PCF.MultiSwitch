/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { StoryObj } from '@storybook/html';
import { StoryArgs } from '../StoryArgs';
import { getFromResource } from '../getFromResource';
import renderGenerator from 'stories/renderGenerator';

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

