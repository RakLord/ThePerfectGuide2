
$(document).ready(function() {
    console.log("Ready");

    let headerScrollGlossary = $("#header-scroll-glossary");
    let sectionGlossary = $("#section--glossary");

    headerScrollGlossary.on("click", function() {
        $(window).scrollTo(sectionGlossary, 500);
    });
});