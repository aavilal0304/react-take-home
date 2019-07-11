import React from 'react';

export default class CampaignInfo extends React.Component {
  render() {
    const {info} = this.props;
    return (
      <div className='campaign-info-container'>
        <img src={info.campaign_icon_url} alt={info.campaign_name} />
        <div className='campaign-name-container'>
          <p className='campaign-name'>{info.campaign_name}</p>
          <p className='campaign-pay-per-install'>{info.pay_per_install + ' per install'}</p>
        </div>
      </div>
    );

  }
}
