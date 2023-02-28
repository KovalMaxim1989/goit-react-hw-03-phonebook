import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, FormLabel, Input, Button } from './Phonebook.styled';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeContact = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    const { name, number } = this.state;
    evt.preventDefault();
    this.props.onAddContact(name, number);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChangeContact}
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChangeContact}
          />
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

Phonebook.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default Phonebook;
