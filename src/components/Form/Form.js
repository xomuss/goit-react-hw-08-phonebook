import { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = {
    username: '',
    password: '',
  };

  loginInputId = shortid.generate();
  loginPassword = shortid.generate();

  handleChange = evt => {
    console.log(evt.target);
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <label>
          Username
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.username}
            name="username"
            id={this.loginInputId}
          />
        </label>
        <label>
          Password
          <input
            onChange={this.handleChange}
            type="text"
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

export default Form;
