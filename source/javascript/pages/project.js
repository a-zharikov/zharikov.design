$(document).ready(function () {
  var gallerId = $('.project__screen').click(function() {(this.id);});
  $(gallerId).lightGallery({
    hash: false,
    share: false,
    autoplay: false,
    download: false,
    rotate: false,
    thumbnail: true,
    selector: 'a',
    thumbWidth: 80,
    thumbMargin: 0,
  });
});