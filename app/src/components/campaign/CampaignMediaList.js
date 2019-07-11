import React from 'react';
import CampaignMediaItem from './CampaignMediaItem';

export default class CampaignMediaList extends React.Component {
  constructor() {
    super();
    this.getMediaItems = this.getMediaItems.bind(this);
  }
  getMediaItems() {
    return this.props.medias.map((media, index) => {
      return (<CampaignMediaItem key={'mi-' + index} info={media} />);
    });
  }
  render() {
    let mediaItems = this.getMediaItems();
    let noItemsMessage = <p className='campaign-media-empty'>No media available for this campaign</p>;
    return (
      <div className='campaign-media-list-container'>
        {mediaItems.length > 0 ? mediaItems : noItemsMessage}
      </div>
    );
  }
}
