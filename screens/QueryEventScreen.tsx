import { useQuery } from "react-query";
import { Text, View, LogBox, FlatList  } from 'react-native';
import axios from "axios";
import { Event } from "../entities/Event";


  export default function FetchQueryEvents() {

    LogBox.ignoreLogs(['Setting a timer']);

    const baseUrl = "https://k-osexamreact-default-rtdb.europe-west1.firebasedatabase.app/events.json";


    const fetchQueryEvents = async () => {

      return await axios.get(baseUrl)
      
      }
      
    const { isLoading, isError, data } = useQuery('events', fetchQueryEvents)

    let events: Event[] = []
    for (const key in data?.data) {
        const eventProperty = data?.data[key];
        events.push(new Event(eventProperty.title, eventProperty.description, eventProperty.participating, key))
    }

    console.log("What is in events? ", events);
    console.log("What is in data? ", data?.data);

  
    if (isLoading)  
    return <Text> Loading... </Text>
  
    if (isError) 
    return <Text> Error! </Text>

    const renderEvents = ({ item }: { item: Event }) => {
      return (  
      <View>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
      </View>   
  )
}
    
    return (
      <FlatList
                data={events}
                renderItem={renderEvents}
            />
    )
  }
