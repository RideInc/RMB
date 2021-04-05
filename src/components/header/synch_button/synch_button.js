import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postResource, url } from '../../../service/server-requests.js';
import { update, profile } from '../../actions'

import './synch_button.css';

class SynchButton extends Component {

  serverSynch = (e) => {
    document.getElementById('s_btn').classList.toggle('animation')
    let profile = this.props.state[11]
    postResource(url, profile)
      .then((body) => {
            console.log('данные отправлены:')
            console.log(body)
            setTimeout(() => {
              document.getElementById('s_btn').classList.toggle('animation')
            }, 1500)
            this.props.profile(body.next_profile)
            localStorage.setItem('Base', JSON.stringify(body.data))

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
    update: () => dispatch(update()),
    profile: (current_profile) => dispatch(profile(current_profile))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SynchButton);
