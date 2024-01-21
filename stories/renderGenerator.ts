/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { useArgs, useEffect } from '@storybook/preview-api';
import {
  ComponentFrameworkMockGenerator,
  EnumPropertyMock,
  MetadataDB,
  MultiSelectOptionSetPropertyMock,
  ShkoOnline,
  StringPropertyMock,
  WholeNumberPropertyMock,
} from '@shko.online/componentframework-mock';

import type { IInputs, IOutputs } from '../MultiSwitch/generated/ManifestTypes';
import type { StoryArgs } from './StoryArgs';
import { MultiSwitch } from '../MultiSwitch';

const renderGenerator = () => {
  let container: HTMLDivElement | null;
  let mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs>;

  return function () {
    const [args, updateArgs] = useArgs<StoryArgs>();
    useEffect(
      () => () => {
        container = null;
        mockGenerator?.control.destroy();
      },
      [],
    );
    if (!container) {
      container = document.createElement('div');
      mockGenerator = new ComponentFrameworkMockGenerator(
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
        container,
      );

      const selectionMetadata = mockGenerator.metadata.getAttributeMetadata(
        MetadataDB.CanvasLogicalName,
        'selection',
      ) as ShkoOnline.PickListAttributeMetadata;

      args.selectionMetadata.forEach((option: { Value: number; Label: string; Color?: string | undefined }) => {
        selectionMetadata.OptionSet.Options[option.Value] = option;
      });

      mockGenerator.metadata.upsertAttributeMetadata(MetadataDB.CanvasLogicalName, selectionMetadata);

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
        staticChoices: args.staticChoices,
        banishedChoices: '',
        groupSize: 1,
        relatedChoices: [],
      });

      mockGenerator.onOutputChanged.callsFake(({ selection }) => {
        updateArgs({ selection });
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
  };
};

export default renderGenerator;
