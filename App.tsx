import React, { useMemo } from 'react';
import { Toggle } from '@fluentui/react/lib/components/Toggle/Toggle';
import { Checkbox } from '@fluentui/react/lib/components/Checkbox/Checkbox';
import { Stack } from '@fluentui/react/lib/components/Stack/Stack';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import { IAppProps, IProps } from '@albanian-xrm/multi-switch/App.types';
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
  columns = 2,
}: IAppProps) => {
  const nonShrinkingStackItemStyles = useMemo(() => {
    return height
      ? ({
          height,
          overflowY: 'auto',
        } as IProps)
      : {};
  }, [height]);

  const optionsGroup = useMemo(() => {
    const optionsGroup = new Array<ComponentFramework.PropertyHelper.OptionMetadata[]>(columns);

    for (let i = 0; i < options.length; i++) {
      if (optionsGroup[i % columns] === undefined) {
        optionsGroup[i % columns] = [];
      }
      optionsGroup[i % columns].push(options[i]);
    }
    return optionsGroup;
  }, [options, columns]);

  return visible ? (
    <div className="tjola-stack" style={nonShrinkingStackItemStyles}>
      <Stack horizontal tokens={stackTokens}>
        {optionsGroup.map((options) => {
          console.log(options);

          return (
            <Stack tokens={checkboxes ? stackTokens : undefined} styles={nonShrinkingStackItemStyles}>
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
          );
        })}
      </Stack>
    </div>
  ) : (
    <></>
  );
};

export default App;
