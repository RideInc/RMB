import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postResource, url } from '../../../service/server-requests.js';
import { profile } from '../../actions'

import './exit_btn.css';

class ExitBtn extends Component {

  noName = (e) => {
    console.log('no_name')
    localStorage.removeItem('Base')
    localStorage.removeItem('token')
    localStorage.removeItem('Profile')
    location.reload()
  }

  render() {

    return(
        <div id="exitBtn">
          <button
             type="button" id="s_btn" onClick={ (e) => this.noName(e) }
             className="btn btn-secondary exitBtn">
             <i className="fas fa-sign-out-alt"></i>
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
export default connect(mapStateToProps, mapDispatchToProps)(ExitBtn);
