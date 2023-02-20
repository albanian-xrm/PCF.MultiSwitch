/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { ArgTypes } from '@storybook/react';
import { StoryArgs } from './StoryArgs';

export const argTypes: Partial<ArgTypes<StoryArgs>> = {
  controlType: {
    description: 'Using this property you can choose Switches or Checkboxes',
    options: ['0', '1'],
    control: {
      type: 'select',
      labels: {
        '0': 'Switches',
        '1': 'Checkboxes',
      },
    },
    table: {
      defaultValue: { summary: 'Switches' },
    },
  },
  orientation: {
    description: 'Specifies if choices will be positioned vertically or horizontally.',
    options: ['0', '1'],
    control: {
      type: 'select',
      labels: {
        '0': 'Vertical',
        '1': 'Horizontal',
      },
    },
    table: {
      defaultValue: { summary: 'Vertical' },
    },
  },
  pillColorOn: {
    control: { type: 'color' },
  },
  pillColorOff: {
    control: { type: 'color' },
  },
  pillColorHoverOn: {
    control: { type: 'color' },
  },
  thumbColorOn: {
    control: { type: 'color' },
  },
  thumbColorOff: {
    control: { type: 'color' },
  },
  thumbColorHoverOff: {
    control: { type: 'color' },
  },
  selectedOptions: {
    control: 'object',
  },
};
