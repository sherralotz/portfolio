$(function(){
    $('#animateBtn').click(function(){ 
      animate('#anim-head', 'rubberBand');
      return false;
    }); 
    // Animate
    function animate(element, animation){
      $(element).addClass('animated '+animation);
      var wait = setTimeout(function(){
        $(element).removeClass('animated '+animation);
      }, 1000);
    }
  });
  
  
  (function() {
    var elements;
    var windowHeight;
  
    function init() {
      elements = document.querySelectorAll('.hidden');
      windowHeight = window.innerHeight;
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var positionFromTop = elements[i].getBoundingClientRect().top;
  
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('fade-in-element');
          element.classList.remove('hidden');
        }
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  
    init();
    checkPosition();
  })();