(this["webpackJsonpangeli-tattoo"]=this["webpackJsonpangeli-tattoo"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/angeli.8d045433.jpg"},33:function(e,t,a){e.exports=a(64)},38:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(26),m=a.n(i),o=(a(38),a(9)),r=a(10),s=a(12),c=a(11),u=function(){return l.a.createElement("header",{role:"banner"},l.a.createElement("nav",{role:"navigation"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"/submit"},"Submissions")))))},p=function(){return l.a.createElement("div",{className:"submissions-container"},l.a.createElement("div",{className:"submission"},l.a.createElement("h1",null,"Title of Tattoo"),l.a.createElement("p",null,"Description: "),l.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/ARCH-kimon-maritz-183501-unsplash.jpg",alt:"generic image"}),l.a.createElement("p",null,"Submitted by: ")),l.a.createElement("div",{className:"submission"},l.a.createElement("h1",null,"Title of Tattoo"),l.a.createElement("p",null,"Description: "),l.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/ARCH-kimon-maritz-183501-unsplash.jpg",alt:"generic image"}),l.a.createElement("p",null,"Submitted by: ")),l.a.createElement("div",{className:"submission"},l.a.createElement("h1",null,"Title of Tattoo"),l.a.createElement("p",null,"Description: "),l.a.createElement("div",{className:"image-control"},l.a.createElement("img",{src:"https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",alt:"generic image"})),l.a.createElement("p",null,"Submitted by: ")),l.a.createElement("div",{className:"submission"},l.a.createElement("h1",null,"Title of Tattoo"),l.a.createElement("p",null,"Description: "),l.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/ARCH-kimon-maritz-183501-unsplash.jpg",alt:"generic image"}),l.a.createElement("p",null,"Submitted by: ")),l.a.createElement("div",{className:"submission"},l.a.createElement("h1",null,"Title of Tattoo"),l.a.createElement("p",null,"Description: "),l.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/ARCH-kimon-maritz-183501-unsplash.jpg",alt:"generic image"}),l.a.createElement("p",null,"Submitted by: ")),l.a.createElement("div",{className:"submission"},l.a.createElement("h1",null,"Title of Tattoo"),l.a.createElement("p",null,"Description: "),l.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/ARCH-kimon-maritz-183501-unsplash.jpg",alt:"generic image"}),l.a.createElement("p",null,"Submitted by: ")),l.a.createElement("div",{className:"submission"},l.a.createElement("h1",null,"Title of Tattoo"),l.a.createElement("p",null,"Description: "),l.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/ARCH-kimon-maritz-183501-unsplash.jpg",alt:"generic image"}),l.a.createElement("p",null,"Submitted by: ")),l.a.createElement("div",{className:"submission"},l.a.createElement("h1",null,"Title of Tattoo"),l.a.createElement("p",null,"Description: "),l.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/ARCH-kimon-maritz-183501-unsplash.jpg",alt:"generic image"}),l.a.createElement("p",null,"Submitted by: ")),l.a.createElement("div",{className:"submission"},l.a.createElement("h1",null,"Title of Tattoo"),l.a.createElement("p",null,"Description: "),l.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/ARCH-kimon-maritz-183501-unsplash.jpg",alt:"generic image"}),l.a.createElement("p",null,"Submitted by: ")))},E=a(27),h=a.n(E),g=function(){return l.a.createElement("div",{className:"hero"},l.a.createElement("h1",null,"Angeli's Next Tattoo "),l.a.createElement("img",{src:h.a,alt:"a photo of Octavia Butler"}))},d=a(28),b=a(29),f=a.n(b),v=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={name:"",tattooName:"",imageUrl:"",tattooDescription:""},e.handleChange=function(t){console.log(t.target),e.setState(Object(d.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a={name:e.state.name,tattooName:e.state.tattooName,imageUrl:e.state.imageUrl,tattooDescription:e.state.tattooDescription};f.a.post("http://localhost:5000/submission",{submission:a}).then((function(e){console.log(e),console.log(e.data)}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e;return this.state.imageUrl&&(e=l.a.createElement("img",{src:this.state.imageUrl,alt:"your suggested tattoo"})),l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("h1",null,"Make a submission"),l.a.createElement("p",null,"Enter your name:"),l.a.createElement("input",{type:"text",name:"name",onChange:this.handleChange}),l.a.createElement("p",null,"Tattoo Name:"),l.a.createElement("input",{type:"text",name:"tattooName",onChange:this.handleChange}),l.a.createElement("p",null,"Tattoo Image Url:"),l.a.createElement("input",{type:"url",name:"imageUrl",onChange:this.handleChange}),e,l.a.createElement("p",null,"Tattoo Description:"),l.a.createElement("textarea",{type:"text",name:"tattooDescription",onChange:this.handleChange}),l.a.createElement("button",{type:"submit"},"Add")))}}]),a}(l.a.Component),w=a(30),y=a(6),T=function(e){Object(s.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(w.a,null,l.a.createElement(y.a,{exact:!0,path:"/submit",component:p}),l.a.createElement(y.a,{exact:!0,path:"/",component:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement("hr",null),l.a.createElement(v,null),l.a.createElement("hr",null))}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(61),a(62),a(63);m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.0da3157c.chunk.js.map