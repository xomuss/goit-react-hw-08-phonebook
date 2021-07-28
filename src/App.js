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
import { connect } from 'react-redux';
import { toggleModal } from './redux/auth/auth-operations';
import { authSelectors } from './redux/auth';

class App extends Component {
  state = {};
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
        {this.props.isModalOpen && (
          <Modal
            modalSwitcher={this.props.modalSwitcher}
            // modal={this.props.modal}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isModalOpen: authSelectors.getModalState(state),
});

const mapDispatchToProps = dispatch => ({
  modalSwitcher: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
