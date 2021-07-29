import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import routs from './routs';
import HomePage from './views/HomePage';
import ContactsPage from './views/ContactsPage';
import RegistrationPage from './views/RegistrationPage';
import LoginPage from './views/LoginPage';
import { connect } from 'react-redux';
import { toggleModal, getCurrentUser } from './redux/auth/auth-operations';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    console.log(toggleModal);
    return (
      <div className="App">
        <Header modalSwitcher={this.props.modalSwitcher} />
        <Switch>
          <Route exact path={routs.home} component={HomePage} />
          <Route exact path={routs.contacts} component={ContactsPage} />
          <Route exact path={routs.registration} component={RegistrationPage} />
          <Route exact path={routs.login} component={LoginPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
