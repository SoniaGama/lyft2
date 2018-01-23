var buttonSingUp = $('.sign-up');

function loadPage() {
   // comienza con una vista splash y se remueve la clase d-none para que
   // muestre el contenido
  $(".section-fade-out").fadeOut(2000, function(){
  $(".main-section").removeClass("d-none");
  });
}


$(document).ready(loadPage);
