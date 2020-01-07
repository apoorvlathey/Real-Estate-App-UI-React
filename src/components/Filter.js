import React, { Component } from 'react'

export class Filter extends Component {

  constructor() {
    super()

    this.cities = this.cities.bind(this)
    this.housetypes = this.housetypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }

  /* Right before component rendered */
  componentWillMount() {
    this.props.populateAction()
  }

  // !!! MAKE SURE TO BIND THIS WITH EACH FUNCTION IN CONSTRUCTOR
  cities() {
    if (this.props.globalState.populateFormsData.cities != undefined) {
      const { cities } = this.props.globalState.populateFormsData
      return cities.map(item => {
        return (
          <option value={item}>{item}</option>
        )
      })
    }
  }
  housetypes() {
    if (this.props.globalState.populateFormsData.housetypes != undefined) {
      const { housetypes } = this.props.globalState.populateFormsData
      return housetypes.map(item => {
        return (
          <option value={item}>{item}</option>
        )
      })
    }
  }
  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      const { bedrooms } = this.props.globalState.populateFormsData
      return bedrooms.map(item => {
        return (
          <option value={item}>{item}+ BR</option>
        )
      })
    }
  }

  render() {
    return (
      <section id="filter">
        <div className="inside">
          <h4>Filter</h4>
          <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
            <option value="all" selected>Any Neighbourhood</option>
            {this.cities()}
          </select>
          <select name="housetype" className="filters housetype" onChange={this.props.change}>
            <option value="all" selected>All House Types</option>
            {this.housetypes()}
          </select>
          <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
            <option value="0" selected>0+ BR</option>
            {this.bedrooms()}
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