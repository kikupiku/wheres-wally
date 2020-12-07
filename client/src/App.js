import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import wally from './assets/wally.png';
import './App.css';
import Games from './containers/games/games';
import Game from './containers/game/game';

function App() {
  const [ apiResponse, setApiResponse ] = useState('');

  const callAPI = () => {
    fetch('http://localhost:9000/')
      .then((res) => res.text())
      .then((res) => {
        let message = JSON.parse(res).message;
        setApiResponse(message);
      });
  }

  callAPI();

  let pages = (
    <Switch>
      <Route path='/game-1' render={() => <Game game='1'/>} />
      <Route path='/game-2' render={Game} />
      <Route path='/game-3' render={Game} />
      <Route path='/game-4' render={Game} />
      <Route path='/' exact render={Games} />
    </Switch>
  )

  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <h1>{apiResponse}</h1>
          <img className='Wally' src={wally} alt='' />
        </header>
        {pages}
      </div>
    </BrowserRouter>
  );
}

export default App;
