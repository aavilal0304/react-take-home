import {EventEmitter} from 'events';

import dispatcher from '../dispatcher/Dispatcher';
import axios from 'axios';

class CampaignStore extends EventEmitter {
  constructor() {
    super();
    this.campaignData = {
      isLoading: false,
      isError: false,
      videoToPlay: null,
      campaignList: []
    }
  }
  getStoreData() {
    return this.campaignData;
  }
  setVideoToPlay(url) {
    this.campaignData.videoToPlay = url;
    this.emit('change');
  }
  getAllCampaigns() {
    this.campaignData.isLoading = true;
    this.emit('change');
    axios.get('https://www.plugco.in/public/take_home_sample_feed')
      .then((response) => {
        this.campaignData.isError = false;
        this.campaignData.campaignList = response.data.campaigns;
      })
      .catch((error) => {
        this.campaignData.isError = true;
        this.campaignData.campaignList = [];
        this.emit('change');
      })
      .finally(() => {
        this.campaignData.isLoading = false;
        this.emit('change');
      });
  }
  handleActions(action) {
    switch(action.type) {
      case 'GET_ALL_CAMPAIGNS': {
        this.getAllCampaigns();
        break;
      }
      case 'SET_VIDEO_TO_PLAY': {
        this.setVideoToPlay(action.url);
        break;
      }
      default:
    }
  }
}

const campaignStore = new CampaignStore();
dispatcher.register(campaignStore.handleActions.bind(campaignStore));

export default campaignStore;
