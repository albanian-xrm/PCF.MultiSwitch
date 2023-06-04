/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { StoryArgs } from '../StoryArgs';
import { StoryObj } from '@storybook/html';
import { getFromResource } from '../getFromResource';
import renderGenerator from 'stories/renderGenerator';

export const Orientation: StoryObj<StoryArgs> = {
  render: renderGenerator(),
  args: {
    orientation: '0',
    columns: 5,
  },
  parameters: {
    controls: {
      include: [getFromResource('Orientation_Display_Key'), getFromResource('Columns_Display_Key')],
    },
  },
};

