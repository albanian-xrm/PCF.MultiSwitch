import React from 'react';
import { Toggle } from '@fluentui/react/lib/components/Toggle/Toggle';
import { Checkbox } from '@fluentui/react/lib/components/Checkbox/Checkbox';
import { Stack } from '@fluentui/react/lib/components/Stack/Stack';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import { IAppProps } from '@albanian-xrm/multi-switch/App.types';

initializeIcons(undefined, { disableWarnings: true });
const stackTokens = { childrenGap: 10 };

const App = ({checkboxes, disabled, options, selectedOptions, visible, onChecked}: IAppProps) => {
  return visible ? (
    <Stack tokens={checkboxes ? stackTokens : undefined}>
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
