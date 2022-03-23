import { FirebaseSignupSuccess } from "../../entities/FirebaseSignupSuccess";

export const SIGNUP = 'SIGNUP';

export const signup = (email: string, password: string) => {
    return async (dispatch: any) => {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwa6vi4jY6Ll_9HmfNW07uz_dlUl3Z3bI', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                email: email,
                password: password,
                returnSecureToken: true
            })
        });

        // console.log(response.json());

        if (!response.ok) {
            //There was a problem..
            //dispatch({type: SIGNUP_FAILED, payload: 'something'})
        } else {
            const data: FirebaseSignupSuccess = await response.json(); // json to javascript
            console.log("data from server", data);

            dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken } })
        }
    };
};
