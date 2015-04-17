require(["//code.jquery.com/jquery-1.11.2.min.js"], function () {
    require(["//themifycloud.com/demos/templates/resumeplus/js/bootstrap.min.js", "//themifycloud.com/demos/templates/resumeplus/js/jquery.isotope.min.js", "//themifycloud.com/demos/templates/resumeplus/js/jquery.easing.js", "//themifycloud.com/demos/templates/resumeplus/js/classie.js", "//themifycloud.com/demos/templates/resumeplus/js/jquery.appear.js", "//themifycloud.com/demos/templates/resumeplus/js/jquery.flexslider-min.js", "//themifycloud.com/demos/templates/resumeplus/js/jquery.knob.js"], function () {
    
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
    
    $("section").wrapInner("<div class='container'></div>");
    
    $("section h3").each(function () {
        $(this).replaceWith('<div class="text-center animateup animated fadeInUp"><div class="inline-icons-text section-heading"><div class="inline-icon"><hr><hr><hr><hr><hr><hr></div><div class="inline-icon heading-width"><span class="heading-text">' + $(this).text() + '</span></div><div class="inline-icon"><hr><hr><hr><hr><hr><hr></div></div></div>');
    });
    
    $("section#languages li").each(function () {
        var level = $(this).attr("class");
        if (level == "proficiency-native_or_bilingual") level = 100;
        if (level == "proficiency-full_professional") level = 80;
        if (level == "proficiency-professional_working") level = 60;
        if (level == "proficiency-limited_working") level = 40;
        if (level == "proficiency-elementary") level = 20;
        $(this).replaceWith('<div class="col-md-3 col-sm-6 animateleft"><input class="knob" readonly="readonly" data-width="150" data-fgColor="#2c3e50" data-skin="tron" data-thickness=".1" value="' + level + '"><h3>' + $(this).children("h4").text() + '</h3><p>' + $(this).children("div.proficiency").text() + '</p></div>');
    });
    $("section#languages ul").replaceWith('<div class="row text-center">' + ($("section#languages ul").html()?$("section#languages ul").html():'')  + '</div>');
    
    $("section#skills li").each(function () {
        $(this).replaceWith('<div class="col-md-3 col-sm-6 animateleft"><h3>' + $(this).text() + '</h3></div>');
    });
    $("section#skills ul").replaceWith('<div class="row text-center">' +  ($("section#skills ul").html()?$("section#skills ul").html():'') + '</div>');
    $("#picture").addClass("about-photo");
    $("nav#profileSections").after('<section id="about"><div class="container"><div class="text-center animateup animated fadeInUp"><div class="inline-icons-text section-heading"><div class="inline-icon"><hr><hr><hr><hr><hr><hr></div><div class="inline-icon heading-width"><span class="heading-text">' + $("h1").text() + '</span></div><div class="inline-icon"><hr><hr><hr><hr><hr><hr></div></div></div><p class="text-center">' + $("h2").text() + '</p><div class="gap-30"></div><div class="row equalheight"><div class="col-md-4 left-services text-right"></div><div class="col-md-4">' + $("#picture")[0].outerHTML + '</div><div class="col-md-4 right-services"></div></div><div class="gap-30"></div><p class="velocv-summary">' + ($("#summary").html()?$("#summary").html():'') + '</p></div></section>');	
	if ($(".velocv-summary").height()<40) $(".velocv-summary").addClass("text-center");
	
    $("h1,h2,#summary,img:last,#industry").remove();
    $("#phoneNumbers ul, #twitterAccounts ul, #memberUrlResources ul, #imAccounts ul").addClass("list-unstyled removebottommargin");
    $("#phoneNumbers li").append("&nbsp;<i class='fa fa-phone fa-2'></i>");
    $("#twitterAccounts li").prepend("<i class='fa fa-twitter fa-2'></i>&nbsp;");
    $("#memberUrlResources li").prepend("<i class='fa fa-link fa-2'></i>&nbsp;");
    $("#publicProfileUrl").wrap("<div id='publicProfileUrlParent'></div>");
    $("#publicProfileUrlParent").prepend("<i class='fa fa-linkedin fa-2'></i>&nbsp;");
    $("#imAccounts li.imAccounts-gtalk").append("&nbsp;<i class='fa fa-google fa-2'></i>");
    $("#imAccounts li.imAccounts-skype").append("&nbsp;<i class='fa fa-skype fa-2'></i>");
    $("#imAccounts li:not(:has('i'))").append("&nbsp;<i class='fa fa-comments-o fa-2'></i>");
    $("#emailAddress").append("&nbsp;<i class='fa fa-envelope fa-2'></i>");
    $("#location").append("&nbsp;<i class='fa fa-globe fa-2'></i>");
    $("#mainAddress").append("&nbsp;<i class='fa fa-globe fa-2'></i>");
    $(".left-services").append($("#emailAddress,#location,#mainAddress,#phoneNumbers,#imAccounts"));
	$(".right-services").append($("#memberUrlResources,#twitterAccounts,#publicProfileUrlParent"));
    $("footer")
		.addClass("text-center")
		.wrapInner('<div class="footer-below"><div class="container"><div class="row"><div class="col-lg-12"></div></div></div></div>');
	$("#positions>.container>ul").replaceWith("<div class='timeline'>" + $("#positions>.container>ul").html() + "</div>");
	$("#positions>.container>.timeline>li").each(function () {
		$(this).replaceWith("<div class='row animateright animated zoomIn'><div class='col-xs-6'><span class='fa-stack fa-2x right'><i class='fa fa-circle fa-1x fa-stack-2x'></i><i class='fa fa-tags fa-stack-1x fa-inverse service-icon'></i></span><div class='left-content'><h3 class='work'>" + $(this).children(".title").text() + "</h3><h3 class='organization'>" + $(this).children(".company").text() + "</h3></div></div><div class='col-xs-6'><div class='right-content'><h3 class='work'>" + ($(this).children(".dates").html() ? $(this).children(".dates").html() : "") + "</h3><p>" + ($(this).children(".summary").html() ? $(this).children(".summary").html() : "") + "</p></div></div></div>");
	});
	$("#positions>.container>.timeline").append('<hr class="bottom">');
	
	$("#educations>.container>ul").replaceWith("<div class='timeline'>" + $("#educations>.container>ul").html() + "</div>");
	$("#educations>.container>.timeline>li").each(function () {
		$(this).replaceWith("<div class='row animateright animated zoomIn'><div class='col-xs-6'><span class='fa-stack fa-2x right'><i class='fa fa-circle fa-1x fa-stack-2x'></i><i class='fa fa-tags fa-stack-1x fa-inverse service-icon'></i></span><div class='left-content'><h3 class='work'>" + $(this).children(".degree").text() + "</h3><h3 class='organization'>" + $(this).children(".schoolName").text() + "</h3></div></div><div class='col-xs-6'><div class='right-content'><h3 class='work'>" + ($(this).children(".dates").html() ? $(this).children(".dates").html() : "") + "</h3><p>" + ($(this).children(".fieldOfStudy").html() ? $(this).children(".fieldOfStudy").html() : "") + "</p></div></div></div>");
	});
	$("#educations>.container>.timeline").append('<hr class="bottom">');
	
	$("section#recommendationsReceived").addClass("grey-area testimonial-section");
	$("section#recommendationsReceived>.container").addClass("animatezoomin");
	$("section#recommendationsReceived>.container>ul").replaceWith('<div class="row"><div class="col-sm-12"><div id="testimonials-2" class="slide testimonial testimonial-version1 animateright"><div class="carousel-inner">' + $("section#recommendationsReceived>.container>ul").html() + '</div></div></div></div>');
	$("section#recommendationsReceived .carousel-inner li").each(function () {
		$(this).replaceWith('<div class="item"><div class="textbox"><p class="reviewcomment" style="text-align:left">' + $(this).children(".recommendationText").html() + '</p></div><div class="fullwidth"><div class="testimonial-metadata"><h3>' + $(this).children(".recommender").text() + '</h3><br /></div></div></div>');
	});
	$("section#recommendationsReceived .carousel-inner").after('<div class="testimonial-control text-center"><a class="left  btn btn-primary btn-xs" href="#testimonials-2" data-slide="prev"><i class="fa fa-angle-left fa-2x"></i></a><a class="right btn btn-primary btn-xs" href="#testimonials-2" data-slide="next"><i class="fa fa-angle-right fa-2x"></i></a></div>');	
	$("section#recommendationsReceived>.container>div:first").replaceWith("<h2 class='main_heading animatezoomin animated zoomIn'>" + $("#recommendationsReceived .heading-text").text() + "</h2>");
	$("section#recommendationsReceived").prepend($("section#recommendationsReceived h2"));
	$("section#recommendationsReceived h2").after('<div class="gap-50"></div>');
	$("section#recommendationsReceived .item:first").addClass("active");
	$("section#recommendationsReceived").next("section").css("padding-top", "100px");
	
	if ($("#interests div:last").height()<40) $("#interests div:last").addClass("text-center");
	
    $("#designer")
        .attr("href", "http://themifycloud.com/downloads/resume-plus-responsive-one-page-template/")
        .text("ThemifyCloud");

    
    
    
    
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
		$('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
   $('.nav').click( function() {
       $('.navbar-collapse').removeClass('in');
   });
	$("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
	var $appeared = $('#appeared');
	var $disappeared = $('#disappeared');
	$('.animateup').appear();
	$(document.body).on('appear', '.animateup', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated fadeInUp');    
		})
	  });
	$('.animateleft').appear();
	$(document.body).on('appear', '.animateleft', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated fadeInLeft');    
		})
	  });
	$('.animateright').appear();
	$(document.body).on('appear', '.animateright', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated fadeInRight');    
		})
	  });
	  $('.animatezoomin').appear();
		$(document.body).on('appear', '.animatezoomin', function(e, $affected) {
		
	  
		$affected.each(function() {
			$(this).addClass('animated zoomIn');    
		})
	  });
    
	 $(".knob").knob({
                    draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

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
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });
        
        
        
		$("body,#content").show();
        $('body').scrollspy({target: '.navbar-fixed-top'});
		$("section:first").css('padding-top', $("#profileSections").height()+50);
		if ($("nav#profileLanguages").length) {
			var selected_language = $("nav#profileLanguages li.active").text();
			$("nav#profileLanguages li.active").remove();
			$("section#about").before('<div class="btn-group pull-right" id="profileLanguagesSelector" style="margin-top:' + $("#profileSections").height() + 'px"><button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">' +  selected_language + ' <span class="caret"></span></button><ul class="dropdown-menu" role="menu"></ul></div>');
			$("#profileLanguagesSelector ul").append($("nav#profileLanguages li"));
			$("nav#profileLanguages").remove();
		}
    });
});