import React from 'react';
import { Toggle, Checkbox, Stack , initializeIcons } from '@fluentui/react';

import { IAppProps } from '@albanian-xrm/multi-switch/App.types';

initializeIcons(undefined, { disableWarnings: true });
const stackTokens = { childrenGap: '10px 10px'};

const App = ({checkboxes, disabled, horizontal, options, selectedOptions, visible, onChecked}: IAppProps) => {
  return visible ? (
    <Stack tokens={checkboxes || horizontal ? stackTokens : undefined} horizontal={horizontal} >
      {options?.map((option) =>
        checkboxes === true ? (
          <Checkbox
            key={option.Value}
            label={option.Label}
            disabled={disabled}
            checked={(selectedOptions||[]).findIndex((value) => value === option.Value) >= 0}
            onChange={(event, checked) => onChecked(checked || false, option.Value)}
          />
        ) : (
          <Toggle
            key={option.Value}
            label={option.Label}
            disabled={disabled}
            checked={selectedOptions.findIndex((value) => value === option.Value) >= 0}
            onChange={(event, checked) => onChecked(checked || false, option.Value)}
            styles={{ container: { marginBottom: 0 } }}
            inlineLabel
          />
        ),
      )}
    </Stack>
  ) : (
    <></>
  );
};

export default App;
