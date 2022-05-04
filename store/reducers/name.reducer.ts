import { Name } from "../../entities/Name";
import { FETCH_NAMES, ADD_NAME } from "../actions/name.actions";



const initialState = {
    name: [{first: "hej", last:"med dig"}]
}

const nameReducer = (state = initialState, action: any ) => {
    switch (action.type) {
        case FETCH_NAMES:
        return { ...state, names: action.payload }
        case ADD_NAME:
            console.log(action.payload);
            return { ...state, names: [...state.name, action.payload] }
        default:
            return state;
    }
};

export default nameReducer;