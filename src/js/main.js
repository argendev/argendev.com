(function() {
  'use strict';

  console.log('JS loaded');

  // Vars.
  var $body = document.body;
  var pos = 0;
  var lastPos = 0;
  var $wrapper;
  var $bgs = [];
  var $bg;

  // Slideshow settings.
  var settings = {
    // Images (in the format of 'url': 'alignment').
    images: {
      // '../images/bg01.jpg': 'center',
      // '../images/bg02.jpg': 'center',
      // '../images/bg03.jpg': 'center'
    },

    // How long each image is visible for.
    delay: 6000
  };

  // Disable animations/transitions until everything's loaded.
  $body.classList.add('is-loading');

  window.addEventListener('load', function() {
    setTimeout(function() {
      $body.classList.remove('is-loading');
    }, 100);
  });

  // Slideshow Background.

  // Create background wrapper.
  $wrapper = document.createElement('div');
  $wrapper.id = 'bg';
  $body.appendChild($wrapper);

  for (var k in settings.images) {
    // Create BG.
    $bg = document.createElement('div');
    $bg.style.backgroundImage = 'url("' + k + '")';
    $bg.style.backgroundPosition = settings.images[k];
    $wrapper.appendChild($bg);

    // Add it to array.
    $bgs.push($bg);
  }

  // Main loop.
  $bgs[pos].classList.add('visible');
  $bgs[pos].classList.add('top');

  // Bail if we only have a single BG.
  if ($bgs.length == 1) return;

  setInterval(function() {
    lastPos = pos;
    pos++;

    // Wrap to beginning if necessary.
    if (pos >= $bgs.length) {
      pos = 0;
    }

    // Swap top images.
    $bgs[lastPos].classList.remove('top');
    $bgs[pos].classList.add('visible');
    $bgs[pos].classList.add('top');

    // Hide last image after a short delay.
    setTimeout(function() {
      $bgs[lastPos].classList.remove('visible');
    }, settings.delay / 2);
  }, settings.delay);
})();
