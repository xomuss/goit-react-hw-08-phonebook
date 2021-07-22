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
import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

class App extends Component {
  state = {};
  render() {
    console.log(authOperations.toggleModal);
    return (
      <div className="App">
        <Header modalSwitcher={this.props.modalSwitcher} />
        <Switch>
          <Route exact path={routs.home} component={HomePage} />
          <Route exact path={routs.contacts} component={ContactsPage} />
          <Route exact path={routs.registration} component={RegistrationPage} />
          <Route exact path={routs.login} component={LoginPage} />
        </Switch>
        {this.props.modal && (
          <Modal
            modalSwitcher={this.props.modalSwitcher}
            // modal={this.props.modal}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  modalSwitcher: () => dispatch(authOperations.toggleModal()),
});

export default connect(null, mapDispatchToProps)(App);
