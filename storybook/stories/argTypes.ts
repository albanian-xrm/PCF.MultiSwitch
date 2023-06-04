/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { ArgTypes } from '@storybook/html';
import { getFromResource } from './getFromResource';
import { StoryArgs } from './StoryArgs';

export const argTypes: Partial<ArgTypes<StoryArgs>> = {
  isDisabled: {
    name: 'Disabled',
    control: 'boolean',
    table: {
      category: 'Mode',
      defaultValue: { summary: 'false' },
    },
  },
  isVisible: {
    name: 'Visible',
    control: 'boolean',
    table: {
      category: 'Mode',
      defaultValue: { summary: 'true' },
    },
  },
  height: {
    name: getFromResource('Height_Display_Key'),
    description: getFromResource('Height_Desc_Key'),
    control: 'number',
    table: {
      category: 'Parameters',
      defaultValue: { summary: 'true' },
    },
  },
  columns: {
    name: getFromResource('Columns_Display_Key'),
    description: getFromResource('Columns_Desc_Key'),
    control: 'number',
    table: {
      category: 'Parameters',
    },
  },
  controlType: {
    name: getFromResource('ControlType_Display_Key'),
    description: getFromResource('ControlType_Desc_Key'),
    options: ['0', '1'],
    control: {
      type: 'select',
      labels: {
        '0': 'Switches',
        '1': 'Checkboxes',
      },
    },
    table: {
      category: 'Parameters',
      defaultValue: { summary: 'Switches' },
    },
  },
  orientation: {
    name: getFromResource('Orientation_Display_Key'),
    description: getFromResource('Orientation_Desc_Key'),
    options: ['0', '1'],
    control: {
      type: 'select',
      labels: {
        '0': 'Vertical',
        '1': 'Horizontal',
      },
    },
    table: {
      category: 'Parameters',
      defaultValue: { summary: 'Vertical' },
    },
  },
  useColorForLabel: {
    name: getFromResource('UseColorForLabel_Display_Key'),
    description: getFromResource('UseColorForLabel_Desc_Key'),
    options: ['Yes', 'No'],
    control: {
      type: 'select',
    },
    table: {
      category: 'Parameters',
      defaultValue: { summary: 'No' },
    },
  },
  pillColorOn: {
    name: getFromResource('PillColorOn_Display_Key'),
    description: getFromResource('PillColorOn_Desc_Key'),
    control: { type: 'color' },
    table: {
      category: 'Parameters',
    },
  },
  pillColorOff: {
    name: getFromResource('PillColorOff_Display_Key'),
    description: getFromResource('PillColorOff_Desc_Key'),
    control: { type: 'color' },
    table: {
      category: 'Parameters',
    },
  },
  pillColorHoverOn: {
    name: getFromResource('PillColorHoverOn_Display_Key'),
    description: getFromResource('PillColorHoverOn_Desc_Key'),
    control: { type: 'color' },
    table: {
      category: 'Parameters',
    },
  },
  thumbColorOn: {
    name: getFromResource('ThumbColorOn_Display_Key'),
    description: getFromResource('ThumbColorOn_Desc_Key'),
    control: { type: 'color' },
    table: {
      category: 'Parameters',
    },
  },
  thumbColorOff: {
    name: getFromResource('ThumbColorOff_Display_Key'),
    description: getFromResource('ThumbColorOff_Desc_Key'),
    control: { type: 'color' },
    table: {
      category: 'Parameters',
    },
  },
  thumbColorHoverOff: {
    name: getFromResource('ThumbColorHoverOff_Display_Key'),
    description: getFromResource('ThumbColorHoverOff_Desc_Key'),
    control: { type: 'color' },
    table: {
      category: 'Parameters',
    },
  },
  selection: {
    name: getFromResource('Property_Display_Key'),
    description: getFromResource('Property_Desc_Key'),
    control: 'object',
    table: {
      category: 'Parameters',
    },
  },
  selectionMetadata: {
    name: getFromResource('Property_Display_Key'),
    description: getFromResource('Property_Desc_Key'),
    control: 'object',
    table: {
      category: 'Parameters',
      subcategory: 'Metadata',
    },
  },
};
