import axios from "axios";

const baseUrl = "https://localhost:7036/api/";

export default{ 
     dUser (url = baseUrl + "Users/") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (userId) => axios.get(url + userId),
      create: (newRecord) => axios.post(url, newRecord),
      update: (userId, updateRecord) => axios.put(url + userId, updateRecord),
      delete: (userId) => axios.delete(url + userId),
    };
  }
}

