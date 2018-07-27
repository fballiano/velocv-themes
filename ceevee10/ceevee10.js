require(["//cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js", "//code.jquery.com/jquery-1.10.2.min.js"], function () {
    require(["//code.jquery.com/jquery-migrate-git.min.js", "//cdnjs.cloudflare.com/ajax/libs/flexslider/2.3.0/jquery.flexslider-min.js", "//cdnjs.cloudflare.com/ajax/libs/FitText.js/1.1/jquery.fittext.min.js"], function () {
        $(".endDate").prepend("&nbsp;-&nbsp;");
        $(".dates").addClass("date");
        $("body").prepend('<header id="home"><div class="row banner"><div class="banner-text"><h3>' + $("h2").text() + '</h3><hr /><ul class="social"></ul></div></div><p class="scrolldown"><a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a></p></header>');
        $("header .banner-text").prepend($("h1"));
        $("h1").addClass("responsive-headline");
        $("h2").remove();

        $("#profiles a").each(function () {
            $(this).html("<i class='fa fa-" + $(this).prop("class") + "'></i>");
        });

        $("header ul.social").append($("#profiles"));

        $("#about script").remove();
        $("#about").addClass("velocv-about");
        $("header").after('<section id="about"><div class="row"><div class="three columns"><img class="profile-pic" src="' + $("#picture").attr("src") + '" alt="" /></div><div class="nine columns main-col"><p>' + ($("#summary").html() ? $("#summary").html() : "") + '</p><div class="row"><div class="columns contact-details"><p class="address">' + ($("#about").html() ? $("#about").html() : '') + '</p></div></div></div></div></section>');
        $("#picture,#summary,.velocv-about").remove();

        $("#about").after('<section id="resume"></section>');
        $("section").each(function () {
            var section_id = $(this).attr("id");
            if (section_id == "about") return;
            if (section_id == "resume") return;
            if (section_id == "references") return;
            $("#resume").append('<div class="row velocv-' + section_id + '"><div class="three columns header-col"><h1><span>' + $(this).children("h3").text() + '</span></h1></div><div class="nine columns main-col">' + $(this).html() + '</div></div>');
            $("body>section#" + section_id).remove();
        });
        $("#resume .main-col h3").remove();
        $("#resume .main-col h4").each(function () {
            var text_beginning = $(this).parent().children(".company,.authority,.publisher,.issuer").text();
            var dates = $(this).parent().children(".dates").text();
            if (dates) dates = ' <em class="date">' + $(this).parent().children(".dates").text() + '</em>';
            if (dates && text_beginning) text_beginning += ' <span>•</span>';
            $(this).replaceWith('<h3>' + $(this).html() + '</h3><p class="info">' + text_beginning + dates + '</p>');
        });
        $(".company,.authority,.publisher,.issuer,.dates").remove();

        $(".velocv-languages").prepend("<p></p>");
        $(".velocv-languages ul").addClass("skills").wrap('<div class="bars"></div>');
        $(".velocv-languages li").each(function () {
            if ($(this).children(".fluency").length) {
                $(this).children(".fluency").replaceWith('<span class="bar-expand ' + $(this).children(".fluency").attr("class") + '">' + $(this).children(".fluency").text() + '</span>');
                $(this).children(".bar-expand").after('<em>' + $(this).children("h3").text() + '</em>');
            } else {
                $(this).css("background", "none");
                $(this).prepend('<em>' + $(this).children("h3").text() + '</em>');
            }
        });
        $(".velocv-languages li h3, .velocv-languages li p.info").remove();
        $(".velocv-languages li .bar-expand.fluency-elementary").css("width", "20%");
        $(".velocv-languages li .bar-expand.fluency-limited-working").css("width", "40%");
        $(".velocv-languages li .bar-expand.fluency-professional-working").css("width", "60%");
        $(".velocv-languages li .bar-expand.fluency-full-professional").css("width", "80%");
        $(".velocv-languages li .bar-expand.fluency-native-or-bilingual").css("width", "100%");

        $("section#references").wrapInner('<div class="text-container"><div class="row"></div></div>');
        $("section#references .row").prepend('<div class="two columns header-col"><h1><span>' + $("section#references h3").text() + '</span></h1></div>');
        //$("section#references ul").addClass("slides").wrap('<div class="ten columns flex-container"><div class="flexslider"></div></div>');
        $("section#references h3").remove();
        $("section#references li").each(function () {
            $(this).prepend("<blockquote><p>" + $(this).children(".reference").html() + "</p><cite>" + $(this).children(".name").html() + "</cite></blockquote>");
            $(this).children(".reference").remove();
            $(this).children(".name").remove();
        });
        $("section#references").attr("id", "testimonials");

        $(".row:not(.velocv-skills) .main-col li, .velocv-interests .main-col").append("<p></p>");
        $(".velocv-skills li:not(:last)").append(",&nbsp;");
        $(".velocv-skills li:last").append(".");

        $("footer").wrapInner('<div class="row"><div class="twelve columns"></div></div>');
        $("footer .row .twelve").prepend($("header ul.social").clone());
        $("footer ul.social").removeClass("social").addClass("social-links");
        $("footer .row .twelve").after('<div id="go-top"><a class="smoothscroll" title="" href="#home"><i class="icon-up-open"></i></a></div>');

        $("#designer")
            .attr("href", "http://www.styleshout.com")
            .text("Styleshout");
        $("nav#profileSections").remove();
        $("header#home").prepend($("nav#profileLanguages"));
        $("nav#profileLanguages ul").attr("id", "nav").addClass("nav");
        $("nav#profileLanguages li.active").addClass("current");
        $("nav#profileLanguages").attr("id", "nav-wrap");

        setTimeout(function () {
            $('h1.responsive-headline').fitText(1, {minFontSize: '40px', maxFontSize: '90px'});
        }, 100);

        $('.smoothscroll').on('click', function (e) {
            e.preventDefault();

            var target = this.hash,
                $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 800, 'swing', function () {
                window.location.hash = target;
            });
        });

        $('.flexslider').flexslider({
            namespace: "flex-",
            controlsContainer: ".flex-container",
            animation: 'slide',
            controlNav: true,
            directionNav: false,
            smoothHeight: true,
            slideshowSpeed: 7000,
            animationSpeed: 600,
            randomize: false,
        });

        $('header').css({'height': $(window).height()});
        $(window).on('resize', function () {
            $('header').css({'height': $(window).height()});
            $('body').css({'width': $(window).width()})
        });

        $("body").show();
    });
});
