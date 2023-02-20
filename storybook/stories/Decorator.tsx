import React from 'react';

import type { DecoratorFunction } from '@storybook/types';
import type { ReactRenderer } from '@storybook/react';
import type { StoryArgs } from './StoryArgs';

export const Decorator: DecoratorFunction<ReactRenderer, StoryArgs> = (Story) => (
  <div style={{ margin: '2em', padding: '1em', maxWidth: '350px', border: 'dotted 1px' }}>{Story()}</div>
);
