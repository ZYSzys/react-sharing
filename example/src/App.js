import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Sharing from '../../';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Sharing
            url="https://github.com/ZYSzys/react-sharing"
            title="react-sharing"
            description="Simple react social media sharing."
            sites={[
              'qzone',
              'weibo',
              'google',
              'twitter',
              'qq',
              'tencent',
              'douban',
              'linkedin',
              'facebook',
            ]}
            summary="react-sharing made social media sharing simple."
          />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
