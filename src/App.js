import React from 'react';

import Header from './components/Header'
import Filter from './components/Filter'
import Listings from './components/Listings'

import './sass/App.scss';

import listingsData from './data/listingsData'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      listingsData: listingsData
    }
  }
  render() {
    console.log(this.state.listingsData)
    return (
      <div className="App">
        <Header />
        <section>
          <Filter />
          <Listings listingsData={this.state.listingsData} />
        </section>
      </div>
    );
  }
}

export default App;