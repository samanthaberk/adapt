import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home/Home';
import Dashboard from '../components/Dashboard/Collapsible';
import NotFound from '../components/NotFound/NotFound';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userAnswers: {}
    }
  }

  updateState = (userAnswers) => {
    this.setState ({
      userAnswers
    })
  }

  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
