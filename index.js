(()=>{var e={220:(e,n)=>{var t,o,r,l,_,i,u={},a=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(e,n){for(var t in n)e[t]=n[t];return e}function d(e){var n=e.parentNode;n&&n.removeChild(e)}function f(e,n,t){var o,r,l,_=arguments,i={};for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:i[l]=n[l];if(arguments.length>3)for(t=[t],l=3;l<arguments.length;l++)t.push(_[l]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return h(e,i,o,r,null)}function h(e,n,o,r,l){var _={type:e,props:n,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++t.__v:l};return null!=t.vnode&&t.vnode(_),_}function p(e){return e.children}function m(e,n){this.props=e,this.context=n}function y(e,n){if(null==n)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?y(e):null}function v(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return v(e)}}function g(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!b.__r++||_!==t.debounceRendering)&&((_=t.debounceRendering)||l)(b)}function b(){for(var e;b.__r=r.length;)e=r.sort((function(e,n){return e.__v.__b-n.__v.__b})),r=[],e.some((function(e){var n,t,o,r,l,_;e.__d&&(l=(r=(n=e).__v).__e,(_=n.__P)&&(t=[],(o=c({},r)).__v=r.__v+1,M(_,r,o,n.__n,void 0!==_.ownerSVGElement,null!=r.__h?[l]:null,t,null==l?y(r):l,r.__h),H(t,r),r.__e!=l&&v(r)))}))}function F(e,n,t,o,r,l,_,i,s,c){var d,f,m,v,g,b,F,x=o&&o.__k||a,k=x.length;for(t.__k=[],d=0;d<n.length;d++)if(null!=(v=t.__k[d]=null==(v=n[d])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v||"bigint"==typeof v?h(null,v,null,null,v):Array.isArray(v)?h(p,{children:v},null,null,null):v.__b>0?h(v.type,v.props,v.key,null,v.__v):v)){if(v.__=t,v.__b=t.__b+1,null===(m=x[d])||m&&v.key==m.key&&v.type===m.type)x[d]=void 0;else for(f=0;f<k;f++){if((m=x[f])&&v.key==m.key&&v.type===m.type){x[f]=void 0;break}m=null}M(e,v,m=m||u,r,l,_,i,s,c),g=v.__e,(f=v.ref)&&m.ref!=f&&(F||(F=[]),m.ref&&F.push(m.ref,null,v),F.push(f,v.__c||g,v)),null!=g?(null==b&&(b=g),"function"==typeof v.type&&null!=v.__k&&v.__k===m.__k?v.__d=s=w(v,s,e):s=E(e,v,m,x,g,s),c||"option"!==t.type?"function"==typeof t.type&&(t.__d=s):e.value=""):s&&m.__e==s&&s.parentNode!=e&&(s=y(m))}for(t.__e=b,d=k;d--;)null!=x[d]&&("function"==typeof t.type&&null!=x[d].__e&&x[d].__e==t.__d&&(t.__d=y(o,d+1)),C(x[d],x[d]));if(F)for(d=0;d<F.length;d++)P(F[d],F[++d],F[++d])}function w(e,n,t){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,n="function"==typeof r.type?w(r,n,t):E(t,r,r,e.__k,r.__e,n));return n}function E(e,n,t,o,r,l){var _,i,u;if(void 0!==n.__d)_=n.__d,n.__d=void 0;else if(null==t||r!=l||null==r.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(r),_=null;else{for(i=l,u=0;(i=i.nextSibling)&&u<o.length;u+=2)if(i==r)break e;e.insertBefore(r,l),_=l}return void 0!==_?_:r.nextSibling}function x(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||s.test(n)?t:t+"px"}function k(e,n,t,o,r){var l;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(n in o)t&&n in t||x(e.style,n,"");if(t)for(n in t)o&&t[n]===o[n]||x(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])l=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+l]=t,t?o||e.addEventListener(n,l?A:S,l):e.removeEventListener(n,l?A:S,l);else if("dangerouslySetInnerHTML"!==n){if(r)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function S(e){this.l[e.type+!1](t.event?t.event(e):e)}function A(e){this.l[e.type+!0](t.event?t.event(e):e)}function M(e,n,o,r,l,_,i,u,a){var s,d,f,h,y,v,g,b,w,E,x,k=n.type;if(void 0!==n.constructor)return null;null!=o.__h&&(a=o.__h,u=n.__e=o.__e,n.__h=null,_=[u]),(s=t.__b)&&s(n);try{e:if("function"==typeof k){if(b=n.props,w=(s=k.contextType)&&r[s.__c],E=s?w?w.props.value:s.__:r,o.__c?g=(d=n.__c=o.__c).__=d.__E:("prototype"in k&&k.prototype.render?n.__c=d=new k(b,E):(n.__c=d=new m(b,E),d.constructor=k,d.render=T),w&&w.sub(d),d.props=b,d.state||(d.state={}),d.context=E,d.__n=r,f=d.__d=!0,d.__h=[]),null==d.__s&&(d.__s=d.state),null!=k.getDerivedStateFromProps&&(d.__s==d.state&&(d.__s=c({},d.__s)),c(d.__s,k.getDerivedStateFromProps(b,d.__s))),h=d.props,y=d.state,f)null==k.getDerivedStateFromProps&&null!=d.componentWillMount&&d.componentWillMount(),null!=d.componentDidMount&&d.__h.push(d.componentDidMount);else{if(null==k.getDerivedStateFromProps&&b!==h&&null!=d.componentWillReceiveProps&&d.componentWillReceiveProps(b,E),!d.__e&&null!=d.shouldComponentUpdate&&!1===d.shouldComponentUpdate(b,d.__s,E)||n.__v===o.__v){d.props=b,d.state=d.__s,n.__v!==o.__v&&(d.__d=!1),d.__v=n,n.__e=o.__e,n.__k=o.__k,n.__k.forEach((function(e){e&&(e.__=n)})),d.__h.length&&i.push(d);break e}null!=d.componentWillUpdate&&d.componentWillUpdate(b,d.__s,E),null!=d.componentDidUpdate&&d.__h.push((function(){d.componentDidUpdate(h,y,v)}))}d.context=E,d.props=b,d.state=d.__s,(s=t.__r)&&s(n),d.__d=!1,d.__v=n,d.__P=e,s=d.render(d.props,d.state,d.context),d.state=d.__s,null!=d.getChildContext&&(r=c(c({},r),d.getChildContext())),f||null==d.getSnapshotBeforeUpdate||(v=d.getSnapshotBeforeUpdate(h,y)),x=null!=s&&s.type===p&&null==s.key?s.props.children:s,F(e,Array.isArray(x)?x:[x],n,o,r,l,_,i,u,a),d.base=n.__e,n.__h=null,d.__h.length&&i.push(d),g&&(d.__E=d.__=null),d.__e=!1}else null==_&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=N(o.__e,n,o,r,l,_,i,a);(s=t.diffed)&&s(n)}catch(e){n.__v=null,(a||null!=_)&&(n.__e=u,n.__h=!!a,_[_.indexOf(u)]=null),t.__e(e,n,o)}}function H(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function N(e,n,t,o,r,l,_,i){var s,c,f,h,p=t.props,m=n.props,y=n.type,v=0;if("svg"===y&&(r=!0),null!=l)for(;v<l.length;v++)if((s=l[v])&&(s===e||(y?s.localName==y:3==s.nodeType))){e=s,l[v]=null;break}if(null==e){if(null===y)return document.createTextNode(m);e=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,m.is&&m),l=null,i=!1}if(null===y)p===m||i&&e.data===m||(e.data=m);else{if(l=l&&a.slice.call(e.childNodes),c=(p=t.props||u).dangerouslySetInnerHTML,f=m.dangerouslySetInnerHTML,!i){if(null!=l)for(p={},h=0;h<e.attributes.length;h++)p[e.attributes[h].name]=e.attributes[h].value;(f||c)&&(f&&(c&&f.__html==c.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,n,t,o,r){var l;for(l in t)"children"===l||"key"===l||l in n||k(e,l,null,t[l],o);for(l in n)r&&"function"!=typeof n[l]||"children"===l||"key"===l||"value"===l||"checked"===l||t[l]===n[l]||k(e,l,n[l],t[l],o)}(e,m,p,r,i),f)n.__k=[];else if(v=n.props.children,F(e,Array.isArray(v)?v:[v],n,t,o,r&&"foreignObject"!==y,l,_,e.firstChild,i),null!=l)for(v=l.length;v--;)null!=l[v]&&d(l[v]);i||("value"in m&&void 0!==(v=m.value)&&(v!==e.value||"progress"===y&&!v)&&k(e,"value",v,p.value,!1),"checked"in m&&void 0!==(v=m.checked)&&v!==e.checked&&k(e,"checked",v,p.checked,!1))}return e}function P(e,n,o){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,o)}}function C(e,n,o){var r,l,_;if(t.unmount&&t.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||P(r,null,n)),o||"function"==typeof e.type||(o=null!=(l=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){t.__e(e,n)}r.base=r.__P=null}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&C(r[_],n,o);null!=l&&d(l)}function T(e,n,t){return this.constructor(e,t)}function D(e,n,o){var r,l,_;t.__&&t.__(e,n),l=(r="function"==typeof o)?null:o&&o.__k||n.__k,_=[],M(n,e=(!r&&o||n).__k=f(p,null,[e]),l||u,u,void 0!==n.ownerSVGElement,!r&&o?[o]:l?null:n.firstChild?a.slice.call(n.childNodes):null,_,!r&&o?o:l?l.__e:n.firstChild,r),H(_,e)}t={__e:function(e,n){for(var t,o,r;n=n.__;)if((t=n.__c)&&!t.__)try{if((o=t.constructor)&&null!=o.getDerivedStateFromError&&(t.setState(o.getDerivedStateFromError(e)),r=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),r=t.__d),r)return t.__E=t}catch(n){e=n}throw e},__v:0},o=function(e){return null!=e&&void 0===e.constructor},m.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(c({},t),this.props)),e&&c(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),g(this))},m.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},m.prototype.render=p,r=[],l="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,i=0,n.render=D,n.hydrate=function e(n,t){D(n,t,e)},n.createElement=f,n.h=f,n.Fragment=p,n.createRef=function(){return{current:null}},n.isValidElement=o,n.Component=m,n.cloneElement=function(e,n,t){var o,r,l,_=arguments,i=c({},e.props);for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:i[l]=n[l];if(arguments.length>3)for(t=[t],l=3;l<arguments.length;l++)t.push(_[l]);return null!=t&&(i.children=t),h(e.type,i,o||e.key,r||e.ref,null)},n.createContext=function(e,n){var t={__c:n="__cC"+i++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,o;return this.getChildContext||(t=[],(o={})[n]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(g)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t},n.toChildArray=function e(n,t){return t=t||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some((function(n){e(n,t)})):t.push(n)),t},n.options=t},811:(e,n,t)=>{var o,r,l,_=t(220),i=0,u=[],a=_.options.__b,s=_.options.__r,c=_.options.diffed,d=_.options.__c,f=_.options.unmount;function h(e,n){_.options.__h&&_.options.__h(r,e,i||n),i=0;var t=r.__H||(r.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function p(e){return i=1,m(x,e)}function m(e,n,t){var l=h(o++,2);return l.t=e,l.__c||(l.__=[t?t(n):x(void 0,n),function(e){var n=l.t(l.__[0],e);l.__[0]!==n&&(l.__=[n,l.__[1]],l.__c.setState({}))}],l.__c=r),l.__}function y(e,n){var t=h(o++,4);!_.options.__s&&E(t.__H,n)&&(t.__=e,t.__H=n,r.__h.push(t))}function v(e,n){var t=h(o++,7);return E(t.__H,n)&&(t.__=e(),t.__H=n,t.__h=e),t.__}function g(){u.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(F),e.__H.__h.forEach(w),e.__H.__h=[]}catch(n){e.__H.__h=[],_.options.__e(n,e.__v)}})),u=[]}_.options.__b=function(e){r=null,a&&a(e)},_.options.__r=function(e){s&&s(e),o=0;var n=(r=e.__c).__H;n&&(n.__h.forEach(F),n.__h.forEach(w),n.__h=[])},_.options.diffed=function(e){c&&c(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==u.push(n)&&l===_.options.requestAnimationFrame||((l=_.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(o),b&&cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);b&&(n=requestAnimationFrame(t))})(g)),r=void 0},_.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(F),e.__h=e.__h.filter((function(e){return!e.__||w(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],_.options.__e(t,e.__v)}})),d&&d(e,n)},_.options.unmount=function(e){f&&f(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(F)}catch(e){_.options.__e(e,n.__v)}};var b="function"==typeof requestAnimationFrame;function F(e){var n=r;"function"==typeof e.__c&&e.__c(),r=n}function w(e){var n=r;e.__c=e.__(),r=n}function E(e,n){return!e||e.length!==n.length||n.some((function(n,t){return n!==e[t]}))}function x(e,n){return"function"==typeof n?n(e):n}n.useState=p,n.useReducer=m,n.useEffect=function(e,n){var t=h(o++,3);!_.options.__s&&E(t.__H,n)&&(t.__=e,t.__H=n,r.__H.__h.push(t))},n.useLayoutEffect=y,n.useRef=function(e){return i=5,v((function(){return{current:e}}),[])},n.useImperativeHandle=function(e,n,t){i=6,y((function(){"function"==typeof e?e(n()):e&&(e.current=n())}),null==t?t:t.concat(e))},n.useMemo=v,n.useCallback=function(e,n){return i=8,v((function(){return e}),n)},n.useContext=function(e){var n=r.context[e.__c],t=h(o++,9);return t.__c=e,n?(null==t.__&&(t.__=!0,n.sub(r)),n.props.value):e.__},n.useDebugValue=function(e,n){_.options.useDebugValue&&_.options.useDebugValue(n?n(e):e)},n.useErrorBoundary=function(e){var n=h(o++,10),t=p();return n.__=e,r.componentDidCatch||(r.componentDidCatch=function(e){n.__&&n.__(e),t[1](e)}),[t[0],function(){t[1](void 0)}]}},800:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.flexibleExpensesTotal=n.inflexibleExpensesTotal=n.allowanceTotal=n.inflexibleMonthlyExpenses=n.flexibleMonthlyExpenses=n.accounts=n.startingTime=void 0;const o=t(50);n.startingTime=1614908235844,n.accounts={Lilian:{dollarsPerMonth:60,awardSize:.5,awardName:"50¢ 🍭"},Ashley:{dollarsPerMonth:130,awardSize:5,awardName:"$5 💵"},Nathan:{dollarsPerMonth:130,awardSize:5,awardName:"$5 💵"},Food:{dollarsPerMonth:500,awardSize:10,awardName:"$10 🍔"},Social:{dollarsPerMonth:60,awardSize:20,awardName:"$20 🎮"},House:{dollarsPerMonth:260,awardSize:50,awardName:"$50 ⛏️"},Vacation:{dollarsPerMonth:50,awardSize:50,awardName:"$50 ⛽"},Emergency:{dollarsPerMonth:150,awardSize:100,awardName:"$100 🚑"}},n.flexibleMonthlyExpenses={"Expensive House Insurance vs. Minimum":100,Netflix:10,"Youtube Red Family":16,Disney:7,"Amazon Prime":80/12},n.inflexibleMonthlyExpenses={"Mortgage [25y from July 2020]":1060,"Student loans [32k @ 6y 9m from March 2021]":484,"House/car insurance":300,"Gas/electricity":350,"Property taxes":200,Water:150,Internet:100,Cell:80},n.allowanceTotal=o.objectEntries(n.accounts).reduce(((e,[n,t])=>e+t.dollarsPerMonth),0),n.inflexibleExpensesTotal=o.objectEntries(n.inflexibleMonthlyExpenses).reduce(((e,[n,t])=>e+t),0),n.flexibleExpensesTotal=o.objectEntries(n.flexibleMonthlyExpenses).reduce(((e,[n,t])=>e+t),0)},967:(e,n,t)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.calculateAllowance=void 0;const o=t(526),r=t(800),l=t(42);n.calculateAllowance=function(e){const{name:n,account:t}=e,_=o.millisToMonth(Date.now()-r.startingTime),i=o.monthToSec(1)/t.dollarsPerMonth*t.awardSize,u=_*t.dollarsPerMonth,a=l.transactions.filter((e=>null!=e[n])).reduce(((e,t)=>e-t[n]),u),s=Math.max(0,Math.floor(a/t.awardSize)*t.awardSize),c=(a-s)/t.awardSize,d=Math.floor((1-c)*i),f=Math.floor(d/60),h=Math.floor(f/60),p=Math.floor(h/24);return{quantizedAmount:s,daysUntilAward:p,hoursUntilAward:h-24*p,minutesUntilAward:f-60*h,secondsUntilAward:d-60*f}}},42:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.transactions=void 0,n.transactions=[{Ashley:-44.73},{Nathan:-38.28},{Lilian:-10.5},{Food:-154.9},{Social:-42.24},{Emergency:-127.28},{Vacation:-496.75},{House:-600.92},{Food:62.32},{Food:5.51},{Food:124.36},{Social:11},{Nathan:4},{Food:42},{Nathan:850},{Food:80.92},{Food:7.86},{House:100},{Food:86.26-28.812},{Lilian:38.812},{Food:20.9895},{Food:12.72*1.05},{Food:20.12},{House:36.74},{Food:39.22},{House:16},{Ashley:2.09},{Lilian:25.19},{Social:9.44},{Nathan:-850},{Social:10/3,Ashley:10/3,Lilian:10/3},{Food:39.264425},{Nathan:6.595575},{Food:86.28},{Food:6},{Food:27.29},{House:422.42},{Nathan:8.47},{Food:91.61},{Nathan:1},{Social:5},{Food:29.48},{Social:17},{Social:46.75},{Ashley:5.25},{House:256},{Nathan:4.41},{Food:42.68-4.41},{Nathan:97},{Food:6},{Food:82.35},{Food:105.297},{Nathan:14.46*1.05},{Food:48.97},{Food:16.716},{Nathan:4.41},{Nathan:138.306},{Ashley:31.4685},{Social:10.98*1.05},{Food:33.6125},{House:-125},{House:133.88},{Nathan:16},{Ashley:59.98},{Vacation:79.73},{Lilian:29.3475},{Vacation:71.68*1.05},{Vacation:93.85949999999998},{House:39.354000000000006},{Food:14.35},{House:23.6},{Ashley:90},{House:-23.6},{Social:-14.67},{Food:1.38},{Food:24.6},{Food:-112.85},{Food:40.42},{Food:24.13},{Food:24.15},{Nathan:8.39},{Ashley:26.187},{Lilian:6.174},{House:27.2685},{Food:36.940499999999986},{Lilian:28.31},{Nathan:18.89},{Social:31.5},{Ashley:7.1925},{Lilian:10.5},{Food:7.48*1.05},{Food:10},{Ashley:-250},{Food:69.55},{Food:56.09},{House:41.25},{Food:148.83-76.0095},{Ashley:73.479},{Nathan:2.5305},{Food:1.49},{Food:20.65},{Nathan:4.41},{Food:-17.83},{Ashley:-16.8},{Food:16.4},{Food:10.49},{Ashley:7.86},{Food:119.82},{Nathan:7.49}]},50:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.pipe=n.fromEntries=n.objectKeys=n.objectEntries=void 0,n.objectEntries=function(e){return Object.entries(e)},n.objectKeys=function(e){return Object.keys(e)},n.fromEntries=function(e){const n={};return e.forEach((e=>{n[e[0]]=e[1]})),n},n.pipe=function e(n){return{into:t=>e(t(n)),outFrom:e=>e(n)}}},526:(e,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.monthToSec=n.millisToMonth=n.millisToDay=n.currentHour24=void 0,n.currentHour24=function(){const e=new Date,n=new Date;return n.setHours(0),n.setMinutes(0),n.setSeconds(0),(e.getTime()-n.getTime())/1e3/60/60},n.millisToDay=function(e){return e/1e3/60/60/24},n.millisToMonth=function(e){return e/1e3/60/60/24/30.436875},n.monthToSec=function(e){return 30.436875*e*24*60*60}},252:function(e,n,t){"use strict";var o=this&&this.__awaiter||function(e,n,t,o){return new(t||(t=Promise))((function(r,l){function _(e){try{u(o.next(e))}catch(e){l(e)}}function i(e){try{u(o.throw(e))}catch(e){l(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(_,i)}u((o=o.apply(e,n||[])).next())}))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});const l=r(t(220)),_=t(811),i=t(50),u=t(967),a=t(800),s={fontFamily:"'Trebuchet MS'",fontSize:"26pt",color:"#d7e5e5",backgroundColor:"#151532",margin:0,width:"100%",height:"100%",display:"grid"},c={margin:"1em"},d=Object.assign(Object.assign({},c),{display:"grid",gridAutoColumns:"auto auto auto",gridAutoFlow:"column"});o(void 0,void 0,void 0,(function*(){const e=yield fetch("buildInfo.json"),n=yield e.json(),t=new Date(n.timestamp);l.default.render(l.default.createElement((()=>{const[e,n]=_.useState(0);return _.useEffect((()=>{const e=setInterval((()=>{n((e=>e+1))}),1e3);return()=>clearInterval(e)}),[]),l.default.createElement("div",{style:s},l.default.createElement("div",{style:c},l.default.createElement("h1",null,"Allowance"),l.default.createElement("i",null,"Transactions last updated: ",t.toLocaleString("default",{month:"long",day:"numeric",year:"numeric",hour:"numeric",hour12:!0}))),l.default.createElement("div",{style:d},i.objectEntries(a.accounts).map((([e,n])=>{const t=u.calculateAllowance({name:e,account:n});return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{style:{gridColumn:1}},e),l.default.createElement("div",{style:{gridColumn:2}},"💲",t.quantizedAmount.toFixed(2)),l.default.createElement("div",{style:{gridColumn:3}},l.default.createElement("i",null,"next")," ",n.awardName,l.default.createElement("i",null,"in ",t.daysUntilAward>0?`${t.daysUntilAward}d `:"",t.hoursUntilAward>0?`${t.hoursUntilAward}h `:"",t.minutesUntilAward>0?`${t.minutesUntilAward}m `:"",t.secondsUntilAward,"s")))}))))}),null),document.body)}))}},n={};!function t(o){var r=n[o];if(void 0!==r)return r.exports;var l=n[o]={exports:{}};return e[o].call(l.exports,l,l.exports,t),l.exports}(252)})();