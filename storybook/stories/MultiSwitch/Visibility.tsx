/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import renderGenerator from '../renderGenerator';
import { StoryArgs } from '../StoryArgs';
import { StoryObj } from '@storybook/html';

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

