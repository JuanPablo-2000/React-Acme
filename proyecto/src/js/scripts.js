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
/*------------------------------------- Inicio -----------------------------------------*/
import $ from 'jquery'

(function () {
    $(".tt-fullHeight").height($(window).height());

    $(window).resize(function(){
        $(".tt-fullHeight").height($(window).height());
    });

}());
