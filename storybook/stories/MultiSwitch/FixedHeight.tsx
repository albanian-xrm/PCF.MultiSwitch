/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { StoryArgs } from '../StoryArgs';
import { StoryObj } from '@storybook/html';
import { getFromResource } from '../getFromResource';
import renderGenerator from 'stories/renderGenerator';

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

