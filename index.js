(()=>{var o={220:(o,e)=>{var n,t,a,l,r,i,_={},u=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function d(o,e){for(var n in e)o[n]=e[n];return o}function c(o){var e=o.parentNode;e&&e.removeChild(o)}function h(o,e,n){var t,a,l,r=arguments,i={};for(l in e)"key"==l?t=e[l]:"ref"==l?a=e[l]:i[l]=e[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(r[l]);if(null!=n&&(i.children=n),"function"==typeof o&&null!=o.defaultProps)for(l in o.defaultProps)void 0===i[l]&&(i[l]=o.defaultProps[l]);return f(o,i,t,a,null)}function f(o,e,t,a,l){var r={type:o,props:e,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++n.__v:l};return null!=n.vnode&&n.vnode(r),r}function p(o){return o.children}function y(o,e){this.props=o,this.context=e}function m(o,e){if(null==e)return o.__?m(o.__,o.__.__k.indexOf(o)+1):null;for(var n;e<o.__k.length;e++)if(null!=(n=o.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof o.type?m(o):null}function F(o){var e,n;if(null!=(o=o.__)&&null!=o.__c){for(o.__e=o.__c.base=null,e=0;e<o.__k.length;e++)if(null!=(n=o.__k[e])&&null!=n.__e){o.__e=o.__c.base=n.__e;break}return F(o)}}function v(o){(!o.__d&&(o.__d=!0)&&a.push(o)&&!A.__r++||r!==n.debounceRendering)&&((r=n.debounceRendering)||l)(A)}function A(){for(var o;A.__r=a.length;)o=a.sort((function(o,e){return o.__v.__b-e.__v.__b})),a=[],o.some((function(o){var e,n,t,a,l,r;o.__d&&(l=(a=(e=o).__v).__e,(r=e.__P)&&(n=[],(t=d({},a)).__v=a.__v+1,k(r,a,t,e.__n,void 0!==r.ownerSVGElement,null!=a.__h?[l]:null,n,null==l?m(a):l,a.__h),P(n,a),a.__e!=l&&F(a)))}))}function w(o,e,n,t,a,l,r,i,s,d){var c,h,y,F,v,A,w,H=t&&t.__k||u,g=H.length;for(n.__k=[],c=0;c<e.length;c++)if(null!=(F=n.__k[c]=null==(F=e[c])||"boolean"==typeof F?null:"string"==typeof F||"number"==typeof F||"bigint"==typeof F?f(null,F,null,null,F):Array.isArray(F)?f(p,{children:F},null,null,null):F.__b>0?f(F.type,F.props,F.key,null,F.__v):F)){if(F.__=n,F.__b=n.__b+1,null===(y=H[c])||y&&F.key==y.key&&F.type===y.type)H[c]=void 0;else for(h=0;h<g;h++){if((y=H[h])&&F.key==y.key&&F.type===y.type){H[h]=void 0;break}y=null}k(o,F,y=y||_,a,l,r,i,s,d),v=F.__e,(h=F.ref)&&y.ref!=h&&(w||(w=[]),y.ref&&w.push(y.ref,null,F),w.push(h,F.__c||v,F)),null!=v?(null==A&&(A=v),"function"==typeof F.type&&null!=F.__k&&F.__k===y.__k?F.__d=s=N(F,s,o):s=S(o,F,y,H,v,s),d||"option"!==n.type?"function"==typeof n.type&&(n.__d=s):o.value=""):s&&y.__e==s&&s.parentNode!=o&&(s=m(y))}for(n.__e=A,c=g;c--;)null!=H[c]&&("function"==typeof n.type&&null!=H[c].__e&&H[c].__e==n.__d&&(n.__d=m(t,c+1)),T(H[c],H[c]));if(w)for(c=0;c<w.length;c++)L(w[c],w[++c],w[++c])}function N(o,e,n){var t,a;for(t=0;t<o.__k.length;t++)(a=o.__k[t])&&(a.__=o,e="function"==typeof a.type?N(a,e,n):S(n,a,a,o.__k,a.__e,e));return e}function S(o,e,n,t,a,l){var r,i,_;if(void 0!==e.__d)r=e.__d,e.__d=void 0;else if(null==n||a!=l||null==a.parentNode)o:if(null==l||l.parentNode!==o)o.appendChild(a),r=null;else{for(i=l,_=0;(i=i.nextSibling)&&_<t.length;_+=2)if(i==a)break o;o.insertBefore(a,l),r=l}return void 0!==r?r:a.nextSibling}function H(o,e,n){"-"===e[0]?o.setProperty(e,n):o[e]=null==n?"":"number"!=typeof n||s.test(e)?n:n+"px"}function g(o,e,n,t,a){var l;o:if("style"===e)if("string"==typeof n)o.style.cssText=n;else{if("string"==typeof t&&(o.style.cssText=t=""),t)for(e in t)n&&e in n||H(o.style,e,"");if(n)for(e in n)t&&n[e]===t[e]||H(o.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])l=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in o?e.toLowerCase().slice(2):e.slice(2),o.l||(o.l={}),o.l[e+l]=n,n?t||o.addEventListener(e,l?M:b,l):o.removeEventListener(e,l?M:b,l);else if("dangerouslySetInnerHTML"!==e){if(a)e=e.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in o)try{o[e]=null==n?"":n;break o}catch(o){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?o.setAttribute(e,n):o.removeAttribute(e))}}function b(o){this.l[o.type+!1](n.event?n.event(o):o)}function M(o){this.l[o.type+!0](n.event?n.event(o):o)}function k(o,e,t,a,l,r,i,_,u){var s,c,h,f,m,F,v,A,N,S,H,g=e.type;if(void 0!==e.constructor)return null;null!=t.__h&&(u=t.__h,_=e.__e=t.__e,e.__h=null,r=[_]),(s=n.__b)&&s(e);try{o:if("function"==typeof g){if(A=e.props,N=(s=g.contextType)&&a[s.__c],S=s?N?N.props.value:s.__:a,t.__c?v=(c=e.__c=t.__c).__=c.__E:("prototype"in g&&g.prototype.render?e.__c=c=new g(A,S):(e.__c=c=new y(A,S),c.constructor=g,c.render=C),N&&N.sub(c),c.props=A,c.state||(c.state={}),c.context=S,c.__n=a,h=c.__d=!0,c.__h=[]),null==c.__s&&(c.__s=c.state),null!=g.getDerivedStateFromProps&&(c.__s==c.state&&(c.__s=d({},c.__s)),d(c.__s,g.getDerivedStateFromProps(A,c.__s))),f=c.props,m=c.state,h)null==g.getDerivedStateFromProps&&null!=c.componentWillMount&&c.componentWillMount(),null!=c.componentDidMount&&c.__h.push(c.componentDidMount);else{if(null==g.getDerivedStateFromProps&&A!==f&&null!=c.componentWillReceiveProps&&c.componentWillReceiveProps(A,S),!c.__e&&null!=c.shouldComponentUpdate&&!1===c.shouldComponentUpdate(A,c.__s,S)||e.__v===t.__v){c.props=A,c.state=c.__s,e.__v!==t.__v&&(c.__d=!1),c.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach((function(o){o&&(o.__=e)})),c.__h.length&&i.push(c);break o}null!=c.componentWillUpdate&&c.componentWillUpdate(A,c.__s,S),null!=c.componentDidUpdate&&c.__h.push((function(){c.componentDidUpdate(f,m,F)}))}c.context=S,c.props=A,c.state=c.__s,(s=n.__r)&&s(e),c.__d=!1,c.__v=e,c.__P=o,s=c.render(c.props,c.state,c.context),c.state=c.__s,null!=c.getChildContext&&(a=d(d({},a),c.getChildContext())),h||null==c.getSnapshotBeforeUpdate||(F=c.getSnapshotBeforeUpdate(f,m)),H=null!=s&&s.type===p&&null==s.key?s.props.children:s,w(o,Array.isArray(H)?H:[H],e,t,a,l,r,i,_,u),c.base=e.__e,e.__h=null,c.__h.length&&i.push(c),v&&(c.__E=c.__=null),c.__e=!1}else null==r&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=E(t.__e,e,t,a,l,r,i,u);(s=n.diffed)&&s(e)}catch(o){e.__v=null,(u||null!=r)&&(e.__e=_,e.__h=!!u,r[r.indexOf(_)]=null),n.__e(o,e,t)}}function P(o,e){n.__c&&n.__c(e,o),o.some((function(e){try{o=e.__h,e.__h=[],o.some((function(o){o.call(e)}))}catch(o){n.__e(o,e.__v)}}))}function E(o,e,n,t,a,l,r,i){var s,d,h,f,p=n.props,y=e.props,m=e.type,F=0;if("svg"===m&&(a=!0),null!=l)for(;F<l.length;F++)if((s=l[F])&&(s===o||(m?s.localName==m:3==s.nodeType))){o=s,l[F]=null;break}if(null==o){if(null===m)return document.createTextNode(y);o=a?document.createElementNS("http://www.w3.org/2000/svg",m):document.createElement(m,y.is&&y),l=null,i=!1}if(null===m)p===y||i&&o.data===y||(o.data=y);else{if(l=l&&u.slice.call(o.childNodes),d=(p=n.props||_).dangerouslySetInnerHTML,h=y.dangerouslySetInnerHTML,!i){if(null!=l)for(p={},f=0;f<o.attributes.length;f++)p[o.attributes[f].name]=o.attributes[f].value;(h||d)&&(h&&(d&&h.__html==d.__html||h.__html===o.innerHTML)||(o.innerHTML=h&&h.__html||""))}if(function(o,e,n,t,a){var l;for(l in n)"children"===l||"key"===l||l in e||g(o,l,null,n[l],t);for(l in e)a&&"function"!=typeof e[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===e[l]||g(o,l,e[l],n[l],t)}(o,y,p,a,i),h)e.__k=[];else if(F=e.props.children,w(o,Array.isArray(F)?F:[F],e,n,t,a&&"foreignObject"!==m,l,r,o.firstChild,i),null!=l)for(F=l.length;F--;)null!=l[F]&&c(l[F]);i||("value"in y&&void 0!==(F=y.value)&&(F!==o.value||"progress"===m&&!F)&&g(o,"value",F,p.value,!1),"checked"in y&&void 0!==(F=y.checked)&&F!==o.checked&&g(o,"checked",F,p.checked,!1))}return o}function L(o,e,t){try{"function"==typeof o?o(e):o.current=e}catch(o){n.__e(o,t)}}function T(o,e,t){var a,l,r;if(n.unmount&&n.unmount(o),(a=o.ref)&&(a.current&&a.current!==o.__e||L(a,null,e)),t||"function"==typeof o.type||(t=null!=(l=o.__e)),o.__e=o.__d=void 0,null!=(a=o.__c)){if(a.componentWillUnmount)try{a.componentWillUnmount()}catch(o){n.__e(o,e)}a.base=a.__P=null}if(a=o.__k)for(r=0;r<a.length;r++)a[r]&&T(a[r],e,t);null!=l&&c(l)}function C(o,e,n){return this.constructor(o,n)}function x(o,e,t){var a,l,r;n.__&&n.__(o,e),l=(a="function"==typeof t)?null:t&&t.__k||e.__k,r=[],k(e,o=(!a&&t||e).__k=h(p,null,[o]),l||_,_,void 0!==e.ownerSVGElement,!a&&t?[t]:l?null:e.firstChild?u.slice.call(e.childNodes):null,r,!a&&t?t:l?l.__e:e.firstChild,a),P(r,o)}n={__e:function(o,e){for(var n,t,a;e=e.__;)if((n=e.__c)&&!n.__)try{if((t=n.constructor)&&null!=t.getDerivedStateFromError&&(n.setState(t.getDerivedStateFromError(o)),a=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(o),a=n.__d),a)return n.__E=n}catch(e){o=e}throw o},__v:0},t=function(o){return null!=o&&void 0===o.constructor},y.prototype.setState=function(o,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof o&&(o=o(d({},n),this.props)),o&&d(n,o),null!=o&&this.__v&&(e&&this.__h.push(e),v(this))},y.prototype.forceUpdate=function(o){this.__v&&(this.__e=!0,o&&this.__h.push(o),v(this))},y.prototype.render=p,a=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,A.__r=0,i=0,e.render=x,e.hydrate=function o(e,n){x(e,n,o)},e.createElement=h,e.h=h,e.Fragment=p,e.createRef=function(){return{current:null}},e.isValidElement=t,e.Component=y,e.cloneElement=function(o,e,n){var t,a,l,r=arguments,i=d({},o.props);for(l in e)"key"==l?t=e[l]:"ref"==l?a=e[l]:i[l]=e[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(r[l]);return null!=n&&(i.children=n),f(o.type,i,t||o.key,a||o.ref,null)},e.createContext=function(o,e){var n={__c:e="__cC"+i++,__:o,Consumer:function(o,e){return o.children(e)},Provider:function(o){var n,t;return this.getChildContext||(n=[],(t={})[e]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&n.some(v)},this.sub=function(o){n.push(o);var e=o.componentWillUnmount;o.componentWillUnmount=function(){n.splice(n.indexOf(o),1),e&&e.call(o)}}),o.children}};return n.Provider.__=n.Consumer.contextType=n},e.toChildArray=function o(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){o(e,n)})):n.push(e)),n},e.options=n},811:(o,e,n)=>{var t,a,l,r=n(220),i=0,_=[],u=r.options.__b,s=r.options.__r,d=r.options.diffed,c=r.options.__c,h=r.options.unmount;function f(o,e){r.options.__h&&r.options.__h(a,o,i||e),i=0;var n=a.__H||(a.__H={__:[],__h:[]});return o>=n.__.length&&n.__.push({}),n.__[o]}function p(o){return i=1,y(H,o)}function y(o,e,n){var l=f(t++,2);return l.t=o,l.__c||(l.__=[n?n(e):H(void 0,e),function(o){var e=l.t(l.__[0],o);l.__[0]!==e&&(l.__=[e,l.__[1]],l.__c.setState({}))}],l.__c=a),l.__}function m(o,e){var n=f(t++,4);!r.options.__s&&S(n.__H,e)&&(n.__=o,n.__H=e,a.__h.push(n))}function F(o,e){var n=f(t++,7);return S(n.__H,e)&&(n.__=o(),n.__H=e,n.__h=o),n.__}function v(){_.forEach((function(o){if(o.__P)try{o.__H.__h.forEach(w),o.__H.__h.forEach(N),o.__H.__h=[]}catch(e){o.__H.__h=[],r.options.__e(e,o.__v)}})),_=[]}r.options.__b=function(o){a=null,u&&u(o)},r.options.__r=function(o){s&&s(o),t=0;var e=(a=o.__c).__H;e&&(e.__h.forEach(w),e.__h.forEach(N),e.__h=[])},r.options.diffed=function(o){d&&d(o);var e=o.__c;e&&e.__H&&e.__H.__h.length&&(1!==_.push(e)&&l===r.options.requestAnimationFrame||((l=r.options.requestAnimationFrame)||function(o){var e,n=function(){clearTimeout(t),A&&cancelAnimationFrame(e),setTimeout(o)},t=setTimeout(n,100);A&&(e=requestAnimationFrame(n))})(v)),a=void 0},r.options.__c=function(o,e){e.some((function(o){try{o.__h.forEach(w),o.__h=o.__h.filter((function(o){return!o.__||N(o)}))}catch(n){e.some((function(o){o.__h&&(o.__h=[])})),e=[],r.options.__e(n,o.__v)}})),c&&c(o,e)},r.options.unmount=function(o){h&&h(o);var e=o.__c;if(e&&e.__H)try{e.__H.__.forEach(w)}catch(o){r.options.__e(o,e.__v)}};var A="function"==typeof requestAnimationFrame;function w(o){var e=a;"function"==typeof o.__c&&o.__c(),a=e}function N(o){var e=a;o.__c=o.__(),a=e}function S(o,e){return!o||o.length!==e.length||e.some((function(e,n){return e!==o[n]}))}function H(o,e){return"function"==typeof e?e(o):e}e.useState=p,e.useReducer=y,e.useEffect=function(o,e){var n=f(t++,3);!r.options.__s&&S(n.__H,e)&&(n.__=o,n.__H=e,a.__H.__h.push(n))},e.useLayoutEffect=m,e.useRef=function(o){return i=5,F((function(){return{current:o}}),[])},e.useImperativeHandle=function(o,e,n){i=6,m((function(){"function"==typeof o?o(e()):o&&(o.current=e())}),null==n?n:n.concat(o))},e.useMemo=F,e.useCallback=function(o,e){return i=8,F((function(){return o}),e)},e.useContext=function(o){var e=a.context[o.__c],n=f(t++,9);return n.__c=o,e?(null==n.__&&(n.__=!0,e.sub(a)),e.props.value):o.__},e.useDebugValue=function(o,e){r.options.useDebugValue&&r.options.useDebugValue(e?e(o):o)},e.useErrorBoundary=function(o){var e=f(t++,10),n=p();return e.__=o,a.componentDidCatch||(a.componentDidCatch=function(o){e.__&&e.__(o),n[1](o)}),[n[0],function(){n[1](void 0)}]}},199:(o,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.allowances=void 0,e.allowances=[{startTime:1614908235844,accounts:{Lilian:{dollarsPerMonth:60,awardSize:.5,awardName:"50¢ 🍭"},Ashley:{dollarsPerMonth:130,awardSize:5,awardName:"$5 💵"},Nathan:{dollarsPerMonth:130,awardSize:5,awardName:"$5 💵"},Food:{dollarsPerMonth:500,awardSize:10,awardName:"$10 🍔"},Social:{dollarsPerMonth:60,awardSize:20,awardName:"$20 🎮"},House:{dollarsPerMonth:260,awardSize:50,awardName:"$50 ⛏️"},Vacation:{dollarsPerMonth:50,awardSize:50,awardName:"$50 ⛽"},Emergency:{dollarsPerMonth:150,awardSize:100,awardName:"$100 🚑"}}},{startTime:1625383330393,accounts:{Lilian:{dollarsPerMonth:70,awardSize:.5,awardName:"50¢ 🍭"},Ashley:{dollarsPerMonth:140,awardSize:5,awardName:"$5 💵"},Nathan:{dollarsPerMonth:140,awardSize:5,awardName:"$5 💵"},Food:{dollarsPerMonth:600,awardSize:10,awardName:"$10 🍔"},Social:{dollarsPerMonth:100,awardSize:20,awardName:"$20 🎮"},House:{dollarsPerMonth:400,awardSize:50,awardName:"$50 ⛏️"},Vacation:{dollarsPerMonth:150,awardSize:50,awardName:"$50 ⛽"},Emergency:{dollarsPerMonth:300,awardSize:100,awardName:"$100 🚑"}}},{startTime:1630527739976,accounts:{Lilian:{dollarsPerMonth:40,awardSize:.5,awardName:"50¢ 🍭"},Ashley:{dollarsPerMonth:80,awardSize:5,awardName:"$5 💵"},Nathan:{dollarsPerMonth:80,awardSize:5,awardName:"$5 💵"},Food:{dollarsPerMonth:500,awardSize:10,awardName:"$10 🍔"},Social:{dollarsPerMonth:40,awardSize:20,awardName:"$20 🎮"},House:{dollarsPerMonth:140,awardSize:50,awardName:"$50 ⛏️"},Vacation:{dollarsPerMonth:50,awardSize:50,awardName:"$50 ⛽"},Emergency:{dollarsPerMonth:1,awardSize:100,awardName:"$100 🚑"}}}]},967:(o,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.calculateAllowanceIncome=e.calculateAllowances=void 0;const t=n(526),a=n(42);function l(o){const{name:e,account:n,startTime:a,endTime:l}=o,r=null!=l?Math.min(Date.now(),l):Date.now();return t.millisToMonth(r-a)*n.dollarsPerMonth}e.calculateAllowances=function(o){const{name:e,allowances:n}=o,r=n.reduce(((o,{startTime:t,account:a},r)=>{const i=r+1;return o+l({name:e,account:a,startTime:t,endTime:i<n.length?n[i].startTime:void 0})}),0),{account:i}=n[n.length-1],_=r-a.transactions.filter((o=>null!=o[e])).reduce(((o,n)=>o+n[e]),0),u=Math.max(0,Math.floor(_/i.awardSize)*i.awardSize),s=t.monthToSec(1)/i.dollarsPerMonth*i.awardSize,d=(_-u)/i.awardSize,c=Math.floor((1-d)*s),h=Math.floor(c/60),f=Math.floor(h/60),p=Math.floor(f/24);return{quantizedAmount:u,daysUntilAward:p,hoursUntilAward:f-24*p,minutesUntilAward:h-60*f,secondsUntilAward:c-60*h}},e.calculateAllowanceIncome=l},42:(o,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.transactions=void 0,e.transactions=[{Ashley:-44.73},{Nathan:-38.28},{Lilian:-10.5},{Food:-154.9},{Social:-42.24},{Emergency:-127.28},{Vacation:-496.75},{House:-600.92},{Food:62.32},{Food:5.51},{Food:124.36},{Social:11},{Nathan:4},{Food:42},{Nathan:850},{Food:80.92},{Food:7.86},{House:100},{Food:86.26-28.812},{Lilian:38.812},{Food:20.9895},{Food:12.72*1.05},{Food:20.12},{House:36.74},{Food:39.22},{House:16},{Ashley:2.09},{Lilian:25.19},{Social:9.44},{Nathan:-850},{Social:10/3,Ashley:10/3,Lilian:10/3},{Food:39.264425},{Nathan:6.595575},{Food:86.28},{Food:6},{Food:27.29},{House:422.42},{Nathan:8.47},{Food:91.61},{Nathan:1},{Social:5},{Food:29.48},{Social:17},{Social:46.75},{Ashley:5.25},{House:256},{Nathan:4.41},{Food:42.68-4.41},{Nathan:97},{Food:6},{Food:82.35},{Food:105.297},{Nathan:14.46*1.05},{Food:48.97},{Food:16.716},{Nathan:4.41},{Nathan:138.306},{Ashley:31.4685},{Social:10.98*1.05},{Food:33.6125},{House:-125},{House:133.88},{Nathan:16},{Ashley:59.98},{Vacation:79.73},{Lilian:29.3475},{Vacation:71.68*1.05},{Vacation:93.85949999999998},{House:39.354000000000006},{Food:14.35},{House:23.6},{Ashley:90},{House:-23.6},{Social:-14.67},{Food:1.38},{Food:24.6},{Food:-112.85},{Food:40.42},{Food:24.13},{Food:24.15},{Nathan:8.39},{Ashley:26.187},{Lilian:6.174},{House:27.2685},{Food:36.940499999999986},{Lilian:28.31},{Nathan:18.89},{Social:31.5},{Ashley:7.1925},{Lilian:10.5},{Food:7.48*1.05},{Food:10},{Ashley:-250},{Food:69.55},{Food:56.09},{House:41.25},{Food:148.83-76.0095},{Ashley:73.479},{Nathan:2.5305},{Food:1.49},{Food:20.65},{Nathan:4.41},{Food:-17.83},{Ashley:-16.8},{Food:16.4},{Food:10.49},{Ashley:7.86},{Lilian:25.557},{Food:119.82},{Nathan:7.49},{Food:10.9665},{Ashley:16.2435},{Food:6.3},{Food:15.92},{Social:40},{Lilian:10},{Nathan:2},{Food:28.32},{Food:12.4},{Food:12},{Nathan:4.4},{House:50},{Food:12.26},{Food:12.6},{Food:17.8},{Food:7.35},{Food:9.87},{Food:14.26},{House:24.5},{House:9.98},{Ashley:19.93},{Ashley:35.78},{Ashley:8.57,Nathan:10.5},{Food:71.59},{Social:12*1.05},{Social:23.39},{Nathan:26.89},{Lilian:10.15},{Nathan:12.054},{Food:31.156},{Food:4.2},{Food:2.82},{House:41.95},{House:46.55},{Food:89.75},{Food:33,Lilian:10,Nathan:2,Ashley:31},{House:34.5},{Ashley:43.83+51.4+10},{Nathan:7.1},{Ashley:28.6},{Food:21.44},{Food:6.3},{Food:30.43},{Nathan:78.04},{Lilian:20,House:40},{Food:28.066499999999998},{Ashley:89.2185},{Lilian:15.7185},{House:22.0185},{Food:76.21},{Food:2.751},{Ashley:39.27},{Nathan:27.3},{Lilian:6*1.05},{Food:28.36},{Food:28.36},{Food:54.96},{Lilian:4.73},{Food:5.79},{Nathan:86.42},{Food:26.33},{Lilian:17.84},{Food:14.26},{Food:5},{Social:50.39},{Social:50.39},{Ashley:37.99},{Ashley:15.7185-74.49},{Lilian:-15.7185},{House:-24.5},{Ashley:-8.82},{Food:10.66},{Food:6.3},{Food:2.08},{Vacation:65.59},{Vacation:68.3},{House:457.12},{Ashley:9.95},{Ashley:19.908},{Food:55.782},{Ashley:-661.29},{Ashley:12.0645},{Food:14.0055},{Food:10.7415},{Nathan:4.41},{Ashley:1.4595},{House:12.23},{House:149.04},{Ashley:-892.48},{Nathan:-1182.27},{Food:-72},{Ashley:41.88},{Nathan:13.35},{Food:1.05},{Lilian:22.03},{Food:18.93},{Food:6.29},{Food:5.78},{Food:118.33},{Nathan:10.35},{Nathan:55.34},{Nathan:-62},{Nathan:25,Lilian:25,Ashley:25},{Ashley:11.54},{Food:90.26-40},{Social:40},{Food:17.83},{Food:3.15},{Ashley:1.39},{Food:23.29},{Food:31.23},{House:25},{Ashley:13.64},{Lilian:20.98},{Food:36.73},{Ashley:5.25},{Food:28.17},{Nathan:55.82},{Food:19.92},{Food:6.15},{Food:25.38},{House:68.82},{Food:23.29},{Food:8.4},{House:125.94},{House:6.3},{Social:20.96},{Social:10.49},{Social:21.89},{Food:21.16},{Food:4.2},{Ashley:11.55},{Food:12.59},{Ashley:4.2},{Nathan:271.795,Ashley:271.795},{Food:4.2},{Social:20},{Food:35},{Ashley:30},{Food:19.82},{Nathan:2.1},{Food:6},{Nathan:13.11},{Nathan:50,Ashley:50,Food:-100},{Food:4.2},{Food:6.81},{Ashley:22.05},{Food:41.775,Social:97.475},{Food:3.15},{Food:14.26},{House:180,Social:4},{House:52.19},{Ashley:19.93},{Food:21.21},{House:37.77},{Nathan:4.46},{Food:78.62},{Nathan:946.25},{Food:6.81},{Nathan:7.13},{Food:19.82},{Ashley:70.3},{Social:40.28},{House:80},{Nathan:27.28},{Food:9.42},{House:23},{Food:47.18},{Nathan:16.35},{Nathan:-650},{Food:41.98},{Food:4.49},{Food:7.65},{Food:57.12},{Food:10.56},{House:7.88},{Nathan:33.59},{House:11.54},{House:-40},{Nathan:23.93},{Lilian:3.14},{Ashley:1.93},{Food:27.89},{Food:27.35},{Ashley:4.19},{Nathan:1.05*3},{House:122.01+8.38},{Food:34.64},{Nathan:114.45},{Lilian:32.5,Social:32.5},{Food:32.25},{Ashley:1.31},{House:42.88},{Food:62.62},{House:39},{Nathan:4.5},{Food:22.66},{Food:6.3},{Nathan:26.3},{Nathan:50,Ashley:50,Social:-100},{Nathan:90,Ashley:90,House:-180},{Food:21.27},{House:1.5},{Food:13.63},{Food:60.03},{Food:42.54},{Food:6.99},{House:30},{House:20},{Food:127.89,House:30},{Ashley:138.31},{Social:16.26},{House:50},{Food:22},{Ashley:20.98},{Nathan:1.88},{Food:91.64},{House:42.48,Lilian:15.75},{Food:8.4},{Ashley:45,Nathan:45},{Food:40},{Ashley:-846},{Lilian:6.81},{House:70.3},{Food:48.6},{Food:67.93},{Ashley:11.19},{House:65.74},{Nathan:21,Ashley:21},{Food:30.43},{Ashley:23.31,Nathan:23.31},{Food:69.96},{Food:8.27},{House:1.5},{Food:5.65},{Ashley:59.83},{Ashley:54.53},{House:12.59},{Nathan:26.18},{House:1.5},{Food:16.61},{Vacation:135.41},{Vacation:227.08},{Nathan:5.45},{Ashley:6.29},{House:40},{Food:14.87},{Food:6.3},{Food:16.78},{Food:69.28},{Nathan:25,Ashley:25},{Nathan:29.33},{Food:112.81},{Nathan:61.95},{Food:22.62},{Food:32.27},{Food:14.99},{Social:29.37},{Food:10.45},{Ashley:38.83},{Ashley:15},{Food:98.05},{Ashley:42.07},{Food:18.46},{House:75}]},50:(o,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.pipe=e.fromEntries=e.objectKeys=e.objectEntries=void 0,e.objectEntries=function(o){return Object.entries(o)},e.objectKeys=function(o){return Object.keys(o)},e.fromEntries=function(o){const e={};return o.forEach((o=>{e[o[0]]=o[1]})),e},e.pipe=function o(e){return{into:n=>o(n(e)),outFrom:o=>o(e)}}},526:(o,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.monthToSec=e.millisToMonth=e.millisToDay=e.currentHour24=void 0,e.currentHour24=function(){const o=new Date,e=new Date;return e.setHours(0),e.setMinutes(0),e.setSeconds(0),(o.getTime()-e.getTime())/1e3/60/60},e.millisToDay=function(o){return o/1e3/60/60/24},e.millisToMonth=function(o){return o/1e3/60/60/24/30.436875},e.monthToSec=function(o){return 30.436875*o*24*60*60}},252:function(o,e,n){"use strict";var t=this&&this.__awaiter||function(o,e,n,t){return new(n||(n=Promise))((function(a,l){function r(o){try{_(t.next(o))}catch(o){l(o)}}function i(o){try{_(t.throw(o))}catch(o){l(o)}}function _(o){var e;o.done?a(o.value):(e=o.value,e instanceof n?e:new n((function(o){o(e)}))).then(r,i)}_((t=t.apply(o,e||[])).next())}))},a=this&&this.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(e,"__esModule",{value:!0});const l=a(n(220)),r=n(811),i=n(50),_=n(967),u=n(199),s={fontFamily:"'Trebuchet MS'",fontSize:"26pt",color:"#d7e5e5",backgroundColor:"#151532",margin:0,width:"100%",height:"100%",display:"grid"},d={margin:"1em"},c=Object.assign(Object.assign({},d),{display:"grid",gridAutoColumns:"auto auto auto",gridAutoFlow:"column"});t(void 0,void 0,void 0,(function*(){const o=yield fetch("buildInfo.json"),e=yield o.json(),n=new Date(e.timestamp);l.default.render(l.default.createElement((()=>{const[o,e]=r.useState(0);return r.useEffect((()=>{const o=setInterval((()=>{e((o=>o+1))}),1e3);return()=>clearInterval(o)}),[]),l.default.createElement("div",{style:s},l.default.createElement("div",{style:d},l.default.createElement("h1",null,"Allowance"),l.default.createElement("i",null,"Transactions last updated: ",n.toLocaleString("default",{month:"long",day:"numeric",year:"numeric",hour:"numeric",hour12:!0}))),l.default.createElement("div",{style:c},i.objectEntries(u.allowances[u.allowances.length-1].accounts).map((([o,e])=>{const n=_.calculateAllowances({name:o,allowances:u.allowances.map((e=>({startTime:e.startTime,account:e.accounts[o]})))});return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{style:{gridColumn:1}},o),l.default.createElement("div",{style:{gridColumn:2}},"💲",n.quantizedAmount.toFixed(2)),l.default.createElement("div",{style:{gridColumn:3}},l.default.createElement("i",null,"next")," ",e.awardName,l.default.createElement("i",null,"in ",n.daysUntilAward>0?`${n.daysUntilAward}d `:"",n.hoursUntilAward>0?`${n.hoursUntilAward}h `:"",n.minutesUntilAward>0?`${n.minutesUntilAward}m `:"",n.secondsUntilAward,"s")))}))))}),null),document.body)}))}},e={};!function n(t){var a=e[t];if(void 0!==a)return a.exports;var l=e[t]={exports:{}};return o[t].call(l.exports,l,l.exports,n),l.exports}(252)})();