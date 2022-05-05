import { Name } from "../../entities/Name";



export const FETCH_NAMES = 'FETCH_NAMES';
export const ADD_NAME = 'ADD_NAME';


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

            console.log("Here we are fetching our array from Firebase: ", names);

            // console.log("data from server", data);
            //chatroom.id = data.name;

            dispatch({ type: FETCH_NAMES, payload: names })
        }
    };
}

    export const addName = (name: Name) => {
        return async (dispatch: any, getState: any) => {
           
    
            //delete chatroom.id // for an update, this would remove the id attribute (and value) from the chatroom
            const response = await fetch(
                'https://k-osexamreact-default-rtdb.europe-west1.firebasedatabase.app/names.json',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    name
                )
            });
    
            // console.log(await response.json());
    
            if (!response.ok) {
                //There was a problem..
                //dispatch({type: ADD_CHATROOM_FAILED, payload: 'something'})
            } else {
                const data = await response.json(); // json to javascript
                // let chatrooms = []
                // for (const key in data) {
                //     console.log(data[key].name)​
                // }
    
                //console.log("data from server", data);
                name.id = data.name;
    
                dispatch({ type: ADD_NAME, payload: name })
            }
        };
};