import React from 'react';
import Loader from '../loader';
import CampaignInfo from './CampaignInfo';
import CampaignMediaList from './CampaignMediaList';

export default class Campaign extends React.Component {
  renderCampaigns() {
    return this.props.campaingData.campaignList.map((campaign, index) => {
      return (
        <div key={'campaign-'+index}>
          <CampaignInfo key={'ci-' + index} info={campaign} />
          <CampaignMediaList key={'cm-' + index} medias={campaign.medias} />
        </div>
      );
    });
  }
  render() {
    let errorMessage = <div className="error-message"><p>Ooops! Something went wrong, please reload page.</p></div>
    return (
      <div className='campaign-media-container'>
        {this.props.campaingData.isLoading ? <Loader /> : this.props.campaingData.isError ? errorMessage : this.renderCampaigns()}
      </div>
    );
  }
}
