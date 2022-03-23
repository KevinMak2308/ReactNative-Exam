import { User } from "../../entities/User";
import { SIGNUP } from "../actions/user.actions";

interface ReduxState {
    loggedInUser: User,
    idToken: string | undefined
}

const initialState: ReduxState = {
    loggedInUser: {} as User,
    idToken: undefined
}

const userReducer = (state: ReduxState = initialState, action: any) => {
    switch (action.type) {
        case SIGNUP:
            const user = new User(action.payload.email, '', '');
            //state.loggedInUser = user; // MUTATION!!!!
            return { ...state, loggedInUser: user, idToken: action.payload.idToken }

        default:
            return state;
    }
};

export default userReducer;