import React, { Component } from 'react';
import BaseLayout from './BaseLayout.js'

class About extends Component {
  render() {
    return (
        <div className="container">
            <h1 className="m-4">About</h1>
            <div className="card cold-6">
                <div className="card-body">
                    <blockquote className="blockquote" cite="https://en.wikipedia.org/wiki/React_(JavaScript_library)">
                       "React was created by Jordan Walke, a software engineer at Facebook. He was influenced by Angular (application platform) and XHP, an HTML component framework for PHP.[7] It was first deployed on Facebook's newsfeed in 2011 and later on Instagram.com in 2012.[8] It was open-sourced at JSConf US in May 2013. React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook's React.js Conf in February 2015 and open-sourced in March 2015. On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React framework library for building user interfaces.[9] React Fiber will become the foundation of any future improvements and feature development of the React framework.[10]"
                       <br />
                       <br />
                       <footer className="blockquote-footer">-Wikipedia, <cite title="Source Title">React (JavaScript library). (2015). Wikipedia. Retrieved 29 August, 2017, from https://en.wikipedia.org/wiki/React_(JavaScript_library)</cite></footer>
                   </blockquote>
                    
                </div>
            </div>
        </div>
    );
  }
}

export default About;