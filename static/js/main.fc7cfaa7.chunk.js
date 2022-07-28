(this["webpackJsonplottery-react"]=this["webpackJsonplottery-react"]||[]).push([[0],{220:function(t,e,n){},237:function(t,e){},243:function(t,e){},244:function(t,e){},270:function(t,e){},272:function(t,e){},283:function(t,e){},285:function(t,e){},295:function(t,e){},297:function(t,e){},409:function(t,e){},411:function(t,e){},416:function(t,e){},418:function(t,e){},425:function(t,e){},437:function(t,e){},440:function(t,e){},445:function(t,e){},533:function(t,e,n){"use strict";n.r(e);var a=n(53),s=n.n(a),c=n(209),r=n.n(c),i=(n(220),n(27)),o=n(77),u=n(5),l=n(6),p=n(10),h=n(9),b=n(210),f=n.n(b);window.ethereum.request({method:"eth_requestAccounts"});var d=new f.a(window.ethereum),j=new d.eth.Contract([{constant:!0,inputs:[],name:"manager",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pickWinner",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getPlayers",outputs:[{name:"",type:"address[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"enter",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{name:"",type:"uint256"}],name:"players",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}],"0xA6042EBc3b11043427Cdb7A3801429E7dC58050d"),y=n(13),m=function(t){Object(p.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={manager:"",players:[],balance:"",value:"",message:""},t.onSubmit=function(){var e=Object(o.a)(Object(i.a)().mark((function e(n){var a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d.eth.getAccounts();case 3:return a=e.sent,t.setState({message:"Waiting on transaction success..."}),e.next=7,j.methods.enter().send({from:a[0],value:d.utils.toWei(t.state.value,"ether")});case 7:t.setState({message:"You have been entered!"});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.onClick=Object(o.a)(Object(i.a)().mark((function e(){var n;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.eth.getAccounts();case 2:return n=e.sent,t.setState({message:"Waiting on transaction success..."}),e.next=6,j.methods.pickWinner().send({from:n[0]});case 6:t.setState({message:"A winner has been picked!"});case 7:case"end":return e.stop()}}),e)}))),t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=Object(o.a)(Object(i.a)().mark((function t(){var e,n,a;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.methods.manager().call();case 2:return e=t.sent,t.next=5,j.methods.getPlayers().call();case 5:return n=t.sent,t.next=8,d.eth.getBalance(j.options.address);case 8:a=t.sent,this.setState({manager:e,players:n,balance:a});case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"Lottery Contract"}),Object(y.jsxs)("p",{children:["This contract is managed by ",this.state.manager,". There are currently"," ",this.state.players.length," people entered, competing to win"," ",d.utils.fromWei(this.state.balance,"ether")," ether!"]}),Object(y.jsx)("hr",{}),Object(y.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(y.jsx)("h4",{children:"Want to try your luck?"}),Object(y.jsxs)("div",{children:[Object(y.jsx)("label",{children:"Amount of ether to enter"}),Object(y.jsx)("input",{value:this.state.value,onChange:function(e){return t.setState({value:e.target.value})}})]}),Object(y.jsx)("button",{children:"Enter"})]}),Object(y.jsx)("hr",{}),Object(y.jsx)("h4",{children:"Ready to pick a winner?"}),Object(y.jsx)("button",{onClick:this.onClick,children:"Pick a winner!"}),Object(y.jsx)("hr",{}),Object(y.jsx)("h1",{children:this.state.message})]})}}]),n}(s.a.Component),v=m,g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,537)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),s(t),c(t),r(t)}))};r.a.createRoot(document.getElementById("root")).render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(v,{})})),g()}},[[533,1,2]]]);
//# sourceMappingURL=main.fc7cfaa7.chunk.js.map