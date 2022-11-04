import { useMemo } from "react";
import { IProps } from '@albanian-xrm/multi-switch/App.types';

const useStackItemStyles = (height?: number) => {
    return useMemo(() => {
        return height
            ? ({
                height,
                overflowY: 'auto',
            } as IProps
            )
            : {};
    }, [height]);
}

export default useStackItemStyles;