import React from 'react';

import Header from './components/Header'
import Filter from './components/Filter'
import Listings from './components/Listings'

import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Filter />
        <Listings />
      </section>
    </div>
  );
}

export default App;