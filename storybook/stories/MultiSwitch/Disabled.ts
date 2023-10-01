/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { StoryObj } from '@storybook/html';
import type { StoryArgs } from '../StoryArgs';
import renderGenerator from '../renderGenerator';

export const Disabled: StoryObj<StoryArgs> = {
  render: renderGenerator(),
  args: {
    isDisabled: true,
    isVisible: true,
    selection: [],
  },
  parameters: {
    controls: {
      include: ['Disabled'],
    },
  },
};

