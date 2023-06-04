/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { StoryObj } from '@storybook/html';
import type { StoryArgs } from '../StoryArgs';
import { getFromResource } from '../getFromResource';
import renderGenerator from 'stories/renderGenerator';

export const OptionsGroup: StoryObj<StoryArgs> = {
  render: renderGenerator(),
  args: {
    columns: 2,
  },
  parameters: {
    controls: {
      include: [getFromResource('Columns_Display_Key')],
    },
  },
};

