import ServerConnector from '../connectors/ServerConnector'

const BASE_URL = 'http://127.0.0.1:8080';

export default {

    // hotelDetails:(searchQuery)=>ServerConnector.post(`${BASE_URL}/save`,searchQuery)
    hotelDetails:()=>ServerConnector.get(`${BASE_URL}/getUsers`)

}
