/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { useArgs } from '@storybook/client-api';
import {
  ComponentFrameworkMockGenerator,
  EnumPropertyMock,
  MultiSelectOptionSetPropertyMock,
  NumberPropertyMock,
  ShkoOnline,
  StringPropertyMock,
  WholeNumberPropertyMock,
} from '@shko.online/componentframework-mock';

import type { IInputs, IOutputs } from '@albanian-xrm/multi-switch/MultiSwitch/generated/ManifestTypes';
import type { StoryArgs } from './StoryArgs';
import { MultiSwitch } from '@albanian-xrm/multi-switch/MultiSwitch/index';

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

      relatedChoicesMetadata.OptionSet = {
        IsCustomOptionSet: true,
        MetadataId: '',
        Name: 'optionset',
        OptionSetType: 11,
        Options: {},
      };

      mockGenerator.metadata.upsertAttributeMetadata('!CanvasApp', relatedChoicesMetadata);

      const selectionMetadata = mockGenerator.metadata.getAttributeMetadata(
        '!CanvasApp',
        'selection',
      ) as ShkoOnline.PickListAttributeMetadata;

      selectionMetadata.OptionSet = { ...relatedChoicesMetadata.OptionSet };

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
        /*staticChoices: '',*/
        banishedChoices: '',
        groupSize: 1,
        relatedChoices: [],
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
      mockGenerator.context._parameters.banishedChoices._SetValue(args.banishedChoices);
      mockGenerator.context._parameters.groupSize._SetValue(args.groupSize);
      mockGenerator.context._parameters.relatedChoices._SetValue(args.relatedChoices);

      mockGenerator.ExecuteUpdateView();
    }

    return container;
  }

}

export default renderGenerator;
