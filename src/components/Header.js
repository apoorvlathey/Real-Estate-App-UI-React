import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">Logo</div>

        <nav>
          <a href="#">Create Ads</a>
          <a href="#">About Us</a>
          <a href="#">Log in</a>
          <a href="#" className="register-btn">Register</a>
        </nav>

      </header>
    )
  }
}

export default Header
