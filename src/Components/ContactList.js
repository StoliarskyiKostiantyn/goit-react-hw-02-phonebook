import React, { Component } from "react";
class ContactList extends Component {
  render() {
    return (
      <>
        <div>
          <ul>
            {this.props.contactitems.map((contactitem) => (
              <li id={contactitem.id}>
                <span>
                  {" "}
                  Name:{contactitem.name} Phone:{contactitem.phone}
                </span>
                <button
                  type="button"
                  onClick={() => this.props.onDeleteContact(contactitem.id)}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
export default ContactList;
