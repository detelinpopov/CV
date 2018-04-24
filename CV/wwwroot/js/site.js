$(document).ready(function () {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal(".scroll-reveal", { duration: 1000, mobile: true });

    $("#expand-country").click(function () {
        if ($("#divMap").is(':hidden')) {
            $("#divMap").show(1200);
        } else {
            $("#divMap").hide(1200);
        }
    });

    $("#expand-pariplay-info").click(function () {
        if ($("#pariplay-info").is(':hidden')) {
            $("#pariplay-info").show("slow");          
        } else {
            $("#pariplay-info").hide("slow");          
        }
    });

    $(".imageRotator").bannerRotator({
        width: 600,
        height: 300,
        cpanelPosition: "right bottom",
        navButtons: "large",
        navThumbs: true,
        thumbnails: "none",
        tooltip: "image",
        depth: "auto",
        kbEffect: "random"
    });

    $(".code-image-rotator").bannerRotator({
        width: 600,
        height: 400,
        cpanelPosition: "right bottom",
        navButtons: "large",
        navThumbs: true,
        tooltip: "image",
        depth: "auto",
        kbEffect: "random"
    });
});