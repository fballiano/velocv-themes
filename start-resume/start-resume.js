require(["//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"], function () {
	require(["//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js", "//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"], function () {
	    $("body").attr("id", "page-top");
	    $("#profileSections").replaceWith('<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">\n' +
            '      <a class="navbar-brand js-scroll-trigger" href="#page-top">\n' +
            '        <span class="d-block d-lg-none">' + $("h1").text() + '</span>\n' +
            '        <span class="d-none d-lg-block">\n' +
            '          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="' + ($("#picture").length ? $("#picture").attr("src") : '') + '" alt="">\n' +
            '        </span>\n' +
            '      </a>\n' +
            '      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n' +
            '        <span class="navbar-toggler-icon"></span>\n' +
            '      </button>\n' +
            '      <div class="collapse navbar-collapse" id="navbarSupportedContent">\n' +
            '        <ul class="navbar-nav">\n' +
                        $("#profileSections ul").html() +
            '        </ul>\n' +
            '      </div>\n' +
            '    </nav>');
        $("#picture").remove();
	    $("#sideNav ul.navbar-nav li").addClass("nav-item").children("a").addClass("nav-link js-scroll-trigger");
        $("#sideNav ul.navbar-nav li:first").remove();
        $("#sideNav").after('<div class="container-fluid p-0" id="velocvmaincontainer"><section class="resume-section p-3 p-lg-5 d-flex d-column" id="about"><div class="my-auto"></div></section></div>');
        $("section").appendTo("#velocvmaincontainer");
        $("h1").addClass("mb-0").appendTo("#about .my-auto");
        $("h2").addClass("subheading mb-5").appendTo("#about .my-auto");
        $("#summary").addClass("lead mb-5").appendTo("#about .my-auto");
        $("#velocvmaincontainer section:not('#summary')").addClass("resume-section p-3 p-lg-5 d-flex flex-column").wrapInner('<div class="my-auto"></div>').after('<hr class="m-0">');
        $("#velocvmaincontainer section h3").each(function () {
            $(this).replaceWith('<h2 class="mb-5">' + $(this).text() + '</h2>');
        });

        $(".dates .endDate").each(function () {
            if ($(this).prev().text()) {
                $(this).prepend("&nbsp;-&nbsp;");
            }
        });

        $("<div class='social-icons'></div>").insertAfter("#summary");
        if ($("#phone").length) {
            $("#phone").wrapInner('<a href="tel:' + $("#phone").text() + '"></a>');
            $("#phone a").html("<i class='fa fa-phone'></i>");
            $(".social-icons").prepend($("#phone a")[0].outerHTML)
        }
        if ($("#email").length) {
            $("#email a").html("<i class='fa fa-envelope-o'></i>");
            $(".social-icons").prepend($("#email a")[0].outerHTML)
        }
        if ($("#website").length) {
            $("#website a").html("<i class='fa fa-link'></i>");
            $(".social-icons").prepend($("#website a")[0].outerHTML)
        }
        $("#profiles a").each(function () {
            $(this).html("<i class='fa fa-" + $(this).prop("class") + "'></i>");
            $(this).appendTo('.social-icons');
        });
        $("#basics").remove();

        $("#work ul, #volunteer ul, #education ul, #publications ul").each(function () {
            $(this).replaceWith($(this).html());
        });
        $("#work li, #volunteer li, #education li, #publications li").each(function () {
           $(this).replaceWith('<div class="resume-item d-flex flex-column flex-md-row mb-5"><div class="resume-content mr-auto">' + $(this).html() + '</div><div class="resume-date text-md-right"><span class="text-primary">' + $(this).find('.dates').text() + '</span></div></div>')
        });
        $("#work h4.position, #volunteer h4.position, #education h4.position, #publications h4.name").each(function () {
            $(this).prependTo($(this).parent()).replaceWith('<h3 class="mb-0">' + $(this).text() + '</h3>');
        });
        $("#work h4.company, #volunteer h4.organization, #education h4.organization, #publications div.publisher").each(function () {
            $(this).replaceWith('<div class="subheading mb-3">' + $(this).text() + '</div>');
        });
        $("#work .resume-content .dates, #volunteer .resume-content .dates, #education .resume-content .dates, #publications .resume-content .dates").remove();

        $("#awards ul, #languages ul, #references ul").addClass("fa-ul mb-0");
        $("#awards li").prepend('<i class="fa-li fa fa-trophy text-warning"></i>');
        $("#awards li").each(function () {
           var dates = $(this).find(".dates");
           var awarder = $(this).find(".awarder");
           if (dates.length && awarder.length) {
               dates.html(dates.text() + ' - ' + awarder.text());
               awarder.remove();
           }
        });
        $("#languages li .language").each(function () {
            $(this).replaceWith('<h4 class="language">' + $(this).text() + '</h4>');
        });
        $("#references li .name").each(function () {
            $(this).prependTo($(this).parent()).replaceWith('<h4 class="name">' + $(this).text() + '</h4>');
        });

        var skills = [];
        $("#skills li").each (function () {skills.push($(this).text().trim())});
        $("#skills>.my-auto>ul").replaceWith("<p>" + skills.join(", ") + ".</p>");

        $("#profileLanguages").prependTo("#sideNav");
        $("#profileLanguages ul").addClass("navbar-nav list-inline");
        $("#profileLanguages li").addClass("nav-item list-inline-item");
        $("#profileLanguages a").addClass("nav-link");
        $("#profileLanguages a").each(function () {
            $(this).text($(this).text().substr(0, 2));
        });

        $("#designer")
            .attr("href", "https://startbootstrap.com")
            .text("Start Bootstrap");

        $("footer").addClass("pt-4 pb-2");
        $('body').show();

        /*!
         * Start Bootstrap - Resume v5.0.1 (https://startbootstrap.com/template-overviews/resume)
         * Copyright 2013-2018 Start Bootstrap
         * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/LICENSE)
         */
        !function(t){"use strict";t('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=t(this.hash);if((e=e.length?e:t("[name="+this.hash.slice(1)+"]")).length)return t("html, body").animate({scrollTop:e.offset().top},1e3,"easeInOutExpo"),!1}}),t(".js-scroll-trigger").click(function(){t(".navbar-collapse").collapse("hide")}),t("body").scrollspy({target:"#sideNav"})}(jQuery);
	});
});