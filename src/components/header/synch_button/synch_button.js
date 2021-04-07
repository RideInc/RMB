import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postResource, url } from '../../../service/server-requests.js';
import { profile } from '../../actions'

import './synch_button.css';

class SynchButton extends Component {

  serverSynch = (e) => {
    document.getElementById('s_btn').classList.toggle('animation')
    let current_profile = localStorage.Profile
    let changes = this.props.state[12]
    postResource(url, current_profile, changes)
      .then((body) => {
            setTimeout(() => {
              document.getElementById('s_btn').classList.toggle('animation')
            }, 1500)
            this.props.profile(body.next_profile)
            localStorage.setItem('Base', JSON.stringify(body.data))
            localStorage.setItem('Profile', body.next_profile)
            location.reload()

      })
  }

  render() {

    return(
        <div id="synchButton">
          <button
             type="button" id="s_btn" onClick={ (e) => this.serverSynch(e) }
             className="btn btn-secondary synchButton">
             <i className="fas fa-sync"></i>
          </button>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({ state: state })
const mapDispatchToProps = (dispatch) => {
  return {
    profile: (current_profile) => dispatch(profile(current_profile))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SynchButton);
