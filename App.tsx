import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { IAppProps } from '@albanian-xrm/multi-switch/App.types';
import useAppController from '@albanian-xrm/multi-switch/App.controller';

const App = (props: IAppProps) => {
  const { disabled, selection, onChecked } = useAppController(props);
  return (
    <FormGroup>
      {props.options?.map((option) => (
        <FormControlLabel
          key={option.Value}
          control={
            <Switch
              disabled={disabled}
              onChange={(event, checked) => onChecked(checked, option.Value)}
              checked={selection.findIndex((value) => value === option.Value) >= 0}
            />
          }
          label={option.Label}
        />
      ))}
    </FormGroup>
  );
};

export default App;
