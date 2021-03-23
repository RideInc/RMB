import React, { Component } from 'react';
import Confirm from '../confirm';

import { connect } from 'react-redux';
import { confirm, auth } from '../actions';

import './auth.css';

class Auth extends Component {

  forceEnter = () => {
    this.props.auth(true)
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.confirm(
        () => this.forceEnter(),
        null, 'auth', '', '', true
      )
      document.getElementById('modal_input').focus()
    },100)
  }

  render() {

    return(
      <div className='auth'>
        <div id="black_back">
          <Confirm />
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({ state: state })
const mapDispatchToProps = (dispatch) => {
  return {
    confirm: (func, id, type, name, new_name, dont_close) => {
      dispatch(confirm(func, id, type, name, new_name, dont_close))
    },
    auth: (auth_success) => dispatch(auth(auth_success))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
