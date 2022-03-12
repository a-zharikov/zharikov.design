$(document).ready(function() {

  // Toggle theme
  $(document).on('click', '.theme', function(){
    $(this).toggleClass('active');
    $('html').toggleClass('dark');
  });

  // Burger menu
  $(document).on('click', '.burder', function(){
    $('.sidebar').toggleClass('active');
  });

  // Menu
	$(document).on('click', '.link', function() {
    $('.link').removeClass('active');
    $('#content').addClass('loading');
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    $(this).addClass('active');
    $.ajax({
      url: $(this).attr('href'),
      cache: false,
      success: function(html){
        $("#content").removeClass('error');
        $("#content").removeClass('loading').html(html);
      },
      error: function(html) {
        $("#content").addClass('error');
      }
    });
    return false;
  });

});