import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import classes from './games.module.css';
import feast from '../../assets/feast.jpg';
import chocolateFactory from '../../assets/chocolate-factory.jpg';
import movieSet from '../../assets/movie-set.jpg';
import giants from '../../assets/giants.jpg';

const games = props => {
  const wallyGames = [chocolateFactory, feast, movieSet, giants];

  const listOfGames = wallyGames.map((picture, index) => {
    // const history = useHistory();
    // console.log(history);

    let urlEnding = `/game-${index + 1}`;

    // const redirect = () => {
    //   let path = `/game-${index + 1}`;
    //   console.log(path);
    //   history.push(path);
    // }
    return (
      <div key={index + 1} className={classes.game}>
        <Link to={urlEnding} >
          <h2>Game {index + 1}</h2>
          <img src={picture} alt='' />
        </Link>
      </div>
    );
  });

  return (
    <div className={classes.gamesContainer}>
      {listOfGames}
    </div>
  )
};

export default games;