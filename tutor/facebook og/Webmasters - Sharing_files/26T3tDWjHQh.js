if (self.CavalryLogger) { CavalryLogger.start_js(["xRh0k"]); }

__d("ICERateTracker",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=5e3;a=function(){__p&&__p();function a(a){this.rateIntervalMS=a,this.startIndex=new Map(),this.trackers=new Map()}var b=a.prototype;b.track=function(a,b){this.trackers.has(a)||this.trackers.set(a,[]);a=this.trackers.get(a)||[];a.push(a.length>0?Math.max(b,a[a.length-1]):b)};b.getRate=function(a,b){__p&&__p();if(!this.trackers.has(a))return 0;var c=this.trackers.get(a)||[];if(c.length===0)return 0;var d=b-this.rateIntervalMS,e=this.startIndex.get(a)||0;while(e<c.length&&c[e]<d)e++;this.startIndex.set(a,e);d=c.length-1;while(d>=0&&c[d]>b)d--;c=Math.max(d-e+1,0);this.$1(a);return c};b.$1=function(a){var b=this.startIndex.get(a)||0;if(b>g){var c=this.trackers.get(a)||[];c=b>=c.length?[]:c.slice(b);this.startIndex.set(a,0);this.trackers.set(a,c)}};return a}();e.exports=a}),null);
__d("ICELogger",["BanzaiLogger","ICELoggerKillswitch","ICERateTracker"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new(b("ICERateTracker"))(1e3),h=new Set();d=(c=b("ICELoggerKillswitch")).blacklisted_events;f=c.blacklisted_keys;var i=new Set(Object.keys(d)),j=new Set(Object.keys(f)),k=c.max_rate,l=!!c.killswitch;function a(a){__p&&__p();var c=a.event,d=a.key,e=a.time_ms;if(l||i.has(c)||j.has(d))return;g.track(d,e);if(g.getRate(d,e)>k){h.has(d)||(h.add(d),b("BanzaiLogger").log("ICELoggerConfig",{event:"throttled",throttled_event:c,throttled_key:d,time_ms:e}));return}h["delete"](d);b("BanzaiLogger").log("ICELoggerConfig",a)}d={log:a};e.exports=d}),null);
__d("AdsPerfTiming",["performance"],(function(a,b,c,d,e,f){"use strict";var g;e.exports={start:(g||(g=b("performance"))).timing&&(g||b("performance")).timing.fetchStart||a._cstart}}),null);
__d("ICEPerformanceTimer",["AdsPerfTiming","ICELogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new Map();function a(a){var c=Date.now();b("ICELogger").log({event:"since_page_load",time_ms:c,duration_ms:c-b("AdsPerfTiming").start,key:a})}function h(a){var c=Date.now();g.set(a,c);b("ICELogger").log({event:"start",time_ms:c,key:a})}function i(a){var c=Date.now(),d=null;g.has(a)&&(d=c-g.get(a),g["delete"](a));b("ICELogger").log({event:"stop",duration_ms:d,time_ms:c,key:a})}function c(a,b){h(a);b=b();i(a);return b}function d(a,b){return function(){h(a);var c=b.apply(void 0,arguments);i(a);return c}}f={sincePageLoad:a,start:h,stop:i,time:c,wrap:d};e.exports=f}),null);
__d("BrowserScroll",[],(function(a,b,c,d,e,f){e.exports={getPageScrollLeft:function(){var a;return window.pageXOffset||((a=document.documentElement)==null?void 0:a.scrollLeft)||((a=document.body)==null?void 0:a.scrollLeft)||0},getPageScrollTop:function(){var a;return window.pageYOffset||((a=document.documentElement)==null?void 0:a.scrollTop)||((a=document.body)==null?void 0:a.scrollTop)||0}}}),null);
__d("StickyController",["CSS","Event","Style","Vector","queryThenMutateDOM"],(function(a,b,c,d,e,f){__p&&__p();a=function(){"use strict";__p&&__p();function a(a,b,c,d){this._element=a,this._marginTop=b,this._onchange=c,this._proxy=d||a.parentNode,this._boundQueryOnScroll=this.shouldFix.bind(this),this._boundMutateOnScroll=this._mutateOnScroll.bind(this)}var c=a.prototype;c.handleScroll=function(){b("queryThenMutateDOM")(this._boundQueryOnScroll,this._boundMutateOnScroll)};c.shouldFix=function(){return b("Vector").getElementPosition(this._proxy,"viewport").y<=this._marginTop};c._mutateOnScroll=function(){var a=this.shouldFix();this.isFixed()!==a&&(b("Style").set(this._element,"top",a?this._marginTop+"px":""),b("CSS").conditionClass(this._element,"fixed_elem",a),this._onchange&&this._onchange(a))};c.start=function(){if(this._event)return;this._event=b("Event").listen(window,"scroll",this.handleScroll.bind(this));setTimeout(this.handleScroll.bind(this),0)};c.stop=function(){this._event&&this._event.remove(),this._event=null};c.isFixed=function(){return b("CSS").hasClass(this._element,"fixed_elem")};return a}();e.exports=a}),null);
__d("BizSiteHeader",["cx","BrowserScroll","CSS","Event","ICEPerformanceTimer","StickyController","Style","ViewportBounds"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=50;a={registerStickyListener:function(a){b("ICEPerformanceTimer").sincePageLoad("unified-nav/js-loaded");b("Style").isFixed(a)?(b("ViewportBounds").addTop(b("ViewportBounds").getTop()+a.offsetHeight),b("ViewportBounds").addPersistentTop(a.offsetHeight)):new(b("StickyController"))(a,0).start();var c=!1,d=function(){var d=b("BrowserScroll").getPageScrollTop();c&&d<h?(c=!c,b("CSS").addClass(a,"_60b-"),b("CSS").removeClass(a,"_60b_")):!c&&d>=h&&(c=!c,b("CSS").removeClass(a,"_60b-"),b("CSS").addClass(a,"_60b_"))};b("Event").listen(window,"scroll",d);d()}};e.exports=a}),null);
__d("BanzaiConsts",[],(function(a,b,c,d,e,f){a={SEND:"Banzai:SEND",OK:"Banzai:OK",ERROR:"Banzai:ERROR",SHUTDOWN:"Banzai:SHUTDOWN",VITAL_WAIT:1e3,BASIC_WAIT:5e3,EXPIRY:30*6e4,LAST_STORAGE_FLUSH:"banzai:last_storage_flush",STORAGE_FLUSH_INTERVAL:12*60*6e4,POST_READY:0,POST_INFLIGHT:1,POST_SENT:2};e.exports=a}),null);
__d("BanzaiAdapter",["Arbiter","BanzaiConsts","CurrentUser","QueryString","Run","SiteData","URI","UserAgent","ZeroRewrites","getAsyncParams","BanzaiConfig","requireCond","cr:695720"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i=[],j=new(b("Arbiter"))(),k="/ajax/bz",l="POST",m={config:b("BanzaiConfig"),endpoint:k,useBeacon:!0,getUserID:function(){return b("CurrentUser").getID()},inform:function(a){j.inform(a)},subscribe:function(a,b){return j.subscribe(a,b)},cleanup:function(){var a=i;i=[];a.forEach(function(a){a.readyState<4&&a.abort()})},readyToSend:function(){return b("UserAgent").isBrowser("IE <= 8")||navigator.onLine},send:function(a,c,d,e){__p&&__p();var f=b("ZeroRewrites").rewriteURI(new(g||(g=b("URI")))(k)),j=b("ZeroRewrites").getTransportBuilderForURI(f)();j.open(l,f.toString(),!0);j.setRequestHeader("Content-Type","application/x-www-form-urlencoded");j.onreadystatechange=function(){if(j.readyState>=4){var a=i.indexOf(j);a>=0&&i.splice(a,1);try{a=j.status}catch(b){a=0}a==200?(c&&c(),e||m.inform((h||(h=b("BanzaiConsts"))).OK)):(d&&d(a),e||m.inform((h||(h=b("BanzaiConsts"))).ERROR))}};i.push(j);j.send(m.prepForTransit(a))},addRequestAuthData:function(a){return a},prepForTransit:function(a){var c=b("getAsyncParams")(l);c.q=JSON.stringify(a);c.ts=Date.now();c.ph=b("SiteData").push_phase;return b("QueryString").encode(c)},prepWadForTransit:function(a){if(a.snappy==null||a.snappy===!0){var c=Date.now(),d=JSON.stringify(a.posts),e=b("cr:695720").compressStringToSnappy(d);e!=null&&e.length<d.length?(a.posts=e,a.snappy_ms=Date.now()-c):delete a.snappy}},setHooks:function(a){},setUnloadHook:function(a){b("Run").onAfterUnload(a._unload)},onUnload:function(a){b("Run").onAfterUnload(a)},isOkToSendViaBeacon:function(){return!0}};e.exports=m}),null);
__d("XLynxAsyncCallbackController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/si/linkclick/ajax_callback/",{lynx_uri:{type:"String"}})}),null);
__d("FBLynxLogging",["AsyncRequest","BanzaiODS","XLynxAsyncCallbackController"],(function(a,b,c,d,e,f){"use strict";a={log:function(a){var c=b("XLynxAsyncCallbackController").getURIBuilder().getURI();new(b("AsyncRequest"))(c).setData({lynx_uri:a}).setErrorHandler(function(a){a=a.getError();b("BanzaiODS").bumpEntityKey(2966,"linkshim","click_log.post.fail."+a)}).setTransportErrorHandler(function(a){a=a.getError();b("BanzaiODS").bumpEntityKey(2966,"linkshim","click_log.post.transport_fail."+a)}).send()}};e.exports=a}),null);
__d("FBLynxBase",["FBLynxLogging","LinkshimHandlerConfig","URI","$","isLinkshimURI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;function h(a){if(!b("isLinkshimURI")(a))return null;a=a.getQueryData().u;return!a?null:a}var i={logAsyncClick:function(a){i.swapLinkWithUnshimmedLink(a);a=a.getAttribute("data-lynx-uri");if(!a)return;b("FBLynxLogging").log(a)},originReferrerPolicyClick:function(a){var c=b("$")("meta_referrer");c.content=b("LinkshimHandlerConfig").switched_meta_referrer_policy;i.logAsyncClick(a);setTimeout(function(){c.content=b("LinkshimHandlerConfig").default_meta_referrer_policy},100)},swapLinkWithUnshimmedLink:function(a){var c=a.href,d=h(new(g||(g=b("URI")))(c));if(!d)return;a.setAttribute("data-lynx-uri",c);a.href=d},revertSwapIfLynxURIPresent:function(a){var b=a.getAttribute("data-lynx-uri");if(!b)return;a.removeAttribute("data-lynx-uri");a.href=b}};e.exports=i}),null);
__d("FBLynx",["Base64","Event","FBLynxBase","LinkshimHandlerConfig","Parent","URI"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=(g||(g=b("URI"))).goURIOnWindow,i={alreadySetup:!1,setupDelegation:function(a){__p&&__p();a===void 0&&(a=!1);if(document.body==null){if(a)return;setTimeout(function(){i.setupDelegation(!0)},100);return}if(i.alreadySetup)return;i.alreadySetup=!0;var c=function(a){__p&&__p();var c=i.getMaybeLynxLink(a.target);if(!c)return;var d=c[0];c=c[1];var e=c,f=new(g||(g=b("URI")))(c.href),j;if(b("LinkshimHandlerConfig").ghl_param_link_shim&&d!=="hover"&&(c.dataset&&c.dataset.attributes)){j=b("Base64").decodeObject(c.dataset.attributes);if(j&&j.open_link){var k;for(k in j)k!=="open_link"&&f.addQueryData(k,j[k]);k=c.cloneNode(!0);k.href=f.toString();e=k}}switch(d){case"async":case"asynclazy":b("FBLynxBase").logAsyncClick(e);break;case"origin":b("FBLynxBase").originReferrerPolicyClick(e);break;case"hover":i.hoverClick(e);break}b("LinkshimHandlerConfig").ghl_param_link_shim&&d!=="hover"&&j&&j.open_link&&(a.preventDefault(),h(f,window.open("",e.target),!0))};b("Event").listen(document.body,"click",c);b("LinkshimHandlerConfig").middle_click_requires_event&&b("Event").listen(document.body,"mouseup",function(a){a.button==1&&c(a)});b("Event").listen(document.body,"mouseover",function(a){a=i.getMaybeLynxLink(a.target);if(!a)return;var b=a[0];a=a[1];switch(b){case"async":case"asynclazy":case"origin":case"hover":i.mouseover(a);break}});b("Event").listen(document.body,"contextmenu",function(a){a=i.getMaybeLynxLink(a.target);if(!a)return;var b=a[0];a=a[1];switch(b){case"async":case"hover":case"origin":i.contextmenu(a);break;case"asynclazy":break}})},getMaybeLynxLink:function(a){a=b("Parent").byAttribute(a,"data-lynx-mode");if(a instanceof HTMLAnchorElement){var c=a.getAttribute("data-lynx-mode");switch(c){case"async":case"asynclazy":case"hover":case"origin":return[c,a];default:return null}}return null},hoverClick:function(a){b("FBLynxBase").revertSwapIfLynxURIPresent(a)},mouseover:function(a){b("FBLynxBase").swapLinkWithUnshimmedLink(a)},contextmenu:function(a){b("FBLynxBase").revertSwapIfLynxURIPresent(a)}};e.exports=i}),null);
__d("unmountComponentOnTransition",["Arbiter","BanzaiODS","ContextualComponent","PageEvents","ReactDOM","emptyFunction","gkx","requestIdleCallbackAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=[],h=null;function i(a){g.unshift(a),j()}function j(){if(h!==null)return;h=b("requestIdleCallbackAcrossTransitions")(function(a){h=null;while(g.length>0&&a.timeRemaining()>0)b("ReactDOM").unmountComponentAtNode(g.pop());g.length>0&&j()})}function k(a,c){b("BanzaiODS").bumpEntityKey(2966,"core.www.react_component_register_unmount",a+"."+c)}function a(a,c){__p&&__p();function d(){a!=null&&Object.prototype.hasOwnProperty.call(a,"setState")&&(a.setState=b("emptyFunction"),a.shouldComponentUpdate=b("emptyFunction").thatReturnsFalse),i(c)}var e=!1;if(b("gkx")("678686")){var f=b("ContextualComponent").closestToNode(c);if(f!=null){k("contextual_component","found");f.onUnmount(function(){d()});return}e=!0}e?k("contextual_component","not_found_fallback"):k("arbiter","default");var g=b("Arbiter").subscribe(b("PageEvents").AJAXPIPE_ONBEFORECLEARCANVAS,function(a,b){a=b.canvasID;if(a!=="content"&&a!=="content_container")return;d();g.unsubscribe()})}e.exports=a}),null);
__d("BanzaiBase",["BanzaiAdapter","BanzaiConsts","BanzaiLazyQueue","ErrorUtils","FBLogger"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i="categorized_ods",j="blue_send_via_beacon_failure";c="blue_messages_received";d="blue_messages_sent";var k="blue_total_messages_received",l="blue_total_messages_sent",m=0,n=1,o=2,p={received:c,sent:d},q=null,r,s=[],t=null,u=[],v=0,w=0,x=0,y=0;function z(a,b){a.__meta.status=m,a[3]=(a[3]||0)+1,!a.__meta.retry&&b>=400&&b<600&&s.push(a)}var A={_canSend:function(a){return a[2]>=A._getEventTime()-(b("BanzaiAdapter").config.EXPIRY||(g||(g=b("BanzaiConsts"))).EXPIRY)},_clearPostBuffer:function(){s=[]},_gatherWadsAndPostsFromBuffer:function(a,b,c,d,e){__p&&__p();e===void 0&&(e=null);var g={},h=d.length,i=!1;d=d.filter(function(d,f){__p&&__p();if(i)return!0;var j=d.__meta;if(j.status>=o||!A._canSend(d))return!1;if(j.status>=n)return!0;var k=j.compress!=null?j.compress:!0,l=(j.webSessionId!=null?j.webSessionId:"null")+(j.userID!=null?j.userID:"null")+(j.appID!=null?j.appID:"null")+(k?"compress":""),m=g[l];m||(m={user:j.userID,webSessionId:j.webSessionId,app_id:j.appID,posts:[],snappy:k},g[l]=m,a.push(m));j.status=n;m.posts.push(d);b.push(d);e!=null&&e>0&&(e--,e==0&&(i=!0,f<h-1&&A._schedule(0)));return c&&j.retry});y+=b.length;v!==0&&A.counterTracker("received",v,a,b);v=0;f=w+b.length;f!==0&&A.counterTracker("sent",f,a,b);w=0;return d},_getEventTime:function(){return Date.now()},_getWebSessionId:function(){return"0"},_getPostBuffer:function(){return s},_getStorage:function(){return{store:function(){},restore:function(){},flush:function(){}}},_getUserId:function(){return"0"},_getAppId:function(){return null},_initialize:function(){},_processCallbacksAndSendViaBeacon:function(){__p&&__p();var c=[];u.forEach(function(a){var b=a.cb();b.forEach(function(b){var d=a.route;if(d){d=A._wrapData(d,b,A._getEventTime());d.__meta.onSuccess=a.onSuccess;d.__meta.onFailure=a.onFailure;c.push(d)}})});u=[];var d=[],e=[];A._gatherWadsAndPostsFromBuffer(d,e,!0,c);if(d.length>0){d[0].send_method="beacon";d.map(b("BanzaiAdapter").prepWadForTransit);d=new Blob([b("BanzaiAdapter").addRequestAuthData(b("BanzaiAdapter").prepForTransit(d))],{type:"application/x-www-form-urlencoded"});d=a.navigator.sendBeacon(A.adapter.endpoint,d);d?e.forEach(function(a){return a.__meta&&a.__meta.onSuccess&&a.__meta.onSuccess()}):e.forEach(function(a){return a.__meta&&a.__meta.onFailure&&a.__meta.onFailure()})}},_resetPostStatus:function(a){a.__meta.status=m},_restore:function(a){a=A._getStorage();(h||(h=b("ErrorUtils"))).applyWithGuard(a.restore,a);A._schedule(b("BanzaiAdapter").config.RESTORE_WAIT||(g||(g=b("BanzaiConsts"))).VITAL_WAIT)},_schedule:function(b){var c=A._getEventTime()+b;if(!r||c<r){r=c;q&&a.clearTimeout(q);q=a.setTimeout(function(){A._sendWithCallbacks()},b);return!0}return!1},_sendWithCallbacks:function(a,c,d){__p&&__p();r=null;A._schedule(A.BASIC.delay);if(!b("BanzaiAdapter").readyToSend()){c&&c();return}if(A.isEnabled("flush_storage_periodically")){var e=A._getStorage();(h||(h=b("ErrorUtils"))).applyWithGuard(e.flush,e)}b("BanzaiAdapter").inform((g||(g=b("BanzaiConsts"))).SEND);e=[];var f=[];s=A._gatherWadsAndPostsFromBuffer(e,f,!0,s,d);if(e.length<=0){b("BanzaiAdapter").inform((g||(g=b("BanzaiConsts"))).OK);a&&a();return}e[0].trigger=t;t=null;e[0].send_method="ajax";e.map(b("BanzaiAdapter").prepWadForTransit);b("BanzaiAdapter").send(e,function(){f.forEach(function(a){a.__meta.status=o,a.__meta.callback&&a.__meta.callback()}),a&&a()},function(a){f.forEach(function(b){z(b,a)}),c&&c()})},_store:function(a){a=A._getStorage();(h||(h=b("ErrorUtils"))).applyWithGuard(a.store,a)},_testState:function(){return{postBuffer:s,triggerRoute:t}},_tryToSendViaBeacon:function(){__p&&__p();if(!(navigator&&navigator.sendBeacon&&b("BanzaiAdapter").isOkToSendViaBeacon()))return!1;var c=[],d=[];s=A._gatherWadsAndPostsFromBuffer(c,d,!1,s);if(c.length<=0)return!1;c[0].send_method="beacon";c.map(b("BanzaiAdapter").prepWadForTransit);c=new Blob([b("BanzaiAdapter").addRequestAuthData(b("BanzaiAdapter").prepForTransit(c))],{type:"application/x-www-form-urlencoded"});c=a.navigator.sendBeacon(A.adapter.endpoint,c);if(!c){d.forEach(function(a){s.push(a)});s.push(A._wrapData(i,{2979:{banzai:(c={},c[j]=[1],c)}},A._getEventTime()));return!1}return!0},_unload:function(){var a,c;a=A._wrapData(i,{2979:{banzai:(a={},a[k]=[x],a)}},A._getEventTime(),!0);c=A._wrapData(i,{2979:{banzai:(c={},c[l]=[y],c)}},A._getEventTime(),!0);s.unshift(a,c);navigator&&navigator.sendBeacon&&b("BanzaiAdapter").isOkToSendViaBeacon()&&A._processCallbacksAndSendViaBeacon();b("BanzaiAdapter").cleanup();b("BanzaiAdapter").inform((g||(g=b("BanzaiConsts"))).SHUTDOWN);s.length>0&&((!A.adapter.useBeacon||!A._tryToSendViaBeacon())&&A._store(!1))},_wrapData:function(a,b,c,d,e){a=[a,b,c,0,e];a.__meta={webSessionId:A._getWebSessionId(),userID:A._getUserId(),appID:A._getAppId(),retry:d===!0,status:m};return a},BASIC:{delay:b("BanzaiAdapter").config.MAX_WAIT||(g||(g=b("BanzaiConsts"))).BASIC_WAIT},BASIC_WAIT:(g||(g=b("BanzaiConsts"))).BASIC_WAIT,ERROR:g.ERROR,OK:g.OK,SEND:g.SEND,SHUTDOWN:g.SHUTDOWN,VITAL:{delay:b("BanzaiAdapter").config.MIN_WAIT||(g||(g=b("BanzaiConsts"))).VITAL_WAIT},VITAL_WAIT:g.VITAL_WAIT,adapter:b("BanzaiAdapter"),canUseNavigatorBeacon:function(){return Boolean(navigator&&navigator.sendBeacon&&b("BanzaiAdapter").isOkToSendViaBeacon())},counterTracker:function(a,b,c,d){var e;b=b;a=A._wrapData(i,{2979:{banzai:(e={},e[p[a]]=[b],e)}},A._getEventTime(),!0);d.push(a);c.push({webSessionId:A._getWebSessionId(),posts:[a],snappy:!0,user:A._getUserId(),app_id:A._getAppId()})},flush:function(b,c){a.clearTimeout(q),q=null,A._sendWithCallbacks(b,c)},isEnabled:function(a){return Boolean(b("BanzaiAdapter").config.gks&&b("BanzaiAdapter").config.gks[a])},post:function(a,c,d){__p&&__p();var e;a||b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");e=(e=JSON.stringify(c))!=null?e:"";var f=d==null?void 0:d.retry;if(b("BanzaiAdapter").config.disabled)return;var h=b("BanzaiAdapter").config.blacklist;if(h&&(h.indexOf&&(typeof h.indexOf=="function"&&h.indexOf(a)!=-1)))return;h=e.length;v++;x++;var i=A._wrapData(a,c,A._getEventTime(),f,h);(d==null?void 0:d.callback)&&(i.__meta.callback=d==null?void 0:d.callback);(d==null?void 0:d.compress)!=null&&(i.__meta.compress=d==null?void 0:d.compress);e=d==null?void 0:d.delay;e==null&&(e=(g||(g=b("BanzaiConsts"))).BASIC_WAIT);if(d==null?void 0:d.signal){i.__meta.status=n;c=[{user:A._getUserId(),webSessionId:A._getWebSessionId(),app_id:A._getAppId(),posts:[i],trigger:a}];b("BanzaiAdapter").send(c,function(){y++,w++,i.__meta.status=o,i.__meta.callback&&i.__meta.callback()},function(a){z(i,a)},!0);if(!f)return}s.push(i);(A._schedule(e)||!t)&&(t=a);h=b("BanzaiLazyQueue").flushQueue();h.forEach(function(a){return A.post.apply(A,a)})},registerToSendWithBeacon:function(a,c,d,e){if(!(navigator&&navigator.sendBeacon&&b("BanzaiAdapter").isOkToSendViaBeacon()))return!1;if(!a){b("FBLogger")("banzai").mustfix("Banzai.registerToSendWithBeacon called without specifying a route");return!1}u.push({cb:c,route:a,onSuccess:d,onFailure:e});return!0},subscribe:b("BanzaiAdapter").subscribe};e.exports=A}),null);
__d("BanzaiStreamPayloads",[],(function(a,b,c,d,e,f){"use strict";var g={};a={addPayload:function(a,b){g[a]=b},removePayload:function(a){delete g[a]},unload:function(a){Object.keys(g).forEach(function(b){b=g[b];a(b.route,b.payload)})}};e.exports=a}),null);
__d("SetIdleTimeoutAcrossTransitions",["NavigationMetrics","cancelIdleCallback","clearTimeout","nullthrows","requestIdleCallbackAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=!1,h=new Map();c={start:function(a,c){if(g){var d=b("setTimeoutAcrossTransitions")(function(){var c=b("requestIdleCallbackAcrossTransitions")(function(){a(),h["delete"](c)});h.set(d,c)},c);return d}else return b("setTimeoutAcrossTransitions")(a,c)},clear:function(a){b("clearTimeout")(a),h.has(a)&&(b("cancelIdleCallback")(b("nullthrows")(h.get(a))),h["delete"](a))}};b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(b,c){c.event==="all_pagelets_loaded"&&(g=!!a.requestIdleCallback)});e.exports=c}),null);
__d("WebStorageMutex",["WebStorage","clearTimeout","pageID","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g,h=null,i=!1,j=b("pageID");function k(){i||(i=!0,h=(g||(g=b("WebStorage"))).getLocalStorage());return h}a=function(){"use strict";__p&&__p();function a(a){this.name=a}a.testSetPageID=function(a){j=a};var c=a.prototype;c.$1=function(){if(!k())return j;var a=k().getItem("mutex_"+this.name);a=a?a.split(":"):null;return a&&a[1]>=Date.now()?a[0]:null};c.$2=function(a){if(!k())return;a=Date.now()+(a||1e4);(g||(g=b("WebStorage"))).setItemGuarded(k(),"mutex_"+this.name,j+":"+a)};c.hasLock=function(){return this.$1()==j};c.lock=function(a,c,d){var e=this;this.$3&&b("clearTimeout")(this.$3);j==(this.$1()||j)&&this.$2(d);this.$3=b("setTimeoutAcrossTransitions")(function(){e.$3=null;var b=e.hasLock()?a:c;b&&b(e)},0)};c.unlock=function(){this.$3&&b("clearTimeout")(this.$3),k()&&this.hasLock()&&k().removeItem("mutex_"+this.name)};return a}();e.exports=a}),null);
__d("BanzaiNew",["BanzaiBase","BanzaiConsts","BanzaiStreamPayloads","CurrentUser","ExecutionEnvironment","FBJSON","NavigationMetrics","SetIdleTimeoutAcrossTransitions","TimeSlice","Visibility","WebSession","WebStorage","emptyFunction","isInIframe","lowerFacebookDomain","performanceAbsoluteNow","WebStorageMutex"],(function(a,b,c,d,e,f){__p&&__p();var g,h,i,j="bz:",k={_getStorage:(c=b("BanzaiBase"))._getStorage,_getWebSessionId:c._getWebSessionId,_getUserId:c._getUserId,_getAppId:c._getAppId,_initialize:c._initialize,_schedule:c._schedule,flush:c.flush,_unload:c._unload,post:c.post},l=b("isInIframe")(),m=null,n,o,p,q,r=!1;function s(){r||(r=!0,q=(g||(g=b("WebStorage"))).getLocalStorage());return q}function t(){var a="check_quota";try{var b=s();if(!b)return!1;b.setItem(a,a);b.removeItem(a);return!0}catch(a){return!1}}c._getStorage=function(){__p&&__p();p||(!l?p={store:function(){var a=s(),c=b("BanzaiBase")._getPostBuffer().filter(function(a){return a.__meta.status<2});if(!a||c.length<=0)return;c=c.map(function(a){return[a[0],a[1],a[2],a[3]||0,a[4],a.__meta]});b("BanzaiBase")._clearPostBuffer();(g||(g=b("WebStorage"))).setItemGuarded(a,j+b("BanzaiBase")._getWebSessionId()+"."+b("BanzaiBase")._getEventTime(),b("FBJSON").stringify(c))},restore:function(){__p&&__p();var a=s();if(!a)return;var c=b("WebStorageMutex"),d=function(c){__p&&__p();var d=[];for(var e=0;e<a.length;e++){var f=a.key(e);f.indexOf(j)===0&&f.indexOf("bz:__")!==0&&d.push(f)}d.forEach(function(c){__p&&__p();var d=a.getItem(c);a.removeItem(c);if(!d)return;c=b("FBJSON").parse(d);c.forEach(function(a){if(!a)return;var c=a.__meta=a.pop(),d=b("BanzaiBase")._canSend(a);if(!d)return;d=b("CurrentUser").getID();(c.userID===d||d==="0")&&(b("BanzaiBase")._resetPostStatus(a),b("BanzaiBase")._getPostBuffer().push(a))})});c&&c.unlock()};t()?new c("banzai").lock(d):b("SetIdleTimeoutAcrossTransitions").start(d,0)},flush:function(){var a=s();if(a){m===null&&(m=parseInt(a.getItem((h||(h=b("BanzaiConsts"))).LAST_STORAGE_FLUSH),10));var c=m&&(i||(i=b("performanceAbsoluteNow")))()-m>=(h||(h=b("BanzaiConsts"))).STORAGE_FLUSH_INTERVAL;c&&b("BanzaiBase")._restore(!1);(c||!m)&&(m=(i||(i=b("performanceAbsoluteNow")))(),(g||(g=b("WebStorage"))).setItemGuarded(a,(h||(h=b("BanzaiConsts"))).LAST_STORAGE_FLUSH,m.toString()))}}}:p={store:b("emptyFunction"),restore:b("emptyFunction"),flush:b("emptyFunction")});return p};c._getWebSessionId=function(){return b("WebSession").getId()};c._getUserId=function(){return b("CurrentUser").getID()};c._getAppId=function(){return b("CurrentUser").getAppID()};c._initialize=function(){b("ExecutionEnvironment").canUseDOM&&(b("BanzaiBase").adapter.useBeacon&&b("Visibility").isSupported()?(b("Visibility").addListener(b("Visibility").HIDDEN,function(){b("BanzaiBase")._getPostBuffer().length>0&&(b("BanzaiBase")._tryToSendViaBeacon()||b("BanzaiBase")._store(!1))}),b("BanzaiBase").isEnabled("enable_client_logging_clear_on_visible")&&b("Visibility").addListener(b("Visibility").VISIBLE,function(){b("BanzaiBase")._tryToSendViaBeacon()||b("BanzaiBase")._restore(!1)})):b("BanzaiBase").adapter.setHooks(b("BanzaiBase")),b("BanzaiBase").adapter.setUnloadHook(b("BanzaiBase")),b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE,function(a,c){if(c.pageType!=="normal")return;b("BanzaiBase")._restore(!1);b("NavigationMetrics").removeCurrentListener()}))};c._getEventTime=function(){return(i||(i=b("performanceAbsoluteNow")))()};var u=b("TimeSlice").guard(function(){n=null,b("BanzaiBase")._sendWithCallbacks()},"Banzai.send",{propagationType:b("TimeSlice").PropagationType.ORPHAN});c._schedule=function(a){__p&&__p();var c=b("BanzaiBase")._getEventTime()+a;if(!n||c<n){n=c;b("SetIdleTimeoutAcrossTransitions").clear(o);c=function(){o=b("SetIdleTimeoutAcrossTransitions").start(u,a)};c();return!0}return!1};c.flush=function(a,c){b("SetIdleTimeoutAcrossTransitions").clear(o),n=null,b("BanzaiBase")._sendWithCallbacks(a,c)};c._unload=function(){b("BanzaiStreamPayloads").unload(b("BanzaiBase").post),k._unload()};c.post=function(c,d,e){__p&&__p();if(b("BanzaiBase").adapter.config.disabled)return;if(!b("ExecutionEnvironment").canUseDOM)return;if(l&&b("lowerFacebookDomain").isValidDocumentDomain()){var f;try{f=a.top.require("Banzai")}catch(a){f=null}if(f){f.post.apply(f,arguments);return}}k.post(c,d,e)};c._initialize();e.exports=c}),null);
__d("LeftRight.react",["cx","invariant","React","joinClasses"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getChildrenArr=function(){var a=[];b("React").Children.forEach(this.props.children,function(b){return a.push(b)});return a};d.render=function(){__p&&__p();var a=this.getChildrenArr();a.length===1||a.length===2||h(0,5615);var d=this.props.direction||c.DIRECTION.both,e=d===c.DIRECTION.both,f=e||d===c.DIRECTION.left?"_ohe lfloat":"";e=e||d===c.DIRECTION.right?"_ohf rfloat":"";f=b("React").jsx("div",{className:f,children:a[0]},"left");e=a.length<2?null:b("React").jsx("div",{className:e,children:a[1]},"right");a=d===c.DIRECTION.right&&e?[e,f]:[f,e];d=this.props;f=d.root;e=babelHelpers.objectWithoutPropertiesLoose(d,["root"]);return b("React").jsx("div",babelHelpers["extends"]({},e,{ref:f,className:b("joinClasses")(this.props.className,"clearfix"),children:a}))};return c}(b("React").Component);a.DIRECTION={left:"left",right:"right",both:"both"};e.exports=a}),null);
__d("ReactRenderer",["invariant","React","ReactDOM","$","nullthrows","unmountComponentOnTransition"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=8;function i(a,c,d){a=b("ReactDOM").render(a,c,d);b("unmountComponentOnTransition")(a,c);return a}function j(a,c,d,e){a=b("React").createElement(a,c);return i(a,d,e)}function k(a,c,d,e){a=b("React").createElement(a,c);return l(a,d,e)}function l(a,c,d){return b("ReactDOM").render(a,c,d)}function a(a,c,d,e){return j(a,c,b("$")(d),e)}function c(a,c,d,e){return k(a,c,b("$")(d),e)}function d(a){__p&&__p();var c=a.constructor,d=a.props,e=a.bigPipeContext,f=a.dummyDeferredElement,g=a.acrossTransitions,h=a.preloader,i=e?e.registerToBlockDisplayUntilDone_DONOTUSE():function(){},j=document.createElement("div");g||(d.ref=function(a){b("unmountComponentOnTransition")(a,j)});var k=b("React").createElement(c,d);a=b("ReactDOM").createRoot(j);var l=a.createBatch();e=function(){return l.render(k)};if(h!=null){var m=h.getContextProvider();m&&(e=function(){l.render(b("React").jsx(m,{value:h,children:k}))});h.onLoaded(e).onError(e)}else e();l.then(function(){f.then(function(a){n(a,j),l.commit()}),i()})}function m(a,c,d,e,f){__p&&__p();var g=f?f.getContextProvider():null;g&&(a=b("React").jsx(g,{value:f,children:a}));g=d?l:i;if(e){f=b("nullthrows")(c.parentNode,"Error: container doesn't have a parent");return g(a,f)}d=document.createComment(" react-mount-point-unstable ");n(c,d);return g(a,d)}function f(a){var c=a.constructor,d=a.props,e=a.dummyElem,f=a.acrossTransitions,g=a.clobberSiblings;a=a.preloader;return m(b("React").createElement(c,d),e,f,g,a)}function n(a,c){a.tagName==="NOSCRIPT"||g(0,3540);var d=b("nullthrows")(a.parentNode,"Error: container doesn't have a parent"),e=a.previousSibling;if(e&&e.nodeType===h&&e.nodeValue===" end-react-placeholder "){do d.removeChild(e),e=b("nullthrows")(a.previousSibling,"Error: malformed placeholder");while(!(e.nodeType===h&&e.nodeValue===" begin-react-placeholder "));d.removeChild(e)}d.replaceChild(c,a)}e.exports={renderComponent:i,constructAndRenderAsyncComponentIntoComment_DO_NOT_USE:d,constructAndRenderComponent:j,constructAndRenderComponentByID:a,constructAndRenderComponentAcrossTransitions:k,constructAndRenderComponentByIDAcrossTransitions:c,constructAndRenderComponentIntoComment_DO_NOT_USE:f,constructAndRenderElementIntoComment_DO_NOT_USE:m,constructAndRenderComponent_DEPRECATED:k,constructAndRenderComponentByID_DEPRECATED:c}}),null);
__d("cancelIdleCallbackBlue",["IdleCallbackImplementation","TimerStorage","TimeSlice"],(function(a,b,c,d,e,f){var g=b("TimerStorage").IDLE_CALLBACK;function a(a){b("TimerStorage").unset(g,a);var c=g+String(a);b("TimeSlice").cancelWithToken(c);b("IdleCallbackImplementation").cancelIdleCallback(a)}e.exports=a}),null);
__d("SchedulerFeatureFlags",["gkx"],(function(a,b,c,d,e,f){a={enableSchedulerDebugging:!0,enableIsInputPending:b("gkx")("1029033"),enableProfiling:b("gkx")("1099893"),enableMessageLoopImplementation:!0};e.exports=a}),null);
__d("Scheduler-dev",["SchedulerFeatureFlags"],(function(a,b,c,d,e,f){"use strict"}),null);
__d("Scheduler-profiling",["SchedulerFeatureFlags"],(function(b,c,d,e,f,g){"use strict";__p&&__p();Object.defineProperty(g,"__esModule",{value:!0});d=c("SchedulerFeatureFlags").enableIsInputPending;var h=c("SchedulerFeatureFlags").enableSchedulerDebugging,i=c("SchedulerFeatureFlags").enableProfiling,j,k,l,m;if("undefined"===typeof window||"function"!==typeof MessageChannel){var n=null,o=null,p=function b(){if(null!==n)try{var c=g.unstable_now();n(!0,c);n=null}catch(c){throw setTimeout(b,0),c}},q=Date.now();g.unstable_now=function(){return Date.now()-q};j=function(b){null!==n?setTimeout(j,0,b):(n=b,setTimeout(p,0))};k=function(b,c){o=setTimeout(b,c)};l=function(){clearTimeout(o)};m=function(){return!1};e=g.unstable_forceFrameRate=function(){}}else{var r=window.performance,s=window.Date,t=window.setTimeout,ba=window.clearTimeout;f=window.requestAnimationFrame;c=window.cancelAnimationFrame;"undefined"!==typeof console&&("function"!==typeof f&&!1,"function"!==typeof c&&!1);if("object"===typeof r&&"function"===typeof r.now)g.unstable_now=function(){return r.now()};else{var ca=s.now();g.unstable_now=function(){return s.now()-ca}}var u=!1,v=null,w=-1,x=5,y=0,z=!1;if(d&&void 0!==navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending){var da=navigator.scheduling;m=function(){var b=g.unstable_now();return b>=y?z||da.isInputPending()?!0:b>=y+300:!1};e=function(){z=!0}}else m=function(){return g.unstable_now()>=y},e=function(){};g.unstable_forceFrameRate=function(b){0>b||125<b?!1:x=0<b?Math.floor(1e3/b):33.33};f=new MessageChannel();var A=f.port2;f.port1.onmessage=function(){if(null!==v){var b=g.unstable_now();y=b+x;try{v(!0,b)?A.postMessage(null):(u=!1,v=null)}catch(b){throw A.postMessage(null),b}}else u=!1;z=!1};j=function(b){v=b,u||(u=!0,A.postMessage(null))};k=function(b,c){w=t(function(){b(g.unstable_now())},c)};l=function(){ba(w),w=-1}}function B(b,c){var d=b.length;b.push(c);a:for(;;){var e=Math.floor((d-1)/2),f=b[e];if(void 0!==f&&0<E(f,c))b[e]=c,b[d]=f,d=e;else break a}}function C(b){b=b[0];return void 0===b?null:b}function D(b){__p&&__p();var c=b[0];if(void 0!==c){var d=b.pop();if(d!==c){b[0]=d;a:for(var e=0,f=b.length;e<f;){var g=2*(e+1)-1,h=b[g],i=g+1,j=b[i];if(void 0!==h&&0>E(h,d))void 0!==j&&0>E(j,h)?(b[e]=j,b[i]=d,e=i):(b[e]=h,b[g]=d,e=g);else if(void 0!==j&&0>E(j,d))b[e]=j,b[i]=d,e=i;else break a}}return c}return null}function E(b,c){var d=b.sortIndex-c.sortIndex;return 0!==d?d:b.id-c.id}var F=0,G=0;c=i?"function"===typeof SharedArrayBuffer?new SharedArrayBuffer(4*Int32Array.BYTES_PER_ELEMENT):"function"===typeof ArrayBuffer?new ArrayBuffer(4*Int32Array.BYTES_PER_ELEMENT):null:null;var H=i&&null!==c?new Int32Array(c):[];i&&(H[0]=0,H[3]=0,H[1]=0);var I=0,J=null,K=null,L=0;function M(b){__p&&__p();if(null!==K){var c=L;L+=b.length;if(L+1>I){I*=2;if(524288<I){N();return}var d=new Int32Array(4*I);d.set(K);J=d.buffer;K=d}K.set(b,c)}}function b(){I=131072,J=new ArrayBuffer(4*I),K=new Int32Array(J),L=0}function N(){var b=J;I=0;K=J=null;L=0;return b}function O(b,c){i&&(H[3]++,null!==K&&M([1,1e3*c,b.id,b.priorityLevel]))}var P=[],Q=[],ea=1,R=!1,S=null,T=3,U=!1,V=!1,W=!1;function X(b){for(var c=C(Q);null!==c;){if(null===c.callback)D(Q);else if(c.startTime<=b)D(Q),c.sortIndex=c.expirationTime,B(P,c),i&&(O(c,b),c.isQueued=!0);else break;c=C(Q)}}function Y(b){W=!1;X(b);if(!V)if(null!==C(P))V=!0,j(Z);else{var c=C(Q);null!==c&&k(Y,c.startTime-b)}}function Z(c,b){__p&&__p();i&&i&&null!==K&&M([8,1e3*b,G]);V=!1;W&&(W=!1,l());U=!0;var d=T;try{if(i)try{return $(c,b)}catch(b){if(null!==S){var e=g.unstable_now();c=S;i&&(H[0]=0,H[1]=0,H[3]--,null!==K&&M([3,1e3*e,c.id]));S.isQueued=!1}throw b}else return $(c,b)}finally{S=null,T=d,U=!1,i&&(d=g.unstable_now(),i&&(G++,null!==K&&M([7,1e3*d,G])))}}function $(c,b){__p&&__p();X(b);for(S=C(P);!(null===S||h&&R||S.expirationTime>b&&(!c||m()));){var d=S.callback;if(null!==d){S.callback=null;T=S.priorityLevel;var e=S.expirationTime<=b,f=S;i&&(F++,H[0]=f.priorityLevel,H[1]=f.id,H[2]=F,null!==K&&M([5,1e3*b,f.id,F]));d=d(e);b=g.unstable_now();"function"===typeof d?(S.callback=d,d=S,e=b,i&&(H[0]=0,H[1]=0,H[2]=0,null!==K&&M([6,1e3*e,d.id,F]))):(i&&(d=S,e=b,i&&(H[0]=0,H[1]=0,H[3]--,null!==K&&M([2,1e3*e,d.id])),S.isQueued=!1),S===C(P)&&D(P));X(b)}else D(P);S=C(P)}if(null!==S)return!0;c=C(Q);null!==c&&k(Y,c.startTime-b);return!1}function aa(b){switch(b){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}d=e;f=i?{startLoggingProfilingEvents:b,stopLoggingProfilingEvents:N,sharedProfilingBuffer:c}:null;g.unstable_ImmediatePriority=1;g.unstable_UserBlockingPriority=2;g.unstable_NormalPriority=3;g.unstable_IdlePriority=5;g.unstable_LowPriority=4;g.unstable_runWithPriority=function(b,c){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var d=T;T=b;try{return c()}finally{T=d}};g.unstable_next=function(b){switch(T){case 1:case 2:case 3:var c=3;break;default:c=T}var d=T;T=c;try{return b()}finally{T=d}};g.unstable_scheduleCallback=function(b,c,d){__p&&__p();var e=g.unstable_now();if("object"===typeof d&&null!==d){var f=d.delay;f="number"===typeof f&&0<f?e+f:e;d="number"===typeof d.timeout?d.timeout:aa(b)}else d=aa(b),f=e;d=f+d;b={id:ea++,callback:c,priorityLevel:b,startTime:f,expirationTime:d,sortIndex:-1};i&&(b.isQueued=!1);f>e?(b.sortIndex=f,B(Q,b),null===C(P)&&b===C(Q)&&(W?l():W=!0,k(Y,f-e))):(b.sortIndex=d,B(P,b),i&&(O(b,e),b.isQueued=!0),V||U||(V=!0,j(Z)));return b};g.unstable_cancelCallback=function(b){if(i&&b.isQueued){var c=g.unstable_now();i&&(H[3]--,null!==K&&M([4,1e3*c,b.id]));b.isQueued=!1}b.callback=null};g.unstable_wrapCallback=function(b){var c=T;return function(){var d=T;T=c;try{return b.apply(this,arguments)}finally{T=d}}};g.unstable_getCurrentPriorityLevel=function(){return T};g.unstable_shouldYield=function(){var b=g.unstable_now();X(b);var c=C(P);return c!==S&&null!==S&&null!==c&&null!==c.callback&&c.startTime<=b&&c.expirationTime<S.expirationTime||m()};g.unstable_requestPaint=d;g.unstable_continueExecution=function(){R=!1,V||U||(V=!0,j(Z))};g.unstable_pauseExecution=function(){R=!0};g.unstable_getFirstCallbackNode=function(){return C(P)};g.unstable_Profiling=f}),null);
__d("SchedulerFb-Internals_DO_NOT_USE",["ifRequired","requestAnimationFramePolyfill","Scheduler-dev","Scheduler-profiling"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a.requestAnimationFrame===void 0&&(a.requestAnimationFrame=b("requestAnimationFramePolyfill"));var g;g=b("Scheduler-profiling");var h=0;e.exports={unstable_ImmediatePriority:g.unstable_ImmediatePriority,unstable_UserBlockingPriority:g.unstable_UserBlockingPriority,unstable_NormalPriority:g.unstable_NormalPriority,unstable_LowPriority:g.unstable_LowPriority,unstable_IdlePriority:g.unstable_IdlePriority,unstable_getCurrentPriorityLevel:g.unstable_getCurrentPriorityLevel,unstable_runWithPriority:g.unstable_runWithPriority,unstable_next:g.unstable_next,unstable_now:g.unstable_now,unstable_scheduleCallback:function(a,c,d){var e=b("ifRequired")("TimeSlice",function(a){return a.guard(c,"unstable_scheduleCallback",{propagationType:a.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return c});a=g.unstable_scheduleCallback(a,e,d);var f="scheduler."+h++;a._id=f;b("ifRequired")("TimeSlice",function(a){a.registerForCancelling(f,e)});return a},unstable_cancelCallback:function(a){var c=a._id;b("ifRequired")("TimeSlice",function(a){a.cancelWithToken(c)});return g.unstable_cancelCallback(a)},unstable_wrapCallback:function(a){var c=b("ifRequired")("TimeSlice",function(b){return b.guard(a,"unstable_wrapCallback",{propagationType:b.PropagationType.CONTINUATION,registerCallStack:!0})},function(){return a});return g.unstable_wrapCallback(c)},unstable_pauseExecution:function(){return g.unstable_pauseExecution()},unstable_continueExecution:function(){return g.unstable_continueExecution()},unstable_shouldYield:g.unstable_shouldYield,unstable_forceFrameRate:g.unstable_forceFrameRate,unstable_Profiling:g.unstable_Profiling}}),null);