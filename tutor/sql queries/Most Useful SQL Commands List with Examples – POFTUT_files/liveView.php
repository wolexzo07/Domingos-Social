			// <script type="text/javascript">
			(function () {
				var SekindoClientDynamicConfig = function (config, prob)
{
	this.MOBILE_MAX_WIDTH = 415;
	this.config = config;
	this.prob = prob;

	var ref = this;

	this.sizeSetup = function(rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length-1; i++)
		{
			if (rules[i][0] <= ref.prob.window.width)
			{
				selectedRule = rules[i];
				break;
			}
		}

		ref.config.unit.width = selectedRule[0];
		ref.config.unit.height = selectedRule[1];
	}

	this.deviceTypeSetup = function(rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length-1; i++)
		{
			if (rules[i][0].toLowerCase() == ref.prob.ci.deviceType.toLowerCase())
			{
				selectedRule = rules[i];
				break;
			}
		}

		ref.config.unit.width = selectedRule[1];
		ref.config.unit.height = selectedRule[2];

		if (selectedRule[3] != 'undefined' && selectedRule[3].length > 0)
		{
			var floatSetup = selectedRule[3];
			ref.config.float.enabled = floatSetup[0];
			ref.config.float.width = floatSetup[1];
			ref.config.float.height = floatSetup[2];
			ref.config.float.direction = floatSetup[3];
			ref.config.float.verticalOffset = floatSetup[4];
			ref.config.float.horizontalOffset = floatSetup[5];
			ref.config.float.isCloseBtn = floatSetup[6];
		}
	}

	this.deviceTypeFloatSetup = function(rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length-1; i++)
		{
			if (rules[i][0].toLowerCase() == ref.prob.ci.deviceType.toLowerCase())
			{
				selectedRule = rules[i];
				break;
			}
		}

		var floatSetup = selectedRule[1];
		ref.config.float.enabled = floatSetup[0];
		ref.config.float.width = floatSetup[1];
		ref.config.float.height = floatSetup[2];
		ref.config.float.direction = floatSetup[3];
		ref.config.float.verticalOffset = floatSetup[4];
		ref.config.float.horizontalOffset = floatSetup[5];
		ref.config.float.isCloseBtn = floatSetup[6];
		ref.config.float.flowMode = selectedRule[7];
	}

	this.sliderSetup = function(rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length-1; i++)
		{
			if (rules[i][0] <= ref.prob.window.width)
			{
				selectedRule = sizes[i];
				break;
			}
		}

		ref.config.unit.width = selectedRule[0];
		ref.config.unit.height = selectedRule[1];
	}

	this.floatSetup = function(rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length-1; i++)
		{
			if (rules[i][0] < ref.prob.window.width)
			{
				selectedRule = rules[i];
				break;
			}
		}

		ref.config.float.enabled = selectedRule[1];
		ref.config.float.width = selectedRule[2];
		ref.config.float.height = selectedRule[3];
		ref.config.float.direction = selectedRule[4];
		ref.config.float.verticalOffset = selectedRule[5];
		ref.config.float.horizontalOffset = selectedRule[6];
		ref.config.float.isCloseBtn = selectedRule[7];
		ref.config.float.flowMode = selectedRule[8];
	}

	this.playerDivSetup = function(rules)
	{
		if (typeof rules.mainElement !== 'undefined' && rules.mainElement["type"] && rules.mainElement["name"])
		{
			if (rules.mainElement["type"] == "id")
			{
				ref.config.playerDivSetup.elmtId = rules.mainElement["name"];
			}
			else if (rules.mainElement["type"] == "class")
			{
				ref.config.playerDivSetup.elmtClassName = rules.mainElement["name"];
			}

			if (typeof rules.childElement !== 'undefined')
			{
				if (rules.childElement["type"] == "id")
				{
					ref.config.playerDivSetup.childElement = {};
					ref.config.playerDivSetup.childElement.elmtId = rules.childElement["name"];
				}
				else if (rules.childElement["type"] == "class")
				{
					ref.config.playerDivSetup.childElement = {};
					ref.config.playerDivSetup.childElement.elmtClassName = rules.childElement["name"];
				}
			}

			if (typeof rules.childElementNumber !== 'undefined')
			{
				ref.config.playerDivSetup.childElementNumber = rules.childElementNumber;
			}

			if (typeof rules.insertPosition !== 'undefined')
			{
				ref.config.playerDivSetup.insertPosition = rules.insertPosition;
			}
		}
	}

	this.newParamMapping = function(rules)
	{
		var selectedRule = rules[rules.length-1];
		for (var i=0; i<rules.length; i++)
		{
			var tagAdd='';
			var oldParam = rules[i][0];
			var newParam = rules[i][1];

			var regex = new RegExp("(\\?|&)"+oldParam+"\\=([^&]*)");
			var oldParamValue = ref.config.url.match(regex);
			if (oldParamValue && oldParamValue[2] != undefined)
			{
				ref.config.url += '&'+newParam+'='+oldParamValue[2];
			}
		}
	}

	this.run = function()
	{
		for (var i=0; i<this.config.dynamicSetup.length; i++)
		{
			var funcName = this.config.dynamicSetup[i][0];
			var params = this.config.dynamicSetup[i][1];

			try
			{
				var func = this.functionMap[funcName];
				func(params);
			}
			catch (e)
			{
				console.log(e.message);
			}
		}
	}

	this.functionMap = {'sizeSetup' : this.sizeSetup,
						'floatSetup' : this.floatSetup,
						'deviceTypeSetup' : this.deviceTypeSetup,
						'deviceTypeFloatSetup' : this.deviceTypeFloatSetup,
						'playerDivSetup' : this.playerDivSetup,
						'newParamMapping' : this.newParamMapping
	};
};
var SekindoClientDetections_URL = function (config) {
	this.COOKIE_TIMEOUT = 20*60*60;

	this.isSlider = config.isSlider;
	this.isOutstream = config.isOutstream;
	this.isSticky = config.isSticky;
	this.float = config.float;
	this.frameInfo = {
		isInsideGoogleFrame: false,
		isBuildFrame: false,
		isBuildFrameViaJs : false
	};
	this.needWrappingIframe = config.needWrappingIframe;
	this.isAmpProject = config.isAmpProject;
	this.isAPI = config.isAPI;
	this.sizesList = config.sizesList;
	this.x = config.x;
	this.y = config.y;
	this.url = config.url;
	this.origQString = config.origQString;
	this.inGdprIsRequired = config.inGdprIsRequired;
	this.inGdprRawConsent = config.inGdprRawConsent;
	this.debug = config.debug;
	this.ci = config.ci;
	this.geo = config.geo;
	this.dynamicSetup = config.dynamicSetup;
	this.prob = {};
	this.uuid = config.uuid;
	this.isResponsiveBanner = config.isResponsiveBanner;
	this.hideOnMissingMainElement = config.hideOnMissingMainElement;
	this.allowedUtmParameters = config.allowedUtmParameters;

	this.startTs = new Date().getTime();
	if (this.debug)
		console.log("SEKDBG: Starting timer towards timeout");

	this.getScriptElement = function()
	{
		if (typeof this.config.playerDivSetup.elmtClassName !== 'undefined' || typeof this.config.playerDivSetup.elmtId !== 'undefined')
		{
			try
			{
				if (this.debug)
				{
					console.log("SEKDBG: playerDivSetup config");
					console.log(this.config.playerDivSetup);
				}
				var specialElmt = this._getPlayerMainElement(window.top);
				if (specialElmt && typeof specialElmt !== 'undefined')
				{
					this.srcElement = specialElmt;
					if (this.debug)
					{
						console.log("SEKDBG: playerDivSetup element");
					}
					return;
				}
				if (typeof specialElmt === 'undefined' && this.hideOnMissingMainElement)
				{
					if (this.debug)
					{
						console.log("SEKDBG: Main element is missing");
					}
					this.srcElement = null;
					return;
				}
			}
			catch (e)
			{
				if (this.debug)
				{
					console.log("SEKDBG: playerDivSetup get specialElmt error - " + e.message);
				}
			}
		}

		if (document && typeof document.currentScript !== 'undefined')
		{
			if (this.debug)
				console.log("SEKDBG: currentScript is supported");
			this.srcElement = document.currentScript;
		}
		else if (document)
		{
			if (this.debug)
				console.log("SEKDBG: currentScript is not supported");
			try
			{
				/* IE 11 and below does not support currentScript */
				var scriptsList = [];
				if (typeof document.scripts !== 'undefined' && document.scripts)
				{
					if (this.debug)
						console.log("SEKDBG: document.scripts is supported");
					scriptsList = document.scripts;
				}
				else
				{
					if (this.debug)
						console.log("SEKDBG: document.scripts is not supported");
					scriptsList = document.getElementsByTagName('script');
				}
				for (var len = scriptsList.length, i = len; i >= 0; i --)
				{
					var scriptCandidate = scriptsList[i];
					if (scriptCandidate && scriptCandidate.src && scriptCandidate.src.indexOf(this.origQString) != -1)
					{
						this.srcElement = scriptCandidate;
						break;
					}
				}
			}
			catch (e)
			{
				this.srcElement = null;
			}
		}
	}

	this._getUuid = function()
	{
		if (this.ci.browser == 'safari' || this.ci.browser =='app')
		{
			try
			{
				var uuid = window.document.cookie.replace(/(?:(?:^|.*;\s*)csuuidSekindo\s*\=\s*([^;]*).*$)|^.*$/, "$1");
				if (uuid != '')
				{
					this.uuid = uuid;
				}

				window.document.cookie = "csuuidSekindo="+ this.uuid +"; max-age=" + this.COOKIE_TIMEOUT;
			}
			catch (e)
			{
				this.uuid = null;
			}
		}
		else
		{
			this.uuid = null;
		}
	}

	this._checkStartOverDebug = function(pageUrl)
	{
		debugIp = pageUrl.match(/(\?|&)customServerPrimis\=([^&]*)/);
		if (debugIp)
		{
			this.url = this.url.replace("live.sekindo.com",debugIp[2]);
		}
	}

	this.setInfo = function()
	{
		var pageUrl = this._getDiscoverableUrl();
		
		this._checkStartOverDebug(pageUrl);

		if (this.config.unit.width == 0)
			return;

		if (this.isAmpProject)
		{
			this.url += '&pubUrlAuto=';// + encodeURIComponent(pageUrl);
		}
		else
		{
			this.url += '&pubUrlAuto=' + encodeURIComponent(pageUrl);
		}
		this.url = this.url.replace('SEKXLEN', this.config.unit.width);
		this.url = this.url.replace('SEKYLEN', this.config.unit.height);
		this.url = this.url.replace("'", '%27');

		this._getUuid();
		if (this.uuid != null)
		{
			this.url += '&csuuid=' + encodeURIComponent(this.uuid);
		}

		if (!this.isSlider && !this.isOutstream)
		{
			if (!this.config.float.enabled && !this.isSticky)
			{
				this.url += '&videoType=normal';
			}
			else if (this.config.float.enabled)
			{
				this.url += '&videoType=flow' + '&floatWidth=' + this.config.float.width + '&floatHeight=' + this.config.float.height +
					'&floatDirection=' + this.config.float.direction + '&floatVerticalOffset=' + this.config.float.verticalOffset + '&floatHorizontalOffset=' + this.config.float.horizontalOffset +
					'&floatCloseBtn=' + this.config.float.isCloseBtn + '&flowMode='+this.config.float.flowMode;
			}
		}

		if (this.allowedUtmParameters && this.allowedUtmParameters.length > 0)
		{
			this._setUtmParameters(pageUrl);
		}

		try
		{
			// We assume we are the only element/advertiser inside DFP iframe
			var w = window;
			do
			{
				var wf = w.frameElement;
				while (wf != null)
				{
					if (wf.parentNode.id.indexOf('div-gpt-ad') != -1)
					{
						this.frameInfo.isInsideGoogleFrame = true;
						break;
					}
					wf = wf.parentNode;
				}
				w = w.parent;
			} while (w != w.parent);
		}
		catch(e) {}
		try
		{
			if (!this.frameInfo.isInsideGoogleFrame)
			{
				if (window.frameElement.id.indexOf('google_ads_iframe') != -1)
				{
					this.frameInfo.isInsideGoogleFrame = true;
				}
			}
		}
		catch (e) {}

		this.frameInfo.isBuildFrame = (this.needWrappingIframe && !this.frameInfo.isInsideGoogleFrame) || this.isAmpProject || (typeof this.config.playerDivSetup.elmtClassName !== 'undefined' || typeof this.config.playerDivSetup.elmtId !== 'undefined');
		/* Async exec requires isBuildFrame */
		// TODO:: should recognize and build iframe throgh JS also if document is ready/loaded
		this.frameInfo.isBuildFrameViaJs = (typeof this.config.playerDivSetup.elmtClassName !== 'undefined' || typeof this.config.playerDivSetup.elmtId !== 'undefined') || (this.frameInfo.isBuildFrame && this.srcElement && (this.srcElement.async || this.srcElement.defer));
		if (this.debug)
		{
			console.log("SEKDBG: [INFO] this.needWrappingIframe="+(this.needWrappingIframe ? 'yes' : 'no'));
			console.log("SEKDBG: [INFO] window.frameElement="+(window.frameElement ? 'ok' : 'n/a'));
			console.log("SEKDBG: [INFO] this.frameInfo.isBuildFrame="+(this.frameInfo.isBuildFrame ? 'yes' : 'no'));
			console.log("SEKDBG: [INFO] this.frameInfo.isInsideGoogleFrame="+(this.frameInfo.isInsideGoogleFrame ? 'yes' : 'no'));
			console.log("SEKDBG: [INFO] this.frameInfo.isBuildFrameViaJs="+(this.frameInfo.isBuildFrameViaJs ? 'yes' : 'no'));
			console.log("SEKDBG: [INFO] this.srcElement="+(this.srcElement ? 'ok' : 'n/a'));
			if (this.srcElement)
			{
				console.log("SEKDBG: [INFO] this.srcElement.async="+(this.srcElement.async ? 'yes' : 'no'));
				console.log("SEKDBG: [INFO] this.srcElement.defer="+(this.srcElement.defer ? 'yes' : 'no'));
			}
		}
	}

	this._getTagContainerSizeInfo = function()
	{
		var containerInfo = [];
		var containerIframe = '';
		var iframeElement = null;
		containerInfo['urlParams'] = '&x=320&y=480';
		containerInfo['xLen'] = 320;
		containerInfo['yLen'] = 480;

		try
		{
			if (window.parent.document.querySelector('[id^=google_ads_iframe_dummy_sekindoParent]') != null)
			{
				containerIframe = window.parent.document.querySelector('[id^=google_ads_iframe_dummy_sekindoParent]').id;
				iframeElement = window.parent.document.getElementById(containerIframe);
				containerInfo['xLen'] = iframeElement.parentElement.parentElement.parentElement.clientWidth;
				containerInfo['yLen'] = iframeElement.parentElement.parentElement.parentElement.clientHeight;
				containerInfo['urlParams'] = '&x='+containerInfo['xLen']+'&y='+containerInfo['yLen'];
			}
			else if (this.frameInfo.isInsideGoogleFrame)
			{
				containerIframe = window.parent.document.querySelector('iframe[id^=google_ads_iframe]').id;
				iframeElement = window.parent.document.getElementById(containerIframe);
				containerInfo['urlParams'] = '&x='+iframeElement.clientWidth+'&y='+iframeElement.clientHeight;
			}
		}
		catch (e)
		{
			if (this.debug)
			{
				console.log("SEKDBG: Exception get DFP or Dummy iframe element");
			}
		}

		return containerInfo;
	}

	this.run = function()
	{
		this._process({
			paramGdpr: this.inGdprIsRequired,
			paramConsent: this.inGdprRawConsent
		});
	}

	this._process = function(settings)
	{
		if (this.config.unit.width == 0)
			return;

		var ref = this;
		var url = this.url + '&gdpr='+settings.paramGdpr+'&gdprConsent='+encodeURIComponent(settings.paramConsent);
		if (settings.hasOwnProperty('paramWePassGdpr'))
			url += '&isWePassGdpr='+settings.paramWePassGdpr;

		if (this.frameInfo.isBuildFrame)
		{
			var constructed = false;
			var uniqueID = 'sekindoParent'+Math.round(Math.random()*1000);
			window['construct'+uniqueID] = function (iframe)
			{
				if (constructed) return;
				constructed = true;
				if (iframe.contentWindow || iframe.contentDocument)
				{
					var iFramewindow = iframe.contentWindow || iframe.contentDocument.defaultView;
					var iFrameDoc = iFramewindow.document || iframe.contentDocument;

					if (ref.isResponsiveBanner)
					{
						var tagContainerSizeInfo = ref._getTagContainerSizeInfo();
						if (tagContainerSizeInfo['urlParams'] != '')
						{
							url += tagContainerSizeInfo['urlParams'];
							ref.config.unit.width = tagContainerSizeInfo['xLen'];
							ref.config.unit.height = tagContainerSizeInfo['yLen'];
						}
					}

					iFrameDoc.open();
					iFrameDoc.write("<base href='https://amli.sekindo.com/'>" + unescape("%3Cscript src='") + url + unescape("' type='text/javascript'%3E%3C/script%3E"));
					iFrameDoc.close();
					iframe.width = ref.config.unit.width;
					iframe.height = !ref.isSticky && !ref.isOutstream && !ref.isAPI ? ref.config.unit.height : 1;
				}
			}

			if (this.frameInfo.isBuildFrameViaJs)
			{
				var iframe = document.createElement('iframe');
				var div0 = document.createElement('div');
				var div1 = document.createElement('div');
				div1.id = 'primisPlayerContainerDiv';

				iframe.marginWidth = '0';
				iframe.marginHeight = '0';
				iframe.hspace = '0';
				iframe.vspace = '0';
				if (this.isAPI) iframe.height = '0';
				iframe.frameBorder = '0';
				iframe.scrolling = 'no';
				iframe.id = 'google_ads_iframe_dummy_'+uniqueID;

				if (typeof this.config.playerDivSetup !== 'undefined' && typeof this.config.playerDivSetup.insertPosition !== 'undefined')
				{
					if (this.config.playerDivSetup.insertPosition == "inside")
					{
						this.srcElement.appendChild(div0);
					}
					else if (this.config.playerDivSetup.insertPosition == "after")
					{
						this.srcElement.parentNode.insertBefore(div0, this.srcElement.nextElementSibling);
					}
					else if (this.config.playerDivSetup.insertPosition == "before")
					{
						this.srcElement.parentNode.insertBefore(div0, this.srcElement);
					}
				}
				else
				{
					if (this.srcElement)
					{
						this.srcElement.parentNode.insertBefore(div0, this.srcElement);
					}
				}
				div0.appendChild(div1);
				div1.appendChild(iframe);
				window['construct'+uniqueID](iframe);
			}
			else
			{
				var apiHeight = this.isAPI ? ' height="0"' : '';
				var code = '<div><div><iframe width="' +  this.config.unit.width + apiHeight + '"  marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" onload="construct'+uniqueID+'(this)" id ="google_ads_iframe_dummy_'+uniqueID+'"></iframe></div></div>';
				document.write(code);
			}
		}
		else
		{
			if (ref.isResponsiveBanner)
			{
				var tagContainerSizeInfo = ref._getTagContainerSizeInfo();
				if (tagContainerSizeInfo['urlParams'] != '')
				{
					url += tagContainerSizeInfo['urlParams'];
				}
			}

			document.write(unescape("%3Cscript src='") + url + unescape("' type='text/javascript'%3E%3C/script%3E"));
		}
	}

	this._getDiscoverableUrl = function()
	{
		var url = '';

		try
		{
			if (window.top == window)
			{
				url = window.location.href;
			}
			else
			{
				try
				{
					url = window.top.location.href;
				}
				catch (e2)
				{
					url = document.referrer;
				}
			}
		}
		catch(e1) {}

		return url;
	}

	this._getPlayerMainElement = function(orgWin)
	{
		var sourceElmt;
		if (window.frameElement !== null)
		{
			var pdmt, contElmt, gfrm=window.frameElement.id;
			pdmt 	 = window.parent.document.getElementById(gfrm);
			contElmt = pdmt.parentNode.parentNode.parentNode; // element before DFP div
			orgWin   = contElmt.ownerDocument.defaultView || contElmt.ownerDocument.parentWindow;
		}
		try
		{
			if (this.debug)
			{
				console.log("SEKDBG: mainElement owner");
				console.log(orgWin);
			}
			sourceElmt = this._getSourceElementByType(orgWin.top.document, this.config.playerDivSetup);
		}
		catch (e)
		{
			if (this.debug)
			{
				console.log("SEKDBG: Exception get mainElement");
			}
			sourceElmt = this._getSourceElementByType(orgWin.document, this.config.playerDivSetup);
		}
		if (this.debug)
		{
			console.log("SEKDBG: playerDivSetup mainElement");
			console.log(sourceElmt);
		}

		if (sourceElmt && typeof sourceElmt !== 'undefined' && typeof this.config.playerDivSetup.childElement !== 'undefined')
		{
			sourceElmt = this._getSourceElementByType(sourceElmt, this.config.playerDivSetup.childElement);
			if (this.debug)
			{
				console.log("SEKDBG: playerDivSetup childElement");
				console.log(sourceElmt);
			}
		}

		if (typeof this.config.playerDivSetup.childElementNumber !== 'undefined')
		{
			for (var i = 0; i < sourceElmt.childElementCount; i++)
			{
				if (i == this.config.playerDivSetup.childElementNumber - 1)
				{
					sourceElmt = sourceElmt.children[i];
				}
			}
		}
		return sourceElmt;
	}

	this._getSourceElementByType = function(orgWin, playerDivSetup)
	{
		var sourceElmt = null;
		if (typeof playerDivSetup.elmtClassName !== 'undefined')
		{
			sourceElmt = orgWin.getElementsByClassName(playerDivSetup.elmtClassName)[0];
		}
		else if (typeof playerDivSetup.elmtId !== 'undefined')
		{
			sourceElmt = orgWin.getElementById(playerDivSetup.elmtId);
		}
		return sourceElmt;
	}

	this._setUtmParameters = function(pageUrl)
	{
		var d_utm = '', ref = this;
		this.url = this.url.replace('&subId=[SUBID_ENCODED]','');
		if (pageUrl != '')
		{
			var parts = pageUrl.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
				for (var i = 0; i < ref.allowedUtmParameters.length; i++)
				{
					if (key.toLowerCase() == ref.allowedUtmParameters[i])
					{
						d_utm += '-'+value;
					}
				}
			});
			d_utm = d_utm.substring(1);
		}
		if (d_utm == '')
		{
			d_utm = 'default';
		}
		this.url += '&subId=' + d_utm;
	}

	this._getViewportSize = function(w)
	{
		if (w.innerWidth != null)
			return {w:w.innerWidth, h:w.innerHeight};

		var d = w.document;
		if (document.compatMode == "CSS1Compat")
			return {w: d.documentElement.clientWidth, h: d.documentElement.clientHeight};

		return {w: d.body.clientWidth, h: d.body.clientWidth};
	};

	this._setProb = function()
	{
		try {
			viewPortSize = this._getViewportSize(window.top);
		}
		catch (e) {
			viewPortSize = this._getViewportSize(window);
		}

		this.prob.window = {};
		this.prob.window.width = viewPortSize.w;
		this.prob.window.height = viewPortSize.h;
		this.prob.geo = this.geo;
		this.prob.ci = this.ci;
	}

	this._setConfig = function()
	{
		this.config = {};
		this.config.unit = {}
		this.config.unit.width =  this.x;
		this.config.unit.height = this.y;
		this.config.float = this.float;
		this.config.dynamicSetup = this.dynamicSetup;
		this.config.playerDivSetup = {};
		this.config.url = this.url;
	}

	this._setProb();
	this._setConfig();

	var dynamicConfig = new SekindoClientDynamicConfig(this.config, this.prob);
	dynamicConfig.run();
	// dynamicConfig can change this url
	this.url = this.config.url;

	this.getScriptElement();
	this.setInfo();
};

				var urlDetObj = new SekindoClientDetections_URL({
					url: 'https://live.sekindo.com/live/liveView.php?s=97364&cbuster=[CACHE_BUSTER]&pubUrl=[PAGE_URL_ENCODED]&x=[WIDTH]&y=[HEIGHT]&vp_content=plembedf5chiqozkuwt&cbuster=1572644161',
					origQString: 's=97364&cbuster=[CACHE_BUSTER]&pubUrl=[PAGE_URL_ENCODED]&x=[WIDTH]&y=[HEIGHT]&vp_content=plembedf5chiqozkuwt',
					x: 300,
					y: 250,
					isSlider: false,
					isOutstream: false,
					isSticky: false,
					needWrappingIframe: 1,
					isAmpProject: 0,
					float: {enabled: false,
						width: 310, height: 260,
						direction: 'br', verticalOffset: 10,
						horizontalOffset: 10, isCloseBtn: 0},
					isAPI: false,
					inGdprIsRequired: 0,
					inGdprRawConsent: '',
					debug: 0,
					ci: {"extra":{"schemaVer":"11","os":"Windows","osVersion":"6.1","osVersionMajor":"6","osVersionMinor":"1","deviceManufacturer":"","deviceModel":"","deviceCodeName":"","deviceType":"desktop","browser":"Firefox","browserType":"browser","browserVersion":"70.0","browserVersionMajor":"70","browserVersionMinor":"0"},"browser":"firefox","os":"windows","osVer":"","deviceType":"desktop"},
					geo: 'NG',
					dynamicSetup: [],
					uuid: '5dbca54100778',
					isResponsiveBanner: false,
					hideOnMissingMainElement: false,
					allowedUtmParameters: []				});

				urlDetObj.run();
			})();
