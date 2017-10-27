require(["//code.jquery.com/jquery-1.11.2.min.js"], function () {
    require(["//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"], function () {
        $("body").show().prepend("<div class='wrapper'><div class='sidebar-wrapper'><div class='profile-container'></div></div><div class='main-wrapper'></div></div>");
        if ($("#picture").length) {
            $(".profile-container")
                .css("padding", 0)
                .append("<img src='" + $("#picture").prop("src") + "' alt='' width='240' />");
        } else {
            $(".profile-container").remove();
        }
        $("h1").prependTo("#summary");
        $("h1").after("<h3 class='tagline'>" + $("h2").html() + "</h3>")
        $("section").addClass("section");
        $("section h3").addClass("section-title");
        $("section ul").addClass("list-unstyled");
        $("section li>h4").addClass("job-title");

        $(".sidebar-wrapper").append("<div class='contact-container container-block'><ul class='list-unstyled contact-list'></ul></div>");
        if ($("#city")) $("ul.contact-list").append('<li><i class="fa fa-globe"></i>' + $("#city").html() + '</li>');
        if ($("#region")) $("ul.contact-list").append('<li><i class="fa fa-globe"></i>' + $("#region").html() + '</li>');
        if ($("#countryCode")) $("ul.contact-list").append('<li><i class="fa fa-globe"></i>' + $("#countryCode").html() + '</li>');
        if ($("#email")) $("ul.contact-list").append('<li><i class="fa fa-envelope-o"></i>' + $("#email").html() + '</li>');
        if ($("#phone")) $("ul.contact-list").append('<li><i class="fa fa-phone"></i>' + $("#phone").html() + '</li>');
        if ($("#website")) $("ul.contact-list").append('<li><i class="fa fa-link"></i>' + $("#website").html() + '</li>');
        $("#profiles a").each(function () {
            $(this).prepend("<i class='fa fa-" + $(this).prop("class") + "'></i>");
            $("ul.contact-list").append('<li>' + $(this).html() + '</li>');
        });
        $("#work .section-title").prepend('<i class="fa fa-briefcase"></i> ');
        $("#education .section-title").prepend('<i class="fa fa-graduation-cap"></i> ');
        $("#volunteer .section-title").prepend('<i class="fa fa-handshake-o"></i> ');
        $("#awards .section-title").prepend('<i class="fa fa-trophy"></i> ');
        $("#publications .section-title").prepend('<i class="fa fa-book"></i> ');
        $("#references .section-title").prepend('<i class="fa fa-star"></i> ');
        $("#skills .section-title").prepend('<i class="fa fa-rocket"></i> ');

        if ($("#languages").length) {
            $(".sidebar-wrapper").append('<div class="languages-container container-block"><h2 class="container-block-title">' + $("#languages h3").html() + '</h2><ul class="list-unstyled interests-list"></ul></div>');
            $("#languages li").each(function () {
                var language = $(this).find(".language").html();
                var fluency = $(this).find(".fluency");
                if (fluency.length) language += " <span class='lang-desc'>(" + fluency.html() + ")</span>";
                $(".languages-container .interests-list").append("<li>" + language  + "</li>");
            });
            $("#languages").remove();
        }

        if ($("#interests").length) {
            $(".sidebar-wrapper").append('<div class="interests-container container-block"><h2 class="container-block-title">' + $("#interests h3").html() + '</h2><ul class="list-unstyled interests-list"></ul></div>');
            $("#interests li ul").remove();
            $("#interests li div.name").each(function () {
                $(".interests-container .interests-list").append("<li>" + $(this).html()  + "</li>");
            });
            $("#interests").remove();
        }

        $("ul.highlights,ul.keywords,ul.courses").addClass("list-inline").css({marginTop: "10px", marginLeft: 0});
        $("ul.highlights li,ul.keywords li,ul.courses li").addClass("badge");

        $(".dates div").addClass("pull-left");
        $(".dates .endDate").each(function () {
            if ($(this).prev().text()) {
                $(this).prepend("&nbsp;-&nbsp;");
            }
        });

        $("#work,#education,#references,#skills,#awards").addClass("experiences-section");
        $("#work>ul>li,#education>ul>li,#references>ul>li,#awards>ul>li").addClass("item");
        $("#work>ul>li").each(function () {
            $(this).addClass("upper-row");
            var position = $(this).find(".position");
            var company = $(this).find(".company");
            var website = $(this).find(".website a");
            var dates = $(this).find(".dates");
            if (company.length) {
                company.replaceWith('<div class="company">' + company.text() + '</div>');
                if (website.length) {
                    $(this).find(".company").append(' - ' + website[0].outerHTML);
                    website.remove();
                }
            }
            if (position.length && company.length) {
                $(this).prepend(position);
            }
            if (dates.length) {
                dates.addClass("time").removeClass("dates");
            }
            if (position.length && dates.length) {
                dates.insertAfter(position);
            }
        });
        $("#volunteer>ul>li").each(function () {
            $(this).addClass("upper-row");
            var position = $(this).find(".position");
            var company = $(this).find(".organization");
            var website = $(this).find(".website a");
            var dates = $(this).find(".dates");
            if (company.length) {
                company.replaceWith('<div class="company">' + company.text() + '</div>');
                if (website.length) {
                    $(this).find(".company").append(' - ' + website[0].outerHTML);
                    website.remove();
                }
            }
            if (position.length && company.length) {
                $(this).prepend(position);
            }
            if (dates.length) {
                dates.addClass("time").removeClass("dates");
            }
            if (position.length && dates.length) {
                dates.insertAfter(position);
            }
        });
        $("#education>ul>li").each(function () {
            $(this).addClass("upper-row");
            var position = $(this).find(".studyType");
            var company = $(this).find(".institution");
            var dates = $(this).find(".dates");
            if (company.length) {
                company.replaceWith('<div class="company">' + company.text() + '</div>');
            }
            if (position.length && company.length) {
                $(this).prepend(position);
            }
            if (dates.length) {
                dates.addClass("time").removeClass("dates");
            }
            if (position.length && dates.length) {
                dates.insertAfter(position);
            }
        });
        $("#awards>ul>li").each(function () {
            $(this).addClass("upper-row");
            var position = $(this).find(".title");
            var company = $(this).find(".awarder");
            var dates = $(this).find(".dates");
            if (company.length) {
                company.replaceWith('<div class="company">' + company.text() + '</div>');
            }
            if (position.length && company.length) {
                $(this).prepend(position);
            }
            if (dates.length) {
                dates.addClass("time").removeClass("dates");
            }
            if (position.length && dates.length) {
                dates.insertAfter(position);
            }
        });
        $("#publications>ul>li").each(function () {
            $(this).addClass("upper-row");
            var position = $(this).find(".title");
            var company = $(this).find(".publisher");
            var website = $(this).find(".website a");
            var dates = $(this).find(".dates");
            if (company.length) {
                company.replaceWith('<div class="company">' + company.text() + '</div>');
                if (website.length) {
                    $(this).find(".company").append(' - ' + website[0].outerHTML);
                    website.remove();
                }
            }
            if (position.length && company.length) {
                $(this).prepend(position);
            }
            if (dates.length) {
                dates.addClass("time").removeClass("dates");
            }
            if (position.length && dates.length) {
                dates.insertAfter(position);
            }
        });

        $("#skills").addClass("skillset");
        $("#skills .name").addClass("level-title").css("font-weight", "bold");
        $("#skills>ul>li").css("margin-bottom", "10px");
        $("#skills .keywords").css("margin-top", 0);
        $("#skills>ul>li .level").addClass("level-bar-inner").text('').wrap("<div class='level-bar'></div>");
        $("#skills .level-1").css("width", "20%");
        $("#skills .level-2").css("width", "40%");
        $("#skills .level-3").css("width", "60%");
        $("#skills .level-4").css("width", "80%");
        $("#skills .level-5").css("width", "100%");

        $("body>section").appendTo(".main-wrapper");
        $("footer").appendTo("body").addClass("footer").wrapInner('<div class="text-center"></div>');
        $("#basics, #profileSections, body>section, body>h2, body>img").remove();
        $(".badge").css("background-color", "#bbb");

        if ($("nav#profileLanguages").length) {
            var selected_language = $("nav#profileLanguages li.active").text();
            $("nav#profileLanguages li.active").remove();
            $("h1").append('<div class="btn-group pull-right" id="profileLanguagesSelector"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">' +  selected_language + ' <span class="caret"></span></button><ul class="dropdown-menu" role="menu"></ul></div>');
            $("#profileLanguagesSelector ul").append($("nav#profileLanguages li"));
            $("nav#profileLanguages").remove();
        }

        $("#designer")
            .attr("href", "http://themes.3rdwavemedia.com/")
            .text("Xiaoying Riley");
    });
});