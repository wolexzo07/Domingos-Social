var refEn=0,tagsInitDone=0,gptAdSlots=[],adDomain="www.poftut.com",breakpoints={desktop:"1024",tablet:"768",mobile:"0"},domainValid=1,PREBID_TIMEOUT=1500,interstitialDone=0,waldoTimeOuts=[],waldoAdRefreshes=[],allAdUnits=[],blockAdsOn=[],pubwiseSiteId="",adTagsInitFlag=0,siteId=3493,bidDivAvailable=0,waldoTagsStatus=[],googletag=googletag||{},pbjs=pbjs||{},switchUserSync=0,waldoRestrictIp=0,waldoImpressionDone=0,blockedPageAds="",waldoGDPR=1,waldoCountry=waldoReadCookie("waldo_country"),waldoContinent=waldoReadCookie("waldo_continent"),waldoDataPointsDone=waldoReadCookie("waldo_data_points_done");function adDomainCheck(){if(blockAdsOn.length){var e=window.location.pathname;for(i=0;i<blockAdsOn.length;i++)if(blockAdsOn[i]==e)return!1}var a=window.location.href;a=decodeURI(a),a=decodeURIComponent(a);var d=/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.exec(a);return null===d||-1!==d[0].indexOf("volkmarkt.com")||(waldoEmailDetected(a),!1)}function waldoInitScripts(){var e=document.createElement("style");e.type="text/css";var a="";a+=".waldo-sticky-footer{position: fixed; width: 100%; bottom: 0px; left: 0px; text-align: center; z-index: 9000;}",a+=".waldo-sticky-footer iframe, .waldo-sticky-footer div {margin-left: auto;margin-right: auto;}",a+=".waldo-sticky-sidebar{position: fixed; top: 10px;z-index: 90}",a+=".waldo-sticky-css{position: sticky; top: 10px; z-index: 90}",a+=".waldo-overlay{position: fixed;height: 100%;width: 100%;top: 0;left: 0;z-index: 105;background: rgba(0,0,0,0.7);}",a+="#waldo-counter {position: absolute;bottom: 0;right: 0;color: #fff;font-size: 30px;padding: 15px;}",browserWidth>=breakpoints.desktop&&(a+=".waldo-bfleft {position: fixed; left: 0; top: 10px;z-index:101;}",a+=".waldo-bfright {position: fixed; right: 0; top: 10px;z-index:101;}"),a+='div[class^="app_gdpr-"] a {color: #41afbb !important; text-decoration: underline !important}',a+="#waldo-close-button a {",a+="border: 1px solid rgba(0,0,0,.35);",a+="padding: 3px;",a+="font-size: 12px;",a+="color: #fff;",a+="font-weight: bold;",a+="background-color: #777;",a+="}",e.appendChild(document.createTextNode(a)),document.getElementsByTagName("head")[0].appendChild(e);var d=document.createElement("script");d.async=!0,d.type="text/javascript";var i="https:"==document.location.protocol;d.src=(i?"https:":"http:")+"//www.googletagservices.com/tag/js/gpt.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(d,t);var s=document.createElement("script");s.type="text/javascript",s.text="googletag.cmd.push(function() {",s.text+="gptAdSlots[3494] = googletag.defineSlot('/124067137/poftut300x250FL_1', [[300, 250], [300, 600], [160, 600]], 'waldo-tag-3494').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250], [300, 600], [160, 600]]).addSize([768, 0], [[300, 250], [300, 600], [160, 600]]).addSize([0, 0], [[300, 250], [300, 600], [160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3495] = googletag.defineSlot('/8491498/poftut300x250FL_1_Universal_Passback_5c081cdf34894', [[300, 250], [160, 600]], 'waldo-tag-3495').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[160, 600]]).addSize([0, 0], [[160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3496] = googletag.defineSlot('/124067137/poftut300x250FL_2', [[300, 250], [300, 600], [160, 600]], 'waldo-tag-3496').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250], [300, 600], [160, 600]]).addSize([768, 0], [[300, 250], [300, 600], [160, 600]]).addSize([0, 0], [[300, 250], [300, 600], [160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3497] = googletag.defineSlot('/8491498/poftut300x250FL_2_Universal_Passback_5c081ce389c37', [[300, 250], [160, 600]], 'waldo-tag-3497').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[160, 600]]).addSize([0, 0], [[160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3498] = googletag.defineSlot('/124067137/poftut300x250FL_3', [[300, 250], [300, 600], [160, 600]], 'waldo-tag-3498').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250], [300, 600], [160, 600]]).addSize([768, 0], [[300, 250], [300, 600], [160, 600]]).addSize([0, 0], [[300, 250], [300, 600], [160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3499] = googletag.defineSlot('/8491498/poftut300x250FL_3_Universal_Passback_5c081ce7d7088', [[300, 250], [160, 600]], 'waldo-tag-3499').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[160, 600]]).addSize([0, 0], [[160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3500] = googletag.defineSlot('/124067137/poftut300x250FL_4', [[300, 250], [300, 600], [160, 600]], 'waldo-tag-3500').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250], [300, 600], [160, 600]]).addSize([768, 0], [[300, 250], [300, 600], [160, 600]]).addSize([0, 0], [[300, 250], [300, 600], [160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3501] = googletag.defineSlot('/8491498/poftut300x250FL_4_Universal_Passback_5c081cec25d16', [[300, 250], [160, 600]], 'waldo-tag-3501').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[160, 600]]).addSize([0, 0], [[160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3502] = googletag.defineSlot('/124067137/poftut300x250FL_5', [[300, 250], [300, 600], [160, 600]], 'waldo-tag-3502').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250], [300, 600], [160, 600]]).addSize([768, 0], [[300, 250], [300, 600], [160, 600]]).addSize([0, 0], [[300, 250], [300, 600], [160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3503] = googletag.defineSlot('/8491498/poftut300x250FL_5_Universal_Passback_5c081cf0c3952', [[300, 250], [160, 600]], 'waldo-tag-3503').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[160, 600]]).addSize([0, 0], [[160, 600]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3511] = googletag.defineSlot('/124067137/poftut728x90FX_1', [[728, 90], [320, 50]], 'waldo-tag-3511').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[728, 90]]).addSize([768, 0], [[320, 50]]).addSize([0, 0], [[320, 50]]).build()).addService(googletag.pubads());",s.text+="gptAdSlots[3512] = googletag.defineSlot('/8491498/poftut728x90FX_1_Universal_Passback_5c0e8ed0dcdf6', [[728, 90], [320, 50]], 'waldo-tag-3512').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[728, 90]]).addSize([768, 0], [[320, 50]]).addSize([0, 0], [[320, 50]]).build()).addService(googletag.pubads());",s.text+="googletag.pubads().enableSingleRequest();",s.text+="googletag.enableServices();",s.text+="googletag.pubads().addEventListener('impressionViewable', function(event) {hb_refresh(event); hb_sroll_pause(event);});",s.text+="googletag.pubads().addEventListener('slotRenderEnded', function(event) {waldoAddCloseBtn(event); waldoPassbackInit(event);waldoInterstitialInit(event);})",s.text+="});",document.getElementsByTagName("head")[0].appendChild(s);var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.thisiswaldo.com/sites/all/modules/custom/ad_delivery/prebid.js";var o=document.getElementsByTagName("head")[0];o.insertBefore(r,o.firstChild);var m=document.createElement("script");m.type="text/javascript",m.async=!0,m.src="//theeighth-net.videoplayerhub.com/videoplayer.js";var n=document.getElementsByTagName("head")[0];n.insertBefore(m,n.firstChild)}Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),d=a.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],t=0;t<d;){var s=a[t];if(e.call(i,s,t,a))return s;t++}},configurable:!0,writable:!0}),null===waldoCountry&&(PREBID_TIMEOUT+=500);var affiliateBanners,browserWidth=Math.max(document.documentElement.clientWidth,window.innerWidth||0),adUnits=[{code:"waldo-tag-3494",mediaTypes:{banner:{sizes:[]}},customParams:{slotNo:"3494",amp_code:"/124067137/poftut300x250FL_1",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"70"},min:"45",max:"90",limit:"0"},passback:"3495",passback_refresh:"0",mobile_refresh:1},sizeMapping:[{minWidth:"1024",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482331"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296667",size:[300,250]}},{bidder:"ix",params:{siteId:"296668",size:[300,600]}},{bidder:"districtm",params:{placementId:"14678796"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280558"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"qT2e"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"xsiS"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"Mc23"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_1"}}]},{minWidth:"768",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482331"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296669",size:[300,250]}},{bidder:"ix",params:{siteId:"296670",size:[300,600]}},{bidder:"districtm",params:{placementId:"14678796"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280558"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"qT2e"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"xsiS"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"Mc23"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_1"}}]},{minWidth:"0",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482331"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296669",size:[300,250]}},{bidder:"ix",params:{siteId:"296670",size:[300,600]}},{bidder:"districtm",params:{placementId:"14678796"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280558"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"qT2e"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"xsiS"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"Mc23"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_1"}}]}],affiliate_banners:[]},{code:"waldo-tag-3496",mediaTypes:{banner:{sizes:[]}},customParams:{slotNo:"3496",amp_code:"/124067137/poftut300x250FL_2",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"70"},min:"45",max:"90",limit:"0"},passback:"3497",passback_refresh:"0",mobile_refresh:1},sizeMapping:[{minWidth:"1024",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482343"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296671",size:[300,250]}},{bidder:"districtm",params:{placementId:"14678797"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280559"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"b8DR"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_2"}}]},{minWidth:"768",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482343"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296672",size:[300,250]}},{bidder:"districtm",params:{placementId:"14678797"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280559"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"b8DR"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_2"}}]},{minWidth:"0",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482343"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296672",size:[300,250]}},{bidder:"districtm",params:{placementId:"14678797"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280559"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"b8DR"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_2"}}]}],affiliate_banners:[]},{code:"waldo-tag-3498",mediaTypes:{banner:{sizes:[]}},customParams:{slotNo:"3498",amp_code:"/124067137/poftut300x250FL_3",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"70"},min:"45",max:"90",limit:"0"},passback:"3499",passback_refresh:"0",mobile_refresh:1},sizeMapping:[{minWidth:"1024",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482348"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296673",size:[300,250]}},{bidder:"districtm",params:{placementId:"14678793"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280555"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_3"}}]},{minWidth:"768",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482348"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296674",size:[300,250]}},{bidder:"districtm",params:{placementId:"14678793"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280555"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_3"}}]},{minWidth:"0",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482348"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296674",size:[300,250]}},{bidder:"districtm",params:{placementId:"14678793"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280555"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_3"}}]}],affiliate_banners:[]},{code:"waldo-tag-3500",mediaTypes:{banner:{sizes:[]}},customParams:{slotNo:"3500",amp_code:"/124067137/poftut300x250FL_4",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"70"},min:"45",max:"90",limit:"0"},passback:"3501",passback_refresh:"0",mobile_refresh:1},sizeMapping:[{minWidth:"1024",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482351"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296675",size:[160,600]}},{bidder:"districtm",params:{placementId:"14678794"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280556"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_4"}}]},{minWidth:"768",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482351"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296676",size:[160,600]}},{bidder:"districtm",params:{placementId:"14678794"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280556"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_4"}}]},{minWidth:"0",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482351"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"ix",params:{siteId:"296676",size:[160,600]}},{bidder:"districtm",params:{placementId:"14678794"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280556"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_4"}}]}],affiliate_banners:[]},{code:"waldo-tag-3502",mediaTypes:{banner:{sizes:[]}},customParams:{slotNo:"3502",amp_code:"/124067137/poftut300x250FL_5",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"90"},min:"45",max:"90",limit:"0"},passback:"3503",passback_refresh:"0",mobile_refresh:1},sizeMapping:[{minWidth:"1024",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482359"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"districtm",params:{placementId:"14678795"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280557"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"eu2l"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"5GHY"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"UzG9"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_5"}}]},{minWidth:"768",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482359"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"districtm",params:{placementId:"14678795"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280557"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"eu2l"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"5GHY"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"UzG9"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_5"}}]},{minWidth:"0",sizes:[[300,250],[300,600],[160,600]],bids:[{bidder:"appnexus",params:{placementId:"14482359"}},{bidder:"gumgum",params:{inSlot:"7722"}},{bidder:"gumgum",params:{inSlot:"7724"}},{bidder:"gumgum",params:{inSlot:"7723"}},{bidder:"districtm",params:{placementId:"14678795"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280557"}},{bidder:"lockerdome",params:{adUnitId:"11595258299618662"}},{bidder:"lockerdome",params:{adUnitId:"11595259776013670"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"eu2l"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"5GHY"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"UzG9"}},{bidder:"sharethrough",params:{pkey:"kTbSC4suDuQW1CWPnxq9HMZz"}},{bidder:"sharethrough",params:{pkey:"Fz7FdWrdW7mbDLJqhtmCh59N"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut300x250FL_5"}}]}],affiliate_banners:[]},{code:"waldo-tag-3511",mediaTypes:{banner:{sizes:[]}},customParams:{slotNo:"3511",amp_code:"/124067137/poftut728x90FX_1",sticky_footer:1,mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"90"},min:"45",max:"90",limit:"0"},passback:"3512",passback_refresh:"0",mobile_refresh:1},sizeMapping:[{minWidth:"1024",sizes:[[728,90]],bids:[{bidder:"appnexus",params:{placementId:"14548940"}},{bidder:"gumgum",params:{inSlot:"7726"}},{bidder:"ix",params:{siteId:"296685",size:[728,90]}},{bidder:"districtm",params:{placementId:"14678792"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280554"}},{bidder:"lockerdome",params:{adUnitId:"11595260547765606"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"47W7"}},{bidder:"sharethrough",params:{pkey:"DDst6TPmS97ZYEiy3jYGsVDn"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut728x90FX_1"}}]},{minWidth:"768",sizes:[[320,50]],bids:[{bidder:"appnexus",params:{placementId:"14548940"}},{bidder:"gumgum",params:{inSlot:"7725"}},{bidder:"ix",params:{siteId:"296686",size:[320,50]}},{bidder:"districtm",params:{placementId:"14678792"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280554"}},{bidder:"lockerdome",params:{adUnitId:"11595259071370598"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"4djE"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut728x90FX_1"}}]},{minWidth:"0",sizes:[[320,50]],bids:[{bidder:"appnexus",params:{placementId:"14548940"}},{bidder:"gumgum",params:{inSlot:"7725"}},{bidder:"ix",params:{siteId:"296686",size:[320,50]}},{bidder:"districtm",params:{placementId:"14678792"}},{bidder:"districtmDMX",params:{memberid:"100835",dmxid:"280554"}},{bidder:"lockerdome",params:{adUnitId:"11595259071370598"}},{bidder:"aardvark",params:{ai:"IS9K",sc:"4djE"}},{bidder:"triplelift",params:{inventoryCode:"NM_RON_HDX"}},{bidder:"sonobi",params:{ad_unit:"/124067137/poftut728x90FX_1"}}]}],affiliate_banners:[]}],passbackAdUnits=[{code:"waldo-tag-3495",customParams:{slotNo:"3495",amp_code:"/124067137/poftut300x250FL_1",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"70"},min:"45",max:"90",limit:"0"},passback_refresh:"0",mobile_refresh:1}},{code:"waldo-tag-3497",customParams:{slotNo:"3497",amp_code:"/124067137/poftut300x250FL_2",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"70"},min:"45",max:"90",limit:"0"},passback_refresh:"0",mobile_refresh:1}},{code:"waldo-tag-3499",customParams:{slotNo:"3499",amp_code:"/124067137/poftut300x250FL_3",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"70"},min:"45",max:"90",limit:"0"},passback_refresh:"0",mobile_refresh:1}},{code:"waldo-tag-3501",customParams:{slotNo:"3501",amp_code:"/124067137/poftut300x250FL_4",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"70"},min:"45",max:"90",limit:"0"},passback_refresh:"0",mobile_refresh:1}},{code:"waldo-tag-3503",customParams:{slotNo:"3503",amp_code:"/124067137/poftut300x250FL_5",mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"90"},min:"45",max:"90",limit:"0"},passback_refresh:"0",mobile_refresh:1}},{code:"waldo-tag-3512",customParams:{slotNo:"3512",amp_code:"/124067137/poftut728x90FX_1",sticky_footer:1,mobile_pause:"0",refresh:{type:"min_max",desktop:{min:"45",max:"90"},mobile:{min:"45",max:"90"},min:"45",max:"90",limit:"0"},passback_refresh:"0",mobile_refresh:1}}];if(allAdUnits=adUnits.concat(passbackAdUnits),adUnits.forEach(function(e){if(!e.bids){var a=e.sizeMapping.find(function(e){return browserWidth>0?browserWidth>=e.minWidth:0==e.minWidth}).bids,d=e.sizeMapping.find(function(e){return browserWidth>0?browserWidth>=e.minWidth:0==e.minWidth}).sizes;e.mediaTypes.banner.sizes=d,e.bids=a,delete e.sizeMapping}}),googletag.cmd=googletag.cmd||[],googletag.cmd.push(function(){googletag.pubads().disableInitialLoad()}),adDomainCheck()){function fetchHeaderBids(){var e=["prebid"],a={adserverRequestSent:!1};function d(d){!0!==a.adserverRequestSent&&("a9"===d?a.a9=!0:"prebid"===d&&(a.prebid=!0),e.map(function(e){return a[e]}).filter(Boolean).length===e.length&&i())}function i(){!0!==a.adserverRequestSent&&(a.adserverRequestSent=!0,pbjs.adserverRequestSent=!0,a.sendAdserverRequest=!0,googletag.cmd.push(function(){pbjs.setTargetingForGPTAsync(),googletag.pubads().refresh()}))}e.forEach(function(e){a[e]=!1}),pbjs.que.push(function(){"EU"!=waldoReadCookie("waldo_continent")&&"RO"!=waldoReadCookie("waldo_country")||pbjs.setConfig({consentManagement:{cmpApi:"iab",timeout:2e3,allowAuctionWithoutConsent:!0}}),pbjs.addAdUnits(adUnits),pbjs.setConfig({userSync:{filterSettings:{all:{bidders:["aardvark"],filter:"include"}}}}),pbjs.requestBids({bidsBackHandler:function(e){d("prebid")}})}),setTimeout(function(){i()},3e3)}function waldoInitCmp(){var e=waldoReadCookie("waldo_continent"),a=waldoReadCookie("euconsent");if("EU"==e&&null===a){var d=document.createElement("script");d.type="text/javascript",d.src="//thisiswaldo.com/sites/all/modules/custom/ad_delivery/cmp/build/cmp.complete.bundle.js";var i=document.getElementsByTagName("head")[0];i.insertBefore(d,i.firstChild)}}function hb_sroll_pause(e){for(var a=0,d=allAdUnits.length;a<d;a++)e.slot.getSlotElementId()==allAdUnits[a].code&&allAdUnits[a].customParams.mobile_pause>0&&browserWidth<breakpoints.tablet&&(document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",function(e){setTimeout(function(){document.documentElement.style.overflow="",document.body.style.overflow=""},1e3*allAdUnits[e].customParams.mobile_pause)}(a))}function hb_refresh(e){if(!refEn)return!1;for(var a=0,d=adUnits.length;a<d;a++)e.slot.getSlotElementId()==allAdUnits[a].code&&"viewability"==allAdUnits[a].customParams.refresh.type&&function(e){setTimeout(function(){hbRefreshBid(allAdUnits[e])},1e3*allAdUnits[e].customParams.refresh.seconds)}(a)}function waldoAddCloseBtn(e){for(var a=0,d=adUnits.length;a<d;a++)if(e.slot.getSlotElementId()==adUnits[a].code&&adUnits[a].customParams.sticky_footer&&!e.isEmpty){var i=adUnits[a].customParams.slotNo,t=document.getElementById(e.slot.getSlotElementId()),s=t.getElementsByTagName("div")[0],r=s.getElementsByTagName("iframe")[0],o=r.getAttribute("width"),m=document.createElement("div");m.setAttribute("id","waldo-close-button"),m.style.width=o+"px",m.style.marginLeft="auto",m.style.marginRight="auto",m.style.textAlign="right",m.innerHTML='<a style="text-decoration: none;" href="#">Close X</a>',r.style.width=o+"px",s.parentNode.insertBefore(m,s),m.getElementsByTagName("a")[0].onclick=function(e){e.preventDefault(),t.parentNode.removeChild(t),clearTimeout(waldoTimeOuts[i])}}}function waldoPassbackInit(e){for(var a=0,d=adUnits.length;a<d;a++)if(e.slot.getSlotElementId()==adUnits[a].code&&adUnits[a].customParams.passback){var i=adUnits[a].customParams.passback,t=document.getElementById("waldo-tag-"+adUnits[a].customParams.passback);if(e.isEmpty){if(r=document.getElementById(e.slot.getSlotElementId())){var s=r.getElementsByTagName("div")[0];r.removeChild(s)}if(!t){var r=document.getElementById(e.slot.getSlotElementId()),o=waldoLoadPassback(adUnits[a].customParams.passback),m=document.createElement("div");m.setAttribute("id",o.code),r.parentNode.insertBefore(m,r),waldoInitTags([o]),googletag.pubads().refresh([gptAdSlots[adUnits[a].customParams.passback]]),0==adUnits[a].customParams.passback_refresh&&(clearTimeout(waldoTimeOuts[i]),clearTimeout(waldoTimeOuts[adUnits[a].customParams.slotNo]))}}else if(t){waldoTimeOuts[i]&&clearTimeout(waldoTimeOuts[i]);var n=document.getElementById("waldo-tag-"+adUnits[a].customParams.passback);n&&n.parentNode.removeChild(n)}}}function waldoInterstitialInit(e){if(interstitialDone)return!1;for(var a=0,d=adUnits.length;a<d;a++)if(e.slot.getSlotElementId()==adUnits[a].code&&adUnits[a].customParams.interstitial){interstitialDone=1;var i=document.getElementById(adUnits[a].code);if(browserWidth>=breakpoints.desktop&&!e.isEmpty){var t=adUnits[a].customParams.interstitial_duration,s=document.createElement("div");s.setAttribute("id","waldo-counter"),s.innerHTML='Ad will close in <span class="count">'+t+"</span> seconds",i.appendChild(s),i.className="waldo-overlay",i.style.display="block";var r=i.getElementsByTagName("iframe")[0],o=i.getElementsByTagName("div")[0];o.style.left="50%",o.style.top="50%",o.style.position="absolute",o.style.width=r.clientWidth+"px",o.style.height=r.clientHeight+"px",o.style.marginLeft="-"+parseInt(r.clientWidth)/2+"px",o.style.marginTop="-"+parseInt(r.clientHeight)/2+"px";var m=setInterval(function(){var e=t--;s.getElementsByTagName("span")[0].innerHTML=e,0==e&&(clearInterval(m),i.parentNode.removeChild(i))},1e3)}}}function waldoInitTags(e){var a,d=[];for(p=document.documentElement||document.body.parentNode||document.body,index=0;index<e.length;++index){var i=e[index],t=i.code,s=document.getElementById(t);if(s&&void 0===waldoTagsStatus[t]){d.push(i.customParams.slotNo),waldoTagsStatus[t]=1,bidDivAvailable=1,waldoAdRefreshes[i.customParams.slotNo]=0;var r=document.createElement("script");if(r.type="text/javascript",r.text="googletag.cmd.push(function() { googletag.display('"+t+"'); });",s.appendChild(r),i.customParams.sticky_sidebar&&browserWidth>=breakpoints.desktop&&(a=s),i.customParams.sticky_footer?s.className="waldo-sticky-footer":i.customParams.sticky_left||i.customParams.sticky_right?browserWidth>=breakpoints.desktop?i.customParams.sticky_left?s.className="waldo-bfleft":s.className="waldo-bfright":s.style.display="none":i.customParams.interstitial&&(s.style.display="none"),"min_max"==i.customParams.refresh.type){var o=1;browserWidth<breakpoints.desktop&&0==i.customParams.mobile_refresh&&(o=0),o&&hbRandomMinMaxRefresh(e[index])}s.setAttribute("data-processed",!0)}if(a&&"/"!=window.location.pathname){var m,n=a.offsetTop,p=document.documentElement||document.body.parentNode||document.body,l=void 0!==window.pageYOffset;n+=550,window.onscroll=function(e){m=l?window.pageYOffset:p.scrollTop,a.className=m>=n?"waldo-sticky-sidebar":""}}}!waldoImpressionDone&&d.length>0&&(waldoRecordImpression(d),waldoImpressionDone=1)}function hbRefreshBid(e){var a=["prebid"],d=[];if(d[e.customParams.slotNo]={a9:!1,prebid:!1},5==waldoAdRefreshes[e.customParams.slotNo]){e.bids;for(i=0;i<e.bids.length;i++)"openx"!=e.bids[i].bidder&&"aol"!=e.bids[i].bidder&&"sovrn"!=e.bids[i].bidder||(pbjs.removeAdUnit(e.code),e.bids.splice(i,1),pbjs.addAdUnits([e]))}pbjs.que.push(function(){pbjs.requestBids({timeout:PREBID_TIMEOUT,adUnitCodes:[e.code],bidsBackHandler:function(i){!function(i){"a9"===i?d[e.customParams.slotNo].a9=!0:"prebid"===i&&(d[e.customParams.slotNo].prebid=!0);a.map(function(a){return d[e.customParams.slotNo][a]}).filter(Boolean).length===a.length&&googletag.cmd.push(function(){pbjs.setTargetingForGPTAsync([e.code]),googletag.pubads().refresh([gptAdSlots[e.customParams.slotNo]])})}("prebid")}})})}function hbRandomMinMaxRefresh(e){if(browserWidth>=breakpoints.desktop)var a=parseInt(e.customParams.refresh.desktop.min),d=parseInt(e.customParams.refresh.desktop.max);else a=parseInt(e.customParams.refresh.mobile.min),d=parseInt(e.customParams.refresh.mobile.max);var i=e.customParams.slotNo,t=parseInt(e.customParams.refresh.limit),s=getRandomNumber(a,d);waldoTimeOuts[i]=setTimeout(function(){waldoAdRefreshes[i]?waldoAdRefreshes[i]++:waldoAdRefreshes[i]=1,hbRefreshBid(e),waldoAdRefreshes[i]!=t&&hbRandomMinMaxRefresh(e)},1e3*s)}function getRandomNumber(e,a){return Math.floor(Math.random()*(a-e+1)+e)}function waldoGeoBidsCheck(e){for(i=0;i<adUnits.length;i++){var a=adUnits[i].bids;a=a.filter(function(a){return"sovrn"!=a.bidder?1:"US"==e||"CA"==e||"GB"==e||"AU"==e?1:void 0}),adUnits[i].bids=a}}waldoInitScripts(),pbjs.que=pbjs.que||[],pbjs.que.push(function(){pbjs.aliasBidder("appnexus","districtm"),pbjs.aliasBidder("appnexus","9284")}),0==bidDivAvailable&&(document.addEventListener("DOMContentLoaded",function(){adTagsInitFlag||(waldoInitTags(adUnits),adTagsInitFlag=1)},!1),window.addEventListener("load",function(){adTagsInitFlag||(waldoInitTags(adUnits),adTagsInitFlag=1)},!1)),setTimeout(function(){refEn=1},3e4),null===waldoCountry?waldoGetUserData():(waldoInitCmp(),fetchHeaderBids())}function waldoDisplayPassbacksBlockedPages(){for(var e=0;e<adUnits.length;e++){var a=adUnits[e],d=document.getElementById(a.code);if(d){var i=waldoLoadPassback(a.customParams.passback),t=document.createElement("div");t.setAttribute("id",i.code),a.customParams.sticky_footer&&(t.className="waldo-sticky-footer"),d.parentNode.insertBefore(t,d);var s=document.createElement("script");s.type="text/javascript",s.text="googletag.cmd.push(function() { googletag.display('"+i.code+"'); });",t.appendChild(s),googletag.cmd.push(function(){googletag.pubads().refresh([gptAdSlots[a.customParams.passback]])}),console.log("ref")}}}function waldoGetUserData(){var e="https:"==document.location.protocol,a=(new XMLHttpRequest,(e?"https:":"http:")+"//ipfind.co/me?auth=3757a9b9-5759-4813-bc1a-7fa0b8ba94c1"),d=new XMLHttpRequest;d.onreadystatechange=function(){if(d.readyState===XMLHttpRequest.DONE)if(200===d.status){var e=JSON.parse(d.responseText);waldoCreateCookie("waldo_country",e.country_code,90),waldoCreateCookie("waldo_continent",e.continent_code,90),waldoInitCmp(),waldoGeoBidsCheck(e.country_code),fetchHeaderBids()}else waldoInitCmp(),waldoGeoBidsCheck(""),fetchHeaderBids()},d.open("GET",a,!0),d.timeout=550,d.send()}function waldoLoadPassback(e){for(i=0;i<passbackAdUnits.length;i++)if(passbackAdUnits[i].customParams.slotNo==e)return passbackAdUnits[i]}function waldoCreateCookie(e,a,d){var i="";if(d){var t=new Date;t.setTime(t.getTime()+24*d*60*60*1e3),i="; expires="+t.toUTCString()}document.cookie=e+"="+a+i+"; path=/"}function waldoReadCookie(e){for(var a=e+"=",d=document.cookie.split(";"),i=0;i<d.length;i++){for(var t=d[i];" "==t.charAt(0);)t=t.substring(1,t.length);if(0==t.indexOf(a))return t.substring(a.length,t.length)}return null}function waldoEmailDetected(e){var a=new XMLHttpRequest,d="url="+e;a.open("POST","https://thisiswaldo.com/email-detected",!0),a.setRequestHeader("Content-type","application/x-www-form-urlencoded"),a.send(d)}function waldoRecordImpression(e){var a=e.join(","),d="https:"==document.location.protocol,i=new XMLHttpRequest,t=(d?"https:":"http:")+"//thisiswaldo.com/new-impression",s="site_id="+siteId+"&zone_ids="+a;i.open("POST",t,!0),i.setRequestHeader("Content-type","application/x-www-form-urlencoded"),i.send(s)}var waldo=waldo||{};waldo.refreshTag=function(e){for(var a=0;a<adUnits.length;a++)adUnits[a].code==e&&hbRefreshBid(adUnits[a])},waldo.refreshAllTags=function(){fetchHeaderBids()};