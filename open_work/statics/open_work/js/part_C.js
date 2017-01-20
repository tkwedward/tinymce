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

      //Part_C

      // $(".part_C_moon").hide()
      // $(".part_C_page_1").show()
      // $(".part_C_q1").siblings().hide()

      $(".part_C_q1 .yes").click(function(){
        $(".part_C_q2").html("
          你在以下哪種情況受傷？\
            <button class='yes'> 工作期間、交通、打風 </button>\
            <button class = 'no'> 其他 </button>")// <!-- if 工傷者，進入工傷check box -->
        $(".part_C_q2").show();
      })

      $(".part_C_q1 .no").click(function(){
        $(".family_chicken_soup").show()
      })

      $(".part_C_q2_1 .yes").click(function(){
        $(".worker_chicken_soup").show()
      })

      $(".part_C_q2_1 .no").click(function(){
        $(".help_phone").show()
      })

      $(".part_C_navbar_one").siblings().hide()

      $(".part_C_nav ul li").click(function(){
        s = $(this).attr('id')
        selector = $("."+s);
        console.log(selector["selector"])
        $(selector).siblings().hide();
        $(selector["selector"]).show();
      })


})//end of ready funciton
