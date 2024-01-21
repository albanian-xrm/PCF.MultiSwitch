/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { Meta } from '@storybook/html';
import type { StoryArgs } from './StoryArgs';

import { argTypes } from './argTypes';
import '../MultiSwitch/app.css';
import { defaultArgs } from './defaultArgs';
import { Decorator } from './Decorator';

export default {
  title: "AlbanianXrm's MultiSwitch/Switches",
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes,
  args: {
    controlType: '0',
    ...defaultArgs,
  },
  decorators: [Decorator],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
    layout: 'fullscreen',
  },
} as Meta<StoryArgs>;

export { Default } from './MultiSwitch/Default';
export { Colors } from './MultiSwitch/Colors';
export { Disabled } from './MultiSwitch/Disabled';
export { FixedHeight } from './MultiSwitch/FixedHeight';
export { OptionsGroup } from './MultiSwitch/OptionsGroup';
export { Orientation } from './MultiSwitch/Orientation';
export { Visibility } from './MultiSwitch/Visibility';
export { Interaction } from './Switches/Interaction';
