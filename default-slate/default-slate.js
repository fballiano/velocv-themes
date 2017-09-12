require(["//code.jquery.com/jquery-1.11.2.min.js"], function () {
    require(["//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"], function () {
        $("body").show().wrapInner("<div class='container'><div class='row'><div class='col-md-9'></div></div></div>");
        $("h1").addClass("page-header");
        $("body>.container>.row").prepend("<div class='col-md-3 hidden-xs hidden-sm'></div>");
        $("body>.container>.row>.col-md-3").append($("nav"));
        $("nav#profileSections").prepend($("#picture"));
        $("nav#profileSections ul").addClass("nav nav-pills nav-stacked");
        $("#picture").addClass("img-circle").wrap("<a href='#'></a>");

        $("#summary").addClass("panel panel-info").wrapInner("<div class='panel-body bg-info'></div>");

        $("ul.highlights,ul.keywords,ul.courses").addClass("list-inline");
        $("ul.highlights li,ul.keywords li,ul.courses li").addClass("badge");
        $("ul.highlights").prepend("<li style='padding-right: 0'><i class='fa fa-tags'></i></li>");
        $("ul.courses").prepend("<li style='padding-right: 0'><i class='fa fa-graduation-cap'></i></li>");

        if ($("#location").length) {
            var location2 = $("<ul id='location' class='list-unstyled'></ul>");
            $("#location div").each(function () {
                location2.append("<li id='" + this.id + "'>" + $(this).html() + "</li>");
            });
            $("#location").after(location2).remove();
            $("#location li").prepend("<i class='fa fa-globe'></i>&nbsp;");
            $("#location li i:not(:first)").css("visibility", "hidden");
        }

        $(".dates div").addClass("pull-left");
        $(".dates").addClass("clearfix");
        $(".dates").prepend("<i class='fa fa-calendar pull-left'></i>");
        $(".dates .endDate").each(function () {
            if ($(this).prev().text()) {
                $(this).prepend("&nbsp;-&nbsp;");
            }
        });

        $("#website").prepend("<i class='fa fa-link'></i>&nbsp;");
        $(".gpa").prepend("<i class='fa fa-star-o'></i>&nbsp;");
        $(".publisher").prepend("<i class='fa fa-newspaper-o'></i>&nbsp;");
        $(".awarder").prepend("<i class='fa fa-trophy'></i>&nbsp;");
        $("#email").prepend("<i class='fa fa-envelope-o'></i>&nbsp;");
        $("#phone").prepend("<i class='fa fa-phone'></i>&nbsp;");
        $("#education .area").prepend("<i class='fa fa-tags'></i>&nbsp;");

        $("#profiles").addClass("list-unstyled");
        $("#profiles a").each(function () {
            $(this).prepend("<i class='fa fa-" + $(this).prop("class") + "'></i>&nbsp;");
        });

        $("#work>ul, #honorsAwards>ul, #education>ul, #publications>ul, #certifications>ul, #interests>ul, #volunteer>ul, #references>ul, #skills>ul, #awards>ul").addClass("list-group");
        $("#work>ul>li, #honorsAwards>ul>li, #education>ul>li, #publications>ul>li, #certifications>ul>li, #interests>ul>li, #volunteer>ul>li, #references>ul>li, #skills>ul>li, #awards>ul>li").addClass("list-group-item");

        $("#work>ul>li, #volunteer>ul>li, #education>ul>li").prepend("<div class='header clearfix'></div>");
        $("#work>ul>li").each(function () {
            var position = $(this).find(".position");
            var company = $(this).find(".company")
            if (position.length) $(this).find(".header").append(position);
            if (company.length) $(this).find(".header").append(company);
            if (position.length && company.length) {
                position.append("&nbsp;-&nbsp;");
            }
        });
        $("#volunteer>ul>li").each(function () {
            var position = $(this).find(".position");
            var company = $(this).find(".organization")
            if (position.length) $(this).find(".header").append(position);
            if (company.length) $(this).find(".header").append(company);
            if (position.length && company.length) {
                position.append("&nbsp;-&nbsp;");
            }
        });
        $("#education>ul>li").each(function () {
            var position = $(this).find(".studyType");
            var company = $(this).find(".institution")
            if (position.length) $(this).find(".header").append(position);
            if (company.length) $(this).find(".header").append(company);
            if (position.length && company.length) {
                position.append("&nbsp;-&nbsp;");
            }
        });
        $("#work>ul>li .company, #work>ul>li .position, #volunteer>ul>li .organization, #volunteer>ul>li .position, #education>ul>li .studyType").addClass("pull-left");

        $("ul.list-group li.list-group-item>h4").addClass("list-group-item-heading");
        $("ul.list-group li.list-group-item div.summary").addClass("list-group-item-text");

        $("#languages ul").addClass("list-unstyled");
        $("#languages .fluency").addClass("progress-bar").attr("aria-valuemin", "0").attr("aria-valuemax", "5");
        $("#languages .fluency").wrap("<div class='progress'></div>");
        $("#languages .fluency-1").css("width", "20%");
        $("#languages .fluency-2").css("width", "40%");
        $("#languages .fluency-3").css("width", "60%");
        $("#languages .fluency-4").css("width", "80%");
        $("#languages .fluency-5").css("width", "100%");

        $("#skills .level").each(function () {
            $(this).prop("title", $(this).html());
        });
        $("#skills .level").tooltip({placement:'left'});
        $("#skills .level-1").html('<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
        $("#skills .level-2").html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
        $("#skills .level-3").html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
        $("#skills .level-4").html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>');
        $("#skills .level-5").html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');

        $("section:not('#summary')").addClass("panel panel-primary").prepend("<div class='panel-heading'></div>");
        $('#basics .panel-heading').after("<div class='panel-body'></div>");
        $("section:not(#basics)>div, section:not(#basics)>ul").addClass("panel-body");
        $("#basics .panel-body").nextAll().appendTo("#basics .panel-body");

        $("section").each(function () {
            $(this).find(".panel-heading").append($(this).find("h3"));
        });

        $("#basics .panel-body").append("<div id='container'><div class='row'><div class='col-sm-6 leftcol'></div><div class='col-sm-6 rightcol'></div></div></div>")
        $("#basics .leftcol").append($("#phone"));
        $("#basics .leftcol").append($("#location"));
        $("#email").prependTo("#profiles");
        $("#website").prependTo("#profiles");
        $("#basics .rightcol").append($("#profiles"));
        $("#website").replaceWith("<li id='website'>" + $("#website").html() + "</li>");
        $("#email").replaceWith("<li id='email'>" + $("#email").html() + "</li>");

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

        $(".fa").addClass("fw");
        $("nav#profileSections").affix();
        $('body').scrollspy({target:'nav'});
    });
});