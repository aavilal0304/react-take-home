import React from 'react';

export default class Loader extends React.Component {
  render() {
    return (
      <div className='loader-container'>
        <img src='/assets/loading.gif' alt='loader' />
      </div>
    );
  }
}
