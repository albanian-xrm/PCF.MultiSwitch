/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { Meta, StoryObj } from '@storybook/html';
import type { StoryArgs } from './StoryArgs';
import type { IInputs, IOutputs } from '../MultiSwitch/generated/ManifestTypes';

import { useArgs, useEffect } from '@storybook/preview-api';
import { argTypes } from './argTypes';
import '../MultiSwitch/app.css';
import { defaultArgs } from './defaultArgs';
import { Decorator } from './Decorator';
import {
  ComponentFrameworkMockOrchestrator,
  EnumPropertyMock,
  MetadataDB,
  MultiSelectOptionSetPropertyMock,
  ShkoOnline,
  StringPropertyMock,
  WholeNumberPropertyMock,
} from '@shko.online/componentframework-mock';

import { getFromResource } from './getFromResource';
import { MultiSwitch } from '../MultiSwitch';

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
  title: "AlbanianXrm's MultiSwitch/Related",
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

const renderGenerator = () => {
  let container: HTMLDivElement | null;
  let orchestrator: ComponentFrameworkMockOrchestrator<[IInputs, IOutputs, false, IInputs, IOutputs, false]>;

  return function () {
    useEffect(
      () => () => {
        container = null;
        orchestrator.mockGenerators.forEach((mockGenerator) => mockGenerator.control.destroy());
      },
      [],
    );
    const [args, updateArgs] = useArgs<StoryArgs>();
    if (!container) {
      container = document.createElement('div');
      container = document.createElement('div');

      const container1 = document.createElement('div');
      container1.style.maxWidth = '350px';
      container1.style.border = 'dotted 1px';
      container.appendChild(container1);
      const container2 = document.createElement('div');
      container.appendChild(container2);

      orchestrator = new ComponentFrameworkMockOrchestrator([
        [
          MultiSwitch,
          {
            selection: MultiSelectOptionSetPropertyMock,
            columns: WholeNumberPropertyMock,
            controlType: EnumPropertyMock,
            height: WholeNumberPropertyMock,
            orientation: EnumPropertyMock,
            pillColorHoverOn: StringPropertyMock,
            pillColorOff: StringPropertyMock,
            pillColorOn: StringPropertyMock,
            thumbColorHoverOff: StringPropertyMock,
            thumbColorOff: StringPropertyMock,
            thumbColorOn: StringPropertyMock,
            useColorForLabel: EnumPropertyMock,
            staticChoices: StringPropertyMock,
            banishedChoices: StringPropertyMock,
            groupSize: WholeNumberPropertyMock,
            relatedChoices: MultiSelectOptionSetPropertyMock,
          },
          container1,
        ],
        [
          MultiSwitch,
          {
            selection: MultiSelectOptionSetPropertyMock,
            columns: WholeNumberPropertyMock,
            controlType: EnumPropertyMock,
            height: WholeNumberPropertyMock,
            orientation: EnumPropertyMock,
            pillColorHoverOn: StringPropertyMock,
            pillColorOff: StringPropertyMock,
            pillColorOn: StringPropertyMock,
            thumbColorHoverOff: StringPropertyMock,
            thumbColorOff: StringPropertyMock,
            thumbColorOn: StringPropertyMock,
            useColorForLabel: EnumPropertyMock,
            staticChoices: StringPropertyMock,
            banishedChoices: StringPropertyMock,
            groupSize: WholeNumberPropertyMock,
            relatedChoices: MultiSelectOptionSetPropertyMock,
          },
          container2,
        ],
      ]);

      const relatedChoicesMetadata = orchestrator.db.getAttributeMetadata(
        MetadataDB.CanvasLogicalName,
        'relatedChoices',
      ) as ShkoOnline.PickListAttributeMetadata;

      const relatedChoicesMetadata2 = orchestrator.db.getAttributeMetadata(
        MetadataDB.CanvasLogicalName,
        'relatedChoices',
      ) as ShkoOnline.PickListAttributeMetadata;

      relatedChoicesMetadata2.LogicalName = 'relatedChoices2';
      relatedChoicesMetadata2.SchemaName = 'relatedChoices2';
      relatedChoicesMetadata2.MetadataId = '';
      relatedChoicesMetadata2.OptionSet.MetadataId = '';

      orchestrator.db.upsertAttributeMetadata(MetadataDB.CanvasLogicalName, relatedChoicesMetadata2);

      const selectionMetadata = orchestrator.db.getAttributeMetadata(
        MetadataDB.CanvasLogicalName,
        'selection',
      ) as ShkoOnline.PickListAttributeMetadata;

      args.relatedChoicesMetadata.forEach((option: { Value: number; Label: string; Color?: string | undefined }) => {
        relatedChoicesMetadata.OptionSet.Options[option.Value] = option;
      });

      orchestrator.db.upsertAttributeMetadata(MetadataDB.CanvasLogicalName, relatedChoicesMetadata);

      args.selectionMetadata.forEach((option: { Value: number; Label: string; Color?: string | undefined }) => {
        selectionMetadata.OptionSet.Options[option.Value] = option;
      });

      orchestrator.db.upsertAttributeMetadata(MetadataDB.CanvasLogicalName, selectionMetadata);

      orchestrator.mockGenerators[0].context._parameters.relatedChoices._Bind(
        MetadataDB.CanvasLogicalName,
        'relatedChoices2',
      );

      orchestrator.mockGenerators[0].context._parameters.selection._Bind(
        MetadataDB.CanvasLogicalName,
        'relatedChoices',
      );

      orchestrator.mockGenerators[0].context.mode.isControlDisabled = args.isDisabled;
      orchestrator.mockGenerators[0].context.mode.isVisible = args.isVisible;
      orchestrator.mockGenerators[1].context.mode.isControlDisabled = args.isDisabled;
      orchestrator.mockGenerators[1].context.mode.isVisible = args.isVisible;

      orchestrator.mockGenerators[0].context._SetCanvasItems({
        selection: args.relatedChoices || undefined,
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
        groupSize: 1,
        relatedChoices: undefined,
      });

      orchestrator.mockGenerators[0].onOutputChanged.callsFake(({ selection }) => {
        updateArgs({ relatedChoices: selection });
      });

      orchestrator.mockGenerators[1].onOutputChanged.callsFake(({ selection }) => {
        updateArgs({ selection });
      });

      orchestrator.mockGenerators[0].ExecuteInit();
      orchestrator.mockGenerators[1].ExecuteInit();
    }

    if (orchestrator) {
      orchestrator.mockGenerators[1].context.mode.isVisible = args.isVisible;
      orchestrator.mockGenerators[1].context.mode.isControlDisabled = args.isDisabled;
      orchestrator.mockGenerators[1].context._parameters.columns._SetValue(args.columns);
      orchestrator.mockGenerators[1].context._parameters.controlType._SetValue(args.controlType);
      orchestrator.mockGenerators[1].context._parameters.height._SetValue(args.height);
      orchestrator.mockGenerators[1].context._parameters.orientation._SetValue(args.orientation);
      orchestrator.mockGenerators[1].context._parameters.pillColorHoverOn._SetValue(args.pillColorHoverOn);
      orchestrator.mockGenerators[1].context._parameters.pillColorOff._SetValue(args.pillColorOff);
      orchestrator.mockGenerators[1].context._parameters.pillColorOn._SetValue(args.pillColorOn);
      orchestrator.mockGenerators[1].context._parameters.selection._SetValue(args.selection);
      orchestrator.mockGenerators[1].context._parameters.thumbColorHoverOff._SetValue(args.thumbColorHoverOff);
      orchestrator.mockGenerators[1].context._parameters.thumbColorOff._SetValue(args.thumbColorOff);
      orchestrator.mockGenerators[1].context._parameters.thumbColorOn._SetValue(args.thumbColorOn);
      orchestrator.mockGenerators[1].context._parameters.useColorForLabel._SetValue(args.useColorForLabel);
      orchestrator.mockGenerators[1].context._parameters.staticChoices._SetValue(args.staticChoices);
      orchestrator.mockGenerators[1].context._parameters.banishedChoices._SetValue(args.banishedChoices);
      orchestrator.mockGenerators[1].context._parameters.groupSize._SetValue(args.groupSize);
      orchestrator.mockGenerators[1].context._parameters.relatedChoices._SetValue(args.relatedChoices);

      orchestrator.mockGenerators[0].ExecuteUpdateView();
      orchestrator.mockGenerators[1].ExecuteUpdateView();
    }

    return container;
  };
};

export const Related = {
  render: renderGenerator(),
  args: {
    selectionMetadata,
    relatedChoicesMetadata,
    groupSize: 3,
    relatedChoices: [100001000],
    banishedChoices: '100002003,100002009',
    staticChoices: '',
  },
  parameters: { controls: { expanded: true } },
} as StoryObj<StoryArgs>;
