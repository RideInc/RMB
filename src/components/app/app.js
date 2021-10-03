import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './app.css';

import Header from '../header';
import Categories from '../categories';
import Questions from '../questions';
import Confirm from '../confirm';


import Alert from '../alerts';
import { connect } from 'react-redux';
import { auth, profile } from '../actions'

import Row  from '../row';
import Auth from '../auth'

import { url, checkAuth } from '../../service/server-requests.js';

class App extends Component {

  cancelTabulation = (e, func) => {
    if ('TEXTAREA' === e.target.tagName && e.keyCode === 9) {
      e.preventDefault();
      let textarea      = e.target
      let selStart      = textarea.selectionStart
      let selEnd        = textarea.selectionEnd
      let before        = textarea.value.substring( 0, selStart )
      let slection      = textarea.value.substring( selStart, selEnd )
      let after         = textarea.value.substr( selEnd )
      let selection_new = '\t'
      textarea.value    = before + selection_new + after
    }
  }

  render() {
    let change = this.props.state[12]
    window.addEventListener('beforeunload', function (e) {
      console.log(change)
      if (change) {
        let confirmationMessage = "";
        e.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    });


    let alert = null;
    let left = <Categories />
    let right = <Questions />;
    if (this.props.state[5]) alert = <Alert />
    let main_app = <div></div>
    if (localStorage.token) {
      main_app = (
        <React.Fragment>
          { alert }
          <Header />
          <Confirm />
          <Router>
            <Row left={left} right={right}/>
          </Router>
        </React.Fragment>
      )
    } else {
      main_app = <Auth />
    }

    return (
      <div className="app"
        onKeyDown={ (e) => this.cancelTabulation(e) }>
        { main_app }
      </div>
    );
  };
};


const mapStateToProps = (state) => ({ state: state })
const mapDispatchToProps = (dispatch) => {
  return {
    auth: (auth_success) => dispatch(auth(auth_success)),
    profile: (current_profile) => dispatch(profile(current_profile))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
