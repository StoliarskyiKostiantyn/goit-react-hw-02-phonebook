(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={form_input:"Styles_form_input__1ms1M",phonebook_form:"Styles_phonebook_form__2hc6b",form_btn:"Styles_form_btn__15-yR",contact:"Styles_contact__2aNmx"}},28:function(t,e,n){},29:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),r=n(20),c=n.n(r),i=(n(28),n(23)),s=n(3),u=n(4),l=n(6),h=n(5),b=(n(29),n(21)),m=n(22),p=n.n(m),d=n(2),j=n.n(d),f=n(0),O=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={name:"",phone:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,o=n.value;t.setState(Object(b.a)({},a,o))},t.handleSubmit=function(e){var n=t.state,a=n.name,o=n.phone,r={id:p.a.generate(),name:a,phone:o},c=t.props.contacts.some((function(e){return e.name===t.state.name})),i=t.props.contacts.some((function(e){return e.number===t.state.phone}));return e.preventDefault(),c?alert(t.state.name+" \u0443\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d(\u0430) \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"):i?alert("\u0423\u0436\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u043d\u043e\u043c\u0435\u0440\u043e\u043c: "+t.state.phone):""===t.state.name||""===t.state.phone?alert("\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0418\u043c\u044f \u0438 \u043d\u043e\u043c\u0435\u0440."):(t.props.onSubmit(r),void t.reset())},t.reset=function(){t.setState({name:"",phone:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:j.a.phonebook_form,children:[Object(f.jsxs)("label",{children:["\u0418\u043c\u044f",Object(f.jsx)("input",{type:"text",className:j.a.form_input,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",value:this.state.name,onChange:this.handleChange,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),"Phone",Object(f.jsx)("input",{type:"text",className:j.a.form_input,name:"phone",value:this.state.phone,onChange:this.handleChange,title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsx)("button",{type:"submit",className:j.a.form_btn,children:"Add contact"})]})})}}]),n}(a.Component),C=(n(11),function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{children:Object(f.jsx)("ul",{children:this.props.contactitems.map((function(e){return Object(f.jsxs)("li",{id:e.id,className:j.a.contact,children:[Object(f.jsxs)("span",{children:[" Name:",e.name," Phone:",e.phone]}),Object(f.jsx)("button",{type:"button",onClick:function(){return t.props.onDeleteContact(e.id)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})}))})})})}}]),n}(a.Component));var v=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440",Object(f.jsx)("input",{type:"text",value:e,onChange:n})]})},x=function(t){Object(l.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",phone:"459-12-56"},{id:"id-2",name:"Hermione Kline",phone:"443-89-12"},{id:"id-3",name:"Eden Clements",phone:"645-17-79"},{id:"id-4",name:"Annie Copeland",phone:"227-91-26"}],filter:""},t.forSubmiHandler=function(e){t.setState((function(n){return{contacts:[].concat(Object(i.a)(t.state.contacts),[e])}}))},t.onFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContact=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.onDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getVisibleContact();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:this.forSubmiHandler,contacts:this.state.contacts}),Object(f.jsx)(v,{value:this.state.filter,onChange:this.onFilterChange}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(C,{contactitems:t,onDeleteContact:this.onDeleteContact})]})}}]),n}(a.Component);c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.70e8ee12.chunk.js.map