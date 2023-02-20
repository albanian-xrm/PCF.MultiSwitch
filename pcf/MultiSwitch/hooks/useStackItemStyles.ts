import { useMemo } from "react";
import type { IProps } from '../App.types';

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