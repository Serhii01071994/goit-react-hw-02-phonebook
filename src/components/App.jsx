import React, {Component} from "react";
import { PhoneBook } from "./PhoneBook/PhoneBook";
import { ContactList } from "./ContactList/ContactList";

export class App extends Component {

  render() {
    return <div>
      <PhoneBook />
      <ContactList/>
    </div>;
  }
};
