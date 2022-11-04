import React from 'react';
import { Checkbox, IToggleStyles, Stack, Toggle } from '@fluentui/react';
import { initializeIcons } from '@fluentui/font-icons-mdl2';

import { IAppProps } from '@albanian-xrm/multi-switch/App.types';
import useStackItemStyles from '@albanian-xrm/multi-switch/hooks/useStackItemStyles';
import useSwitchStyles from '@albanian-xrm/multi-switch/hooks/useSwitchStyles';
import useRowsColumns from '@albanian-xrm/multi-switch/hooks/useRowsColumns';
import useLabelColors from './hooks/useLabelColors';

initializeIcons(undefined, { disableWarnings: true });
const stackTokens = { childrenGap: 10 };

const App = ({
  checkboxes,
  disabled = false,
  fixedHeight,
  options,
  horizontal = false,
  selectedOptions,
  visible,
  onChecked,
  columns = 2,
  pillColorOn = undefined,
  pillColorOff = undefined,
  pillColorHoverOn = undefined,
  thumbColorOn = undefined,
  thumbColorOff = undefined,
  thumbColorHoverOff = undefined,
  useColorForLabel = 'No'
}: IAppProps) => {
  const nonShrinkingStackItemStyles = useStackItemStyles(fixedHeight);
  const switchStyles = useSwitchStyles(pillColorOn, pillColorOff, pillColorHoverOn, thumbColorOn, thumbColorOff, thumbColorHoverOff);
  const optionsGroup = useRowsColumns(options, columns, horizontal);
  const labelColors = useLabelColors(options, useColorForLabel, checkboxes);
  return visible ? (
    <div className="tjola-stack" style={nonShrinkingStackItemStyles}>
      <Stack horizontal tokens={stackTokens}>
        {optionsGroup.map((options, index) => (
          <Stack key={index} tokens={checkboxes ? stackTokens : undefined} styles={nonShrinkingStackItemStyles}>
            {options?.map((option) => {
              const checked = (selectedOptions || []).findIndex((value) => value === option.Value) >= 0;
              const styles = { ...switchStyles[checked ? 1 : 0], ...labelColors[option.Value] };
              return checkboxes === true ? (
                <Checkbox
                  key={option.Value}
                  label={option.Label}
                  disabled={disabled}
                  checked={checked}
                  styles={labelColors[option.Value]}
                  onChange={(event, checked) => onChecked(checked || false, option.Value)}
                />
              ) : (
                <Toggle
                  key={option.Value}
                  label={option.Label}
                  disabled={disabled}
                  checked={checked}
                  onChange={(event, checked) => onChecked(checked || false, option.Value)}
                  styles={styles}
                  inlineLabel
                />
              )
            })}
          </Stack>
        ))}
      </Stack>
    </div>
  ) : (
    <></>
  );
};

export default App;
