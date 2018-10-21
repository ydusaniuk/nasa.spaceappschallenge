import React from 'react';
import { connect } from 'react-redux';

import styles from './Newsfeed.module.sass';
import panelStyles from '../../components/shared/Panel.module.sass';
import userActions from '../../store/actions/user.actions';

class Newsfeed extends React.Component {
  state = {
    email: '',
  };

  onUpdateEmail = (e) => {
    this.setState({ email: e.target.value })
  };

  onSubscribeToNewsfeed = (e) => {
    e.preventDefault();
    if (!this.state.email) return;

    this.props.onSubscribeToNewsfeed(this.state.email);
  };

  getDaysDiff = (first, second) =>
    Math.round((second - first) / (1000 * 60 * 60 * 24));

  render() {
    let daysDiff;
    if (this.props.launchTime)
      daysDiff = this.getDaysDiff(new Date(), this.props.launchTime);

    return (
      <div className={[panelStyles.Panel, styles.Newsfeed].join(' ')}>
        <h2 className={panelStyles.Title}>Don't want to miss any rockets launches?</h2>
        <p>Just leave your email and we'll ping you in 24 hours and in 1 hour</p>
        <form className={styles.Form} onSubmit={this.onSubscribeToNewsfeed}>
          <input type="email"
                 placeholder="your@email.com"
                 onChange={this.onUpdateEmail}
                 value={this.state.email} />
          <input type="submit" />
        </form>
        {
          this.props.subscriptionStatus.loaded &&
          <p className={styles.Confirm}>You have subscribed successfully</p>
        }
        {
          this.props.launchTime &&
          <div className={styles.LaunchCounter}>
            <div>The next launch will be
              {
                daysDiff > 1
                  ? <p>in {daysDiff} days</p>
                  : daysDiff === 1 ? <p>tomorrow</p> : <p>today</p>
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    launchTime: state.launches.launchTime,
    subscriptionStatus: state.users.subscriptionToNewsfeedLoadStatus,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubscribeToNewsfeed: (email) => dispatch(userActions.subscribeToNewsfeed(email)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);
