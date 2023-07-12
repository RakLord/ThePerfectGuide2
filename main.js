
$(document).ready(function() {
    console.log("Ready");

    let headerScrollGlossary = $("#header-scroll-glossary");
    let headerScrollIndex = $("#header-scroll-index");
    let headerScrollEarly = $("#header-scroll-early");
    let headerScrollMid = $("#header-scroll-mid");
    let headerScrollEarlyLate = $("#header-scroll-early-late");
    let headerScrollEnd = $("#header-scroll-end");

    let sectionGlossary = $("#section--glossary");
    let sectionIndex = $("#section--index");
    let sectionEarly = $("#section--early");
    let sectionMid = $("#section--mid");
    let sectionEarlyLate = $("#section--early-late");
    let sectionEnd = $("#section--end");

    headerScrollGlossary.on("click", function() {
        $(window).scrollTo(sectionGlossary, 500);
    });
    headerScrollIndex.on("click", function() {
        $(window).scrollTo(sectionIndex, 500);
    });
    headerScrollEarly.on("click", function() {
        $(window).scrollTo(sectionEarly, 500);
    });
    headerScrollMid.on("click", function() {
        $(window).scrollTo(sectionMid, 500);
    });
    headerScrollEarlyLate.on("click", function() {
        $(window).scrollTo(sectionEarlyLate, 500);
    });
    headerScrollEnd.on("click", function() {
        $(window).scrollTo(sectionEnd, 500);
    });
});