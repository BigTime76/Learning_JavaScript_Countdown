// "use strict";

/*
 *
 * todo: RESIZE IS PROOF OF CONCEPT ONLY!
 * Eventually switch this over to CSS3 standard
 * https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries
 *
 */
var windowsize = $(window).width();

$(window).resize(function() {
    windowsize = $(window).width();

    if (windowsize < 600) {
        $("#myCSS").attr("href", "css/narrow.css");
            } else {
        $("#myCSS").attr("href", "css/mystyles.css");
    }
});

//force window size check at load to kick in if statement
$(window).resize();

/* For countdown timer
 *
 * set these in <script> tag </script> at the top of the page with the numbers you want to track.
 *             var countZone = 0;
 *             var countYear = 2808;
 *             var countMonth = 11; // base 0
 *             var countDay = 1;
 *             var countHour = 0;
 *             var countMin = 0; // base 0
 *             var countSec = 0;
 *
 * UTCDate format = timezone(0=gmt), year(nnnn), month(0-11), day(1-31), hour(0-23), mins(0-59), secs(0-59)
 */

$(document).ready(function() {
    $('#counter').countdown({
        until : $.countdown.UTCDate(countZone, countYear, countMonth, countDay, countHour, countMin, countSec),
        format : 'YODHMS',
        significant : 5,
        padZeroes : true,
        layout : '{y<}{yn} {yl}{y>}{o<} {on} {ol}<br>{o>} {dn} {dl} {hnn}{sep}{mnn}{s<}{sep}{snn}{s>}'
    });
});

// Shy menu Setup
$(function() {

    initDropDowns($("div.shy-menu"));

});

function initDropDowns(allMenus) {

    allMenus.children(".shy-menu-hamburger").on("click", function() {

        var thisTrigger = jQuery(this),
            thisMenu = thisTrigger.parent(),
            thisPanel = thisTrigger.next();

        if (thisMenu.hasClass("is-open")) {

            thisMenu.removeClass("is-open");

            jQuery(document).off("click");
            thisPanel.off("click");

        } else {

            allMenus.removeClass("is-open");
            thisMenu.addClass("is-open");

            jQuery(document).on("click", function() {
                allMenus.removeClass("is-open");
            });
            thisPanel.on("click", function(e) {
                e.stopPropagation();
            });
        }

        return false;
    });
}



/**
 * @author BigTime
 */