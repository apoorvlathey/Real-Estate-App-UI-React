import React, { Component } from 'react'

export class Listings extends Component {

  constructor() {
    super()
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings() {
    const { listingsData } = this.props

    return listingsData.map((listing, index) => (
      <div className="col-md-3" key={index}>
        <div className="listing">
          <div className="listing-img" style={{ background: `url("${listing.image}") no-repeat center center` }}>
            <span className="address">{listing.address}</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img"></div>
              </div>

              <div className="col-md-9">
                <div className="user-details">
                  <span className="user-name">Nina Jones</span>
                  <span className="post-date">05/05/2018</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="fa fa-square-o" aria-hidden="true"></i>
                    <span>{listing.floorSpace} ft&sup2;</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fa fa-bed" aria-hidden="true"></i>
                    <span>{listing.rooms} bedroom{listing.rooms > 1 ? 's' : ''}</span>
                  </div>
                </div>
                <div className="view-btn">
                  View Listing
                  </div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span className="price">${listing.price}</span>
            <span className="location"><i className="fa fa-map-marker" aria-hidden="true"></i>{listing.city}, {listing.state}</span>
          </div>
        </div>
      </div>
    ))
  }

  render() {
    return (
      <section id="listings">
        <section className="search-area">
          <input type="text" name="search" />
        </section>
        <section className="sortby-area">
          <div className="results">390 results found</div>
          <div className="sort-options">
            <select name="sortby" className="sortby">
              <option value="price-asc">Highest Price</option>
              <option value="price-dsc">Lowest Price</option>
            </select>
            <div className="view">
              <i className="fa fa-th-list" aria-hidden="true"></i>
              <i className="fa fa-th" aria-hidden="true"></i>
            </div>
          </div>
        </section>
        <section className="listings-results">
          {this.loopListings()}
        </section>
        <section id="pagination">
          <ul className="pages">
            <li>Prev</li>
            <li>1</li>
            <li className="active">2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>Next</li>
          </ul>
        </section>
      </section>
    )
  }
}

export default Listings
