import React from 'react';
import * as CampaignActions from '../../actions/CampaignActions';

export default class VideoPlayer extends React.Component {
  constructor() {
    super();
    this.handleClickClose = this.handleClickClose.bind(this);
  }
  handleClickClose() {
    CampaignActions.setVideoToPlay(null);
  }
  render() {
    return (
      <div className='videoplayer-container'>
        <div className='close-button-container' onClick={this.handleClickClose}>&times;</div>
        <video loop autoplay controls='true'
          src={this.props.url}
          type='video/mp4' />
      </div>
    );
  }
}
