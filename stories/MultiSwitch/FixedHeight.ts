/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { StoryObj } from '@storybook/html';
import type { StoryArgs } from '../StoryArgs';
import { getFromResource } from '../getFromResource';
import renderGenerator from '../renderGenerator';

export const FixedHeight: StoryObj<StoryArgs> = {
  render: renderGenerator(),
  args: {
    height: 100,
  },
  parameters: {
    controls: {
      include: [getFromResource('Height_Display_Key')],
    },
  },
};
