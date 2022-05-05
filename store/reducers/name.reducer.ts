import { Name } from "../../entities/Name";
import { ADD_NAME, FETCH_NAMES } from "../actions/name.actions";

const initialState: ReduxState = {
    names: [],
    counter: 0,
    name: "Name Event"
}

interface ReduxState {
    names: Name[]
    counter: number
    name: string
}

interface ReduxAction {
    type: string,
    payload?: number | string | Name
}

const nameReducer = (state: ReduxState = initialState, action: ReduxAction ) => {
    switch (action.type) {
        case ADD_NAME:
            console.log(action.payload);
            return { ...state, names: [...state.names, action.payload] }

            case FETCH_NAMES:
                console.log("FETCH_NAMES" + "Are we here yet?!")
                return { ...state, names: action.payload }
                
        default:
            return state;
    }
};

export default nameReducer;