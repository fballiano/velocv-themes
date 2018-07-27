require(["//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js"], function () {
    require(["//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.0/js/bootstrap.min.js", "//cdnjs.cloudflare.com/ajax/libs/flexslider/2.2.2/jquery.flexslider-min.js", "//cdnjs.cloudflare.com/ajax/libs/jQuery-Knob/1.2.13/jquery.knob.min.js"], function () {
        $("body")
            .attr("id", "page-top")
            .addClass("index")
            .wrapInner("<div id='content'></div>");
        ;
        $("nav#profileSections ul").prepend("<li><a href='#about'><i class='fa fa-home'></i></a></li>");
        $("nav#profileSections")
            .addClass("navbar navbar-default navbar-fixed-top navbar-shrink text-center")
            .wrapInner('<div class="container"></div>');
        $("nav#profileSections ul")
            .addClass("nav navbar-nav")
            .wrap('<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"></div>');
        $("nav#profileSections li").addClass("page-scroll");
        $("nav#profileSections").prepend('<div class="navbar-header page-scroll"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div>');

        $("section:not('#summary')").wrapInner("<div class='container'></div>");

        $("section h3").each(function () {
            $(this).replaceWith('<div class="text-center"><div class="inline-icons-text section-heading"><div class="inline-icon"><hr><hr><hr><hr><hr><hr></div><div class="inline-icon heading-width"><span class="heading-text">' + $(this).text() + '</span></div><div class="inline-icon"><hr><hr><hr><hr><hr><hr></div></div></div>');
        });

        $(".dates .endDate").each(function () {
            if ($(this).prev().text()) {
                $(this).prepend("&nbsp;-&nbsp;");
            }
        });

        $("section#languages li").each(function () {
            var level = $(this).children(".fluency").attr("class");
            if (level == "fluency fluency-native-or-bilingual") level = 100;
            if (level == "fluency fluency-full-professional") level = 80;
            if (level == "fluency fluency-professional-working") level = 60;
            if (level == "fluency fluency-limited-working") level = 40;
            if (level == "fluency fluency-elementary") level = 20;
            if (level == "fluency fluency-") {
                $(this).replaceWith('<div class="col-md-3 col-sm-6"><div class="placeholder" style="height:205px"></div><h3>' + $(this).children(".language").text() + '</h3><p></p></div>');
            } else {
                $(this).replaceWith('<div class="col-md-3 col-sm-6"><input class="knob" readonly="readonly" data-width="150" data-fgColor="#2c3e50" data-skin="tron" data-thickness=".1" value="' + level + '"><h3>' + $(this).children(".language").text() + '</h3><p>' + $(this).children("div.fluency").text() + '</p></div>');
            }
        });
        $("section#languages ul").replaceWith('<div class="row text-center">' + ($("section#languages ul").html() ? $("section#languages ul").html() : '') + '</div>');
        if ($("section#languages .knob").length == 0) $("section#languages .placeholder").remove();

        $("section#skills li").each(function () {
            $(this).replaceWith('<div class="col-md-3 col-sm-6"><h3>' + $(this).text() + '</h3></div>');
        });
        $("section#skills ul").replaceWith('<div class="row text-center">' + ($("section#skills ul").html() ? $("section#skills ul").html() : '') + '</div>');
        $("#picture").addClass("about-photo");
        $("nav#profileSections").after('<section id="about"><div class="container"><div class="text-center"><div class="inline-icons-text section-heading"><div class="inline-icon"><hr><hr><hr><hr><hr><hr></div><div class="inline-icon heading-width"><span class="heading-text">' + $("h1").text() + '</span></div><div class="inline-icon"><hr><hr><hr><hr><hr><hr></div></div></div><p class="text-center">' + $("h2").text() + '</p><div class="gap-30"></div><div class="row equalheight"><div class="col-md-4 left-services text-right"></div><div class="col-md-4">' + $("#picture")[0].outerHTML + '</div><div class="col-md-4 right-services"></div></div><div class="gap-30"></div><p class="velocv-summary">' + ($("#summary").html() ? $("#summary").html() : '') + '</p></div></section>');
        if ($(".velocv-summary").text().length < 300) $(".velocv-summary").addClass("text-center");


        $("h1,h2,#summary,img:last,#industry").remove();
        $("#profiles").addClass("list-unstyled removebottommargin");
        $("#email").append("&nbsp;&nbsp;<i class='fa fa-envelope fa-2'></i>");
        $("#phone").append("&nbsp;&nbsp;<i class='fa fa-phone fa-2'></i>");
        $("#countryCode").append("&nbsp;&nbsp;<i class='fa fa-globe fa-2'></i>");
        $("#website").prepend("<i class='fa fa-link fa-2'></i>&nbsp;&nbsp;");
        $("#profiles a").each(function () {
            $(this).prepend("<i class='fa fa-" + $(this).prop("class") + "'></i>&nbsp;&nbsp;");
        });

        $(".left-services").append($("#phone,#email,#countryCode"));
        $(".right-services").append($("#website,#profiles"));
        $("section#basics").remove();
        $("ul.navbar-nav li:eq(1)").remove();

        $("#about .row.equalheight").after('<div class="show-only-mobile aboutdouble"><div class="invert-icons">' + $(".left-services").html() + '</div>' + $(".right-services").html() + '</div>');
        $(".aboutdouble .invert-icons>div").each(function () {
            $(this).children("i").prependTo($(this));
            $(this).html($(this).html().replace(/&nbsp;/g, ''));
            $(this).children("i").after('&nbsp;&nbsp;');
        });

        $("footer")
            .addClass("text-center")
            .wrapInner('<div class="footer-below"><div class="container"><div class="row"><div class="col-lg-12"></div></div></div></div>');
        $("#work>.container>ul").replaceWith("<div class='timeline'>" + $("#work>.container>ul").html() + "</div>");
        $("#work>.container>.timeline>li").each(function () {
            $(this).replaceWith("<div class='row'><div class='col-xs-6'><span class='fa-stack fa-2x right'><i class='fa fa-circle fa-1x fa-stack-2x'></i><i class='fa fa-tags fa-stack-1x fa-inverse service-icon'></i></span><div class='left-content'><h3 class='work'>" + $(this).children(".position").text() + "</h3><h3 class='organization'>" + $(this).children(".company").text() + "</h3></div></div><div class='col-xs-6'><div class='right-content'><h3 class='work'>" + ($(this).children(".dates").text() ? $(this).children(".dates").text() : "") + "</h3><p>" + ($(this).children(".summary").html() ? $(this).children(".summary").html() : "") + "</p></div></div></div>");
        });
        $("#work>.container>.timeline").append('<hr class="bottom">');

        $("#education>.container>ul").replaceWith("<div class='timeline'>" + $("#education>.container>ul").html() + "</div>");
        $("#education>.container>.timeline>li").each(function () {
            $(this).replaceWith("<div class='row'><div class='col-xs-6'><span class='fa-stack fa-2x right'><i class='fa fa-circle fa-1x fa-stack-2x'></i><i class='fa fa-tags fa-stack-1x fa-inverse service-icon'></i></span><div class='left-content'><h3 class='work'>" + $(this).children(".studyType").text() + "</h3><h3 class='organization'>" + $(this).children(".institution").text() + "</h3></div></div><div class='col-xs-6'><div class='right-content'><h3 class='work'>" + ($(this).children(".dates").text() ? $(this).children(".dates").text() : "") + "</h3><p>" + ($(this).children(".gpa").html() ? $(this).children(".gpa").html() : "") + "</p><p>" + ($(this).children(".area").html() ? $(this).children(".area").html() : "") + "</p></div></div></div>");
        });
        $("#education>.container>.timeline").append('<hr class="bottom">');

        $("#volunteer>.container>ul").replaceWith("<div class='timeline'>" + $("#volunteer>.container>ul").html() + "</div>");
        $("#volunteer>.container>.timeline>li").each(function () {
            $(this).replaceWith("<div class='row'><div class='col-xs-6'><span class='fa-stack fa-2x right'><i class='fa fa-circle fa-1x fa-stack-2x'></i><i class='fa fa-tags fa-stack-1x fa-inverse service-icon'></i></span><div class='left-content'><h3 class='work'>" + ($(this).children(".position").text() ? $(this).children(".position").text() : '')  + "</h3><h3 class='organization'>" + $(this).children(".organization").text() + "</h3></div></div><div class='col-xs-6'><div class='right-content'><h3 class='work'>" + ($(this).children(".dates").text() ? $(this).children(".dates").text() : "") + "</h3><p>" + ($(this).children(".summary").html() ? $(this).children(".summary").html() : "") + "</p></div></div></div>");
        });
        $("#volunteer>.container>.timeline").append('<hr class="bottom">');

        $("#publications>.container>ul").replaceWith("<div class='timeline'>" + $("#publications>.container>ul").html() + "</div>");
        $("#publications>.container>.timeline>li").each(function () {
            $(this).replaceWith("<div class='row'><div class='col-xs-6'><span class='fa-stack fa-2x right'><i class='fa fa-circle fa-1x fa-stack-2x'></i><i class='fa fa-tags fa-stack-1x fa-inverse service-icon'></i></span><div class='left-content'><h3 class='work'>" + ($(this).children(".name").text() ? $(this).children(".name").text() : '')  + "</h3><h3 class='organization'>" + ($(this).children(".publisher").text() ? $(this).children(".publisher").text() : '') + "</h3></div></div><div class='col-xs-6'><div class='right-content'><h3 class='work'>" + ($(this).children(".dates").text() ? $(this).children(".dates").text() : "") + "</h3><p>" + ($(this).children(".summary").html() ? $(this).children(".summary").html() : "") + "</p></div></div></div>");
        });
        $("#publications>.container>.timeline").append('<hr class="bottom">');

        $("section#references").addClass("grey-area testimonial-section");
        $("section#references>.container>ul").replaceWith('<div class="row"><div class="col-sm-12"><div id="testimonials-2" class="slide testimonial testimonial-version1 animateright"><div class="carousel-inner">' + $("section#references>.container>ul").html() + '</div></div></div></div>');
        $("section#references .carousel-inner li").each(function () {
            $(this).replaceWith('<div class="item"><div class="textbox"><p class="reviewcomment" style="text-align:left">' + $(this).children(".reference").html() + '</p></div><div class="fullwidth"><div class="testimonial-metadata"><h3>' + $(this).children(".name").text().replace(' (', '<br />').replace(/\)$/, '') + '</h3><br /></div></div></div>');
        });
        $("section#references .carousel-inner").after('<div class="testimonial-control text-center"><a class="left  btn btn-primary btn-xs" href="#testimonials-2" data-slide="prev"><i class="fa fa-angle-left fa-2x"></i></a><a class="right btn btn-primary btn-xs" href="#testimonials-2" data-slide="next"><i class="fa fa-angle-right fa-2x"></i></a></div>');
        $("section#references>.container>div:first").replaceWith("<h2 class='main_heading'>" + $("#references .heading-text").text() + "</h2>");
        $("section#references h2").after('<div class="gap-50"></div>');
        $("section#references .item:first").addClass("active");
        $("section#references").next("section").css("padding-top", "100px");

        $("section#awards").addClass("grey-area awards");
        $("section#awards>.container>div:first").replaceWith("<h2 class='main_heading'>" + $("#awards .heading-text").text() + "</h2>");
        $("section#awards h2.main_heading").prependTo("section#awards");
        $("section#awards h2").after('<div class="gap-50"></div>');
        $("section#awards li").each(function () {
            $(this).replaceWith('<div class="col-sm-3"><i class="fa fa-trophy fa-5x"></i><h3>' + ($(this).children(".title").text() ? $(this).children(".title").text() : '') + '</h3><h4>' + ($(this).children(".awarder").text() ? $(this).children(".awarder").text() : '') + '</h4><h5>' + ($(this).children(".dates").text() ? $(this).children(".dates").text() : '') + '</h5></div>');
        });
        $("section#awards ul").replaceWith('<div class="row">' + $("section#awards ul").html() + '</div>');
        $("section#awards").next("section:not(#references)").css("padding-top", "50px");

        if ($("#interests div:last").height() < 40) $("#interests div:last").addClass("text-center");

        $("#designer")
            .attr("href", "http://themifycloud.com/downloads/resume-plus-responsive-one-page-template/")
            .text("ThemifyCloud");


        $('.page-scroll a').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
        $('.nav').click(function () {
            $('.navbar-collapse').removeClass('in');
        });
        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function () {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function () {
            $(this).removeClass("floating-label-form-group-with-focus");
        });

        $(".knob").knob({
            draw: function () {

                // "tron" case
                if (this.$.data('skin') == 'tron') {

                    this.cursorExt = 0.3;

                    var a = this.arc(this.cv)  // Arc
                        , pa                   // Previous arc
                        , r = 1;

                    this.g.lineWidth = this.lineWidth;

                    if (this.o.displayPrevious) {
                        pa = this.arc(this.v);
                        this.g.beginPath();
                        this.g.strokeStyle = this.pColor;
                        this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                        this.g.stroke();
                    }

                    this.g.beginPath();
                    this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                    this.g.stroke();

                    this.g.lineWidth = 2;
                    this.g.beginPath();
                    this.g.strokeStyle = this.o.fgColor;
                    this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                    this.g.stroke();

                    return false;
                }
            }
        });


        $("body,#content").show();
        $('body').scrollspy({target: '.navbar-fixed-top'});
        $("section:first").css('padding-top', $("#profileSections").height() + 50);
        if ($("nav#profileLanguages").length) {
            var selected_language = $("nav#profileLanguages li.active").text();
            $("nav#profileLanguages li.active").remove();
            $("section#about").before('<div class="btn-group pull-right" id="profileLanguagesSelector" style="margin-top:' + $("#profileSections").height() + 'px"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">' + selected_language + ' <span class="caret"></span></button><ul class="dropdown-menu" role="menu"></ul></div>');
            $("#profileLanguagesSelector ul").append($("nav#profileLanguages li"));
            $("nav#profileLanguages").remove();
        }

        var currentlyresizing = false;
        $(window).resize(function () {
            if (currentlyresizing) return;

            currentlyresizing = true;
            $("meta[name=viewport]")[0].content = 'width=device-width, initial-scale=1, user-scalable=no';

            setTimeout(function () {
                var width = $(window).width();
                if (width < 600) {
                    var scale = width/600;
                    $("meta[name=viewport]")[0].content = 'width=device-width, initial-scale=' + scale + ', user-scalable=no';
                }

                setTimeout(function () {
                    currentlyresizing = false;
                }, 200);
            }, 0);
        });
        $(window).resize();
    });
});
