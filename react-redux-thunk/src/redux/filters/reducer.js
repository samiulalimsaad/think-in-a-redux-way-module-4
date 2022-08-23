import { COLOR_CHANGED, STATUS_CHANGED } from "./actionTypes";

const initialState = {
    status: "all",
    colors: [],
};

export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUS_CHANGED:
            return {
                ...state,
                status: action.payload.status,
            };

        case COLOR_CHANGED:
            const { color, changeType } = action.payload;
            if (changeType === "added") {
                return {
                    ...state,
                    colors: [...state.colors, action.payload.color],
                };
            } else if (changeType === "removed") {
                return {
                    ...state,
                    colors: state.colors.filter(
                        (color) => color !== action.payload.color
                    ),
                };
            } else {
                return state;
            }

        default:
            return state;
    }
};
