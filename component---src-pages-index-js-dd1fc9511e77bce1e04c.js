(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3d5Z":function(e,t,a){},Ccyr:function(e,t,a){},EfwC:function(e,t,a){},"I/r8":function(e,t,a){},NGwb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var l=a("q1tI"),r=i(l),o=i(a("hKI/")),s=i(a("17x9")),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,a){for(var n=!0;n;){var i=e,l=t,r=a;n=!1,null===i&&(i=Function.prototype);var o=Object.getOwnPropertyDescriptor(i,l);if(void 0!==o){if("value"in o)return o.value;var s=o.get;if(void 0===s)return;return s.call(r)}var c=Object.getPrototypeOf(i);if(null===c)return;e=c,t=l,a=r,n=!0,o=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,o.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var a=this;this.delayedAnimationTimeout=setTimeout((function(){a.animating=!0,a.setState({classes:"animated "+e,style:{animationDuration:a.props.duration+"s"}}),a.callbackTimeout=setTimeout(t,1e3*a.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var a=t.getVisibility();e&&e(a)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var a=t.getVisibility();a.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(a)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return r.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(l.Component);t.default=c,c.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},c.propTypes={animateIn:s.default.string,animateOut:s.default.string,offset:s.default.number,duration:s.default.number,delay:s.default.number,initiallyVisible:s.default.bool,animateOnce:s.default.bool,style:s.default.object,scrollableParentSelector:s.default.string,className:s.default.string,animatePreScroll:s.default.bool},e.exports=t.default},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("Bl7J"),r=a("vrFN"),o=a("NGwb"),s=a.n(o),c=(a("uyya"),function(){return i.a.createElement("section",{id:"intro"},i.a.createElement(s.a,{animateIn:"fadeIn"},i.a.createElement("h1",{className:"highlight-text-green mono small"},"Hi, my name is"),i.a.createElement("h2",{className:"title"},"Abhishek Kakade."),i.a.createElement("h3",null,"I build things for the web."),i.a.createElement("p",{id:"intro-para"},"I'm a versatile"," ",i.a.createElement("span",{className:"highlight-text-white"},"Front-End Developer")," ","specializing in"," ",i.a.createElement("span",{className:"highlight-text-white"},"JavaScript"),","," ",i.a.createElement("span",{className:"highlight-text-white"},"ReactJS"),". Graduated from"," ",i.a.createElement("span",{className:"highlight-text-white"},"Udacity's Front-End Nanodegree")," ","program with Google India Scholarship. MERN stack enthusiast. Open source contributor."),i.a.createElement("a",{className:"get-in-touch-btn",href:"mailto:abhishekakade@gmail.com"},"Get In Touch")))}),m=(a("Ccyr"),a("lOtU"),function(){return i.a.createElement("section",{id:"about"},i.a.createElement(s.a,{animateIn:"fadeIn"},i.a.createElement("h3",{className:"title"},"About Me"),i.a.createElement("hr",{className:"hr-green"})),i.a.createElement(s.a,{animateIn:"fadeIn"},i.a.createElement("p",null,"Hello! I'm Abhishek, a Front End Developer based in Karad, Maharashtra who enjoys building stuff with JavaScript and React. I develop"," ",i.a.createElement("span",{className:"highlight-text-white"},"fast, responsive and accessible websites/web apps")," ","which perform well on all devices, even on slower networks.")),i.a.createElement(s.a,{animateIn:"fadeIn"},i.a.createElement("p",null,"Computers have always fascinated me. I'm a dentist but I first dabbled into web development out of interest in the Internet. I wanted to learn more about how everything was made available so easily for anyone to access from any part of the world. I started reading about web development in my final year of dentistry and then actually started learning web development in internship from resources like freeCodeCamp, YouTube, MDN, Reddit, Medium, etc.")),i.a.createElement(s.a,{animateIn:"fadeIn"},i.a.createElement("p",null,"Later, I got to know about Google India Scholarship. I applied, worked hard and got selected in the top 350 out of 10k applicants all over India to receive Google-Udacity's Front-End Nanodegree. This was HUGE for me and it changed my life forever! I successfully"," ",i.a.createElement("a",{title:"Google-Udacity Front-End Nanodegree Certificate",className:"highlight-text-white graduated",href:"https://graduation.udacity.com/confirm/DEJDC66D",target:"_blank",rel:"nofollow noopener noreferrer",style:{fontFamily:"Roboto"}},"graduated")," ","from the Front-End Nanodegree and started learning more on my own. Here are a few technologies I've been working with recently and the skills I've picked up so far:")),i.a.createElement(s.a,{animateIn:"fadeIn"},i.a.createElement("ul",{className:"skill-list mono"},i.a.createElement("li",{className:"skill-list-item"},"JavaScript (ES6+)"),i.a.createElement("li",{className:"skill-list-item"},"HTML5, CSS3, SCSS"),i.a.createElement("li",{className:"skill-list-item"},"ReactJS, Gatsby"),i.a.createElement("li",{className:"skill-list-item"},"Progressive Web Apps"),i.a.createElement("li",{className:"skill-list-item"},"Benchmarking"),i.a.createElement("li",{className:"skill-list-item"},"Performance Optimization"),i.a.createElement("li",{className:"skill-list-item"},"Accessibility"),i.a.createElement("li",{className:"skill-list-item"},"Responsive Layouts"),i.a.createElement("li",{className:"skill-list-item"},"GraphQL"),i.a.createElement("li",{className:"skill-list-item"},"Basic React Native"),i.a.createElement("li",{className:"skill-list-item"},"Basic Node, Express, MongoDB"),i.a.createElement("li",{className:"skill-list-item"},"Basic Golang"))))}),u=a("mrSG"),p=a("OXR1"),h=n.forwardRef((function(e,t){return n.createElement(p.a,Object(u.a)({iconAttrs:{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},iconVerticalAlign:"middle",iconViewBox:"0 0 12 16"},e,{ref:t}),n.createElement("path",{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z",key:"k0"}))}));h.displayName="LinkExternal";var f=a("j38s"),d=(a("I/r8"),function(){return i.a.createElement("section",{id:"projects"},i.a.createElement(s.a,{animateIn:"fadeIn"},i.a.createElement("h3",{className:"title"},"Projects"),i.a.createElement("hr",{className:"hr-green"})),i.a.createElement(s.a,{animateIn:"fadeIn",style:{padding:"0 0 1rem 0"}},i.a.createElement("div",{className:"project"},i.a.createElement("h5",{className:"project-title"},"Flickk - Movies Info App"),i.a.createElement("p",{className:"project-info"},"Progressive Web App (PWA) built with ReactJS & TMDb API that shows all the trending movies, their summary and even cast information, along with an option to search for specific movies. Optimized for performance. "),i.a.createElement("ul",{className:"project-tags"},i.a.createElement("li",null,"ReactJS"),i.a.createElement("li",null,"PWA"),i.a.createElement("li",null,"TMDb API"),i.a.createElement("li",null,"Infinite Scroll"),i.a.createElement("li",null,"Lazy Load Images"),i.a.createElement("li",null,"Performance Optimization")),i.a.createElement("p",{className:"project-links"},i.a.createElement("a",{href:"https://abhishekakade.github.io/flickk-app/#/",rel:"noreferrer noopener nofollow",target:"_blank"},i.a.createElement(h,{className:"project-external-link-icon",size:"1rem"})," ","Live"),i.a.createElement("a",{className:"github-link",href:"https://github.com/abhishekakade/flickk-app",rel:"noreferrer noopener nofollow",target:"_blank"},i.a.createElement(f.a,{className:"project-github-link-icon",size:"1rem"})," GitHub")))),i.a.createElement(s.a,{animateIn:"fadeIn",style:{padding:"1rem 0"}},i.a.createElement("div",{className:"project"},i.a.createElement("h5",{className:"project-title"},"covid19india.org - Open Source"),i.a.createElement("p",{className:"project-info"},"Fixed unnecessary renders & rerenders, improved code splitting/chunking with React lazy and Suspense to load only necessary components initially. This resulted in 40% reduction in initial page load size, reduced loading time and main thread work load. Other UI, SEO, accessibility and tooling related fixes and contributions."),i.a.createElement("ul",{className:"project-tags"},i.a.createElement("li",null,"ReactJS"),i.a.createElement("li",null,"React.lazy"),i.a.createElement("li",null,"Suspense"),i.a.createElement("li",null,"Performance Optimization"),i.a.createElement("li",null,"Code Splitting"),i.a.createElement("li",null,"Chunking"),i.a.createElement("li",null,"UI"),i.a.createElement("li",null,"SEO"),i.a.createElement("li",null,"Accessibility"),i.a.createElement("li",null,"Tooling")),i.a.createElement("p",{className:"project-links"},i.a.createElement("a",{title:"covid19india.org",href:"https://www.covid19india.org/",rel:"noreferrer noopener nofollow",target:"_blank"},i.a.createElement(h,{className:"project-external-link-icon",size:"1rem"})," ","Live"),i.a.createElement("a",{className:"github-link",href:"https://github.com/covid19india/covid19india-react/pulls?q=author%3Aabhishekakade",rel:"noreferrer noopener nofollow",target:"_blank"},i.a.createElement(f.a,{className:"project-github-link-icon",size:"1rem"})," GitHub (My Contributions)")))),i.a.createElement(s.a,{animateIn:"fadeIn",style:{padding:"1rem 0"}},i.a.createElement("div",{className:"project"},i.a.createElement("h5",{className:"project-title"},"ZTM Job Board - Open Source"),i.a.createElement("p",{className:"project-info"},"Boosted performance from ~10% to 85+% (lighthouse audit). Refactored code to reduce the number of API calls from 1/user (900+ total API calls) to just one for all users. Cleaned user provided JSON data for better data representation, lazy loaded unnecessary components & off screen images, fixed React Leaflet map issues & memory leak. Lots of other UI & accessibility related fixes."),i.a.createElement("ul",{className:"project-tags"},i.a.createElement("li",null,"ReactJS"),i.a.createElement("li",null,"Leaflet"),i.a.createElement("li",null,"Map"),i.a.createElement("li",null,"UI"),i.a.createElement("li",null,"React.lazy"),i.a.createElement("li",null,"Suspense"),i.a.createElement("li",null,"Performance Optimization"),i.a.createElement("li",null,"Code Splitting"),i.a.createElement("li",null,"Chunking"),i.a.createElement("li",null,"Data Cleaning"),i.a.createElement("li",null,"Accessibility")),i.a.createElement("p",{className:"project-links"},i.a.createElement("a",{title:"ZTM Job Board",href:"https://alumni-board.netlify.app/",rel:"noreferrer noopener nofollow",target:"_blank"},i.a.createElement(h,{className:"project-external-link-icon",size:"1rem"})," ","Live"),i.a.createElement("a",{title:"Abhishek's contributions to ZTM Job Board",className:"github-link",href:"https://github.com/zero-to-mastery/ZtM-Job-Board/commits?author=abhishekakade",rel:"noreferrer noopener nofollow",target:"_blank"},i.a.createElement(f.a,{className:"project-github-link-icon",size:"1rem"})," GitHub (My Contributions)")))),i.a.createElement(s.a,{animateIn:"fadeIn",style:{padding:"1rem 0"}},i.a.createElement("div",{className:"project"},i.a.createElement("h5",{className:"project-title"},"Markdown Previewer"),i.a.createElement("p",{className:"project-info"},"Progressive Web App (PWA) built with ReactJS & Marked.js library. Its a markdown editor that features a live preview. Optimized for performance."),i.a.createElement("ul",{className:"project-tags"},i.a.createElement("li",null,"ReactJS"),i.a.createElement("li",null,"PWA"),i.a.createElement("li",null,"Marked.js"),i.a.createElement("li",null,"Performance Optimization")),i.a.createElement("p",{className:"project-links"},i.a.createElement("a",{title:"Markdown Previewer",href:"https://abhishekakade.github.io/markdown-previewer/",rel:"noreferrer noopener nofollow",target:"_blank"},i.a.createElement(h,{className:"project-external-link-icon",size:"1rem"})," ","Live"),i.a.createElement("a",{title:"Markdown Previewer source code",className:"github-link",href:"https://github.com/abhishekakade/markdown-previewer",rel:"noreferrer noopener nofollow",target:"_blank"},i.a.createElement(f.a,{className:"project-github-link-icon",size:"1rem"})," GitHub")))),i.a.createElement(s.a,{animateIn:"fadeIn",style:{padding:"2.5rem 0 0 0"}},i.a.createElement("p",{className:"project-links",style:{display:"block",margin:"auto",padding:"0.5rem",textAlign:"center"}},i.a.createElement("a",{style:{margin:"auto",padding:"0.75rem"},title:"More projects on Abhishek's GitHub ","aria-label":"Check out more projects on Abhishek's GitHub",className:"github-link",href:"https://github.com/abhishekakade/",rel:"noreferrer noopener nofollow",target:"_blank"},i.a.createElement(f.a,{className:"project-github-link-icon",size:"1rem"})," More on GitHub"))))}),b=(a("3d5Z"),function(){return i.a.createElement("section",{id:"contact"},i.a.createElement(s.a,{animateIn:"fadeIn"},i.a.createElement("h3",{className:"title"},"Get In Touch"),i.a.createElement("hr",{className:"hr-green"})),i.a.createElement(s.a,{animateIn:"fadeIn"},i.a.createElement("p",null,"Feel free to send me an email any time, whether it is about freelance work or a project or just to talk about web development. I'll get back to you as soon as possible."),i.a.createElement("a",{className:"get-in-touch-btn",href:"mailto:abhishekakade@gmail.com"},"Say Hi!")))}),g=a("1gpZ"),E=a("kAZZ"),y=(a("ybq5"),function(){return i.a.createElement("div",{id:"left"},i.a.createElement("ul",{id:"left-list"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/abhishek-kakade/",target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Abhishek's LinkedIn Profile",className:"tooltip"},i.a.createElement(g.a,{className:"icons"}),i.a.createElement("span",{className:"tooltiptext"},"LinkedIn"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/abhishekakade",target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Abhishek's GitHub Profile",className:"tooltip"},i.a.createElement(f.a,{className:"icons"}),i.a.createElement("span",{className:"tooltiptext"},"GitHub"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://codepen.io/abhinkakade/",target:"_blank",rel:"nofollow noopener noreferrer","aria-label":"Abhishek's CodePen Profile",className:"tooltip"},i.a.createElement(E.a,{className:"icons"}),i.a.createElement("span",{className:"tooltiptext"},"CodePen")))))}),v=(a("EfwC"),function(){return i.a.createElement("div",{id:"right"},i.a.createElement("div",{id:"right-email"},i.a.createElement("a",{id:"email",href:"mailto:abhishekakade@gmail.com"},"abhishekakade@gmail.com")))}),k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c,null),i.a.createElement(m,null),i.a.createElement(d,null),i.a.createElement(b,null),i.a.createElement(y,null),i.a.createElement(v,null))};t.default=function(){return i.a.createElement(l.a,null,i.a.createElement(r.a,{title:"Abhishek - Front-End Developer"}),i.a.createElement(k,null))}},"hKI/":function(e,t,a){(function(t){var a=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,l=/^0o[0-7]+$/i,r=parseInt,o="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,c=o||s||Function("return this")(),m=Object.prototype.toString,u=Math.max,p=Math.min,h=function(){return c.Date.now()};function f(e,t,a){var n,i,l,r,o,s,c=0,m=!1,f=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function E(t){var a=n,l=i;return n=i=void 0,c=t,r=e.apply(l,a)}function y(e){return c=e,o=setTimeout(k,t),m?E(e):r}function v(e){var a=e-s;return void 0===s||a>=t||a<0||f&&e-c>=l}function k(){var e=h();if(v(e))return w(e);o=setTimeout(k,function(e){var a=t-(e-s);return f?p(a,l-(e-c)):a}(e))}function w(e){return o=void 0,g&&n?E(e):(n=i=void 0,r)}function N(){var e=h(),a=v(e);if(n=arguments,i=this,s=e,a){if(void 0===o)return y(s);if(f)return o=setTimeout(k,t),E(s)}return void 0===o&&(o=setTimeout(k,t)),r}return t=b(t)||0,d(a)&&(m=!!a.leading,l=(f="maxWait"in a)?u(b(a.maxWait)||0,t):l,g="trailing"in a?!!a.trailing:g),N.cancel=function(){void 0!==o&&clearTimeout(o),c=0,n=s=i=o=void 0},N.flush=function(){return void 0===o?r:w(h())},N}function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var o=i.test(e);return o||l.test(e)?r(e.slice(2),o?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,a){var n=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return d(a)&&(n="leading"in a?!!a.leading:n,i="trailing"in a?!!a.trailing:i),f(e,t,{leading:n,maxWait:t,trailing:i})}}).call(this,a("yLpj"))},lOtU:function(e,t,a){},uyya:function(e,t,a){},ybq5:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-dd1fc9511e77bce1e04c.js.map