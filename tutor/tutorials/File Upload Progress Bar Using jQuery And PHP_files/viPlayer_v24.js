var vlPlayer=function(q){var a={},c,l,m,e,f,h=25,k,u=q.brandLogo,n="//assets."+q.baseDomain+"/plugins/vlPlayer",x=function(b){a.type=b.type||"instream";a.vastUrl=b.vastUrl||null;a.vastXML=b.vastXML||null;a.adWidth=b.adWidth||null;a.adHeight=b.adHeight||null;a.divID=b.divID||null;a.adElement=b.adElement||null;a.issetClick=b.issetClick||null;a.loadingText=b.loadingText||null;a.start=b.start||function(){};a.complete=b.complete||function(){};a.error=b.error||function(){};a.impression=b.impression||function(){};a.hidden=b.hidden||function(){};a.volumeControl=b.volumeControl||!1;a.vastLoadTimeout=b.vastLoadTimeout||2E4;a.loadVideoTimeout=b.loadVideoTimeout||6E4;a.adsVolumeChange=b.adsVolumeChange||function(){};if((a.vastUrl||a.vastXML)&&(a.divID||a.adElement)){switch(a.type){case "instream":a.defaultVolume=b.volume||1;k="vlAdcontainer_instream";break;case "outstream":h=0;a.defaultVolume=b.volume||0;k="vlAdcontainer_outstream";break;case "instreamBanner":h=0,a.defaultVolume=b.volume||0,k="vlAdcontainer_instreamBanner"}g("Ad Volume____"+
a.defaultVolume);v();return{pause:function(){g("Ad pause");c&&g("Ad is paused");c&&c.pause()},resume:function(){g("Ad resume");c&&c.resume()},resize:function(b,a,e){g("Ad resize");"FULLSCREEN"==e?e=google.ima.ViewMode.FULLSCREEN:e=google.ima.ViewMode.NORMAL;c&&c.resize(b,a,e);f&&(f.getElementById("vi_adwrapper").style.height=a+"px")}}}},v=function(){f=r();var b=f.getElementById(k);b.appendChild(y());m=f.getElementById("viVideoContent");google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE);google.ima.settings.setDisableCustomPlaybackForIOS10Plus(!0);l=new google.ima.AdDisplayContainer(b,m);l.initialize();var d=new google.ima.AdsRequest;d.forceNonLinearFullSlot=!0;d.vastLoadTimeout=a.vastLoadTimeout;d.adTagUrl=a.vastUrl;d.adsResponse=a.vastXML;d.linearAdSlotWidth=a.adWidth;d.linearAdSlotHeight=a.adHeight-h;d.nonLinearAdSlotWidth=a.adWidth;d.nonLinearAdSlotHeight=a.adHeight-h;var c=new google.ima.AdsLoader(l);c.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,z,!1);c.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,p,!1);d.setAdWillAutoPlay(!1);d.setAdWillPlayMuted(0==a.defaultVolume?!0:!1);c.requestAds(d);A(b)},A=function(b){if("outstream"==a.type&&!a.volumeControl){var d=function(){a.issetClick=!0;document.body.removeEventListener("click",d)};document.body.addEventListener("click",d);b.addEventListener("mouseover",function(){1==a.issetClick&&c&&c.setVolume(1)});b.addEventListener("mouseout",function(){c&&c.setVolume(0)})}if(a.volumeControl){var e=f.getElementById("vi_toggleVolume");e.addEventListener("click",function(){0==c.getVolume()?(g("sound on"),c.setVolume(1),e.classList.remove("sound_off"),e.classList.add("sound_on")):(g("sound off"),c.setVolume(0),e.classList.remove("sound_on"),e.classList.add("sound_off"));a.adsVolumeChange(c.getVolume())})}},z=function(b){var d=new google.ima.AdsRenderingSettings;d.loadVideoTimeout=a.loadVideoTimeout;c=b.getAdsManager(m,d);c.setVolume(a.defaultVolume);c.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,p);c.addEventListener(google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,B);c.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,C);c.addEventListener(google.ima.AdEvent.Type.ALL_ADS_COMPLETED,D);c.addEventListener(google.ima.AdEvent.Type.LOADED,t);c.addEventListener(google.ima.AdEvent.Type.STARTED,t);c.addEventListener(google.ima.AdEvent.Type.COMPLETE,E);c.addEventListener(google.ima.AdEvent.Type.IMPRESSION,F);try{c.init(a.adWidth,a.adHeight-h,google.ima.ViewMode.NORMAL),c.start()}catch(w){p(w)}},F=function(b){a.impression()},t=function(b){var d=b.getAd();switch(b.type){case google.ima.AdEvent.Type.STARTED:if(e.style.background="#000",a.volumeControl&&(f.getElementById("vi_toggleVolume").style.display="block"),a.start(),"instream"==a.type&&d.isLinear()){f.getElementById("vlMessageBox").style.display="none";b=f.createElement("div");b.setAttribute("style","position:absolute;height:25px;background:#e5bb00;width:0%");b.setAttribute("id","progress");f.getElementById("vlMessage").appendChild(b);var g=c.getRemainingTime();b=function(b){function a(){if(++c>f)clearTimeout(d);else{var g=c*e,k;if(k=b.querySelector("#progress"))k.style.width=g+"%";d=setTimeout(a,1E3/h.stepPerSecond)}}var d,c,e;var f=e=c=0;var h={time:g,stepPerSecond:20,bgCorver:"#002b50",bgMain:"#009cff"};return{init:function(b){h=Object.assign(h,b);f=h.time*h.stepPerSecond;e=100/f},run:function(){a()}}}(f);b.init({time:g,stepPerSecond:20});b.run()}}},E=function(b){g("Ad Complete");a.complete()},D=function(b){g("All Ad Complete")},p=function(b){g(b.getError());a.error(b.getError().getErrorCode());c&&c.destroy()},B=function(){},C=function(){g("Resume player___________");a.hidden()},r=function(){var b=new Date;e=a.adElement?a.adElement:document.getElementById(a.divID);b="ifr_"+a.type+"_"+b.getTime();e.style.cssText="z-index: 9998; position: absolute; width: 100%; height: 100%; top: 0; left: 0; background: "+("instream"===a.type?"#000":"transparent")+"; display:block;padding:0;margin:0";e.innerHTML='<iframe id="'+b+'" SRC="about:blank" FRAMEBORDER="0" SCROLLING="no" MARGINHEIGHT="0" MARGINWIDTH="0" TOPMARGIN="0" LEFTMARGIN="0" ALLOWTRANSPARENCY="true" style="border: 0px; vertical-align: bottom;width:100%;height:100%"></iframe>';b=e.querySelector("#"+b);b=b.contentWindow||b.contentDocument;b.document&&(b=b.document);a.adWidth=a.adWidth?a.adWidth:e.offsetWidth;a.adHeight=a.adHeight?a.adHeight:e.offsetHeight;var d="<style>#vi_adwrapper{position:relative;width:100%;height:"+(a.adHeight-h)+"px;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center}#vlMessage{position:relative;height:"+
h+'px;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-ms-flex-align:center;-webkit-align-items:center;align-items:center;width:100%;border-top:1px solid #aaa;background:#000}#vlMessageBox{padding-left:5px;color:#999;font-family:Arial;font-size:10pt}#vlueimpression{position:absolute;z-index:10;top:2px;right:0;background-image:url("//'+u+'");background-repeat:no-repeat;width:85px;height:22px;background-size:82px}#vi_toggleVolume{position:absolute;z-index:9999; left:10px;bottom:6px;cursor:pointer}.sound_on .vi__muted{display:none}.sound_off .vi__volume{display:none}</style>';d=d+'<div id="vi_adwrapper">'+('<div id="'+k+'" style="width:100%;height:100%"></div>');a.volumeControl&&(d+='<div id="vi_toggleVolume" class="'+(1===a.defaultVolume?"sound_on":"sound_off")+'" style="display: none">',d+='<div class="vi__muted"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="1.3em" height="1.3em" viewBox="0 0 124.625 124.625" style="enable-background:new 0 0 124.625 124.625;" xml:space="preserve"> <g> <path d="M6,92.404h23.1l25.6,19.3c4,3,9.601,0.2,9.601-4.8v-89.2c0-4.9-5.701-7.8-9.601-4.8l-25.6,19.3H6c-3.3,0-6,2.7-6,6v48.301 C0,89.704,2.7,92.404,6,92.404z" fill="#dddddd"></path> <path d="M122.4,40.604c-2.7-2.7-7.2-2.7-9.9,0l-11.8,11.8l-11.8-11.8c-2.7-2.7-7.2-2.7-9.9,0c-2.699,2.7-2.699,7.2,0,9.9 l11.801,11.8L79,74.104c-2.699,2.7-2.699,7.2,0,9.9c1.4,1.399,3.2,2.1,5,2.1c1.801,0,3.6-0.7,5-2.1l11.801-11.801L112.6,84.004 c1.4,1.399,3.201,2.1,5,2.1c1.801,0,3.601-0.7,5-2.1c2.701-2.7,2.701-7.2,0-9.9l-12-11.8l11.801-11.8 C125.1,47.804,125.1,43.304,122.4,40.604z" fill="#dddddd"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></div><div class="vi__volume"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="1.3em" height="1.3em" viewBox="0 0 115.3 115.3" style="enable-background:new 0 0 115.3 115.3;" xml:space="preserve"> <g> <path d="M47.9,14.306L26,30.706H6c-3.3,0-6,2.7-6,6v41.8c0,3.301,2.7,6,6,6h20l21.9,16.4c4,3,9.6,0.2,9.6-4.8v-77 C57.5,14.106,51.8,11.306,47.9,14.306z" fill="#dddddd"></path> <path d="M77.3,24.106c-2.7-2.7-7.2-2.7-9.899,0c-2.7,2.7-2.7,7.2,0,9.9c13,13,13,34.101,0,47.101c-2.7,2.7-2.7,7.2,0,9.899 c1.399,1.4,3.199,2,4.899,2s3.601-0.699,4.9-2.1C95.8,72.606,95.8,42.606,77.3,24.106z" fill="#dddddd"></path> <path d="M85.1,8.406c-2.699,2.7-2.699,7.2,0,9.9c10.5,10.5,16.301,24.4,16.301,39.3s-5.801,28.8-16.301,39.3 c-2.699,2.7-2.699,7.2,0,9.9c1.4,1.399,3.2,2.1,4.9,2.1c1.8,0,3.6-0.7,4.9-2c13.1-13.1,20.399-30.6,20.399-49.2 c0-18.6-7.2-36-20.399-49.2C92.3,5.706,87.9,5.706,85.1,8.406z" fill="#dddddd"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg></div></div>');d+="</div>";"instream"===a.type&&(d=d+'<div id="vlMessage">'+("<div id='vlMessageBox'>"+a.loadingText+"</div><div id='vlueimpression'></div>"),d+="</div>");b.open();b.write(d);b.close();return b},y=function(){var b=f.createElement("video"),a=f.createElement("source");a.type="video/mp4";a.src=n+"/static/vid.mp4";b.appendChild(a);a=f.createElement("source");a.type="video/webm";a.src=n+"/static/vid.webm";b.appendChild(a);a=f.createElement("source");a.type="video/ogg";a.src=n+"/static/vid.ogv";b.appendChild(a);b.setAttribute("style","position: absolute;z-index: -1;width: 100%;height: 100%;display:none");b.setAttribute("id","viVideoContent");b.setAttribute("playsinline","");return b},g=function(a){if("string"===typeof a){var b=(new Date).toLocaleTimeString();b+=":"+(new Date).getMilliseconds();window.console.log.apply(console,["%cVLI_ADPLAYER","display: inline-block; color: #fff; background: #DD0420; padding: 1px 4px; border-radius: 3px;",b,a])}else console.log(a)};return{play:function(a){return x(a)},createAdContainer:function(b){a.divID=b.divID||null;a.type=b.type||"instream";a.loadingText=b.loadingText||null;r();e.style.background="#000"}}};