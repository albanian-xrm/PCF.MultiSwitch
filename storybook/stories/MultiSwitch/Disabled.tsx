/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import renderGenerator from 'stories/renderGenerator';
import { StoryArgs } from '../StoryArgs';
import { StoryObj } from '@storybook/html';

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

