/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import type { StoryObj } from '@storybook/html';
import type { StoryArgs } from '../StoryArgs';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import delay, { timeout } from '../delay';
import { getFromResource } from '../getFromResource';
import renderGenerator from '../renderGenerator';

export const Interaction: StoryObj<StoryArgs> = {
  render: renderGenerator(),
  parameters: {
    controls: {
      include: [getFromResource('Property_Display_Key')],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    for (let i = 0; i < 11; i++) {
      await waitFor(delay, { timeout });
      userEvent.click(canvas.getAllByRole('checkbox')[i]);
    }

    for (let i = 0; i < 11; i++) {
      await waitFor(delay, { timeout });
      userEvent.click(canvas.getAllByRole('checkbox')[i]);
    }
  },
};
