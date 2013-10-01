var App=App||{};App.Model=App.Model||{},App.Collection=App.Collection||{},App.View=App.View||{},App.Router=App.Router||{},App.views=App.views||{},App.models=App.models||{},App.collections=App.collections||{},App.routers=App.routers||{},this.App=this.App||{},this.App.Templates=this.App.Templates||{},this.App.Templates.cloudcall=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+=' <div class="content_view">\n  <div class="container">\n    <h1>',(f=c.header)?f=f.call(b,{hash:{},data:e}):(f=b.header,f=typeof f===h?f.apply(b):f),g+=i(f)+"</h1>\n    <p>",(f=c.text)?f=f.call(b,{hash:{},data:e}):(f=b.text,f=typeof f===h?f.apply(b):f),g+=i(f)+'</p>\n    <p><a class="btn btn-primary btn-lg cloud-action"><i class="icon-external-link-sign"></i> ',(f=c.buttonText)?f=f.call(b,{hash:{},data:e}):(f=b.buttonText,f=typeof f===h?f.apply(b):f),g+=i(f)+'</a></p>\n    <p class="response_content alert">\n    </p>\n  </div>\n</div>'}),this.App.Templates.databrowser=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+=' <div class="content_view">\n  <div class="container">\n    <h1>',(f=c.header)?f=f.call(b,{hash:{},data:e}):(f=b.header,f=typeof f===h?f.apply(b):f),g+=i(f)+"</h1>\n    <p>",(f=c.text)?f=f.call(b,{hash:{},data:e}):(f=b.text,f=typeof f===h?f.apply(b):f),g+=i(f)+'</p>\n    <form>\n      <div class="form-group">\n        <label class="sr-only" for="nameField">',(f=c.inputFieldLabel)?f=f.call(b,{hash:{},data:e}):(f=b.inputFieldLabel,f=typeof f===h?f.apply(b):f),g+=i(f)+'</label>\n        <input type="text" class="form-control" id="nameField" placeholder="',(f=c.inputFieldLabel)?f=f.call(b,{hash:{},data:e}):(f=b.inputFieldLabel,f=typeof f===h?f.apply(b):f),g+=i(f)+'">\n      </div>\n    </form>\n    <p class="alert alert-danger hidden"></p>\n    <p><a class="btn btn-primary btn-lg save-data"><i class="icon-save"></i> ',(f=c.buttonText)?f=f.call(b,{hash:{},data:e}):(f=b.buttonText,f=typeof f===h?f.apply(b):f),g+=i(f)+'</a></p>\n    <p class="response_content alert">\n    </p>\n  </div>\n</div>'}),this.App.Templates.integration=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+=' <div class="content_view">\n  <div class="container">\n    <h1>',(f=c.header)?f=f.call(b,{hash:{},data:e}):(f=b.header,f=typeof f===h?f.apply(b):f),g+=i(f)+"</h1>\n    <p>",(f=c.text)?f=f.call(b,{hash:{},data:e}):(f=b.text,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n  </div>\n</div>"}),this.App.Templates.intro=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+='\n    <div class="col-xs-6 col-sm-4 ',(d=c.responsiveClass)?d=d.call(a,{hash:{},data:b}):(d=a.responsiveClass,d=typeof d===i?d.apply(a):d),e+=j(d)+'">\n    <div class="container start-menu-item ',(d=c.className)?d=d.call(a,{hash:{},data:b}):(d=a.className,d=typeof d===i?d.apply(a):d),e+=j(d)+'">\n      <a class="btn start-menu-item-icon">\n        <i class="icon-',(d=c.iconClass)?d=d.call(a,{hash:{},data:b}):(d=a.iconClass,d=typeof d===i?d.apply(a):d),e+=j(d)+' icon-2x"></i>\n      </a>\n      <h5>',(d=c.menuTitle)?d=d.call(a,{hash:{},data:b}):(d=a.menuTitle,d=typeof d===i?d.apply(a):d),e+=j(d)+"</h5>\n      <h6>",(d=c.menuSubTitle)?d=d.call(a,{hash:{},data:b}):(d=a.menuSubTitle,d=typeof d===i?d.apply(a):d),e+=j(d)+"</h6>\n    </div>\n  </div>\n  "}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return h+='<div class="banner well center text-center">\n<h1>',(g=c.header)?g=g.call(b,{hash:{},data:e}):(g=b.header,g=typeof g===i?g.apply(b):g),h+=j(g)+"</h1>\n<p>",(g=c.text)?g=g.call(b,{hash:{},data:e}):(g=b.text,g=typeof g===i?g.apply(b):g),h+=j(g)+'</p>\n</div>\n<div class="row">\n  ',g=c.each.call(b,b.menuItems,{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+="\n</div>\n\n\n\n"}),this.App.Templates.navbar=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return e+='style="width: ',(d=c.titleWidth)?d=d.call(a,{hash:{},data:b}):(d=a.titleWidth,d=typeof d===i?d.apply(a):d),e+=j(d)+'px"'}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var g,h="",i="function",j=this.escapeExpression,k=this;return h+='<nav class="navbar navbar-default" role="navigation">\n<div class="nav pull-left">\n  <a class="btn back"><i class="icon-chevron-left icon-2x"></i></a>\n</div>\n<div class="navbar-title" ',g=c["if"].call(b,b.titleWidth,{hash:{},inverse:k.noop,fn:k.program(1,f,e),data:e}),(g||0===g)&&(h+=g),h+='>\n<div class="nav navbar-text">',(g=c.title)?g=g.call(b,{hash:{},data:e}):(g=b.title,g=typeof g===i?g.apply(b):g),h+=j(g)+"</div>\n</div>\n</nav>"}),this.App.Templates.node=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+=' <div class="content_view">\n  <div class="container">\n    <h1>',(f=c.header)?f=f.call(b,{hash:{},data:e}):(f=b.header,f=typeof f===h?f.apply(b):f),g+=i(f)+"</h1>\n    <p>",(f=c.text)?f=f.call(b,{hash:{},data:e}):(f=b.text,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n  </div>\n</div>"}),this.App.Templates.stats=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+=' <div class="content_view">\n  <div class="container">\n    <h1>',(f=c.header)?f=f.call(b,{hash:{},data:e}):(f=b.header,f=typeof f===h?f.apply(b):f),g+=i(f)+"</h1>\n    <p>",(f=c.text)?f=f.call(b,{hash:{},data:e}):(f=b.text,f=typeof f===h?f.apply(b):f),g+=i(f)+"</p>\n  </div>\n</div>"}),this.App.Templates["weather-data"]=Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,h="";return h+='\n    <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 ',f={hash:{},inverse:j.noop,fn:j.program(2,g,b),data:b},d=c.visibleClass||a.visibleClass,e=d?d.call(a,(d=b,null==d||d===!1?d:d.index),f):k.call(a,"visibleClass",(d=b,null==d||d===!1?d:d.index),f),(e||0===e)&&(h+=e),h+='">\n      <div class="container">\n        <img src="',(e=c.icon)?e=e.call(a,{hash:{},data:b}):(e=a.icon,e=typeof e===l?e.apply(a):e),h+=m(e)+'" class="img-circle" />\n        <p>',(e=c.date)?e=e.call(a,{hash:{},data:b}):(e=a.date,e=typeof e===l?e.apply(a):e),h+=m(e)+"</p>\n        <p>",(e=c.low)?e=e.call(a,{hash:{},data:b}):(e=a.low,e=typeof e===l?e.apply(a):e),h+=m(e)+" - ",(e=c.high)?e=e.call(a,{hash:{},data:b}):(e=a.high,e=typeof e===l?e.apply(a):e),h+=m(e)+" (&deg;C)</p>\n        <p>",(e=c.desc)?e=e.call(a,{hash:{},data:b}):(e=a.desc,e=typeof e===l?e.apply(a):e),h+=m(e)+"</p>\n      </div>\n    </div>\n  "}function g(){var a="";return a}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var h,i="",j=this,k=c.helperMissing,l="function",m=this.escapeExpression;return i+='<div class="row weather-info">\n  ',h=c.each.call(b,b.data,{hash:{},inverse:j.noop,fn:j.program(1,f,e),data:e}),(h||0===h)&&(i+=h),i+="\n</div>"}),this.App.Templates.weather=Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var f,g="",h="function",i=this.escapeExpression;return g+=' <div class="content_view weather_page">\n  <div class="container">\n    <h1>',(f=c.header)?f=f.call(b,{hash:{},data:e}):(f=b.header,f=typeof f===h?f.apply(b):f),g+=i(f)+"</h1>\n    <p>",(f=c.geoText)?f=f.call(b,{hash:{},data:e}):(f=b.geoText,f=typeof f===h?f.apply(b):f),g+=i(f)+'</p>\n    <p><a class="btn btn-primary btn-lg get-geo-btn"><i class="icon-location-arrow"></i> ',(f=c.geoButtonText)?f=f.call(b,{hash:{},data:e}):(f=b.geoButtonText,f=typeof f===h?f.apply(b):f),g+=i(f)+'</a></p>\n    <form>\n      <div class="form-group">\n        <label class="sr-only" for="locationField">',(f=c.geoLabelText)?f=f.call(b,{hash:{},data:e}):(f=b.geoLabelText,f=typeof f===h?f.apply(b):f),g+=i(f)+'</label>\n        <input type="text" class="form-control" id="locationField" placeholder="',(f=c.geoLabelText)?f=f.call(b,{hash:{},data:e}):(f=b.geoLabelText,f=typeof f===h?f.apply(b):f),g+=i(f)+'">\n      </div>\n    </form>\n    <div class="hidden">\n      <p class="get-weather-text">\n        ',(f=c.getWeatherText)?f=f.call(b,{hash:{},data:e}):(f=b.getWeatherText,f=typeof f===h?f.apply(b):f),g+=i(f)+'\n      </p>\n      <p><a class="btn btn-primary btn-lg get-weather-btn"><i class="icon-globe"></i> ',(f=c.getWeatherButtonText)?f=f.call(b,{hash:{},data:e}):(f=b.getWeatherButtonText,f=typeof f===h?f.apply(b):f),g+=i(f)+'</a></p>\n    </div>\n    <p class="response_content"></p>\n  </div>\n</div>'}),App.Router.MainRoute=Backbone.Router.extend({routes:{"":"mainPage",main:"mainPage"},mainPage:function(){var a=new App.View.MainView;a.render()}}),App.Model.PageModel=Backbone.Model.extend({}),App.models.introPage=new App.Model.PageModel({title:"Welcome",header:"Welcome To FeedHenry",text:"Learn more about our platform and interact with it below.",nextButtonText:"Let's Start",menuItems:[{className:"cloud-action",imgPath:"/img/touch/apple-touch-icon.png",menuTitle:"Cloud Action",menuSubTitle:"Try our live Cloud code",responsiveClass:"col-md-3 col-lg-2",iconClass:"cloud"},{className:"data-browser",imgPath:"/img/touch/apple-touch-icon.png",menuTitle:"Data Browser",menuSubTitle:"Use MongoDB",responsiveClass:"col-md-3 col-lg-2",iconClass:"table"},{className:"nodejs-page",imgPath:"/img/touch/apple-touch-icon.png",menuTitle:"Powered By Nodejs",menuSubTitle:"Create Cloud code",responsiveClass:"col-md-3 col-lg-2",iconClass:"bolt"},{className:"cloud-integration",imgPath:"/img/touch/apple-touch-icon.png",menuTitle:"Cloud Integration",menuSubTitle:"Connect to other services",responsiveClass:"col-md-3 col-lg-2",iconClass:"gears"},{className:"weather-sample",imgPath:"/img/touch/apple-touch-icon.png",menuTitle:"Example",menuSubTitle:"Use Location and Weather",responsiveClass:"col-md-2 col-md-offset-2 col-lg-2 col-lg-offset-0",iconClass:"sun"},{className:"stats-analytics",imgPath:"/img/touch/apple-touch-icon.png",menuTitle:"Analytics Engine",menuSubTitle:"Instrument your App",responsiveClass:"col-md-2 col-md-offset-4 col-lg-2 col-lg-offset-0",iconClass:"bar-chart"}]}),App.models.cloudcallPage=new App.Model.PageModel({title:"Cloud Action",header:"Cloud Action",text:"We have connected the client code to the matching cloud code. Press the button to see the response from cloud.",buttonText:"Call Cloud"}),App.models.statsPage=new App.Model.PageModel({title:"Analytics",header:"Analytics",text:"Go to the Stats section of the Studio and see if your device has been detected"}),App.models.nodePage=new App.Model.PageModel({title:"Powered By Nodejs",header:"Powered By Nodejs",text:"FeedHenry Apps are made much more powerful by our Node.js cloud code. You have all of the functionality of Node available to you including all of its modules",titleWidth:"150"}),App.models.databrowserPage=new App.Model.PageModel({title:"Data Browser",header:"Data Browser",text:"Enter your name and now tap this button to save your name in the Cloud.",moreInfo:"Go to the Data Browser in the Studio and see if you can find your name stored there.",inputFieldLabel:"Please Enter Your Name",buttonText:"Save"}),App.models.weatherPage=new App.Model.PageModel({title:"Weather Info Sample",header:"Weather Info Sample",geoText:"Now let’s grab your location and do something with it. Press here to find your location",geoButtonText:"Get My Location",geoLabelText:"My Location",getWeatherText:"Now we are going to use that location to request weather information from an online web-service via our Cloud Code. Tap the button to do this.",getWeatherButtonText:"Get My Weather Info",titleWidth:"180"}),App.models.integrationPage=new App.Model.PageModel({title:"Cloud Integration",header:"Cloud Integration",titleWidth:"150",text:"Easily integration with you existing backends using Cloud Plugins"}),App.View.NavbarView=Backbone.View.extend({template:App.Templates.navbar,initialize:function(a){this.model=new Backbone.Model({title:a.title,titleWidth:a.titleWidth}),this.listenTo(this.model,"change:title",this.render),_.bindAll(this,"setTitle")},render:function(){return this.$el=this.template(this.model.toJSON()),this.$el},setTitle:function(a){this.model.set("title",a)}}),App.View.IntroView=Backbone.View.extend({template:App.Templates.intro,model:App.models.introPage,render:function(){return this.$el.html(this.template(this.model.toJSON())),this.$el}}),App.View.BaseView=Backbone.View.extend({className:"page_view",render:function(){return this.navbar=new App.View.NavbarView({title:this.model.get("title"),titleWidth:this.model.get("titleWidth")}),this.$el.append(this.navbar.render()),this.$el.append(this.template(this.model.toJSON())),this.$el},dataError:function(a){this.$el.find(".response_content").removeClass("alert-success").addClass("alert").addClass("alert-danger").html("Ops, something went wrong ("+a+"). Please try again later.")},dataReset:function(){this.$el.find(".response_content").removeClass("alert-success").removeClass("alert").removeClass("alert-danger").html("")}}),App.View.MainView=Backbone.View.extend({events:function(){var a="click",b={};return b[a+" .cloud-action"]="cloudActionPage",b[a+" .data-browser"]="dataBrowserPage",b[a+" .nodejs-page"]="nodePage",b[a+" .cloud-integration"]="cloudIntegrationPage",b[a+" .weather-sample"]="weatherPage",b[a+" .stats-analytics"]="analyticsPage",b[a+" .btn.back"]="backToIntro",b},initialize:function(){this.$el=$("body"),this.mainViewContainer=$("#main_page"),this.pageViewContainer=$("#page_view_container"),_.bindAll(this,"cloudActionPage","dataBrowserPage","nodePage","cloudIntegrationPage","weatherPage","analyticsPage","backToIntro")},render:function(){var a=new App.View.IntroView;this.introView=a.render(),this.mainViewContainer.html(this.introView)},cloudActionPage:function(){if(!this.cloudCallView){var a=new App.View.CloudcallView;this.cloudCallView=a.render()}this.showPage(this.cloudCallView)},dataBrowserPage:function(){if(!this.databrowserView){var a=new App.View.DatabrowserView;this.databrowserView=a.render()}this.showPage(this.databrowserView)},nodePage:function(){if(!this.nodeView){var a=new App.View.NodeView;this.nodeView=a.render()}this.showPage(this.nodeView)},cloudIntegrationPage:function(){if(!this.integrationView){var a=new App.View.IntegrationView;this.integrationView=a.render()}this.showPage(this.integrationView)},weatherPage:function(){if(!this.weatherView){var a=new App.View.WeatherSampleView;this.weatherView=a.render()}this.showPage(this.weatherView)},analyticsPage:function(){if(!this.statsView){var a=new App.View.StatsView;this.statsView=a.render()}this.showPage(this.statsView)},showPage:function(a){this.pageViewContainer.html(a),this.doTransition(this.mainViewContainer,this.pageViewContainer,"slide-from-right","slide-to-left")},backToIntro:function(){this.doTransition(this.pageViewContainer,this.mainViewContainer,"slide-from-left","slide-to-right")},doTransition:function(a,b,c,d){b.addClass("effeckt-page-animating effeckt-page-active"),a.addClass("effeckt-page-active effeckt-page-animating"),a.addClass(d),b.addClass(c);var e=!1,f=!1,g=function(){a.removeClass("effeckt-page-animating effeckt-page-active "+d),b.removeClass("effeckt-page-animating "+c)};b.on(Effeckt.transitionAnimationEndEvent,function(){b.off(Effeckt.transitionAnimationEndEvent),e=!0,f&&g()}),a.on(Effeckt.transitionAnimationEndEvent,function(){a.off(Effeckt.transitionAnimationEndEvent),f=!0,e&&g()})}}),App.View.CloudcallView=App.View.BaseView.extend({template:App.Templates.cloudcall,model:App.models.cloudcallPage,events:{"click .cloud-action":"cloudCall"},initialize:function(){_.bindAll(this,"gotData","dataError")},cloudCall:function(){var a=this;$fh.act({act:"hello",req:{}},function(b){a.gotData(b)},function(b,c){a.dataError(b,c)})},gotData:function(a){this.$el.find(".hidden").removeClass("hidden"),this.$el.find(".response_content").removeClass("alert-error").addClass("alert-success").html("Response: "+a.text)}}),App.View.StatsView=App.View.BaseView.extend({template:App.Templates.stats,model:App.models.statsPage}),App.View.NodeView=App.View.BaseView.extend({template:App.Templates.node,model:App.models.nodePage}),App.View.DatabrowserView=App.View.BaseView.extend({template:App.Templates.databrowser,model:App.models.databrowserPage,events:{"click .save-data":"saveData"},initialize:function(){_.bindAll(this,"dataSaved")},saveData:function(){var a=this.$el.find("#nameField"),b=a.val(),c=this;b&&null!==b&&""!==b?(this.hideError(),$fh.act({act:"saveData",req:{collection:"Users",document:{username:b}}},function(a){a&&"ok"===a.status?c.dataSaved():c.dataError("Server error")},function(a){c.dataError(a)})):this.showError()},showError:function(){this.$el.find(".alert.hidden").removeClass("hidden").text("Please enter a name")},hideError:function(){this.$el.find(".alert").addClass("hidden").empty()},dataSaved:function(){this.$el.find(".response_content").addClass("alert-success").removeClass("alert-danger hidden").text(this.model.toJSON().moreInfo)}}),App.View.WeatherSampleView=App.View.BaseView.extend({template:App.Templates.weather,model:App.models.weatherPage,events:{"click .get-geo-btn":"getLocation","click .get-weather-btn":"getWeatherData"},initialize:function(){_.bindAll(this,"getLocation","gotLocation","getWeatherData","gotWeatherData")},getLocation:function(){var a=this;a.dataReset(),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(b){a.gotLocation(b)},function(b){a.dataError("Failed to get location : "+b.message)},{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},gotLocation:function(a){this.coords=a.coords,this.$el.find("#locationField").val("lat = "+this.coords.latitude+"; lon = "+this.coords.longitude),this.$el.find(".hidden").removeClass("hidden")},getWeatherData:function(){var a=this;a.dataReset();var b=this.coords.latitude,c=this.coords.longitude;$fh.act({act:"getWeather",req:{lat:b,lon:c}},function(b){a.gotWeatherData(b)},function(b){a.dataError(b)})},gotWeatherData:function(a){this.$el.find(".response_content").removeClass("alert-error").removeClass("alert").html(App.Templates["weather-data"](a))}}),App.View.IntegrationView=App.View.BaseView.extend({template:App.Templates.integration,model:App.models.integrationPage});var initialize=function(){MBP.preventZoom(),MBP.enableActive(),App.routers.mainRoute=new App.Router.MainRoute,Backbone.history.start({pushState:!0,root:document.location.pathname})};window.device&&window.device.cordova?document.addEventListener("deviceready",initialize,!1):$(initialize),Handlebars.registerHelper("visibleClass",function(a){var b=[];return a>=2&&b.push("hidden-xs"),a>=3&&b.push("hidden-sm"),a>=4&&b.push("hidden-md"),b.join(" ")});