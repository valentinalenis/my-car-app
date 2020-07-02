import axios from "axios";

const baseUrl = "http://localhost:50945/api/"

export default {
    car(url = baseUrl + "Cars/" ){
        return{
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url+id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    }
}