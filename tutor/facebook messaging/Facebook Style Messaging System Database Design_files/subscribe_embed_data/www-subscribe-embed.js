(function(){var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ea;
if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=ea,ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},la="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function ma(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}}
function na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
ma("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=na(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
ma("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=na(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,h=Math.max(0,Math.min(c|0,d.length)),g=0;g<f&&h<e;)if(d[h++]!=b[g++])return!1;return g>=f}});
function oa(){oa=function(){};
la.Symbol||(la.Symbol=pa)}
function qa(a,b){this.f=a;ka(this,"description",{configurable:!0,writable:!0,value:b})}
qa.prototype.toString=function(){return this.f};
var pa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new qa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ra(){oa();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return sa(aa(this))}});
ra=function(){}}
function sa(a){ra();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a};
ma("Object.assign",function(a){return a||ua});
var va=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
ma("Reflect.construct",function(){return va});
ma("WeakMap",function(a){function b(k){this.f=(g+=Math.random()+1).toString();if(k){k=ba(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ta(k,h)){var l=new c;ka(k,h,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(p){if(p instanceof c)return p;e(p);return l(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),p=new a([[k,2],[l,3]]);if(2!=p.get(k)||3!=p.get(l))return!1;p["delete"](k);p.set(l,4);return!p.has(k)&&4==p.get(l)}catch(q){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var g=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ta(k,h))throw Error("WeakMap key fail: "+k);k[h][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&ta(k,h)?k[h][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&ta(k,h)&&ta(k[h],this.f)};
b.prototype["delete"]=function(k){return d(k)&&ta(k,h)&&ta(k[h],this.f)?delete k[h][this.f]:!1};
return b});
ma("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,k){var l=g.f;return sa(function(){if(l){for(;l.head!=g.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(g,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++h,f.set(k,l)):l="p_"+k;var p=g.g[l];if(p&&ta(g.g,l))for(var q=0;q<p.length;q++){var t=p[q];if(k!==k&&t.key!==t.key||k===t.key)return{id:l,list:p,index:q,C:t}}return{id:l,list:p,index:-1,C:void 0}}
function e(g){this.g={};this.f=b();this.size=0;if(g){g=ba(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),k=new a(ba([[g,"s"]]));if("s"!=k.get(g)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=g||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
ra();var f=new WeakMap;e.prototype.set=function(g,k){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this.g[l.id]=[]);l.C?l.C.value=k:(l.C={next:this.f,previous:this.f.previous,head:this.f,key:g,value:k},l.list.push(l.C),this.f.previous.next=l.C,this.f.previous=l.C,this.size++);return this};
e.prototype["delete"]=function(g){g=d(this,g);return g.C&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.g[g.id],g.C.previous.next=g.C.next,g.C.next.previous=g.C.previous,g.C.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).C};
e.prototype.get=function(g){return(g=d(this,g).C)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,g.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
ma("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
ra();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
ma("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==na(this,b,"includes").indexOf(b,c||0)}});
var n=this||self;function v(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function wa(){}
function ya(a){a.ca=void 0;a.w=function(){return a.ca?a.ca:a.ca=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ca(a){return"function"==za(a)}
function Da(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ea(a){return a[Fa]||(a[Fa]=++Ga)}
var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)}
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=Ha:w=Ia;return w.apply(null,arguments)}
function Ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var Ka=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function y(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function La(a){if(Error.captureStackTrace)Error.captureStackTrace(this,La);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(La,Error);La.prototype.name="CustomError";var Ma;var Na=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Oa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h="string"===typeof a?a.split(""):a,g=0;g<d;g++)if(g in h){var k=h[g];
b.call(c,k,g,a)&&(e[f++]=k)}return e},Pa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
z(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},Ra=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Sa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ta(a,b){return 0<=Na(a,b)}
function Ua(a){return Array.prototype.concat.apply([],arguments)}
function Va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Xa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Ya(a,b,c,d){return Array.prototype.splice.apply(a,Za(arguments,1))}
function Za(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function $a(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Aa(d))for(var e=0;e<d.length;e+=8192)for(var f=$a.apply(null,Za(d,e,e+8192)),h=0;h<f.length;h++)b.push(f[h]);else b.push(d)}return b}
;function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function bb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function cb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function db(a){var b=eb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function fb(a){for(var b in a)return!1;return!0}
function gb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function hb(a){var b=za(a);if("object"==b||"array"==b){if(Ca(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=hb(a[c]);return b}return a}
var ib="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ib.length;f++)c=ib[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function kb(a,b){this.f=a===lb&&b||"";this.g=mb}
kb.prototype.T=!0;kb.prototype.S=function(){return this.f};
var mb={},lb={},nb=new kb(lb,"");function ob(a,b){this.f=a===pb&&b||"";this.g=qb}
ob.prototype.T=!0;ob.prototype.S=function(){return this.f.toString()};
var qb={},pb={};var rb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function sb(a,b){for(var c=0,d=rb(String(a)).split("."),e=rb(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var g=d[h]||"",k=e[h]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;c=tb(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||tb(0==g[2].length,0==k[2].length)||tb(g[2],k[2]);g=g[3];k=k[3]}while(0==c)}return c}
function tb(a,b){return a<b?-1:a>b?1:0}
;function ub(a,b){this.f=a===vb&&b||"";this.g=wb}
ub.prototype.T=!0;ub.prototype.S=function(){return this.f.toString()};
var xb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,wb={},vb={};var yb;a:{var zb=n.navigator;if(zb){var Ab=zb.userAgent;if(Ab){yb=Ab;break a}}yb=""}function A(a){return-1!=yb.indexOf(a)}
;function Bb(){return A("Firefox")||A("FxiOS")}
function Cb(){return A("Safari")&&!(Db()||A("Coast")||A("Opera")||A("Edge")||A("Edg/")||A("OPR")||Bb()||A("Silk")||A("Android"))}
function Db(){return(A("Chrome")||A("CriOS"))&&!A("Edge")}
function Eb(){return A("Android")&&!(Db()||Bb()||A("Opera")||A("Silk"))}
;function Fb(){this.f="";this.g=Gb}
Fb.prototype.T=!0;Fb.prototype.S=function(){return this.f.toString()};
function Hb(a){return a instanceof Fb&&a.constructor===Fb&&a.g===Gb?a.f:"type_error:SafeHtml"}
var Gb={};function Ib(a){var b=new Fb;b.f=a;return b}
Ib("<!DOCTYPE html>");var Jb=Ib("");Ib("<br>");var Kb=ab(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Hb(Jb);return!b.parentElement});
function Lb(a,b){if(Kb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Hb(b)}
function Mb(a){var b=new ob(pb,nb instanceof kb&&nb.constructor===kb&&nb.g===mb?nb.f:"type_error:Const");a.src=(b instanceof ob&&b.constructor===ob&&b.g===qb?b.f:"type_error:TrustedResourceUrl").toString()}
;function Nb(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Ob(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;function Pb(){return A("iPhone")&&!A("iPod")&&!A("iPad")}
function Qb(){return Pb()||A("iPad")||A("iPod")}
;function Rb(a){Rb[" "](a);return a}
Rb[" "]=wa;function Sb(a,b){var c=Tb;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Ub=A("Opera"),B=A("Trident")||A("MSIE"),Vb=A("Edge"),Wb=Vb||B,Xb=A("Gecko")&&!(-1!=yb.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),Yb=-1!=yb.toLowerCase().indexOf("webkit")&&!A("Edge"),Zb=A("Macintosh"),$b=A("Windows"),ac=A("Android"),bc=Pb(),cc=A("iPad"),dc=A("iPod"),ec=Qb();function fc(){var a=n.document;return a?a.documentMode:void 0}
var gc;a:{var hc="",ic=function(){var a=yb;if(Xb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Vb)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Yb)return/WebKit\/(\S+)/.exec(a);if(Ub)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ic&&(hc=ic?ic[1]:"");if(B){var kc=fc();if(null!=kc&&kc>parseFloat(hc)){gc=String(kc);break a}}gc=hc}var lc=gc,Tb={};function mc(a){return Sb(a,function(){return 0<=sb(lc,a)})}
var nc;nc=n.document&&B?fc():void 0;var oc=Bb(),pc=Pb()||A("iPod"),qc=A("iPad"),rc=Eb(),sc=Db(),tc=Cb()&&!Qb();var uc={},vc=null;var C=window;function wc(a){this.f=a||{cookie:""}}
m=wc.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c,d,e,f){if("object"===typeof c){var h=c.g;f=c.secure;e=c.domain;d=c.path;c=c.f}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===c&&(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Ka()+1E3*c)).toUTCString();this.f.cookie=a+"="+b+e+d+c+f+(null!=h?";samesite="+h:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=rb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",0,b,c);return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=rb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var xc=new wc("undefined"==typeof document?null:document);var yc=!Xb&&!B||B&&9<=Number(nc)||Xb&&mc("1.9.1"),zc=B&&!mc("9");function D(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=D.prototype;m.clone=function(){return new D(this.x,this.y)};
m.equals=function(a){return a instanceof D&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Ac(a,b){return new D(a.x-b.x,a.y-b.y)}
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Bc(a,b){this.width=a;this.height=b}
m=Bc.prototype;m.clone=function(){return new Bc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Cc(a){return a?new Dc(Ec(a)):Ma||(Ma=new Dc)}
function E(a){return"string"===typeof a?document.getElementById(a):a}
function Fc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Gc(document,"*",a,b)}
function G(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Gc(c,"*",a,b)[0]||null}return c||null}
function Gc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&Ta(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a}
function Hc(a,b){bb(b,function(c,d){c&&"object"==typeof c&&c.T&&(c=c.S());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Ic.hasOwnProperty(d)?a.setAttribute(Ic[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Ic={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Jc(a){a=a.document;a=Kc(a)?a.documentElement:a.body;return new Bc(a.clientWidth,a.clientHeight)}
function Lc(a){var b=Mc(a);a=Nc(a);return B&&mc("10")&&a.pageYOffset!=b.scrollTop?new D(b.scrollLeft,b.scrollTop):new D(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Mc(a){return a.scrollingElement?a.scrollingElement:!Yb&&Kc(a)?a.documentElement:a.body||a.documentElement}
function Nc(a){return a.parentWindow||a.defaultView}
function Oc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Kc(a){return"CSS1Compat"==a.compatMode}
function Pc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Qc(a){return yc&&void 0!=a.children?a.children:Oa(a.childNodes,function(b){return 1==b.nodeType})}
function Rc(a){return Da(a)&&1==a.nodeType}
function Sc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Ec(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Tc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Ec(a).createTextNode(String(b)))}}
function Uc(a,b){var c=[];return Vc(a,b,c,!0)?c[0]:void 0}
function Vc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Vc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Wc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Xc={IMG:" ",BR:"\n"};function Zc(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!$c(a)||ad(a)):$c(a)&&ad(a))&&B){var c;!Ca(a.getBoundingClientRect)||B&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function $c(a){return B&&!mc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function ad(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function bd(a){if(zc&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];cd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");zc||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function cd(a,b,c){if(!(a.nodeName in Wc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Xc)b.push(Xc[a.nodeName]);else for(a=a.firstChild;a;)cd(a,b,c),a=a.nextSibling}
function dd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return ed(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&Ta(f.className.split(/\s+/),c))},!0,d)}
function H(a,b){return dd(a,null,b,void 0)}
function ed(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Dc(a){this.f=a||n.document||document}
Dc.prototype.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
Dc.prototype.createElement=function(a){return Oc(this.f,a)};
Dc.prototype.appendChild=function(a,b){a.appendChild(b)};
Dc.prototype.isElement=Rc;var fd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function gd(a){return a.match(fd)}
function hd(a){return a?decodeURI(a):a}
function id(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function jd(a,b,c){if(Aa(b))for(var d=0;d<b.length;d++)jd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function kd(a,b){for(var c=[],d=b||0;d<a.length;d+=2)jd(a[d],a[d+1],c);return c.join("&")}
function ld(a){var b=[],c;for(c in a)jd(c,a[c],b);return b.join("&")}
function md(a,b){var c=2==arguments.length?kd(arguments[1],0):kd(arguments,1);return id(a,c)}
function nd(a,b){var c=ld(b);return id(a,c)}
;function od(a){var b=pd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function qd(){var a=[];od(function(b){a.push(b)});
return a}
var pd={zb:"allow-forms",Ab:"allow-modals",Bb:"allow-orientation-lock",Cb:"allow-pointer-lock",Db:"allow-popups",Eb:"allow-popups-to-escape-sandbox",Fb:"allow-presentation",Gb:"allow-same-origin",Hb:"allow-scripts",Ib:"allow-top-navigation",Jb:"allow-top-navigation-by-user-activation"},rd=ab(function(){return qd()});
function sd(){var a=Oc(document,"IFRAME"),b={};z(rd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function td(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=td.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new td(this.top,this.right,this.bottom,this.left)};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function ud(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
ud.prototype.clone=function(){return new ud(this.left,this.top,this.width,this.height)};
ud.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
ud.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
ud.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function vd(a,b,c){if("string"===typeof b)(b=wd(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=wd(c,d);f&&(c.style[f]=e)}}
var xd={};function wd(a,b){var c=xd[b];if(!c){var d=Nb(b);c=d;void 0===a.style[d]&&(d=(Yb?"Webkit":Xb?"Moz":B?"ms":Ub?"O":null)+Ob(d),void 0!==a.style[d]&&(c=d));xd[b]=c}return c}
function yd(a,b){var c=Ec(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function zd(a,b){return yd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Ad(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Bd(a){if(B&&!(8<=Number(nc)))return a.offsetParent;var b=Ec(a),c=zd(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=zd(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Cd(a){for(var b=new td(0,Infinity,Infinity,0),c=Cc(a),d=c.f.body,e=c.f.documentElement,f=Mc(c.f);a=Bd(a);)if(!(B&&0==a.clientWidth||Yb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=zd(a,"overflow")){var h=Dd(a),g=new D(a.clientLeft,a.clientTop);h.x+=g.x;h.y+=g.y;b.top=Math.max(b.top,h.y);b.right=Math.min(b.right,h.x+a.clientWidth);b.bottom=Math.min(b.bottom,h.y+a.clientHeight);b.left=Math.max(b.left,h.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Jc(Nc(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Dd(a){var b=Ec(a),c=new D(0,0);var d=b?Ec(b):document;d=!B||9<=Number(nc)||Kc(Cc(d).f)?d.documentElement:d.body;if(a==d)return c;a=Ad(a);b=Lc(Cc(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Ed(a){a=Ad(a);return new D(a.left,a.top)}
function Fd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Gd(a){var b=Hd;if("none"!=zd(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Hd(a){var b=a.offsetWidth,c=a.offsetHeight,d=Yb&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Ad(a),new Bc(a.right-a.left,a.bottom-a.top)):new Bc(b,c)}
function Id(a){var b=Dd(a);a=Gd(a);return new ud(b.x,b.y,a.width,a.height)}
function Jd(a){return"rtl"==zd(a,"direction")}
function Kd(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Ld(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Kd(a,c):0}
var Md={thin:2,medium:4,thick:6};function Nd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Md?Md[c]:Kd(a,c)}
;var Od=(new Date).getTime();function Pd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Qd=window,Rd=document,Sd=Qd.location;function Td(){}
var Ud=/\[native code\]/;function I(a,b,c){return a[b]=a[b]||c}
function Vd(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Wd(){var a;if((a=Object.create)&&Ud.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Xd=I(Qd,"gapi",{});var J;J=I(Qd,"___jsl",Wd());I(J,"I",0);I(J,"hel",10);function Yd(){var a=Sd.href;if(J.dpo)var b=J.h;else{b=J.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Zd(a){var b=I(J,"PQ",[]);J.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function $d(a){return I(I(J,"H",Wd()),a,Wd())}
;function ae(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(q){for(var t=h,r=0;64>r;r+=4)t[r/4]=q[r]<<24|q[r+1]<<16|q[r+2]<<8|q[r+3];for(r=16;80>r;r++)q=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(q<<1|q>>>31)&4294967295;q=e[0];var u=e[1],Q=e[2],F=e[3],Wa=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var da=F^u&(Q^F);var xa=1518500249}else da=u^Q^F,xa=1859775393;else 60>r?(da=u&Q|F&(u|Q),xa=2400959708):(da=u^Q^F,xa=3395469782);da=((q<<5|q>>>27)&4294967295)+da+Wa+xa+t[r]&4294967295;Wa=F;F=Q;Q=(u<<30|u>>>2)&4294967295;u=q;q=da}e[0]=e[0]+q&4294967295;e[1]=e[1]+
u&4294967295;e[2]=e[2]+Q&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Wa&4294967295}
function c(q,t){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var r=[],u=0,Q=q.length;u<Q;++u)r.push(q.charCodeAt(u));q=r}t||(t=q.length);r=0;if(0==l)for(;r+64<t;)b(q.slice(r,r+64)),r+=64,p+=64;for(;r<t;)if(f[l++]=q[r++],p++,64==l)for(l=0,b(f);r+64<t;)b(q.slice(r,r+64)),r+=64,p+=64}
function d(){var q=[],t=8*p;56>l?c(g,56-l):c(g,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var u=24;0<=u;u-=8)q[t++]=e[r]>>u&255;return q}
for(var e=[],f=[],h=[],g=[128],k=1;64>k;++k)g[k]=0;var l,p;a();return{reset:a,update:c,digest:d,Ta:function(){for(var q=d(),t="",r=0;r<q.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(q[r]/16))+"0123456789ABCDEF".charAt(q[r]%16);return t}}}
;function be(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],z(d,function(g){e.push(g)}),ce(e.join(" "));
var f=[],h=[];z(c,function(g){h.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];z(d,function(g){e.push(g)});
a=ce(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function ce(a){var b=ae();b.update(a);return b.Ta().toLowerCase()}
;function de(a){var b=Pd(String(n.location.href));var c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID;if(!c){var d=new wc(document);(c=d.get(b?"SAPISID":"APISID"))||(c=d.get("__Secure-3PAPISID"))}b=c;if(!b)return null;c=Pd(String(n.location.href));c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")?"SAPISIDHASH":"APISIDHASH";return(d=String(n.location.href))&&b&&c?[c,be(Pd(d),b,a||null)].join(" "):null}
;var ee=I(J,"perf",Wd());I(ee,"g",Wd());var fe=I(ee,"i",Wd());I(ee,"r",[]);Wd();Wd();function ge(a,b,c){b&&0<b.length&&(b=he(b),c&&0<c.length&&(b+="___"+he(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=I(fe,"_p",Wd()),I(b,c,Wd())[a]=(new Date).getTime(),b=ee.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function he(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var ie=Wd(),je=[];function ke(a){throw Error("Bad hint"+(a?": "+a:""));}
je.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?J[b]=I(J,b,[]).concat(c):I(J,b,c)}if(b=a.u)a=I(J,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var le=/^(\/[a-zA-Z0-9_\-]+)+$/,me=[/\/amp\//,/\/amp$/,/^\/amp$/],ne=/^[a-zA-Z0-9\-_\.,!]+$/,oe=/^gapi\.loaded_[0-9]+$/,pe=/^[a-zA-Z0-9,._-]+$/;function qe(a,b,c,d){var e=a.split(";"),f=e.shift(),h=ie[f],g=null;h?g=h(e,b,c,d):ke("no hint processor for: "+f);g||ke("failed to generate load url");b=g;c=b.match(re);(d=b.match(se))&&1===d.length&&te.test(b)&&c&&1===c.length||ke("failed sanity: "+a);return g}
function ue(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=ve(a);oe.test(c)||ke("invalid_callback");b=we(b);d=d&&d.length?we(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ga?"/am="+e(a.ga):"",a.Da?"/rs="+e(a.Da):"",a.Na?"/t="+e(a.Na):"","/cb=",e(c)].join("")}
function ve(a){"/"!==a.charAt(0)&&ke("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))ke("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),h=decodeURIComponent(f[0]),g=decodeURIComponent(f[1]);2==f.length&&h&&g&&(a[h]=a[h]||g)}b="/"+c.join("/");le.test(b)||ke("invalid_prefix");c=0;for(d=me.length;c<d;++c)me[c].test(b)&&ke("invalid_prefix");c=xe(a,
"k",!0);d=xe(a,"am");e=xe(a,"rs");a=xe(a,"t");return{pathPrefix:b,version:c,ga:d,Da:e,Na:a}}
function we(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");pe.test(e)&&b.push(e)}return b.join(",")}
function xe(a,b,c){a=a[b];!a&&c&&ke("missing: "+b);if(a){if(ne.test(a))return a;ke("invalid: "+b)}return null}
var te=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,se=/\/cb=/g,re=/\/\//g;function ye(){var a=Yd();if(!a)throw Error("Bad hint");return a}
ie.m=function(a,b,c,d){(a=a[0])||ke("missing_hint");return"https://apis.google.com"+ue(a,b,c,d)};
var ze=decodeURI("%73cript"),Ae=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Be(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function Ce(){var a=J.nonce;return void 0!==a?a&&a===String(a)&&a.match(Ae)?a:J.nonce=null:Rd.querySelector?(a=Rd.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(Ae)?J.nonce=a:J.nonce=null):null:null}
function De(a){if("loading"!=Rd.readyState)Ee(a);else{var b=Ce(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+ze+' src="'+encodeURI(a)+'"'+c+"></"+ze+">";Rd.write(a)}}
function Ee(a){var b=Rd.createElement(ze);b.setAttribute("src",a);a=Ce();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Rd.getElementsByTagName(ze)[0])?a.parentNode.insertBefore(b,a):(Rd.head||Rd.body||Rd.documentElement).appendChild(b)}
function Fe(a,b){var c=b&&b._c;if(c)for(var d=0;d<je.length;d++){var e=je[d][0],f=je[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function Ge(a,b,c){He(function(){var d=b===Yd()?I(Xd,"_",Wd()):Wd();d=I($d(b),"_",d);a(d)},c)}
function Ie(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Fe(a,c);var d=a?a.split(":"):[],e=c.h||ye(),f=I(J,"ah",Wd());if(f["::"]&&d.length){for(var h=[],g=null;g=d.shift();){var k=g.split(".");k=f[g]||f[k[1]&&"ns:"+k[0]||""]||e;var l=h.length&&h[h.length-1]||null,p=l;l&&l.hint==k||(p={hint:k,features:[]},h.push(p));p.features.push(g)}var q=h.length;if(1<q){var t=c.callback;t&&(c.callback=function(){0==--q&&t()})}for(;d=h.shift();)Je(d.features,c,d.hint)}else Je(d||[],c,e)}
function Je(a,b,c){function d(da,xa){if(q)return 0;Qd.clearTimeout(p);t.push.apply(t,u);var jc=((Xd||{}).config||{}).update;jc?jc(f):f&&I(J,"cu",[]).push(f);if(xa){ge("me0",da,r);try{Ge(xa,c,l)}finally{ge("me1",da,r)}}return 1}
a=Vd(a)||[];var e=b.callback,f=b.config,h=b.timeout,g=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var p=null,q=!1;if(h&&!g||!h&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=I($d(c),"r",[]).sort();var t=I($d(c),"L",[]).sort(),r=[].concat(k);0<h&&(p=Qd.setTimeout(function(){q=!0;g()},h));
var u=Be(a,t);if(u.length){u=Be(a,k);var Q=I(J,"CP",[]),F=Q.length;Q[F]=function(da){function xa(){var Yc=Q[F+1];Yc&&Yc()}
function jc(Yc){Q[F]=null;d(u,da)&&Zd(function(){e&&e();Yc()})}
if(!da)return 0;ge("ml1",u,r);0<F&&Q[F-1]?Q[F]=function(){jc(xa)}:jc(xa)};
if(u.length){var Wa="loaded_"+J.I++;Xd[Wa]=function(da){Q[F](da);Xd[Wa]=null};
a=qe(c,u,"gapi."+Wa,k);k.push.apply(k,u);ge("ml0",u,r);b.sync||Qd.___gapisync?De(a):Ee(a)}else Q[F](Td)}else d(u)&&e&&e()}
function He(a,b){if(J.hee&&0<J.hel)try{return a()}catch(c){b&&b(c),J.hel--,Ie("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Xd.load=function(a,b){return He(function(){return Ie(a,b)})};function Ke(a,b){this.i=a;this.l=b;this.g=0;this.f=null}
Ke.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function Le(a,b){a.l(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Me(a){n.setTimeout(function(){throw a;},0)}
var Ne;
function Oe(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var e=Oc(document,"IFRAME");e.style.display="none";Mb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Hb(Jb));e.close();var h="callImmediate"+Math.random(),g="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=w(function(k){if(("*"==g||k.origin==g)&&k.data==h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,g)}}});
if("undefined"!==typeof a&&!A("Trident")&&!A("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ia;c.ia=null;e()}};
return function(e){d.next={ia:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in Oc(document,"SCRIPT")?function(e){var f=Oc(document,"SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){n.setTimeout(e,0)}}
;function Pe(){this.g=this.f=null}
var Re=new Ke(function(){return new Qe},function(a){a.reset()});
Pe.prototype.add=function(a,b){var c=Re.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Pe.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Qe(){this.next=this.scope=this.f=null}
Qe.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Qe.prototype.reset=function(){this.next=this.scope=this.f=null};function Se(a,b){Te||Ue();Ve||(Te(),Ve=!0);We.add(a,b)}
var Te;function Ue(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);Te=function(){a.then(Xe)}}else Te=function(){var b=Xe;
!Ca(n.setImmediate)||n.Window&&n.Window.prototype&&!A("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(Ne||(Ne=Oe()),Ne(b)):n.setImmediate(b)}}
var Ve=!1,We=new Pe;function Xe(){for(var a;a=We.remove();){try{a.f.call(a.scope)}catch(b){Me(b)}Le(Re,a)}Ve=!1}
;function Ye(){this.g=-1}
;function Ze(){this.g=64;this.f=[];this.v=[];this.B=[];this.l=[];this.l[0]=128;for(var a=1;a<this.g;++a)this.l[a]=0;this.o=this.i=0;this.reset()}
y(Ze,Ye);Ze.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.o=this.i=0};
function $e(a,b,c){c||(c=0);var d=a.B;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var h=a.f[2],g=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=g^c&(h^g);var l=1518500249}else f=c^h^g,l=1859775393;else 60>e?(f=c&h|g&(c|h),l=2400959708):
(f=c^h^g,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=g;g=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+h&4294967295;a.f[3]=a.f[3]+g&4294967295;a.f[4]=a.f[4]+k&4294967295}
Ze.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)$e(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){$e(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){$e(this,e);f=0;break}}this.i=f;this.o+=b}};
Ze.prototype.digest=function(){var a=[],b=8*this.o;56>this.i?this.update(this.l,56-this.i):this.update(this.l,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.v[c]=b&255,b/=256;$e(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function af(){this.i=this.i;this.l=this.l}
af.prototype.i=!1;af.prototype.X=function(){return this.i};
af.prototype.dispose=function(){this.i||(this.i=!0,this.ba())};
af.prototype.ba=function(){if(this.l)for(;this.l.length;)this.l.shift()()};
function bf(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function cf(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function df(a){return a.classList?a.classList:cf(a).match(/\S+/g)||[]}
function ef(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function K(a,b){return a.classList?a.classList.contains(b):Ta(df(a),b)}
function L(a,b){if(a.classList)a.classList.add(b);else if(!K(a,b)){var c=cf(a);ef(a,c+(0<c.length?" "+b:b))}}
function ff(a,b){if(a.classList)z(b,function(f){L(a,f)});
else{var c={};z(df(a),function(f){c[f]=!0});
z(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;ef(a,d)}}
function M(a,b){a.classList?a.classList.remove(b):K(a,b)&&ef(a,Oa(df(a),function(c){return c!=b}).join(" "))}
function gf(a,b){a.classList?z(b,function(c){M(a,c)}):ef(a,Oa(df(a),function(c){return!Ta(b,c)}).join(" "))}
function hf(a,b,c){c?L(a,b):M(a,b)}
function jf(a,b,c){K(a,b)&&(M(a,b),L(a,c))}
function kf(a,b){var c=!K(a,b);hf(a,b,c)}
;var lf=!B&&!Cb();function mf(a,b){if(/-[a-z]/.test(b))return null;if(lf&&a.dataset){if(Eb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var nf="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function of(){}
of.prototype.next=function(){throw nf;};
of.prototype.L=function(){return this};
function pf(a){if(a instanceof of)return a;if("function"==typeof a.L)return a.L(!1);if(Ba(a)){var b=0,c=new of;c.next=function(){for(;;){if(b>=a.length)throw nf;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function qf(a,b){if(Ba(a))try{z(a,b,void 0)}catch(c){if(c!==nf)throw c;}else{a=pf(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==nf)throw c;}}}
function rf(a){if(Ba(a))return Va(a);a=pf(a);var b=[];qf(a,function(c){b.push(c)});
return b}
;function sf(a,b){this.i={};this.f=[];this.M=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof sf)for(c=tf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function tf(a){uf(a);return a.f.concat()}
m=sf.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||vf;uf(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function vf(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.i={};this.M=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.g--,this.M++,this.f.length>2*this.g&&uf(this),!0):!1};
function uf(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.g++,this.f.push(a),this.M++);this.i[a]=b};
m.forEach=function(a,b){for(var c=tf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new sf(this)};
m.L=function(a){uf(this);var b=0,c=this.M,d=this,e=new of;e.next=function(){if(c!=d.M)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw nf;var f=d.f[b++];return a?f:d.i[f]};
return e};function wf(a){var b=[];xf(new yf,a,b);return b.join("")}
function yf(){}
function xf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),xf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),zf(d,c),c.push(":"),xf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":zf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Af={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Bf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function zf(a,b){b.push('"',a.replace(Bf,function(c){var d=Af[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Af[c]=d);return d}),'"')}
;var Cf=function(){if($b){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(yb))?a[1]:"0"}return Zb?(a=/10[_.][0-9_.]+/,(a=a.exec(yb))?a[0].replace(/_/g,"."):"10"):ac?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(yb))?a[1]:""):bc||cc||dc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(yb))?a[1].replace(/_/g,"."):""):""}();function Df(a){return(a=a.exec(yb))?a[1]:""}
var Ef=function(){if(oc)return Df(/Firefox\/([0-9.]+)/);if(B||Vb||Ub)return lc;if(sc)return Qb()?Df(/CriOS\/([0-9.]+)/):Df(/Chrome\/([0-9.]+)/);if(tc&&!Qb())return Df(/Version\/([0-9.]+)/);if(pc||qc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(yb);if(a)return a[1]+"."+a[2]}else if(rc)return(a=Df(/Android\s+([0-9.]+)/))?a:Df(/Version\/([0-9.]+)/);return""}();function Ff(a,b,c,d,e,f,h){var g;if(g=c.offsetParent){var k="HTML"==g.tagName||"BODY"==g.tagName;if(!k||"static"!=zd(g,"position")){var l=Dd(g);if(!k){k=Jd(g);var p;if(p=k){if(p=tc)p=0<=sb(Ef,10);var q;if(q=ec)q=0<=sb(Cf,10);p=Xb||p||q}k=p?-g.scrollLeft:!k||Wb&&mc("8")||"visible"==zd(g,"overflowX")?g.scrollLeft:g.scrollWidth-g.clientWidth-g.scrollLeft;l=Ac(l,new D(k,g.scrollTop))}}}g=l||new D;l=Id(a);if(k=Cd(a)){var t=new ud(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(l.left,t.left);p=
Math.min(l.left+l.width,t.left+t.width);k<=p&&(q=Math.max(l.top,t.top),t=Math.min(l.top+l.height,t.top+t.height),q<=t&&(l.left=k,l.top=q,l.width=p-k,l.height=t-q))}k=Cc(a);q=Cc(c);if(k.f!=q.f){p=k.f.body;q=Nc(q.f);t=new D(0,0);var r=(r=Ec(p))?Nc(r):window;b:{try{Rb(r.parent);var u=!0;break b}catch(Wa){}u=!1}if(u){u=p;do{var Q=r==q?Dd(u):Ed(u);t.x+=Q.x;t.y+=Q.y}while(r&&r!=q&&r!=r.parent&&(u=r.frameElement)&&(r=r.parent))}u=Ac(t,Dd(p));!B||9<=Number(nc)||Kc(k.f)||(u=Ac(u,Lc(k.f)));l.left+=u.x;l.top+=
u.y}a=Gf(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new D(b,l.top+(a&1?l.height:0));b=Ac(b,g);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var F;h&&(F=Cd(c))&&(F.top-=g.y,F.right-=g.x,F.bottom-=g.y,F.left-=g.x);return Hf(b,c,d,f,F,h,void 0)}
function Hf(a,b,c,d,e,f,h){a=a.clone();var g=Gf(b,c);c=Gd(b);h=h?h.clone():c.clone();a=a.clone();h=h.clone();var k=0;if(d||0!=g)g&4?a.x-=h.width+(d?d.right:0):g&2?a.x-=h.width/2:d&&(a.x+=d.left),g&1?a.y-=h.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;g=h;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+g.width>e.right&&(g.width=Math.min(e.right-d.x,
l+g.width-e.left),g.width=Math.max(g.width,0),k|=4)}d.x+g.width>e.right&&f&1&&(d.x=Math.max(e.right-g.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+g.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+g.height>e.bottom&&(g.height=Math.min(e.bottom-d.y,l+g.height-e.top),g.height=Math.max(g.height,0),k|=8));d.y+g.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-g.height,e.top),k|=2);f&8&&(k|=(d.y<e.top?64:0)|(d.y+g.height>e.bottom?128:0));e=k}else e=
256;k=e}f=new ud(0,0,0,0);f.left=a.x;f.top=a.y;f.width=h.width;f.height=h.height;e=k;if(e&496)return e;a=new D(f.left,f.top);a instanceof D?(h=a.x,a=a.y):(h=a,a=void 0);b.style.left=Fd(h,!1);b.style.top=Fd(a,!1);h=new Bc(f.width,f.height);c==h||c&&h&&c.width==h.width&&c.height==h.height||(c=h,a=Kc(Cc(Ec(b)).f),!B||mc("10")||a&&mc("8")?(b=b.style,Xb?b.MozBoxSizing="border-box":Yb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(h=b.style,a?(B?(a=Ld(b,"paddingLeft"),f=Ld(b,"paddingRight"),d=Ld(b,"paddingTop"),g=Ld(b,"paddingBottom"),a=new td(d,f,g,a)):(a=yd(b,"paddingLeft"),f=yd(b,"paddingRight"),d=yd(b,"paddingTop"),g=yd(b,"paddingBottom"),a=new td(parseFloat(d),parseFloat(f),parseFloat(g),parseFloat(a))),!B||9<=Number(nc)?(f=yd(b,"borderLeftWidth"),d=yd(b,"borderRightWidth"),g=yd(b,"borderTopWidth"),b=yd(b,"borderBottomWidth"),b=new td(parseFloat(g),parseFloat(d),parseFloat(b),parseFloat(f))):(f=Nd(b,"borderLeft"),
d=Nd(b,"borderRight"),g=Nd(b,"borderTop"),b=Nd(b,"borderBottom"),b=new td(g,d,b,f)),h.pixelWidth=c.width-b.left-a.left-a.right-b.right,h.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(h.pixelWidth=c.width,h.pixelHeight=c.height)));return e}
function Gf(a,b){return(b&8&&Jd(a)?b^4:b)&-9}
;function If(a){this.f=0;this.B=void 0;this.l=this.g=this.i=null;this.o=this.v=!1;if(a!=wa)try{var b=this;a.call(void 0,function(c){Jf(b,2,c)},function(c){Jf(b,3,c)})}catch(c){Jf(this,3,c)}}
function Kf(){this.next=this.context=this.onRejected=this.g=this.f=null;this.i=!1}
Kf.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.i=!1};
var Lf=new Ke(function(){return new Kf},function(a){a.reset()});
function Mf(a,b,c){var d=Lf.get();d.g=a;d.onRejected=b;d.context=c;return d}
If.prototype.then=function(a,b,c){return Nf(this,Ca(a)?a:null,Ca(b)?b:null,c)};
If.prototype.$goog_Thenable=!0;If.prototype.cancel=function(a){if(0==this.f){var b=new Of(a);Se(function(){Pf(this,b)},this)}};
function Pf(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,h=c.g;h&&(h.i||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?Pf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Qf(c),Rf(c,e,3,b)))}a.i=null}else Jf(a,3,b)}
function Sf(a,b){a.g||2!=a.f&&3!=a.f||Tf(a);a.l?a.l.next=b:a.g=b;a.l=b}
function Nf(a,b,c,d){var e=Mf(null,null,null);e.f=new If(function(f,h){e.g=b?function(g){try{var k=b.call(d,g);f(k)}catch(l){h(l)}}:f;
e.onRejected=c?function(g){try{var k=c.call(d,g);void 0===k&&g instanceof Of?h(g):f(k)}catch(l){h(l)}}:h});
e.f.i=a;Sf(a,e);return e.f}
If.prototype.K=function(a){this.f=0;Jf(this,2,a)};
If.prototype.V=function(a){this.f=0;Jf(this,3,a)};
function Jf(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.K,f=a.V;if(d instanceof If){Sf(d,Mf(e||wa,f||null,a));var h=!0}else{if(d)try{var g=!!d.$goog_Thenable}catch(l){g=!1}else g=!1;if(g)d.then(e,f,a),h=!0;else{if(Da(d))try{var k=d.then;if(Ca(k)){Uf(d,k,e,f,a);h=!0;break a}}catch(l){f.call(a,l);h=!0;break a}h=!1}}}h||(a.B=c,a.f=b,a.i=null,Tf(a),3!=b||c instanceof Of||Vf(a,c))}}
function Uf(a,b,c,d,e){function f(k){g||(g=!0,d.call(e,k))}
function h(k){g||(g=!0,c.call(e,k))}
var g=!1;try{b.call(a,h,f)}catch(k){f(k)}}
function Tf(a){a.v||(a.v=!0,Se(a.F,a))}
function Qf(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.l=null);return b}
If.prototype.F=function(){for(var a;a=Qf(this);)Rf(this,a,this.f,this.B);this.v=!1};
function Rf(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.o;a=a.i)a.o=!1;if(b.f)b.f.i=null,Wf(b,c,d);else try{b.i?b.g.call(b.context):Wf(b,c,d)}catch(e){Xf.call(null,e)}Le(Lf,b)}
function Wf(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Vf(a,b){a.o=!0;Se(function(){a.o&&Xf.call(null,b)})}
var Xf=Me;function Of(a){La.call(this,a)}
y(Of,La);Of.prototype.name="cancel";function N(a){af.call(this);this.B=1;this.o=[];this.v=0;this.f=[];this.g={};this.F=!!a}
y(N,af);m=N.prototype;m.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.B;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.B=e+3;d.push(e);return e};
function Yf(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.R(d),b.apply(void 0,arguments))},a)}
function Zf(a,b,c){if(b=a.g[b]){var d=a.f;(b=Sa(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.R(b)}}
m.R=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.v)this.o.push(a),this.f[a+1]=wa;else{if(c){var d=Na(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
m.J=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var h=c[e];$f(this.f[h+1],this.f[h+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.v--,0<this.o.length&&0==this.v)for(;c=this.o.pop();)this.R(c)}}return 0!=e}return!1};
function $f(a,b,c){Se(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.g[a];b&&(z(b,this.R,this),delete this.g[a])}else this.f.length=0,this.g={}};
function ag(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=ag(a,d);return c}
m.ba=function(){N.A.ba.call(this);this.clear();this.o.length=0};function bg(a){this.f=a}
bg.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,wf(b))};
bg.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bg.prototype.remove=function(a){this.f.remove(a)};function cg(a){this.f=a}
y(cg,bg);function dg(a){this.data=a}
function eg(a){return void 0===a||a instanceof dg?a:new dg(a)}
cg.prototype.set=function(a,b){cg.A.set.call(this,a,eg(b))};
cg.prototype.g=function(a){a=cg.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cg.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function fg(a){this.f=a}
y(fg,cg);fg.prototype.set=function(a,b,c){if(b=eg(b)){if(c){if(c<Ka()){fg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ka()}fg.A.set.call(this,a,b)};
fg.prototype.g=function(a){var b=fg.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ka()||c&&c>Ka())fg.prototype.remove.call(this,a);else return b}};function gg(){}
;function hg(){}
y(hg,gg);hg.prototype.clear=function(){var a=rf(this.L(!0)),b=this;z(a,function(c){b.remove(c)})};function ig(a){this.f=a}
y(ig,hg);m=ig.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.L=function(a){var b=0,c=this.f,d=new of;d.next=function(){if(b>=c.length)throw nf;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function jg(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
y(jg,ig);function kg(a,b){this.g=a;this.f=null;if(B&&!(9<=Number(nc))){lg||(lg=new sf);this.f=lg.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),lg.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
y(kg,hg);var mg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},lg=null;function ng(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return mg[b]})}
m=kg.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(ng(a),b);og(this)};
m.get=function(a){a=this.f.getAttribute(ng(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(ng(a));og(this)};
m.L=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new of;d.next=function(){if(b>=c.length)throw nf;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);og(this)};
function og(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function pg(a,b){this.g=a;this.f=b+"::"}
y(pg,hg);pg.prototype.set=function(a,b){this.g.set(this.f+a,b)};
pg.prototype.get=function(a){return this.g.get(this.f+a)};
pg.prototype.remove=function(a){this.g.remove(this.f+a)};
pg.prototype.L=function(a){var b=this.g.L(!0),c=this,d=new of;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function qg(){this.g=[];this.f=-1}
qg.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
qg.prototype.get=function(a){return!!this.g[a]};
function rg(a){-1==a.f&&(a.f=Qa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;var sg=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",sg);function tg(a){var b=arguments;1<b.length?sg[b[0]]=b[1]:1===b.length&&Object.assign(sg,b[0])}
function O(a,b){return a in sg?sg[a]:b}
function ug(a){return O(a,void 0)}
;function vg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){wg(b)}}:a}
function wg(a,b,c,d,e){var f=v("yt.logging.errors.log");f?f(a,b,c,d,e):(f=O("ERRORS",[]),f.push([a,b,c,d,e]),tg("ERRORS",f))}
;function P(a,b){Ca(a)&&(a=vg(a));return window.setTimeout(a,b)}
function xg(a){window.clearTimeout(a)}
;var yg=v("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.R;N.prototype.publish=N.prototype.J;N.prototype.clear=N.prototype.clear;x("ytPubsubPubsubInstance",yg);var zg=v("ytPubsubPubsubSubscribedKeys")||{};x("ytPubsubPubsubSubscribedKeys",zg);var Ag=v("ytPubsubPubsubTopicToKeys")||{};x("ytPubsubPubsubTopicToKeys",Ag);var Bg=v("ytPubsubPubsubIsSynchronous")||{};x("ytPubsubPubsubIsSynchronous",Bg);
function Cg(a,b,c){var d=Dg();if(d){var e=d.subscribe(a,function(){var f=arguments;var h=function(){zg[e]&&b.apply(c||window,f)};
try{Bg[a]?h():P(h,0)}catch(g){wg(g)}},c);
zg[e]=!0;Ag[a]||(Ag[a]=[]);Ag[a].push(e);return e}return 0}
function Eg(a){var b=Dg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),z(a,function(c){b.unsubscribeByKey(c);delete zg[c]}))}
function R(a,b){var c=Dg();return c?c.publish.apply(c,arguments):!1}
function Fg(a,b){Bg[a]=!0;var c=Dg();c&&c.publish.apply(c,arguments);Bg[a]=!1}
function Dg(){return v("ytPubsubPubsubInstance")}
;function Gg(a,b,c){a&&(a.dataset?a.dataset[Hg(b)]=String(c):a.setAttribute("data-"+b,c))}
function Ig(a,b){return a?a.dataset?a.dataset[Hg(b)]:a.getAttribute("data-"+b):null}
function Jg(a,b){a&&(a.dataset?delete a.dataset[Hg(b)]:a.removeAttribute("data-"+b))}
var Kg={};function Hg(a){return Kg[a]||(Kg[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function S(a,b){this.version=a;this.args=b}
;function T(a,b){this.topic=a;this.f=b}
T.prototype.toString=function(){return this.topic};function Lg(){}
function Mg(){}
Lg.prototype=ca(Mg.prototype);Lg.prototype.constructor=Lg;if(ja)ja(Lg,Mg);else for(var Ng in Mg)if("prototype"!=Ng)if(Object.defineProperties){var Og=Object.getOwnPropertyDescriptor(Mg,Ng);Og&&Object.defineProperty(Lg,Ng,Og)}else Lg[Ng]=Mg[Ng];Lg.A=Mg.prototype;function Pg(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():P(a,c||0)}
Lg.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
ya(Lg);Lg.w();var Qg=v("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.R;N.prototype.publish=N.prototype.J;N.prototype.clear=N.prototype.clear;x("ytPubsub2Pubsub2Instance",Qg);var Rg=v("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",Rg);var Sg=v("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",Sg);var Tg=v("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",Tg);
x("ytPubsub2Pubsub2SkipSubKey",null);function U(a,b){var c=Ug();c&&c.publish.call(c,a.toString(),a,b)}
function Vg(a,b,c){var d=Ug();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,h){var g=v("ytPubsub2Pubsub2SkipSubKey");g&&g==e||(g=function(){if(Rg[e])try{if(h&&a instanceof T&&a!=f)try{var k=a.f,l=h;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.M){var p=new k;k.M=p.version}var q=k.M}catch(t){}if(!q||l.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{h=Reflect.construct(k,Va(l.args))}catch(t){throw t.message=
"yt.pubsub2.Data.deserialize(): "+t.message,t;}}catch(t){throw t.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+t.message,t;}b.call(c||window,h)}catch(t){wg(t)}},Tg[a.toString()]?v("yt.scheduler.instance")?Pg(g,1,void 0):P(g,0):g())});
Rg[e]=!0;Sg[a.toString()]||(Sg[a.toString()]=[]);Sg[a.toString()].push(e);return e}
function Wg(a){var b=Ug();b&&("number"===typeof a&&(a=[a]),z(a,function(c){b.unsubscribeByKey(c);delete Rg[c]}))}
function Ug(){return v("ytPubsub2Pubsub2Instance")}
;var Xg=0;function Yg(a){var b=a.__yt_uid_key;b||(b=Zg(),a.__yt_uid_key=b);return b}
function $g(a,b){a=E(a);b=E(b);return!!ed(a,function(c){return c===b},!0,void 0)}
function ah(a,b){var c=Gc(document,a,null,b);return c.length?c[0]:null}
function bh(){var a=document,b;Ra(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function ch(){hf(document.body,"hide-players",!1);z(Fc("preserve-players"),function(a){M(a,"preserve-players")})}
var Zg=v("ytDomDomGetNextId")||function(){return++Xg};
x("ytDomDomGetNextId",Zg);var dh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function eh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{a=a||window.event;if(!a)return;this.event=a}catch(c){return}for(var b in a)b in dh||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==
this.type?b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}
eh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
eh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
eh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var eb=v("ytEventsEventsListeners")||{};x("ytEventsEventsListeners",eb);var fh=v("ytEventsEventsCounter")||{count:0};x("ytEventsEventsCounter",fh);
function gh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return db(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h=Da(e[4])&&Da(d)&&gb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})}
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=gh(a,b,c,d);if(e)return e;e=++fh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(g){g=new eh(g);if(!ed(g.relatedTarget,function(k){return k==a},!0))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new eh(g);
g.currentTarget=a;return c.call(a,g)};
h=vg(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),hh()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);eb[e]=[a,b,c,h,d];return e}
function ih(a,b,c){var d=a||document;return V(d,"click",function(e){var f=ed(e.target,function(h){return h===d||c(h)},!0);
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function jh(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var hh=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function kh(a,b,c){return ih(a,b,function(d){return K(d,c)})}
function lh(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function W(a){a&&("string"==typeof a&&(a=[a]),z(a,function(b){if(b in eb){var c=eb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?hh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete eb[b]}}))}
;var mh={},nh="ontouchstart"in document;function oh(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return ed(c,function(e){return K(e,b)},!0,d)}
function ph(a){var b="mouseover"==a.type&&"mouseenter"in mh||"mouseout"==a.type&&"mouseleave"in mh,c=a.type in mh||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=mh[b];for(var d in c.g){var e=oh(b,d,a.target);e&&!ed(a.relatedTarget,function(f){return f==e},!0)&&c.J(d,e,b,a)}}if(b=mh[a.type])for(d in b.g)(e=oh(a.type,d,a.target))&&b.J(d,e,a.type,a)}}
V(document,"blur",ph,!0);V(document,"change",ph,!0);V(document,"click",ph);V(document,"focus",ph,!0);V(document,"mouseover",ph);V(document,"mouseout",ph);V(document,"mousedown",ph);V(document,"keydown",ph);V(document,"keyup",ph);V(document,"keypress",ph);V(document,"cut",ph);V(document,"paste",ph);nh&&(V(document,"touchstart",ph),V(document,"touchend",ph),V(document,"touchcancel",ph));function qh(a){this.o=a;this.B={};this.K=[];this.F=[]}
m=qh.prototype;m.D=function(a){return H(a,X(this))};
function X(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
m.unregister=function(){Eg(this.K);this.K.length=0;Wg(this.F);this.F.length=0};
m.init=wa;m.dispose=wa;function rh(a,b,c){a.K.push(Cg(b,c,a))}
function sh(a,b,c){a.F.push(Vg(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=w(c,a);b in mh||(mh[b]=new N);mh[b].subscribe(d,e);a.B[c]=e}
function Z(a,b,c,d){if(b in mh){var e=mh[b];Zf(e,X(a,d),a.B[c]);0>=ag(e)&&(e.dispose(),delete mh[b])}delete a.B[c]}
m.P=function(a,b,c){var d=this.j(a,b);if(d&&(d=v(d))){var e=Za(arguments,2);Ya(e,0,0,a);d.apply(null,e)}};
m.j=function(a,b){return Ig(a,b)};
function th(a,b){Gg(a,"tooltip-text",b)}
;var uh=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};x("yt.uix.widgets_",uh);function vh(a){var b=[];bb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];z(f,function(h){""==h?b.push(e):b.push(e+"="+encodeURIComponent(String(h)))})});
return b.join("&")}
function wh(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),h=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?Xa(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(k){var g=Error("Error decoding URL component");g.params="key: "+e[0]+", value: "+e[1];"q"==e[0]?wg(g,"WARNING",void 0,void 0,void 0):wg(g)}}return b}
function xh(a,b){return yh(a,b||{},!0)}
function yh(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=wh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return nd(a,e)+d}
;function zh(a){a=void 0===a?{}:a;Ca(a)&&(a={callback:a});if(a.gapiHintOverride||O("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=wh(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&jb(a,{_c:{jsl:{h:b}}})}Ie("gapi.iframes:gapi.iframes.style.common",a)}
;function Ah(){return v("gapi.iframes.getContext")()}
;function Bh(a){S.call(this,1,arguments);this.f=a}
y(Bh,S);function Ch(a){S.call(this,1,arguments);this.f=a}
y(Ch,S);function Dh(a,b,c){S.call(this,3,arguments);this.i=a;this.g=b;this.f=null!=c?!!c:null}
y(Dh,S);function Eh(a,b,c,d,e,f){S.call(this,2,arguments);this.g=a;this.f=b;this.l=c||null;this.i=d||null;this.source=e||null;this.params=f||null}
y(Eh,S);function Fh(a,b,c){S.call(this,1,arguments);this.f=a;this.g=b}
y(Fh,S);function Gh(a,b,c,d,e,f,h){S.call(this,1,arguments);this.g=a;this.o=b;this.f=c;this.v=d||null;this.l=e||null;this.i=f||null;this.source=h||null}
y(Gh,S);
var Hh=new T("subscription-batch-subscribe",Bh),Ih=new T("subscription-batch-unsubscribe",Bh),Jh=new T("subscription-subscribe",Eh),Kh=new T("subscription-subscribe-loading",Ch),Lh=new T("subscription-subscribe-loaded",Ch),Mh=new T("subscription-subscribe-success",Fh),Nh=new T("subscription-subscribe-external",Eh),Oh=new T("subscription-unsubscribe",Gh),Ph=new T("subscription-unsubscirbe-loading",Ch),Qh=new T("subscription-unsubscribe-loaded",Ch),Rh=new T("subscription-unsubscribe-success",Ch),Sh=
new T("subscription-external-unsubscribe",Gh),Th=new T("subscription-enable-ypc",Ch),Uh=new T("subscription-disable-ypc",Ch),Vh=new T("subscription-prefs",Dh),Wh=new T("subscription-prefs-success",Dh),Xh=new T("subscription-prefs-failure",Dh);function Yh(){var a=bh();return a?a:null}
;function Zh(a,b){(a=E(a))&&a.style&&(a.style.display=b?"":"none",hf(a,"hid",!b))}
function $h(a){return(a=E(a))?"none"!=a.style.display&&!K(a,"hid"):!1}
function ai(a){z(arguments,function(b){!Ba(b)||b instanceof Element?Zh(b,!0):z(b,function(c){ai(c)})})}
function bi(a){z(arguments,function(b){!Ba(b)||b instanceof Element?Zh(b,!1):z(b,function(c){bi(c)})})}
;function ci(){qh.call(this,"tooltip");this.f=0;this.g={}}
y(ci,qh);ya(ci);m=ci.prototype;m.register=function(){Y(this,"mouseover",this.Y);Y(this,"mouseout",this.N);Y(this,"focus",this.ma);Y(this,"blur",this.ha);Y(this,"click",this.N);Y(this,"touchstart",this.Ha);Y(this,"touchend",this.Z);Y(this,"touchcancel",this.Z)};
m.unregister=function(){Z(this,"mouseover",this.Y);Z(this,"mouseout",this.N);Z(this,"focus",this.ma);Z(this,"blur",this.ha);Z(this,"click",this.N);Z(this,"touchstart",this.Ha);Z(this,"touchend",this.Z);Z(this,"touchcancel",this.Z);this.dispose();ci.A.unregister.call(this)};
m.dispose=function(){for(var a in this.g)this.N(this.g[a]);this.g={}};
m.Y=function(a){if(!(this.f&&1E3>Ka()-this.f)){var b=parseInt(this.j(a,"tooltip-hide-timer"),10);b&&(Jg(a,"tooltip-hide-timer"),xg(b));b=w(function(){di(this,a);Jg(a,"tooltip-show-timer")},this);
var c=parseInt(this.j(a,"tooltip-show-delay"),10)||0;b=P(b,c);Gg(a,"tooltip-show-timer",b.toString());a.title&&(th(a,ei(this,a)),a.title="");b=Ea(a).toString();this.g[b]=a}};
m.N=function(a){var b=parseInt(this.j(a,"tooltip-show-timer"),10);b&&(xg(b),Jg(a,"tooltip-show-timer"));b=w(function(){if(a){var c=E(fi(this,a));c&&(gi(c),Pc(c),Jg(a,"content-id"));c=E(fi(this,a,"arialabel"));Pc(c)}Jg(a,"tooltip-hide-timer")},this);
b=P(b,50);Gg(a,"tooltip-hide-timer",b.toString());if(b=this.j(a,"tooltip-text"))a.title=b;b=Ea(a).toString();delete this.g[b]};
m.ma=function(a,b){this.f=0;this.Y(a,b)};
m.ha=function(a){this.f=0;this.N(a)};
m.Ha=function(a,b,c){c.changedTouches&&(this.f=0,(a=oh(b,X(this),c.changedTouches[0].target))&&this.Y(a,b))};
m.Z=function(a,b,c){c.changedTouches&&(this.f=Ka(),(a=oh(b,X(this),c.changedTouches[0].target))&&this.N(a))};
function hi(a,b,c){th(b,c);a=a.j(b,"content-id");(a=E(a))&&Tc(a,c)}
function ei(a,b){return a.j(b,"tooltip-text")||b.title}
function di(a,b){if(b){var c=ei(a,b);if(c){var d=E(fi(a,b));if(!d){d=document.createElement("div");d.id=fi(a,b);ef(d,X(a,"tip"));var e=document.createElement("div");ef(e,X(a,"tip-body"));var f=document.createElement("div");ef(f,X(a,"tip-arrow"));var h=document.createElement("div");h.setAttribute("aria-hidden","true");ef(h,X(a,"tip-content"));var g=ii(a,b),k=fi(a,b,"content");h.id=k;Gg(b,"content-id",k);e.appendChild(h);g&&d.appendChild(g);d.appendChild(e);d.appendChild(f);var l=bd(b);k=fi(a,b,"arialabel");
f=document.createElement("div");L(f,X(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;Tc(f,l);b.setAttribute("aria-labelledby",k);k=Yh()||document.body;k.appendChild(f);k.appendChild(d);hi(a,b,c);(c=parseInt(a.j(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",L(h,X(a,"normal-wrap")));h=K(b,X(a,"reverse"));ji(a,b,d,e,g,h)||ji(a,b,d,e,g,!h);var p=X(a,"tip-visible");P(function(){L(d,p)},0)}}}}
function ji(a,b,c,d,e,f){hf(c,X(a,"tip-reverse"),f);var h=0;f&&(h=1);var g=Gd(b);f=new D((g.width-10)/2,f?g.height:0);var k=Dd(b);Hf(new D(k.x+f.x,k.y+f.y),c,h);f=Jc(window);if(1==c.nodeType)var l=Ed(c);else c=c.changedTouches?c.changedTouches[0]:c,l=new D(c.clientX,c.clientY);c=Gd(d);var p=Math.floor(c.width/2);h=!!(f.height<l.y+g.height);g=!!(l.y<g.height);k=!!(l.x<p);f=!!(f.width<l.x+p);l=(c.width+3)/-2- -5;a=a.j(b,"force-tooltip-direction");if("left"==a||k)l=-5;else if("right"==a||f)l=20-c.width-
3;a=Math.floor(l)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||g)}
function fi(a,b,c){a=X(a)+Yg(b);c&&(a+="-"+c);return a}
function ii(a,b){var c=null;$b&&K(b,X(a,"masked"))&&((c=E("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),ai(c)):(c=Oc(document,"IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",ef(c,X(a,"tip-mask"))));return c}
function gi(a){var b=E("yt-uix-tooltip-shared-mask"),c=b&&ed(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),bi(b),document.body.appendChild(b))}
;function ki(a){var b=li();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Cg("LOGGED_IN",function(d){Eg(O("LOGGED_IN_PUBSUB_KEY",void 0));tg("LOGGED_IN",!0);a(d)});
tg("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function li(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=md(a,"mode","subscribe");a=md("/signin?context=popup","next",a);return a=md(a,"feature","sub_button")}
x("yt.pubsub.publish",R);function mi(a){a=ni(a);return"string"===typeof a&&"false"===a?!1:!!a}
function oi(a,b){var c=ni(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function ni(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;function pi(a){var b=qi;a=void 0===a?v("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(ri(b),si(b));b.ca_type="image";a&&(b.bid=a);return b}
function ri(a){var b={};b.dt=Od;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?C:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!C.navigator&&"unknown"!==typeof C.navigator.javaEnabled&&!!C.navigator.javaEnabled&&C.navigator.javaEnabled();C.screen&&(b.u_h=C.screen.height,b.u_w=C.screen.width,b.u_ah=C.screen.availHeight,b.u_aw=C.screen.availWidth,b.u_cd=C.screen.colorDepth);
C.navigator&&C.navigator.plugins&&(b.u_nplug=C.navigator.plugins.length);C.navigator&&C.navigator.mimeTypes&&(b.u_nmime=C.navigator.mimeTypes.length);return b}
function si(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(l){}try{var e=b.outerWidth;var f=b.outerHeight}catch(l){}try{var h=b.innerWidth;var g=b.innerHeight}catch(l){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,g];c=a.f.top;try{var k=Jc(c||window).round()}catch(l){k=new Bc(-12245933,-12245933)}c=k;k={};d=new qg;n.SVGElement&&n.document.createElementNS&&d.set(0);e=sd();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);n.crypto&&n.crypto.subtle&&d.set(3);n.TextDecoder&&n.TextEncoder&&d.set(4);d=rg(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!C.WebGLRenderingContext,k}
var qi=new function(){var a=window.document;this.f=window;this.g=a};
x("yt.ads_.signals_.getAdSignalsString",function(a){return vh(pi(a))});Ka();var ti=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function ui(){if(!ti)return null;var a=ti();return"open"in a?a:null}
;var vi={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},wi="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
xi=!1;
function yi(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=gd(a)[1]||null,e=hd(gd(a)[3]||null);d&&e?(d=c,c=gd(a),d=gd(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?hd(gd(c)[3]||null)==e&&(Number(gd(c)[4]||null)||null)==(Number(gd(a)[4]||null)||null):!0;d=mi("web_ajax_ignore_global_headers_if_set");for(var f in vi)e=O(vi[f]),!e||!c&&!zi(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||zi(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(mi("pass_biscotti_id_in_header_ajax")||mi("pass_biscotti_id_in_header_ajax_tv"))&&
(c||zi(a,"X-YouTube-Ad-Signals"))&&(b["X-YouTube-Ad-Signals"]=vh(pi(void 0)));return b}
function Ai(a){var b=window.location.search,c=hd(gd(a)[3]||null),d=hd(gd(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=wh(b),f={};z(wi,function(h){e[h]&&(f[h]=e[h])});
return yh(a,f||{},!1)}
function zi(a,b){var c=O("CORS_HEADER_WHITELIST")||{},d=hd(gd(a)[3]||null);return d?(c=c[d])?Ta(c,b):!1:!0}
function Bi(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ci(a,b);var d=Di(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(h){if(!e){e=!0;f&&xg(f);var g=h.ok,k=function(l){l=l||{};var p=b.context||n;g?b.onSuccess&&b.onSuccess.call(p,l,h):b.onError&&b.onError.call(p,l,h);b.U&&b.U.call(p,l,h)};
"JSON"==(b.format||"JSON")&&(g||400<=h.status&&500>h.status)?h.json().then(k,function(){k(null)}):k(null)}});
b.sb&&0<b.timeout&&(f=P(function(){e||(e=!0,xg(f))},b.timeout))}else Ei(a,b)}
function Ei(a,b){var c=b.format||"JSON";a=Ci(a,b);var d=Di(a,b),e=!1,f,h=Fi(a,function(g){if(!e){e=!0;f&&xg(f);a:switch(g&&"status"in g?g.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var l=null,p=400<=g.status&&500>g.status,q=500<=g.status&&600>g.status;if(k||p||q)l=Gi(c,g,b.Ob);if(k)a:if(g&&204==g.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};p=b.context||n;
k?b.onSuccess&&b.onSuccess.call(p,g,l):b.onError&&b.onError.call(p,g,l);b.U&&b.U.call(p,g,l)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Ba&&0<b.timeout&&(f=P(function(){e||(e=!0,h.abort(),xg(f))},b.timeout))}
function Ci(a,b){b.Sb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=ug("XSRF_FIELD_NAME"),d=b.Ia;d&&(d[c]&&delete d[c],a=xh(a,d));return a}
function Di(a,b){var c=ug("XSRF_FIELD_NAME"),d=ug("XSRF_TOKEN"),e=b.postBody||"",f=b.H,h=ug("XSRF_FIELD_NAME"),g;b.headers&&(g=b.headers["Content-Type"]);b.Rb||hd(gd(a)[3]||null)&&!b.withCredentials&&hd(gd(a)[3]||null)!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.H&&b.H[h]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=wh(e),jb(e,f),e=b.Ca&&"JSON"==b.Ca?JSON.stringify(e):ld(e));f=e||f&&!fb(f);!xi&&f&&"POST"!=b.method&&(xi=!0,wg(Error("AJAX request with postData should use POST")));
return e}
function Gi(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Hi(b):null)d={},z(b.getElementsByTagName("*"),function(e){d[e.tagName]=Ii(e)})}c&&Ji(d);
return d}
function Ji(a){if(Da(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ib(a[b]);a[c]=d}else Ji(a[b])}}
function Hi(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ii(a){var b="";z(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Fi(a,b,c,d,e,f,h){function g(){4==(k&&"readyState"in k?k.readyState:0)&&b&&vg(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=ui();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",g,!1):k.onreadystatechange=g;mi("debug_forward_web_query_parameters")&&(a=Ai(a));k.open(c,a,!0);f&&(k.responseType=f);h&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=yi(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ki=window,Li=Ki.ytcsi&&Ki.ytcsi.now?Ki.ytcsi.now:Ki.performance&&Ki.performance.timing&&Ki.performance.now?function(){return Ki.performance.timing.navigationStart+Ki.performance.now()}:function(){return(new Date).getTime()};var Mi=Math.pow(2,16)-1,Ni=null,Oi=0,Pi={log_event:"events",log_interaction:"interactions"},Qi=Object.create(null);Qi.log_event="GENERIC_EVENT_LOGGING";Qi.log_interaction="INTERACTION_LOGGING";var Ri=new Set(["log_event"]),Si={},Ti=0,Ui=0,Vi=0,Wi=v("ytLoggingTransportLogPayloadsQueue_")||{};x("ytLoggingTransportLogPayloadsQueue_",Wi);var Xi=v("ytLoggingTransportTokensToCttTargetIds_")||{};x("ytLoggingTransportTokensToCttTargetIds_",Xi);var Yi=v("ytLoggingTransportDispatchedStats_")||{};
x("ytLoggingTransportDispatchedStats_",Yi);x("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{});function Zi(){xg(Ti);xg(Ui);Ui=0;if(!fb(Wi)){for(var a in Wi){var b=Si[a];b&&($i(a,b),delete Wi[a])}fb(Wi)||aj()}}
function aj(){mi("web_gel_timeout_cap")&&!Ui&&(Ui=P(Zi,6E4));xg(Ti);Ti=P(Zi,O("LOGGING_BATCH_TIMEOUT",oi("web_gel_debounce_ms",1E4)))}
function bj(a,b){b=void 0===b?"":b;Wi[a]=Wi[a]||{};Wi[a][b]=Wi[a][b]||[];return Wi[a][b]}
function $i(a,b){var c=Pi[a],d=Yi[a]||{};Yi[a]=d;var e=Math.round(Li());for(q in Wi[a]){var f=hb,h=b.f;h={client:{hl:h.gb,gl:h.fb,clientName:h.eb,clientVersion:h.innertubeContextClientVersion,configInfo:h.cb}};var g=window.devicePixelRatio;g&&1!=g&&(h.client.screenDensityFloat=String(g));g=O("EXPERIMENTS_TOKEN","");""!==g&&(h.client.experimentsToken=g);var k=g=void 0,l=[],p=O("EXPERIMENTS_FORCED_FLAGS",{});for(k in p)l.push({key:k,value:String(p[k])});k=O("EXPERIMENT_FLAGS",{});for(g in k)g.startsWith("force_")&&
void 0===p[g]&&l.push({key:g,value:String(k[g])});g=l;0<g.length&&(h.request={internalExperimentFlags:g});O("DELEGATED_SESSION_ID")&&!mi("pageid_as_header_web")&&(h.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});f=f({context:h});f[c]=bj(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(h=Xi[q])a:{l=q;if(h.videoId)g="VIDEO";else if(h.playlistId)g="PLAYLIST";else break a;f.credentialTransferTokenTargetId=h;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:l,scope:g}]}delete Xi[q];f.requestTimeMs=e;if(h=ug("EVENT_ID"))g=(O("BATCH_CLIENT_COUNTER",void 0)||0)+1,g>Mi&&(g=1),tg("BATCH_CLIENT_COUNTER",g),h={serializedEventId:h,clientCounter:g},f.serializedClientEventId=h,Ni&&Oi&&mi("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:Ni,roundtripMs:Oi}),Ni=h,Oi=0;cj(b,a,f,{retry:Ri.has(a),onSuccess:w(dj,this,Li())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=
q?(d.averageTimeBetweenDispatchesMs*q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e}
function dj(a){Oi=Math.round(Li()-a)}
;var ej=v("ytLoggingGelSequenceIdObj_")||{};x("ytLoggingGelSequenceIdObj_",ej);function fj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Nb||O("AUTHORIZATION"))||(a?b="Bearer "+v("gapi.auth.getToken")().Mb:b=de([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),mi("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
function gj(a){a=Object.assign({},a);delete a.Authorization;var b=de();if(b){var c=new Ze;c.update(ug("INNERTUBE_API_KEY"));c.update(b);b=c.digest();c=3;void 0===c&&(c=0);if(!vc){vc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var h=d.concat(e[f].split(""));uc[f]=h;for(var g=0;g<h.length;g++){var k=h[g];void 0===vc[k]&&(vc[k]=g)}}}c=uc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],p=(f=e+1<b.length)?b[e+1]:0;k=(h=
e+2<b.length)?b[e+2]:0;g=l>>2;l=(l&3)<<4|p>>4;p=(p&15)<<2|k>>6;k&=63;h||(k=64,f||(p=64));d.push(c[g],c[l],c[p]||"",c[k]||"")}a.hash=d.join("")}return a}
;function hj(){var a=new jg;(a=a.isAvailable()?new pg(a,"yt.innertube"):null)||(a=new kg("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new fg(a):null;this.g=document.domain||window.location.hostname}
hj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Ka()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(wf(b))}catch(f){return}else e=escape(b);b=this.g;xc.set(""+a,e,c,"/",void 0===b?"youtube.com":b,!1)};
hj.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=xc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
hj.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;xc.remove(""+a,"/",void 0===b?"youtube.com":b)};var ij=new hj;function jj(a,b,c,d){if(d)return null;d=ij.get("nextId",!0)||1;var e=ij.get("requests",!0)||{};e[d]={method:a,request:b,authState:gj(c),requestTime:Math.round(Li())};ij.set("nextId",d+1,86400,!0);ij.set("requests",e,86400,!0);return d}
function kj(a){var b=ij.get("requests",!0)||{};delete b[a];ij.set("requests",b,86400,!0)}
function lj(a){var b=ij.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Li())-d.requestTime)){var e=d.authState,f=gj(fj(!1));gb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Li())),cj(a,d.method,e,{}));delete b[c]}}ij.set("requests",b,86400,!0)}}
;function mj(a){var b=this;this.f=a||{innertubeApiKey:ug("INNERTUBE_API_KEY"),innertubeApiVersion:ug("INNERTUBE_API_VERSION"),cb:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),eb:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:ug("INNERTUBE_CONTEXT_CLIENT_VERSION"),gb:ug("INNERTUBE_CONTEXT_HL"),fb:ug("INNERTUBE_CONTEXT_GL"),hb:ug("INNERTUBE_HOST_OVERRIDE")||"",ib:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};Pg(function(){lj(b)},0,5E3)}
function cj(a,b,c,d){!O("VISITOR_DATA")&&.01>Math.random()&&wg(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",H:c,Ca:"JSON",Ba:function(){},
sb:d.Ba,onSuccess:function(t,r){if(d.onSuccess)d.onSuccess(r)},
ya:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,r){if(d.onError)d.onError(r)},
Tb:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},f="",h=a.f.hb;h&&(f=h);h=a.f.ib||!1;var g=fj(h,f,d);Object.assign(e.headers,g);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=xh(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&mi("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=jj(b,c,g,h))){var p=e.onSuccess,q=e.ya;e.onSuccess=function(t,r){kj(l);p(t,r)};
c.ya=function(t,r){kj(l);q(t,r)}}try{mi("use_fetch_for_op_xhr")?Bi(k,e):(e.method="POST",e.H||(e.H={}),Ei(k,e))}catch(t){if("InvalidAccessError"==t)l&&(kj(l),l=0),wg(Error("An extension is blocking network request."),"WARNING");
else throw t;}l&&Pg(function(){lj(a)},0,5E3)}
;var nj=Ka().toString();var oj;
if(!(oj=v("ytLoggingTimeDocumentNonce_"))){var pj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var qj=Array(16),rj=new Uint8Array(16);window.crypto.getRandomValues(rj);for(var sj=0;sj<qj.length;sj++)qj[sj]=rj[sj];pj=qj;break a}catch(a){}for(var tj=Array(16),uj=0;16>uj;uj++){for(var vj=Ka(),wj=0;wj<vj%23;wj++)tj[uj]=Math.random();tj[uj]=Math.floor(256*Math.random())}if(nj)for(var xj=1,yj=0;yj<nj.length;yj++)tj[xj%16]=tj[xj%16]^tj[(xj-1)%16]/4^nj.charCodeAt(yj),xj++;pj=tj}for(var zj=pj,Aj=
[],Bj=0;Bj<zj.length;Bj++)Aj.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(zj[Bj]&63));oj=Aj.join("")}var Cj=oj;x("ytLoggingTimeDocumentNonce_",Cj);function Dj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Ej(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
x("yt_logging_screen.getRootVeType",function(a){return O(Ej(void 0===a?0:a),void 0)});
x("yt_logging_screen.getCurrentCsn",function(a){a=void 0===a?0:a;var b=O(Dj(a));b||0!=a||(mi("kevlar_client_side_screens")?b="UNDEFINED_CSN":b=O("EVENT_ID"));return b?b:null});
x("yt_logging_screen.setCurrentScreen",function(a,b,c){c=void 0===c?0:c;if(a!==O(Dj(c))||b!==O(Ej(c)))tg(Dj(c),a),tg(Ej(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var d={clientDocumentNonce:Cj,clientScreenNonce:a};var e=void 0===e?{}:e;var f={};f.eventTimeMs=Math.round(e.timestamp||Li());f.foregroundHeartbeatScreenAssociated=d;d=String;if(e.timestamp)var h=-1;else h=v("_lact",window),h=null==h?-1:Math.max(Ka()-h,0);f.context={lastActivityMs:d(h)};mi("log_sequence_info_on_gel_web")&&e.Ea&&
(d=f.context,h=e.Ea,ej[h]=h in ej?ej[h]+1:0,d.sequence={index:ej[h],groupKey:h},e.Qb&&delete ej[e.Ea]);(e=e.Pb)?(d={},e.videoId?d.videoId=e.videoId:e.playlistId&&(d.playlistId=e.playlistId),Xi[e.token]=d,e=bj("log_event",e.token)):e=bj("log_event");e.push(f);mj&&(Si.log_event=new mj);f=oi("web_logging_max_batch")||100;d=Li();e.length>=f?Zi():10<=d-Vi&&(aj(),Vi=d)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Fj(){qh.call(this,"button");this.f=null;this.i=[];this.g={}}
y(Fj,qh);ya(Fj);m=Fj.prototype;m.register=function(){Y(this,"click",this.Ja);Y(this,"keydown",this.qa);Y(this,"keypress",this.ra);rh(this,"page-scroll",this.Za)};
m.unregister=function(){Z(this,"click",this.Ja);Z(this,"keydown",this.qa);Z(this,"keypress",this.ra);Gj(this);this.g={};Fj.A.unregister.call(this)};
m.Ja=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
m.qa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Hj(this,a))){var d=function(h){var g="";h.tagName&&(g=h.tagName.toLowerCase());return"ul"==g||"table"==g},e;
d(b)?e=b:e=Uc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.nb;else"table"==e&&(f=this.mb);f&&Ij(this,a,b,c,w(f,this))}}};
m.Za=function(){var a=this.g,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=H(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;Jj(this,d,b,!0)}};
function Ij(a,b,c,d,e){var f=$h(c),h=9==d.keyCode;if(h||32==d.keyCode||13==d.keyCode)if(d=Kj(a,c)){if(void 0!==d.firstElementChild)b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var g=void 0===g?{}:g;var k=void 0===k?"":k;var l=void 0===l?window:l;l=l.location;g=nd(b.href,g)+k;g instanceof ub||g instanceof ub||(g="object"==typeof g&&g.T?g.S():String(g),xb.test(g)||(g="about:invalid#zClosurez"),g=new ub(vb,g));l.href=g instanceof ub&&
g.constructor===ub&&g.g===wb?g.f:"type_error:SafeUrl"}else lh(b)}else h&&Lj(a,b);else f?27==d.keyCode?(Kj(a,c),Lj(a,b)):e(b,c,d):(g=K(b,X(a,"reverse"))?38:40,d.keyCode==g&&(lh(b),d.preventDefault()))}
m.ra=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Hj(this,a),$h(a)&&c.preventDefault())};
function Kj(a,b){var c=X(a,"menu-item-highlight"),d=G(c,b);d&&M(d,c);return d}
function Mj(a,b,c){L(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Ea(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
m.mb=function(a,b,c){var d=Kj(this,b),e=ah("table",b);b=Gc(document,"td",null,e);d=Nj(d,b,Gc(document,"td",null,ah("tr",e)).length,c);-1!=d&&(Mj(this,a,b[d]),c.preventDefault())};
m.nb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Kj(this,b);b=Oa(Gc(document,"li",null,b),$h);Mj(this,a,b[Nj(d,b,1,c)]);c.preventDefault()}};
function Nj(a,b,c,d){var e=b.length;a=Na(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Oj(a,b){var c=b.iframeMask;c||(c=Oc(document,"IFRAME"),c.src='javascript:""',ef(c,X(a,"menu-mask")),bi(c),b.iframeMask=c);return c}
function Jj(a,b,c,d){var e=H(b,X(a,"group")),f=!!a.j(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var h=8,g=Id(b);if(K(b,X(a,"reverse"))){f=8;h=9;g=g.top+"px";try{c.style.maxHeight=g}catch(p){}}K(b,"flip")&&(K(b,X(a,"reverse"))?(f=12,h=13):(f=13,h=12));var k;a.j(b,"button-has-sibling-menu")?k=Bd(e):a.j(b,"button-menu-root-container")&&(k=Pj(a,b));B&&!mc("8")&&(k=null);if(k){var l=Id(k);l=new td(-l.top,l.left,l.top,-l.left)}k=new D(0,1);K(b,X(a,"center-menu"))&&(k.x-=Math.round((Gd(c).width-Gd(b).width)/
2));d&&(k.y+=Lc(document).y);if(a=Oj(a,b))b=Gd(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Ff(e,f,a,h,k,l,197),d&&vd(a,"position","fixed");Ff(e,f,c,h,k,l,197)}
function Pj(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return H(b,c)}return document.body}
m.La=function(a){if(a){var b=Hj(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=Pj(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Oj(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.g[Yg(a).toString()]=b);Jj(this,a,b,c);Fg("yt-uix-button-menu-before-show",a,b);ai(b);d&&ai(d);
this.P(a,"button-menu-action",!0);L(a,X(this,"active"));b=w(this.Ka,this,a,!1);d=w(this.Ka,this,a,!0);c=w(this.xb,this,a,void 0);this.f&&Hj(this,this.f)==Hj(this,a)||Gj(this);R("yt-uix-button-menu-show",a);W(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.f=a}}};
function Lj(a,b){if(b){var c=Hj(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");bi(c);a.P(b,"button-menu-action",!1);var d=Oj(a,b),e=Yg(c).toString();delete a.g[e];P(function(){d&&d.parentNode&&(bi(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=H(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));gf(b,f);R("yt-uix-button-menu-hide",b);W(a.i);a.i.length=0}}
m.xb=function(a,b){var c=Hj(this,a);if(c){b&&(b instanceof Fb?Lb(c,b):Tc(c,b));var d=!!this.j(a,"button-menu-fixed");Jj(this,a,c,d)}};
m.Ka=function(a,b,c){c=jh(c);var d=H(c,X(this));if(d){d=Hj(this,d);var e=Hj(this,a);if(d==e)return}d=H(c,X(this,"menu"));e=d==Hj(this,a);var f=K(c,X(this,"menu-item")),h=K(c,X(this,"menu-close"));if(!d||e&&(f||h))Lj(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=G(X(this,"content"),a))&&Tc(a,bd(c)),Qj(this,d,c))};
function Qj(a,b,c){var d=X(a,"menu-item-selected");z(Fc(d,b),function(e){M(e,d)});
L(c.parentNode,d)}
function Hj(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id");c=c&&E(c);var d=X(a,"menu");c?ff(c,[d,X(a,"menu-external")]):c=G(d,b);b.widgetMenu=c}return b.widgetMenu}
m.isToggled=function(a){return K(a,X(this,"toggled"))};
m.toggle=function(a){if(this.j(a,"button-toggle")){var b=H(a,X(this,"group")),c=X(this,"toggled"),d=K(a,c);if(b&&this.j(b,"button-toggle-group")){var e=this.j(b,"button-toggle-group");z(Fc(X(this),b),function(f){f!=a||"optional"==e&&d?(M(f,c),f.removeAttribute("aria-pressed")):(L(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),kf(a,c)}};
m.click=function(a){if(Hj(this,a)){var b=Hj(this,a);if(b){var c=H(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(Lj(this,c),P(w(this.La,this,a),1)):$h(b)?Lj(this,a):this.La(a)}a.focus()}this.P(a,"button-action")};
function Gj(a){a.f&&Lj(a,a.f)}
;function Rj(a){qh.call(this,a);this.i=null}
y(Rj,qh);m=Rj.prototype;m.D=function(a){var b=qh.prototype.D.call(this,a);return b?b:a};
m.register=function(){rh(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
m.dispose=function(){Sj(this);Rj.A.dispose.call(this)};
m.j=function(a,b){var c=Rj.A.j.call(this,a,b);return c?c:(c=Rj.A.j.call(this,a,"card-config"))&&(c=v(c))&&c[b]?c[b]:null};
m.show=function(a){var b=this.D(a);if(b){L(b,X(this,"active"));var c=Tj(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;Uj(this,a,c);var d=X(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.P(b,"card-action",a);this.i=a;bi(c);P(w(function(){e||(ai(c),R("yt-uix-card-show",b,a,c));Vj(c);L(c,d);R("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function Tj(a,b,c){var d=c||b,e=X(a,"card");c=Wj(a,d);var f=E(X(a,"card")+Yg(d));if(f)return a=G(X(a,"card-body"),f),Sc(a,c)||(Pc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+Yg(d);ef(f,e);(d=a.j(d,"card-class"))&&ff(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var h=document.createElement("div");h.className=
X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Pc(c);h.appendChild(c);d.appendChild(a);d.appendChild(h);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function Uj(a,b,c){var d=a.j(b,"orientation")||"horizontal",e=G(X(a,"anchor"),b)||b,f=a.j(b,"position"),h=!!a.j(b,"force-position"),g=a.j(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var p=13;var q=8}else l&&!k?(p=12,q=9):!l&&k?(p=9,q=12):(p=8,q=13);var t=Jd(document.body);f=Jd(b);t!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var r=new D(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,r=new D(b.offsetWidth+6,-12);var u=Gd(c);f=
Math.min(f,(d?u.height:u.width)-24-6);6>f&&(f=6,d?r.y+=12-b.offsetHeight/2:r.x+=12-b.offsetWidth/2);u=null;h||(u=10);b=X(a,"card-flip");a=X(a,"card-reverse");hf(c,b,l);hf(c,a,k);u=Ff(e,p,c,q,r,null,u);!h&&u&&(u&48&&(l=!l,p^=4,q^=4),u&192&&(k=!k,p^=1,q^=1),hf(c,b,l),hf(c,a,k),Ff(e,p,c,q,r));g&&(e=parseInt(c.style.top,10),h=Lc(document).y,vd(c,"position","fixed"),vd(c,"top",e-h+"px"));t&&(c.style.right="",e=Id(c),e.left=e.left||parseInt(c.style.left,10),h=Jc(window),c.style.left="",c.style.right=h.width-
e.left-e.width+"px");e=G("yt-uix-card-body-arrow",c);h=G("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!t&&l||t&&!l?"left":"right";e.setAttribute("style","");h.setAttribute("style","");e.style[d]=f+"px";h.style[d]=f+"px";k=G("yt-uix-card-arrow",c);l=G("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?Gd(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
m.hide=function(a){if(a=this.D(a)){var b=E(X(this,"card")+Yg(a));b&&(M(a,X(this,"active")),M(b,X(this,"card-visible")),bi(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Pc(b.cardMask),b.cardMask=null))}};
function Sj(a){a.i&&a.hide(a.i)}
m.wb=function(a,b){var c=this.D(a);if(c){if(b){var d=Wj(this,c);if(!d)return;b instanceof Fb?Lb(d,b):Tc(d,b)}K(c,X(this,"active"))&&(c=Tj(this,a,c),Uj(this,a,c),ai(c),Vj(c))}};
m.isActive=function(a){return(a=this.D(a))?K(a,X(this,"active")):!1};
function Wj(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.j(b,"card-id"))?E(c):G(d,b))||(c=document.createElement("div"));var f=c;M(f,d);L(f,e);b.cardContentNode=c}return c}
function Vj(a){var b=a.cardMask;b||(b=Oc(document,"IFRAME"),b.src='javascript:""',ff(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function Xj(){qh.call(this,"kbd-nav")}
var Yj;y(Xj,qh);ya(Xj);m=Xj.prototype;m.register=function(){Y(this,"keydown",this.oa);rh(this,"yt-uix-kbd-nav-move-in",this.wa);rh(this,"yt-uix-kbd-nav-move-in-to",this.ob);rh(this,"yt-uix-kbd-move-next",this.xa);rh(this,"yt-uix-kbd-nav-move-to",this.W)};
m.unregister=function(){Z(this,"keydown",this.oa);W(Yj)};
m.oa=function(a,b,c){var d=c.keyCode;if(a=H(a,X(this)))switch(d){case 13:case 32:this.wa(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=mf(a,"kbdNavMoveOut");!c;){c=H(a.parentElement,X(this));if(!c)break a;c=mf(c,"kbdNavMoveOut")}c=E(c);this.W(c);R("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&K(a,X(this,"list")))switch(d){case 40:this.xa(b,a);break;case 38:d=document.activeElement==a,a=Zj(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),ak(this,a[b]))}c.preventDefault()}};
m.wa=function(a){var b=mf(a,"kbdNavMoveIn");b=E(b);bk(this,a,b);this.W(b)};
m.ob=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}bk(this,d,a);this.W(a)};
m.W=function(a){if(a)if(Zc(a))a.focus();else{var b=Uc(a,function(c){return Rc(c)?Zc(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function bk(a,b,c){if(b&&c)if(L(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,lf&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
m.xa=function(a,b){var c=document.activeElement==b,d=Zj(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),ak(this,d[c]))};
function ak(a,b){if(b){var c=dd(b,"LI");c&&(L(c,X(a,"highlight")),Yj=V(b,"blur",w(function(d){M(d,X(this,"highlight"));W(Yj)},a,c)))}}
function Zj(a){if("UL"!=a.tagName.toUpperCase())return[];a=Oa(Qc(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Oa(Pa(a,function(b){return $h(b)?Uc(b,function(c){return Rc(c)?Zc(c):!1}):!1}),function(b){return!!b})}
;function ck(){qh.call(this,"menu");this.g=this.f=null;this.i={};this.v={};this.l=null}
y(ck,qh);ya(ck);function dk(a){var b=ck.w();if(K(a,X(b)))return a;var c=b.D(a);return c?c:H(a,X(b,"content"))==b.f?b.g:null}
m=ck.prototype;m.register=function(){Y(this,"click",this.na);Y(this,"mouseenter",this.Xa);rh(this,"page-scroll",this.ab);rh(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.D(a);ek(this,a)});
this.l=new N};
m.unregister=function(){Z(this,"click",this.na);this.g=this.f=null;W($a(cb(this.i)));this.i={};bb(this.v,function(a){Pc(a)},this);
this.v={};bf(this.l);this.l=null;ck.A.unregister.call(this)};
m.na=function(a,b,c){a&&(b=fk(this,a),!b.disabled&&$g(c.target,b)&&gk(this,a))};
m.Xa=function(a,b,c){a&&K(a,X(this,"hover"))&&$g(c.target,fk(this,a))&&gk(this,a,!0)};
m.ab=function(){this.f&&this.g&&hk(this,this.g,this.f)};
function hk(a,b,c){var d=ik(a,b);if(d){var e=Gd(c);if(e instanceof Bc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Fd(e,!0);d.style.height=Fd(f,!0)}c==a.f&&(e=9,f=8,K(b,X(a,"reversed"))&&(e^=1,f^=1),K(b,X(a,"flipped"))&&(e^=4,f^=4),a=new D(0,1),d&&Ff(b,e,d,f,a,null,197),Ff(b,e,c,f,a,null,197))}
function gk(a,b,c){jk(a,b)&&!c?ek(a,b):(kk(a,b),!a.f||$g(b,a.f)?a.Ma(b):Yf(a.l,w(a.Ma,a,b)))}
m.Ma=function(a){if(a){var b=lk(this,a);if(b){Fg("yt-uix-menu-before-show",a,b);this.f?$g(a,this.f)||ek(this,this.g):(this.g=a,this.f=b,K(a,X(this,"sibling-content"))||(Pc(b),document.body.appendChild(b)),b.style.minWidth=fk(this,a).offsetWidth-2+"px");var c=ik(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);M(b,X(this,"content-hidden"));hk(this,a,b);ff(fk(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);R("yt-uix-menu-show",a);mk(b);nk(this,a);R("yt-uix-kbd-nav-move-in-to",
b);var d=w(this.yb,this,a),e=w(this.kb,this,a);c=Ea(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];K(a,X(this,"indicate-selected"))&&(d=w(this.lb,this,a),this.i[c].push(V(b,"click",d)));K(a,X(this,"hover"))&&(a=w(this.Ya,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
m.Ya=function(a,b){var c=jh(b);c&&($g(c,fk(this,a))||ok(this,c)||pk(this,a))};
m.yb=function(a,b){var c=jh(b);if(c){if(ok(this,c)){var d=H(c,X(this,"content")),e=dd(c,"LI");e&&d&&Sc(d,e)&&Fg("yt-uix-menu-item-clicked",c);c=H(c,X(this,"close-on-select"));if(!c)return;d=dk(c)}ek(this,d||a)}};
function kk(a,b){if(b){var c=H(b,X(a,"content"));c&&z(Fc(X(a),c),function(d){!$g(d,b)&&jk(this,d)&&pk(this,d)},a)}}
function ek(a,b){if(b){var c=[];c.push(b);var d=lk(a,b);d&&(d=Fc(X(a),d),d=Va(d),c=c.concat(d),z(c,function(e){jk(this,e)&&pk(this,e)},a))}}
function pk(a,b){if(b){var c=lk(a,b);gf(fk(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);L(c,X(a,"content-hidden"));var d=lk(a,b);d&&Hc(d,{"aria-expanded":"false"});(d=ik(a,b))&&d.parentNode&&Pc(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.l&&a.l.J("ROOT_MENU_REMOVED"));R("yt-uix-menu-hide",b);c=Ea(b).toString();W(a.i[c]);delete a.i[c]}}
m.kb=function(a,b){var c=jh(b);c&&qk(this,a,c)};
m.lb=function(a,b){var c=jh(b);if(c){var d=fk(this,a);if(d&&(c=dd(c,"LI")))if(c=bd(c).trim(),d.hasChildNodes()){var e=Fj.w();(d=G(X(e,"content"),d))&&Tc(d,c)}else Tc(d,c)}};
function nk(a,b){var c=lk(a,b);if(c){z(c.children,function(e){"LI"==e.tagName&&Hc(e,{role:"menuitem"})});
Hc(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Ea(c),c.id=d);(c=fk(a,b))&&Hc(c,{"aria-controls":d})}}
function qk(a,b,c){var d=lk(a,b);d&&K(b,X(a,"checked"))&&(a=dd(c,"LI"))&&(a=G("yt-ui-menu-item-checked-hid",a))&&(z(Fc("yt-ui-menu-item-checked",d),function(e){jf(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),jf(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function jk(a,b){var c=lk(a,b);return c?!K(c,X(a,"content-hidden")):!1}
function mk(a){z(Gc(document,"UL",null,a),function(b){b.tabIndex=0;var c=Xj.w();ff(b,[X(c),X(c,"list")])})}
function lk(a,b){var c=Ig(b,"menu-content-id");return c&&(c=E(c))?(ff(c,[X(a,"content"),X(a,"content-external")]),c):b==a.g?a.f:G(X(a,"content"),b)}
function ik(a,b){var c=Ea(b).toString(),d=a.v[c];if(!d){d=Oc(document,"IFRAME");d.src='javascript:""';var e=[X(a,"mask")];z(df(b),function(f){e.push(f+"-mask")});
ff(d,e);a.v[c]=d}return d||null}
function fk(a,b){return G(X(a,"trigger"),b)}
function ok(a,b){return $g(b,a.f)||$g(b,a.g)}
;function rk(){Rj.call(this,"clickcard");this.f={};this.g={}}
y(rk,Rj);ya(rk);m=rk.prototype;m.register=function(){rk.A.register.call(this);Y(this,"click",this.ka,"target");Y(this,"click",this.ja,"close")};
m.unregister=function(){rk.A.unregister.call(this);Z(this,"click",this.ka,"target");Z(this,"click",this.ja,"close");for(var a in this.f)W(this.f[a]);this.f={};for(a in this.g)W(this.g[a]);this.g={}};
m.ka=function(a,b,c){c.preventDefault();b=dd(c.target,"button");if(!b||!b.disabled){if(b=this.j(a,"card-target"))a=document,a="string"===typeof b?a.getElementById(b):b;b=this.D(a);this.j(b,"disabled")||(K(b,X(this,"active"))?(this.hide(a),M(b,X(this,"active"))):(this.show(a),L(b,X(this,"active"))))}};
m.show=function(a){rk.A.show.call(this,a);var b=this.D(a),c=Ea(a).toString();if(!Ig(b,"click-outside-persists")){if(this.f[c])return;b=V(document,"click",w(this.la,this,a));var d=V(window,"blur",w(this.la,this,a));this.f[c]=[b,d]}a=V(window,"resize",w(this.wb,this,a,void 0));this.g[c]=a};
m.hide=function(a){rk.A.hide.call(this,a);a=Ea(a).toString();var b=this.f[a];b&&(W(b),this.f[a]=null);if(b=this.g[a])W(b),delete this.g[a]};
m.la=function(a,b){var c="yt-uix"+(this.o?"-"+this.o:"")+"-card",d=null;b.target&&(d=H(b.target,c)||H(dk(b.target),c));(d=d||H(document.activeElement,c)||(document.activeElement?H(dk(document.activeElement),c):null))||this.hide(a)};
m.ja=function(a){(a=H(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function sk(){Rj.call(this,"hovercard")}
y(sk,Rj);ya(sk);m=sk.prototype;m.register=function(){Y(this,"mouseenter",this.sa,"target");Y(this,"mouseleave",this.ua,"target");Y(this,"mouseenter",this.ta,"card");Y(this,"mouseleave",this.va,"card")};
m.unregister=function(){Z(this,"mouseenter",this.sa,"target");Z(this,"mouseleave",this.ua,"target");Z(this,"mouseenter",this.ta,"card");Z(this,"mouseleave",this.va,"card")};
m.sa=function(a){if(tk!=a){tk&&(this.hide(tk),tk=null);var b=w(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10);b=P(b,-1<c?c:200);Gg(a,"card-timer",b.toString());tk=a;a.alt&&(Gg(a,"card-alt",a.alt),a.alt="");a.title&&(Gg(a,"card-title",a.title),a.title="")}};
m.ua=function(a){var b=parseInt(this.j(a,"card-timer"),10);xg(b);this.D(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;P(w(this.bb,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
m.bb=function(a){this.D(a).isCardHidable&&(this.hide(a),tk=null)};
m.ta=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
m.va=function(a){a&&this.hide(a.cardTargetNode)};
var tk=null;function uk(a,b,c,d,e,f){this.f=a;this.B=null;this.i=G("yt-dialog-fg",this.f)||this.f;if(a=G("yt-dialog-title",this.i)){var h="yt-dialog-title-"+Ea(this.i);a.setAttribute("id",h);this.i.setAttribute("aria-labelledby",h)}this.i.setAttribute("tabindex","-1");this.V=G("yt-dialog-focus-trap",this.f);this.fa=!1;this.l=new N;this.F=[];this.F.push(kh(this.f,w(this.pb,this),"yt-dialog-dismiss"));this.F.push(V(this.V,"focus",w(this.Wa,this),!0));vk(this);this.Oa=b;this.Qa=c;this.Pa=d;this.K=e;this.Ra=f;this.v=
this.o=null}
var wk={LOADING:"loading",Kb:"content",Lb:"working"};function xk(a,b){a.X()||a.l.subscribe("post-all",b)}
function vk(a){a=G("yt-dialog-fg-content",a.f);var b=[];bb(wk,function(c){b.push("yt-dialog-show-"+c)});
gf(a,b);L(a,"yt-dialog-show-content")}
m=uk.prototype;
m.show=function(){if(!this.X()){this.B=document.activeElement;if(!this.Pa){this.g||(this.g=E("yt-dialog-bg"),this.g||(this.g=Oc(document,"div"),this.g.id="yt-dialog-bg",ef(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Jc(a).height,Kc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=
b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";ai(this.g)}this.pa();c=yk(this);zk(c);this.o=V(document,"keydown",w(this.jb,this));c=this.f;d=Cg("player-added",this.pa,this);Gg(c,"player-ready-pubsub-key",d);this.Qa&&(this.v=V(document,"click",w(this.vb,this)));ai(this.f);this.i.setAttribute("tabindex","0");Ak(this);this.K||L(document.body,"yt-dialog-active");Gj(Fj.w());Sj(rk.w());Sj(sk.w());R("yt-ui-dialog-show-complete",this)}};
function Bk(){return Ra(Fc("yt-dialog"),function(a){return $h(a)})}
m.pa=function(){if(!this.Ra){var a=this.f;hf(document.body,"hide-players",!0);a&&hf(a,"preserve-players",!0)}};
function yk(a){var b=Gc(document,"iframe",null,a.f);z(b,function(c){var d=Ig(c,"onload");d&&(d=v(d))&&V(c,"load",d);if(d=Ig(c,"src"))c.src=d},a);
return Va(b)}
function zk(a){z(document.getElementsByTagName("iframe"),function(b){-1==Na(a,b)&&L(b,"iframe-hid")})}
function Ck(){z(Fc("iframe-hid"),function(a){M(a,"iframe-hid")})}
m.pb=function(a){a=a.currentTarget;a.disabled||(a=Ig(a,"action")||"",this.dismiss(a))};
m.dismiss=function(a){if(!this.X()){this.l.J("pre-all");this.l.J("pre-"+a);bi(this.f);Sj(rk.w());Sj(sk.w());this.i.setAttribute("tabindex","-1");Bk()||(bi(this.g),this.K||M(document.body,"yt-dialog-active"),ch(),Ck());this.o&&(W(this.o),this.o=null);this.v&&(W(this.v),this.v=null);var b=this.f;if(b){var c=Ig(b,"player-ready-pubsub-key");c&&(Eg(c),Jg(b,"player-ready-pubsub-key"))}this.l.J("post-all");R("yt-ui-dialog-hide-complete",this);"cancel"==a&&R("yt-ui-dialog-cancelled",this);this.l&&this.l.J("post-"+
a);this.B&&this.B.focus()}};
m.setTitle=function(a){Tc(G("yt-dialog-title",this.f),a)};
m.jb=function(a){P(w(function(){this.Oa||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&K(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
m.vb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
m.X=function(){return this.fa};
m.dispose=function(){$h(this.f)&&this.dismiss("dispose");W(this.F);this.F.length=0;P(w(function(){this.B=null},this),0);
this.V=this.i=null;this.l.dispose();this.l=null;this.fa=!0};
m.Wa=function(a){a.stopPropagation();Ak(this)};
function Ak(a){P(w(function(){this.i&&this.i.focus()},a),0)}
x("yt.ui.Dialog",uk);function Dk(){qh.call(this,"overlay");this.l=this.g=this.i=this.f=null}
y(Dk,qh);ya(Dk);m=Dk.prototype;m.register=function(){Y(this,"click",this.da,"target");Y(this,"click",this.hide,"close");Ek(this)};
m.unregister=function(){Dk.A.unregister.call(this);Z(this,"click",this.da,"target");Z(this,"click",this.hide,"close");this.l&&(Eg(this.l),this.l=null);this.g&&(W(this.g),this.g=null)};
m.da=function(a){if(!this.f||!$h(this.f.f)){var b=this.D(a);a=Fk(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.j(b,"disable-shortcuts")||!1,d=!!this.j(b,"disable-outside-click-dismiss")||!1;this.f=new uk(a,c);this.i=b;var e=G("yt-dialog-fg",a);if(e){var f=this.j(b,"overlay-class")||"",h=this.j(b,"overlay-style")||"default",g=this.j(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,h));f.push(X(this,g));ff(e,f)}this.f.show();R("yt-uix-kbd-nav-move-to",e||a);Ek(this);c||
d||(c=w(function(k){K(k.target,"yt-dialog-base")&&Gk(this)},this),this.g=V(G("yt-dialog-base",a),"click",c));
this.P(b,"overlay-shown");R("yt-uix-overlay-shown",b)}}};
function Ek(a){a.l||(a.l=Cg("yt-uix-overlay-hide",Hk));a.f&&xk(a.f,function(){var b=Dk.w();b.i=null;b.f.dispose();b.f=null})}
function Gk(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.P(b,"overlay-hidden");a.i=null;a.g&&(W(a.g),a.g=null);a.f=null}}
function Fk(a,b){var c;if(a)if(c=G("yt-dialog",a)){var d=E("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=H(b,"yt-dialog"));return c}
function Ik(){var a=Dk.w();if(a.i)a=G("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Fc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=H(a[b],"yt-dialog");if($h(c)){a=a[b];break a}}a=null}return a}
m.hide=function(a){a&&a.disabled||R("yt-uix-overlay-hide")};
function Hk(){Gk(Dk.w())}
m.show=function(a){this.da(a)};var Jk={},Kk=[];function Lk(a){a=H(a,"yt-uix-button-subscription-container");return G("yt-dialog",G("unsubscribe-confirmation-overlay-container",a))}
function Mk(a,b){W(Kk);Kk.length=0;Jk[b]||(Jk[b]=Lk(a));Dk.w().show(Jk[b]);var c=Ik();return new If(function(d){Kk.push(kh(c,function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function Nk(){var a=O("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!O("SESSION_INDEX")&&!O("LOGGED_IN"))}
;function Ok(){qh.call(this,"subscription-button")}
y(Ok,qh);ya(Ok);m=Ok.prototype;m.register=function(){Y(this,"click",this.ea);sh(this,Kh,this.Aa);sh(this,Lh,this.za);sh(this,Mh,this.tb);sh(this,Ph,this.Aa);sh(this,Qh,this.za);sh(this,Rh,this.ub);sh(this,Th,this.rb);sh(this,Uh,this.qb)};
m.unregister=function(){Z(this,"click",this.ea);Ok.A.unregister.call(this)};
m.isSubscribed=function(a){return!!this.j(a,"is-subscribed")};
m.ea=function(a){var b=this.j(a,"href"),c=this.j(a,"insecure");if(b)a=this.j(a,"target")||"_self",window.open(b,a);else if(!c)if(Nk()){b=this.j(a,"channel-external-id");c=this.j(a,"clicktracking");var d=Pk(this,a),e=this.j(a,"parent-url");if(this.j(a,"is-subscribed")){var f=this.j(a,"subscription-id"),h=new Gh(b,f,d,a,c,e);this.j(a,"show-unsub-confirm-dialog")?Mk(a,b).then(function(){U(Oh,h)}):U(Oh,h)}else a=this.j(a,"params"),U(Jh,new Eh(b,d,c,e,void 0,a))}else Qk(this,a)};
m.Aa=function(a){this.O(a.f,this.Fa,!0)};
m.za=function(a){this.O(a.f,this.Fa,!1)};
m.tb=function(a){this.O(a.f,this.Ga,!0,a.g)};
m.ub=function(a){this.O(a.f,this.Ga,!1)};
m.rb=function(a){this.O(a.f,this.Va)};
m.qb=function(a){this.O(a.f,this.Ua)};
m.Ga=function(a,b,c){b?(Gg(a,"is-subscribed","true"),c&&Gg(a,"subscription-id",c)):(Jg(a,"is-subscribed"),Jg(a,"subscription-id"));Rk(this,a)};
function Pk(a,b){if(!a.j(b,"ypc-enabled"))return null;var c=a.j(b,"ypc-item-type"),d=a.j(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
m.Fa=function(a,b){var c=H(a,"yt-uix-button-subscription-container");hf(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Rk(a,b){var c=a.j(b,"style-type"),d=!!a.j(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;hf(b,"yt-uix-button-subscribe"+c,!d);hf(b,e,d);a.j(b,"subscriber-count-tooltip")&&!a.j(b,"subscriber-count-show-when-subscribed")&&(c=X(ci.w()),hf(b,c,!d),b.title=d?"":a.j(b,"subscriber-count-title"));d?P(function(){L(b,"hover-enabled")},1E3):M(b,"hover-enabled")}
m.Va=function(a){var b=!!this.j(a,"ypc-item-type"),c=!!this.j(a,"ypc-item-id");!this.j(a,"ypc-enabled")&&b&&c&&(L(a,"ypc-enabled"),Gg(a,"ypc-enabled","true"))};
m.Ua=function(a){this.j(a,"ypc-enabled")&&(M(a,"ypc-enabled"),Jg(a,"ypc-enabled"))};
function Sk(a,b){return Oa(Fc(X(a)),function(c){return b==this.j(c,"channel-external-id")},a)}
m.Sa=function(a,b,c){var d=Za(arguments,2);z(a,function(e){b.apply(this,Ua(e,d))},this)};
m.O=function(a,b,c){var d=Sk(this,a);this.Sa.apply(this,Ua([d],Za(arguments,1)))};
function Qk(a,b){var c=w(function(d){d.discoverable_subscriptions&&tg("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.ea(b)},a);
ki(c)}
;function Tk(a){this.f=a;this.G=null;O("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Uk(this),V(this.f,"mouseover",w(this.l,this)),V(this.f,"mouseout",w(this.aa,this)),V(this.f,"click",w(this.aa,this)),Vg(Mh,Ja(this.g,!0),this),Vg(Rh,Ja(this.g,!1),this),Vk(this))}
function Uk(a){var b={url:O("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.f,relayOpen:"-1"};a=w(a.i,a);Ah().open(b,a)}
function Vk(a){Nk()||Cg("LOGGED_IN",function(){this.G&&(this.aa(),this.G.close(),this.G=null,Uk(this))},a)}
Tk.prototype.i=function(a){this.G=a;a=Ok.w().isSubscribed(this.f);this.g(a)};
Tk.prototype.l=function(){this.G&&this.G.restyle({show:!0})};
Tk.prototype.aa=function(){this.G&&this.G.restyle({show:!1})};
Tk.prototype.g=function(a){if(this.G){a={isSubscribed:a};try{this.G.send("msg-hovercard-subscription",a,void 0,v("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function Wk(){zh(function(){var a=Gd(E("yt-subscribe"));a={width:a.width,height:a.height};var b=Xk;Ah().ready(a,null,b)})}
function Xk(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=E("yt-subscribe"),c=Ok.w();if(b=G(X(c),b))a&&(Ok.w(),Gg(b,"parent-url",a)),new Tk(b)}}
;function Yk(a){S.call(this,1,arguments);this.f=a}
y(Yk,S);function Zk(a,b){S.call(this,2,arguments);this.g=a;this.f=b}
y(Zk,S);function $k(a,b,c,d){S.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
y($k,S);function al(a,b){S.call(this,1,arguments);this.g=a;this.f=b||null}
y(al,S);function bl(a){S.call(this,1,arguments)}
y(bl,S);var cl=new T("ypc-core-load",Yk),dl=new T("ypc-guide-sync-success",Zk),el=new T("ypc-purchase-success",$k),fl=new T("ypc-subscription-cancel",bl),gl=new T("ypc-subscription-cancel-success",al),hl=new T("ypc-init-subscription",bl);var il=!1,jl=[];function kl(a){a.f?il?U(Nh,a):U(cl,new Yk(function(){U(hl,new bl(a.f))})):ll(a.g,a.l,a.i,a.source,a.params)}
function ml(a){a.f?il?U(Sh,a):U(cl,new Yk(function(){U(fl,new bl(a.f))})):nl(a.g,a.o,a.l,a.i,a.source)}
function ol(a){pl(Va(a.f))}
function ql(a){rl(Va(a.f))}
function sl(a){tl(a.i,a.g,a.f)}
function ul(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&U(Mh,new Fh(b,c,a.f.channelInfo))}
function vl(a){var b=a.f;bb(a.g,function(c,d){U(Mh,new Fh(d,c,b[d]))})}
function wl(a){U(Rh,new Ch(a.g.itemId));a.f&&a.f.length&&(xl(a.f,Rh),xl(a.f,Th))}
function ll(a,b,c,d,e){var f=new Ch(a);U(Kh,f);var h={};h.c=a;c&&(h.eurl=c);d&&(h.source=d);c={};(d=O("PLAYBACK_ID"))&&(c.plid=d);(d=O("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&yl(b,c);Ei("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ia:h,H:c,onSuccess:function(g,k){var l=k.response;U(Mh,new Fh(a,l.id,l.channel_info));l.show_feed_privacy_dialog&&R("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
U:function(){U(Lh,f)}})}
function nl(a,b,c,d,e){var f=new Ch(a);U(Ph,f);var h={};h.c=a;d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=O("PLAYBACK_ID"))&&(d.plid=a);(a=O("EVENT_ID"))&&(d.ei=a);c&&yl(c,d);Ei("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ia:h,H:d,onSuccess:function(){U(Rh,f)},
U:function(){U(Qh,f)}})}
function tl(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Dh(a,b,c);Ei("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",H:d,onError:function(){U(Xh,e)},
onSuccess:function(){U(Wh,e)}})}}
function pl(a){if(a.length){var b=Ya(a,0,40);U("subscription-batch-subscribe-loading");xl(b,Kh);var c={};c.a=b.join(",");var d=function(){U("subscription-batch-subscribe-loaded");xl(b,Lh)};
Ei("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",H:c,onSuccess:function(e,f){d();var h=f.response,g=h.id;if(Aa(g)&&g.length==b.length){var k=h.channel_info_map;z(g,function(l,p){var q=b[p];U(Mh,new Fh(q,l,k[q]))});
a.length?pl(a):U("subscription-batch-subscribe-finished")}},
onError:function(){d();U("subscription-batch-subscribe-failure")}})}}
function rl(a){if(a.length){var b=Ya(a,0,40);U("subscription-batch-unsubscribe-loading");xl(b,Ph);var c={};c.c=b.join(",");var d=function(){U("subscription-batch-unsubscribe-loaded");xl(b,Qh)};
Ei("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",H:c,onSuccess:function(){d();xl(b,Rh);a.length&&rl(a)},
onError:function(){d()}})}}
function xl(a,b){z(a,function(c){U(b,new Ch(c))})}
function yl(a,b){var c=wh(a),d;for(d in c)b[d]=c[d]}
;x("yt.setConfig",tg);x("yt.config.set",tg);x("ytbin.www.subscribeembed.init",function(){il=!0;jl.push(Vg(Jh,kl),Vg(Oh,ml));il||jl.push(Vg(Nh,kl),Vg(Sh,ml),Vg(Hh,ol),Vg(Ih,ql),Vg(Vh,sl),Vg(el,ul),Vg(gl,wl),Vg(dl,vl));var a=Ok.w(),b=X(a);b in uh||(a.register(),rh(a,"yt-uix-init-"+b,a.init),rh(a,"yt-uix-dispose-"+b,a.dispose),uh[b]=a);Wk()});}).call(this);
