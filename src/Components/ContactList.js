function ContactList({contactitems}) {
    return (
        <>
            <div>
                <h2>Contacts</h2>
                <ul>
                     {contactitems.map(contactitem => (
        <li key={contactitem.id}>
           <span> Name:{contactitem.name} Phone:{contactitem.phone}</span>
        </li>
      ))}
                </ul>
            </div>
        </>
    )
}
export default ContactList;