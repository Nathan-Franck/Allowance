(()=>{var o={400:(o,e)=>{var n,t,a,l,r,i,s,u,d={},_=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function h(o,e){for(var n in e)o[n]=e[n];return o}function f(o){var e=o.parentNode;e&&e.removeChild(o)}function y(o,e,t){var a,l,r,i={};for(r in e)"key"==r?a=e[r]:"ref"==r?l=e[r]:i[r]=e[r];if(arguments.length>2&&(i.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof o&&null!=o.defaultProps)for(r in o.defaultProps)void 0===i[r]&&(i[r]=o.defaultProps[r]);return F(o,i,a,l,null)}function F(o,e,n,l,r){var i={type:o,props:e,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++a:r};return null==r&&null!=t.vnode&&t.vnode(i),i}function p(o){return o.children}function m(o,e){this.props=o,this.context=e}function v(o,e){if(null==e)return o.__?v(o.__,o.__.__k.indexOf(o)+1):null;for(var n;e<o.__k.length;e++)if(null!=(n=o.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof o.type?v(o):null}function A(o){var e,n;if(null!=(o=o.__)&&null!=o.__c){for(o.__e=o.__c.base=null,e=0;e<o.__k.length;e++)if(null!=(n=o.__k[e])&&null!=n.__e){o.__e=o.__c.base=n.__e;break}return A(o)}}function N(o){(!o.__d&&(o.__d=!0)&&r.push(o)&&!w.__r++||s!==t.debounceRendering)&&((s=t.debounceRendering)||i)(w)}function w(){for(var o;w.__r=r.length;)o=r.sort((function(o,e){return o.__v.__b-e.__v.__b})),r=[],o.some((function(o){var e,n,t,a,l,r;o.__d&&(l=(a=(e=o).__v).__e,(r=e.__P)&&(n=[],(t=h({},a)).__v=a.__v+1,k(r,a,t,e.__n,void 0!==r.ownerSVGElement,null!=a.__h?[l]:null,n,null==l?v(a):l,a.__h),z(n,a),a.__e!=l&&A(a)))}))}function H(o,e,n,t,a,l,r,i,s,u){var c,h,f,y,m,A,N,w=t&&t.__k||_,H=w.length;for(n.__k=[],c=0;c<e.length;c++)if(null!=(y=n.__k[c]=null==(y=e[c])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y||"bigint"==typeof y?F(null,y,null,null,y):Array.isArray(y)?F(p,{children:y},null,null,null):y.__b>0?F(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(f=w[c])||f&&y.key==f.key&&y.type===f.type)w[c]=void 0;else for(h=0;h<H;h++){if((f=w[h])&&y.key==f.key&&y.type===f.type){w[h]=void 0;break}f=null}k(o,y,f=f||d,a,l,r,i,s,u),m=y.__e,(h=y.ref)&&f.ref!=h&&(N||(N=[]),f.ref&&N.push(f.ref,null,y),N.push(h,y.__c||m,y)),null!=m?(null==A&&(A=m),"function"==typeof y.type&&y.__k===f.__k?y.__d=s=S(y,s,o):s=g(o,y,f,w,m,s),"function"==typeof n.type&&(n.__d=s)):s&&f.__e==s&&s.parentNode!=o&&(s=v(f))}for(n.__e=A,c=H;c--;)null!=w[c]&&("function"==typeof n.type&&null!=w[c].__e&&w[c].__e==n.__d&&(n.__d=v(t,c+1)),$(w[c],w[c]));if(N)for(c=0;c<N.length;c++)T(N[c],N[++c],N[++c])}function S(o,e,n){for(var t,a=o.__k,l=0;a&&l<a.length;l++)(t=a[l])&&(t.__=o,e="function"==typeof t.type?S(t,e,n):g(n,t,t,a,t.__e,e));return e}function g(o,e,n,t,a,l){var r,i,s;if(void 0!==e.__d)r=e.__d,e.__d=void 0;else if(null==n||a!=l||null==a.parentNode)o:if(null==l||l.parentNode!==o)o.appendChild(a),r=null;else{for(i=l,s=0;(i=i.nextSibling)&&s<t.length;s+=2)if(i==a)break o;o.insertBefore(a,l),r=l}return void 0!==r?r:a.nextSibling}function M(o,e,n){"-"===e[0]?o.setProperty(e,n):o[e]=null==n?"":"number"!=typeof n||c.test(e)?n:n+"px"}function P(o,e,n,t,a){var l;o:if("style"===e)if("string"==typeof n)o.style.cssText=n;else{if("string"==typeof t&&(o.style.cssText=t=""),t)for(e in t)n&&e in n||M(o.style,e,"");if(n)for(e in n)t&&n[e]===t[e]||M(o.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])l=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in o?e.toLowerCase().slice(2):e.slice(2),o.l||(o.l={}),o.l[e+l]=n,n?t||o.addEventListener(e,l?L:b,l):o.removeEventListener(e,l?L:b,l);else if("dangerouslySetInnerHTML"!==e){if(a)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in o)try{o[e]=null==n?"":n;break o}catch(o){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?o.setAttribute(e,n):o.removeAttribute(e))}}function b(o){this.l[o.type+!1](t.event?t.event(o):o)}function L(o){this.l[o.type+!0](t.event?t.event(o):o)}function k(o,e,n,a,l,r,i,s,u){var d,_,c,f,y,F,v,A,N,w,S,g=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(u=n.__h,s=e.__e=n.__e,e.__h=null,r=[s]),(d=t.__b)&&d(e);try{o:if("function"==typeof g){if(A=e.props,N=(d=g.contextType)&&a[d.__c],w=d?N?N.props.value:d.__:a,n.__c?v=(_=e.__c=n.__c).__=_.__E:("prototype"in g&&g.prototype.render?e.__c=_=new g(A,w):(e.__c=_=new m(A,w),_.constructor=g,_.render=x),N&&N.sub(_),_.props=A,_.state||(_.state={}),_.context=w,_.__n=a,c=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=g.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=h({},_.__s)),h(_.__s,g.getDerivedStateFromProps(A,_.__s))),f=_.props,y=_.state,c)null==g.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==g.getDerivedStateFromProps&&A!==f&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(A,w),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(A,_.__s,w)||e.__v===n.__v){_.props=A,_.state=_.__s,e.__v!==n.__v&&(_.__d=!1),_.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(o){o&&(o.__=e)})),_.__h.length&&i.push(_);break o}null!=_.componentWillUpdate&&_.componentWillUpdate(A,_.__s,w),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(f,y,F)}))}_.context=w,_.props=A,_.state=_.__s,(d=t.__r)&&d(e),_.__d=!1,_.__v=e,_.__P=o,d=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(a=h(h({},a),_.getChildContext())),c||null==_.getSnapshotBeforeUpdate||(F=_.getSnapshotBeforeUpdate(f,y)),S=null!=d&&d.type===p&&null==d.key?d.props.children:d,H(o,Array.isArray(S)?S:[S],e,n,a,l,r,i,s,u),_.base=e.__e,e.__h=null,_.__h.length&&i.push(_),v&&(_.__E=_.__=null),_.__e=!1}else null==r&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=E(n.__e,e,n,a,l,r,i,u);(d=t.diffed)&&d(e)}catch(o){e.__v=null,(u||null!=r)&&(e.__e=s,e.__h=!!u,r[r.indexOf(s)]=null),t.__e(o,e,n)}}function z(o,e){t.__c&&t.__c(e,o),o.some((function(e){try{o=e.__h,e.__h=[],o.some((function(o){o.call(e)}))}catch(o){t.__e(o,e.__v)}}))}function E(o,e,t,a,l,r,i,s){var u,_,c,h=t.props,y=e.props,F=e.type,p=0;if("svg"===F&&(l=!0),null!=r)for(;p<r.length;p++)if((u=r[p])&&"setAttribute"in u==!!F&&(F?u.localName===F:3===u.nodeType)){o=u,r[p]=null;break}if(null==o){if(null===F)return document.createTextNode(y);o=l?document.createElementNS("http://www.w3.org/2000/svg",F):document.createElement(F,y.is&&y),r=null,s=!1}if(null===F)h===y||s&&o.data===y||(o.data=y);else{if(r=r&&n.call(o.childNodes),_=(h=t.props||d).dangerouslySetInnerHTML,c=y.dangerouslySetInnerHTML,!s){if(null!=r)for(h={},p=0;p<o.attributes.length;p++)h[o.attributes[p].name]=o.attributes[p].value;(c||_)&&(c&&(_&&c.__html==_.__html||c.__html===o.innerHTML)||(o.innerHTML=c&&c.__html||""))}if(function(o,e,n,t,a){var l;for(l in n)"children"===l||"key"===l||l in e||P(o,l,null,n[l],t);for(l in e)a&&"function"!=typeof e[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===e[l]||P(o,l,e[l],n[l],t)}(o,y,h,l,s),c)e.__k=[];else if(p=e.props.children,H(o,Array.isArray(p)?p:[p],e,t,a,l&&"foreignObject"!==F,r,i,r?r[0]:t.__k&&v(t,0),s),null!=r)for(p=r.length;p--;)null!=r[p]&&f(r[p]);s||("value"in y&&void 0!==(p=y.value)&&(p!==h.value||p!==o.value||"progress"===F&&!p)&&P(o,"value",p,h.value,!1),"checked"in y&&void 0!==(p=y.checked)&&p!==o.checked&&P(o,"checked",p,h.checked,!1))}return o}function T(o,e,n){try{"function"==typeof o?o(e):o.current=e}catch(o){t.__e(o,n)}}function $(o,e,n){var a,l;if(t.unmount&&t.unmount(o),(a=o.ref)&&(a.current&&a.current!==o.__e||T(a,null,e)),null!=(a=o.__c)){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(o){t.__e(o,e)}a.base=a.__P=null}if(a=o.__k)for(l=0;l<a.length;l++)a[l]&&$(a[l],e,"function"!=typeof o.type);n||null==o.__e||f(o.__e),o.__e=o.__d=void 0}function x(o,e,n){return this.constructor(o,n)}function C(o,e,a){var l,r,i;t.__&&t.__(o,e),r=(l="function"==typeof a)?null:a&&a.__k||e.__k,i=[],k(e,o=(!l&&a||e).__k=y(p,null,[o]),r||d,d,void 0!==e.ownerSVGElement,!l&&a?[a]:r?null:e.firstChild?n.call(e.childNodes):null,i,!l&&a?a:r?r.__e:e.firstChild,l),z(i,o)}n=_.slice,t={__e:function(o,e){for(var n,t,a;e=e.__;)if((n=e.__c)&&!n.__)try{if((t=n.constructor)&&null!=t.getDerivedStateFromError&&(n.setState(t.getDerivedStateFromError(o)),a=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(o),a=n.__d),a)return n.__E=n}catch(e){o=e}throw o}},a=0,l=function(o){return null!=o&&void 0===o.constructor},m.prototype.setState=function(o,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof o&&(o=o(h({},n),this.props)),o&&h(n,o),null!=o&&this.__v&&(e&&this.__h.push(e),N(this))},m.prototype.forceUpdate=function(o){this.__v&&(this.__e=!0,o&&this.__h.push(o),N(this))},m.prototype.render=p,r=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,w.__r=0,u=0,e.render=C,e.hydrate=function o(e,n){C(e,n,o)},e.createElement=y,e.h=y,e.Fragment=p,e.createRef=function(){return{current:null}},e.isValidElement=l,e.Component=m,e.cloneElement=function(o,e,t){var a,l,r,i=h({},o.props);for(r in e)"key"==r?a=e[r]:"ref"==r?l=e[r]:i[r]=e[r];return arguments.length>2&&(i.children=arguments.length>3?n.call(arguments,2):t),F(o.type,i,a||o.key,l||o.ref,null)},e.createContext=function(o,e){var n={__c:e="__cC"+u++,__:o,Consumer:function(o,e){return o.children(e)},Provider:function(o){var n,t;return this.getChildContext||(n=[],(t={})[e]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&n.some(N)},this.sub=function(o){n.push(o);var e=o.componentWillUnmount;o.componentWillUnmount=function(){n.splice(n.indexOf(o),1),e&&e.call(o)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n},e.toChildArray=function o(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){o(e,n)})):n.push(e)),n},e.options=t},689:(o,e,n)=>{var t,a,l,r=n(400),i=0,s=[],u=r.options.__b,d=r.options.__r,_=r.options.diffed,c=r.options.__c,h=r.options.unmount;function f(o,e){r.options.__h&&r.options.__h(a,o,i||e),i=0;var n=a.__H||(a.__H={__:[],__h:[]});return o>=n.__.length&&n.__.push({}),n.__[o]}function y(o){return i=1,F(S,o)}function F(o,e,n){var l=f(t++,2);return l.t=o,l.__c||(l.__=[n?n(e):S(void 0,e),function(o){var e=l.t(l.__[0],o);l.__[0]!==e&&(l.__=[e,l.__[1]],l.__c.setState({}))}],l.__c=a),l.__}function p(o,e){var n=f(t++,4);!r.options.__s&&H(n.__H,e)&&(n.__=o,n.__H=e,a.__h.push(n))}function m(o,e){var n=f(t++,7);return H(n.__H,e)&&(n.__=o(),n.__H=e,n.__h=o),n.__}function v(){for(var o;o=s.shift();)if(o.__P)try{o.__H.__h.forEach(N),o.__H.__h.forEach(w),o.__H.__h=[]}catch(e){o.__H.__h=[],r.options.__e(e,o.__v)}}r.options.__b=function(o){a=null,u&&u(o)},r.options.__r=function(o){d&&d(o),t=0;var e=(a=o.__c).__H;e&&(e.__h.forEach(N),e.__h.forEach(w),e.__h=[])},r.options.diffed=function(o){_&&_(o);var e=o.__c;e&&e.__H&&e.__H.__h.length&&(1!==s.push(e)&&l===r.options.requestAnimationFrame||((l=r.options.requestAnimationFrame)||function(o){var e,n=function(){clearTimeout(t),A&&cancelAnimationFrame(e),setTimeout(o)},t=setTimeout(n,100);A&&(e=requestAnimationFrame(n))})(v)),a=null},r.options.__c=function(o,e){e.some((function(o){try{o.__h.forEach(N),o.__h=o.__h.filter((function(o){return!o.__||w(o)}))}catch(n){e.some((function(o){o.__h&&(o.__h=[])})),e=[],r.options.__e(n,o.__v)}})),c&&c(o,e)},r.options.unmount=function(o){h&&h(o);var e,n=o.__c;n&&n.__H&&(n.__H.__.forEach((function(o){try{N(o)}catch(o){e=o}})),e&&r.options.__e(e,n.__v))};var A="function"==typeof requestAnimationFrame;function N(o){var e=a,n=o.__c;"function"==typeof n&&(o.__c=void 0,n()),a=e}function w(o){var e=a;o.__c=o.__(),a=e}function H(o,e){return!o||o.length!==e.length||e.some((function(e,n){return e!==o[n]}))}function S(o,e){return"function"==typeof e?e(o):e}e.useState=y,e.useReducer=F,e.useEffect=function(o,e){var n=f(t++,3);!r.options.__s&&H(n.__H,e)&&(n.__=o,n.__H=e,a.__H.__h.push(n))},e.useLayoutEffect=p,e.useRef=function(o){return i=5,m((function(){return{current:o}}),[])},e.useImperativeHandle=function(o,e,n){i=6,p((function(){"function"==typeof o?o(e()):o&&(o.current=e())}),null==n?n:n.concat(o))},e.useMemo=m,e.useCallback=function(o,e){return i=8,m((function(){return o}),e)},e.useContext=function(o){var e=a.context[o.__c],n=f(t++,9);return n.c=o,e?(null==n.__&&(n.__=!0,e.sub(a)),e.props.value):o.__},e.useDebugValue=function(o,e){r.options.useDebugValue&&r.options.useDebugValue(e?e(o):o)},e.useErrorBoundary=function(o){var e=f(t++,10),n=y();return e.__=o,a.componentDidCatch||(a.componentDidCatch=function(o){e.__&&e.__(o),n[1](o)}),[n[0],function(){n[1](void 0)}]}},414:(o,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.allowances=void 0,e.allowances=[{startTime:1614908235844,accounts:{Lilian:{dollarsPerMonth:60,awardSize:.5,awardName:"50¢ 🍭"},Ashley:{dollarsPerMonth:130,awardSize:5,awardName:"$5 💵"},Nathan:{dollarsPerMonth:130,awardSize:5,awardName:"$5 💵"},Food:{dollarsPerMonth:500,awardSize:10,awardName:"$10 🍔"},Social:{dollarsPerMonth:60,awardSize:20,awardName:"$20 🎮"},House:{dollarsPerMonth:260,awardSize:50,awardName:"$50 ⛏️"},Vacation:{dollarsPerMonth:50,awardSize:50,awardName:"$50 ⛽"},Emergency:{dollarsPerMonth:150,awardSize:100,awardName:"$100 🚑"}}},{startTime:1625383330393,accounts:{Lilian:{dollarsPerMonth:70,awardSize:.5,awardName:"50¢ 🍭"},Ashley:{dollarsPerMonth:140,awardSize:5,awardName:"$5 💵"},Nathan:{dollarsPerMonth:140,awardSize:5,awardName:"$5 💵"},Food:{dollarsPerMonth:600,awardSize:10,awardName:"$10 🍔"},Social:{dollarsPerMonth:100,awardSize:20,awardName:"$20 🎮"},House:{dollarsPerMonth:400,awardSize:50,awardName:"$50 ⛏️"},Vacation:{dollarsPerMonth:150,awardSize:50,awardName:"$50 ⛽"},Emergency:{dollarsPerMonth:300,awardSize:100,awardName:"$100 🚑"}}},{startTime:1630527739976,accounts:{Lilian:{dollarsPerMonth:40,awardSize:.5,awardName:"50¢ 🍭"},Ashley:{dollarsPerMonth:80,awardSize:5,awardName:"$5 💵"},Nathan:{dollarsPerMonth:80,awardSize:5,awardName:"$5 💵"},Food:{dollarsPerMonth:500,awardSize:10,awardName:"$10 🍔"},Social:{dollarsPerMonth:40,awardSize:20,awardName:"$20 🎮"},House:{dollarsPerMonth:140,awardSize:50,awardName:"$50 ⛏️"},Vacation:{dollarsPerMonth:50,awardSize:50,awardName:"$50 ⛽"},Emergency:{dollarsPerMonth:1,awardSize:100,awardName:"$100 🚑"}}},{startTime:1636654925251,accounts:{Lilian:{dollarsPerMonth:70,awardSize:.5,awardName:"50¢ 🍭"},Ashley:{dollarsPerMonth:140,awardSize:5,awardName:"$5 💵"},Nathan:{dollarsPerMonth:140,awardSize:5,awardName:"$5 💵"},Food:{dollarsPerMonth:600,awardSize:10,awardName:"$10 🍔"},Social:{dollarsPerMonth:100,awardSize:20,awardName:"$20 🎮"},House:{dollarsPerMonth:400,awardSize:50,awardName:"$50 ⛏️"},Vacation:{dollarsPerMonth:150,awardSize:50,awardName:"$50 ⛽"}}},{startTime:1644899180315,accounts:{Lilian:{dollarsPerMonth:70,awardSize:.5,awardName:"50¢ 🍭"},Ashley:{dollarsPerMonth:140,awardSize:5,awardName:"$5 💵"},Nathan:{dollarsPerMonth:140,awardSize:5,awardName:"$5 💵"},Food:{dollarsPerMonth:700,awardSize:10,awardName:"$10 🍔"},Social:{dollarsPerMonth:100,awardSize:20,awardName:"$20 🎮"},House:{dollarsPerMonth:400,awardSize:50,awardName:"$50 ⛏️"},Vacation:{dollarsPerMonth:150,awardSize:50,awardName:"$50 ⛽"}}}]},692:(o,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.calculateAllowanceIncome=e.calculateAllowances=void 0;const t=n(404),a=n(201);function l(o){const{name:e,account:n,startTime:a,endTime:l}=o,r=null!=l?Math.min(Date.now(),l):Date.now();return(0,t.millisToMonth)(r-a)*n.dollarsPerMonth}e.calculateAllowances=function(o){const{name:e,allowances:n}=o,r=n.reduce(((o,{startTime:t,account:a},r)=>{const i=r+1;return o+l({name:e,account:a,startTime:t,endTime:i<n.length?n[i].startTime:void 0})}),0),{account:i}=n[n.length-1],s=r-a.transactions.filter((o=>null!=o[e])).reduce(((o,n)=>o+n[e]),0),u=Math.max(0,Math.floor(s/i.awardSize)*i.awardSize),d=(0,t.monthToSec)(1)/i.dollarsPerMonth*i.awardSize,_=(s-u)/i.awardSize,c=Math.floor((1-_)*d),h=Math.floor(c/60),f=Math.floor(h/60),y=Math.floor(f/24);return{quantizedAmount:u,daysUntilAward:y,hoursUntilAward:f-24*y,minutesUntilAward:h-60*f,secondsUntilAward:c-60*h}},e.calculateAllowanceIncome=l},201:(o,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.transactions=void 0,e.transactions=[{Ashley:-44.73},{Nathan:-38.28},{Lilian:-10.5},{Food:-154.9},{Social:-42.24},{Vacation:-496.75},{House:-600.92},{Food:62.32},{Food:5.51},{Food:124.36},{Social:11},{Nathan:4},{Food:42},{Nathan:850},{Food:80.92},{Food:7.86},{House:100},{Food:86.26-28.812},{Lilian:38.812},{Food:20.9895},{Food:12.72*1.05},{Food:20.12},{House:36.74},{Food:39.22},{House:16},{Ashley:2.09},{Lilian:25.19},{Social:9.44},{Nathan:-850},{Social:10/3,Ashley:10/3,Lilian:10/3},{Food:39.264425},{Nathan:6.595575},{Food:86.28},{Food:6},{Food:27.29},{House:422.42},{Nathan:8.47},{Food:91.61},{Nathan:1},{Social:5},{Food:29.48},{Social:17},{Social:46.75},{Ashley:5.25},{House:256},{Nathan:4.41},{Food:42.68-4.41},{Nathan:97},{Food:6},{Food:82.35},{Food:105.297},{Nathan:14.46*1.05},{Food:48.97},{Food:16.716},{Nathan:4.41},{Nathan:138.306},{Ashley:31.4685},{Social:10.98*1.05},{Food:33.6125},{House:-125},{House:133.88},{Nathan:16},{Ashley:59.98},{Vacation:79.73},{Lilian:29.3475},{Vacation:71.68*1.05},{Vacation:93.85949999999998},{House:39.354000000000006},{Food:14.35},{House:23.6},{Ashley:90},{House:-23.6},{Social:-14.67},{Food:1.38},{Food:24.6},{Food:-112.85},{Food:40.42},{Food:24.13},{Food:24.15},{Nathan:8.39},{Ashley:26.187},{Lilian:6.174},{House:27.2685},{Food:36.940499999999986},{Lilian:28.31},{Nathan:18.89},{Social:31.5},{Ashley:7.1925},{Lilian:10.5},{Food:7.48*1.05},{Food:10},{Ashley:-250},{Food:69.55},{Food:56.09},{House:41.25},{Food:148.83-76.0095},{Ashley:73.479},{Nathan:2.5305},{Food:1.49},{Food:20.65},{Nathan:4.41},{Food:-17.83},{Ashley:-16.8},{Food:16.4},{Food:10.49},{Ashley:7.86},{Lilian:25.557},{Food:119.82},{Nathan:7.49},{Food:10.9665},{Ashley:16.2435},{Food:6.3},{Food:15.92},{Social:40},{Lilian:10},{Nathan:2},{Food:28.32},{Food:12.4},{Food:12},{Nathan:4.4},{House:50},{Food:12.26},{Food:12.6},{Food:17.8},{Food:7.35},{Food:9.87},{Food:14.26},{House:24.5},{House:9.98},{Ashley:19.93},{Ashley:35.78},{Ashley:8.57,Nathan:10.5},{Food:71.59},{Social:12*1.05},{Social:23.39},{Nathan:26.89},{Lilian:10.15},{Nathan:12.054},{Food:31.156},{Food:4.2},{Food:2.82},{House:41.95},{House:46.55},{Food:89.75},{Food:33,Lilian:10,Nathan:2,Ashley:31},{House:34.5},{Ashley:43.83+51.4+10},{Nathan:7.1},{Ashley:28.6},{Food:21.44},{Food:6.3},{Food:30.43},{Nathan:78.04},{Lilian:20,House:40},{Food:28.066499999999998},{Ashley:89.2185},{Lilian:15.7185},{House:22.0185},{Food:76.21},{Food:2.751},{Ashley:39.27},{Nathan:27.3},{Lilian:6*1.05},{Food:28.36},{Food:28.36},{Food:54.96},{Lilian:4.73},{Food:5.79},{Nathan:86.42},{Food:26.33},{Lilian:17.84},{Food:14.26},{Food:5},{Social:50.39},{Social:50.39},{Ashley:37.99},{Ashley:15.7185-74.49},{Lilian:-15.7185},{House:-24.5},{Ashley:-8.82},{Food:10.66},{Food:6.3},{Food:2.08},{Vacation:65.59},{Vacation:68.3},{House:457.12},{Ashley:9.95},{Ashley:19.908},{Food:55.782},{Ashley:-661.29},{Ashley:12.0645},{Food:14.0055},{Food:10.7415},{Nathan:4.41},{Ashley:1.4595},{House:12.23},{House:149.04},{Ashley:-892.48},{Nathan:-1182.27},{Food:-72},{Ashley:41.88},{Nathan:13.35},{Food:1.05},{Lilian:22.03},{Food:18.93},{Food:6.29},{Food:5.78},{Food:118.33},{Nathan:10.35},{Nathan:55.34},{Nathan:-62},{Nathan:25,Lilian:25,Ashley:25},{Ashley:11.54},{Food:90.26-40},{Social:40},{Food:17.83},{Food:3.15},{Ashley:1.39},{Food:23.29},{Food:31.23},{House:25},{Ashley:13.64},{Lilian:20.98},{Food:36.73},{Ashley:5.25},{Food:28.17},{Nathan:55.82},{Food:19.92},{Food:6.15},{Food:25.38},{House:68.82},{Food:23.29},{Food:8.4},{House:125.94},{House:6.3},{Social:20.96},{Social:10.49},{Social:21.89},{Food:21.16},{Food:4.2},{Ashley:11.55},{Food:12.59},{Ashley:4.2},{Nathan:271.795,Ashley:271.795},{Food:4.2},{Social:20},{Food:35},{Ashley:30},{Food:19.82},{Nathan:2.1},{Food:6},{Nathan:13.11},{Nathan:50,Ashley:50,Food:-100},{Food:4.2},{Food:6.81},{Ashley:22.05},{Food:41.775,Social:97.475},{Food:3.15},{Food:14.26},{House:180,Social:4},{House:52.19},{Ashley:19.93},{Food:21.21},{House:37.77},{Nathan:4.46},{Food:78.62},{Nathan:946.25},{Food:6.81},{Nathan:7.13},{Food:19.82},{Ashley:70.3},{Social:40.28},{House:80},{Nathan:27.28},{Food:9.42},{House:23},{Food:47.18},{Nathan:16.35},{Nathan:-650},{Food:41.98},{Food:4.49},{Food:7.65},{Food:57.12},{Food:10.56},{House:7.88},{Nathan:33.59},{House:11.54},{House:-40},{Nathan:23.93},{Lilian:3.14},{Ashley:1.93},{Food:27.89},{Food:27.35},{Ashley:4.19},{Nathan:1.05*3},{House:122.01+8.38},{Food:34.64},{Nathan:114.45},{Lilian:32.5,Social:32.5},{Food:32.25},{Ashley:1.31},{House:42.88},{Food:62.62},{House:39},{Nathan:4.5},{Food:22.66},{Food:6.3},{Nathan:26.3},{Nathan:50,Ashley:50,Social:-100},{Nathan:90,Ashley:90,House:-180},{Food:21.27},{House:1.5},{Food:13.63},{Food:60.03},{Food:42.54},{Food:6.99},{House:30},{House:20},{Food:127.89,House:30},{Ashley:138.31},{Social:16.26},{House:50},{Food:22},{Ashley:20.98},{Nathan:1.88},{Food:91.64},{House:42.48,Lilian:15.75},{Food:8.4},{Ashley:45,Nathan:45},{Food:40},{Ashley:-846},{Lilian:6.81},{House:70.3},{Food:48.6},{Food:67.93},{Ashley:11.19},{House:65.74},{Nathan:21,Ashley:21},{Food:30.43},{Ashley:23.31,Nathan:23.31},{Food:69.96},{Food:8.27},{House:1.5},{Food:5.65},{Ashley:59.83},{Ashley:54.53},{House:12.59},{Nathan:26.18},{House:1.5},{Food:16.61},{Vacation:135.41},{Vacation:227.08},{Nathan:5.45},{Ashley:6.29},{House:40},{Food:14.87},{Food:6.3},{Food:16.78},{Food:69.28},{Nathan:25,Ashley:25},{Nathan:29.33},{Food:112.81},{Nathan:61.95},{Food:22.62},{Food:32.27},{Food:14.99},{Social:29.37},{Food:10.45},{Ashley:38.83},{Ashley:15},{Food:98.05},{Ashley:42.07},{Food:18.46},{House:75},{Nathan:608},{Nathan:16},{Nathan:73},{Nathan:14},{House:1.5},{House:31.5},{House:36.5},{Nathan:2.475,Ashley:2.475},{Food:46.84},{Ashley:35},{Food:11.45},{Social:2.6},{Food:180},{House:32.01},{Food:213.28},{Ashley:9.45},{Food:6.98},{House:53.52},{Ashley:40},{Nathan:1.5},{Food:3.86},{Food:23.6},{House:5.22},{Ashley:55.57},{Lilian:15.72},{Food:6.3},{Food:8.96},{House:74.32},{Nathan:1.5},{Food:4.49},{Ashley:87.85,House:7},{Ashley:29.36},{Lilian:53.95},{Vacation:122.65},{Ashley:216.81},{Food:63.08},{Food:38.16},{Ashley:3.5,Nathan:1.2},{Food:19.4},{Nathan:2},{Ashley:9.44},{Food:7.92},{Social:40,Ashley:40,Nathan:40,Food:-120},{Food:45},{Ashley:33.5},{Food:23.14},{Food:23.29},{Food:10.2},{Social:16.28},{Ashley:12.86},{Nathan:-8.41},{Food:14.47},{House:75.44},{Ashley:1.49},{Ashley:23.09},{Food:7.34},{Nathan:17.14},{Ashley:25.87},{Food:127},{Ashley:107},{Ashley:17},{Ashley:7.32},{Nathan:5.24},{Ashley:2.52},{Nathan:29},{Nathan:194},{Food:66.58},{Ashley:7.3},{Lilian:27.52},{Nathan:3.31},{Ashley:4.92,House:57.7},{Food:21.91},{Food:15.74},{House:59.7},{Vacation:30},{Social:44},{Food:9.44},{Ashley:200},{Ashley:7.35},{Ashley:48.56},{Ashley:16.08},{Ashley:1.31},{Nathan:15},{House:60,Ashley:100},{Ashley:1.42},{Ashley:125},{Food:12.79},{Food:31.78},{House:63.62},{Nathan:1.88},{Food:83.09},{Ashley:89.49},{Food:30.62},{Nathan:19.1},{Lilian:16.96},{Food:20.84},{Ashley:45.9},{Food:13.84},{Food:1.88},{House:47.24},{Food:196.48},{Food:8.84},{Lilian:45.1},{House:38.47},{Lilian:40,Food:62.41-40},{Nathan:5.24},{Food:94.85},{Food:15.74},{House:2},{House:56.97},{Food:20.02},{Food:38.98},{Nathan:4.61},{Food:12.63},{Food:1.88+13.11},{Social:7.33+22.01},{Ashley:34.6},{House:86.43},{Food:91},{Food:133.61},{Ashley:143.92},{Nathan:17},{Lilian:12},{Food:113.99},{Ashley:34.91},{Lilian:11.54+3.79},{Ashley:5.28},{Food:31.68},{Nathan:12.59},{House:50},{Ashley:24.99},{Food:64.88},{Food:113.99},{Lilian:16.49},{Nathan:4.5,Ashley:3},{Ashley:7.25},{Ashley:26.75},{Food:9.28},{Lilian:4.71},{Food:11},{House:100},{Lilian:7.35},{Food:75.85},{Nathan:1.37},{Ashley:128.86+7.27},{Food:132.99},{House:50},{Nathan:4.4},{Nathan:5.4},{Ashley:6.29}]},261:(o,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pipe=e.fromEntries=e.objectKeys=e.objectEntries=void 0,e.objectEntries=function(o){return Object.entries(o)},e.objectKeys=function(o){return Object.keys(o)},e.fromEntries=function(o){const e={};return o.forEach((o=>{e[o[0]]=o[1]})),e},e.pipe=function o(e){return{into:n=>o(n(e)),outFrom:o=>o(e)}}},404:(o,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.monthToSec=e.millisToMonth=e.millisToDay=e.currentHour24=void 0,e.currentHour24=function(){const o=new Date,e=new Date;return e.setHours(0),e.setMinutes(0),e.setSeconds(0),(o.getTime()-e.getTime())/1e3/60/60},e.millisToDay=function(o){return o/1e3/60/60/24},e.millisToMonth=function(o){return o/1e3/60/60/24/30.436875},e.monthToSec=function(o){return 30.436875*o*24*60*60}},127:function(o,e,n){"use strict";var t=this&&this.__awaiter||function(o,e,n,t){return new(n||(n=Promise))((function(a,l){function r(o){try{s(t.next(o))}catch(o){l(o)}}function i(o){try{s(t.throw(o))}catch(o){l(o)}}function s(o){var e;o.done?a(o.value):(e=o.value,e instanceof n?e:new n((function(o){o(e)}))).then(r,i)}s((t=t.apply(o,e||[])).next())}))},a=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0});const l=a(n(400)),r=n(689),i=n(261),s=n(692),u=n(414),d={fontFamily:"'Trebuchet MS'",fontSize:"26pt",color:"#d7e5e5",backgroundColor:"#151532",margin:0,width:"100%",height:"100%",display:"grid"},_={margin:"1em"},c=Object.assign(Object.assign({},_),{display:"grid",gridAutoColumns:"auto auto auto",gridAutoFlow:"column"});t(void 0,void 0,void 0,(function*(){const o=yield fetch("buildInfo.json"),e=yield o.json(),n=new Date(e.timestamp);l.default.render(l.default.createElement((()=>{const[o,e]=(0,r.useState)(0);return(0,r.useEffect)((()=>{const o=setInterval((()=>{e((o=>o+1))}),1e3);return()=>clearInterval(o)}),[]),l.default.createElement("div",{style:d},l.default.createElement("div",{style:_},l.default.createElement("h1",null,"Allowance"),l.default.createElement("i",null,"Transactions last updated: ",n.toLocaleString("default",{month:"long",day:"numeric",year:"numeric",hour:"numeric",hour12:!0}))),l.default.createElement("div",{style:c},(0,i.objectEntries)(u.allowances[u.allowances.length-1].accounts).map((([o,e])=>{const n=(0,s.calculateAllowances)({name:o,allowances:u.allowances.map((e=>({startTime:e.startTime,account:e.accounts[o]})))});return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{style:{gridColumn:1}},o),l.default.createElement("div",{style:{gridColumn:2}},"💲",n.quantizedAmount.toFixed(2)),l.default.createElement("div",{style:{gridColumn:3}},l.default.createElement("i",null,"next")," ",e.awardName,l.default.createElement("i",null,"in ",n.daysUntilAward>0?`${n.daysUntilAward}d `:"",n.hoursUntilAward>0?`${n.hoursUntilAward}h `:"",n.minutesUntilAward>0?`${n.minutesUntilAward}m `:"",n.secondsUntilAward,"s")))}))))}),null),document.body)}))}},e={};!function n(t){var a=e[t];if(void 0!==a)return a.exports;var l=e[t]={exports:{}};return o[t].call(l.exports,l,l.exports,n),l.exports}(127)})();