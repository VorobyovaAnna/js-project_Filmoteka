import { Notify } from 'notiflix';
import { logInFetch } from '../api/auth/authAPI';
import { refs } from '../base/refs';
import { store } from '../base/store';
import { closeAuthModal, openAuthModal } from './authModal';
import { makeNavList } from './nav';

const logIn = e => {
  e.preventDefault();
  const email = refs.authForm.elements.email.value;
  const password = refs.authForm.elements.password.value;

  logInFetch({ email, password })
    .then(res => {
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('userId', JSON.stringify(res.data.localId));
      store.auth.isLoggedIn = true;
      store.auth.userId = res.data.localId;
      makeNavList();

      closeAuthModal();
      refs.authForm.reset();
    })
    .catch(err => {
      Notify.failure(err.response.data.error.message);

      closeAuthModal();
    });
};

const onLogInClick = () => {
  refs.authSbmBtn.textContent = 'Log in';
  refs.authForm.addEventListener('submit', logIn);
  openAuthModal();
};

export { logIn, onLogInClick };
