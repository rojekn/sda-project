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
    $(function () {

        var sending = false;
        $('#contactform').on('submit', function (e) {
            var $form = $(this), $submit = $('button[type="submit"]', $form);

            e.preventDefault();

            if (sending) {
                return false;
            }

            $('.form-error', $form).remove();

            $('input, textarea', $form).prop('readonly', true);
            $submit.val('Wysyłam…');
            sending = true;

            $.post($form.attr('action'), $form.serialize(), function (data) {
                if (data === 'ok') {
                    $form.slideUp('fast', function () {
                        $form.after('<div class="form-success">Wiadomość została wysłana! Skontaktujemy się z Tobą jak tylko to będzie możliwe.</div>');
                    });

                    return true;
                }

                $form.prepend('<div class="form-error">Wystąpił błąd podczas wysyłania formularza. Upewnij się, że wypełniłeś wszystkie pola i poprawnie rozwiązałeś działanie.</div>');
                $('input, textarea', $form).prop('readonly', false);
                $submit.val('Wyślij wiadomość');
                sending = false;

                return false;
            }, 'text');
        });
    });



})
