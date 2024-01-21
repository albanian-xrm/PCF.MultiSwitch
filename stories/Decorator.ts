import type { HtmlRenderer } from '@storybook/html';
import type { DecoratorFunction } from '@storybook/types';
import type { StoryArgs } from './StoryArgs';

export const Decorator: DecoratorFunction<HtmlRenderer, StoryArgs> = (Story) => {
  const container = document.createElement('div');
  container.style.margin = '2em';
  container.style.padding = '1em';
  container.style.maxWidth = '350px';
  container.style.border = 'dotted 1px';

  const storyResult = Story();
  if (typeof storyResult == 'string') {
    container.innerHTML = storyResult;
  } else {
    container.appendChild(storyResult);
  }
  return container;
};
