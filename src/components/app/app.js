import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import './app.css';

import Header from '../header';
import Categories from '../categories';
import Questions from '../questions';
import Confirm from '../confirm';


import Alert from '../alerts';
import { connect } from 'react-redux';

import Row  from '../row';
import Auth from '../auth'

class App extends Component {

  render() {
    let cond = this.props.state[10];
    let alert = null;
    let left = <Categories />
    let right = <Questions />;
    if (this.props.state[5]) alert = <Alert />
    let main_app = <div></div>
    if (cond) {
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
    auth: (auth_success) => dispatch(auth(auth_success))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
