/* Common translations across all pages */
let ui_locales = {
    "Enabled": 
    {
        "en": "Enabled",
        "es": "Activado",
        "fr": "Activé",
        "de": "Ermöglicht"
    },
    "Disabled": {
        "en": "Disabled",
        "es": "Discapacitado",
        "fr": "Désactivé",
        "de": "Behinderte"
    }
}

/* Get font size based on preferences */
function setFontSize() {
    let accessibleText = "a, button:not('.text-size-toggle'), h1, h2, h3, h4, h5, h6, li, p, th, tr, td, span";

    switch(Cookies.get('fontSize')) {
        case "sm":
            $("#text-size-sm").addClass("btn-primary");
            $("#text-size-rg").removeClass("btn-primary");
            $("#text-size-lg").removeClass("btn-primary");

            $("#text-size-sm").removeClass("btn-default");
            $("#text-size-rg").addClass("btn-default");
            $("#text-size-lg").addClass("btn-default");

            $(accessibleText).addClass("font-size-sm");
            $(accessibleText).removeClass("font-size-lg");
            break;
        case "lg":
            $("#text-size-sm").removeClass("btn-primary");
            $("#text-size-rg").removeClass("btn-primary");
            $("#text-size-lg").addClass("btn-primary");

            $("#text-size-sm").addClass("btn-default");
            $("#text-size-rg").addClass("btn-default");
            $("#text-size-lg").removeClass("btn-default");

            $(accessibleText).removeClass("font-size-sm");
            $(accessibleText).addClass("font-size-lg");
            break;
        default:
            $("#text-size-sm").removeClass("btn-primary");
            $("#text-size-rg").addClass("btn-primary");
            $("#text-size-lg").removeClass("btn-primary");

            $("#text-size-sm").addClass("btn-default");
            $("#text-size-rg").removeClass("btn-default");
            $("#text-size-lg").addClass("btn-default");
            
            $(accessibleText).removeClass("font-size-sm");
            $(accessibleText).removeClass("font-size-lg");
            break;
    }
};

/* Get dark mode based on preferences */
function setDarkMode() {
    let accessibleElements = "a, body, button, h1, h2, h3, h4, h5, h6, .alert, .breadcrumb-item.active,"
    + ".card-block, .card-header, .dropdown-menu, .fas, .list-group-item, .text-secondary";
    
    if(Cookies.get('darkMode') == "true") {
        $("#dark-mode-toggle").addClass("btn-success");
        $("#dark-mode-toggle").removeClass("btn-default");
        $("#dark-mode-toggle").text(ui_locales['Enabled'][Cookies.get('lang')]);

        $(accessibleElements).addClass("darkmode");
    } else {
        $("#dark-mode-toggle").addClass("btn-default");
        $("#dark-mode-toggle").removeClass("btn-success");
        $("#dark-mode-toggle").text(ui_locales['Disabled'][Cookies.get('lang')]);
        
        $(accessibleElements).removeClass("darkmode");
    }
}

/* Toggle clickable buttons */
$(".btn-toggle").on("click", function(){
    if ($(this).hasClass("btn-success")) {
        $(this).toggleClass("btn-default btn-success");
        $(this).text(ui_locales['Disabled'][Cookies.get('lang')]);
    } else {
        $(this).toggleClass("btn-default btn-success");
        $(this).text(ui_locales['Enabled'][Cookies.get('lang')]);
    }
  });

/* Set font size preferences */
$("#text-size-sm").on("click", function() {
    Cookies.set('fontSize', 'sm');
    setFontSize()
});
$("#text-size-rg").on("click", function() {
    Cookies.set('fontSize', 'rg');
    setFontSize()
});
$("#text-size-lg").on("click", function() {
    Cookies.set('fontSize', 'lg');
    setFontSize()
});

/* Set dark mode preferences */
$("#dark-mode-toggle").on("click", function() {
    if($(this).hasClass("btn-success")) {
        Cookies.set('darkMode', 'true');
        setDarkMode();
    } else {
        Cookies.set('darkMode', 'false');
        setDarkMode();
    }
});

/* Set language preferences */
$("#lang_en").on("click", function() {
    Cookies.set('lang', 'en');
    location.reload();
});
$("#lang_es").on("click", function() {
    Cookies.set('lang', 'es');
    location.reload();
});
$("#lang_fr").on("click", function() {
    Cookies.set('lang', 'fr');
    location.reload();
});
$("#lang_de").on("click", function() {
    Cookies.set('lang', 'de');
    location.reload();
});

/* News Sort */
$("#news-sort").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $("#news-list").isotope({ filter: filterValue });
});

/* Notifications Sort */
$("#notification-sort").on("click", "button", function() {
    var filterValue = $(this).attr("data-filter");
    $("#notification-list").isotope({ filter: filterValue });
});

/* Mark notifcation read/unread */
$("#notification-list > .list-group-item").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("unread active");
});

/* Run on window ready */
$(window).on("load", function() {

    /* Default cookies */
    if (Cookies.get('lang') == undefined)
        Cookies.set('lang', 'en');

    /* Initalize accessibility features */
    setFontSize();
    setDarkMode();
});