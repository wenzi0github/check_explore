//检测正在使用的浏览器和浏览器版本
//《JavaScript高级程序设计（第3版）》P228
var client = (function(){
	//呈现引擎
	var engine = {
		ie:0,
		gecko:0,
		webkit:0,
		khtml:0,
		opera:0,
		
		
		//版本号
		ver:null
	};
	
	//浏览器
	var browser = {
		ie:0,
		firefox:0,
		safari:0,
		konq:0,
		opera:0,
		chrome:0,

		//版本号
		ver:null
	};
	
	//操作系统
	var system = {
		win:false,
		mac:false,
		x11:false,
		
		//移动设备
		iphone:false,
		ipod:false,
		ipad:false,
		ios:false,
		android:false,
		nokiaN:false,
		winMobile:false
	};
	
	//检测呈现引擎和版本
	var ua = navigator.userAgent;
	if(window.opera){
		engine.ver    = browser.ver   = window.opera.version();
		engine.operae = browser.opera = parseFloat(engine.ver);
	}else if(/AppleWebKit\/(\S+)/.test(ua)){
		engine.ver    = RegExp["$1"];
		engine.webkit = parseFloat(engine.ver);
		
		//确定是chrome还是safari
		if(/Chrome\/(\S+)/.test(ua)){
			browser.ver = RegExp["$1"];
			browser.chrome = parseFloat(browser.ver);
		}else if(/Version\/(\S+)/.test(ua)){
			browser.ver = RegExp["$1"];
			browser.safari = parseFloat(browser.ver);
		}else{
			var safariVersion = 1;
			if(engine.webkit < 100){
				safariVersion = 1;
			}else if(engine.webkit < 312){
				safariVersion = 1.2;
			}else if(engine.webkit < 412){
				safariVersion = 1.3;
			}else {
				safariVersion = 2;
			}
			
			browser.safari = browser.ver = safariVersion;
		}
	}else if(/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
		engine.ver   = browser.ver = RegExp["$1"];
		engine.khtml = browser.konq = parseFloat(engine.ver);
	}else if(/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
		engine.ver   = RegExp["$1"];
		engine.gecko = parseFloat(engine.ver);
		
		//确定是否firefox
		if(/Firefox\/(\S+)/.test(ua)) {
			browser.ver = RegExp["$1"];
			browser.firefox = parseFloat(browser.ver);
		}
	}else if(/MSIE ([^;]+)/.test(ua)){
		engine.ver = browser.ver = RegExp["$1"];
		engine.ie  = browser.ie = parseFloat(engine.ver);
	}
	
	//检测操作系统
	var p = navigator.platform;
	system.win = p.indexOf("Win") == 0;
	system.mac = p.indexOf("Mac") == 0;
	system.x11 = (p.indexOf("X11")==0) || (p.indexOf("Linux")==0);
	
	//检测移动设备
	system.iphone = ua.indexOf("iPhone") > -1;
	system.ipod   = ua.indexOf("iPod") > -1;
	system.ipad   = ua.indexOf("iPad") > -1;
	system.nokiaN = ua.indexOf("nokiaN") > -1;
	if(system.win == "CE"){
		system.winMobile = system.win;
	}else if(system.win == "Ph"){
		if(/Window Phone OS (\d+.\d+)/.test(ua)){
			system.win = "Phone";
			system.winMobile = parseFloat(RegExp["$1"]);
		}
	}
	if(system.mac && ua.indexOf("Mobile")>-1){
		if(/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)){
			system.ios = parseFloat(RegExp.$1.replace("_", "."));
		}else{
			system.ios = 2;
		}
	}
	if(/Android (\d+\.\d+)/.test(ua)){
		system.android = parseFloat(RegExp.$1);
	}
	
	return {
		engine:engine,
		browser:browser,
		system:system
	};
})();

/*
使用例子
if(client.engine.ie){
	//如果是IE浏览器
	
}else if(clieng.engine.gecko > 1.5){
	if(client.engine.gecko == "1.8.1"){
		//针对该版本执行某些操作
	}
}
*/
