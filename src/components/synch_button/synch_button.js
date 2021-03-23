import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postResource, url } from '../../service/server-requests.js';

import './synch_button.css';



class SynchButton extends Component {

  serverSynch = (e) => {
    document.getElementById('s_btn').classList.toggle('animation')
    postResource(url)
      .then((body) => {
            console.log('данные отправлены:')
            console.log(body)
            setTimeout(() => {
              document.getElementById('s_btn').classList.toggle('animation')
            }, 1500)
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
export default connect(mapStateToProps)(SynchButton);
