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

  // Spoiler
  $(document).on('click', '.more', function(){
    $(this).toggleClass('active');
    $(this).closest('.spoiler').toggleClass('active');
  });

  // Menu
	$(document).on('click', '.link', function() {
    $('.link, .sidebar').removeClass('active');
    $('#content').addClass('loading');
    var Class = $(this).data('class');
    $(this).addClass('active');
    $.ajax({
      url: $(this).attr('href'),
      cache: false,
      success: function(html){
        $('body').removeClass().addClass(Class);
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