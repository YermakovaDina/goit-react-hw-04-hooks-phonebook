(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(8),r=n.n(o),s=(n(16),n(10)),i=n(3),l=n(4),u=n(6),d=n(5),m=(n(17),n(18),n(0)),b=function(t){var e=t.children;return Object(m.jsx)("div",{className:"container",children:e})},h=n(9),j=n(2),f=n.n(j),p=(n(22),n(26)),O=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",number:""},t.nameInputId=Object(p.a)(),t.numberInputId=Object(p.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleOnSubmit=function(e){e.preventDefault();var n={name:t.state.name,number:t.state.number,id:Object(p.a)()};t.setState({contact:n}),t.props.onSubmit(n),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("form",{className:"form",onSubmit:this.handleOnSubmit,children:[Object(m.jsxs)("label",{className:"form_label",htmlFor:this.nameInputId,children:["Name",Object(m.jsx)("input",{className:"form_input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(m.jsxs)("label",{className:"form_label",htmlFor:this.numberInputId,children:["Number",Object(m.jsx)("input",{className:"form_input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(m.jsx)("button",{className:"form_button",type:"submit",children:"Add contact"})]})})}}]),n}(a.Component);O.protoType={onSubmit:f.a.func};var v=O,g=(n(23),function(t){var e=t.filter,n=t.onChange;return Object(m.jsxs)("label",{className:"filtr_label",children:["Find contacts by name",Object(m.jsx)("input",{className:"filtr_input",type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430. \u041f\u043e\u0438\u0441\u043a \u043d\u0435 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443 \u0432\u0432\u043e\u0434\u0438\u043c\u044b\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.",required:!0,value:e,onChange:n})]})});g.protoType={filter:f.a.string,onChange:f.a.func};var C=g,x=(n(24),function(t){var e=t.contacts,n=t.delContact;return Object(m.jsx)("ul",{className:"list",children:e.map((function(t){return Object(m.jsxs)("li",{className:"list_item",children:[Object(m.jsxs)("span",{children:[t.name,": ",t.number]}),Object(m.jsx)("button",{className:"button_list",type:"button",id:t.id,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})}),y=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.newContactId=Object(p.a)(),t.addContact=function(e){t.setState((function(t){return t.contacts.some((function(t){return t.name.includes(e.name)}))?alert("".concat(e.name," is already in contacts!")):{contacts:[e].concat(Object(s.a)(t.contacts))}}))},t.delContact=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));return t.setState({contacts:n}),n},t.chengeFilter=function(e){t.setState({filter:e.currentTarget.value.toLowerCase()})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("App componentDidMount");var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){console.log("App componentDidMount"),this.state.contacts!==e.contacts&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 contacts"),localStorage.setItem("contacts",JSON.stringify(this.state.contacts)))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())}));return Object(m.jsxs)(b,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(v,{onSubmit:this.addContact}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(C,{value:this.state.filter,onChange:this.chengeFilter}),Object(m.jsx)(x,{contacts:a,delContact:this.delContact})]})}}]),n}(a.Component),S=y;r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.4d510ab7.chunk.js.map