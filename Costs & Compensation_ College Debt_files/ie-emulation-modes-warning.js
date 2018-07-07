<!DOCTYPE html>
<!--[if IEMobile 7]><html class="iem7"  lang="en" dir="ltr" class="sticky-footer"><![endif]-->
<!--[if lte IE 6]><html class="lt-ie9 lt-ie8 lt-ie7"  lang="en" dir="ltr" class="sticky-footer"><![endif]-->
<!--[if (IE 7)&(!IEMobile)]><html class="lt-ie9 lt-ie8"  lang="en" dir="ltr" class="sticky-footer"><![endif]-->
<!--[if IE 8]><html class="lt-ie9"  lang="en" dir="ltr" class="sticky-footer"><![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)]><!--><html  lang="en" dir="ltr" class="sticky-footer" prefix="content: http://purl.org/rss/1.0/modules/content/ dc: http://purl.org/dc/terms/ foaf: http://xmlns.com/foaf/0.1/ og: http://ogp.me/ns# rdfs: http://www.w3.org/2000/01/rdf-schema# sioc: http://rdfs.org/sioc/ns# sioct: http://rdfs.org/sioc/types# skos: http://www.w3.org/2004/02/skos/core# xsd: http://www.w3.org/2001/XMLSchema#"><!--<![endif]-->

<head>
  <meta charset="utf-8" /><script type="text/javascript">window.NREUM||(NREUM={}),__nr_require=function(e,t,n){function r(n){if(!t[n]){var o=t[n]={exports:{}};e[n][0].call(o.exports,function(t){var o=e[n][1][t];return r(o||t)},o,o.exports)}return t[n].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<n.length;o++)r(n[o]);return r}({1:[function(e,t,n){function r(){}function o(e,t,n){return function(){return i(e,[f.now()].concat(u(arguments)),t?null:this,n),t?void 0:this}}var i=e("handle"),a=e(2),u=e(3),c=e("ee").get("tracer"),f=e("loader"),s=NREUM;"undefined"==typeof window.newrelic&&(newrelic=s);var p=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],d="api-",l=d+"ixn-";a(p,function(e,t){s[t]=o(d+t,!0,"api")}),s.addPageAction=o(d+"addPageAction",!0),s.setCurrentRouteName=o(d+"routeName",!0),t.exports=newrelic,s.interaction=function(){return(new r).get()};var m=r.prototype={createTracer:function(e,t){var n={},r=this,o="function"==typeof t;return i(l+"tracer",[f.now(),e,n],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],n),o)try{return t.apply(this,arguments)}catch(e){throw c.emit("fn-err",[arguments,this,e],n),e}finally{c.emit("fn-end",[f.now()],n)}}}};a("setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(e,t){m[t]=o(l+t)}),newrelic.noticeError=function(e){"string"==typeof e&&(e=new Error(e)),i("err",[e,f.now()])}},{}],2:[function(e,t,n){function r(e,t){var n=[],r="",i=0;for(r in e)o.call(e,r)&&(n[i]=t(r,e[r]),i+=1);return n}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],3:[function(e,t,n){function r(e,t,n){t||(t=0),"undefined"==typeof n&&(n=e?e.length:0);for(var r=-1,o=n-t||0,i=Array(o<0?0:o);++r<o;)i[r]=e[t+r];return i}t.exports=r},{}],4:[function(e,t,n){t.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],ee:[function(e,t,n){function r(){}function o(e){function t(e){return e&&e instanceof r?e:e?c(e,u,i):i()}function n(n,r,o,i){if(!d.aborted||i){e&&e(n,r,o);for(var a=t(o),u=m(n),c=u.length,f=0;f<c;f++)u[f].apply(a,r);var p=s[y[n]];return p&&p.push([b,n,r,a]),a}}function l(e,t){v[e]=m(e).concat(t)}function m(e){return v[e]||[]}function w(e){return p[e]=p[e]||o(n)}function g(e,t){f(e,function(e,n){t=t||"feature",y[n]=t,t in s||(s[t]=[])})}var v={},y={},b={on:l,emit:n,get:w,listeners:m,context:t,buffer:g,abort:a,aborted:!1};return b}function i(){return new r}function a(){(s.api||s.feature)&&(d.aborted=!0,s=d.backlog={})}var u="nr@context",c=e("gos"),f=e(2),s={},p={},d=t.exports=o();d.backlog=s},{}],gos:[function(e,t,n){function r(e,t,n){if(o.call(e,t))return e[t];var r=n();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return e[t]=r,r}var o=Object.prototype.hasOwnProperty;t.exports=r},{}],handle:[function(e,t,n){function r(e,t,n,r){o.buffer([e],r),o.emit(e,t,n)}var o=e("ee").get("handle");t.exports=r,r.ee=o},{}],id:[function(e,t,n){function r(e){var t=typeof e;return!e||"object"!==t&&"function"!==t?-1:e===window?0:a(e,i,function(){return o++})}var o=1,i="nr@id",a=e("gos");t.exports=r},{}],loader:[function(e,t,n){function r(){if(!x++){var e=h.info=NREUM.info,t=d.getElementsByTagName("script")[0];if(setTimeout(s.abort,3e4),!(e&&e.licenseKey&&e.applicationID&&t))return s.abort();f(y,function(t,n){e[t]||(e[t]=n)}),c("mark",["onload",a()+h.offset],null,"api");var n=d.createElement("script");n.src="https://"+e.agent,t.parentNode.insertBefore(n,t)}}function o(){"complete"===d.readyState&&i()}function i(){c("mark",["domContent",a()+h.offset],null,"api")}function a(){return E.exists&&performance.now?Math.round(performance.now()):(u=Math.max((new Date).getTime(),u))-h.offset}var u=(new Date).getTime(),c=e("handle"),f=e(2),s=e("ee"),p=window,d=p.document,l="addEventListener",m="attachEvent",w=p.XMLHttpRequest,g=w&&w.prototype;NREUM.o={ST:setTimeout,SI:p.setImmediate,CT:clearTimeout,XHR:w,REQ:p.Request,EV:p.Event,PR:p.Promise,MO:p.MutationObserver};var v=""+location,y={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1071.min.js"},b=w&&g&&g[l]&&!/CriOS/.test(navigator.userAgent),h=t.exports={offset:u,now:a,origin:v,features:{},xhrWrappable:b};e(1),d[l]?(d[l]("DOMContentLoaded",i,!1),p[l]("load",r,!1)):(d[m]("onreadystatechange",o),p[m]("onload",r)),c("mark",["firstbyte",u],null,"api");var x=0,E=e(4)},{}]},{},["loader"]);</script>
<link rel="shortcut icon" href="https://it.arizona.edu/sites/all/themes/ua_zen_it/favicon.ico" type="image/vnd.microsoft.icon" />
<meta name="generator" content="Drupal 7 (http://drupal.org)" />
<link rel="canonical" href="https://it.arizona.edu/service/u-system-accounts" />
<link rel="shortlink" href="https://it.arizona.edu/node/2536" />
  <title>U-System Accounts | Information Technology | University of Arizona</title>

      <meta name="MobileOptimized" content="width">
    <meta name="HandheldFriendly" content="true">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="cleartype" content="on">

  <link type="text/css" rel="stylesheet" href="https://it.arizona.edu/sites/default/files/css/css_lQaZfjVpwP_oGNqdtWCSpJT1EMqXdMiU84ekLLxQnc4.css" media="all" />
<link type="text/css" rel="stylesheet" href="https://it.arizona.edu/sites/default/files/css/css_39RhBzNI_WF8hpcqiXCeyy1uCduarCwpzGT6MUE6c-8.css" media="all" />
<link type="text/css" rel="stylesheet" href="https://it.arizona.edu/sites/default/files/css/css_Z3o2JdjT8g49viJvpG8JW3E1Pf3GhnXy2cHtYSXTIuI.css" media="all" />
<link type="text/css" rel="stylesheet" href="//cdn.uadigital.arizona.edu/lib/ua-brand-icons/latest/ua-brand-icons.css" media="all" />
<link type="text/css" rel="stylesheet" href="https://it.arizona.edu/sites/default/files/css/css_XdmrWIPXzFfCGPaSmHSE-7IfBko_hHrPexog5A9mKug.css" media="all" />
<link type="text/css" rel="stylesheet" href="//cdn.uadigital.arizona.edu/lib/ua-bootstrap/1.0.0-beta1/ua-bootstrap.min.css" media="all" />
<link type="text/css" rel="stylesheet" href="https://it.arizona.edu/sites/default/files/css/css_xQenzgNA5J8WaziP9iHisNZ8kmI9vRqQbC2qv8l40j8.css" media="all" />
<link type="text/css" rel="stylesheet" href="https://it.arizona.edu/sites/default/files/css/css_F4jN2a9ElKe-uQFVBFjVxfmvQuQWKNW2QWcPCVxAXIc.css" media="all" />
  <script src="https://it.arizona.edu/sites/default/files/js/js_2KlXA4Z5El1IQFVPxDN1aX5mIoMSFWGv3vwsP77K9yk.js"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write("<script src='/profiles/ua_quickstart/modules/contrib/jquery_update/replace/jquery/1.10/jquery.min.js'>\x3C/script>")</script>
<script src="https://it.arizona.edu/sites/default/files/js/js_vSmhpx_T-AShyt_WMW5_TcwwxJP1imoVOa8jvwL_mxE.js"></script>
<script src="https://it.arizona.edu/sites/default/files/js/js_BLxotNs2yt7YGlf9QRI9L9AMfdnkQfnN-_ADBTW3SiE.js"></script>
<script src="https://it.arizona.edu/sites/default/files/js/js_f_6-OzlFXjayKlsU5sJKLwjz7LFQvdIZDm-Mt6jKwyM.js"></script>
<script src="https://it.arizona.edu/sites/default/files/js/js_gIodppHPtNxWukgVC19LzlMnY0lSXJI9xgR6MG8qQ7U.js"></script>
<script>(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-88179756-1", {"cookieDomain":"auto"});ga("require", "linkid", "linkid.js");ga("set", "page", location.pathname + location.search + location.hash);ga("send", "pageview");</script>
<script src="https://it.arizona.edu/sites/default/files/js/js_bM3W_o2_JplqzJ0aaTySZdXs-jjSynQjzNuwEZYR1aQ.js"></script>
<script src="https://it.arizona.edu/sites/default/files/js/js_M4gJUe90PiStdfe4s0tOhEbYBgu9UHBsXfUkCSYHU_w.js"></script>
<script>jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","ajaxPageState":{"theme":"ua_zen_it","theme_token":"u7YACrl-y4QmfZRAkHBlFkGkQkZ5DHORvhFnT6arNW8","jquery_version":"1.10","js":{"\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.3.5\/js\/bootstrap.min.js":1,"0":1,"public:\/\/google_tag\/google_tag.script.js":1,"\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/1.10.2\/jquery.min.js":1,"1":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"profiles\/ua_quickstart\/modules\/contrib\/jquery_update\/replace\/ui\/external\/jquery.cookie.js":1,"profiles\/ua_quickstart\/modules\/contrib\/jquery_update\/replace\/misc\/jquery.form.min.js":1,"misc\/ajax.js":1,"profiles\/ua_quickstart\/modules\/contrib\/jquery_update\/js\/jquery_update.js":1,"sites\/all\/modules\/google_cse\/google_cse.js":1,"sites\/all\/modules\/custom_search\/js\/custom_search.js":1,"profiles\/ua_quickstart\/modules\/contrib\/views\/js\/base.js":1,"misc\/progress.js":1,"profiles\/ua_quickstart\/modules\/contrib\/views\/js\/ajax_view.js":1,"sites\/all\/modules\/google_analytics\/googleanalytics.js":1,"2":1,"sites\/all\/libraries\/placeholder\/jquery.placeholder.js":1,"sites\/all\/modules\/placeholder\/placeholder.js":1,"sites\/all\/libraries\/easy-responsive-tabs\/js\/easyResponsiveTabs.js":1,"profiles\/ua_quickstart\/modules\/contrib\/field_group\/field_group.js":1,"sites\/all\/modules\/field_group_easy_responsive_tabs\/js\/field_group_easy_responsive_tabs.js":1,"profiles\/ua_quickstart\/modules\/custom\/ua_featured_content\/js\/modernizr.custom.7860.js":1,"profiles\/ua_quickstart\/modules\/custom\/ua_featured_content\/js\/ua_featured_content.js":1,"profiles\/ua_quickstart\/libraries\/superfish\/jquery.hoverIntent.minified.js":1,"profiles\/ua_quickstart\/libraries\/superfish\/sfsmallscreen.js":1,"profiles\/ua_quickstart\/libraries\/superfish\/supposition.js":1,"profiles\/ua_quickstart\/libraries\/superfish\/superfish.js":1,"profiles\/ua_quickstart\/libraries\/superfish\/supersubs.js":1,"profiles\/ua_quickstart\/modules\/contrib\/superfish\/superfish.js":1,"sites\/all\/themes\/ua_zen_it\/scripts\/custom.js":1},"css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.theme.css":1,"profiles\/ua_quickstart\/modules\/contrib\/date\/date_api\/date.css":1,"profiles\/ua_quickstart\/modules\/contrib\/date\/date_popup\/themes\/datepicker.1.7.css":1,"profiles\/ua_quickstart\/modules\/contrib\/date\/date_repeat_field\/date_repeat_field.css":1,"modules\/field\/theme\/field.css":1,"sites\/all\/modules\/google_cse\/google_cse.css":1,"sites\/all\/modules\/mollom\/mollom.css":1,"modules\/node\/node.css":1,"modules\/search\/search.css":1,"profiles\/ua_quickstart\/modules\/custom\/ua_event\/css\/ua_event.css":1,"profiles\/ua_quickstart\/modules\/custom\/ua_featured_content\/css\/ua_featured_content.css":1,"profiles\/ua_quickstart\/modules\/custom\/ua_news\/css\/ua_news.css":1,"profiles\/ua_quickstart\/modules\/custom\/ua_person\/css\/ua_person.css":1,"modules\/user\/user.css":1,"profiles\/ua_quickstart\/modules\/contrib\/views\/css\/views.css":1,"profiles\/ua_quickstart\/modules\/contrib\/ctools\/css\/ctools.css":1,"sites\/all\/modules\/custom_search\/custom_search.css":1,"sites\/all\/libraries\/easy-responsive-tabs\/css\/easy-responsive-tabs.css":1,"profiles\/ua_quickstart\/modules\/contrib\/field_collection\/field_collection.theme.css":1,"sites\/all\/modules\/custom\/uits_247alerts\/uits_247alerts.css":1,"sites\/all\/libraries\/fontawesome\/css\/font-awesome.css":1,"\/\/cdn.uadigital.arizona.edu\/lib\/ua-brand-icons\/latest\/ua-brand-icons.css":1,"profiles\/ua_quickstart\/libraries\/superfish\/css\/superfish.css":1,"profiles\/ua_quickstart\/libraries\/superfish\/css\/superfish-smallscreen.css":1,"\/\/cdn.uadigital.arizona.edu\/lib\/ua-bootstrap\/1.0.0-beta1\/ua-bootstrap.min.css":1,"sites\/all\/themes\/ua_zen\/system.menus.css":1,"sites\/all\/themes\/ua_zen\/system.messages.css":1,"sites\/all\/themes\/ua_zen\/system.theme.css":1,"sites\/all\/themes\/ua_zen\/css\/styles.css":1,"sites\/all\/themes\/ua_zen_it\/css\/overrides.css":1,"public:\/\/css_injector\/css_injector_6.css":1,"public:\/\/css_injector\/css_injector_16.css":1,"public:\/\/css_injector\/css_injector_26.css":1,"public:\/\/css_injector\/css_injector_36.css":1,"public:\/\/css_injector\/css_injector_41.css":1}},"googleCSE":{"cx":"011023935467730397371:kla2meminjq","language":"","resultsWidth":600,"domain":"www.google.com","showWaterMark":true},"custom_search":{"form_target":"_self","solr":0},"views":{"ajax_path":"\/views\/ajax","ajaxViews":{"views_dom_id:b6f2e92fb5c56262ec26a2868f8f45f0":{"view_name":"documentation","view_display_id":"block","view_args":"2536","view_path":"node\/2536","view_base_path":null,"view_dom_id":"b6f2e92fb5c56262ec26a2868f8f45f0","pager_element":0},"views_dom_id:879d8da62cdab65160965ae8034f5a29":{"view_name":"documentation","view_display_id":"block_1","view_args":"2536","view_path":"node\/2536","view_base_path":null,"view_dom_id":"879d8da62cdab65160965ae8034f5a29","pager_element":0},"views_dom_id:d83fc89a3d51660e363921bccf32bc76":{"view_name":"documentation","view_display_id":"block_2","view_args":"2536","view_path":"node\/2536","view_base_path":null,"view_dom_id":"d83fc89a3d51660e363921bccf32bc76","pager_element":0}}},"urlIsAjaxTrusted":{"\/views\/ajax":true,"\/service\/u-system-accounts":true},"better_exposed_filters":{"views":{"documentation":{"displays":{"block":{"filters":[]},"block_1":{"filters":[]},"block_2":{"filters":[]}}},"pretty_webforms_links_for_services":{"displays":{"block":{"filters":[]}}},"service_link":{"displays":{"block":{"filters":[]}}},"service_image":{"displays":{"block":{"filters":[]}}},"serice_support":{"displays":{"block":{"filters":[]}}},"service_status_old_":{"displays":{"attachment_2":{"filters":[]},"attachment_1":{"filters":[]},"block":{"filters":[]}}}}},"googleanalytics":{"trackOutbound":1,"trackMailto":1,"trackDownload":1,"trackDownloadExtensions":"7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip","trackUrlFragments":1},"superfish":{"1":{"id":"1","sf":{"animation":{"opacity":"show","height":"show"},"speed":"fast","autoArrows":false,"dropShadows":false},"plugins":{"smallscreen":{"mode":"window_width","breakpointUnit":"px","accordionButton":"0","title":"Main menu"},"supposition":true,"supersubs":true}}},"field_group_easy_responsive_tabs":[{"identifier":"group-sc-default-node-service-catalog-full","type":"default","width":"auto","fit":true,"closed":false,"tabidentify":"","activetab_bg":"#B5AC5F","inactive_bg":"#E0D78C","active_border_color":"#9C905C","active_content_border_color":"#9C905C"}],"field_group":{"field_group_easy_responsive_tabs_nav":"full","field_group_easy_responsive_tabs_nav_item":"full"}});</script>
      <!--[if lt IE 9]>
    <script src="/sites/all/themes/zen/js/html5-respond.js"></script>
    <![endif]-->
  <!-- tracker for UI research -->
<script type="text/javascript">
setTimeout(function(){var a=document.createElement("script");
var b=document.getElementsByTagName("script")[0];
a.src=document.location.protocol+"//script.crazyegg.com/pages/scripts/0017/3186.js?"+Math.floor(new Date().getTime()/3600000);
a.async=true;a.type="text/javascript";b.parentNode.insertBefore(a,b)}, 1);
</script>
</head>
<body class="html not-front not-logged-in one-sidebar sidebar-second page-node page-node- page-node-2536 node-type-service-catalog section-service" >
      <p id="skip-link">
      <a href="#main_nav" class="sr-only sr-only-focusable">Jump to navigation</a>
    </p>
  
        <header id="header_ua" class="l-arizona-header bg-red bg-cochineal-red">
    <section class="container l-container">
      <div class="row">
        <div class="col-xs-12">
          <a href="http://www.arizona.edu" title="Go to The University of Arizona Homepage" class="arizona-logo">
            <img alt="The University of Arizona Wordmark Line Logo in White" src="https://brand.arizona.edu/sites/default/files/digital-resources/ua_wordmark_line_logo_white_rgb.svg" class="arizona-line-logo">
          </a>
        </div>
      </div>
    </section>
</header>
<header class="header page-row" id="header_site" role="banner">
    <div class="container">
                <a href="/" title="Home" rel="home" class="header__logo" id="logo">
<svg alt="Go to the IT Website Homepage" class="header__logo-image"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 425.822 70" style="enable-background:new 0 0 425.822 70;" xml:space="preserve">
<g>
	<g>
		<path style="fill:#00275B;" d="M76.519,62.246c0.533,0.559,0.799,1.244,0.799,2.055c0,0.809-0.265,1.493-0.797,2.053
			c-0.532,0.559-1.183,0.838-1.955,0.838c-0.771,0-1.42-0.279-1.953-0.838c-0.53-0.56-0.796-1.244-0.796-2.053
			c0-0.811,0.267-1.496,0.798-2.055c0.533-0.56,1.183-0.839,1.951-0.839C75.336,61.407,75.986,61.686,76.519,62.246 M76.131,62.594
			c-0.424-0.465-0.947-0.697-1.565-0.697c-0.617,0-1.137,0.232-1.562,0.697c-0.426,0.465-0.638,1.035-0.638,1.707
			c0,0.673,0.212,1.243,0.638,1.706c0.425,0.464,0.945,0.695,1.562,0.695c0.616,0,1.137-0.231,1.564-0.695
			c0.426-0.463,0.639-1.033,0.639-1.706C76.769,63.629,76.557,63.059,76.131,62.594 M73.374,62.628h0.247h1.001
			c0.337,0,0.6,0.08,0.792,0.239c0.191,0.161,0.287,0.384,0.287,0.668c0,0.307-0.096,0.552-0.288,0.727
			c-0.143,0.131-0.327,0.213-0.552,0.246l0.896,1.464h-0.282H75.19l-0.807-1.445l-0.52,0.003v1.442h-0.244h-0.245V62.628z
			 M73.863,64.084h0.663c0.231,0,0.399-0.044,0.506-0.132c0.107-0.088,0.159-0.227,0.159-0.416c0-0.166-0.052-0.287-0.159-0.365
			c-0.107-0.078-0.275-0.117-0.506-0.117h-0.663V64.084z"/>
	</g>
	<polygon style="fill:#FFFFFF;" points="13.717,0 13.708,22.714 15.899,22.709 7.277,47.291 0,47.281 0,70 70.63,70 70.63,47.251 
		63.302,47.24 54.755,22.728 56.9,22.738 56.9,0.007 	"/>
	<g>
		<path style="fill:#BD2036;" d="M35.302,8.488L50.43,50.602c0,0,1.939,5.125,5.087,5.125H44.502c0,0,0.553,0.087,1.104-0.9
			c0.316-0.563,0.05-1.408,0.05-1.408l-3.406-9.401h-6.948h-6.918l-3.412,9.401c0,0-0.26,0.845,0.055,1.408
			c0.549,0.987,1.101,0.9,1.101,0.9H15.114c3.146,0,5.086-5.125,5.086-5.125L35.302,8.488z"/>
	</g>
	<polygon style="fill:#00275B;" points="35.316,8.435 48.957,8.435 48.957,14.292 43.29,14.292 58.19,55.52 62.596,55.52 
		62.596,61.586 44.13,61.586 44.13,55.685 38.946,55.685 38.946,67.256 68.093,67.256 68.093,50.003 61.548,50.015 51.056,19.985 
		54.351,19.985 54.351,2.742 35.316,2.742 16.281,2.742 16.281,19.985 19.577,19.985 9.084,49.977 2.539,50.003 2.539,67.256 
		31.688,67.256 31.688,55.685 26.502,55.685 26.502,61.586 8.035,61.586 8.035,55.52 12.442,55.52 27.342,14.292 21.675,14.292 
		21.675,8.435 	"/>
	<polygon style="fill:#FFFFFF;" points="35.29,39.554 40.619,39.554 35.395,24.781 29.985,39.554 	"/>
	<rect x="86.4" y="0" style="fill:#00275B;" width="1.264" height="70"/>
	<g>
		<path style="fill:#00275B;" d="M413.664,31.284c-0.263-0.586-0.483-0.893-0.659-0.923c-0.137-0.068-0.454-0.102-0.952-0.102
			l-3.062,0.132c0.528,0.225,0.95,0.522,1.267,0.893c0.318,0.372,0.686,1.011,1.106,1.919l4.19,9.156
			c0.215,0.478,0.376,0.815,0.483,1.01c0.108,0.196,0.232,0.374,0.374,0.535c0.141,0.161,0.398,0.427,0.769,0.798l-0.308,0.835
			c-0.468,1.211-1.008,2.114-1.618,2.71c-0.611,0.596-1.311,0.894-2.102,0.894c-0.567,0-1.163-0.181-1.788-0.542l-2.856,2.065
			c0.889,0.313,1.604,0.525,2.146,0.637c0.542,0.113,1.106,0.169,1.692,0.169c0.84,0,1.623-0.115,2.351-0.344
			c0.727-0.23,1.374-0.574,1.941-1.033c0.527-0.43,0.969-0.903,1.326-1.421c0.356-0.518,0.725-1.245,1.106-2.183l6.752-16.098
			h-4.438c0.615,0.41,0.923,0.889,0.923,1.435c0,0.498-0.161,1.138-0.484,1.919l-3.325,8.423L413.664,31.284z M401.072,32.91
			c0.771,0.743,1.157,1.651,1.157,2.725c0,0.947-0.293,1.719-0.879,2.314c-0.586,0.596-1.353,0.894-2.3,0.894
			c-1.133,0-2.097-0.393-2.893-1.179c-0.796-0.786-1.194-1.741-1.194-2.864c0-0.859,0.315-1.575,0.945-2.146
			c0.63-0.571,1.409-0.857,2.336-0.857C399.358,31.797,400.3,32.168,401.072,32.91 M404.353,30.23c-0.967,0-1.978-0.039-3.032-0.118
			c-1.465-0.097-2.383-0.146-2.754-0.146c-1.201,0-2.303,0.239-3.304,0.718c-1.001,0.478-1.784,1.128-2.351,1.948
			c-0.566,0.82-0.849,1.734-0.849,2.739c0,0.703,0.151,1.387,0.454,2.051c0.302,0.664,0.727,1.24,1.274,1.729
			c0.361,0.312,0.689,0.539,0.982,0.681c0.293,0.141,0.727,0.29,1.303,0.446c-0.703,0.274-1.233,0.501-1.589,0.682
			c-0.356,0.18-0.6,0.346-0.732,0.498c-0.132,0.151-0.198,0.329-0.198,0.534c0,0.264,0.073,0.564,0.22,0.901
			c0.146,0.337,0.322,0.608,0.527,0.813c0.41,0.362,0.913,0.542,1.509,0.542c0.293,0,0.532-0.009,0.718-0.029
			c0.38-0.02,0.888-0.029,1.523-0.029c2.158,0,3.769,0.249,4.834,0.747c1.064,0.498,1.597,1.259,1.597,2.285
			c0,0.683-0.235,1.286-0.703,1.809c-0.469,0.522-1.131,0.93-1.985,1.223c-0.855,0.293-1.829,0.44-2.923,0.44
			c-1.65,0-2.964-0.306-3.94-0.916c-0.977-0.61-1.465-1.443-1.465-2.498c0-0.439,0.115-0.774,0.344-1.003
			c0.23-0.23,0.584-0.388,1.062-0.476c-0.595-0.254-1.167-0.381-1.714-0.381c-0.605,0-1.13,0.103-1.574,0.308
			c-0.445,0.205-0.782,0.495-1.011,0.871c-0.23,0.376-0.344,0.823-0.344,1.341c0,0.849,0.383,1.623,1.15,2.321
			c0.766,0.698,1.816,1.246,3.149,1.641c1.333,0.396,2.791,0.593,4.373,0.593c0.712,0,1.406-0.049,2.08-0.146
			c0.674-0.098,1.301-0.237,1.882-0.418c0.581-0.181,1.135-0.405,1.663-0.674c0.527-0.268,1.001-0.573,1.421-0.915
			c1.054-0.86,1.582-1.983,1.582-3.369c0-0.908-0.23-1.68-0.689-2.315c-0.322-0.419-0.757-0.808-1.304-1.164
			c-0.547-0.357-1.089-0.608-1.626-0.755c-0.644-0.185-1.325-0.309-2.043-0.373c-0.718-0.064-1.8-0.105-3.245-0.125
			c-0.879,0-1.318-0.2-1.318-0.6c0-0.195,0.1-0.359,0.3-0.491c0.2-0.132,0.52-0.242,0.96-0.33c1.367-0.136,2.417-0.346,3.149-0.629
			c1.191-0.43,2.09-1.011,2.695-1.744c0.606-0.732,0.909-1.591,0.909-2.578c0-0.8-0.186-1.513-0.557-2.138s-0.967-1.221-1.787-1.787
			c1.728,0.302,2.89,0.454,3.486,0.454c0.459,0,0.757-0.132,0.894-0.396l0.908-2.036C406.848,30.142,405.544,30.23,404.353,30.23
			 M383.933,32.837c0.786,0.498,1.397,1.196,1.831,2.095c0.435,0.898,0.652,1.933,0.652,3.105c0,1.035-0.207,1.949-0.622,2.74
			c-0.416,0.791-0.999,1.406-1.751,1.845c-0.752,0.44-1.602,0.659-2.549,0.659c-0.713,0-1.379-0.144-1.999-0.432
			c-0.62-0.288-1.17-0.705-1.648-1.252c-0.479-0.547-0.845-1.187-1.099-1.919c-0.254-0.733-0.381-1.499-0.381-2.3
			c0-1.015,0.203-1.928,0.608-2.739c0.405-0.811,0.974-1.438,1.707-1.883c0.732-0.444,1.572-0.666,2.519-0.666
			C382.236,32.09,383.147,32.339,383.933,32.837 M379.575,30.156c-0.644,0.127-1.255,0.32-1.831,0.579
			c-0.576,0.259-1.123,0.584-1.64,0.974c-0.928,0.723-1.656,1.619-2.183,2.688c-0.527,1.069-0.791,2.19-0.791,3.362
			c0,1.426,0.349,2.725,1.047,3.896c0.698,1.172,1.67,2.093,2.915,2.762c1.246,0.668,2.625,1.003,4.139,1.003
			c1.552,0,2.976-0.347,4.27-1.04c1.293-0.693,2.309-1.638,3.047-2.834c0.737-1.197,1.105-2.517,1.105-3.963
			c0-1.055-0.21-2.068-0.629-3.039c-0.42-0.972-1.031-1.819-1.831-2.542c-1.475-1.357-3.301-2.036-5.479-2.036
			C380.933,29.966,380.22,30.03,379.575,30.156 M370.435,43.86c-0.122-0.317-0.183-0.979-0.183-1.985V23.55
			c-0.371,0.401-0.991,0.601-1.861,0.601h-2.182c0.41,0.312,0.691,0.569,0.842,0.769s0.249,0.446,0.293,0.739
			s0.066,0.83,0.066,1.612v14.604c0,0.762-0.022,1.292-0.066,1.59c-0.044,0.298-0.142,0.549-0.293,0.754s-0.432,0.464-0.842,0.776
			h5.244C370.896,44.556,370.557,44.177,370.435,43.86 M358.826,32.837c0.786,0.498,1.396,1.196,1.831,2.095
			c0.434,0.898,0.652,1.933,0.652,3.105c0,1.035-0.208,1.949-0.623,2.74c-0.415,0.791-0.998,1.406-1.75,1.845
			c-0.752,0.44-1.602,0.659-2.549,0.659c-0.713,0-1.38-0.144-2-0.432c-0.62-0.288-1.169-0.705-1.648-1.252
			c-0.478-0.547-0.844-1.187-1.098-1.919c-0.254-0.733-0.381-1.499-0.381-2.3c0-1.015,0.203-1.928,0.608-2.739
			c0.405-0.811,0.974-1.438,1.706-1.883c0.733-0.444,1.573-0.666,2.52-0.666C357.129,32.09,358.04,32.339,358.826,32.837
			 M354.468,30.156c-0.645,0.127-1.255,0.32-1.831,0.579c-0.576,0.259-1.123,0.584-1.641,0.974
			c-0.928,0.723-1.655,1.619-2.182,2.688c-0.528,1.069-0.791,2.19-0.791,3.362c0,1.426,0.349,2.725,1.047,3.896
			c0.698,1.172,1.67,2.093,2.915,2.762c1.245,0.668,2.624,1.003,4.138,1.003c1.553,0,2.976-0.347,4.27-1.04s2.31-1.638,3.047-2.834
			c0.737-1.197,1.106-2.517,1.106-3.963c0-1.055-0.21-2.068-0.63-3.039c-0.42-0.972-1.03-1.819-1.831-2.542
			c-1.475-1.357-3.301-2.036-5.478-2.036C355.825,29.966,355.113,30.03,354.468,30.156 M333.084,30.391h-2.036
			c0.41,0.312,0.691,0.571,0.842,0.776c0.152,0.205,0.249,0.454,0.293,0.747s0.066,0.826,0.066,1.597v8.364
			c0,0.762-0.022,1.292-0.066,1.59c-0.044,0.298-0.141,0.549-0.293,0.754c-0.151,0.205-0.432,0.464-0.842,0.776h5.244
			c-0.4-0.322-0.676-0.583-0.827-0.783c-0.152-0.2-0.252-0.462-0.301-0.784c-0.049-0.322-0.073-0.84-0.073-1.553v-6.387
			c0-0.8,0.141-1.401,0.425-1.801c0.312-0.43,0.732-0.767,1.26-1.011c0.527-0.244,1.108-0.366,1.743-0.366
			c0.654,0,1.272,0.124,1.853,0.373c0.581,0.249,1.023,0.574,1.325,0.974c0.244,0.293,0.42,0.687,0.528,1.18
			c0.107,0.493,0.161,1.159,0.161,1.999v5.039c0,0.684-0.025,1.192-0.073,1.524c-0.049,0.332-0.152,0.603-0.308,0.813
			c-0.156,0.21-0.439,0.471-0.85,0.783h5.289c-0.557-0.439-0.897-0.818-1.018-1.135c-0.123-0.317-0.184-0.979-0.184-1.985v-5.376
			c0-1.201-0.053-2.102-0.161-2.702c-0.107-0.601-0.303-1.126-0.586-1.575c-0.302-0.44-0.703-0.833-1.201-1.179
			c-0.498-0.347-1.072-0.613-1.721-0.799c-0.65-0.185-1.296-0.278-1.941-0.278c-0.937,0-1.758,0.183-2.461,0.549
			c-0.703,0.366-1.445,1.004-2.226,1.912V29.79C334.573,30.191,333.953,30.391,333.084,30.391 M315.921,24.151h-2.182
			c0.41,0.312,0.691,0.569,0.842,0.769s0.249,0.446,0.293,0.739s0.066,0.83,0.066,1.612v14.604c0,0.762-0.022,1.292-0.066,1.59
			c-0.044,0.298-0.142,0.549-0.293,0.754s-0.432,0.464-0.842,0.776h5.273c-0.43-0.332-0.717-0.595-0.864-0.791
			c-0.146-0.195-0.244-0.459-0.293-0.791c-0.049-0.332-0.073-0.844-0.073-1.538v-5.786c0-0.84,0.031-1.406,0.095-1.699
			c0.063-0.293,0.222-0.596,0.476-0.908c0.352-0.411,0.789-0.723,1.311-0.938s1.096-0.322,1.721-0.322
			c1.367,0,2.388,0.449,3.062,1.347c0.234,0.293,0.393,0.628,0.476,1.004c0.083,0.376,0.124,0.94,0.124,1.692v5.61
			c0,0.694-0.024,1.209-0.073,1.546c-0.049,0.336-0.149,0.607-0.3,0.813c-0.152,0.205-0.437,0.459-0.857,0.761h5.273
			c-0.556-0.449-0.896-0.832-1.018-1.15c-0.122-0.317-0.183-0.974-0.183-1.97v-6.577c0-0.85-0.056-1.504-0.168-1.963
			c-0.113-0.459-0.315-0.893-0.608-1.304c-0.322-0.439-0.716-0.813-1.179-1.12c-0.464-0.308-0.987-0.542-1.568-0.703
			c-0.581-0.161-1.194-0.242-1.838-0.242c-0.987,0-1.907,0.181-2.761,0.542c-0.855,0.361-1.516,0.85-1.985,1.465V23.55
			C317.411,23.951,316.791,24.151,315.921,24.151 M307.572,29.966c-1.367,0-2.571,0.181-3.611,0.542s-1.985,0.933-2.834,1.714
			c-1.719,1.582-2.578,3.501-2.578,5.757c0,1.054,0.214,2.043,0.644,2.966c0.43,0.923,1.035,1.719,1.816,2.388
			c0.782,0.669,1.692,1.184,2.732,1.545s2.19,0.542,3.45,0.542c1.719,0,3.066-0.19,4.043-0.571l1.86-3.091
			c-0.527,0.342-1.062,0.628-1.604,0.857s-1.081,0.398-1.618,0.505c-0.537,0.108-1.075,0.161-1.612,0.161
			c-1.22,0-2.321-0.256-3.303-0.769c-0.981-0.512-1.755-1.228-2.322-2.146c-0.566-0.917-0.849-1.933-0.849-3.047
			c0-1.035,0.217-1.95,0.652-2.746c0.434-0.796,1.059-1.409,1.875-1.838c0.815-0.43,1.736-0.645,2.761-0.645
			c1.582,0,2.9,0.513,3.955,1.538v-3.267C309.896,30.098,308.744,29.966,307.572,29.966 M286.56,32.778
			c0.732-0.615,1.635-0.922,2.71-0.922c2.236,0,3.579,1.181,4.028,3.545h-8.188C285.344,34.268,285.827,33.394,286.56,32.778
			 M296.623,36.865c0-0.996-0.181-1.916-0.542-2.761c-0.361-0.844-0.864-1.575-1.509-2.19c-0.644-0.615-1.406-1.093-2.285-1.435
			c-0.879-0.342-1.836-0.513-2.871-0.513c-1.055,0-2.029,0.154-2.922,0.461c-0.894,0.308-1.677,0.765-2.351,1.37
			c-0.518,0.469-0.972,1.023-1.363,1.663c-0.39,0.639-0.691,1.318-0.9,2.036c-0.211,0.718-0.315,1.443-0.315,2.175
			c0,1.494,0.378,2.832,1.135,4.014c0.757,1.181,1.821,2.099,3.193,2.754c1.372,0.654,2.918,0.981,4.636,0.981
			c0.508,0,1.014-0.024,1.517-0.073c0.502-0.049,0.981-0.13,1.435-0.242s0.93-0.261,1.428-0.447l1.714-3.017
			c-0.576,0.39-1.133,0.705-1.67,0.945c-0.537,0.239-1.111,0.415-1.721,0.527c-0.61,0.112-1.248,0.168-1.912,0.168
			c-1.24,0-2.334-0.234-3.281-0.703c-0.947-0.468-1.68-1.147-2.197-2.036c-0.518-0.888-0.806-1.943-0.864-3.164h11.645V36.865z
			 M282.561,24.092c0.058,0-0.352,0.02-1.231,0.059h-11.909c-0.635,0-1.172-0.074-1.611-0.22l-1.172,3.779
			c0.634-0.478,1.228-0.798,1.78-0.959c0.551-0.161,1.325-0.242,2.321-0.242c1.114,0,1.963,0.034,2.549,0.102v14.341
			c0,0.909-0.039,1.617-0.117,2.124c-0.078,0.508-0.215,0.904-0.41,1.187c-0.196,0.283-0.489,0.527-0.879,0.732h6.269
			c-0.439-0.283-0.781-0.578-1.025-0.886c-0.244-0.308-0.415-0.686-0.513-1.135c-0.097-0.449-0.146-1.016-0.146-1.699V26.611h0.513
			c1.025-0.068,1.767-0.102,2.226-0.102c0.899,0,1.562,0.086,1.992,0.256c0.43,0.171,0.757,0.486,0.982,0.945l1.011-3.779
			C283.073,23.97,282.863,24.024,282.561,24.092 M245.119,30.391h-2.036c0.41,0.312,0.69,0.571,0.842,0.776
			c0.151,0.205,0.249,0.454,0.293,0.747c0.044,0.293,0.066,0.826,0.066,1.597v8.364c0,0.762-0.022,1.292-0.066,1.59
			c-0.044,0.298-0.142,0.549-0.293,0.754c-0.152,0.205-0.432,0.464-0.842,0.776h5.244c-0.401-0.322-0.677-0.583-0.828-0.783
			c-0.151-0.2-0.252-0.462-0.3-0.784c-0.049-0.322-0.074-0.84-0.074-1.553v-6.387c0-0.8,0.142-1.401,0.425-1.801
			c0.313-0.43,0.733-0.767,1.26-1.011c0.527-0.244,1.108-0.366,1.743-0.366c0.654,0,1.272,0.124,1.853,0.373
			c0.581,0.249,1.023,0.574,1.326,0.974c0.244,0.293,0.42,0.687,0.527,1.18c0.108,0.493,0.161,1.159,0.161,1.999v5.039
			c0,0.684-0.024,1.192-0.073,1.524c-0.049,0.332-0.151,0.603-0.307,0.813c-0.157,0.21-0.44,0.471-0.85,0.783h5.288
			c-0.557-0.439-0.896-0.818-1.018-1.135c-0.122-0.317-0.183-0.979-0.183-1.985v-5.376c0-1.201-0.054-2.102-0.161-2.702
			c-0.108-0.601-0.303-1.126-0.586-1.575c-0.303-0.44-0.703-0.833-1.201-1.179c-0.498-0.347-1.072-0.613-1.722-0.799
			c-0.649-0.185-1.296-0.278-1.94-0.278c-0.938,0-1.758,0.183-2.461,0.549c-0.704,0.366-1.446,1.004-2.227,1.912V29.79
			C246.608,30.191,245.988,30.391,245.119,30.391 M235.627,32.837c0.786,0.498,1.397,1.196,1.831,2.095
			c0.435,0.898,0.652,1.933,0.652,3.105c0,1.035-0.207,1.949-0.622,2.74c-0.415,0.791-0.999,1.406-1.751,1.845
			c-0.752,0.44-1.601,0.659-2.549,0.659c-0.713,0-1.379-0.144-1.999-0.432c-0.62-0.288-1.17-0.705-1.648-1.252
			c-0.479-0.547-0.845-1.187-1.099-1.919c-0.254-0.733-0.381-1.499-0.381-2.3c0-1.015,0.203-1.928,0.608-2.739
			c0.405-0.811,0.974-1.438,1.707-1.883c0.732-0.444,1.572-0.666,2.519-0.666C233.93,32.09,234.841,32.339,235.627,32.837
			 M231.269,30.156c-0.644,0.127-1.255,0.32-1.831,0.579c-0.576,0.259-1.123,0.584-1.64,0.974c-0.928,0.723-1.655,1.619-2.183,2.688
			c-0.527,1.069-0.791,2.19-0.791,3.362c0,1.426,0.349,2.725,1.048,3.896c0.698,1.172,1.669,2.093,2.915,2.762
			c1.245,0.668,2.624,1.003,4.138,1.003c1.552,0,2.976-0.347,4.27-1.04c1.294-0.693,2.309-1.638,3.047-2.834
			c0.737-1.197,1.106-2.517,1.106-3.963c0-1.055-0.211-2.068-0.63-3.039c-0.42-0.972-1.031-1.819-1.831-2.542
			c-1.475-1.357-3.301-2.036-5.479-2.036C232.627,29.966,231.914,30.03,231.269,30.156 M219.089,25.103
			c-0.39,0.381-0.585,0.84-0.585,1.377c0,0.556,0.187,1.028,0.564,1.413c0.375,0.386,0.837,0.579,1.384,0.579
			c0.566,0,1.037-0.193,1.413-0.579c0.376-0.385,0.564-0.857,0.564-1.413c0-0.528-0.185-0.984-0.556-1.37
			c-0.372-0.386-0.826-0.579-1.363-0.579C219.954,24.531,219.48,24.722,219.089,25.103 M220.1,30.391h-2.197
			c0.41,0.312,0.691,0.571,0.842,0.776c0.152,0.205,0.249,0.454,0.293,0.747c0.044,0.293,0.066,0.826,0.066,1.597v8.364
			c0,0.762-0.022,1.292-0.066,1.59c-0.044,0.298-0.141,0.549-0.293,0.754c-0.151,0.205-0.432,0.464-0.842,0.776h5.244
			c-0.4-0.322-0.676-0.583-0.828-0.783c-0.151-0.2-0.251-0.462-0.3-0.784s-0.073-0.84-0.073-1.553V29.79
			C221.575,30.191,220.959,30.391,220.1,30.391 M214.402,32.486c0.537,0,0.943,0.041,1.216,0.124s0.528,0.232,0.762,0.447V30.2
			c-0.303,0.127-0.923,0.191-1.86,0.191h-2.461v-4.717h-1.231v0.395c0,1.778-0.391,3.077-1.172,3.897
			c-0.654,0.732-1.523,1.192-2.607,1.377v1.143h2.168v6.987c0,1.016,0.029,1.777,0.088,2.285c0.058,0.508,0.166,0.925,0.322,1.252
			c0.156,0.328,0.4,0.667,0.732,1.018c0.889,0.928,1.968,1.392,3.238,1.392c0.4,0,0.781-0.064,1.142-0.19l1.641-2.242
			c-0.469,0.176-0.908,0.264-1.318,0.264c-1.036,0-1.846-0.361-2.432-1.084c-0.225-0.283-0.376-0.625-0.454-1.025
			c-0.078-0.401-0.117-1.045-0.117-1.934v-6.723H214.402z M201.726,43.369c0.161,0.44,0.481,0.811,0.96,1.114
			c0.381,0.234,0.781,0.398,1.201,0.49c0.42,0.093,1.011,0.169,1.772,0.227l1.377-2.065c-0.869-0.029-1.499-0.2-1.889-0.513
			c-0.362-0.263-0.586-0.549-0.674-0.857c-0.088-0.307-0.132-0.91-0.132-1.809v-4.087c0-1.162-0.037-1.97-0.11-2.424
			c-0.073-0.454-0.247-0.906-0.52-1.355c-0.889-1.416-2.671-2.124-5.346-2.124c-0.762,0-1.495,0.068-2.198,0.205l-2.094,3.179
			c1.035-0.498,1.85-0.833,2.446-1.004c0.595-0.17,1.22-0.256,1.875-0.256c0.586,0,1.111,0.083,1.575,0.249
			c0.463,0.166,0.822,0.403,1.076,0.71c0.254,0.308,0.381,0.662,0.381,1.062c0,0.567-0.237,0.997-0.71,1.29
			c-0.474,0.293-1.429,0.581-2.864,0.864c-1.983,0.381-3.369,0.791-4.16,1.23c-0.538,0.284-0.967,0.721-1.289,1.311
			c-0.323,0.591-0.484,1.214-0.484,1.868c0,1.377,0.537,2.549,1.612,3.516c0.917,0.82,2.167,1.23,3.75,1.23
			c0.615,0,1.196-0.064,1.743-0.19l1.86-2.359c-0.899,0.274-1.69,0.41-2.373,0.41c-1.055,0-1.878-0.229-2.468-0.688
			c-0.591-0.459-0.887-1.089-0.887-1.89c0-1.25,0.762-2.06,2.286-2.431c1.142-0.264,1.877-0.44,2.204-0.528
			c0.327-0.088,0.625-0.178,0.894-0.271c0.268-0.092,0.583-0.227,0.945-0.403v4.087C201.485,42.193,201.565,42.93,201.726,43.369
			 M167.574,30.391h-2.197c0.41,0.312,0.691,0.571,0.842,0.776c0.151,0.205,0.249,0.454,0.293,0.747s0.066,0.826,0.066,1.597v8.364
			c0,0.762-0.022,1.292-0.066,1.59c-0.044,0.298-0.142,0.549-0.293,0.754s-0.432,0.464-0.842,0.776h5.244
			c-0.391-0.293-0.664-0.544-0.82-0.754c-0.157-0.21-0.259-0.478-0.308-0.806c-0.049-0.327-0.073-0.847-0.073-1.56v-5.61
			c0-0.645,0.039-1.135,0.117-1.472c0.078-0.337,0.22-0.657,0.425-0.96c0.302-0.449,0.718-0.796,1.245-1.04
			c0.527-0.244,1.103-0.366,1.728-0.366c0.489,0,0.975,0.093,1.458,0.278c0.483,0.186,0.876,0.445,1.179,0.777
			c0.645,0.673,0.967,1.753,0.967,3.237v5.156c0,0.694-0.025,1.209-0.073,1.546c-0.049,0.336-0.147,0.605-0.293,0.805
			c-0.147,0.2-0.425,0.457-0.835,0.769h5.273c-0.566-0.449-0.913-0.83-1.04-1.142c-0.127-0.313-0.19-0.972-0.19-1.978V36.47
			c0-0.733,0.019-1.243,0.058-1.531c0.039-0.288,0.132-0.573,0.279-0.857c0.293-0.547,0.727-0.979,1.303-1.296
			c0.576-0.317,1.202-0.476,1.875-0.476c1.211,0,2.154,0.41,2.828,1.23c0.283,0.381,0.488,0.83,0.615,1.348
			c0.127,0.518,0.19,1.216,0.19,2.095v4.892c0,0.694-0.024,1.209-0.073,1.546c-0.049,0.336-0.149,0.607-0.3,0.813
			c-0.152,0.205-0.438,0.459-0.857,0.761h5.493c-0.401-0.166-0.701-0.356-0.901-0.571c-0.2-0.215-0.337-0.518-0.41-0.908
			c-0.073-0.391-0.11-0.938-0.11-1.641v-5.669c0-1.015-0.056-1.814-0.168-2.395c-0.113-0.581-0.306-1.091-0.579-1.531
			c-0.42-0.712-1.072-1.276-1.956-1.691s-1.872-0.623-2.966-0.623c-0.684,0-1.311,0.093-1.882,0.278
			c-0.572,0.186-1.097,0.474-1.575,0.865c-0.479,0.39-0.986,0.937-1.523,1.64c-0.596-0.967-1.275-1.672-2.037-2.117
			c-0.761-0.444-1.689-0.666-2.783-0.666c-1.006,0-1.865,0.19-2.578,0.571c-0.713,0.381-1.397,1.021-2.051,1.919V29.79
			C168.931,30.191,168.365,30.391,167.574,30.391 M159.335,44.212c-0.152-0.2-0.252-0.462-0.301-0.784s-0.073-0.84-0.073-1.553
			V36.66c0-1.298,0.225-2.26,0.674-2.885c0.273-0.401,0.654-0.716,1.143-0.945c0.488-0.23,1.015-0.344,1.582-0.344
			c0.644,0,1.142,0.17,1.494,0.512v-2.915c-0.44-0.078-0.806-0.117-1.099-0.117c-0.82,0-1.553,0.208-2.197,0.623
			c-0.645,0.415-1.177,1.018-1.597,1.809V29.79c-0.371,0.401-0.986,0.601-1.846,0.601h-2.197c0.41,0.312,0.691,0.571,0.842,0.776
			c0.152,0.205,0.249,0.454,0.293,0.747s0.066,0.826,0.066,1.597v8.364c0,0.762-0.022,1.292-0.066,1.59
			c-0.044,0.298-0.141,0.549-0.293,0.754c-0.151,0.205-0.432,0.464-0.842,0.776h5.244C159.762,44.673,159.486,44.412,159.335,44.212
			 M147.463,32.837c0.786,0.498,1.396,1.196,1.831,2.095c0.435,0.898,0.652,1.933,0.652,3.105c0,1.035-0.208,1.949-0.623,2.74
			c-0.415,0.791-0.998,1.406-1.75,1.845c-0.752,0.44-1.602,0.659-2.549,0.659c-0.713,0-1.379-0.144-1.999-0.432
			c-0.621-0.288-1.17-0.705-1.648-1.252c-0.479-0.547-0.845-1.187-1.099-1.919c-0.254-0.733-0.381-1.499-0.381-2.3
			c0-1.015,0.203-1.928,0.608-2.739c0.405-0.811,0.974-1.438,1.707-1.883c0.732-0.444,1.572-0.666,2.519-0.666
			C145.766,32.09,146.677,32.339,147.463,32.837 M143.105,30.156c-0.644,0.127-1.255,0.32-1.831,0.579
			c-0.576,0.259-1.123,0.584-1.641,0.974c-0.927,0.723-1.655,1.619-2.182,2.688c-0.528,1.069-0.791,2.19-0.791,3.362
			c0,1.426,0.349,2.725,1.047,3.896c0.698,1.172,1.67,2.093,2.915,2.762c1.245,0.668,2.625,1.003,4.138,1.003
			c1.553,0,2.976-0.347,4.27-1.04c1.294-0.693,2.31-1.638,3.047-2.834c0.738-1.197,1.106-2.517,1.106-3.963
			c0-1.055-0.21-2.068-0.63-3.039c-0.42-0.972-1.03-1.819-1.831-2.542c-1.474-1.357-3.301-2.036-5.478-2.036
			C144.462,29.966,143.75,30.03,143.105,30.156 M134.154,32.486c0.547,0,0.92,0.031,1.121,0.095c0.2,0.063,0.388,0.203,0.564,0.417
			V30.2c-0.352,0.127-0.723,0.191-1.114,0.191h-3.208v-2.022c0-0.947,0.098-1.567,0.293-1.86c0.371-0.615,1.021-0.923,1.948-0.923
			c0.567,0,1.109,0.171,1.626,0.513l2.256-2.461c-0.879-0.147-1.601-0.22-2.168-0.22c-1.142,0-2.126,0.122-2.951,0.366
			c-0.826,0.245-1.531,0.625-2.117,1.143c-0.625,0.537-1.072,1.108-1.34,1.714c-0.269,0.605-0.403,1.343-0.403,2.212v1.538
			l-1.582,2.095h1.582v9.389c0,0.684-0.025,1.194-0.073,1.531c-0.049,0.337-0.149,0.61-0.301,0.82
			c-0.151,0.21-0.427,0.467-0.827,0.769h5.405c-0.225-0.136-0.381-0.254-0.469-0.351c-0.088-0.098-0.234-0.313-0.439-0.645
			c-0.117-0.224-0.208-0.466-0.271-0.725c-0.064-0.259-0.108-0.617-0.132-1.077c-0.025-0.458-0.037-0.927-0.037-1.406v-8.305
			H134.154z M112.085,30.391h-2.036c0.41,0.312,0.691,0.571,0.842,0.776c0.152,0.205,0.249,0.454,0.293,0.747
			s0.066,0.826,0.066,1.597v8.364c0,0.762-0.022,1.292-0.066,1.59c-0.044,0.298-0.141,0.549-0.293,0.754
			c-0.151,0.205-0.432,0.464-0.842,0.776h5.244c-0.4-0.322-0.676-0.583-0.828-0.783c-0.151-0.2-0.251-0.462-0.3-0.784
			c-0.049-0.322-0.073-0.84-0.073-1.553v-6.387c0-0.8,0.141-1.401,0.425-1.801c0.312-0.43,0.732-0.767,1.26-1.011
			c0.527-0.244,1.108-0.366,1.743-0.366c0.654,0,1.272,0.124,1.853,0.373c0.581,0.249,1.023,0.574,1.325,0.974
			c0.244,0.293,0.42,0.687,0.528,1.18c0.107,0.493,0.161,1.159,0.161,1.999v5.039c0,0.684-0.025,1.192-0.073,1.524
			c-0.049,0.332-0.152,0.603-0.308,0.813s-0.439,0.471-0.85,0.783h5.288c-0.556-0.439-0.896-0.818-1.018-1.135
			c-0.122-0.317-0.183-0.979-0.183-1.985v-5.376c0-1.201-0.053-2.102-0.161-2.702c-0.107-0.601-0.303-1.126-0.586-1.575
			c-0.303-0.44-0.703-0.833-1.201-1.179c-0.498-0.347-1.072-0.613-1.721-0.799c-0.65-0.185-1.297-0.278-1.941-0.278
			c-0.938,0-1.758,0.183-2.461,0.549c-0.703,0.366-1.445,1.004-2.227,1.912V29.79C113.574,30.191,112.954,30.391,112.085,30.391
			 M103.181,43.069c-0.073,0.503-0.212,0.899-0.417,1.187c-0.206,0.288-0.504,0.534-0.894,0.739h6.006
			c-0.401-0.205-0.698-0.449-0.894-0.732c-0.195-0.283-0.329-0.679-0.403-1.187c-0.073-0.507-0.109-1.215-0.109-2.124V28.194
			c0-0.909,0.036-1.617,0.109-2.125c0.074-0.507,0.208-0.903,0.403-1.186c0.196-0.283,0.493-0.527,0.894-0.732h-6.006
			c0.39,0.205,0.688,0.451,0.894,0.739c0.205,0.288,0.344,0.684,0.417,1.187c0.073,0.503,0.11,1.208,0.11,2.117v12.758
			C103.291,41.861,103.254,42.566,103.181,43.069"/>
	</g>
</g>
</svg></a>
         <!-- Using Secondary Menu for Utility Links -->
        <div class="header__secondary-menu" id="utility_links" role="navigation"> <!-- id was #secondary-menu -->
            <ul id="secondary-menu" class="links inline clearfix"><li class="menu-1796 first"><a href="/audiences/students" title="">Students</a></li>
<li class="menu-1811"><a href="/services/faculty" title="">Faculty</a></li>
<li class="menu-1801"><a href="/services/staff" title="">Staff</a></li>
<li class="menu-4981 last"><a href="https://it.arizona.edu/services/professionals" title="">IT Professionals</a></li>
</ul>        </div>
                  <div class="header__region region region-header">
    <div id="block-search-form" class="block block-search first last odd" role="search">

      
  <form class="search-form" role="search" action="/service/u-system-accounts" method="post" id="search-block-form" accept-charset="UTF-8"><div><div class="container-inline">
      <h2 class="element-invisible">Search form</h2>
    <div class="form-item form-type-textfield form-item-search-block-form">
  <input title="Enter the terms you wish to search for." class="custom-search-box form-text" placeholder="Search Site" onfocus="this.placeholder = &#039;&#039;" onblur="this.placeholder = &#039;Search Site&#039;" type="text" id="edit-search-block-form--2" name="search_block_form" value="" size="15" maxlength="128" />
</div>
<div class="form-actions form-wrapper" id="edit-actions"><input type="submit" id="edit-submit" name="op" value="Search" class="form-submit" /></div><input type="hidden" name="form_build_id" value="form-VN0CCfDfa29KJzgKSowSW9FccpPQr1NDNJGj4zJ8tN8" />
<input type="hidden" name="form_id" value="search_block_form" />
</div>
</div></form>
</div>
  </div>
        </div> <!-- /.container -->

        <div class="container">
      <nav id="main_nav" class="navbar navbar-default navbar-static-top">
                                              <div class="region region-navigation">
    <div id="block-superfish-1" class="block block-superfish first last odd">

      
  <ul  id="superfish-1" class="menu sf-menu sf-main-menu sf-horizontal sf-style-none sf-total-items-6 sf-parent-items-6 sf-single-items-0"><li id="menu-951-1" class="first odd sf-item-1 sf-depth-1 sf-total-children-7 sf-parent-children-0 sf-single-children-7 menuparent"><a href="/getting-started" title="Get Started" class="sf-depth-1 menuparent">Get Started</a><ul><li id="menu-2476-1" class="first odd sf-item-1 sf-depth-2 sf-no-children"><a href="/getting-started" title="" class="sf-depth-2">Get Started</a></li><li id="menu-1386-1" class="middle even sf-item-2 sf-depth-2 sf-no-children"><a href="/getting-started/students" title="Getting Started - Students" class="sf-depth-2">Students</a></li><li id="menu-1636-1" class="middle odd sf-item-3 sf-depth-2 sf-no-children"><a href="/getting-started/faculty" title="Faculty Getting Started" class="sf-depth-2">Faculty</a></li><li id="menu-1641-1" class="middle even sf-item-4 sf-depth-2 sf-no-children"><a href="/getting-started/staff" class="sf-depth-2">Staff</a></li><li id="menu-2731-1" class="middle odd sf-item-5 sf-depth-2 sf-no-children"><a href="/getting-started-it-professionals" class="sf-depth-2">IT Professionals</a></li><li id="menu-1391-1" class="middle even sf-item-6 sf-depth-2 sf-no-children"><a href="/getting-started/campus-visitors" class="sf-depth-2">Campus Visitors</a></li><li id="menu-4941-1" class="last odd sf-item-7 sf-depth-2 sf-no-children"><a href="/tech-talk" title="" class="sf-depth-2">UA Tech Talk</a></li></ul></li><li id="menu-952-1" class="middle even sf-item-2 sf-depth-1 sf-total-children-8 sf-parent-children-0 sf-single-children-8 menuparent"><a href="/services" title="" class="sf-depth-1 menuparent">Find IT Services</a><ul><li id="menu-2456-1" class="first odd sf-item-1 sf-depth-2 sf-no-children"><a href="/services" title="" class="sf-depth-2">Find IT Services A-Z</a></li><li id="menu-1346-1" class="middle even sf-item-2 sf-depth-2 sf-no-children"><a href="/services/accounts-passwords" title="Accounts &amp; Passwords related Services" class="sf-depth-2">Accounts &amp; Passwords</a></li><li id="menu-1351-1" class="middle odd sf-item-3 sf-depth-2 sf-no-children"><a href="/services/communication-collaboration" title="Communication and Collaboration Services" class="sf-depth-2">Communication and Collaboration</a></li><li id="menu-1356-1" class="middle even sf-item-4 sf-depth-2 sf-no-children"><a href="/services/computing-services" title="Computing Services" class="sf-depth-2">Computing Services</a></li><li id="menu-1376-1" class="middle odd sf-item-5 sf-depth-2 sf-no-children"><a href="/services/infrastructure" title="Infrastructure Services" class="sf-depth-2">Infrastructure</a></li><li id="menu-2376-1" class="middle even sf-item-6 sf-depth-2 sf-no-children"><a href="/research" title="" class="sf-depth-2">Research Computing</a></li><li id="menu-1366-1" class="middle odd sf-item-7 sf-depth-2 sf-no-children"><a href="/services/teaching-learning" title="Teaching and Learning Services" class="sf-depth-2">Teaching and Learning</a></li><li id="menu-1371-1" class="last even sf-item-8 sf-depth-2 sf-no-children"><a href="/services/university-applications" title="University Applications" class="sf-depth-2">University Applications</a></li></ul></li><li id="menu-957-1" class="middle odd sf-item-3 sf-depth-1 sf-total-children-4 sf-parent-children-0 sf-single-children-4 menuparent"><a href="/security" class="sf-depth-1 menuparent">Security</a><ul><li id="menu-2486-1" class="first odd sf-item-1 sf-depth-2 sf-no-children"><a href="/security" title="" class="sf-depth-2">Security</a></li><li id="menu-2461-1" class="middle even sf-item-2 sf-depth-2 sf-no-children"><a href="/service/antivirusanti-malware-software" class="sf-depth-2">Antivirus Software</a></li><li id="menu-2466-1" class="middle odd sf-item-3 sf-depth-2 sf-no-children"><a href="/service/netid-plus" class="sf-depth-2">NetID+</a></li><li id="menu-2471-1" class="last even sf-item-4 sf-depth-2 sf-no-children"><a href="/service/ua-virtual-private-network-vpn" class="sf-depth-2">VPN</a></li></ul></li><li id="menu-958-1" class="middle even sf-item-4 sf-depth-1 sf-total-children-8 sf-parent-children-1 sf-single-children-7 menuparent"><a href="/research" class="sf-depth-1 menuparent">Research</a><ul><li id="menu-2481-1" class="first odd sf-item-1 sf-depth-2 sf-total-children-6 sf-parent-children-0 sf-single-children-6 menuparent"><a href="/research" title="" class="sf-depth-2 menuparent">Research Computing Overview</a><ul><li id="menu-4881-1" class="first odd sf-item-1 sf-depth-3 sf-no-children"><a href="/research/about-research-computing" class="sf-depth-3">About Research Computing</a></li><li id="menu-4961-1" class="middle even sf-item-2 sf-depth-3 sf-no-children"><a href="/service/high-performance-computing" title="About Research Data Center computing resources" class="sf-depth-3">High Performance Computing</a></li><li id="menu-4931-1" class="middle odd sf-item-3 sf-depth-3 sf-no-children"><a href="/research/news" title="" class="sf-depth-3">Research News</a></li><li id="menu-4921-1" class="middle even sf-item-4 sf-depth-3 sf-no-children"><a href="/research/staff" title="Staff who provide consulting services to campus researchers" class="sf-depth-3">Research Computing Staff</a></li><li id="menu-4956-1" class="middle odd sf-item-5 sf-depth-3 sf-no-children"><a href="/sp/research-services-group" title="Staff who maintain the Research Data Center" class="sf-depth-3">Research Services Group Staff</a></li><li id="menu-4886-1" class="last even sf-item-6 sf-depth-3 sf-no-children"><a href="/research/policies" class="sf-depth-3">Policies</a></li></ul></li><li id="menu-2386-1" class="middle even sf-item-2 sf-depth-2 sf-no-children"><a href="/service/high-performance-computing" class="sf-depth-2">High Performance Computing</a></li><li id="menu-2391-1" class="middle odd sf-item-3 sf-depth-2 sf-no-children"><a href="/service/research-computing-colocation" class="sf-depth-2">Research Computing Colocation</a></li><li id="menu-2396-1" class="middle even sf-item-4 sf-depth-2 sf-no-children"><a href="/service/research-computing-storage" class="sf-depth-2">Research Computing Storage</a></li><li id="menu-2401-1" class="middle odd sf-item-5 sf-depth-2 sf-no-children"><a href="/service/hpchtc-consulting" class="sf-depth-2">HPC/HTC Consulting</a></li><li id="menu-2411-1" class="middle even sf-item-6 sf-depth-2 sf-no-children"><a href="/service/visualization-consulting" class="sf-depth-2">Visualization Consulting</a></li><li id="menu-2416-1" class="middle odd sf-item-7 sf-depth-2 sf-no-children"><a href="/service/statistical-consulting" class="sf-depth-2">Statistical Consulting</a></li><li id="menu-2421-1" class="last even sf-item-8 sf-depth-2 sf-no-children"><a href="/service/science-dmz" class="sf-depth-2">Science DMZ</a></li></ul></li><li id="menu-959-1" class="middle odd sf-item-5 sf-depth-1 sf-total-children-4 sf-parent-children-0 sf-single-children-4 menuparent"><a href="/get-support" class="sf-depth-1 menuparent">Get Support</a><ul><li id="menu-2491-1" class="first odd sf-item-1 sf-depth-2 sf-no-children"><a href="/get-support" title="" class="sf-depth-2">Tech Support</a></li><li id="menu-2506-1" class="middle even sf-item-2 sf-depth-2 sf-no-children"><a href="/service-request-forms" class="sf-depth-2">Service Request Forms</a></li><li id="menu-2831-1" class="middle odd sf-item-3 sf-depth-2 sf-no-children"><a href="/workshops" title="Workshops and Training (WaTT)" class="sf-depth-2">Workshops and Training (WaTT)</a></li><li id="menu-3741-1" class="last even sf-item-4 sf-depth-2 sf-no-children"><a href="/support/services-windows" title="Service Windows" class="sf-depth-2">Service Windows</a></li></ul></li><li id="menu-960-1" class="last even sf-item-6 sf-depth-1 sf-total-children-10 sf-parent-children-0 sf-single-children-10 menuparent"><a href="/it/about" title="About UA IT" class="sf-depth-1 menuparent">About UA IT</a><ul><li id="menu-1651-1" class="first odd sf-item-1 sf-depth-2 sf-no-children"><a href="/it/about" title="" class="sf-depth-2">About UA IT</a></li><li id="menu-1656-1" class="middle even sf-item-2 sf-depth-2 sf-no-children"><a href="/it/vp-it" class="sf-depth-2">VP, Information Strategy &amp; University Libraries</a></li><li id="menu-1746-1" class="middle odd sf-item-3 sf-depth-2 sf-no-children"><a href="/it/news" class="sf-depth-2">News</a></li><li id="menu-1756-1" class="middle even sf-item-4 sf-depth-2 sf-no-children"><a href="/it/people" title="Staff Directory - University Information Technology Services" class="sf-depth-2">Staff Directory - UITS</a></li><li id="menu-4731-1" class="middle odd sf-item-5 sf-depth-2 sf-no-children"><a href="/uits-employee-resources" title="Information for UITS employees" class="sf-depth-2">UITS Employee Resources</a></li><li id="menu-1670-1" class="middle even sf-item-6 sf-depth-2 sf-no-children"><a href="/it/jobs" title="IT Jobs" class="sf-depth-2">IT Jobs</a></li><li id="menu-1671-1" class="middle odd sf-item-7 sf-depth-2 sf-no-children"><a href="/it/documents-plans" class="sf-depth-2">Documents &amp; Plans</a></li><li id="menu-1791-1" class="middle even sf-item-8 sf-depth-2 sf-no-children"><a href="/it/student-it-fee" class="sf-depth-2">Student IT Fee</a></li><li id="menu-1786-1" class="middle odd sf-item-9 sf-depth-2 sf-no-children"><a href="/it/itsab" title="IT Student Advisory Board (ITSAB)" class="sf-depth-2">IT Student Advisory Board</a></li><li id="menu-1396-1" class="last even sf-item-10 sf-depth-2 sf-no-children"><a href="/policies" title="Policies &amp; Guidelines for University of Arizona IT" class="sf-depth-2">Policies</a></li></ul></li></ul>
</div>
  </div>
              </nav> <!-- /#main_nav-->
    </div> <!-- /.container -->
    </header>

<div id="main" class="page-row page-row-expanded page-row-padding-bottom">
            <div class="container">
        <div class="row">
            <article id="content" class="col-xs-12" role="main">
            <div class="item-list"><ol class="breadcrumb"><li class="first"><a href="/">Home</a></li>
<li class="active last">U-System Accounts</li>
</ol></div>                        </article>
        </div>
    </div>
    <div class="container">
        <div class="row">
        <article  class="col-sm-7 col-md-8 col-lg-8 col-8 column">
        <a id="main-content"></a>
                          <h1 class="page__title title" id="page-title">U-System Accounts</h1>
                                        


<div  about="/service/u-system-accounts" typeof="sioc:Item foaf:Document" class="ds-1col node node-service-catalog view-mode-full  clearfix">

  
  
  <div class="required-fields group-sc-default field-group-field_group_easy_responsive_tabs_nav field-group-easy-responsive-tabs-nav-wrapper">
    <div id="group-sc-default-node-service-catalog-full">
      <ul role="tablist" class="resp-tabs-list required-fields group-sc-default field-group-field_group_easy_responsive_tabs_nav ">
                  <li tabindex="0" aria-controls="panel1" role="tab">Service Overview</li>
                  <li tabindex="0" aria-controls="panel1" role="tab">Eligibility &amp; Costs</li>
                  <li tabindex="0" aria-controls="panel1" role="tab">Support, How-To’s &amp; Info</li>
                  <li tabindex="0" aria-controls="panel1" role="tab">Internal</li>
              </ul>

      <div class="resp-tabs-container required-fields group-sc-default field-group-field_group_easy_responsive_tabs_nav ">
                  <div role="tabpanel" aria-labelledby="tab1"><div class="field field-name-field-sc-description field-type-text-with-summary field-label-hidden"><div class="field-items"><div class="field-item even"><p dir="ltr">A U-System account allows access to a UNIX environment for building websites and running utilities, compilers, and software applications. </p>
<p dir="ltr"><strong>Primary Uses for a U-System Account</strong></p>
<ul dir="ltr"><li>Developing and posting web pages</li>
<li>Running programs like utilities and compilers in a Linux/Unix environment. See a full list of <a href="/documentation/u-system-software">U-System Software and Utilities</a> available.</li>
</ul><p dir="ltr"> </p>
</div></div></div><div class="field field-name-field-sc-request field-type-text-long field-label-above"><div class="field-label">Request the Service:&nbsp;</div><div class="field-items"><div class="field-item even"><p>Go to <a href="http://account.arizona.edu/">Accounts Management</a> - a NetID is required</p>
<p> </p>
<p dir="ltr"> </p>
</div></div></div><div class="field field-name-pretty-webform-links field-type-ds field-label-hidden"><div class="field-items"><div class="field-item even"><div class="view view-pretty-webforms-links-for-services view-id-pretty_webforms_links_for_services view-display-id-block view-dom-id-fa192ddc76bdb41d080ead0b5e61e8d4">
        
  
  
      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
      </div>
    </div>
  
  
  
  
  
  
</div></div></div></div></div>
                  <div role="tabpanel" aria-labelledby="tab1"><div class="field field-name-field-sc-requirements field-type-text-long field-label-above"><div class="field-label">Eligibility:&nbsp;</div><div class="field-items"><div class="field-item even"><p>UA faculty, students, and staff.</p>
</div></div></div><div class="field field-name-field-sc-charge field-type-list-text field-label-above"><div class="field-label">Service Charge:&nbsp;</div><div class="field-items"><div class="field-item even">No Charge</div></div></div></div>
                  <div role="tabpanel" aria-labelledby="tab1"><div class="field-collection-container clearfix"><div class="field field-name-field-sc-help-fc field-type-field-collection field-label-hidden"><div class="field-items"><div class="field-item even"><div class="field-collection-view clearfix view-mode-full field-collection-view-final"><div class="entity entity-field-collection-item field-collection-item-field-sc-help-fc clearfix" about="/field-collection/field-sc-help-fc/3431" typeof="">
  <div class="content">
    <div class="field field-name-field-sc-help field-type-entityreference field-label-hidden"><div class="field-items"><div class="field-item even"><div  about="/contact-247-it-support-center" typeof="sioc:Item foaf:Document" class="ds-1col node node-service-help view-mode-help_service  clearfix">

  
  <div class="field field-name-title field-type-ds field-label-hidden"><div class="field-items"><div class="field-item even" property="dc:title"><h4>Contact the 24/7 IT Support Center</h4></div></div></div><div class="field field-name-field-sh-phone field-type-text field-label-hidden"><div class="field-items"><div class="field-item even">(520) 626-TECH (8324)</div></div></div><div class="field field-name-field-sh-link field-type-link-field field-label-hidden"><div class="field-items"><div class="field-item even"><a href="https://support.arizona.edu/" target="_blank">Live Chat 24/7 Support Help</a></div></div></div></div>

</div></div></div>  </div>
</div>
</div></div></div></div></div><div class="field field-name-field-sc-docoverview field-type-text-long field-label-hidden"><div class="field-items"><div class="field-item even"><p dir="ltr"><strong>General Information</strong></p>
<p dir="ltr">Each U-System account has 500 MB of disk space. You can use the command <strong>quota -s</strong> for information about your usage. The number of files is not limited.</p>
<p dir="ltr"><strong>Create an Account</strong></p>
<ul dir="ltr"><li>Go to <a href="http://account.arizona.edu/">Accounts Management</a>. - a NetID is required</li>
<li>Select <strong>U-System Account.</strong> The account will be created for you without any further input.</li>
<li>Refresh the Accounts Management page to verify that the U-System Account icon now appears under Existing Accounts rather than Available Accounts.</li>
</ul><p dir="ltr"><strong>How to Connect</strong></p>
<ul dir="ltr"><li>Download a free *SSH client from the <a href="http://softwarelicense.arizona.edu/">Software License website</a>.</li>
<li>Run the <strong>SSH client</strong>.</li>
<li>Enter Host Name <strong>u.arizona.edu</strong>.</li>
<li>Enter Port Number: <strong>22</strong>.</li>
<li>Select either <strong>SFTP or SSH</strong> (depending on which is available).</li>
<li>Enter your <strong>NetID username</strong> for Username.</li>
<li>Enter your<strong> NetID password</strong> for Password.</li>
<li>Try to connect.</li>
<li>Once connected, you may want to visit the <a href="/documentation/u-system-software">list of available software.</a></li>
</ul><p dir="ltr">*SSH software is required to connect with the U-System. SSH uses encryption to prevent eavesdroppers from reading information (such as your password) from the network. All SSH software allows for secure communication and file transfers, replacing vulnerable utilities like telnet, rlogin, ftp and rcp.</p>
<p dir="ltr"><strong>Creating a Web Page</strong></p>
<p>Once you have successfully connected to the U-System, you will see a command prompt. Issue the following commands to set up a basic web page:</p>
<ol dir="ltr"><li><strong>mkdir ~/public_html</strong></li>
<li><strong>chmod a+x ~/. ~/public_html</strong></li>
<li><strong>echo '&lt;html&gt;&lt;body&gt;this is my web page&lt;/body&gt;&lt;/html&gt;' &gt; public_html/index.html</strong></li>
<li><strong>chmod a+r public_html/index.html</strong></li>
</ol><p>Your web page can now be viewed at <u><strong><a href="http://www.u.arizona.edu/~username">http://www.u.arizona.edu/~username</a></strong></u>.</p>
</div></div></div><div class="field field-name-field-sc-docrel field-type-blockreference field-label-hidden"><div class="field-items"><div class="field-item even"><div id="block-views-documentation-block" class="block block-views first odd">

        <h2 class="block__title block-title">Service Documentation</h2>
    
  <div class="view view-documentation view-id-documentation view-display-id-block view-dom-id-b6f2e92fb5c56262ec26a2868f8f45f0">
        
  
  
      <div class="view-content">
      <table class="views-table cols-0 table table-0 table-0 table-0 table-0" >
      <tbody>
      <tr class="odd views-row-first">
              <td class="views-field views-field-title" >
          <a href="/documentation/emailu-system-account-deletion-policy">Email/U-System Account Deletion Policy</a>        </td>
          </tr>
      <tr class="even views-row-last">
              <td class="views-field views-field-title" >
          <a href="/documentation/u-system-software">U-System Software</a>        </td>
          </tr>
    </tbody>
</table>
    </div>
  
  
  
  
  
  
</div>
</div></div></div></div></div>
                  <div role="tabpanel" aria-labelledby="tab1"><div class="field field-name-field-sc-owner field-type-entityreference field-label-above"><div class="field-label">Service Owner:&nbsp;</div><div class="field-items"><div class="field-item even"><a href="/sp/research-services-group">Research Services Group</a></div></div></div></div>
              </div>
    </div>

    <div class="clear clearfix"></div>
  </div>
</div>

                </article>
                                  <aside  class="col-sm-5 col-md-4 col-lg-4 column" role="complementary">
              <section class="region region-sidebar-second column sidebar">
    <div id="block-views-service-link-block" class="block block-views first odd">

      
  <div class="view view-service-link view-id-service_link view-display-id-block view-dom-id-6b9afe5ab9d54bc672fb1c690f7fd578">
        
  
  
      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
      
  <span>        <span></span>  </span>  </div>
    </div>
  
  
  
  
  
  
</div>
</div>
<div id="block-views-service-image-block" class="block block-views even">

      
  <div class="view view-service-image view-id-service_image view-display-id-block view-dom-id-0593ced9dd37c1af594a3298fd7d2900">
        
  
  
      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
      
  <div class="views-field views-field-field-sc-image">        <div class="field-content"><img class="img-responsive" typeof="foaf:Image" src="https://it.arizona.edu/sites/default/files/styles/service-detail/public/services/U-SystemAccounts_1400x500.jpg?itok=AkwU1lvL" width="844" height="366" alt="An image of a student working on in the U-System environment" title="U-System Accounts" /></div>  </div>  </div>
    </div>
  
  
  
  
  
  
</div>
</div>
<div id="block-views-serice-support-block" class="block block-views odd">

        <h2 class="block__title block-title">GET SUPPORT</h2>
    
  <div class="view view-serice-support view-id-serice_support view-display-id-block view-dom-id-92cd91e4521a77b7fa4e32ed8bfc567a">
        
  
  
      <div class="view-content">
        <div class="views-row views-row-1 views-row-odd views-row-first views-row-last">
      
  <div class="views-field views-field-field-sc-help-fc">        <div class="field-content"><div class="field-collection-view clearfix view-mode-full field-collection-view-final"><div class="entity entity-field-collection-item field-collection-item-field-sc-help-fc clearfix" about="/field-collection/field-sc-help-fc/3431" typeof="">
  <div class="content">
    <div class="field field-name-field-sc-help field-type-entityreference field-label-hidden"><div class="field-items"><div class="field-item even"><div  about="/contact-247-it-support-center" typeof="sioc:Item foaf:Document" class="ds-1col node node-service-help view-mode-help_service  clearfix">

  
  <div class="field field-name-title field-type-ds field-label-hidden"><div class="field-items"><div class="field-item even" property="dc:title"><h4>Contact the 24/7 IT Support Center</h4></div></div></div><div class="field field-name-field-sh-phone field-type-text field-label-hidden"><div class="field-items"><div class="field-item even">(520) 626-TECH (8324)</div></div></div><div class="field field-name-field-sh-link field-type-link-field field-label-hidden"><div class="field-items"><div class="field-item even"><a href="https://support.arizona.edu/" target="_blank">Live Chat 24/7 Support Help</a></div></div></div></div>

</div></div></div>  </div>
</div>
</div></div>  </div>  </div>
    </div>
  
  
  
  
  
  
</div>
</div>
<div id="block-views-service-status-old-block" class="block block-views even">

        <h2 class="block__title block-title">SERVICE STATUS</h2>
    
  <div class="view view-service-status-old- view-id-service_status_old_ view-display-id-block view-dom-id-cbc9c9d05a507d5555b8de4c4ddbe571">
        
  
      <div class="attachment attachment-before">
      <div class="view view-service-status-old- view-id-service_status_old_ view-display-id-attachment_2">
        
  
  
      <div class="view-content">
        <div class="intermittent">
      
          <a href="https://it.arizona.edu/alert/1584" alt="service-interruption status for this service">UAccess Employee</a>    </div>
  <div class="intermittent">
      
          <a href="https://it.arizona.edu/alert/1584" alt="service-interruption status for this service">UAccess Learning</a>    </div>
    </div>
  
  
  
  
  
  
</div><div class="view view-service-status-old- view-id-service_status_old_ view-display-id-attachment_1">
        
  
  
  
  
  
  
  
  
</div>    </div>
  
      <div class="view-content">
        <div class="optimal">
      
          CatMail    </div>
  <div class="optimal">
      
          Desire2Learn (D2L)    </div>
  <div class="optimal">
      
          UAccess Analytics    </div>
  <div class="optimal">
      
          UAccess Financials    </div>
  <div class="optimal">
      
          UAccess Research    </div>
  <div class="optimal">
      
          UAccess Student    </div>
  <div class="optimal">
      
          UAConnect 365    </div>
  <div class="optimal">
      
          UAWiFi    </div>
  <div class="optimal">
      
          VPN    </div>
    </div>
  
  
  
  
      <div class="view-footer">
      <hr><img src="/sites/all/themes/ua_zen_it/images/optimal.png" alt="Legend for optimal service status"> Optimal<br>
<img src="/sites/all/themes/ua_zen_it/images/intermittent.png" alt="Legend for intermittent service status"> Intermittent Outage/Maintenance<br>
<img src="/sites/all/themes/ua_zen_it/images/degraded.png" alt="Legend for outage service status"> Outage<br>    </div>
  
  
</div>
</div>
<div id="block-uits-247alerts-current-alerts" class="block block-uits-247alerts last odd">

        <h2 class="block__title block-title">Service Status Updates</h2>
    
  <div class="uits-247alerts-alert-list">
      <div class="uits-247alerts-alert-list-item"><a href="/alert/1586">
		UAccess Financials Maintenance and Fiscal End of Year Processing, Sunday, July 8th, 2018 from 6:00 a.m. to 8:00 a.m. and from 8:00 p.m. to Monday, July 9th, 2018 at 5:30 a.m.
	</a></div>
      <div class="uits-247alerts-alert-list-item"><a href="/alert/1585">
		Cisco Unified Communications Manager Upgrade, Sunday, July 8, 2018 from 4:00 a.m. to 10:00 a.m.
	</a></div>
      <div class="uits-247alerts-alert-list-item"><a href="/alert/1584">
		UAccess Learning and Employee Maintenance on Friday July 6, at 6:00 p.m. to Saturday July 7, at 6:00 p.m.
	</a></div>
      <div class="uits-247alerts-alert-list-item"><a href="/alert/1580">
		[ALL CLEAR] UAccess Financials Fiscal End of Year Processing on Tuesday, July 3rd, 2018 from 7:00 p.m. to Wednesday, July 4th, 2018 to 5:30 a.m.
	</a></div>
  </div>
<div class="alerts-all"><a href="/alerts">View History</a></div>
</div>
  </section>
          </aside>  <!-- /#sidebar-second -->
                </div>
    </div>
                </div> <!-- /.main -->
<footer id="footer_site" class="page page-row">
  <div class="container">
    <div class="row">
       
        <div class="page-row-padding-top page-row-padding-bottom"></div>
	                <div class="col-sm-5">
	    	        <a href="/" title="Home" rel="home" class="header__logo" id="logo">
<svg alt="Go to the IT Website Homepage" class="header__logo-image"  version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 425.822 70" style="enable-background:new 0 0 425.822 70;" xml:space="preserve">
<g>
	<g>
		<path style="fill:#00275B;" d="M76.519,62.246c0.533,0.559,0.799,1.244,0.799,2.055c0,0.809-0.265,1.493-0.797,2.053
			c-0.532,0.559-1.183,0.838-1.955,0.838c-0.771,0-1.42-0.279-1.953-0.838c-0.53-0.56-0.796-1.244-0.796-2.053
			c0-0.811,0.267-1.496,0.798-2.055c0.533-0.56,1.183-0.839,1.951-0.839C75.336,61.407,75.986,61.686,76.519,62.246 M76.131,62.594
			c-0.424-0.465-0.947-0.697-1.565-0.697c-0.617,0-1.137,0.232-1.562,0.697c-0.426,0.465-0.638,1.035-0.638,1.707
			c0,0.673,0.212,1.243,0.638,1.706c0.425,0.464,0.945,0.695,1.562,0.695c0.616,0,1.137-0.231,1.564-0.695
			c0.426-0.463,0.639-1.033,0.639-1.706C76.769,63.629,76.557,63.059,76.131,62.594 M73.374,62.628h0.247h1.001
			c0.337,0,0.6,0.08,0.792,0.239c0.191,0.161,0.287,0.384,0.287,0.668c0,0.307-0.096,0.552-0.288,0.727
			c-0.143,0.131-0.327,0.213-0.552,0.246l0.896,1.464h-0.282H75.19l-0.807-1.445l-0.52,0.003v1.442h-0.244h-0.245V62.628z
			 M73.863,64.084h0.663c0.231,0,0.399-0.044,0.506-0.132c0.107-0.088,0.159-0.227,0.159-0.416c0-0.166-0.052-0.287-0.159-0.365
			c-0.107-0.078-0.275-0.117-0.506-0.117h-0.663V64.084z"/>
	</g>
	<polygon style="fill:#FFFFFF;" points="13.717,0 13.708,22.714 15.899,22.709 7.277,47.291 0,47.281 0,70 70.63,70 70.63,47.251 
		63.302,47.24 54.755,22.728 56.9,22.738 56.9,0.007 	"/>
	<g>
		<path style="fill:#BD2036;" d="M35.302,8.488L50.43,50.602c0,0,1.939,5.125,5.087,5.125H44.502c0,0,0.553,0.087,1.104-0.9
			c0.316-0.563,0.05-1.408,0.05-1.408l-3.406-9.401h-6.948h-6.918l-3.412,9.401c0,0-0.26,0.845,0.055,1.408
			c0.549,0.987,1.101,0.9,1.101,0.9H15.114c3.146,0,5.086-5.125,5.086-5.125L35.302,8.488z"/>
	</g>
	<polygon style="fill:#00275B;" points="35.316,8.435 48.957,8.435 48.957,14.292 43.29,14.292 58.19,55.52 62.596,55.52 
		62.596,61.586 44.13,61.586 44.13,55.685 38.946,55.685 38.946,67.256 68.093,67.256 68.093,50.003 61.548,50.015 51.056,19.985 
		54.351,19.985 54.351,2.742 35.316,2.742 16.281,2.742 16.281,19.985 19.577,19.985 9.084,49.977 2.539,50.003 2.539,67.256 
		31.688,67.256 31.688,55.685 26.502,55.685 26.502,61.586 8.035,61.586 8.035,55.52 12.442,55.52 27.342,14.292 21.675,14.292 
		21.675,8.435 	"/>
	<polygon style="fill:#FFFFFF;" points="35.29,39.554 40.619,39.554 35.395,24.781 29.985,39.554 	"/>
	<rect x="86.4" y="0" style="fill:#00275B;" width="1.264" height="70"/>
	<g>
		<path style="fill:#00275B;" d="M413.664,31.284c-0.263-0.586-0.483-0.893-0.659-0.923c-0.137-0.068-0.454-0.102-0.952-0.102
			l-3.062,0.132c0.528,0.225,0.95,0.522,1.267,0.893c0.318,0.372,0.686,1.011,1.106,1.919l4.19,9.156
			c0.215,0.478,0.376,0.815,0.483,1.01c0.108,0.196,0.232,0.374,0.374,0.535c0.141,0.161,0.398,0.427,0.769,0.798l-0.308,0.835
			c-0.468,1.211-1.008,2.114-1.618,2.71c-0.611,0.596-1.311,0.894-2.102,0.894c-0.567,0-1.163-0.181-1.788-0.542l-2.856,2.065
			c0.889,0.313,1.604,0.525,2.146,0.637c0.542,0.113,1.106,0.169,1.692,0.169c0.84,0,1.623-0.115,2.351-0.344
			c0.727-0.23,1.374-0.574,1.941-1.033c0.527-0.43,0.969-0.903,1.326-1.421c0.356-0.518,0.725-1.245,1.106-2.183l6.752-16.098
			h-4.438c0.615,0.41,0.923,0.889,0.923,1.435c0,0.498-0.161,1.138-0.484,1.919l-3.325,8.423L413.664,31.284z M401.072,32.91
			c0.771,0.743,1.157,1.651,1.157,2.725c0,0.947-0.293,1.719-0.879,2.314c-0.586,0.596-1.353,0.894-2.3,0.894
			c-1.133,0-2.097-0.393-2.893-1.179c-0.796-0.786-1.194-1.741-1.194-2.864c0-0.859,0.315-1.575,0.945-2.146
			c0.63-0.571,1.409-0.857,2.336-0.857C399.358,31.797,400.3,32.168,401.072,32.91 M404.353,30.23c-0.967,0-1.978-0.039-3.032-0.118
			c-1.465-0.097-2.383-0.146-2.754-0.146c-1.201,0-2.303,0.239-3.304,0.718c-1.001,0.478-1.784,1.128-2.351,1.948
			c-0.566,0.82-0.849,1.734-0.849,2.739c0,0.703,0.151,1.387,0.454,2.051c0.302,0.664,0.727,1.24,1.274,1.729
			c0.361,0.312,0.689,0.539,0.982,0.681c0.293,0.141,0.727,0.29,1.303,0.446c-0.703,0.274-1.233,0.501-1.589,0.682
			c-0.356,0.18-0.6,0.346-0.732,0.498c-0.132,0.151-0.198,0.329-0.198,0.534c0,0.264,0.073,0.564,0.22,0.901
			c0.146,0.337,0.322,0.608,0.527,0.813c0.41,0.362,0.913,0.542,1.509,0.542c0.293,0,0.532-0.009,0.718-0.029
			c0.38-0.02,0.888-0.029,1.523-0.029c2.158,0,3.769,0.249,4.834,0.747c1.064,0.498,1.597,1.259,1.597,2.285
			c0,0.683-0.235,1.286-0.703,1.809c-0.469,0.522-1.131,0.93-1.985,1.223c-0.855,0.293-1.829,0.44-2.923,0.44
			c-1.65,0-2.964-0.306-3.94-0.916c-0.977-0.61-1.465-1.443-1.465-2.498c0-0.439,0.115-0.774,0.344-1.003
			c0.23-0.23,0.584-0.388,1.062-0.476c-0.595-0.254-1.167-0.381-1.714-0.381c-0.605,0-1.13,0.103-1.574,0.308
			c-0.445,0.205-0.782,0.495-1.011,0.871c-0.23,0.376-0.344,0.823-0.344,1.341c0,0.849,0.383,1.623,1.15,2.321
			c0.766,0.698,1.816,1.246,3.149,1.641c1.333,0.396,2.791,0.593,4.373,0.593c0.712,0,1.406-0.049,2.08-0.146
			c0.674-0.098,1.301-0.237,1.882-0.418c0.581-0.181,1.135-0.405,1.663-0.674c0.527-0.268,1.001-0.573,1.421-0.915
			c1.054-0.86,1.582-1.983,1.582-3.369c0-0.908-0.23-1.68-0.689-2.315c-0.322-0.419-0.757-0.808-1.304-1.164
			c-0.547-0.357-1.089-0.608-1.626-0.755c-0.644-0.185-1.325-0.309-2.043-0.373c-0.718-0.064-1.8-0.105-3.245-0.125
			c-0.879,0-1.318-0.2-1.318-0.6c0-0.195,0.1-0.359,0.3-0.491c0.2-0.132,0.52-0.242,0.96-0.33c1.367-0.136,2.417-0.346,3.149-0.629
			c1.191-0.43,2.09-1.011,2.695-1.744c0.606-0.732,0.909-1.591,0.909-2.578c0-0.8-0.186-1.513-0.557-2.138s-0.967-1.221-1.787-1.787
			c1.728,0.302,2.89,0.454,3.486,0.454c0.459,0,0.757-0.132,0.894-0.396l0.908-2.036C406.848,30.142,405.544,30.23,404.353,30.23
			 M383.933,32.837c0.786,0.498,1.397,1.196,1.831,2.095c0.435,0.898,0.652,1.933,0.652,3.105c0,1.035-0.207,1.949-0.622,2.74
			c-0.416,0.791-0.999,1.406-1.751,1.845c-0.752,0.44-1.602,0.659-2.549,0.659c-0.713,0-1.379-0.144-1.999-0.432
			c-0.62-0.288-1.17-0.705-1.648-1.252c-0.479-0.547-0.845-1.187-1.099-1.919c-0.254-0.733-0.381-1.499-0.381-2.3
			c0-1.015,0.203-1.928,0.608-2.739c0.405-0.811,0.974-1.438,1.707-1.883c0.732-0.444,1.572-0.666,2.519-0.666
			C382.236,32.09,383.147,32.339,383.933,32.837 M379.575,30.156c-0.644,0.127-1.255,0.32-1.831,0.579
			c-0.576,0.259-1.123,0.584-1.64,0.974c-0.928,0.723-1.656,1.619-2.183,2.688c-0.527,1.069-0.791,2.19-0.791,3.362
			c0,1.426,0.349,2.725,1.047,3.896c0.698,1.172,1.67,2.093,2.915,2.762c1.246,0.668,2.625,1.003,4.139,1.003
			c1.552,0,2.976-0.347,4.27-1.04c1.293-0.693,2.309-1.638,3.047-2.834c0.737-1.197,1.105-2.517,1.105-3.963
			c0-1.055-0.21-2.068-0.629-3.039c-0.42-0.972-1.031-1.819-1.831-2.542c-1.475-1.357-3.301-2.036-5.479-2.036
			C380.933,29.966,380.22,30.03,379.575,30.156 M370.435,43.86c-0.122-0.317-0.183-0.979-0.183-1.985V23.55
			c-0.371,0.401-0.991,0.601-1.861,0.601h-2.182c0.41,0.312,0.691,0.569,0.842,0.769s0.249,0.446,0.293,0.739
			s0.066,0.83,0.066,1.612v14.604c0,0.762-0.022,1.292-0.066,1.59c-0.044,0.298-0.142,0.549-0.293,0.754s-0.432,0.464-0.842,0.776
			h5.244C370.896,44.556,370.557,44.177,370.435,43.86 M358.826,32.837c0.786,0.498,1.396,1.196,1.831,2.095
			c0.434,0.898,0.652,1.933,0.652,3.105c0,1.035-0.208,1.949-0.623,2.74c-0.415,0.791-0.998,1.406-1.75,1.845
			c-0.752,0.44-1.602,0.659-2.549,0.659c-0.713,0-1.38-0.144-2-0.432c-0.62-0.288-1.169-0.705-1.648-1.252
			c-0.478-0.547-0.844-1.187-1.098-1.919c-0.254-0.733-0.381-1.499-0.381-2.3c0-1.015,0.203-1.928,0.608-2.739
			c0.405-0.811,0.974-1.438,1.706-1.883c0.733-0.444,1.573-0.666,2.52-0.666C357.129,32.09,358.04,32.339,358.826,32.837
			 M354.468,30.156c-0.645,0.127-1.255,0.32-1.831,0.579c-0.576,0.259-1.123,0.584-1.641,0.974
			c-0.928,0.723-1.655,1.619-2.182,2.688c-0.528,1.069-0.791,2.19-0.791,3.362c0,1.426,0.349,2.725,1.047,3.896
			c0.698,1.172,1.67,2.093,2.915,2.762c1.245,0.668,2.624,1.003,4.138,1.003c1.553,0,2.976-0.347,4.27-1.04s2.31-1.638,3.047-2.834
			c0.737-1.197,1.106-2.517,1.106-3.963c0-1.055-0.21-2.068-0.63-3.039c-0.42-0.972-1.03-1.819-1.831-2.542
			c-1.475-1.357-3.301-2.036-5.478-2.036C355.825,29.966,355.113,30.03,354.468,30.156 M333.084,30.391h-2.036
			c0.41,0.312,0.691,0.571,0.842,0.776c0.152,0.205,0.249,0.454,0.293,0.747s0.066,0.826,0.066,1.597v8.364
			c0,0.762-0.022,1.292-0.066,1.59c-0.044,0.298-0.141,0.549-0.293,0.754c-0.151,0.205-0.432,0.464-0.842,0.776h5.244
			c-0.4-0.322-0.676-0.583-0.827-0.783c-0.152-0.2-0.252-0.462-0.301-0.784c-0.049-0.322-0.073-0.84-0.073-1.553v-6.387
			c0-0.8,0.141-1.401,0.425-1.801c0.312-0.43,0.732-0.767,1.26-1.011c0.527-0.244,1.108-0.366,1.743-0.366
			c0.654,0,1.272,0.124,1.853,0.373c0.581,0.249,1.023,0.574,1.325,0.974c0.244,0.293,0.42,0.687,0.528,1.18
			c0.107,0.493,0.161,1.159,0.161,1.999v5.039c0,0.684-0.025,1.192-0.073,1.524c-0.049,0.332-0.152,0.603-0.308,0.813
			c-0.156,0.21-0.439,0.471-0.85,0.783h5.289c-0.557-0.439-0.897-0.818-1.018-1.135c-0.123-0.317-0.184-0.979-0.184-1.985v-5.376
			c0-1.201-0.053-2.102-0.161-2.702c-0.107-0.601-0.303-1.126-0.586-1.575c-0.302-0.44-0.703-0.833-1.201-1.179
			c-0.498-0.347-1.072-0.613-1.721-0.799c-0.65-0.185-1.296-0.278-1.941-0.278c-0.937,0-1.758,0.183-2.461,0.549
			c-0.703,0.366-1.445,1.004-2.226,1.912V29.79C334.573,30.191,333.953,30.391,333.084,30.391 M315.921,24.151h-2.182
			c0.41,0.312,0.691,0.569,0.842,0.769s0.249,0.446,0.293,0.739s0.066,0.83,0.066,1.612v14.604c0,0.762-0.022,1.292-0.066,1.59
			c-0.044,0.298-0.142,0.549-0.293,0.754s-0.432,0.464-0.842,0.776h5.273c-0.43-0.332-0.717-0.595-0.864-0.791
			c-0.146-0.195-0.244-0.459-0.293-0.791c-0.049-0.332-0.073-0.844-0.073-1.538v-5.786c0-0.84,0.031-1.406,0.095-1.699
			c0.063-0.293,0.222-0.596,0.476-0.908c0.352-0.411,0.789-0.723,1.311-0.938s1.096-0.322,1.721-0.322
			c1.367,0,2.388,0.449,3.062,1.347c0.234,0.293,0.393,0.628,0.476,1.004c0.083,0.376,0.124,0.94,0.124,1.692v5.61
			c0,0.694-0.024,1.209-0.073,1.546c-0.049,0.336-0.149,0.607-0.3,0.813c-0.152,0.205-0.437,0.459-0.857,0.761h5.273
			c-0.556-0.449-0.896-0.832-1.018-1.15c-0.122-0.317-0.183-0.974-0.183-1.97v-6.577c0-0.85-0.056-1.504-0.168-1.963
			c-0.113-0.459-0.315-0.893-0.608-1.304c-0.322-0.439-0.716-0.813-1.179-1.12c-0.464-0.308-0.987-0.542-1.568-0.703
			c-0.581-0.161-1.194-0.242-1.838-0.242c-0.987,0-1.907,0.181-2.761,0.542c-0.855,0.361-1.516,0.85-1.985,1.465V23.55
			C317.411,23.951,316.791,24.151,315.921,24.151 M307.572,29.966c-1.367,0-2.571,0.181-3.611,0.542s-1.985,0.933-2.834,1.714
			c-1.719,1.582-2.578,3.501-2.578,5.757c0,1.054,0.214,2.043,0.644,2.966c0.43,0.923,1.035,1.719,1.816,2.388
			c0.782,0.669,1.692,1.184,2.732,1.545s2.19,0.542,3.45,0.542c1.719,0,3.066-0.19,4.043-0.571l1.86-3.091
			c-0.527,0.342-1.062,0.628-1.604,0.857s-1.081,0.398-1.618,0.505c-0.537,0.108-1.075,0.161-1.612,0.161
			c-1.22,0-2.321-0.256-3.303-0.769c-0.981-0.512-1.755-1.228-2.322-2.146c-0.566-0.917-0.849-1.933-0.849-3.047
			c0-1.035,0.217-1.95,0.652-2.746c0.434-0.796,1.059-1.409,1.875-1.838c0.815-0.43,1.736-0.645,2.761-0.645
			c1.582,0,2.9,0.513,3.955,1.538v-3.267C309.896,30.098,308.744,29.966,307.572,29.966 M286.56,32.778
			c0.732-0.615,1.635-0.922,2.71-0.922c2.236,0,3.579,1.181,4.028,3.545h-8.188C285.344,34.268,285.827,33.394,286.56,32.778
			 M296.623,36.865c0-0.996-0.181-1.916-0.542-2.761c-0.361-0.844-0.864-1.575-1.509-2.19c-0.644-0.615-1.406-1.093-2.285-1.435
			c-0.879-0.342-1.836-0.513-2.871-0.513c-1.055,0-2.029,0.154-2.922,0.461c-0.894,0.308-1.677,0.765-2.351,1.37
			c-0.518,0.469-0.972,1.023-1.363,1.663c-0.39,0.639-0.691,1.318-0.9,2.036c-0.211,0.718-0.315,1.443-0.315,2.175
			c0,1.494,0.378,2.832,1.135,4.014c0.757,1.181,1.821,2.099,3.193,2.754c1.372,0.654,2.918,0.981,4.636,0.981
			c0.508,0,1.014-0.024,1.517-0.073c0.502-0.049,0.981-0.13,1.435-0.242s0.93-0.261,1.428-0.447l1.714-3.017
			c-0.576,0.39-1.133,0.705-1.67,0.945c-0.537,0.239-1.111,0.415-1.721,0.527c-0.61,0.112-1.248,0.168-1.912,0.168
			c-1.24,0-2.334-0.234-3.281-0.703c-0.947-0.468-1.68-1.147-2.197-2.036c-0.518-0.888-0.806-1.943-0.864-3.164h11.645V36.865z
			 M282.561,24.092c0.058,0-0.352,0.02-1.231,0.059h-11.909c-0.635,0-1.172-0.074-1.611-0.22l-1.172,3.779
			c0.634-0.478,1.228-0.798,1.78-0.959c0.551-0.161,1.325-0.242,2.321-0.242c1.114,0,1.963,0.034,2.549,0.102v14.341
			c0,0.909-0.039,1.617-0.117,2.124c-0.078,0.508-0.215,0.904-0.41,1.187c-0.196,0.283-0.489,0.527-0.879,0.732h6.269
			c-0.439-0.283-0.781-0.578-1.025-0.886c-0.244-0.308-0.415-0.686-0.513-1.135c-0.097-0.449-0.146-1.016-0.146-1.699V26.611h0.513
			c1.025-0.068,1.767-0.102,2.226-0.102c0.899,0,1.562,0.086,1.992,0.256c0.43,0.171,0.757,0.486,0.982,0.945l1.011-3.779
			C283.073,23.97,282.863,24.024,282.561,24.092 M245.119,30.391h-2.036c0.41,0.312,0.69,0.571,0.842,0.776
			c0.151,0.205,0.249,0.454,0.293,0.747c0.044,0.293,0.066,0.826,0.066,1.597v8.364c0,0.762-0.022,1.292-0.066,1.59
			c-0.044,0.298-0.142,0.549-0.293,0.754c-0.152,0.205-0.432,0.464-0.842,0.776h5.244c-0.401-0.322-0.677-0.583-0.828-0.783
			c-0.151-0.2-0.252-0.462-0.3-0.784c-0.049-0.322-0.074-0.84-0.074-1.553v-6.387c0-0.8,0.142-1.401,0.425-1.801
			c0.313-0.43,0.733-0.767,1.26-1.011c0.527-0.244,1.108-0.366,1.743-0.366c0.654,0,1.272,0.124,1.853,0.373
			c0.581,0.249,1.023,0.574,1.326,0.974c0.244,0.293,0.42,0.687,0.527,1.18c0.108,0.493,0.161,1.159,0.161,1.999v5.039
			c0,0.684-0.024,1.192-0.073,1.524c-0.049,0.332-0.151,0.603-0.307,0.813c-0.157,0.21-0.44,0.471-0.85,0.783h5.288
			c-0.557-0.439-0.896-0.818-1.018-1.135c-0.122-0.317-0.183-0.979-0.183-1.985v-5.376c0-1.201-0.054-2.102-0.161-2.702
			c-0.108-0.601-0.303-1.126-0.586-1.575c-0.303-0.44-0.703-0.833-1.201-1.179c-0.498-0.347-1.072-0.613-1.722-0.799
			c-0.649-0.185-1.296-0.278-1.94-0.278c-0.938,0-1.758,0.183-2.461,0.549c-0.704,0.366-1.446,1.004-2.227,1.912V29.79
			C246.608,30.191,245.988,30.391,245.119,30.391 M235.627,32.837c0.786,0.498,1.397,1.196,1.831,2.095
			c0.435,0.898,0.652,1.933,0.652,3.105c0,1.035-0.207,1.949-0.622,2.74c-0.415,0.791-0.999,1.406-1.751,1.845
			c-0.752,0.44-1.601,0.659-2.549,0.659c-0.713,0-1.379-0.144-1.999-0.432c-0.62-0.288-1.17-0.705-1.648-1.252
			c-0.479-0.547-0.845-1.187-1.099-1.919c-0.254-0.733-0.381-1.499-0.381-2.3c0-1.015,0.203-1.928,0.608-2.739
			c0.405-0.811,0.974-1.438,1.707-1.883c0.732-0.444,1.572-0.666,2.519-0.666C233.93,32.09,234.841,32.339,235.627,32.837
			 M231.269,30.156c-0.644,0.127-1.255,0.32-1.831,0.579c-0.576,0.259-1.123,0.584-1.64,0.974c-0.928,0.723-1.655,1.619-2.183,2.688
			c-0.527,1.069-0.791,2.19-0.791,3.362c0,1.426,0.349,2.725,1.048,3.896c0.698,1.172,1.669,2.093,2.915,2.762
			c1.245,0.668,2.624,1.003,4.138,1.003c1.552,0,2.976-0.347,4.27-1.04c1.294-0.693,2.309-1.638,3.047-2.834
			c0.737-1.197,1.106-2.517,1.106-3.963c0-1.055-0.211-2.068-0.63-3.039c-0.42-0.972-1.031-1.819-1.831-2.542
			c-1.475-1.357-3.301-2.036-5.479-2.036C232.627,29.966,231.914,30.03,231.269,30.156 M219.089,25.103
			c-0.39,0.381-0.585,0.84-0.585,1.377c0,0.556,0.187,1.028,0.564,1.413c0.375,0.386,0.837,0.579,1.384,0.579
			c0.566,0,1.037-0.193,1.413-0.579c0.376-0.385,0.564-0.857,0.564-1.413c0-0.528-0.185-0.984-0.556-1.37
			c-0.372-0.386-0.826-0.579-1.363-0.579C219.954,24.531,219.48,24.722,219.089,25.103 M220.1,30.391h-2.197
			c0.41,0.312,0.691,0.571,0.842,0.776c0.152,0.205,0.249,0.454,0.293,0.747c0.044,0.293,0.066,0.826,0.066,1.597v8.364
			c0,0.762-0.022,1.292-0.066,1.59c-0.044,0.298-0.141,0.549-0.293,0.754c-0.151,0.205-0.432,0.464-0.842,0.776h5.244
			c-0.4-0.322-0.676-0.583-0.828-0.783c-0.151-0.2-0.251-0.462-0.3-0.784s-0.073-0.84-0.073-1.553V29.79
			C221.575,30.191,220.959,30.391,220.1,30.391 M214.402,32.486c0.537,0,0.943,0.041,1.216,0.124s0.528,0.232,0.762,0.447V30.2
			c-0.303,0.127-0.923,0.191-1.86,0.191h-2.461v-4.717h-1.231v0.395c0,1.778-0.391,3.077-1.172,3.897
			c-0.654,0.732-1.523,1.192-2.607,1.377v1.143h2.168v6.987c0,1.016,0.029,1.777,0.088,2.285c0.058,0.508,0.166,0.925,0.322,1.252
			c0.156,0.328,0.4,0.667,0.732,1.018c0.889,0.928,1.968,1.392,3.238,1.392c0.4,0,0.781-0.064,1.142-0.19l1.641-2.242
			c-0.469,0.176-0.908,0.264-1.318,0.264c-1.036,0-1.846-0.361-2.432-1.084c-0.225-0.283-0.376-0.625-0.454-1.025
			c-0.078-0.401-0.117-1.045-0.117-1.934v-6.723H214.402z M201.726,43.369c0.161,0.44,0.481,0.811,0.96,1.114
			c0.381,0.234,0.781,0.398,1.201,0.49c0.42,0.093,1.011,0.169,1.772,0.227l1.377-2.065c-0.869-0.029-1.499-0.2-1.889-0.513
			c-0.362-0.263-0.586-0.549-0.674-0.857c-0.088-0.307-0.132-0.91-0.132-1.809v-4.087c0-1.162-0.037-1.97-0.11-2.424
			c-0.073-0.454-0.247-0.906-0.52-1.355c-0.889-1.416-2.671-2.124-5.346-2.124c-0.762,0-1.495,0.068-2.198,0.205l-2.094,3.179
			c1.035-0.498,1.85-0.833,2.446-1.004c0.595-0.17,1.22-0.256,1.875-0.256c0.586,0,1.111,0.083,1.575,0.249
			c0.463,0.166,0.822,0.403,1.076,0.71c0.254,0.308,0.381,0.662,0.381,1.062c0,0.567-0.237,0.997-0.71,1.29
			c-0.474,0.293-1.429,0.581-2.864,0.864c-1.983,0.381-3.369,0.791-4.16,1.23c-0.538,0.284-0.967,0.721-1.289,1.311
			c-0.323,0.591-0.484,1.214-0.484,1.868c0,1.377,0.537,2.549,1.612,3.516c0.917,0.82,2.167,1.23,3.75,1.23
			c0.615,0,1.196-0.064,1.743-0.19l1.86-2.359c-0.899,0.274-1.69,0.41-2.373,0.41c-1.055,0-1.878-0.229-2.468-0.688
			c-0.591-0.459-0.887-1.089-0.887-1.89c0-1.25,0.762-2.06,2.286-2.431c1.142-0.264,1.877-0.44,2.204-0.528
			c0.327-0.088,0.625-0.178,0.894-0.271c0.268-0.092,0.583-0.227,0.945-0.403v4.087C201.485,42.193,201.565,42.93,201.726,43.369
			 M167.574,30.391h-2.197c0.41,0.312,0.691,0.571,0.842,0.776c0.151,0.205,0.249,0.454,0.293,0.747s0.066,0.826,0.066,1.597v8.364
			c0,0.762-0.022,1.292-0.066,1.59c-0.044,0.298-0.142,0.549-0.293,0.754s-0.432,0.464-0.842,0.776h5.244
			c-0.391-0.293-0.664-0.544-0.82-0.754c-0.157-0.21-0.259-0.478-0.308-0.806c-0.049-0.327-0.073-0.847-0.073-1.56v-5.61
			c0-0.645,0.039-1.135,0.117-1.472c0.078-0.337,0.22-0.657,0.425-0.96c0.302-0.449,0.718-0.796,1.245-1.04
			c0.527-0.244,1.103-0.366,1.728-0.366c0.489,0,0.975,0.093,1.458,0.278c0.483,0.186,0.876,0.445,1.179,0.777
			c0.645,0.673,0.967,1.753,0.967,3.237v5.156c0,0.694-0.025,1.209-0.073,1.546c-0.049,0.336-0.147,0.605-0.293,0.805
			c-0.147,0.2-0.425,0.457-0.835,0.769h5.273c-0.566-0.449-0.913-0.83-1.04-1.142c-0.127-0.313-0.19-0.972-0.19-1.978V36.47
			c0-0.733,0.019-1.243,0.058-1.531c0.039-0.288,0.132-0.573,0.279-0.857c0.293-0.547,0.727-0.979,1.303-1.296
			c0.576-0.317,1.202-0.476,1.875-0.476c1.211,0,2.154,0.41,2.828,1.23c0.283,0.381,0.488,0.83,0.615,1.348
			c0.127,0.518,0.19,1.216,0.19,2.095v4.892c0,0.694-0.024,1.209-0.073,1.546c-0.049,0.336-0.149,0.607-0.3,0.813
			c-0.152,0.205-0.438,0.459-0.857,0.761h5.493c-0.401-0.166-0.701-0.356-0.901-0.571c-0.2-0.215-0.337-0.518-0.41-0.908
			c-0.073-0.391-0.11-0.938-0.11-1.641v-5.669c0-1.015-0.056-1.814-0.168-2.395c-0.113-0.581-0.306-1.091-0.579-1.531
			c-0.42-0.712-1.072-1.276-1.956-1.691s-1.872-0.623-2.966-0.623c-0.684,0-1.311,0.093-1.882,0.278
			c-0.572,0.186-1.097,0.474-1.575,0.865c-0.479,0.39-0.986,0.937-1.523,1.64c-0.596-0.967-1.275-1.672-2.037-2.117
			c-0.761-0.444-1.689-0.666-2.783-0.666c-1.006,0-1.865,0.19-2.578,0.571c-0.713,0.381-1.397,1.021-2.051,1.919V29.79
			C168.931,30.191,168.365,30.391,167.574,30.391 M159.335,44.212c-0.152-0.2-0.252-0.462-0.301-0.784s-0.073-0.84-0.073-1.553
			V36.66c0-1.298,0.225-2.26,0.674-2.885c0.273-0.401,0.654-0.716,1.143-0.945c0.488-0.23,1.015-0.344,1.582-0.344
			c0.644,0,1.142,0.17,1.494,0.512v-2.915c-0.44-0.078-0.806-0.117-1.099-0.117c-0.82,0-1.553,0.208-2.197,0.623
			c-0.645,0.415-1.177,1.018-1.597,1.809V29.79c-0.371,0.401-0.986,0.601-1.846,0.601h-2.197c0.41,0.312,0.691,0.571,0.842,0.776
			c0.152,0.205,0.249,0.454,0.293,0.747s0.066,0.826,0.066,1.597v8.364c0,0.762-0.022,1.292-0.066,1.59
			c-0.044,0.298-0.141,0.549-0.293,0.754c-0.151,0.205-0.432,0.464-0.842,0.776h5.244C159.762,44.673,159.486,44.412,159.335,44.212
			 M147.463,32.837c0.786,0.498,1.396,1.196,1.831,2.095c0.435,0.898,0.652,1.933,0.652,3.105c0,1.035-0.208,1.949-0.623,2.74
			c-0.415,0.791-0.998,1.406-1.75,1.845c-0.752,0.44-1.602,0.659-2.549,0.659c-0.713,0-1.379-0.144-1.999-0.432
			c-0.621-0.288-1.17-0.705-1.648-1.252c-0.479-0.547-0.845-1.187-1.099-1.919c-0.254-0.733-0.381-1.499-0.381-2.3
			c0-1.015,0.203-1.928,0.608-2.739c0.405-0.811,0.974-1.438,1.707-1.883c0.732-0.444,1.572-0.666,2.519-0.666
			C145.766,32.09,146.677,32.339,147.463,32.837 M143.105,30.156c-0.644,0.127-1.255,0.32-1.831,0.579
			c-0.576,0.259-1.123,0.584-1.641,0.974c-0.927,0.723-1.655,1.619-2.182,2.688c-0.528,1.069-0.791,2.19-0.791,3.362
			c0,1.426,0.349,2.725,1.047,3.896c0.698,1.172,1.67,2.093,2.915,2.762c1.245,0.668,2.625,1.003,4.138,1.003
			c1.553,0,2.976-0.347,4.27-1.04c1.294-0.693,2.31-1.638,3.047-2.834c0.738-1.197,1.106-2.517,1.106-3.963
			c0-1.055-0.21-2.068-0.63-3.039c-0.42-0.972-1.03-1.819-1.831-2.542c-1.474-1.357-3.301-2.036-5.478-2.036
			C144.462,29.966,143.75,30.03,143.105,30.156 M134.154,32.486c0.547,0,0.92,0.031,1.121,0.095c0.2,0.063,0.388,0.203,0.564,0.417
			V30.2c-0.352,0.127-0.723,0.191-1.114,0.191h-3.208v-2.022c0-0.947,0.098-1.567,0.293-1.86c0.371-0.615,1.021-0.923,1.948-0.923
			c0.567,0,1.109,0.171,1.626,0.513l2.256-2.461c-0.879-0.147-1.601-0.22-2.168-0.22c-1.142,0-2.126,0.122-2.951,0.366
			c-0.826,0.245-1.531,0.625-2.117,1.143c-0.625,0.537-1.072,1.108-1.34,1.714c-0.269,0.605-0.403,1.343-0.403,2.212v1.538
			l-1.582,2.095h1.582v9.389c0,0.684-0.025,1.194-0.073,1.531c-0.049,0.337-0.149,0.61-0.301,0.82
			c-0.151,0.21-0.427,0.467-0.827,0.769h5.405c-0.225-0.136-0.381-0.254-0.469-0.351c-0.088-0.098-0.234-0.313-0.439-0.645
			c-0.117-0.224-0.208-0.466-0.271-0.725c-0.064-0.259-0.108-0.617-0.132-1.077c-0.025-0.458-0.037-0.927-0.037-1.406v-8.305
			H134.154z M112.085,30.391h-2.036c0.41,0.312,0.691,0.571,0.842,0.776c0.152,0.205,0.249,0.454,0.293,0.747
			s0.066,0.826,0.066,1.597v8.364c0,0.762-0.022,1.292-0.066,1.59c-0.044,0.298-0.141,0.549-0.293,0.754
			c-0.151,0.205-0.432,0.464-0.842,0.776h5.244c-0.4-0.322-0.676-0.583-0.828-0.783c-0.151-0.2-0.251-0.462-0.3-0.784
			c-0.049-0.322-0.073-0.84-0.073-1.553v-6.387c0-0.8,0.141-1.401,0.425-1.801c0.312-0.43,0.732-0.767,1.26-1.011
			c0.527-0.244,1.108-0.366,1.743-0.366c0.654,0,1.272,0.124,1.853,0.373c0.581,0.249,1.023,0.574,1.325,0.974
			c0.244,0.293,0.42,0.687,0.528,1.18c0.107,0.493,0.161,1.159,0.161,1.999v5.039c0,0.684-0.025,1.192-0.073,1.524
			c-0.049,0.332-0.152,0.603-0.308,0.813s-0.439,0.471-0.85,0.783h5.288c-0.556-0.439-0.896-0.818-1.018-1.135
			c-0.122-0.317-0.183-0.979-0.183-1.985v-5.376c0-1.201-0.053-2.102-0.161-2.702c-0.107-0.601-0.303-1.126-0.586-1.575
			c-0.303-0.44-0.703-0.833-1.201-1.179c-0.498-0.347-1.072-0.613-1.721-0.799c-0.65-0.185-1.297-0.278-1.941-0.278
			c-0.938,0-1.758,0.183-2.461,0.549c-0.703,0.366-1.445,1.004-2.227,1.912V29.79C113.574,30.191,112.954,30.391,112.085,30.391
			 M103.181,43.069c-0.073,0.503-0.212,0.899-0.417,1.187c-0.206,0.288-0.504,0.534-0.894,0.739h6.006
			c-0.401-0.205-0.698-0.449-0.894-0.732c-0.195-0.283-0.329-0.679-0.403-1.187c-0.073-0.507-0.109-1.215-0.109-2.124V28.194
			c0-0.909,0.036-1.617,0.109-2.125c0.074-0.507,0.208-0.903,0.403-1.186c0.196-0.283,0.493-0.527,0.894-0.732h-6.006
			c0.39,0.205,0.688,0.451,0.894,0.739c0.205,0.288,0.344,0.684,0.417,1.187c0.073,0.503,0.11,1.208,0.11,2.117v12.758
			C103.291,41.861,103.254,42.566,103.181,43.069"/>
	</g>
</g>
</svg></a>
	    	</div>
	                        <!-- Add the extra clearfix for only the required viewport -->
            <div class="clearfix visible-xs-block"></div>
	    	<div class="col-sm-7">
	    	<div id="block-menu-menu-footer-top" class="block block-menu footer-top first odd" role="navigation">

      
  <ul class="menu"><li class="menu__item is-leaf first leaf"><a href="http://cert.arizona.edu/" title="" class="menu__link text-uppercase">UA Emergency Information</a></li>
<li class="menu__item is-leaf leaf"><a href="http://cert.arizona.edu/ualert" title="" class="menu__link text-uppercase">UAlert</a></li>
<li class="menu__item is-leaf leaf"><a href="http://www.arizona.edu/campus-accessibility" title="" class="menu__link text-uppercase">Campus Accessibility</a></li>
<li class="menu__item is-leaf leaf"><a href="/contact-us" title="" class="menu__link text-uppercase">Contact Us</a></li>
<li class="menu__item is-leaf last leaf"><a href="/website-feedback" title="" class="menu__link text-uppercase">Website Feedback</a></li>
</ul>
</div>
<div id="block-block-66" class="block block-block small-text last even">

      
  <p>VP for Information Strategy &amp; University Libraries | The University of Arizona<br />
	1077 N. Highland Avenue | Tucson, Arizona 85721</p>

</div>
            </div>
                <div class="col-xs-12">
            <hr>
        </div>
  </div>
</div>
  <div id="footer_sub" class="region region-footer-sub">
  	<div class="container">
        <div class="row">
    	    <div id="block-menu-menu-information-for-footer-menu" class="block block-menu col-md-4 first odd" role="navigation">

        <h2 class="block__title block-title">IT Information For</h2>
    
  <ul class="menu"><li class="menu__item is-leaf first leaf"><a href="/getting-started/students" title="" class="menu__link text-uppercase">Students</a></li>
<li class="menu__item is-leaf leaf"><a href="/getting-started/faculty" title="" class="menu__link text-uppercase">Faculty</a></li>
<li class="menu__item is-leaf leaf"><a href="/getting-started/staff" title="" class="menu__link text-uppercase">Staff</a></li>
<li class="menu__item is-leaf leaf"><a href="/getting-started-it-professionals" title="" class="menu__link text-uppercase">IT Professionals</a></li>
<li class="menu__item is-leaf last leaf"><a href="/getting-started/campus-visitors" title="" class="menu__link text-uppercase">Campus Visitors</a></li>
</ul>
</div>
<div id="block-menu-menu-resources" class="block block-menu col-md-4 even" role="navigation">

        <h2 class="block__title block-title">Resources</h2>
    
  <ul class="menu"><li class="menu__item is-leaf first leaf"><a href="/services" title="" class="menu__link text-uppercase">A-Z IT Servces</a></li>
<li class="menu__item is-leaf leaf"><a href="http://map.arizona.edu/" title="" class="menu__link text-uppercase">UA Campus Map</a></li>
<li class="menu__item is-leaf last leaf"><a href="http://directory.arizona.edu/phonebook" title="" class="menu__link text-uppercase">UA Phonebook</a></li>
</ul>
</div>
<div id="block-menu-menu-topics" class="block block-menu col-md-4 odd" role="navigation">

        <h2 class="block__title block-title">Topics</h2>
    
  <ul class="menu"><li class="menu__item is-leaf first leaf"><a href="/it/about" title="" class="menu__link text-uppercase">About UA IT</a></li>
<li class="menu__item is-leaf leaf"><a href="/it/vp-it" title="" class="menu__link text-uppercase">VP, Information Strategy &amp; University Libraries</a></li>
<li class="menu__item is-leaf leaf"><a href="/it/people" title="" class="menu__link text-uppercase">People</a></li>
<li class="menu__item is-leaf leaf"><a href="/it/jobs" title="" class="menu__link text-uppercase">UA IT Jobs</a></li>
<li class="menu__item is-leaf leaf"><a href="/it/news" title="" class="menu__link text-uppercase">News</a></li>
<li class="menu__item is-leaf leaf"><a href="/security" title="" class="menu__link text-uppercase">Information Security</a></li>
<li class="menu__item is-leaf last leaf"><a href="/research" title="" class="menu__link text-uppercase">Research</a></li>
</ul>
</div>
<div id="block-block-121" class="block block-block last even">

      
  <div style="text-align:center;">Copyright © 2018 Arizona Board of Regents.</div>
</div>
        </div>
  	</div>
</div>
</footer>

  <div class="region region-bottom">
    <div id="block-block-71" class="block block-block first last odd">

      
  <a href="/website-feedback" target="_self">
      <img alt="Feedback Button" src="/sites/all/themes/ua_zen_it/images/feedbackBttnlg.jpg" height="100" width="35">
</a>
</div>
  </div>
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script>jQuery(document).ready(function(){
jQuery(".ui-accordion").accordion({ 
        event: "click",
        active: false,
        collapsible: true,
        autoHeight: false
 });
});</script>
<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"dcf52c953c","applicationID":"137231124","transactionName":"b1xbNkFRVkJVU0RaXlYWbBBaHxdYWlRVSx9IUUk=","queueTime":0,"applicationTime":33,"atts":"QxtYQAlLRUw=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>
