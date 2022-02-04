import { IAppProps } from '@albanian-xrm/multi-switch/App.types';
import { useState, useEffect } from 'react';

const useAppController = ({
  disabled: disabledProp,
  initialVisible,
  selectedOptions,
  notifier,
  disabledNotifier,
  visibleNotifier,
  onValueChanged,
}: IAppProps) => {
  const [selection, setSelection] = useState(selectedOptions || []);
  const [disabled, setDisabled] = useState(disabledProp);
  const [visible, setVisible] = useState(initialVisible);
  useEffect(() => {
    const handlerId = notifier.subscribe((updatedValue) => {
      setSelection(updatedValue || []);
    });
    const disabledHandlerId = disabledNotifier.subscribe((updatedValue) => {
      setDisabled(updatedValue);
    });
    const visibleHandlerId = visibleNotifier.subscribe((updatedValue)=>{
      setVisible(updatedValue);
    })
    return () => {
      notifier.unsubscribe(handlerId);
      disabledNotifier.unsubscribe(disabledHandlerId);
      visibleNotifier.unsubscribe(visibleHandlerId);
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
    visible
  };
};

export default useAppController;
