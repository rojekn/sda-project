$(document).ready(function () {

    $(document).scroll(function () {
        var $navbar = $('.navbar');
        if ($(document.body).scrollTop() > 0) {
            $navbar.css({ 'background-color': '#555', 'opacity': '0.8', 'transform': 'scale(1, 0.8)', 'top': '-10px' });
        } else {
            $navbar.css({ 'background-color': 'transparent', 'transform': 'scale(1, 1)', 'top': '0px' });
        }
    });

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    (function() {
        var $form = $('#contact-form');
        if(document.location.hash !== '#send') {
            $form.slideDown(); 
        } else {
            $('#contact h2').slideUp();
            $form.slideUp();
            $form.after('<div class="form-success" style="font-size:25px">Wiadomość została wysłana!</div>');
        };
    })(); 
    
})
