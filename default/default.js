require(["//code.jquery.com/jquery-1.11.2.min.js"], function () {
	require(["//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"], function () {
		$("body").show().wrapInner("<div class='container'><div class='row'><div class='col-md-9'></div></div></div>");
		$("h1").addClass("page-header");
		$("body>.container>.row").prepend("<div class='col-md-3 hidden-xs hidden-sm'></div>");
		$("body>.container>.row>.col-md-3").append($("nav"));
		$("nav#profileSections").prepend($("#picture"));
		$("nav#profileSections ul").addClass("nav nav-pills nav-stacked");

		/*
		$("#skills ul").addClass("list-unstyled");
		$("#skills li").addClass("pull-left");
		$("#skills li:not(:last)").append(",&nbsp;");
		$("#skills li:last").append(".");
		*/

		$("#work>ul, #honorsAwards>ul, #education>ul, #publications>ul, #certifications>ul, #recommendationsReceived>ul").addClass("list-group");
		$("#work>ul>li, #honorsAwards>ul>li, #education>ul>li, #publications>ul>li, #certifications>ul>li, #recommendationsReceived>ul>li").addClass("list-group-item");

        $("#languages ul").addClass("list-unstyled");
        $("#languages .fluency").addClass("progress-bar").attr("aria-valuemin", "0").attr("aria-valuemax", "5");
        $("#languages .fluency").wrap("<div class='progress'></div>");
        $("#languages .fluency-1").css("width", "20%");
        $("#languages .fluency-2").css("width", "40%");
        $("#languages .fluency-3").css("width", "60%");
        $("#languages .fluency-4").css("width", "80%");
        $("#languages .fluency-5").css("width", "100%");

		/*
		$(".recommender").addClass("text-right").css("font-style", "italic");
		$("#picture").addClass("img-circle").wrap("<a href='#'></a>");

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

		$("section>div, section>ul").addClass("panel-body");
		$("section").addClass("panel panel-primary").prepend("<div class='panel-heading'></div>");
		$("section").each(function () {
			$(this).find(".panel-heading").append($(this).find("h3"));
		});

		$("#summary").addClass("panel panel-info").wrapInner("<div class='panel-body bg-info'></div>");
		$("section:first").before("<div class='panel panel-primary' id='allcontacts'><div class='panel-body'></div></div>");
		$("#allcontacts .panel-body").append("<div id='container'><div class='row'><div class='col-sm-6 leftcol'></div><div class='col-sm-6 rightcol'></div></div></div>")
		$("#allcontacts .leftcol").append($("#emailAddress,#location,#mainAddress,#phoneNumbers,#imAccounts"));
		$("#allcontacts .rightcol").append($("#memberUrlResources,#twitterAccounts,#publicProfileUrlParent"));

		$(".dates div").addClass("pull-left");
		$(".dates").addClass("clearfix");
		$(".dates .endDate").each(function () {
			if ($(this).prev().text()) {
				$(this).prepend("&nbsp;-&nbsp;");
			}
		});
		*/

		$("#designer")
			.attr("href", "http://velocv.com")
			.text("VeloCV");

		if ($("nav#profileLanguages").length) {
			var selected_language = $("nav#profileLanguages li.active").text();
			$("nav#profileLanguages li.active").remove();
			$("h1").append('<div class="btn-group pull-right" id="profileLanguagesSelector"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">' +  selected_language + ' <span class="caret"></span></button><ul class="dropdown-menu" role="menu"></ul></div>');
			$("#profileLanguagesSelector ul").append($("nav#profileLanguages li"));
			$("nav#profileLanguages").remove();
		}

		$("nav#profileSections").affix();
		$('body').scrollspy({target:'nav'});
	});
});
