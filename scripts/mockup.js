/* Show/Hide mobile alert banner */
$(window).on('resize', function(){
    var win = $(this);
    if (win.width() < 768) { 
        $("#mobile-alert").addClass("show");
        $("#mobile-alert").css("display", "block");
    } else {
        $("#mobile-alert").removeClass("show");
        $("#mobile-alert").css("display", "none");
    }
});

// Trigger #mobile-alert on load
window.dispatchEvent(new Event('resize'));

// Animate elements
gsap.fromTo(".proto-wrapper", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1.5});
gsap.fromTo("footer", {opacity: 0, y: 100}, {opacity: 1, y: 0, duration: 1.5, delay: 1.5});