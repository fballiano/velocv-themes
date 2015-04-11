require(["//code.jquery.com/jquery-1.11.2.min.js"], function () {
	require(["//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"], function () {
		$("body").show().wrapInner("<div class='container'></div>");
		$("h1").addClass("page-header");
		$("nav#profileSections").remove();
		$("#about").addClass("panel-body");
		
		$("#skills ul").addClass("list-inline");
		$("#phoneNumbers ul, #twitterAccounts ul, #memberUrlResources ul, #imAccounts ul").addClass("list-unstyled removebottommargin");
		$("#phoneNumbers li").prepend("<i class='fa fa-phone fa-2'></i>&nbsp;");
		$("#twitterAccounts li").prepend("<i class='fa fa-twitter fa-2'></i>&nbsp;");
		$("#memberUrlResources li").prepend("<i class='fa fa-link fa-2'></i>&nbsp;");
		$("#publicProfileUrl").wrap("<div id='publicProfileUrlParent'></div>");
		$("#publicProfileUrlParent").prepend("<i class='fa fa-linkedin fa-2'></i>&nbsp;");
		$("#imAccounts li.imAccounts-gtalk").prepend("<i class='fa fa-google fa-2'></i>&nbsp;");
		$("#imAccounts li.imAccounts-skype").prepend("<i class='fa fa-skype fa-2'></i>&nbsp;");
		$("#imAccounts li:not(:has('i'))").prepend("<i class='fa fa-comments-o fa-2'></i>&nbsp;");
		$("#emailAddress").prepend("<i class='fa fa-envelope fa-2'></i>&nbsp;");
		$("#location").prepend("<i class='fa fa-globe fa-2'></i>&nbsp;");
		$("#mainAddress").prepend("<i class='fa fa-globe fa-2'></i>&nbsp;");
		$("#industry").remove();
		
		$(".dates div").addClass("pull-left");
		$(".dates").addClass("clearfix");
		$(".dates .endDate").each(function () {
			if ($(this).prev().text()) {
				$(this).prepend("&nbsp;-&nbsp;");
			}
		});
		
		$("section").each(function () {
			$(this).replaceWith('<dl id="'+$(this).attr("id")+'" class="dl-horizontal"><dt><h3>'+$(this).children("h3").text()+'</h3></dt><dd>'+$(this).html()+'</dd></dl>');
		});
		$("dl>dd>h3").remove();
		$("dl>dd>ul").addClass('list-unstyled');
		$(".recommender").prepend("- ");
		$("h2").after($("#about"));
		
		if ($("#picture").length && $("#summary").length) {
			$("#picture").addClass("img-thumbnail img-responsive hidden-xs");
			$("#summary").prepend($("#picture"));
		}
		
		$("footer").addClass("text-center");
		$("#designer")
			.attr("href", "http://fabrizioballiano.com")
			.text("Fabrizio Balliano");
		
		if ($("nav#profileLanguages").length) {
			var selected_language = $("nav#profileLanguages li.active").text();
			$("nav#profileLanguages li.active").remove();
			$("h1").append('<div class="btn-group pull-right" id="profileLanguagesSelector"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">' +  selected_language + ' <span class="caret"></span></button><ul class="dropdown-menu" role="menu"></ul></div>');
			$("#profileLanguagesSelector ul").append($("nav#profileLanguages li"));
			$("nav#profileLanguages").remove();
		}
	});
});
