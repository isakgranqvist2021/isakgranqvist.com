(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(34),c=a.n(i),o=(a(43),a(7)),r=a(8),l=a(10),h=a(9),u=(a(44),a(19)),d=a(61);var p=Object(d.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{open:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"toggle":return{open:!e.open};case"close":return{open:!1};case"open":return{open:!0};default:return e}})),b=a(2),m=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).state={open:!1},n.links=[{to:"/",text:"home",icon:"roofing"},{to:"/about",text:"about",icon:"help_outline"},{to:"/contact",text:"contact",icon:"mail_outline"},{to:"/projects",text:"projects",icon:"work_outline"}],n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.subscribe((function(){return e.setState({open:p.getState().open})}))}},{key:"toggle",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("nav",{className:this.state.open?"open":null,children:Object(b.jsxs)("div",{className:"nav-content",children:[Object(b.jsx)(u.b,{onClick:function(){return p.dispatch({type:"close"})},to:"/",children:Object(b.jsx)("img",{src:"https://static.isakgranqvist.com/svg/logo.svg",alt:"site logo"})}),Object(b.jsx)("div",{className:"link-group",children:this.links.map((function(e,t){return Object(b.jsx)(u.b,{onClick:function(){return p.dispatch({type:"close"})},to:e.to,children:e.text},t)}))})]})}),Object(b.jsx)("div",{onClick:function(){return p.dispatch({type:"close"})},className:this.state.open?"filler open":"filler"})]})}}]),a}(s.a.Component),g=(a(51),a(52),a(59)),j=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).images=["angular.svg","go.svg","mongodb.svg","mysql.svg","nodejs.svg","react.svg","vue.svg"],window.document.title="Isak Granqvist - Swedish Software Developer",n}return Object(r.a)(a,[{key:"render",value:function(){return Object(b.jsx)(g.a.div,{className:"home-page",initial:"hidden",animate:"visible",variants:{hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1}},children:Object(b.jsxs)("div",{className:"hero-section",children:[Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("div",{className:"content-inner",children:[Object(b.jsx)("h1",{children:"swedish software developer"}),Object(b.jsx)("p",{children:"Are you looking for a software developer who loves learning new technologies?"}),Object(b.jsx)("p",{children:"I love working on new and challenging problems and come up with creative and innovative solutions."}),Object(b.jsxs)("div",{className:"actions",children:[Object(b.jsx)(u.b,{to:"/projects",children:"Projects"}),Object(b.jsx)("a",{href:"https://github.com/isakgranqvist2021",children:"Github"})]})]})}),Object(b.jsx)("div",{className:"img"})]})})}}]),a}(s.a.Component),v=a(37);a(53);var f=Object(d.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{value:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"enter":return{value:t.value,type:t.type};case"leave":return{value:null,type:t.type};default:return e}})),O={bobbabean:"\n    This project was initially given to me as a single html file with the purpose of re-building the navigation system but I ended up rebuilding the whole webpage. \n    I chose Angular 11 as my primary framework because I was extremely comfortable with Angular and still is. \n    The source code can be provided if you would be interested in that. In retrospect I would have chosen React rather than Angular due to project size. \n    React seems more suitable for building smaller projects in my opinion. \n    I had about 10 re-orders from the person I was working with on this which tells me I did something correctly.",admin_dashboard:"\n    I started this project to manage blog posts on my main site and after a while it became more about perfecting the application rather than solving an issue I had. \n    I later realized that an administration interface is slightly overkill for the page I had built. \n    I went with the material design patterns as my primary direction for styling the application. \n    I built a major part of the app in Go and learnt a lot of valuable lessons. \n    One being from trying to mutate pointers and getting bad values in the json on the client which is unheard of when working in a language like JavaScript. \n    The application supports spawning child processes for managing multiple applications on the same server. \n    Go has grown to become one of my go-to languages when building a new application because if it\u2019s performance and ease of writing code.",restaurant_app:"\n    This project was presented to me as - build a restaurant app like uber-eats. \n    This was a school project and I used two different API's in the development process. \n    Documenu for fetching restaurant data and MapboxGL for the map integration. \n    If given the same project today there are a lot of things I would have done differently. \n    There was a restriction on the project as well which was to not use a JavaScript framework. \n    Which obviously made the process a lot more challenging.",calendar_app:"\n    The project was presented as a specification list and I have developed most of the things with moderate success. \n    The restrictions were not to use a SPA framework which of course made things a lot more challenging. \n    The backend was built in Node.js + Express and the client in pure JavaScript. \n    The project also makes use of sessions to enable the sign-in and sign-up features which was a requirement.",who_am_i:"\n    I am a 23 year old technology enthusiast and  \u201cmostly\u201d self-taught software developer. \n    I have always been interested in computers and technology. \n    I have mostly been interested in video games throughout my childhood like most young guys are. \n    I was especially into the competitive aspect of video games. \n    I mostly played titles like World Of Warcraft and League Of Legends. \n    I am still interested in video games but more ones that challenge my brain like chess.",development_journey:"\n    At the age of eighteen I began watching youtube videos and searching online for programming related content and ended up learning HTML, CSS, JavaScript, \n    it was love at first sight, I instantly became obsessed with learning new programming stuff. \n    I have tried plenty of programming languages through the years. \n    I would consider myself a JavaScript developer but I have moderate expertise in the following languages. \n    These are my current languages from best to worst: [ JavaScript, TypeScript, Golang, Python, C# ]. \n    I have since built countless crud applications, numerous command line tools, and a couple of games. \n    Most of my web applications have been built with the MEAN-stack. \n    Like this application your currently browsing is built with React and C#. \n    Currently I am really into building React applications because it\u2019s so lightweight and allows for the programmer to decide the program structure which of course might be a double edged sword. \n    Angular allows for truly object oriented programming and I would say that\u2019s the place where I really began understanding the principles of object oriented programming.",goals:"\n    My number one goal for the foreseeable future is to become a hireable software developer where I can devote my drive to and hopefully produce excellent software together with fun and inspiring colleagues. \n    Outside of work/study life I have very minimal goals like improving at chess and of course being happy. \n    Being in a company where excellent software is being produced and where learning is happening on a daily basis would be a dream come true."};function y(e){var t=["block"];return e.data.visible||t.push("hide"),e.data.focused&&t.push("focused"),Object(b.jsxs)("div",{className:t.map((function(e){return e})).join(" "),children:[Object(b.jsx)("h2",{children:e.data.title}),Object(b.jsx)("p",{children:e.data.body}),Object(b.jsx)("div",{onMouseEnter:function(){return f.dispatch({type:"enter",value:e.data.i})},onMouseLeave:function(){return f.dispatch({type:"leave"})},className:"circle-toggle"})]})}var x=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).state={blocks:[{title:"Who am I?",body:O.who_am_i,visible:!0,focused:!1},{title:"Development Journey",body:O.development_journey,visible:!0,focused:!1},{title:"My Goals",body:O.goals,visible:!0,focused:!1}]},window.document.title="Isak Granqvist - About Me",n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.subscribe((function(){"enter"===f.getState().type&&null!=f.getState().value?e.setState({blocks:e.state.blocks.map((function(e,t){return f.getState().value===t&&(e.focused=!0),e.visible=t===f.getState().value,e}))}):e.setState({blocks:e.state.blocks.map((function(e){return e.focused=!1,e.visible=!0,e}))})}))}},{key:"render",value:function(){return Object(b.jsxs)(g.a.div,{className:"container about-page",initial:"hidden",animate:"visible",variants:{visible:{x:"0"},hidden:{x:"-100%"}},children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"About"})}),this.state.blocks.map((function(e,t){return Object(b.jsx)(y,{data:Object(v.a)({i:t},e)},t)})),Object(b.jsx)("footer",{children:Object(b.jsxs)("p",{children:["If you would like to have a longer chat about programming or potentially hiring me, you can reach me via mail or the ",Object(b.jsx)(u.b,{to:"/contact",children:"contact form"})]})})]})}}]),a}(s.a.Component),w=a(32),k=a.n(w),I=a(36);a(55);function S(){return(S=Object(I.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:8081/api/send-mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e){return e.text.length>0?Object(b.jsx)("div",{className:"alert ".concat(e.type),children:Object(b.jsx)("p",{children:e.text})}):Object(b.jsx)("div",{className:"alert"})}var q=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).state={email:"",name:"",message:"",alert:{type:"",text:""}},window.document.title="Isak Granqvist - Contact Me",n}return Object(r.a)(a,[{key:"submit",value:function(){var e=this;(function(e){return S.apply(this,arguments)})({email:this.state.email,name:this.state.name,message:this.state.message}).then((function(t){return t.success?e.setState({alert:{type:"success",text:t.message},email:"",name:"",message:""}):e.setState({alert:{type:"error",text:t.message}})})).catch((function(t){return e.setState({alert:{type:"error",text:"unable to send mail"}})}))}},{key:"render",value:function(){var e=this;return Object(b.jsxs)(g.a.div,{className:"container contact-page",initial:"hidden",animate:"visible",variants:{visible:{x:"0"},hidden:{x:"100%"}},children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{children:"Contact"})}),Object(b.jsxs)("form",{children:[Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"E-mail"}),Object(b.jsx)("input",{placeholder:"peter-smith@email.com",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})}})]}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"What should I call you?"}),Object(b.jsx)("input",{placeholder:"Peter Smith",value:this.state.name,onChange:function(t){return e.setState({name:t.target.value})}})]}),Object(b.jsxs)("fieldset",{children:[Object(b.jsx)("legend",{children:"Message"}),Object(b.jsx)("textarea",{placeholder:"Message",value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})}})]}),Object(b.jsxs)("div",{className:"form-footer",children:[Object(b.jsx)(N,{type:this.state.alert.type,text:this.state.alert.text}),Object(b.jsx)("span",{}),Object(b.jsx)("button",{type:"button",onClick:function(){return e.submit()},children:"Send Message"})]})]}),Object(b.jsxs)("footer",{children:[Object(b.jsxs)("p",{title:"email",children:[Object(b.jsx)("img",{src:"https://static.isakgranqvist.com/icons/letter.png",alt:"letter icon"}),"isakwebdev@gmail.com"]}),Object(b.jsxs)("p",{title:"discord",children:[Object(b.jsx)("img",{src:"https://static.isakgranqvist.com/icons/discord.png",alt:"Discord icon"})," IsakGranqvist#6926"]})]})]})}}]),a}(s.a.Component),C=(a(56),[{label:"Bobbabean App",description:O.bobbabean,focused:0,images:[{src:"https://static.isakgranqvist.com/projects/bobbabean_a.png",alt:"Landing Page"},{src:"https://static.isakgranqvist.com/projects/bobbabean_b.png",alt:"Products Section"},{src:"https://static.isakgranqvist.com/projects/bobbabean_c.png",alt:"Description Section"},{src:"https://static.isakgranqvist.com/projects/bobbabean_d.png",alt:"Footer Section"}],href:"https://bobbabean.com",github:null},{label:"Administration Dashboard",description:O.admin_dashboard,focused:0,images:[{src:"https://static.isakgranqvist.com/projects/admin_a.png",alt:"Sign In Screen"},{src:"https://static.isakgranqvist.com/projects/admin_b.png",alt:"Dashboard Screen"},{src:"https://static.isakgranqvist.com/projects/admin_c.png",alt:"Modify Account Screen"},{src:"https://static.isakgranqvist.com/projects/admin_d.png",alt:"Accounts Screen"}],href:null,github:"https://github.com/isakgranqvist2021/Administration-UI"},{label:"Restaurant App",description:O.restaurant_app,focused:0,images:[{src:"https://static.isakgranqvist.com/projects/restaurant_a.png",alt:"Landing Page"},{src:"https://static.isakgranqvist.com/projects/restaurant_b.png",alt:"Landing Page With Menu Open"},{src:"https://static.isakgranqvist.com/projects/restaurant_c.png",alt:"Restaurant Page"},{src:"https://static.isakgranqvist.com/projects/restaurant_d.png",alt:"Restaurant Page With Checkout Window Open"}],href:"https://restaurants-apiabcdfg123123.herokuapp.com/",github:"https://github.com/isakgranqvist2021/vigilant-octo-potato"},{label:"Calendar App",description:O.calendar_app,focused:0,images:[{src:"https://static.isakgranqvist.com/projects/calendar_a.png",alt:"Calendar View"},{src:"https://static.isakgranqvist.com/projects/calendar_b.png",alt:"My Events View"},{src:"https://static.isakgranqvist.com/projects/calendar_c.png",alt:"Modify Event View"}],href:"https://kalendarapp123.herokuapp.com/sign-in",github:"https://github.com/isakgranqvist2021/turbo-lamp"}]),_=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).state={focused:e.data.focused,data:e.data},window.document.title="Isak Granqvist - My Projects",n}return Object(r.a)(a,[{key:"selectImage",value:function(e){console.log(e),this.setState({focused:e})}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"project",children:[Object(b.jsxs)("div",{className:"images",children:[this.state.data.images.map((function(t,a){return e.state.focused===a?Object(b.jsx)("img",{className:"in-focus",src:t.src,alt:t.alt},a):null})),Object(b.jsx)("div",{className:"picker",children:this.state.data.images.map((function(t,a){return Object(b.jsx)("img",{className:e.state.focused===a?"focused":null,src:t.src,alt:t.alt,onClick:function(){return e.selectImage(a)}},a)}))}),Object(b.jsx)("h2",{children:this.state.data.label}),Object(b.jsx)("p",{children:this.state.data.description})]}),Object(b.jsxs)("div",{className:"actions",children:[null!=this.state.data.href?Object(b.jsx)("a",{href:this.state.data.href,children:"website"}):"",null!=this.state.data.github?Object(b.jsx)("a",{href:this.state.data.github,children:"github repository"}):""]})]})}}]),a}(s.a.Component),M=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).projects=C,n}return Object(r.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(g.a.div,{className:"container projects-page",initial:"hidden",animate:"visible",variants:{visible:{opacity:1},hidden:{opacity:0}},children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Projects"}),Object(b.jsxs)("p",{children:["These are some of my most recent projects, ",Object(b.jsx)("br",{})," you can view all of my projects on my ",Object(b.jsx)("a",{href:"https://github.com/isakgranqvist2021",children:"github"})]})]}),Object(b.jsx)("div",{className:"projects",children:this.projects.map((function(e,t){return Object(b.jsx)(_,{data:e},t)}))})]})}}]),a}(s.a.Component),A=a(60),T=a(4),P=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).state={open:!1},n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.subscribe((function(){e.setState({open:p.getState().open})}))}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)("div",{onClick:function(){return p.dispatch({type:"toggle"})},className:this.state.open?"menu open":"menu",children:Object(b.jsx)("span",{className:"material-icons",children:this.state.open?"close":"menu"})}),Object(b.jsx)("main",{children:Object(b.jsx)("div",{className:"content",children:Object(b.jsx)(D,{})})})]})}}]),a}(s.a.Component);function D(){var e=Object(T.f)();return Object(b.jsx)(A.a,{exitBeforeEnter:!0,children:Object(b.jsxs)(T.c,{location:e,children:[Object(b.jsx)(T.a,{path:"/",component:j,exact:!0}),Object(b.jsx)(T.a,{path:"/about",component:x,exact:!0}),Object(b.jsx)(T.a,{path:"/projects",component:M,exact:!0}),Object(b.jsx)(T.a,{path:"/contact",component:q,exact:!0})]},e.pathname)})}var G=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(o.a)(this,a),t.call(this)}return Object(r.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(u.a,{children:[Object(b.jsx)(m,{}),Object(b.jsx)(P,{})]})}}]),a}(s.a.Component),L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,62)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root")),L()}},[[57,1,2]]]);
//# sourceMappingURL=main.bdaa4bcf.chunk.js.map