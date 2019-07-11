import React from 'react';
import CampaignStore from './store/CampaignStore';
import * as CampaignActions from './actions/CampaignActions';
import Header from './components/header';
import Loader from './components/loader';
import Campaign from './components/campaign';
import VideoPlayer from './components/videoplayer';
//import logo from './logo.svg';
//import './App.css';
import './sass/Init.scss';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      campaingData: CampaignStore.getStoreData(),
      isRefreshing: false
    }
    this.startMove = 0;
    this.scrollPosition = 0;
    this.setStoreData = this.setStoreData.bind(this);
    this.getCampaignData = this.getCampaignData.bind(this);
    this.handleOnTouchStart = this.handleOnTouchStart.bind(this);
    this.handleOnTouchMove = this.handleOnTouchMove.bind(this);
    this.handleOnTouchEnd = this.handleOnTouchEnd.bind(this);
  }
  setStoreData() {
    this.setState({
      campaingData: CampaignStore.getStoreData()
    });
  }
  componentWillMount() {
    CampaignStore.on('change', this.setStoreData);
    this.getCampaignData();
  }
  componentWillUnmount() {
    CampaignStore.removeListener('change');
  }
  getCampaignData() {
    CampaignActions.getAllCampaigns();
  }
  handleOnTouchStart(e) {
    const touch = e.touches[0];
    this.startMove = touch.clientY;
    this.scrollPosition = window.scrollY;
  }
  handleOnTouchMove(e) {
    const touch = e.changedTouches[0];
    if (this.scrollPosition === 0 && touch.clientY - this.startMove > 80) {
        if (!this.state.isRefreshing)
          this.setState({isRefreshing: true});
    }
  }
  handleOnTouchEnd(e) {
    const touch = e.changedTouches[0];
    this.setState({isRefreshing: false});
    if (this.scrollPosition === 0 && touch.clientY - this.startMove > 80) {
        this.getCampaignData();
    }

  }
  render() {
    let {videoToPlay} = this.state.campaingData;
    return (
      <div className='app-container'
        onTouchStart={this.handleOnTouchStart}
        onTouchMove={this.handleOnTouchMove}
        onTouchEnd={this.handleOnTouchEnd}>
        {videoToPlay == null ? <Header /> : null}
        {this.state.isRefreshing ? <Loader /> : null}
        {videoToPlay == null ? <Campaign campaingData={this.state.campaingData}/> : null}
        {videoToPlay != null ? <VideoPlayer url={videoToPlay}/> : null}

      </div>
    );
  }
}
