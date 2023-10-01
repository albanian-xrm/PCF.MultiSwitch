/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { StoryObj } from '@storybook/html';
import type { StoryArgs } from '../StoryArgs';
import renderGenerator from '../renderGenerator';

export const Visibility: StoryObj<StoryArgs> = {
  render: renderGenerator(),
  args: {
    isDisabled: false,
    isVisible: true,
    selection: [],
  },
  parameters: {
    controls: {
      include: ['Visible'],
    },
  },
};

