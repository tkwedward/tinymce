$(document).ready(function(){
  $("li").click(function(){
    $(this).addClass("highlight").removeClass("unhighlight");
    $(this).siblings().removeClass("highlight").addClass("unhighlight");
  })//end of list click

  $('[data-role="collapsible"]').click(function(){
    if($("p", this).hasClass("close")){
        $('[data-role="collapsible"] p').removeClass("open").addClass("close")
        $('[data-role="collapsible"] h2').removeClass("open").addClass("close")
        // alert('one');
        $("p", this).addClass("open").removeClass("close");
        $("h2", this).addClass("open").removeClass("close");
        // alert('tow');
    }

    // $("p", this).addClass("close").removeClass("open")
  })//end of collapsible

})//end of ready
