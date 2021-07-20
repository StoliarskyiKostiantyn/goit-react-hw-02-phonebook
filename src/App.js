import './App.css';
import Phonebook from './Components/Phonebook';
import React, { Component } from "react";
import ContactList from './Components/ContactList';
class App extends Component {
  state = {
    contacts: [],
    }
  forSubmiHandler = data => {
    this.state.contacts.push(data);
  }

  render() {
    return (
      <>
        <Phonebook onSubmit={this.forSubmiHandler}></Phonebook>
        <ContactList contactitems={this.state.contacts}/>
      </>)
  }
}
 

export default App;
