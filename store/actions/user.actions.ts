export const SIGNUP = 'SIGNUP';

export const signup = (email: string, password: string) => {
    return async (dispatch: (arg0: { type: string; payload: string; }) => void) => {
        const response = await fetch('some url', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                // email:
                // password:
                returnSecureToken: true
            })
        });

        if (!response.ok) {
            //There was a problem..
        } else {
            const data = await response.json(); // json to javascript
            console.log("data from server", data);

            dispatch({ type: SIGNUP, payload: 'something to pass to reducer' })
        }
    };
};
