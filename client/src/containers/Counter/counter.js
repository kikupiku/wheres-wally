import React, { useState, useRef } from 'react';

const Counter = (props) => {
  // const [time, setTime] = useState(0);

  // const timeHandler = () => {
  //   setTimeout((gameStartRef) => {
  //     if (gameStartRef.current) {
  //       addSeconds();
  //     }
  //   }, 1000);
  // };

  // const addSeconds = () => {
  //   let currentTime = time;
  //   ++currentTime;
  //   setTime(currentTime);
  // };
  
  const formatTime = () => {
    let time = props.time;
    let seconds = '00';
    let minutes = '00';
    let hours = '00';

    if (time < 60) {
      seconds = time.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    } else if (time > 59) {
      seconds = (time % 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      minutes = Math.floor(time / 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      hours = Math.floor(time / 3600).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    }

    return (
      <p>
        {hours}:{minutes}:{seconds}
      </p>
    );
  };

  // console.log('game start before time handler', props.gameStart);

  // props.gameStart && timeHandler();

  return <React.Fragment>{formatTime()}</React.Fragment>;
};

export default Counter;
