import { useMemo } from 'react';
import type { ICheckboxStyles, IToggleStyles } from '@fluentui/react';
import { IAppProps } from '../App.types';

type OptionMetadatas = ComponentFramework.PropertyHelper.OptionMetadata[];

const useLabelColors = (
  options: OptionMetadatas,
  useColorForLabel: IAppProps['useColorForLabel'],
  checkboxes?: boolean,
) => {
  return useMemo(() => {
    const labelColors: {
      [key: number]: Partial<IToggleStyles>;
    } = {};
    options.forEach((option) => {
      labelColors[option.Value] =
        useColorForLabel === 'Yes' && option.Color
          ? checkboxes
            ? ({
                text: {
                  color: option.Color,
                },
              } as Partial<ICheckboxStyles>)
            : ({
                label: {
                  color: option.Color,
                },
              } as Partial<IToggleStyles>)
          : {};
    });
    return labelColors;
  }, [options, useColorForLabel, checkboxes]);
};

export default useLabelColors;
