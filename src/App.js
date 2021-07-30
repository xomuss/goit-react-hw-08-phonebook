import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import routs from './routs';
import { connect } from 'react-redux';
import { toggleModal, getCurrentUser } from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRout';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./views/HomePage'));
const RegistrationPage = lazy(() => import('./views/RegistrationPage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));

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
        <Suspense fallback={<p>Download...</p>}>
          <Switch>
            <Route exact path={routs.home} component={HomePage} />
            <PrivateRoute
              path={routs.contacts}
              component={ContactsPage}
              redirectTo={routs.login}
            />
            <PublicRoute
              path={routs.registration}
              component={RegistrationPage}
              restricted
              redirectTo={routs.contacts}
            />
            <PublicRoute
              path={routs.login}
              restricted
              component={LoginPage}
              redirectTo={routs.contacts}
            />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
