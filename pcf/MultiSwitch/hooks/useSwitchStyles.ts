import { useMemo } from "react";
import { IToggleStyles } from "@fluentui/react";

const useSwitchStyles = (
    pillColorOn?: string,
    pillColorOff?: string,
    pillColorHoverOn?: string,
    thumbColorOn?: string,
    thumbColorOff?: string,
    thumbColorHoverOff?: string) => {
    return useMemo(() =>
        [{
            container: { marginBottom: 0 },
            pill: {
                background: pillColorOff,
                ':hover .ms-Toggle-thumb': {
                    background: thumbColorHoverOff
                }
            },
            thumb: {
                background: thumbColorOff,
            }
        }, {
            container: { marginBottom: 0 },
            pill: {
                background: pillColorOn,
                ":hover": {
                    background: pillColorHoverOn
                }
            },
            thumb: {
                background: thumbColorOn
            }
        }] as Partial<IToggleStyles>[],
        [pillColorOn, pillColorOff, pillColorHoverOn, thumbColorOn, thumbColorOff, thumbColorHoverOff]);
}

export default useSwitchStyles;
