import fetch from 'isomorphic-fetch';

export function fetchMessage() {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  return fetch('http://localhost:3001/message', {
    method: 'GET',
    headers,
  });
}
