import { User } from "../../entities/User";
import { SIGNUP } from "../actions/user.actions";

interface ReduxState {
    loggedInUser: User
}

const initialState: ReduxState = {
    loggedInUser: {} as User,
}

const userReducer = (state: ReduxState = initialState, action: any) => {
    switch (action.type) {
        case SIGNUP:
            console.log("hi");

        //const user = {email: 'fakjsdflh', photoUrl: 'afdds' } as User

        default:
            return state;
    }
};

export default userReducer;