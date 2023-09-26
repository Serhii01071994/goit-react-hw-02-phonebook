import { Component } from 'react';
import css from './PhoneBook.module.css';

export class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className={css.container}>
        <form>
          <label>
            <span>Phonebook</span>
            <input
              onChange={this.handleInputChange}
              value={this.state.name}
              type="text"
              name="name"
              required
            />
          </label>
          <label>
            <span>Number</span>
            <input
              onChange={this.handleInputChange}
              value={this.state.number}
              type="tel"
              name="number"
              required
            />
          </label>
          <button>Add contact</button>
        </form>
      </div>
    );
  }
}
