import React, { Component } from 'react';
import BaseLayout from './BaseLayout.js'
import Logo from '../logo.svg'

class Home extends Component {
  render() {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <img src={Logo} />
                </div>
            </div>
            <div className="card">
                <div className="card-body col-6">
                    React routes lets you easily have multiple pages in your app and all on the front end.
                    <br />
                    <br />
                    You should use React routes.
                </div>
            </div>
        </div>
    );
  }
}

export default Home;
