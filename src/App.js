import React, { Component } from 'react'
import { Helmet } from 'react-helmet';
function App() {
  return (
    <div className="App">
        <Helmet>
          <title>Turbo Todo</title>
          <meta name="description" content="Todos!" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
      <header className="App-header">
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
