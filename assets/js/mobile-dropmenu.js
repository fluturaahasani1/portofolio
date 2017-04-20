$(document).ready(function(){dropMenu();});

function dropMenu () {
  $('.toggleMenu').click(function(e){
      e.stopPropagation();
    $(".kioskNav").slideToggle();          
  });
function closeMenu(){
  $('.kioskNav').slideUp(500);
}
  
$(document.body).click( function(e) {
     closeMenu();
});

$('.kioskNav').click( function(e) {
    e.stopPropagation();
});

}

function dropMenu () {
  $('.kategoritmenu').click(function(e){
      e.stopPropagation();
    $(".kategoitnav").slideToggle();          
  });
function closeMenu(){
  $('.kategoitnav').slideUp(500);
}
  
$(document.body).click( function(e) {
     closeMenu();
});

$('.kategoitnav').click( function(e) {
    e.stopPropagation();
});

}