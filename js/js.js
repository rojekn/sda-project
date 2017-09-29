$(document).ready(function () {

    $(document).on("scroll", onScroll);

    $(document).scroll(function () {
        var $navbar = $('.navbar');
        if ($(document).scrollTop() > 0) {
            $navbar.css({ 'background-color': '#555', 'opacity': '0.8', 'transform': 'scale(1, 0.8)', 'top': '-10px' });
        } else {
            $navbar.css({ 'background-color': 'transparent', 'transform': 'scale(1, 1)', 'top': '0px' });
        }
    });

    $('.navbar-nav li a, .fastMenu a').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('.navbar-nav li a, .fastMenu a').removeClass('active');
            $(this).addClass('active');
            $('html, body').animate({
                scrollTop: target.offset().top - 50,
            }, 1000, function () {
            // document.location.hash = target.selector;
            $(document).on("scroll", onScroll)
        });
        }
    });
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.navbar-nav li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            
            if (refElement.position().top - 50 <= scrollPos) {
                $('.navbar-nav li a').removeClass("active");
                currLink.addClass("active");
            }
            else if (scrollPos === document.body.offsetHeight - window.innerHeight) {
                $('.navbar-nav li a').removeClass("active");
                $(currLink.attr("href", "#contact")).addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }

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
