/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import Template from '../Template';
import { StoryArgs } from '../StoryArgs';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import delay, { timeout } from '../delay';
import { StoryObj } from '@storybook/react';

export const Interaction = Template.bind({}) as StoryObj<StoryArgs>;
Interaction.parameters = {
  controls: {
    include: ['selectedOptions'],
  },
};

Interaction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  for (let i = 0; i < 11; i++) {
    await waitFor(delay, { timeout });
    userEvent.click(canvas.getAllByRole('checkbox')[i]);
  }

  for (let i = 0; i < 11; i++) {
    await waitFor(delay, { timeout });
    userEvent.click(canvas.getAllByRole('checkbox')[i]);
  }
};
