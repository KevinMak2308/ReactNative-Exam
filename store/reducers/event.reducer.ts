import { Event } from "../../entities/Event";
import { ADD_EVENT, FETCH_EVENTS, USER_PARTICIPATING } from "../actions/event.actions";

interface ReduxState {
    events: Event[]
    
}

const initialState: ReduxState = {
    events: [],

}

interface ReduxAction {
    type: string,
    payload?: Event
}

const eventReducer = (state: ReduxState = initialState, action: ReduxAction) => {
    switch (action.type) {
        case ADD_EVENT:
            return { ...state, events: [...state.events, action.payload] }

        case FETCH_EVENTS:
            return { ...state, events: action.payload }

         case USER_PARTICIPATING:
             return state; 
             
             //Copy our event. Create a new array of participating. And that new array needs to contain the added email. 
             //Mutated event needs to replace the original one. 

        default:
            return state;
    }
};

export default eventReducer;