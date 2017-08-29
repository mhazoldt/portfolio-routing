import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Routes</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active m-2">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default BaseLayout;
