import { Event } from "../../entities/Event";
import { ADD_EVENT, FETCH_EVENTS } from "../actions/event.actions";

const initialState: ReduxState = {
    events: [],
    counter: 0,
    name: "Event Name"
}

interface ReduxState {
    events: Event[]
    counter: number
    name: string
}

interface ReduxAction {
    type: string,
    payload?: number | string | Event
}

const eventReducer = (state: ReduxState = initialState, action: ReduxAction) => {
    switch (action.type) {
        case ADD_EVENT:
            return { ...state, events: [...state.events, action.payload] }

        case FETCH_EVENTS:
            return { ...state, events: action.payload }

        default:
            return state;
    }
};

export default eventReducer;