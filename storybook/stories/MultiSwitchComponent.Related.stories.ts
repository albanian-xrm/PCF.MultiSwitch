/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { Meta, StoryObj } from '@storybook/html';
import type { StoryArgs } from './StoryArgs';
import type { IInputs, IOutputs } from '../../pcf/MultiSwitch/generated/ManifestTypes';

import { useArgs } from '@storybook/client-api';
import { argTypes } from './argTypes';
import '../../pcf/MultiSwitch/app.css';
import { defaultArgs } from './defaultArgs';
import { Decorator } from './Decorator';
import {
  ComponentFrameworkMockGenerator,
  EnumPropertyMock,
  MultiSelectOptionSetPropertyMock,
  NumberPropertyMock,
  ShkoOnline,
  StringPropertyMock,
  WholeNumberPropertyMock,
} from '@shko.online/componentframework-mock';

import { getFromResource } from './getFromResource';
import { MultiSwitch } from '../../pcf/MultiSwitch';

const selectionMetadata: ComponentFramework.PropertyHelper.OptionMetadata[] = [
  { Color: '', Label: 'Mutant', Value: 100001000 },
  { Color: '', Label: 'Avenger', Value: 100001001 },
  { Color: '', Label: 'Sorcerer', Value: 100001002 },
  { Color: '', Label: 'Kryptonian', Value: 100002000 },
  { Color: '', Label: 'Amazon', Value: 100002001 },
  { Color: '', Label: 'Bat-Family', Value: 100002002 },
  { Color: '', Label: 'Speedster', Value: 100002003 },
  { Color: '', Label: 'Psiot', Value: 100003009 },
  { Color: '', Label: 'Eternal Warrior', Value: 100003010 },
  { Color: '', Label: 'Bloodshot', Value: 100003011 },
];

const relatedChoicesMetadata: ComponentFramework.PropertyHelper.OptionMetadata[] = [
  { Color: '', Label: 'Marvel Universe', Value: 100001000 },
  { Color: '', Label: 'DC Comics Universe', Value: 100002000 },
  { Color: '', Label: 'Valiant Universe', Value: 100003000 },
];

export default {
  title: 'AlbanianXrm\'s MultiSwitch/Related',
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ...argTypes,
    relatedChoices: {
      name: getFromResource('RelatedChoices_Display_Key'),
      description: getFromResource('RelatedChoices_Desc_Key'),
      options: relatedChoicesMetadata.map((o) => o.Value),
      control: {
        type: 'multi-select',
        labels: relatedChoicesMetadata.reduce((a, v) => ({ ...a, [v.Value]: v.Label }), {}),
      },
      table: {
        category: 'Parameters',
      },
    },
    selection: {
      name: getFromResource('Property_Display_Key'),
      description: getFromResource('Property_Desc_Key'),
      options: selectionMetadata.map((o) => o.Value),
      control: {
        type: 'multi-select',
        labels: selectionMetadata.reduce((a, v) => ({ ...a, [v.Value]: v.Label }), {}),
      },
      table: {
        category: 'Parameters',
      },
    },
    groupSize: {
      name: getFromResource('GroupSize_Display_Key'),
      description: getFromResource('GroupSize_Desc_Key'),
      control: 'number',
      table: {
        category: 'Parameters',
      },
    },
    staticChoices: {
      name: getFromResource('StaticChoices_Display_Key'),
      description: getFromResource('StaticChoices_Desc_Key'),
      control: 'text',
      table: {
        category: 'Parameters',
      },
    },
    banishedChoices: {
      name: getFromResource('BanishedChoices_Display_Key'),
      description: getFromResource('BanishedChoices_Desc_Key'),
      control: 'text',
      table: {
        category: 'Parameters',
      },
    },
    relatedChoicesMetadata: {
      name: getFromResource('RelatedChoices_Display_Key'),
      description: getFromResource('RelatedChoices_Desc_Key'),
      control: {
        type: 'object',
      },
      table: {
        category: 'Parameters',
        subcategory: 'Metadata',
      },
    },
  },
  args: {
    relatedChoices: [],
    ...defaultArgs,
  },
  decorators: [Decorator],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
    backgrounds: {
      values: [{ name: 'white', value: '#fff' }],
    },
  },
} as Meta<StoryArgs>;

const renderGenerator = ()=>{
  let container: HTMLDivElement;
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;

  return function () {
    const [args, updateArgs] = useArgs<StoryArgs>();
    if (!container) {
      container = document.createElement('div');
      mockGenerator = new ComponentFrameworkMockGenerator(
        MultiSwitch,
        {
          selection: MultiSelectOptionSetPropertyMock,
          columns: NumberPropertyMock,
          controlType: EnumPropertyMock<'0' | '1'>,
          height: NumberPropertyMock,
          orientation: EnumPropertyMock<'0' | '1'>,
          pillColorHoverOn: StringPropertyMock,
          pillColorOff: StringPropertyMock,
          pillColorOn: StringPropertyMock,
          thumbColorHoverOff: StringPropertyMock,
          thumbColorOff: StringPropertyMock,
          thumbColorOn: StringPropertyMock,
          useColorForLabel: EnumPropertyMock<'Yes' | 'No'>,
          staticChoices: StringPropertyMock,
          banishedChoices: StringPropertyMock,
          groupSize: WholeNumberPropertyMock,
          relatedChoices: MultiSelectOptionSetPropertyMock,
        },
        container,
      );
  
      const relatedChoicesMetadata = mockGenerator.metadata.getAttributeMetadata(
        '!CanvasApp',
        'relatedChoices',
      ) as ShkoOnline.PickListAttributeMetadata;
  
      const selectionMetadata = mockGenerator.metadata.getAttributeMetadata(
        '!CanvasApp',
        'selection',
      ) as ShkoOnline.PickListAttributeMetadata;
  
      relatedChoicesMetadata.OptionSet = {
        IsCustomOptionSet: true,
        MetadataId: '',
        Name: 'optionset',
        OptionSetType: 11,
        Options: {},
      };
  
      selectionMetadata.OptionSet = { ...relatedChoicesMetadata.OptionSet };
      selectionMetadata.OptionSet.Options = {};
  
      args.relatedChoicesMetadata.forEach((option: { Value: number; Label: string; Color?: string | undefined }) => {
        relatedChoicesMetadata.OptionSet.Options[option.Value] = option;
      });
  
      mockGenerator.metadata.upsertAttributeMetadata('!CanvasApp', relatedChoicesMetadata);
  
      console.log(selectionMetadata);
      args.selectionMetadata.forEach((option: { Value: number; Label: string; Color?: string | undefined }) => {
        selectionMetadata.OptionSet.Options[option.Value] = option;
      });
  
      mockGenerator.metadata.upsertAttributeMetadata('!CanvasApp', selectionMetadata);
  
      mockGenerator.context.mode.isControlDisabled = args.isDisabled;
      mockGenerator.context.mode.isVisible = args.isVisible;
      mockGenerator.context._SetCanvasItems({
        selection: args.selection || undefined,
        height: args.height,
        columns: args.columns,
        controlType: args.controlType,
        orientation: args.orientation,
        pillColorOn: args.pillColorOn || undefined,
        thumbColorOn: args.thumbColorOn || undefined,
        pillColorHoverOn: args.pillColorHoverOn || undefined,
        pillColorOff: args.pillColorOff || undefined,
        thumbColorOff: args.thumbColorOff || undefined,
        thumbColorHoverOff: args.thumbColorHoverOff || undefined,
        useColorForLabel: args.useColorForLabel || undefined,
        banishedChoices: '',
        staticChoices: '',
        groupSize: 1,
        relatedChoices: args.relatedChoices,
      });
  
      mockGenerator.onOutputChanged.callsFake(() => {
        mockGenerator.context._parameters.selection._Refresh();
        updateArgs({ selection: mockGenerator.context._parameters.selection.raw });
      });
  
      mockGenerator.ExecuteInit();
    }

    if (mockGenerator) {
      mockGenerator.context.mode.isVisible = args.isVisible;
      mockGenerator.context.mode.isControlDisabled = args.isDisabled;
      mockGenerator.context._parameters.columns._SetValue(args.columns);
      mockGenerator.context._parameters.controlType._SetValue(args.controlType);
      mockGenerator.context._parameters.height._SetValue(args.height);
      mockGenerator.context._parameters.orientation._SetValue(args.orientation);
      mockGenerator.context._parameters.pillColorHoverOn._SetValue(args.pillColorHoverOn);
      mockGenerator.context._parameters.pillColorOff._SetValue(args.pillColorOff);
      mockGenerator.context._parameters.pillColorOn._SetValue(args.pillColorOn);
      mockGenerator.context._parameters.selection._SetValue(args.selection);
      mockGenerator.context._parameters.thumbColorHoverOff._SetValue(args.thumbColorHoverOff);
      mockGenerator.context._parameters.thumbColorOff._SetValue(args.thumbColorOff);
      mockGenerator.context._parameters.thumbColorOn._SetValue(args.thumbColorOn);
      mockGenerator.context._parameters.useColorForLabel._SetValue(args.useColorForLabel);
      mockGenerator.context._parameters.staticChoices._SetValue(args.staticChoices);
      mockGenerator.context._parameters.banishedChoices._SetValue(args.banishedChoices);
      mockGenerator.context._parameters.groupSize._SetValue(args.groupSize);
      mockGenerator.context._parameters.relatedChoices._SetValue(args.relatedChoices);
  
      mockGenerator.ExecuteUpdateView();
    }

    return container;
  }

}

export const Related = {
  render: renderGenerator(),
  args : {
    selectionMetadata,
    relatedChoicesMetadata,
    groupSize: 3,
    relatedChoices: [100001000],
    banishedChoices: '100002003,100002009',
    staticChoices: ''
  },
  parameters : { controls: { expanded: true } }
} as StoryObj<StoryArgs>;
