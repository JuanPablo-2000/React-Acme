<<<<<<< HEAD
//import $ from 'jquery'
/*
(function () {
    $('.header').sticky({
        topSpacing: 0
    });

    $('body').scrollspy({
        target: '.navbar-custom',
        offset: 70
    })
}());
*/
=======
/*------------------------------------- Inicio -----------------------------------------*/
import $ from 'jquery'

(function () {
    $(".tt-fullHeight").height($(window).height());

    $(window).resize(function(){
        $(".tt-fullHeight").height($(window).height());
    });

}());
>>>>>>> f6d4e2f32f2803e2ecf9f002ce7b822050f62522
