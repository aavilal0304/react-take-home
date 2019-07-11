import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header-container'>
        <img className='menu' src='/assets/menu-bars.png' alt='menu-button' />
        <img className='logo' src='/assets/logo.png' alt='logo' />
      </div>
    );
  }
}
