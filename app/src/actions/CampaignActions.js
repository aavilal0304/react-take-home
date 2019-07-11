import dispatcher from '../dispatcher/Dispatcher';

export function getAllCampaigns() {
  dispatcher.dispatch({
    type: 'GET_ALL_CAMPAIGNS'
  });
}

export function setVideoToPlay(url) {
  dispatcher.dispatch({
    type: 'SET_VIDEO_TO_PLAY',
    url: url
  });
}
