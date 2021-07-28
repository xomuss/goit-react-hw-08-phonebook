import { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { register } from '../../redux/auth/auth-operations';

class Form extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  loginInputId = shortid.generate();
  loginPassword = shortid.generate();
  loginEmail = shortid.generate();

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <label>
          Username
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
            name="name"
            id={this.loginInputId}
          />
        </label>
        <label>
          Email
          <input
            onChange={this.handleChange}
            type="email"
            value={this.state.mail}
            name="email"
            id={this.loginEmail}
          />
        </label>
        <label>
          Password
          <input
            onChange={this.handleChange}
            type="password"
            value={this.state.password}
            name="password"
            id={this.loginPassword}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};
// альтернативная запись
// const mapDispatchToProps = dispatch => ({
//   handleSubmit: data => dispatch(register(data)),
// });

export default connect(null, mapDispatchToProps)(Form);
