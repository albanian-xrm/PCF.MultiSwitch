/*
    Copyright (c) 2022 Betim Beja and Shko Online LLC
    Licensed under the MIT license.
*/

import Template from '../Template';
import { StoryArgs } from '../StoryArgs';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import delay, { timeout } from '../delay';
import {
  FIRST_OPTION,
  SECOND_OPTION,
  THIRD_OPTION,
  FOURTH_OPTION,
  FIFTH_OPTION,
  SIXTH_OPTION,
  SEVENTH_OPTION,
  EIGHTH_OPTION,
  NINTH_OPTION,
  TENTH_OPTION,
  ELEVENTH_OPTION,
} from '../MultiSwitch/Constants';
import { StoryObj } from '@storybook/react';

export const Interaction = Template.bind({}) as StoryObj<StoryArgs>;
Interaction.parameters = {
  controls: {
    include: ['selectedOptions'],
  },
};

Interaction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const options = [
    FIRST_OPTION,
    SECOND_OPTION,
    THIRD_OPTION,
    FOURTH_OPTION,
    FIFTH_OPTION,
    SIXTH_OPTION,
    SEVENTH_OPTION,
    EIGHTH_OPTION,
    NINTH_OPTION,
    TENTH_OPTION,
    ELEVENTH_OPTION,
  ];

  for (let i = 0; i < options.length; i++) {
    await waitFor(delay, { timeout });
    userEvent.click(canvas.getByLabelText(options[i]));
  }

  for (let i = 0; i < options.length; i++) {
    await waitFor(delay, { timeout });
    userEvent.click(canvas.getByLabelText(options[i]));
  }
};
