import axios from 'axios';

export function fetchMessage() {
  return axios.get('http://localhost:3001/message');
}
