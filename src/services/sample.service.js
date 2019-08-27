import axios from 'axios';

export default {
 
  loadSample (x) {
    return axios.get(`http://localhost:5000/api/values?x=${x}`)
  }
}
