$(document).ready(function(){

  $(document).on('pageshow', 'div[data-role*="page"],div[data-role*="dialog"]', function () {
     (function () {
        var script = document.createElement('script'); script.type = 'text/javascript'; script.async = true;
        script.src = 'http://127.0.0.1:8000/static/js/open_work.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
    })();
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

  k = $( window ).width();
  console.log(k);
  $(window).load(function(){
      $('#loading').hide(1000);
    });

  if (k < 500 || isMobile.any()){


    $.getScript("https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js", function(){
    });
  }

})
