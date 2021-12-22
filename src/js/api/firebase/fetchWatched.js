import axios from 'axios';
import { FIREBASE_BASE_URL } from '../apiBaseURLs';
import { store } from '../../store/store';
import { preloader } from '../../utils/preloader';

export const fetchWatchedFilms = () => {
  const userId = store.auth.userId.replaceAll('"', '');
  preloader();
  const url = `${FIREBASE_BASE_URL}watched/%22${userId}%22.json`;
  return axios.get(url).then(res => {
    return res.data;
  });
};
