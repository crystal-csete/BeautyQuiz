/** @format */

import React from "react";

const Navigation = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/'>
          Home
        </a>
        <a className='navbar-brand' href='/beautyquiz'>
          Beauty Quiz
        </a>
        <a className='navbar-brand' href='/hairbleachingtips'>
          Bleaching Tips
        </a>
        <a className='navbar-brand' href='/haircolortips'>
          Coloring Tips
        </a>
        <form className='d-flex'>
          <input
            className='form-control me-2'
            type='search'
            placeholder='Search'
            aria-label='Search'></input>
          <button className='btn btn-outline-success' type='submit'>
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navigation;
