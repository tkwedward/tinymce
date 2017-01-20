$( document ).ready(function() {

  $("#claim").click(function(){
    $.getScript( "http://www.wknews.org/open_work_1/part_C.js")
  })

  $("#form_union").click(function(){
    $.getScript( "http://www.wknews.org/open_work_1/part_B.js")
  })

  $("#form_union").click(function(){
    $.getScript( "http://www.wknews.org/open_work_1/open_work.js")
  })

  //Part_B
      $(".part_B_navbar_one").siblings().hide()


      $(".part_B_nav ul li").click(function(){
        s = $(this).attr('id')
        // $(".part_B_moon").hide();

        selector = $("."+s);
        console.log(selector)
        $(selector).siblings().hide();
        $(selector).show();

      })
  })
