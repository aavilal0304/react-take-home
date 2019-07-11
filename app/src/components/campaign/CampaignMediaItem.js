import React, {lazy, Suspense} from 'react';
//import CampaignImage from './CampaignImage';
const CampaignImage = lazy(() => import('./CampaignImage'))

export default class CampaignMediaItem extends React.Component {
  constructor() {
    super();
    this.state = {
      copyLoading: false,
      showMessage: false
    }
    this.handleClickCopy = this.handleClickCopy.bind(this);
    this.handleClickDownload = this.handleClickDownload.bind(this);
  }
  componentDidUpdate() {
    if (this.state.copyLoading) {
      this.refs.linkvalue.select();
      document.execCommand('copy');
      this.setState({copyLoading: false, showMessage: true});
      setTimeout(() => {
        this.setState({showMessage: false});
      }, 1000);
    }
  }
  handleClickCopy() {
    this.setState({copyLoading: true});
  }
  handleClickDownload() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', this.props.info.download_url);
    xhr.send();
  }
  render() {
    const {info} = this.props;
    return (
      <div className='campaign-media-item-container'>
        <Suspense fallback= {<div className='campaign-media-image imagebroken'></div>} >
          <CampaignImage info={info} />
        </Suspense>
        <div className='campaign-media-options'>
          <div onClick={this.handleClickCopy}>
            <img src='/assets/link.png' alt='link' />
            {this.state.copyLoading ? (<input ref='linkvalue' type='text' defaultValue={info.tracking_link}/>) : null}
          </div>
          <div onClick={this.handleClickDownload}>
              <img src='/assets/download.png' alt='download' />
          </div>
        </div>
        {this.state.showMessage ?
          (<div className='campaign-media-message'>
            <p>URL copied</p>
           </div>) : null}
      </div>
    );
  }
}
