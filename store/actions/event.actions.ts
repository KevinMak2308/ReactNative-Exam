import { Event } from "../../entities/Event";

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const ADD_EVENT = 'ADD_EVENTS';

export const fetchEvents = () => {
    return async (dispatch: any) => {
        const response = await fetch(
            'https://k-osexamreact-default-rtdb.europe-west1.firebasedatabase.app/events.json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }
        );

        if (!response.ok) {
            console.log("Failed Response")
        } else {
            const data = await response.json()
            let events: Event[] = [];
            for (const key in data) {
                const eventObject = data[key];
                events.push(new Event(eventObject.title, eventObject.description, key))
            }

            console.log("Our Event here: ", events);
            dispatch({ type: FETCH_EVENTS, payload: events })

        }
    }
}

export const addEvent = (event: Event) => {
    return async (dispatch: any) => {

        const response = await fetch(
            'https://k-osexamreact-default-rtdb.europe-west1.firebasedatabase.app/events.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                event
            )
        });

        if (!response.ok) {
            console.log("Unable to add a new Event");
        } else {
            const data = await response.json();
            console.log("Our fetched data: ", data);
            event.id = data.name

            dispatch({ type: ADD_EVENT, payload: event });
        }
    }
}