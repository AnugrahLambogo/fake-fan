import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import landing from './components/landing';
import entry from './components/entry';
//import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test your friends to see if they're a real fan
        </p>
        <Link to='/'><button>Home</button></Link>
      </header>

    <section>
    <Route exact path='/' component={landing}/>
    <Route path='/entry' component={entry}/>

    </section>
    </div>
  );
}

export default App;
