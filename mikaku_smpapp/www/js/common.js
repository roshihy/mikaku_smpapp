// -*- coding: utf-8 -*-

/* jQueryMobileの初期化 */
$(document).on("mobileinit", function(){
	$.mobile.page.prototype.options.addBackBtn = true;
    $.mobile.page.prototype.options.backBtnText = "戻る";
    $.mobile.loadingMessage = "読み込み中..";
    $.mobile.pageLoadErrorMessage = "読み込みに失敗しました";
});

/* GoogleMapsの差し込み処理 */
$(document).on('pageinit', '#access', function(e){
	//GoogleMapsの追加
	var addJs = {
			map: {
				type: "text/javascript",
				src: "js/map.js",
			}
	}
	for(var i in addJs){
	    var js = document.createElement("script");
	    js.setAttribute("type", addJs[i].type);
	    js.setAttribute("src", addJs[i].src);
	    document.getElementsByTagName("head")[0].appendChild(js);
	}
});


/* ツイートの差し込み処理 */
$(document).on('pagebeforecreate', '#home', function(e){
	var self = this;
	//tweetの追加
	$.ajax({
		url: "http://search.twitter.com/search.json?q=from:Mikaku_mayuge&rpp=10&lang=ja",
		dataType: "jsonp",
		async: false,
		success: function(json){
			var tweets = json.results;
			$("#tweet_area").html("");
			for(var x in tweets){
				$("#tweet_area").append($('<p />', { text: tweets[x].text}));
			}
		}
	});
});

/* 共通フッターの差し込み処理 */
$(document).on('pagebeforecreate', 'div[data-role=page]', function(e){
	var self = this;
	$.ajax({
		url: "footer.html",
		dataType: "html",
		cache: true,
		async: false,
		success: function(d){
			$("#footer_area", self).html("");
			$("#footer_area", self).append(d);
		}
	});
});