// Global
const login_user = null;
const pageItem = [
  {
    title: "アカウント",
    icon: "mdi-account-circle-outline",
    link: { name: "Account" }
  },
  {
    title: "記録",
    icon: "mdi-bulletin-board",
    link: { name: "Recode" }
  },
  {
    title: "追加",
    icon: "mdi-plus"
  },
  {
    title: "みんなの記録",
    icon: "mdi-content-save-all",
    link: { name: "AllUsers" }
  },
  {
    title: "このアプリについて",
    icon: "mdi-cog",
    link: { name: "How" }
  }
];
const tags = [
  {
    name: "仕事",
    color: "rgba(54, 162, 235, 1)", // 青
    bg_color: "rgba(54, 162, 235, 0.2)"
  },
  {
    name: "課題",
    color: "rgba(48, 209, 88, 1)", // 緑
    bg_color: "rgba(48, 209, 88, 0.2)"
  },
  {
    name: "勉強",
    color: "rgba(255, 99, 132, 1)", // 赤
    bg_color: "rgba(255, 99, 132, 0.2)"
  }
];
const drawer = false;

// Account
const profile = {
  target: "",
  limit: ""
};
const times = {
  work_sum: 0,
  task_sum: 0,
  study_sum: 0
};
const totalTime = 0;
const works = [];

// AllUsers
const allUsers = [];
const userNames = [];
const uidData = [];
const avatars = [];

// Home
// How
// Recode

export default {
  login_user,
  pageItem,
  drawer,
  works,
  tags,
  totalTime,
  times,
  profile,
  allUsers,
  uidData,
  userNames,
  avatars
};
