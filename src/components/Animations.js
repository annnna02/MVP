const anime = require('animejs');

const xMax = 16;
anime({
  targets: '.trivia-main',
  easing: 'easeInOutSine',
  duration: 550,
  translateX: [
    {
      value: xMax * -1,
    },
    {
      value: xMax,
    },
    {
      value: xMax/-2,
    },
    {
      value: xMax/2,
    },
    {
      value: 0
    }
  ],
})