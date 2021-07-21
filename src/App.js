import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import routs from './routs';
import HomePage from './views/HomePage';
import ContactsPage from './views/ContactsPage';
import RegistrationPage from './views/RegistrationPage';
import LoginPage from './views/LoginPage';
import Modal from './components/Modal';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path={routs.home} component={HomePage} />
          <Route exact path={routs.contacts} component={ContactsPage} />
          <Route exact path={routs.registration} component={RegistrationPage} />
          <Route exact path={routs.login} component={LoginPage} />
        </Switch>
        <Modal />
      </div>
    );
  }
}

export default App;
