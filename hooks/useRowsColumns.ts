import { useMemo } from "react";

type OptionMetadatas = ComponentFramework.PropertyHelper.OptionMetadata[];

const useRowsColumns = (options: OptionMetadatas, columns: number, horizontal: boolean) => {
    return useMemo(() => {
        if (horizontal) {
            const rows = Math.ceil(options.length / columns);
            const optionsGroup = new Array<OptionMetadatas>(rows);
            for (let i = 0; i < options.length; i++) {
                if (optionsGroup[i % rows] === undefined) {
                    optionsGroup[i % rows] = [];
                }
                optionsGroup[i % rows].push(options[i]);
            }
            return optionsGroup;
        } // else vertical
        const optionsGroup = new Array<OptionMetadatas>(columns);
        for (let i = 0; i < options.length; i++) {
            if (optionsGroup[i % columns] === undefined) {
                optionsGroup[i % columns] = [];
            }
            optionsGroup[i % columns].push(options[i]);
        }
        return optionsGroup;
    }, [options, columns, horizontal]);
}

export default useRowsColumns;