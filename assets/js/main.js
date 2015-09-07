$(document).ready(function() {
    $('body').scrollspy({
        target: ".navbar",
        offset: 85
    });
    
    $("#header a").on('click', function(event) {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash (#)
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 80
        }, 800, function() {

            // Add hash (#) to URL when done scrolling (default click behavior)
            //window.location.hash = hash;
        });
    });
});
