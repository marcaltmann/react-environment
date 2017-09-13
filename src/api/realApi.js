// This could be the real API

import axios from 'axios';

export function fetchMessage() {
  return axios.get('http://localhost:3001/message');
}
