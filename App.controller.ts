import { IAppProps } from '@albanian-xrm/multi-switch/App.types';
import { useState, useEffect } from 'react';

const useAppController = ({
  disabled: disabledProp,
  selectedOptions,
  notifier,
  disabledNotifier,
  onValueChanged,
  sender
}: IAppProps) => {
  const [selection, setSelection] = useState(selectedOptions || []);
  const [disabled, setDisabled] = useState(disabledProp);
  useEffect(() => {
    const handlerId = notifier.subscribe(sender,(updatedValue) => {
      setSelection(updatedValue || []);
    });
    const disabledHandlerId = disabledNotifier.subscribe(sender, (updatedValue) => {
      setDisabled(updatedValue);
    });
    return () => {
      notifier.unsubscribe(sender, handlerId);
      disabledNotifier.unsubscribe(sender, disabledHandlerId);
    };
  }, []);
  const onChecked = (checked: boolean, value: number) => {
    if (checked) {
      setSelection((oldState) => {
        const newState = [value, ...oldState.filter((oldValue) => oldValue !== value)];
        onValueChanged(newState);
        return newState;
      });
    } else {
      setSelection((oldState) => {
        const newState = oldState.filter((oldValue) => oldValue !== value);
        onValueChanged(newState);
        return newState;
      });
    }
  };
  return {
    selection,
    onChecked,
    disabled,
  };
};

export default useAppController;
