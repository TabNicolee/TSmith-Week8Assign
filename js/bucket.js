$(document).ready(function() {

  // $('.card').addClass('border-red');

  $("a.btn").click(function() {
     $(".jumbotron").toggle('pulsate',1400); // jQuery UI effect 'pulsate'
     $('h1').text('Hello there!');
  });

  $('.jumbotron').hide().delay(100).fadeIn(1250);

  // jQuery UI Widgets

  $( "#tabs" ).tabs();
  $( "#accordion" ).accordion();

});
