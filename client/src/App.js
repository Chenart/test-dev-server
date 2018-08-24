import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // Create a state property called 'response'
  state = {
    //response: ''
    //test: '',
    kpString: 'dummy',
    isMissingTranslation: 'dummy',
    missingLanguages: 'dummy',
    timestamp: 'dummy'
  };

  // After component mounts, call the api and catch the result
  componentDidMount() {
    this.callApi ()
      .then(res => this.parseData(res.express))
      //.then(res => this.setState({test: JSON.stringify(res.express) }))
      .catch(err => console.log(err));
  };

  // Definition for API call method
  callApi = async () => {
      // Fetch response from /api/hello endpoint
    const response = await fetch('/api/hello');
      // Filter out only the json part of the response result (like intent?)
    const body = await response.json();

    // If it takes too long, throw error?
    if (response.status !== 200) throw Error(body.message);

    // Process the response
    this.parseData(response);

    return body;
  };

  // JS already parsed our res.express for some reason. Why?
  parseData(data) {
    // set state
    /* TODO: find a way to regenerate db.json when refresh */
    this.setState({kpString: data.kpString});
    this.setState({isMissingTranslation: data.isMissingTranslation});
    this.setState({missingLanguages: data.missingLanguages});
    this.setState({timestamp: data.timestamp});

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the mock API server</h1>
        </header>
        <p><b>samsungknox.com string:</b> {this.state.kpString}</p>
        <p><b>Missing translation?:</b> {this.state.isMissingTranslation}</p>
        <p><b>Missing languages:</b> {this.state.missingLanguages}</p>
        <p><b>Timestamp:</b> {this.state.timestamp}</p>
      </div>
    );
  }
}

export default App;
