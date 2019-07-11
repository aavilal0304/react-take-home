import React  from 'react';
import * as CampaignActions from '../../actions/CampaignActions';

export default class CampaignImage extends React.Component {
  constructor() {
    super();
    this.handleClickPlay = this.handleClickPlay.bind(this);
  }
  handleClickPlay() {
    CampaignActions.setVideoToPlay(this.props.info.download_url);
  }
  render() {
    const {info} = this.props;
    let playButton = (
      <div className='campaign-media-play'>
        <img src='/assets/play.png' alt='play button' />
      </div>
    );
    return (
      <div className='campaign-media-image' style={{backgroundImage: 'url(' + info.cover_photo_url + ')'}} onClick={this.handleClickPlay}>
        {info.media_type.toLowerCase() === 'video' ? playButton : null}
      </div>
    );

  }
}
