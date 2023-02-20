/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import React from 'react';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useArgs } from '@storybook/client-api';
import {
  ComponentFrameworkMockGenerator,
  EnumPropertyMock,
  MultiSelectOptionSetPropertyMock,
  NumberPropertyMock,
  ShkoOnline,
  StringPropertyMock,
} from '@shko.online/componentframework-mock';

import type { IInputs, IOutputs } from '@albanian-xrm/multi-switch/MultiSwitch/generated/ManifestTypes';
import type { StoryFn } from '@storybook/react';
import type { StoryArgs } from './StoryArgs';
import { MultiSwitch } from '@albanian-xrm/multi-switch/MultiSwitch/index';

const Template: StoryFn<StoryArgs> = ({}) => {
  const [args, updateArgs] = useArgs<StoryArgs>();
  const container = useRef<HTMLDivElement>(null);
  const [, setLoaded] = useState<boolean>(false);

  const mockGenerator = useMemo(() => {
    if (container.current === null) return;
    const innerContainer = document.createElement('div');
    container.current.appendChild(innerContainer);

    const mockGenerator: ComponentFrameworkMockGenerator<IInputs, IOutputs> = new ComponentFrameworkMockGenerator(
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
      },
      innerContainer,
    );

    var selectionMetadata = mockGenerator.metadata.getAttributeMetadata(
      '!CanvasApp',
      'selection',
    ) as ShkoOnline.PickListAttributeMetadata;

    selectionMetadata.OptionSet = {
      IsCustomOptionSet: true,
      MetadataId: '',
      Name: 'optionset',
      OptionSetType: 11,
      Options: {},
    };

    args.options.forEach((option: { Value: number; Label: string; Color?: string | undefined }) => {
      selectionMetadata.OptionSet.Options[option.Value] = option;
    });

    mockGenerator.metadata.upsertAttributeMetadata('!CanvasApp', selectionMetadata);
    mockGenerator.context.mode.isControlDisabled = args.disabled;
    mockGenerator.context.mode.isVisible = args.visible;
    mockGenerator.context._SetCanvasItems({
      selection: args.selectedOptions || undefined,
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
    });

    mockGenerator.onOutputChanged.callsFake(() => {
      mockGenerator.context._parameters.selection._Refresh();
      updateArgs({ selectedOptions: mockGenerator.context._parameters.selection.raw });
    });

    mockGenerator.ExecuteInit();
    return mockGenerator;
  }, [container.current]);

  if (mockGenerator) {
    mockGenerator.context.mode.isVisible = args.visible;
    mockGenerator.context.mode.isControlDisabled = args.disabled;
    mockGenerator.context._parameters.columns._SetValue(args.columns);
    mockGenerator.context._parameters.controlType._SetValue(args.controlType);
    mockGenerator.context._parameters.height._SetValue(args.height);
    mockGenerator.context._parameters.orientation._SetValue(args.orientation);
    mockGenerator.context._parameters.pillColorHoverOn._SetValue(args.pillColorHoverOn);
    mockGenerator.context._parameters.pillColorOff._SetValue(args.pillColorOff);
    mockGenerator.context._parameters.pillColorOn._SetValue(args.pillColorOn);
    mockGenerator.context._parameters.selection._SetValue(args.selectedOptions);
    mockGenerator.context._parameters.thumbColorHoverOff._SetValue(args.thumbColorHoverOff);
    mockGenerator.context._parameters.thumbColorOff._SetValue(args.thumbColorOff);
    mockGenerator.context._parameters.thumbColorOn._SetValue(args.thumbColorOn);
    mockGenerator.context._parameters.useColorForLabel._SetValue(args.useColorForLabel);
    mockGenerator.ExecuteUpdateView();
  }

  useEffect(() => {
    setLoaded(true);
  }, [container.current]);
  return <div ref={container}></div>;
};

export default Template;
