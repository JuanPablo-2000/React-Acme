/*------------------------------------- Inicio -----------------------------------------*/
import $ from 'jquery'

(function () {
    $(".tt-fullHeight").height($(window).height());

    $(window).resize(function(){
        $(".tt-fullHeight").height($(window).height());
    });

}());
