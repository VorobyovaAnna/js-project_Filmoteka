import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../base/store';
import { loader } from '../../base/reloader';

export const fetchWatchedFilms = () => {
  const userId = store.auth.userId;
  loader();
  return axios.get(`${FIREBASE_BASE_URL}/watched/${userId}.json`);
};

