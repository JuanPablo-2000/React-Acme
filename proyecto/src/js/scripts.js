/*------------------------------------- Inicio -----------------------------------------*/
import $ from 'jquery'

(function () {
    $(".tt-fullHeight").height($(window).height());

    $(window).resize(function(){
        $(".tt-fullHeight").height($(window).height());
    });

}());

/*------------------------------------- Animacion de scroll -----------------------------------------*/
(function () {
    $('a[href*=\\#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
    });
}());

/*------------------------------------- Buscador - Vacio  -----------------------------------------*/
(function (){
    if($('buscador').val === "") {
        console.log("Esta vacio");
    }else {
        console.log("Tiene informacion");
    }    
}());

/*------------------------------------- Tipo de persona  -----------------------------------------*/
(function (){
    $(".opcion").change(function() {
        console.log("GHola", this.val);
    })            
}());


/*------------------------------------- Datepicker  -----------------------------------------*/

/*------------------------------------- Login Toolpid  -----------------------------------------*/
(function() {    
    window.addEventListener('load', function() {              
      let forms = $('.form_login');
      // Loop over them and prevent submission
      let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });      
    }, false);    
  })();
