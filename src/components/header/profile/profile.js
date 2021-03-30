import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postResource, url } from '../../../service/server-requests.js';

import './profile.css';

class Profile extends Component {

  componentDidMount() {
    const current_profile = this.props.state[11]
    console.log(this.props.state[11])
  }

  render() {

    return(
        <div id="profile">
          <input
             type="text"
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
