const setLoginUser = (state, user) => {
  state.login_user = user;
};
const deleteLoginUser = state => {
  state.login_user = null;
};
const toggleSideMenu = state => {
  state.drawer = !state.drawer;
};
const addWork = (state, { id, work }) => {
  work.id = id;
  state.works.push(work);
};
const addTime = (state, times) => {
  state.totalTime += times.sum;
  state.times = {
    work_sum: times.work_sum,
    task_sum: times.task_sum,
    study_sum: times.study_sum
  };
};
const setProfile = (state, profile) => {
  state.profile = profile;
};
const clearTotalTime = state => {
  state.totalTime = 0;
};

export default {
  setLoginUser,
  deleteLoginUser,
  toggleSideMenu,
  addWork,
  addTime,
  setProfile,
  clearTotalTime
};
