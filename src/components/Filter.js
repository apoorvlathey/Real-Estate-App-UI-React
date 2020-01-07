import React, { Component } from 'react'

export class Filter extends Component {
  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
            <option value="all" selected>Any Neighbourhood</option>
            <option value="Ridgewood">Ridgewood</option>
            <option value="Chandini Chowk">Chandini Chowk</option>
            <option value="Washington">Washington</option>
            <option value="Orlando">Orlando</option>
          </select>
          <select name="housetype" className="filters housetype" onChange={this.props.change}>
            <option value="all" selected>All House Types</option>
            <option value="Ranch">Ranch</option>
            <option value="Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="Room">Room</option>
          </select>
          <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
            <option value="0" selected>0+ BR</option>
            <option value="1">1+ BR</option>
            <option value="2">2+ BR</option>
            <option value="3">3+ BR</option>
            <option value="4">4+ BR</option>
          </select>
          <div className="filters price">
            <span className="title">Price</span>
            <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price} />
            <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price} />
          </div>
          <div className="filters floor-space">
            <span className="title">Floor Space</span>
            <input type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalState.min_floor_space} />
            <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalState.max_floor_space} />
          </div>
          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
              <span>Elevators</span>
              <input type="checkbox" name="elevator" value="elevator" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Swimming Pool</span>
              <input type="checkbox" name="swimming_pool" value="swimming_pool" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Finished Basement</span>
              <input type="checkbox" name="finished_basement" value="finished_basement" onChange={this.props.change} />
            </label>
            <label htmlFor="extras">
              <span>Gym</span>
              <input type="checkbox" name="gym" value="gym" onChange={this.props.change} />
            </label>
          </div>
        </div>
      </section>
    )
  }
}

export default Filter