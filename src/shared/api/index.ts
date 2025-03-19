import axios from "axios";

export const http = axios.create({
  baseURL: 'https://swapi.dev/api',
  headers: {
    'Content-type': 'application/json'
  },
});