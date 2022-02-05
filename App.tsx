import React from 'react';
import { Toggle } from '@fluentui/react/lib/components/Toggle/Toggle';
import { Checkbox } from '@fluentui/react/lib/components/Checkbox/Checkbox';
import { Stack } from '@fluentui/react/lib/components/Stack/Stack';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import { IAppProps } from '@albanian-xrm/multi-switch/App.types';
import useAppController from '@albanian-xrm/multi-switch/App.controller';

initializeIcons(undefined, { disableWarnings: true });
const stackTokens = { childrenGap: 10 };

const App = (props: IAppProps) => {
  const { disabled, selection, visible, onChecked } = useAppController(props);
  return visible ? (
    <Stack tokens={props.checkboxes ? stackTokens : undefined}>
      {props.options?.map((option) =>
        props.checkboxes === true ? (
          <Checkbox
            key={option.Value}
            label={option.Label}
            disabled={disabled}
            checked={selection.findIndex((value) => value === option.Value) >= 0}
            onChange={(event, checked) => onChecked(checked || false, option.Value)}
          />
        ) : (
          <Toggle
            key={option.Value}
            label={option.Label}
            disabled={disabled}
            checked={selection.findIndex((value) => value === option.Value) >= 0}
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
