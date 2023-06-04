/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import { Meta } from '@storybook/html';

import { StoryArgs } from './StoryArgs';
import '@albanian-xrm/multi-switch/MultiSwitch/app.css';
import { defaultArgs } from './defaultArgs';
import { argTypes } from './argTypes';
import { Decorator } from './Decorator';
import {
  ComponentFrameworkMockGenerator,
} from '@shko.online/componentframework-mock';
import { IInputs, IOutputs } from '@albanian-xrm/multi-switch/MultiSwitch/generated/ManifestTypes';

export default {
  title: "AlbanianXrm's MultiSwitch/Checkboxes",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes,
  args: {
    ...defaultArgs,
    controlType: '1',
  },  
  decorators: [Decorator],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<StoryArgs> & {
  container?: HTMLDivElement;
  mockGenerator?: ComponentFrameworkMockGenerator<IInputs, IOutputs>;
};

export { Default } from './MultiSwitch/Default';
export { Colors } from './MultiSwitch/Colors';
export { Disabled } from './MultiSwitch/Disabled';
export { FixedHeight } from './MultiSwitch/FixedHeight';
export { OptionsGroup } from './MultiSwitch/OptionsGroup';
export { Orientation } from './MultiSwitch/Orientation';
export { Visibility } from './MultiSwitch/Visibility';
export { Interaction } from './Checkboxes/Interaction';

