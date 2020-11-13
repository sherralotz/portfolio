$(function(){  
    var animation = bodymovin.loadAnimation({
      container: document.getElementById('main-anim'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'data.json'
    })
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

  document.querySelector('.toggle').addEventListener('click', function() {
    $(this).find(".icon").addClass("animateicon");
    $(this).find(".icon").toggleClass("fa-sun fa-moon");  
    $(this).find(".icon").toggleClass("text-white", $(this).find(".icon").hasClass("fa-moon"));  
    $("body").toggleClass("lightmode darkmode");     
}); 
