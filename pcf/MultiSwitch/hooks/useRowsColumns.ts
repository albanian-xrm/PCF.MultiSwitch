import { useMemo } from 'react';

type OptionMetadatas = ComponentFramework.PropertyHelper.OptionMetadata[];

const useRowsColumns = (
  options: OptionMetadatas,
  columns: number,
  horizontal: boolean,
  banishedChoices?: number[],
  relatedChoices?: number[],
  groupSize?: number,
) => {
  return useMemo(() => {
    if ((!!groupSize && !relatedChoices) || (!groupSize && !!relatedChoices)) {
      console.warn('Component is not configured correctly.', groupSize, relatedChoices);
    }
    const filteredOptions = options.filter(
      (option) =>
        (banishedChoices === undefined || banishedChoices.indexOf(option.Value) === -1) &&
        (groupSize === undefined ||
          relatedChoices === undefined ||
          relatedChoices.some(
            (related) =>
              Math.floor(option.Value / Math.pow(10, groupSize)) === Math.floor(related / Math.pow(10, groupSize)),
          )),
    );

    if (horizontal) {
      const rows = Math.ceil(filteredOptions.length / columns);
      const filteredOptionsGroup = new Array<OptionMetadatas>(rows);
      for (let i = 0; i < filteredOptions.length; i++) {
        if (filteredOptionsGroup[i % rows] === undefined) {
          filteredOptionsGroup[i % rows] = [];
        }
        filteredOptionsGroup[i % rows].push(filteredOptions[i]);
      }
      return filteredOptionsGroup;
    } // else vertical
    const filteredOptionsGroup = new Array<OptionMetadatas>(columns);
    for (let i = 0; i < filteredOptions.length; i++) {
      if (filteredOptionsGroup[i % columns] === undefined) {
        filteredOptionsGroup[i % columns] = [];
      }
      filteredOptionsGroup[i % columns].push(filteredOptions[i]);
    }
    return filteredOptionsGroup;
  }, [banishedChoices, relatedChoices, groupSize, options, columns, horizontal]);
};

export default useRowsColumns;
