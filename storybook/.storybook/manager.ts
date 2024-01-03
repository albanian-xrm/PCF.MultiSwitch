import { AddonStore, addons } from '@storybook/addons';

type Addon_Config<T extends AddonStore['setConfig']> = T extends (value: infer K) => void ? K : never;
type ThemeVars = Addon_Config<AddonStore['setConfig']>['theme'];

addons.setConfig({
  theme: {
    brandTitle: "AlbanianXrm's MultiSwitch",
    brandUrl: 'https://github.com/albanian-xrm/PCF.MultiSwitch',
    brandImage: './Shko Online 92x32.svg',
  } as ThemeVars,
  showRoots: false,
});
