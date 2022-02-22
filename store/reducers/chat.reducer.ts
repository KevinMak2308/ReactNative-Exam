import { TOGGLE_HAPPY } from "../actions/chat.actions";

const initialState = {
    isHappy: false
}
const chatReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case TOGGLE_HAPPY:
            console.log("hi");

            return { ...state, isHappy: !state.isHappy }

        default:
            return state;
    }
};

export default chatReducer;