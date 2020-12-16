import React, { useState, useRef } from 'react';
import Counter from '../Counter/counter';
import styled from 'styled-components';

const StyledImg = styled.img`
  width: 800px;
  height: 600px;
`;

const Game = (props) => {
  const [isGameOn, setIsGameOn] = useState(false);
  const [time, setTime] = useState(0);
  const isGameOnRef = useRef(isGameOn);
  isGameOnRef.current = isGameOn;

  const gameToggleHandler = () => {
    isGameOn ? setIsGameOn(!isGameOn) : setIsGameOn(true);
  };

  const timeHandler = () => {
    setTimeout(() => {
      isGameOnRef.current && addSeconds();
    }, 1000);
  };

  const addSeconds = () => {
    let currentTime = time;
    ++currentTime;
    setTime(currentTime);
  };

  isGameOn && timeHandler();

  return (
    <div>
      <Counter time={time} />
      <button onClick={gameToggleHandler}>
        {isGameOn ? 'PAUSE' : 'START'}
      </button>
      <div className='gameContainer'>
        <div className='ImageFrame'>
          <StyledImg src='https://i.imgur.com/Bl9ZQQG.jpg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Game;
