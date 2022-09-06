import React, { useMemo } from 'react';
import { Toggle } from '@fluentui/react/lib/components/Toggle/Toggle';
import { Checkbox } from '@fluentui/react/lib/components/Checkbox/Checkbox';
import { Stack } from '@fluentui/react/lib/components/Stack/Stack';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import { IAppProps } from '@albanian-xrm/multi-switch/App.types';
import { IStackStyles } from '@fluentui/react';

initializeIcons(undefined, { disableWarnings: true });
const stackTokens = { childrenGap: 10 };

const App = ({
  checkboxes,
  disabled,
  fixedHeight: height,
  options,
  selectedOptions,
  visible,
  onChecked,
}: IAppProps) => {
  const nonShrinkingStackItemStyles = useMemo(() => {
    const fixedHeight = height
      ? ({
          height,
          overflowY: 'auto',
        } as IStackStyles)
      : {};
    return {
      root: {
        display: 'flex',
        paddingTop: 15,
        ...fixedHeight,
      } as IStackStyles,
    };
  }, [height]);
  return visible ? (
    <Stack
      className="tjola-stack"
      tokens={checkboxes ? stackTokens : undefined}
      styles={nonShrinkingStackItemStyles}
      horizontal={false}
    >
      {options?.map((option) =>
        checkboxes === true ? (
          <Checkbox
            key={option.Value}
            label={option.Label}
            disabled={disabled}
            checked={(selectedOptions || []).findIndex((value) => value === option.Value) >= 0}
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
