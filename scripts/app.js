/* Set font size based on preferences*/
function setFontSize() {
    let accessibleText = "a, button:not('.text-size-toggle'), h1, h2, h3, h4, h5, h6, p";

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

/* Toggle clickable buttons */
$(".btn-toggle").on("click", function(){
    if ($(this).hasClass("btn-success")) {
        $(this).addClass("btn-default");
        $(this).removeClass("btn-success");
        $(this).text("Disabled");
    } else {
        $(this).addClass("btn-success");
        $(this).removeClass("btn-default");
        $(this).text("Enabled");
    }
  });

/* Toggle font size buttons */
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

setFontSize()
