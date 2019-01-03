import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='#'>
            Counter - {this.props.totalCount}
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
