$(document).ready(function() {
    $("#expand-country").click(function () {
        if ($("#divMap").is(':hidden')) {
            $("#divMap").show(1500);
        } else {
            $("#divMap").hide(1500);
        }
    });

    $("#expand-pariplay-info").click(function () {
        if ($("#pariplay-info").is(':hidden')) {
            $("#pariplay-info").show("slow");          
        } else {
            $("#pariplay-info").hide("slow");          
        }
    });

    $("#imageRotator").bannerRotator({
        width: 700,
        height: 400,
        cpanelPosition: "center bottom",
        navButtons: "large",
        navThumbs: true,
        tooltip: "image",
        depth: "auto",
        kbEffect: "random"
    });
});