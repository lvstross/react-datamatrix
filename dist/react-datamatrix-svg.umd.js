(function(G,Q){typeof exports=="object"&&typeof module<"u"?module.exports=Q(require("react")):typeof define=="function"&&define.amd?define(["react"],Q):(G=typeof globalThis<"u"?globalThis:G||self,G["React Datamatrix SVG"]=Q(G.React))})(this,function(G){"use strict";const ve=(O=>O&&typeof O=="object"&&"default"in O?O:{default:O})(G);function Me(O){var D=[],V=0,$=0,F=function(d,v){D[v]=D[v]||[],D[v][d]=1},N=function(d){for(var v=[],l=d.length,o=0;o<l;o++){var a=d.charCodeAt(o),u=o+1<l?d.charCodeAt(o+1):0;a>47&&a<58&&u>47&&u<58?(v.push((a-48)*10+u+82),o++):a>127?(v.push(235),v.push(a-127&255)):v.push(a+1)}return v},U=function(d){var v=[231],l=d.length;250<l&&v.push(37+(l/250|0)&255),v.push(l%250+149*(v.length+1)%255+1&255);for(var o=0;o<l;o++)v.push(d.charCodeAt(o)+149*(v.length+1)%255+1&255);return v},I=function(d){for(var v=d.length,l=v+1&-4,o=0,a,u=l>0?[240]:[],i=0;i<l;i++){if(i<l-1){if(a=d.charCodeAt(i),a<32||a>94)return[]}else a=31;o=o*64+(a&63),(i&3)==3&&(u.push(o>>16),u.push(o>>8&255),u.push(o&255),o=0)}return l>v?u:u.concat(N(d.substr(l==0?0:l-1)))},C=function(d,v){var l,o,a=0,u=0,i=d.length,n=[v[0]],g=function(S){u=40*u+S,a++==2&&(n.push(++u>>8),n.push(u&255),a=u=0)};for(l=0;l<i&&!(a==0&&l==i-1);l++){var A=d.charCodeAt(l);for(A>127&&n[0]!=238&&(g(1),g(30),A-=128),o=1;A>v[o];o+=3);var P=v[o+1];if(P==8||P==9&&a==0&&l==i-1)return[];if(P<5&&a==2&&l==i-1)break;P<5&&g(P),g(A-v[o+2])}return a==2&&n[0]!==238&&g(0),n.push(254),(a>0||l<i)&&(n=n.concat(N(d.substr(l-a)))),n},q=function(d,v){d=unescape(encodeURI(d));var l=N(d),o=l.length,a=C(d,[230,31,0,0,32,9,29,47,1,33,57,9,44,64,1,43,90,9,51,95,1,69,127,2,96,255,1,0]),u=a.length;u>0&&u<o&&(l=a,o=u),a=C(d,[239,31,0,0,32,9,29,47,1,33,57,9,44,64,1,43,90,2,64,95,1,69,122,9,83,127,2,96,255,1,0]),u=a.length,u>0&&u<o&&(l=a,o=u),a=C(d,[238,12,8,0,13,9,13,31,8,0,32,9,29,41,8,0,42,9,41,47,8,0,57,9,44,64,8,0,90,9,51,255,8,0]),u=a.length,u>0&&u<o&&(l=a,o=u),a=I(d),u=a.length,u>0&&u<o&&(l=a,o=u),a=U(d),u=a.length,u>0&&u<o&&(l=a,o=u);var i,n,g=1,A=1,P,S,f,s=-1,m,w,y,j=1,Y=new Array(70),_=new Array(70),x=new Array(256),M=new Array(255);if(v&&o<50){a=[16,7,28,11,24,14,32,18,32,24,44,28];do n=a[++s],i=6+(s&12),u=n*i/8;while(u-a[++s]<o);n>25&&(g=2)}else{n=i=6,f=2,a=[5,7,10,12,14,18,20,24,28,36,42,48,56,68,84,112,144,192,224,272,336,408,496,620];do{if(++s==a.length)return[0,0];n>11*f&&(f=4+f&12),n=i+=f,u=n*i>>3}while(u-a[s]<o);n>27&&(A=g=2*(n/54|0)+2),u>255&&(j=2*(u>>9)+2)}for(y=a[s],P=n/g,S=i/A,o<u-y&&(l[o++]=129);o<u-y;)l[o++]=(149*o%253+130)%254;for(y/=j,s=1,f=0;f<255;f++)M[f]=s,x[s]=f,s+=s,s>255&&(s^=301);for(Y[y]=0,f=1;f<=y;f++)for(s=y-f,Y[s]=1;s<y;s++)Y[s]=Y[s+1]^M[(x[Y[s]]+f)%255];for(m=0;m<j;m++){for(f=0;f<=y;f++)_[f]=0;for(f=m;f<o;f+=j)for(s=0,L=_[0]^l[f];s<y;s++)_[s]=_[s+1]^(L?M[(x[Y[s]]+x[L])%255]:0);for(f=0;f<y;f++)l[o+m+f*j]=_[f]}for(f=0;f<i+2*A;f+=S+2)for(s=0;s<n+2*g;s++)F(s,f+S+1),(s&1)==0&&F(s,f);for(f=0;f<n+2*g;f+=P+2)for(s=0;s<i;s++)F(f,s+(s/S|0)*2+1),(s&1)==1&&F(f+P+1,s+(s/S|0)*2);for(y=2,m=0,w=4,j=[0,0,-1,0,-2,0,0,-1,-1,-1,-2,-1,-1,-2,-2,-2],f=0;f<u;w-=y,m+=y){if(w==i-3&&m==-1)a=[n,6-i,n,5-i,n,4-i,n,3-i,n-1,3-i,3,2,2,2,1,2];else if(w==i+1&&m==1&&(n&7)==0&&(i&7)==6)a=[n-2,-i,n-3,-i,n-4,-i,n-2,-1-i,n-3,-1-i,n-4,-1-i,n-2,-2,-1,-2];else{if(w==0&&m==n-2&&n&3)continue;if(w<0||m>=n||w>=i||m<0)for(y=-y,w+=2+y/2,m+=2-y/2;w<0||m>=n||w>=i||m<0;)w-=y,m+=y;if(w==i-2&&m==0&&n&3)a=[n-1,3-i,n-1,2-i,n-2,2-i,n-3,2-i,n-4,2-i,0,1,0,0,0,-1];else if(w==i-2&&m==0&&(n&7)==4)a=[n-1,5-i,n-1,4-i,n-1,3-i,n-1,2-i,n-2,2-i,0,1,0,0,0,-1];else{if(w==1&&m==n-1&&(n&7)==0&&(i&7)==6)continue;a=j}}for(o=l[f++],s=0;o>0;s+=2,o>>=1)if(o&1){var L=m+a[s],z=w+a[s+1];L<0&&(L+=n,z+=4-(n+4&7)),z<0&&(z+=i,L+=4-(i+4&7)),F(L+2*(L/P|0)+1,z+2*(z/S|0)+1)}}for(f=n;f&3;f--)F(f,f);V=n+2*g,$=i+2*A};return function(){function d(_){return/^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(_)}function v(_,x){_=document.createElementNS(A,_);for(var M in x||{})_.setAttribute(M,x[M]);return _}var l=Math.abs,o,a,u,i,n,g,A="http://www.w3.org/2000/svg",P="",S=typeof O=="string"?{msg:O}:O||{},f=S.pal||["#000"],s=l(S.dim)||256,m=l(S.pad),m=m>-1?m:2,w=[1,0,0,1,m,m],y=f[0],y=d(y)?y:"#000",j=f[1],j=d(j)?j:0,Y=S.vrb?0:1;for(q(S.msg||"",S.rct),n=V+m*2,g=$+m*2,u=$;u--;)for(i=0,a=V;a--;)D[u][a]&&(Y?(i++,D[u][a-1]||(P+="M"+a+","+u+"h"+i+"v1h-"+i+"v-1z",i=0)):P+="M"+a+","+u+"h1v1h-1v-1z");return o=v("svg",{viewBox:[0,0,n,g].join(" "),width:s/g*n|0,height:s,fill:y,"shape-rendering":"crispEdges",xmlns:A,version:"1.1"}),j&&o.appendChild(v("path",{fill:j,d:"M0,0v"+g+"h"+n+"V0H0Z"})),o.appendChild(v("path",{transform:"matrix("+w+")",d:P})),o}()}var pe={exports:{}},K={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he;function We(){if(he)return K;he=1;var O=ve.default,D=Symbol.for("react.element"),V=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,F=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,N={key:!0,ref:!0,__self:!0,__source:!0};function U(I,C,q){var d,v={},l=null,o=null;q!==void 0&&(l=""+q),C.key!==void 0&&(l=""+C.key),C.ref!==void 0&&(o=C.ref);for(d in C)$.call(C,d)&&!N.hasOwnProperty(d)&&(v[d]=C[d]);if(I&&I.defaultProps)for(d in C=I.defaultProps,C)v[d]===void 0&&(v[d]=C[d]);return{$$typeof:D,type:I,key:l,ref:o,props:v,_owner:F.current}}return K.Fragment=V,K.jsx=U,K.jsxs=U,K}var X={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ge;function Ye(){return ge||(ge=1,process.env.NODE_ENV!=="production"&&function(){var O=ve.default,D=Symbol.for("react.element"),V=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),I=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),l=Symbol.for("react.lazy"),o=Symbol.for("react.offscreen"),a=Symbol.iterator,u="@@iterator";function i(e){if(e===null||typeof e!="object")return null;var r=a&&e[a]||e[u];return typeof r=="function"?r:null}var n=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function g(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),c=1;c<r;c++)t[c-1]=arguments[c];A("error",e,t)}}function A(e,r,t){{var c=n.ReactDebugCurrentFrame,b=c.getStackAddendum();b!==""&&(r+="%s",t=t.concat([b]));var E=t.map(function(h){return String(h)});E.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,E)}}var P=!1,S=!1,f=!1,s=!1,m=!1,w;w=Symbol.for("react.module.reference");function y(e){return!!(typeof e=="string"||typeof e=="function"||e===$||e===N||m||e===F||e===q||e===d||s||e===o||P||S||f||typeof e=="object"&&e!==null&&(e.$$typeof===l||e.$$typeof===v||e.$$typeof===U||e.$$typeof===I||e.$$typeof===C||e.$$typeof===w||e.getModuleId!==void 0))}function j(e,r,t){var c=e.displayName;if(c)return c;var b=r.displayName||r.name||"";return b!==""?t+"("+b+")":t}function Y(e){return e.displayName||"Context"}function _(e){if(e==null)return null;if(typeof e.tag=="number"&&g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case V:return"Portal";case N:return"Profiler";case F:return"StrictMode";case q:return"Suspense";case d:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case I:var r=e;return Y(r)+".Consumer";case U:var t=e;return Y(t._context)+".Provider";case C:return j(e,e.render,"ForwardRef");case v:var c=e.displayName||null;return c!==null?c:_(e.type)||"Memo";case l:{var b=e,E=b._payload,h=b._init;try{return _(h(E))}catch{return null}}}return null}var x=Object.assign,M=0,L,z,be,me,ye,Ee,_e;function Re(){}Re.__reactDisabledLog=!0;function Ve(){{if(M===0){L=console.log,z=console.info,be=console.warn,me=console.error,ye=console.group,Ee=console.groupCollapsed,_e=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Re,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}M++}}function Ue(){{if(M--,M===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:x({},e,{value:L}),info:x({},e,{value:z}),warn:x({},e,{value:be}),error:x({},e,{value:me}),group:x({},e,{value:ye}),groupCollapsed:x({},e,{value:Ee}),groupEnd:x({},e,{value:_e})})}M<0&&g("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ie=n.ReactCurrentDispatcher,oe;function ee(e,r,t){{if(oe===void 0)try{throw Error()}catch(b){var c=b.stack.trim().match(/\n( *(at )?)/);oe=c&&c[1]||""}return`
`+oe+e}}var ue=!1,re;{var Be=typeof WeakMap=="function"?WeakMap:Map;re=new Be}function we(e,r){if(!e||ue)return"";{var t=re.get(e);if(t!==void 0)return t}var c;ue=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var E;E=ie.current,ie.current=null,Ve();try{if(r){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(B){c=B}Reflect.construct(e,[],h)}else{try{h.call()}catch(B){c=B}e.call(h.prototype)}}else{try{throw Error()}catch(B){c=B}e()}}catch(B){if(B&&c&&typeof B.stack=="string"){for(var p=B.stack.split(`
`),k=c.stack.split(`
`),R=p.length-1,T=k.length-1;R>=1&&T>=0&&p[R]!==k[T];)T--;for(;R>=1&&T>=0;R--,T--)if(p[R]!==k[T]){if(R!==1||T!==1)do if(R--,T--,T<0||p[R]!==k[T]){var W=`
`+p[R].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),typeof e=="function"&&re.set(e,W),W}while(R>=1&&T>=0);break}}}finally{ue=!1,ie.current=E,Ue(),Error.prepareStackTrace=b}var H=e?e.displayName||e.name:"",$e=H?ee(H):"";return typeof e=="function"&&re.set(e,$e),$e}function qe(e,r,t){return we(e,!1)}function ze(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function te(e,r,t){if(e==null)return"";if(typeof e=="function")return we(e,ze(e));if(typeof e=="string")return ee(e);switch(e){case q:return ee("Suspense");case d:return ee("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case C:return qe(e.render);case v:return te(e.type,r,t);case l:{var c=e,b=c._payload,E=c._init;try{return te(E(b),r,t)}catch{}}}return""}var ne=Object.prototype.hasOwnProperty,Te={},Ce=n.ReactDebugCurrentFrame;function ae(e){if(e){var r=e._owner,t=te(e.type,e._source,r?r.type:null);Ce.setExtraStackFrame(t)}else Ce.setExtraStackFrame(null)}function Ge(e,r,t,c,b){{var E=Function.call.bind(ne);for(var h in e)if(E(e,h)){var p=void 0;try{if(typeof e[h]!="function"){var k=Error((c||"React class")+": "+t+" type `"+h+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[h]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw k.name="Invariant Violation",k}p=e[h](r,h,c,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(R){p=R}p&&!(p instanceof Error)&&(ae(b),g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",t,h,typeof p),ae(null)),p instanceof Error&&!(p.message in Te)&&(Te[p.message]=!0,ae(b),g("Failed %s type: %s",t,p.message),ae(null))}}}var Je=Array.isArray;function fe(e){return Je(e)}function He(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ke(e){try{return Oe(e),!1}catch{return!0}}function Oe(e){return""+e}function Se(e){if(Ke(e))return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",He(e)),Oe(e)}var Z=n.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0},Pe,je,se;se={};function Ze(e){if(ne.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Qe(e){if(ne.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function er(e,r){if(typeof e.ref=="string"&&Z.current&&r&&Z.current.stateNode!==r){var t=_(Z.current.type);se[t]||(g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',_(Z.current.type),e.ref),se[t]=!0)}}function rr(e,r){{var t=function(){Pe||(Pe=!0,g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function tr(e,r){{var t=function(){je||(je=!0,g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var nr=function(e,r,t,c,b,E,h){var p={$$typeof:D,type:e,key:r,ref:t,props:h,_owner:E};return p._store={},Object.defineProperty(p._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(p,"_self",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.defineProperty(p,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(p.props),Object.freeze(p)),p};function ar(e,r,t,c,b){{var E,h={},p=null,k=null;t!==void 0&&(Se(t),p=""+t),Qe(r)&&(Se(r.key),p=""+r.key),Ze(r)&&(k=r.ref,er(r,b));for(E in r)ne.call(r,E)&&!Xe.hasOwnProperty(E)&&(h[E]=r[E]);if(e&&e.defaultProps){var R=e.defaultProps;for(E in R)h[E]===void 0&&(h[E]=R[E])}if(p||k){var T=typeof e=="function"?e.displayName||e.name||"Unknown":e;p&&rr(h,T),k&&tr(h,T)}return nr(e,p,k,b,c,Z.current,h)}}var le=n.ReactCurrentOwner,xe=n.ReactDebugCurrentFrame;function J(e){if(e){var r=e._owner,t=te(e.type,e._source,r?r.type:null);xe.setExtraStackFrame(t)}else xe.setExtraStackFrame(null)}var ce;ce=!1;function de(e){return typeof e=="object"&&e!==null&&e.$$typeof===D}function ke(){{if(le.current){var e=_(le.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ir(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Ae={};function or(e){{var r=ke();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function De(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=or(r);if(Ae[t])return;Ae[t]=!0;var c="";e&&e._owner&&e._owner!==le.current&&(c=" It was passed a child from "+_(e._owner.type)+"."),J(e),g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,c),J(null)}}function Fe(e,r){{if(typeof e!="object")return;if(fe(e))for(var t=0;t<e.length;t++){var c=e[t];de(c)&&De(c,r)}else if(de(e))e._store&&(e._store.validated=!0);else if(e){var b=i(e);if(typeof b=="function"&&b!==e.entries)for(var E=b.call(e),h;!(h=E.next()).done;)de(h.value)&&De(h.value,r)}}}function ur(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===C||r.$$typeof===v))t=r.propTypes;else return;if(t){var c=_(r);Ge(t,e.props,"prop",c,e)}else if(r.PropTypes!==void 0&&!ce){ce=!0;var b=_(r);g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function fr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var c=r[t];if(c!=="children"&&c!=="key"){J(e),g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",c),J(null);break}}e.ref!==null&&(J(e),g("Invalid attribute `ref` supplied to `React.Fragment`."),J(null))}}function Ie(e,r,t,c,b,E){{var h=y(e);if(!h){var p="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(p+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var k=ir(b);k?p+=k:p+=ke();var R;e===null?R="null":fe(e)?R="array":e!==void 0&&e.$$typeof===D?(R="<"+(_(e.type)||"Unknown")+" />",p=" Did you accidentally export a JSX literal instead of a component?"):R=typeof e,g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",R,p)}var T=ar(e,r,t,b,E);if(T==null)return T;if(h){var W=r.children;if(W!==void 0)if(c)if(fe(W)){for(var H=0;H<W.length;H++)Fe(W[H],e);Object.freeze&&Object.freeze(W)}else g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Fe(W,e)}return e===$?fr(T):ur(T),T}}function sr(e,r,t){return Ie(e,r,t,!0)}function lr(e,r,t){return Ie(e,r,t,!1)}var cr=lr,dr=sr;X.Fragment=$,X.jsx=cr,X.jsxs=dr}()),X}(function(O){process.env.NODE_ENV==="production"?O.exports=We():O.exports=Ye()})(pe);const Le=pe.exports.jsx;function Ne({msg:O="",dim:D=256,rct:V=0,pad:$=2,pal:F=["#000000","#f2f4f8"],vrb:N=0,imgAttrs:U}){const I=Me({msg:O,dim:D,rct:V,pad:$,pal:F,vrb:N});return Le("img",{...U,src:`data:image/svg+xml;base64,${window.btoa(I==null?void 0:I.outerHTML)}`})}return Ne});