(function(){var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ba="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ca(a,b){if(b){for(var c=ba,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&aa(c,d,{configurable:!0,writable:!0,value:f})}}
var ea="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
ca("Object.assign",function(a){return a||ea});
var h=this||self;function k(a){a=a.split(".");for(var b=h,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function fa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
;var ha=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ia=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var l=f[g];
b.call(void 0,l,g,a)&&(d[e++]=l)}return d};
function ja(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=fa(d);if("array"==e||"object"==e&&"number"==typeof d.length){e=a.length||0;var f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var m;a:{var ka=h.navigator;if(ka){var la=ka.userAgent;if(la){m=la;break a}}m=""};var ma="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function na(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ma.length;f++)c=ma[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var oa=-1!=m.indexOf("Trident")||-1!=m.indexOf("MSIE"),pa=-1!=m.toLowerCase().indexOf("webkit")&&-1==m.indexOf("Edge");function p(a,b){this.width=a;this.height=b}
p.prototype.aspectRatio=function(){return this.width/this.height};
p.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
p.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
p.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var r=window,t=document,qa=r.location;function ra(){}
var sa=/\[native code\]/;function w(a,b,c){return a[b]=a[b]||c}
function ta(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function x(){var a;if((a=Object.create)&&sa.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var z=w(r,"gapi",{});var A;A=w(r,"___jsl",x());w(A,"I",0);w(A,"hel",10);function ua(){var a=qa.href;if(A.dpo)var b=A.h;else{b=A.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function va(a){var b=w(A,"PQ",[]);A.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function wa(a){return w(w(A,"H",x()),a,x())}
;var B=w(A,"perf",x());w(B,"g",x());var xa=w(B,"i",x());w(B,"r",[]);x();x();function C(a,b,c){b&&0<b.length&&(b=ya(b),c&&0<c.length&&(b+="___"+ya(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=w(xa,"_p",x()),w(b,c,x())[a]=(new Date).getTime(),b=B.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function ya(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var za=x(),D=[];function E(a){throw Error("Bad hint"+(a?": "+a:""));}
D.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?A[b]=w(A,b,[]).concat(c):w(A,b,c)}if(b=a.u)a=w(A,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Aa=/^(\/[a-zA-Z0-9_\-]+)+$/,Ba=[/\/amp\//,/\/amp$/,/^\/amp$/],Ca=/^[a-zA-Z0-9\-_\.,!]+$/,Da=/^gapi\.loaded_[0-9]+$/,Ea=/^[a-zA-Z0-9,._-]+$/;function Fa(a,b,c,d){var e=a.split(";"),f=e.shift(),g=za[f],l=null;g?l=g(e,b,c,d):E("no hint processor for: "+f);l||E("failed to generate load url");b=l;c=b.match(Ga);(d=b.match(Ha))&&1===d.length&&Ia.test(b)&&c&&1===c.length||E("failed sanity: "+a);return l}
function Ja(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=Ka(a);Da.test(c)||E("invalid_callback");b=La(b);d=d&&d.length?La(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.a?"/am="+e(a.a):"",a.f?"/rs="+e(a.f):"",a.g?"/t="+e(a.g):"","/cb=",e(c)].join("")}
function Ka(a){"/"!==a.charAt(0)&&E("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))E("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),l=decodeURIComponent(f[1]);2==f.length&&g&&l&&(a[g]=a[g]||l)}b="/"+c.join("/");Aa.test(b)||E("invalid_prefix");c=0;for(d=Ba.length;c<d;++c)Ba[c].test(b)&&E("invalid_prefix");c=I(a,"k",
!0);d=I(a,"am");e=I(a,"rs");a=I(a,"t");return{pathPrefix:b,version:c,a:d,f:e,g:a}}
function La(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Ea.test(e)&&b.push(e)}return b.join(",")}
function I(a,b,c){a=a[b];!a&&c&&E("missing: "+b);if(a){if(Ca.test(a))return a;E("invalid: "+b)}return null}
var Ia=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Ha=/\/cb=/g,Ga=/\/\//g;function Ma(){var a=ua();if(!a)throw Error("Bad hint");return a}
za.m=function(a,b,c,d){(a=a[0])||E("missing_hint");return"https://apis.google.com"+Ja(a,b,c,d)};
var J=decodeURI("%73cript"),Na=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Oa(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Pa(){var a=A.nonce;return void 0!==a?a&&a===String(a)&&a.match(Na)?a:A.nonce=null:t.querySelector?(a=t.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(Na)?A.nonce=a:A.nonce=null):null:null}
function Qa(a){if("loading"!=t.readyState)Ra(a);else{var b=Pa(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+J+' src="'+encodeURI(a)+'"'+c+"></"+J+">";t.write(a)}}
function Ra(a){var b=t.createElement(J);b.setAttribute("src",a);a=Pa();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=t.getElementsByTagName(J)[0])?a.parentNode.insertBefore(b,a):(t.head||t.body||t.documentElement).appendChild(b)}
function Sa(a,b){var c=b&&b._c;if(c)for(var d=0;d<D.length;d++){var e=D[d][0],f=D[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ta(a,b,c){Ua(function(){var d=b===ua()?w(z,"_",x()):x();d=w(wa(b),"_",d);a(d)},c)}
function Va(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Sa(a,c);var d=a?a.split(":"):[],e=c.h||Ma(),f=w(A,"ah",x());if(f["::"]&&d.length){for(var g=[],l=null;l=d.shift();){var n=l.split(".");n=f[l]||f[n[1]&&"ns:"+n[0]||""]||e;var F=g.length&&g[g.length-1]||null,G=F;F&&F.hint==n||(G={hint:n,b:[]},g.push(G));G.b.push(l)}var K=g.length;if(1<K){var H=c.callback;H&&(c.callback=function(){0==--K&&H()})}for(;d=g.shift();)Wa(d.b,c,d.hint)}else Wa(d||[],c,e)}
function Wa(a,b,c){function d(y,L){if(K)return 0;r.clearTimeout(G);H.push.apply(H,q);var M=((z||{}).config||{}).update;M?M(f):f&&w(A,"cu",[]).push(f);if(L){C("me0",y,U);try{Ta(L,c,F)}finally{C("me1",y,U)}}return 1}
a=ta(a)||[];var e=b.callback,f=b.config,g=b.timeout,l=b.ontimeout,n=b.onerror,F=void 0;"function"==typeof n&&(F=n);var G=null,K=!1;if(g&&!l||!g&&l)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";n=w(wa(c),"r",[]).sort();var H=w(wa(c),"L",[]).sort(),U=[].concat(n);0<g&&(G=r.setTimeout(function(){K=!0;l()},g));
var q=Oa(a,H);if(q.length){q=Oa(a,n);var u=w(A,"CP",[]),v=u.length;u[v]=function(y){function L(){var V=u[v+1];V&&V()}
function M(V){u[v]=null;d(q,y)&&va(function(){e&&e();V()})}
if(!y)return 0;C("ml1",q,U);0<v&&u[v-1]?u[v]=function(){M(L)}:M(L)};
if(q.length){var da="loaded_"+A.I++;z[da]=function(y){u[v](y);z[da]=null};
a=Fa(c,q,"gapi."+da,n);n.push.apply(n,q);C("ml0",q,U);b.sync||r.___gapisync?Qa(a):Ra(a)}else u[v](ra)}else d(q)&&e&&e()}
function Ua(a,b){if(A.hee&&0<A.hel)try{return a()}catch(c){b&&b(c),A.hel--,Va("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
z.load=function(a,b){return Ua(function(){return Va(a,b)})};function Xa(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ya(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Za(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Xa(a).match(/\S+/g)||[],c=0<=ha(c,b);return c}
function $a(a,b){if(a.classList)a.classList.add(b);else if(!Za(a,b)){var c=Xa(a);Ya(a,c+(0<c.length?" "+b:b))}}
function ab(a,b){a.classList?a.classList.remove(b):Za(a,b)&&Ya(a,ia(a.classList?a.classList:Xa(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function bb(a){var b=a.offsetWidth,c=a.offsetHeight,d=pa&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){a:{try{var e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break a}oa&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new p(e.right-e.left,e.bottom-e.top)}return new p(b,c)}
;var N=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{},O=["yt","config_"],P=h;O[0]in P||"undefined"==typeof P.execScript||P.execScript("var "+O[0]);for(var Q;O.length&&(Q=O.shift());)O.length||void 0===N?P[Q]&&P[Q]!==Object.prototype[Q]?P=P[Q]:P=P[Q]={}:P[Q]=N;function cb(a){var b=arguments;1<b.length?N[b[0]]=b[1]:1===b.length&&Object.assign(N,b[0])}
;function db(a,b,c,d){var e=eb,f=k("yt.logging.errors.log");f?f(e,a,b,c,d):(f=[],f="ERRORS"in N?N.ERRORS:f,f.push([e,a,b,c,d]),cb("ERRORS",f))}
;function fb(){return k("gapi.iframes.getContext")()}
function gb(){return k("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;function hb(a){try{a.register("msg-hovercard-subscription",ib,gb())}catch(b){}}
function ib(a){if(a){a=!!a.isSubscribed;var b=document.getElementById("yt-subscribe-card");a?ab(b,"subscribe"):$a(b,"subscribe");a?$a(b,"subscribed"):ab(b,"subscribed")}}
;function R(){var a=document.getElementById("yt-subscribe-card");b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=bb(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=bb(a);b.display=
c;b.position=e;b.visibility=d}a={width:a.width,height:a.height};fb().ready(a,null,void 0);a=gb();fb().addOnOpenerHandler(hb,null,a)}
var S=R;S=void 0===S?{}:S;"function"==fa(S)&&(S={callback:S});R=S;var jb;(jb=R.gapiHintOverride)||(jb="GAPI_HINT_OVERRIDE"in N?N.GAPI_HINT_OVERRIDE:void 0);
if(jb){var kb;var T=document.location.href;if(-1!=T.indexOf("?")){T=(T||"").split("#")[0];var lb=T.split("?",2),W=1<lb.length?lb[1]:lb[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var mb=W.split("&"),X={},nb=0,ob=mb.length;nb<ob;nb++){var Y=mb[nb].split("=");if(1==Y.length&&Y[0]||2==Y.length)try{var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),pb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==fa(X[Z])?ja(X[Z],pb):X[Z]=[X[Z],pb]:X[Z]=pb}catch(a){var eb=Error("Error decoding URL component");
eb.params="key: "+Y[0]+", value: "+Y[1];"q"==Y[0]?db("WARNING",void 0,void 0,void 0):db()}}kb=X}else kb={};var qb=kb.gapi_jsh;qb&&na(R,{_c:{jsl:{h:qb}}})}Va("gapi.iframes:gapi.iframes.style.common",R);}).call(this);
