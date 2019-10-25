import React from 'react';
import './App.css';
import Header from './components/Header'
import routes from './routes'
import Display from './components/Display'
// import Collection from './components/Collection'
// import New from './components/New'

function App() {
  return (
    <div className="App">
      <Header />
      <Display />
    </div>
  );
}

export default App;
