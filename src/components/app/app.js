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

  render() {
    console.log(this.props.state[12])
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
      <div className="app">
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
