import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';

import { IAppProps } from '@albanian-xrm/multi-switch/App.types';
import useAppController from '@albanian-xrm/multi-switch/App.controller';

const App = (props: IAppProps) => {
  const { disabled, selection, visible, onChecked } = useAppController(props);
  return visible ? (
    <FormGroup>
      {props.options?.map((option) => (
        <FormControlLabel
          key={option.Value}
          control={
            props.checkboxes === true ? (
              <Checkbox
                disabled={disabled}
                onChange={(event, checked) => onChecked(checked, option.Value)}
                checked={selection.findIndex((value) => value === option.Value) >= 0}
              />
            ) : (
              <Switch
                disabled={disabled}
                onChange={(event, checked) => onChecked(checked, option.Value)}
                checked={selection.findIndex((value) => value === option.Value) >= 0}
              />
            )
          }
          label={option.Label}
        />
      ))}
    </FormGroup>
  ) : (
    <></>
  );
};

export default App;
