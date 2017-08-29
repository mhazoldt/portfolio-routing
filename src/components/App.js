import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './BaseLayout.js'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="container">
       <div className="jumbotron m-4">
          <h1 className="display-3">Welcome to React Routes!</h1>
          <p className="lead">There is so much you can do.</p>
          <hr className="my-4" />
          <p>The possibilities are endless.</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
