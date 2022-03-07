$(document).ready(function() {

  $(document).on('click', '.theme', function(){
    $(this).toggleClass('active');
    $('html').toggleClass('dark');
  });

  $(document).on('click', '.burder', function(){
    $('.sidebar').toggleClass('active');
  });

});