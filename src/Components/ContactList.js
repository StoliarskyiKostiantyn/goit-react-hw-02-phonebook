import shortid from "shortid";
import React, { Component } from "react";
class ContactList extends Component{
    state = {
      contactitems:[],
    }
    contactId = shortid.generate();
    render() {
        return (
        <>
            <div>
                <ul>
                     {this.props.contactitems.map(contactitem => (
        <li key={this.contactId}>
           <span> Name:{contactitem.name} Phone:{contactitem.phone}</span>
        </li>
      ))}
                </ul>
            </div>
        </>
    )  }
}
export default ContactList;