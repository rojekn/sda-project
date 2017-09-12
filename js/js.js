$(document).ready(function(){
    
    $(document).scroll(function(){
        var $navbar = $('.navbar');
        if($(document.body).scrollTop() > 0) {
            $navbar.css({'background-color': '#555', 'transform': 'scale(1, 0.8)', 'top': '-10px'});
        } else {
             $navbar.css({'background-color': 'transparent', 'transform': null, 'top': '0px'});
        }
    })
})