import { Chatroom } from "../../entities/Chatroom";

export const TOGGLE_HAPPY = 'TOGGLE_HAPPY';
export const ADD_CHATROOM = 'ADD_CHATROOM';

export const toggleHappy = () => {
    return { type: TOGGLE_HAPPY };
};

export const addChatroom = (chatroom: Chatroom) => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken;

        console.log(token);

        const response = await fetch(
            'https://cbscs-7a227-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                ...chatroom,
            })
        });

        // console.log(await response.json());

        if (!response.ok) {
            //There was a problem..
            //dispatch({type: SIGNUP_FAILED, payload: 'something'})
        } else {
            const data = await response.json(); // json to javascript
            // let chatrooms = []
            // for (const key in data) {
            //     console.log(data[key].name)​
            // }

            console.log("data from server", data);
            chatroom.id = data.name;

            dispatch({ type: ADD_CHATROOM, payload: chatroom })
        }
    };
}