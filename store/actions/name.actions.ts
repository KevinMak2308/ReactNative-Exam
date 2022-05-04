import { Name } from "../../entities/Name";

//https://k-osexamreact-default-rtdb.europe-west1.firebasedatabase.app/name

export const FETCH_NAMES = 'FETCH_NAMES';


export const fetchName = () => {
    return async (dispatch: any, getState: any) => {

        const response = await fetch(
            'https://k-osexamreact-default-rtdb.europe-west1.firebasedatabase.app/names.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // console.log(await response.json());

        if (!response.ok) {
            //There was a problem..
            //dispatch({type: FETCH_CHATROOM_FAILED, payload: 'something'})
            console.log("Unable to get the name");
        } else {
            const data = await response.json(); // json to javascript
            let names: Name[] = []
            console.log(data);
            for (const key in data) {
                // create Chatroom objects and push them into the array chatrooms.
                const obj = data[key];
                names.push(new Name(obj.first, obj.last, key))
            }

            console.log("names", names);

            // console.log("data from server", data);
            //chatroom.id = data.name;

            dispatch({ type: 'FETCH_NAME', payload: names })
        }
    };
}