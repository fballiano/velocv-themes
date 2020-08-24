require(["//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js"], function () {
    $("body").prepend('' +
        '<article class="resume-wrapper text-center position-relative">' +
            '<div class="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">' +
                '<header class="resume-header pt-4 pt-md-0">' +
                    '<div class="media flex-column flex-md-row">' +
                        '<div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">' +
                            '<div class="primary-info"></div><div class="secondary-info ml-md-auto mt-2"></div>' +
                        '</div>' +
                    '</div>' +
                '</header>' +
                '<div class="resume-body p-5">' +
                    '<div class="row">' +
                        '<div class="col-lg-9"></div><div class="col-lg-3"></div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</article>');
    $("footer").addClass("footer text-center pt-2 pb-5").wrapInner("<small />");
    $("#profileSections").remove();

    $(".dates .endDate").each(function () {
        if ($(this).prev().text()) {
            $(this).prepend("&nbsp;-&nbsp;");
        }
    });
    $(".dates").each(function () {
        $(this).replaceWith('<div class="dates">' + $(this).text() + '</div>');
    });

    $("#email").prepend("<i class='fa fa-envelope-o fa-2'></i>&nbsp;&nbsp;");
    $("#phone").prepend("<i class='fa fa-phone fa-2'></i>&nbsp;&nbsp;");
    $("#countryCode").append("&nbsp;&nbsp;<i class='fa fa-globe fa-2'></i>");
    $("#website").prepend("<i class='fa fa-link fa-2'></i>&nbsp;&nbsp;");
    $("#profiles a").each(function () {
        $(this).prepend("<i class='fa fa-" + $(this).prop("class") + " fa-2'></i>&nbsp;&nbsp;");
    });

    $("h1").addClass("name mt-0 mb-1 text-white text-uppercase text-uppercase").appendTo(".primary-info");
    $("h2").appendTo(".primary-info").replaceWith('<div class="title mb-3">' + $("h2").text() + '</div>');
    $("#picture").addClass("mr-3 img-fluid picture mx-auto").prependTo("header>.media:first");
    $("#summary").addClass("resume-section summary-section mb-5").wrapInner('<div class="resume-section-content"><p class="mb-0"></p></div>').prependTo(".resume-body");
    $('<ul class="list-unstyled" />').appendTo(".primary-info");
    $('#email').wrap("<li />").parent().appendTo(".primary-info ul");
    $('#phone').wrap("<li />").parent().appendTo(".primary-info ul");
    if ($("#profiles").length == 0) $('<ul id="profiles" />').appendTo("body");
    $('#website').wrap("<li></li>").parent().prependTo("#profiles");
    $('#profiles').addClass("resume-social list-unstyled").appendTo(".secondary-info");
    $('.primary-info li').addClass('mb-2');
    $('#profiles li').addClass('mb-3');

    $('#work').addClass("mb-5").appendTo('.resume-body .col-lg-9');
    $('#volunteer').addClass("mb-5").appendTo('.resume-body .col-lg-9');
    $('#publications').addClass("mb-5").appendTo('.resume-body .col-lg-9');
    $('#projects').addClass("mb-5").appendTo('.resume-body .col-lg-9');
    $('#skills').appendTo('.resume-body .col-lg-3');
    $('#education').appendTo('.resume-body .col-lg-3');
    $('#awards').appendTo('.resume-body .col-lg-3');
    $('#languages').appendTo('.resume-body .col-lg-3');

    $("section>h3").addClass("resume-section-title text-uppercase font-weight-bold pb-3 mb-3");

    $("#work h3, #volunteer h3, #publications h3, #projects h3").after('<div class="resume-section-content"><div class="resume-timeline position-relative"></div></div>');
    $("#work>ul>li, #volunteer>ul>li, #publications>ul>li, #projects>ul>li").each(function () {
        $(this).parent().parent().find(".resume-timeline").append('<article class="resume-timeline-item position-relative pb-5"><div class="resume-timeline-item-header mb-2"><div class="d-flex flex-column flex-md-row">' + $(this).html() + '</div></div></article>');
    });
    $("#work .position, #volunteer .position, #publications .name, #projects .name").addClass("resume-position-title font-weight-bold mb-1");
    $("#work .company, #volunteer .organization, #publications .publisher").addClass("resume-company-name ml-auto").each(function () {
        $(this).insertAfter($(this).parent().children(".position"));
    });
    $("#work .summary, #volunteer .summary, #publications .summary, #projects .description").each(function () {
        $(this).insertAfter($(this).parent().parent());
    });
    $("#work .website, #volunteer .website, #publications .website, #projects .website").each(function () {
        $(this).insertAfter($(this).parent().parent());
    });
    $("#work .dates, #volunteer .dates, #publications .dates, #projects .dates").each(function () {
        $(this).insertAfter($(this).parent());
    });
    $("#work .dates, #volunteer .dates, #publications .dates, #projects .dates").addClass("resume-position-time");
    $("#work .summary, #volunteer .summary, #publications .summary, #projects .description").addClass("resume-timeline-item-desc").wrapInner("<p />");

    $("#awards ul, #languages ul").addClass("list-unstyled resume-awards-list");
    $("#awards li").addClass("mb-2 pl-4 position-relative").prepend('<i class="resume-award-icon fa fa-trophy position-absolute" data-fa-transform="shrink-2"></i>');
    $("#awards h4").each(function () {
        $(this).parent().children(".summary").addClass("resume-award-desc");
        $(this).replaceWith('<div class="resume-award-name">' + $(this).text() + '</div>');
    });

    $("#languages li").addClass("mb-2");
    $("#languages .language").each(function () {
        $(this).replaceWith('<span class="resume-lang-name font-weight-bold">' + $(this).text() + '</span>');
    });
    $("#languages .fluency").each(function () {
        $(this).replaceWith('<br /><small class="text-muted font-weight-normal">(' + $(this).text() + ')</small>');
    });

    $("#skills>ul").addClass("list-inline");
    $("#skills>ul>li").addClass("list-inline-item");
    $("#skills>ul>li>div.name").addClass("badge badge-light");

    $("#education>ul").addClass("list-unstyled").wrap('<div class="resume-section-content" />');
    $("#education .resume-section-content>ul>li").addClass("mb-2");
    $("#education .dates").addClass("resume-degree-time");
    $("#education h4.studyType").each(function () {
        $(this).replaceWith('<div class="resume-degree font-weight-bold">' + $(this).text() + '</div>');
    })
    $(".col-lg-3 h4.institution").each(function () {
        $(this).insertAfter($(this).parent().children(".resume-degree"));
        $(this).replaceWith('<div class="resume-degree-org">' + $(this).text() + '</div>');
    })

    $("#profileLanguages").prependTo("body");
    $("#profileLanguages ul").addClass("list-inline");
    $("#profileLanguages li").addClass("list-inline-item");

    $(".resume-body .col-lg-9 section:last").removeClass("mb-5");
    $("#basics, #awards .awarder, #awards .dates, #work>ul, #volunteer>ul, #publications>ul, #projects>ul, #references, #education .area, #education .gpa, #work>.summary, #volunteer>.summary, #publications>.summary, #work>.website, #volunteer>.website, #publications>.website").remove();

    $("#designer")
        .attr("href", "https://themes.3rdwavemedia.com/bootstrap-templates/resume/free-bootstrap4-resume-cv-template-for-developers-pillar/")
        .text("3rd Wave Media");

    $("body").show();
});
