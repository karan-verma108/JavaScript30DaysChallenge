const year = 2024;
const mood = 'good mood';
const createGithubProfile = (doesKnowCode) => {
  if (doesKnowCode) {
    return 'You can create your github profile';
  } else {
    return 'You cannot create github profile';
  }
};

const showTime = () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  return time;
};

export { year, mood, createGithubProfile, showTime };
