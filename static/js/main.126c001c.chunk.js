(this["webpackJsonpadvice-app"]=this["webpackJsonpadvice-app"]||[]).push([[0],{23:function(e,a,t){e.exports=t(49)},44:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(17),i=t.n(l),r=t(18),s=t(19),o=t(22),m=t(21),u=t(20),h=t.n(u),d=(t(44),t(3)),p=t(4);function v(){return c.a.createElement("div",{class:"social-container"},c.a.createElement("h3",{className:"heading"},"Created by Anjali Sharma"),c.a.createElement("a",{href:"https://www.linkedin.com/in/anjalisharmaaa/",className:"linkedin social"},c.a.createElement(d.a,{icon:p.b,size:"2x"})),c.a.createElement("a",{href:"https://github.com/AnjaliSharma1234",className:"github social"},c.a.createElement(d.a,{icon:p.a,size:"2x"})),c.a.createElement("a",{href:"https://twitter.com/AnjaliiSharmaaa",className:"twitter social"},c.a.createElement(d.a,{icon:p.d,size:"2x"})),c.a.createElement("a",{href:"https://medium.com/@anjalisharmaaa",className:"medium social"},c.a.createElement(d.a,{icon:p.c,size:"2x"})))}var E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={advice:""},e.fetchAdvice=function(){h.a.get("https://api.adviceslip.com/advice").then((function(a){var t=a.data.slip.advice;e.setState({advice:t})})).catch((function(e){console.log(e)}))},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){var e=this.state.advice;return c.a.createElement("div",null,c.a.createElement("div",{className:"app"},c.a.createElement("h1",null,"WELCOME TO GYAANI BABA"),c.a.createElement("h3",null,"Your personal advisor to keep you motivated and calm amidst chaos"),c.a.createElement("div",{className:"card"},c.a.createElement("h2",null,e),c.a.createElement("button",{className:"buton",onClick:this.fetchAdvice},c.a.createElement("span",null,c.a.createElement("h4",null,"Unlock today's Gyaan"))))),c.a.createElement("footer",null,c.a.createElement(v,null)))}}]),t}(c.a.Component);i.a.render(c.a.createElement(E,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.126c001c.chunk.js.map