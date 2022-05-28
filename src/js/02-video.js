import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (data) {
  console.log(data.seconds);
  data = {
    seconds: data.seconds,
    customKey: 'videoplayer-current-time',
  };
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};
player.on('timeupdate', throttle(onPlay, 1000));

// const offPlay = function (data) {
//   //   data = {
//   //     seconds: data.seconds,
//   //     customKey: 'videoplayer-current-time',
//   //   };
//   const newTime = localStorage.getItem('videoplayer-current-time');
//   console.log(newTime);
// };
// player.off('timOFF', offPlay);

const newTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

player
  .setCurrentTime(newTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
