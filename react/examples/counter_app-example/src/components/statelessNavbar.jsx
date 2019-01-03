import React from "react";

const NavBar = ({ totalCount }) => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <a className='navbar-brand' href='#'>
          Counter - {totalCount}
        </a>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
