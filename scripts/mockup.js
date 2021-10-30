
/* Show/Hide mobile alert banner */
$(window).on('resize', function(){
    var win = $(this);
    if (win.width() < 768) { 
        $("#mobile-alert").addClass("show");
    } else {
        $("#mobile-alert").removeClass("show");
    }
});