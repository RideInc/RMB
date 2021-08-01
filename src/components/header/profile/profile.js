import React, { Component } from 'react';
import { connect } from 'react-redux';

import './profile.css';

class Profile extends Component {

  componentDidMount() {
    if (localStorage.Profile) {
      const current_profile = localStorage.Profile
      document.getElementById('profile_input').value = current_profile
    }

  }

  onEnter(e) {
    if (e.which === 13) {
      document.getElementById('s_btn').click()
    }
  }

  render() {

    return(
        <div id="profile">
          <input
             type="text" onKeyDown={ (e) => this.onEnter(e) }
             className="input-group-text" id="profile_input"
          />
        </div>
    )
  }
}

const mapStateToProps = (state) => ({ state: state })
const mapDispatchToProps = (dispatch) => {
  return{
    profile: (current_profile) => dispatch(profile(current_profile))
  }
};
export default connect(mapStateToProps)(Profile);
