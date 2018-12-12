require(["//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js", "//cdnjs.cloudflare.com/ajax/libs/stickyfill/2.1.0/stickyfill.min.js"], function () {
    require(["//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"], function () {
        $("body").show().wrapInner("<div class='container'><div class='row'><div class='col-md-9'></div></div></div>");
        $("body>.container>.row").prepend("<div class='col-md-3 d-sm-none d-md-block'></div>");
        $("body>.container>.row>.col-md-3").append($("nav"));
        $("nav#profileSections").prepend($("#picture"));
        $("nav#profileSections ul").addClass("nav nav-pills flex-column");
        $("nav#profileSections li").addClass("border-bottom");
        $("nav#profileSections a").addClass("nav-link");
        $("#picture").addClass("img-fluid rounded-circle").wrap("<a href='#'></a>");

        if (!$("#summary").length) {$(".col-md-9").prepend("<section id='summary' />")}
        $("#summary").addClass("jumbotron mt-4 p-4 mb-0");
        $("#summary:not(:empty)").prepend("<hr class='my-4'>");
        $("#summary").prepend($("h2").addClass("lead"));
        $("#summary").prepend($("h1").addClass("display-3"));

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

        $(".website").prepend("<i class='fa fa-link'></i>&nbsp;");
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
        $("#work>ul>li, #honorsAwards>ul>li, #education>ul>li, #publications>ul>li, #certifications>ul>li, #interests>ul>li, #volunteer>ul>li, #references>ul>li, #skills>ul>li, #awards>ul>li").addClass("list-group-item border-right-0 border-left-0");

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
        $("ul.list-group li:last-child").addClass("border-bottom-0");

        $("#languages ul").addClass("list-unstyled card-body");
        $("#languages .fluency").addClass("progress-bar").attr("aria-valuemin", "0").attr("aria-valuemax", "5");
        $("#languages .fluency").wrap("<div class='progress'></div>");
        $("#languages .fluency-elementary").css("width", "20%");
        $("#languages .fluency-limited-working").css("width", "40%");
        $("#languages .fluency-professional-working").css("width", "60%");
        $("#languages .fluency-full-professional").css("width", "80%");
        $("#languages .fluency-native-or-bilingual").css("width", "100%");

        if ($("#skills .level").length > 0) {
            $("#skills .level").each(function () {
                $(this).prop("title", $(this).html());
            });
            $("#skills .level").tooltip({placement:'left'});
            $("#skills .level-1").html('<i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
            $("#skills .level-2").html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
            $("#skills .level-3").html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i>');
            $("#skills .level-4").html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-o"></i>');
            $("#skills .level-5").html('<i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i>');
        } else {
            var skills = [];
            $("#skills li").each (function () {skills.push($(this).text().trim())});
            $("#skills>ul").replaceWith("<div class='card-body'>" + skills.join(", ") + "</div>");
        }

        $("section:not('#summary')").addClass("card mt-4");
        $("section h3").addClass("card-header");
        $('#basics .card-header').after("<div class='card-body'></div>");
        $("section:not(#basics)>div").addClass("card-body");
        $("#basics .card-body").nextAll().appendTo("#basics .card-body");

        $("#basics .card-body").append("<div id='container'><div class='row'><div class='col-sm-6 leftcol'></div><div class='col-sm-6 rightcol'></div></div></div>")
        $("#basics .leftcol").append($("#phone"));
        $("#basics .leftcol").append($("#location"));
        $("#email").prependTo("#profiles");
        $("#website").prependTo("#profiles");
        $("#basics .rightcol").append($("#profiles"));
        $("#website").replaceWith("<li id='website'>" + $("#website").html() + "</li>");
        $("#email").replaceWith("<li id='email'>" + $("#email").html() + "</li>");

        $("footer").addClass("mt-4 text-center");
        $("#designer")
            .attr("href", "http://velocv.com")
            .text("VeloCV");

        if ($("nav#profileLanguages").length) {
            var selected_language = $("nav#profileLanguages li.active").text();
            $("nav#profileLanguages li.active").remove();
            $("#summary").prepend('<div class="btn-group pull-right" id="profileLanguagesSelector"><button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +  selected_language + ' </button><div class="dropdown-menu"></div></div>');
            $("#profileLanguagesSelector .dropdown-menu").append($("nav#profileLanguages li a"));
            $("#profileLanguagesSelector .dropdown-menu a").addClass("dropdown-item");
            $("nav#profileLanguages").remove();
        }

        $(".fa").addClass("fw");
        Stickyfill.add($("nav#profileSections"));
        $('body').scrollspy({target:'nav'});
    });
});
