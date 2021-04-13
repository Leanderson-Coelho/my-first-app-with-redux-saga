import {API} from './env';
import axios from 'axios';

export default {
  async geTodo() {
    return axios.get(`${API}/todos`);
  },
};
