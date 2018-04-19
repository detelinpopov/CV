$(document).ready(function() {
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
        cpanelPosition: "center bottom",
        navButtons: "large",
        navThumbs: true,
        tooltip: "image",
        depth: "auto",
        kbEffect: "random"
    });
});