(function () {
    var createAnalyticIframe = function (){
        var analyticIframe = document.getElementById("WidgetStats"); 
        if (analyticIframe) 
            return; 
        var ifr = document.createElement('iframe'); 
        ifr.id = "WidgetStats"; 
        ifr.width = "0"; 
        ifr.height = "0"; 
        ifr.style.cssText = "display:none"; 
        document.body.appendChild(ifr);
        
        var IfrDoc = (ifr.contentWindow || ifr.contentDocument);
        if (IfrDoc.document)
            IfrDoc = IfrDoc.document;
        var html =  '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109910709-5"></script> <script> window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag("js", new Date()); function viPushStats(medium, source, campaign, content) { gtag("config", "UA-109910709-5", { "page_title": medium + "_" + source + "_" + campaign + "_" + content, "campaign": { "medium": medium, "source": source, "name": campaign, "content": content } }); } </script>'; 
        IfrDoc.open(); 
        IfrDoc.write(html); 
        IfrDoc.close(); 
    }, 
    pushTracking = function(medium, source, campaign, content){ 
        var analyticIframe = document.getElementById("WidgetStats"); 
        if (!analyticIframe) { 
            console.log("Analytic Iframe Not Found"); 
            return; 
        } 
        if (typeof analyticIframe.contentWindow.viPushStats === 'function') { 
            analyticIframe.contentWindow.viPushStats(medium, source, campaign, content); 
        } else { 
            console.log("Can't Invoking viPushStats"); 
        } 
    },
    shuffle = function (arr) {
        var ctr = arr.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr[ctr];
            arr[ctr] = arr[index];
            arr[index] = temp;
        }
        return arr;
    };
    createAnalyticIframe();
    
    var widgetIdentifyId = "widg_" + Math.floor((Math.random() * 10000) + 1);
    var widgetClass = "viWidget";
    var widgetHeight = 250;
    var widgetSlots = document.getElementsByClassName(widgetClass);
    var widgetElem;
    for (var i = 0; i < widgetSlots.length; i++) {
        if (!widgetSlots[i].getAttribute("data-rendered")) {
            widgetSlots[i].dataset.rendered = "true";
            widgetSlots[i].id = widgetIdentifyId;
            widgetElem = widgetSlots[i];
            break;
        }
    }
    if (!widgetElem)
        return;
    widgetElem.style.margin = '0 auto';
    widgetElem.style.width = '100%';
    widgetElem.style.height = widgetHeight + 'px';


    var Ifr = document.createElement('iframe');
    Ifr.id = 'ifr_' + widgetIdentifyId;
    Ifr.setAttribute('frameborder', 'no');
    Ifr.setAttribute('scrolling', 'no');
    Ifr.setAttribute('allowtransparency', 'true');
    Ifr.setAttribute('hidefocus', 'true');
    Ifr.setAttribute('marginwidth', '0');
    Ifr.setAttribute('marginheight', '0');
    Ifr.setAttribute('topmargin', '0');
    Ifr.setAttribute('leftmargin', '0');
    Ifr.style.width = '100%';
    Ifr.style.height = widgetHeight + 'px';
    widgetElem.appendChild(Ifr);

    var IfrDoc = (Ifr.contentWindow || Ifr.contentDocument);
    if (IfrDoc.document)
        IfrDoc = IfrDoc.document;

    var contents_object = [
        {title: 'Price of Samsung S10 5G', url: 'https://universesearch.net/results/Price-of-Samsung-S10-5G/'},
        {title: 'Cheapest Cell Phone Plans', url: 'https://universesearch.net/results/Cheapest-Cell-Phone-Plans/'},
        {title: 'iPhone XS Max Deals', url: 'https://universesearch.net/results/iPhone-XS-Max-Deals/'},
        {title: '5G S10 Android Mobile Phone Deals', url: 'https://universesearch.net/results/5G-S10-Android-Mobile-Phone-Deals/'},
        {title: '10 Best Wireless Headphones', url: 'https://universesearch.net/results/10-Best-Wireless-Headphones/'}
    ];
    shuffle(contents_object);
    var contents = "";
    contents_object.forEach(function(item, k){
        if (k < 4){
            contents += '<li class="mn_sc_CtyOne_32 clearfix">';
                contents += '<span class="mn_sc_CtyOne_bullet"></span>';
                contents += '<div class="mn_wrap">';
                    contents += '<div class="mn_tbl">';
                        contents += '<a href="'+item.url+'" target="_blank" id="dk'+(k+1)+'" name="dk'+(k+1)+'">'+item.title+'</a>';
                    contents += '</div>';
                contents += '</div>';
                contents += '<span class="mn_sc_CtyOne_actn">a</span>';
            contents += '</li>';
        }
    });

    var html = "";
    html += '<div id="mn_wrapper">';
    html += '<div class="container" id="mn_unitContainer" data-counter="0">';
        html += '<ul id="uniqueContainer0" class="container kws kws_74 clearfix multiline mn_alt" data-editable="true" data-type="kws" data-unitrnk="1" data-id="kws_74" data-counter="4">';
            html += contents;
        html += '</ul>';
    html += '</div>';
html += '</div>';
html += '<style>';
html += '@font-face {font-family: "Lato-Regular";src: url("https://contextual.media.net/__media__/fonts/Lato-Regular/Lato-Regular.eot");src: url("https://contextual.media.net/__media__/fonts/Lato-Regular/Lato-Regular.eot?#iefix") format("embedded-opentype"),url("https://contextual.media.net/__media__/fonts/Lato-Regular/Lato-Regular.woff") format("woff"),url("https://contextual.media.net/__media__/fonts/Lato-Regular/Lato-Regular.ttf") format("truetype"),url("https://contextual.media.net/__media__/fonts/Lato-Regular/Lato-Regular.svg#Lato-Regular") format("svg");font-weight: normal;font-style: normal;}@font-face {font-family: "bullet321";src: url("https://contextual.media.net/__media__/fonts/bullet321/bullet321.eot");src: url("https://contextual.media.net/__media__/fonts/bullet321/bullet321.eot?#iefix") format("embedded-opentype"),url("https://contextual.media.net/__media__/fonts/bullet321/bullet321.woff") format("woff"),url("https://contextual.media.net/__media__/fonts/bullet321/bullet321.ttf") format("truetype"),url("https://contextual.media.net/__media__/fonts/bullet321/bullet321.svg#bullet321") format("svg");font-weight: normal;font-style: normal;}						*{margin: 0;padding: 0;}html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,time, mark, audio, video{border: 0;font: inherit;vertical-align: baseline;}article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section{display: block;}body{font-family: Arial, Helvetica, sans-serif;background-color:#fff;font-size: 100%;line-height: 1;}ol, ul{list-style: none;}blockquote, q{quotes: none;}blockquote:before, blockquote:after,q:before, q:after{content: "";content: none;}table{border-collapse: collapse;border-spacing: 0;}a{text-decoration:none;outline:none;}a:hover{text-decoration:none;}input{outline:none;}.clear{clear: both;display: block;overflow: hidden;visibility: hidden;width: 0;height: 0;}.clearfix:after{clear: both;content: " ";display: block;font-size: 0;line-height: 0;visibility: hidden;width: 0;height: 0;}.clearfix{display: inline-block;}* html .clearfix{height: 1%;}.clearfix{display: block;}body{width:100%;height:100%}html{width:100%;height:100%}body{overflow:hidden}ul.kws li{box-sizing:border-box}ul.columnLayout{margin-left:-1%;margin-right:-1%}ul.columnLayout li{margin-left:1%;margin-right:1%;float:left}ul.columnLayout_2 li{width:48%}ul.columnLayout_3 li{width:31.33%}#mn_wrapper{box-sizing:border-box;overflow:hidden;height:100%;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-style:none;border-color:#444;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:0}ul.columnLayout_4 li{width:23%}ul.columnLayout_5 li{width:18%}.kwsElipsis li a{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#mn_unitContainer{margin-top:0}.top-left{top:0;left:0}.top-right{top:0;right:0}.bottom-left{bottom:0;left:0}.bottom-right{bottom:0;right:0}.mn_footerThree{height:15px;line-height:15px;width:17px;background-repeat:no-repeat;background-image:url(https://contextual.media.net/__media__/images/800000006/10124_505bb4db55aaa1165fa3b242bf39701b.png);position:absolute;z-index:9999999;background-position:-58px 0}.mn_footerThree:hover{width:75px;background-position:0 0}#mn_footer{height:15px;line-height:15px}.mn_sc_CtyOne_32{border-width:1px;border-style:solid;border-color:#444;background-color:;margin-bottom:15px;position:relative;box-sizing:border-box;border-top-width:2px;border-right-width:2px;border-bottom-width:2px;border-left-width:2px;border-top-left-radius:12px;border-top-right-radius:12px;border-bottom-right-radius:12px;border-bottom-left-radius:12px;box-shadow:#444 3px 3px 3px 3px;margin-right:10px}.mn_sc_CtyOne_32.last{margin-bottom:0}.mn_sc_CtyOne_32:last-child{margin-bottom:0}.mn_sc_CtyOne_32 a{line-height:44px;padding:0 40px 0 36px;color:#911;word-wrap:break-word;z-index:3;position:relative;font-size:16px;margin-left:0;height:44px;overflow:hidden;display:block;vertical-align:middle;text-transform:capitalize;background-image:url(https://contextual.media.net/__media__/pics/800028474/1x1.gif);font-family:Lato-Regular;font-weight:inherit;padding-right:38px;padding-left:30px}.mn_sc_CtyOne_32 .mn_sc_CtyOne_bullet{background-color:#000;width:0;height:0;display:block;float:left;padding:3px;position:absolute;top:50%;margin-top:-3px;z-index:10;margin-left:13px;padding-top:3px;padding-right:3px;padding-bottom:3px;padding-left:3px;border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:10px;border-bottom-left-radius:10px}.mn_sc_CtyOne_32:hover{background-color:;border-color:#585858;-webkit-transition-property:background;-moz-transition-property:background;-ms-transition-property:background;transition-property:background;-webkit-transition-duration:.3s;-moz-transition-duration:.3s;-ms-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;-moz-transition-timing-function:ease-out;-ms-transition-timing-function:ease-out;transition-timing-function:ease-out}.mn_sc_CtyOne_32:hover a{color:17;text-decoration:underline;font-weight:inherit;font-size:16px}.mn_sc_CtyOne_32:hover .mn_sc_CtyOne_bullet{color:#fff;border-color:#fff}.multiline .mn_sc_CtyOne_32 .mn_wrap{height:44px;overflow:hidden}.multiline .mn_sc_CtyOne_32 .mn_tbl{width:100%;table-layout:fixed;display:table}.mn_sc_CtyOne_32 .mn_sc_CtyOne_actn{color:#911;display:block;font-size:16px;text-align:center;position:absolute;right:0;top:0;padding:0 10px;line-height:44px;font-family:bullet321;margin-left:0;margin-right:5px}.multiline .mn_sc_CtyOne_32 a{height:44px;display:table-cell;line-height:22px}.multiline .mn_sc_CtyOne_32 .mn_sc_CtyOne_bullet{line-height:44px}.fill_anchor .mn_sc_CtyOne_32 a{position:static}.fill_anchor .mn_sc_CtyOne_32 a:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:11;background-image:url(https://contextual.media.net/__media__/pics/800028474/1x1.gif)}.fill_anchor .mn_sc_CtyOne_32 .mn_sc_CtyOne_bullet{z-index:12}.multiline .mn_sc_CtyOne_32 .mn_sc_CtyOne_actn{line-height:44px}.mn_sc_CtyOne_32:hover .mn_sc_CtyOne_actn{font-size:18px;text-shadow:1px 0 0 0}';
html += '</style>';
    
    IfrDoc.open();
    IfrDoc.write(html);
    IfrDoc.close();
    
    pushTracking("Widget ID: ", window.location.hostname, "na", "na"); 
})();