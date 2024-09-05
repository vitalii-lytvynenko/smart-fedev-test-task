import { User } from "./types";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url;

  return wait(500)
    .then(() => fetch(fullURL))
    .then(res => res.json());
}

export const getUsers = () => get<User[]>('/users');