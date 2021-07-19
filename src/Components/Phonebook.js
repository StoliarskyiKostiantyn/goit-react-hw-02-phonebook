import { directive } from "@babel/types";
import React, { Component } from "react";

class Phonebook extends Component {
    state = {
  contacts: [],
  name: ''
    }
    onNameChange = event => { this.setState({ name: event.currentTarget.value });}
     render() {
    return (
        <>
            <form>
                <label>
                    Имя <input type="text" value={this.state.name} onChange={this.onNameChange}></input>
                </label>
           </form>
      </>
    );
  }
 }
export default Phonebook;