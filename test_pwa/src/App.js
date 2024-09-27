import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const permitNotification = () => {
      Notification.requestPermission().then(p => {
          console.log(p);
      }
  };
  const issueNotification = () => {
      new Notification("test", {
          body: "test body",
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={permitNotification}>通知の権限</button>
        <button onClick={issueNotification}>通知の発行</button>
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

export default App;
