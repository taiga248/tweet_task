const userName = state =>
  state.login_user ? state.login_user.displayName : "";
const photoURL = state => (state.login_user ? state.login_user.photoURL : "");
const uid = state => (state.login_user ? state.login_user.uid : null);

export default {
  userName,
  photoURL,
  uid
};
