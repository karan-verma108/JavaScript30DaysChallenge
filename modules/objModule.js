const personObj = {
  name: 'roy',
  age: 70,
  profession: 'developer',
  isHappy(money, depression) {
    if (money > depression) {
      return `${this.name} is happy today`;
    } else {
      return `${this.name} is not happy`;
    }
  },
};

export { personObj };
