/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/preact/dist/preact.js":
/*!********************************************!*\
  !*** ./node_modules/preact/dist/preact.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

var n,l,u,t,i,r,o={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var t,i,r,o=arguments,f={};for(r in l)"key"==r?t=l[r]:"ref"==r?i=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(r in n.defaultProps)void 0===f[r]&&(f[r]=n.defaultProps[r]);return v(n,f,t,i,null)}function v(l,u,t,i,r){var o={type:l,props:u,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++n.__v:r};return null!=n.vnode&&n.vnode(o),o}function h(n){return n.children}function p(n,l){this.props=n,this.context=l}function y(n,l){if(null==l)return n.__?y(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?y(n):null}function d(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return d(n)}}function _(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!k.__r++||i!==n.debounceRendering)&&((i=n.debounceRendering)||t)(k)}function k(){for(var n;k.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,t,i,r,o;n.__d&&(r=(i=(l=n).__v).__e,(o=l.__P)&&(u=[],(t=c({},i)).__v=i.__v+1,$(o,i,t,l.__n,void 0!==o.ownerSVGElement,null!=i.__h?[r]:null,u,null==r?y(i):r,i.__h),H(u,i),i.__e!=r&&d(i)))})}function x(n,l,u,t,i,r,e,c,s,a){var p,d,_,k,x,g,w,A=t&&t.__k||f,P=A.length;for(u.__k=[],p=0;p<l.length;p++)if(null!=(k=u.__k[p]=null==(k=l[p])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(h,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[p])||_&&k.key==_.key&&k.type===_.type)A[p]=void 0;else for(d=0;d<P;d++){if((_=A[d])&&k.key==_.key&&k.type===_.type){A[d]=void 0;break}_=null}$(n,k,_=_||o,i,r,e,c,s,a),x=k.__e,(d=k.ref)&&_.ref!=d&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(d,k.__c||x,k)),null!=x?(null==g&&(g=x),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=m(k,s,n):s=b(n,k,_,A,x,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=y(_))}for(u.__e=g,p=P;p--;)null!=A[p]&&("function"==typeof u.type&&null!=A[p].__e&&A[p].__e==u.__d&&(u.__d=y(t,p+1)),z(A[p],A[p]));if(w)for(p=0;p<w.length;p++)j(w[p],w[++p],w[++p])}function m(n,l,u){var t,i;for(t=0;t<n.__k.length;t++)(i=n.__k[t])&&(i.__=n,l="function"==typeof i.type?m(i,l,u):b(u,i,i,n.__k,i.__e,l));return l}function b(n,l,u,t,i,r){var o,f,e;if(void 0!==l.__d)o=l.__d,l.__d=void 0;else if(null==u||i!=r||null==i.parentNode)n:if(null==r||r.parentNode!==n)n.appendChild(i),o=null;else{for(f=r,e=0;(f=f.nextSibling)&&e<t.length;e+=2)if(f==i)break n;n.insertBefore(i,r),o=r}return void 0!==o?o:i.nextSibling}function g(n,l,u,t,i){var r;for(r in u)"children"===r||"key"===r||r in l||A(n,r,null,u[r],t);for(r in l)i&&"function"!=typeof l[r]||"children"===r||"key"===r||"value"===r||"checked"===r||u[r]===l[r]||A(n,r,l[r],u[r],t)}function w(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function A(n,l,u,t,i){var r;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||w(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||w(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])r=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t||n.addEventListener(l,r?C:P,r):n.removeEventListener(l,r?C:P,r);else if("dangerouslySetInnerHTML"!==l){if(i)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function P(l){this.l[l.type+!1](n.event?n.event(l):l)}function C(l){this.l[l.type+!0](n.event?n.event(l):l)}function $(l,u,t,i,r,o,f,e,s){var a,v,y,d,_,k,m,b,g,w,A,P=u.type;if(void 0!==u.constructor)return null;null!=t.__h&&(s=t.__h,e=u.__e=t.__e,u.__h=null,o=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(b=u.props,g=(a=P.contextType)&&i[a.__c],w=a?g?g.props.value:a.__:i,t.__c?m=(v=u.__c=t.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(b,w):(u.__c=v=new p(b,w),v.constructor=P,v.render=I),g&&g.sub(v),v.props=b,v.state||(v.state={}),v.context=w,v.__n=i,y=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(b,v.__s))),d=v.props,_=v.state,y)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&b!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(b,w),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(b,v.__s,w)||u.__v===t.__v){v.props=b,v.state=v.__s,u.__v!==t.__v&&(v.__d=!1),v.__v=u,u.__e=t.__e,u.__k=t.__k,v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(b,v.__s,w),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=w,v.props=b,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(i=c(c({},i),v.getChildContext())),y||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===h&&null==a.key?a.props.children:a,x(l,Array.isArray(A)?A:[A],u,t,i,r,o,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),m&&(v.__E=v.__=null),v.__e=!1}else null==o&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=T(t.__e,u,t,i,r,o,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=o)&&(u.__e=e,u.__h=!!s,o[o.indexOf(e)]=null),n.__e(l,u,t)}}function H(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function T(n,l,u,t,i,r,e,c){var a,v,h,p,y=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(i=!0),null!=r)for(;k<r.length;k++)if((a=r[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,r[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=i?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),r=null,c=!1}if(null===_)y===d||c&&n.data===d||(n.data=d);else{if(r=r&&f.slice.call(n.childNodes),v=(y=u.props||o).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=r)for(y={},p=0;p<n.attributes.length;p++)y[n.attributes[p].name]=n.attributes[p].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(g(n,d,y,i,c),h)l.__k=[];else if(k=l.props.children,x(n,Array.isArray(k)?k:[k],l,u,t,i&&"foreignObject"!==_,r,e,n.firstChild,c),null!=r)for(k=r.length;k--;)null!=r[k]&&s(r[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&A(n,"value",k,y.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&A(n,"checked",k,y.checked,!1))}return n}function j(l,u,t){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,t)}}function z(l,u,t){var i,r,o;if(n.unmount&&n.unmount(l),(i=l.ref)&&(i.current&&i.current!==l.__e||j(i,null,u)),t||"function"==typeof l.type||(t=null!=(r=l.__e)),l.__e=l.__d=void 0,null!=(i=l.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(l){n.__e(l,u)}i.base=i.__P=null}if(i=l.__k)for(o=0;o<i.length;o++)i[o]&&z(i[o],u,t);null!=r&&s(r)}function I(n,l,u){return this.constructor(n,u)}function L(l,u,t){var i,r,e;n.__&&n.__(l,u),r=(i="function"==typeof t)?null:t&&t.__k||u.__k,e=[],$(u,l=(!i&&t||u).__k=a(h,null,[l]),r||o,o,void 0!==u.ownerSVGElement,!i&&t?[t]:r?null:u.firstChild?f.slice.call(u.childNodes):null,e,!i&&t?t:r?r.__e:u.firstChild,i),H(e,l)}n={__e:function(n,l){for(var u,t,i;l=l.__;)if((u=l.__c)&&!u.__)try{if((t=u.constructor)&&null!=t.getDerivedStateFromError&&(u.setState(t.getDerivedStateFromError(n)),i=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),i=u.__d),i)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),_(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),_(this))},p.prototype.render=h,u=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,r=0,exports.render=L,exports.hydrate=function n(l,u){L(l,u,n)},exports.createElement=a,exports.h=a,exports.Fragment=h,exports.createRef=function(){return{current:null}},exports.isValidElement=l,exports.Component=p,exports.cloneElement=function(n,l,u){var t,i,r,o=arguments,f=c({},n.props);for(r in l)"key"==r?t=l[r]:"ref"==r?i=l[r]:f[r]=l[r];if(arguments.length>3)for(u=[u],r=3;r<arguments.length;r++)u.push(o[r]);return null!=u&&(f.children=u),v(n.type,f,t||n.key,i||n.ref,null)},exports.createContext=function(n,l){var u={__c:l="__cC"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(_)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u},exports.toChildArray=function n(l,u){return u=u||[],null==l||"boolean"==typeof l||(Array.isArray(l)?l.some(function(l){n(l,u)}):u.push(l)),u},exports.options=n;
//# sourceMappingURL=preact.js.map


/***/ }),

/***/ "./node_modules/preact/hooks/dist/hooks.js":
/*!*************************************************!*\
  !*** ./node_modules/preact/hooks/dist/hooks.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var n,t,r,o=__webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.js"),u=0,i=[],c=o.options.__b,e=o.options.__r,f=o.options.diffed,a=o.options.__c,v=o.options.unmount;function p(n,r){o.options.__h&&o.options.__h(t,n,u||r),u=0;var i=t.__H||(t.__H={__:[],__h:[]});return n>=i.__.length&&i.__.push({}),i.__[n]}function s(n){return u=1,x(A,n)}function x(r,o,u){var i=p(n++,2);return i.t=r,i.__c||(i.__=[u?u(o):A(void 0,o),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=t),i.__}function m(r,u){var i=p(n++,4);!o.options.__s&&q(i.__H,u)&&(i.__=r,i.__H=u,t.__h.push(i))}function l(t,r){var o=p(n++,7);return q(o.__H,r)&&(o.__=t(),o.__H=r,o.__h=t),o.__}function y(){i.forEach(function(n){if(n.__P)try{n.__H.__h.forEach(_),n.__H.__h.forEach(d),n.__H.__h=[]}catch(t){n.__H.__h=[],o.options.__e(t,n.__v)}}),i=[]}o.options.__b=function(n){t=null,c&&c(n)},o.options.__r=function(r){e&&e(r),n=0;var o=(t=r.__c).__H;o&&(o.__h.forEach(_),o.__h.forEach(d),o.__h=[])},o.options.diffed=function(n){f&&f(n);var u=n.__c;u&&u.__H&&u.__H.__h.length&&(1!==i.push(u)&&r===o.options.requestAnimationFrame||((r=o.options.requestAnimationFrame)||function(n){var t,r=function(){clearTimeout(o),h&&cancelAnimationFrame(t),setTimeout(n)},o=setTimeout(r,100);h&&(t=requestAnimationFrame(r))})(y)),t=void 0},o.options.__c=function(n,t){t.some(function(n){try{n.__h.forEach(_),n.__h=n.__h.filter(function(n){return!n.__||d(n)})}catch(r){t.some(function(n){n.__h&&(n.__h=[])}),t=[],o.options.__e(r,n.__v)}}),a&&a(n,t)},o.options.unmount=function(n){v&&v(n);var t=n.__c;if(t&&t.__H)try{t.__H.__.forEach(_)}catch(n){o.options.__e(n,t.__v)}};var h="function"==typeof requestAnimationFrame;function _(n){var r=t;"function"==typeof n.__c&&n.__c(),t=r}function d(n){var r=t;n.__c=n.__(),t=r}function q(n,t){return!n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function A(n,t){return"function"==typeof t?t(n):t}exports.useState=s,exports.useReducer=x,exports.useEffect=function(r,u){var i=p(n++,3);!o.options.__s&&q(i.__H,u)&&(i.__=r,i.__H=u,t.__H.__h.push(i))},exports.useLayoutEffect=m,exports.useRef=function(n){return u=5,l(function(){return{current:n}},[])},exports.useImperativeHandle=function(n,t,r){u=6,m(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==r?r:r.concat(n))},exports.useMemo=l,exports.useCallback=function(n,t){return u=8,l(function(){return n},t)},exports.useContext=function(r){var o=t.context[r.__c],u=p(n++,9);return u.__c=r,o?(null==u.__&&(u.__=!0,o.sub(t)),o.props.value):r.__},exports.useDebugValue=function(n,t){o.options.useDebugValue&&o.options.useDebugValue(t?t(n):n)},exports.useErrorBoundary=function(r){var o=p(n++,10),u=s();return o.__=r,t.componentDidCatch||(t.componentDidCatch=function(n){o.__&&o.__(n),u[1](n)}),[u[0],function(){u[1](void 0)}]};
//# sourceMappingURL=hooks.js.map


/***/ }),

/***/ "./App.tsx":
/*!*****************!*\
  !*** ./App.tsx ***!
  \*****************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var preact_1 = __importDefault(__webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.js"));
var hooks_1 = __webpack_require__(/*! preact/hooks */ "./node_modules/preact/hooks/dist/hooks.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./utils.ts");
var budgetting_1 = __webpack_require__(/*! ./budgetting */ "./budgetting.ts");
var Allowances = function () {
    return utils_1.objectEntries(budgetting_1.accounts).map(function (_a) {
        var name = _a[0], account = _a[1];
        var allowance = utils_1.calculateAllowance({ name: name, account: account });
        return preact_1["default"].createElement(preact_1["default"].Fragment, null,
            preact_1["default"].createElement("div", { style: { gridColumn: 1 } }, name),
            preact_1["default"].createElement("div", { style: { gridColumn: 2 } },
                "\uD83D\uDCB2",
                allowance.quantizedAmount.toFixed(2)),
            preact_1["default"].createElement("div", { style: { gridColumn: 3 } },
                preact_1["default"].createElement("i", null, "next"),
                " ",
                account.awardName,
                preact_1["default"].createElement("i", null,
                    "in ",
                    allowance.daysUntilAward > 0 ? allowance.daysUntilAward + "d " : "",
                    allowance.hoursUntilAward > 0 ? allowance.hoursUntilAward + "h " : "",
                    allowance.minutesUntilAward > 0 ? allowance.minutesUntilAward + "m " : "",
                    allowance.secondsUntilAward,
                    "s")));
    });
};
var colors = {
    "dark-back": "#151532",
    "dark-fore": "#d7e5e5",
};
var bodyStyle = {
    fontFamily: "'Trebuchet MS'",
    fontSize: "26pt",
    color: colors["dark-fore"],
    backgroundColor: colors["dark-back"],
    margin: 0,
    width: "100%",
    height: "100%",
    display: "grid",
};
var gridItemStyle = {
    margin: "1em",
};
var allowanceStyle = __assign(__assign({}, gridItemStyle), { display: "grid", gridAutoColumns: "auto auto auto", gridAutoFlow: "column" });
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var buildInfoResponse, buildInfo, lastTransactionDate, App;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("buildInfo.json")];
            case 1:
                buildInfoResponse = _a.sent();
                return [4 /*yield*/, buildInfoResponse.json()];
            case 2:
                buildInfo = _a.sent();
                lastTransactionDate = new Date(buildInfo.timestamp);
                App = function () {
                    // ⌚ Force update every second
                    var _a = hooks_1.useState(0), _ = _a[0], setSeconds = _a[1];
                    hooks_1.useEffect(function () {
                        var interval = setInterval(function () {
                            setSeconds(function (seconds) { return seconds + 1; });
                        }, 1000);
                        return function () { return clearInterval(interval); };
                    }, []);
                    // ⌚
                    return preact_1["default"].createElement("div", { style: bodyStyle },
                        preact_1["default"].createElement("div", { style: gridItemStyle },
                            preact_1["default"].createElement("h1", null, "Allowance"),
                            preact_1["default"].createElement("i", null,
                                "Transactions last updated: ",
                                lastTransactionDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric', hour: "numeric", hour12: true }))),
                        preact_1["default"].createElement("div", { style: allowanceStyle }, Allowances()));
                };
                preact_1["default"].render(preact_1["default"].createElement(App, null), document.body);
                return [2 /*return*/];
        }
    });
}); })();


/***/ }),

/***/ "./budgetting.ts":
/*!***********************!*\
  !*** ./budgetting.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.flexibleExpensesTotal = exports.inflexibleExpensesTotal = exports.allowanceTotal = exports.inflexibleMonthlyExpenses = exports.flexibleMonthlyExpenses = exports.accounts = exports.startingTime = void 0;
var utils_1 = __webpack_require__(/*! ./utils */ "./utils.ts");
exports.startingTime = 1614908235844;
exports.accounts = {
    "Lilian": { dollarsPerMonth: 60, awardSize: 0.5, awardName: "50¢ 🍭" },
    "Ashley": { dollarsPerMonth: 130, awardSize: 5, awardName: "$5 💵" },
    "Nathan": { dollarsPerMonth: 130, awardSize: 5, awardName: "$5 💵" },
    "Food": { dollarsPerMonth: 500, awardSize: 10, awardName: "$10 🍔" },
    "Social": { dollarsPerMonth: 60, awardSize: 20, awardName: "$20 🎮" },
    "House": { dollarsPerMonth: 260, awardSize: 50, awardName: "$50 ⛏️" },
    "Emergency": { dollarsPerMonth: 150, awardSize: 100, awardName: "$100 🚑" },
    "Vacation": { dollarsPerMonth: 50, awardSize: 250, awardName: "$250 🚞" },
};
exports.flexibleMonthlyExpenses = {
    "Youtube Red Family": 16.00,
    "Netflix": 10.00,
    "Nintendo": 4.00,
    "Expensive Cell vs. Minimum Cell": 50.00,
    "Expensive House Insurance vs. Minimum": 100.00,
};
exports.inflexibleMonthlyExpenses = {
    "Mortgage [25y from July 2020]": 1060,
    "Student loans [32k @ 6y 9m from March 2021]": 484,
    "House/car insurance": 300,
    "Gas/electricity": 300,
    "Property taxes": 200,
    "Water": 150,
    "Internet": 100,
    "Cell": 80,
};
exports.allowanceTotal = utils_1.objectEntries(exports.accounts).reduce(function (total, _a) {
    var _ = _a[0], each = _a[1];
    return total + each.dollarsPerMonth;
}, 0);
exports.inflexibleExpensesTotal = utils_1.objectEntries(exports.inflexibleMonthlyExpenses).reduce(function (total, _a) {
    var _ = _a[0], amount = _a[1];
    return total + amount;
}, 0);
exports.flexibleExpensesTotal = utils_1.objectEntries(exports.flexibleMonthlyExpenses).reduce(function (total, _a) {
    var _ = _a[0], amount = _a[1];
    return total + amount;
}, 0);


/***/ }),

/***/ "./transactions.ts":
/*!*************************!*\
  !*** ./transactions.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

exports.__esModule = true;
exports.transactions = void 0;
exports.transactions = [
    // Starting off with a certain amount of money in the accounts
    { Ashley: -44.73 },
    { Nathan: -38.28 },
    { Lilian: -10.5 },
    { Food: -154.9 },
    { Social: -42.24 },
    { Emergency: -127.28 },
    { Vacation: -496.75 },
    { House: -600.92 },
    // Regular spending
    { Food: 62.32 },
    { Food: 5.51 },
    { Food: 124.36 },
    { Social: 11.00 },
    { Nathan: 4.00 },
    { Food: 42.00 },
    { Nathan: 850 },
    { Food: 80.92 },
    { Food: 7.86 },
    { House: 100 },
    { Food: 86.26 - 1.05 * (3.98 + 4.98 + 16.98 + 1.50) },
    { Lilian: 1.05 * (3.98 + 4.98 + 16.98 + 1.50) + 10 },
    { Food: 19.99 * 1.05 },
    { Food: (2.5 + 4.88 + 0.11 + 0.25 + 2.99 + 1.99) * 1.05 },
    { Food: 20.12 },
    { House: 36.74 },
    { Food: 39.22 },
    { House: 16.00 },
    { Ashley: 2.09 },
    { Lilian: 25.19 },
    { Social: 9.44 },
    { Nathan: -850.00 },
    {
        Social: 10.00 / 3,
        Ashley: 10.00 / 3,
        Lilian: 10.00 / 3,
    },
    { Food: 45.86 - 0.85 * 1.05 * (6.99 + 0.40) },
    { Nathan: 0.85 * 1.05 * (6.99 + 0.40) }, // Energy Drinks (15% off day)
    // Test transactions, figure out when you'll be able to make the next big purchase...
    // { House: 1200.00 }, // Insulation R40
    // { House: 100.00 }, // Wheel barrow
    // { House: 50.00 }, // Pickaxe
    // { Nathan: 100.00 }, // Portable NVME SSD --- Short usb cable - https://www.amazon.ca/Afterplug-Charging-Chromebook-Nintendo-External/dp/B08816SYKY/ref=sr_1_20?dchild=1&keywords=15%2Bcm%2Busbc%2Bto%2Busbc%2Bcable&qid=1617127027&sr=8-20&th=1
];


/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

exports.__esModule = true;
exports.calculateAllowance = exports.monthToSec = exports.millisToMonth = exports.objectEntries = void 0;
/** Strictly typed wrapper for Object.entries */
function objectEntries(obj) {
    return Object.entries(obj);
}
exports.objectEntries = objectEntries;
function millisToMonth(ms) {
    return ms
        / 1000 // =second
        / 60 //=minute
        / 60 // =hour
        / 24 // =day
        / 30; // =month
}
exports.millisToMonth = millisToMonth;
;
function monthToSec(month) {
    return month
        * 30 // =day
        * 24 // =hour
        * 60 // =minute
        * 60; //=second
}
exports.monthToSec = monthToSec;
;
var budgetting_1 = __webpack_require__(/*! ./budgetting */ "./budgetting.ts");
var transactions_1 = __webpack_require__(/*! ./transactions */ "./transactions.ts");
function calculateAllowance(params) {
    var name = params.name, account = params.account;
    var timeSinceStartMonth = millisToMonth(Date.now() - budgetting_1.startingTime);
    var secondsPerDollar = monthToSec(1) / account.dollarsPerMonth;
    var secondsPerAward = secondsPerDollar * account.awardSize;
    var amountBeforeTransactions = timeSinceStartMonth * account.dollarsPerMonth;
    var currentAmountRaw = transactions_1.transactions
        .filter(function (t) {
        return t[name] != null;
    })
        .reduce(function (total, t) { return total - t[name]; }, amountBeforeTransactions);
    var quantizedAmount = Math.max(0, Math.floor(currentAmountRaw / account.awardSize) * account.awardSize);
    var progressToAward = (currentAmountRaw - quantizedAmount) / account.awardSize;
    var totalSecondsUntilAward = Math.floor((1 - progressToAward) * secondsPerAward);
    var totalMinutesUntilAward = Math.floor(totalSecondsUntilAward / 60);
    var totalHoursUntilAward = Math.floor(totalMinutesUntilAward / 60);
    var daysUntilAward = Math.floor(totalHoursUntilAward / 24);
    var hoursUntilAward = totalHoursUntilAward - daysUntilAward * 24;
    var minutesUntilAward = totalMinutesUntilAward - totalHoursUntilAward * 60;
    var secondsUntilAward = totalSecondsUntilAward - totalMinutesUntilAward * 60;
    return { quantizedAmount: quantizedAmount, daysUntilAward: daysUntilAward, hoursUntilAward: hoursUntilAward, minutesUntilAward: minutesUntilAward, secondsUntilAward: secondsUntilAward };
}
exports.calculateAllowance = calculateAllowance;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./App.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map