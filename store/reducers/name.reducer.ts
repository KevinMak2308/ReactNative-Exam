import { Name } from "../../entities/Name";
import { FETCH_NAMES } from "../actions/name.actions";



const initialState = {
    first: "",
    last: ""
}

const nameReducer = (state = initialState, action: any ) => {
    switch (action.type) {
        case FETCH_NAMES:
        return { ...state, names: action.payload }

        default:
            return state;
    }
};

export default nameReducer;