$(document).ready(function() {
  k = $(window).width();
  // if (k > 500){
  //   $("#mobile_version").hide();
  //   $(".part_B, .part_C").hide();
  //
  // }// if k > 500

  if (k < 501){
    $("#desktop_version").empty();
    $("#form_result").children().hide();
  }



  $("#claim").click(function(){
    $.getScript( "http://www.wknews.org/open_work_1/open_work.js")
  })

  $("#form_union").click(function(){
    $.getScript( "http://www.wknews.org/open_work_1/open_work.js")
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
      // console.log(selector)
      $(selector).siblings().hide();
      $(selector).show();

    })



























    //Part_C
    $(".part_C_moon").hide()
    $(".part_C_page_1").show()
    $(".part_C_q1").siblings().hide()
    $(".part_C_q1 .yes").click(function(){
      $(".part_C_q2").html(
        "<hr>2. 你在以下哪種情況受傷？\
          <button class='yes'> 工作期間、交通、打風 </button>\
          <button class = 'no'> 其他 </button>").enhanceWithin()// <!-- if 工傷者，進入工傷check box -->
      $(".part_C_q2").show();

      $(".part_C_q2 .yes").on('click', function(){
        $(".part_C_q3").html("<hr>3. 唔小心受傷都系工傷，需要保障<button>繼續</button>" ).enhanceWithin()// <!-- if 工傷者，進入工傷check box -->
        $(".part_C_q3").show();
      })

      $(".part_C_q2 .no").on('click', function(){
        $(".part_C_q3").html("<hr>3. 彈出求助電話，叫佢問清楚佢個情況算唔算工傷<button>繼續</button>" ).enhanceWithin()// <!-- if 工傷者，進入工傷check box -->
        $(".part_C_q3").show();
      })

    })//q1︰工傷者


    $(".part_C_q1 .no").click(function(){
      $(".part_C_q2, .part_C_q3").empty()
      $(".part_C_q2").html("<hr>工傷者在追討過程中極需要家人支援<button class='continue'>繼續</button>").enhanceWithin()// <!-- if 工傷者，進入工傷check box -->
      $(".part_C_q2").show();
      $(".continue").on('click', function(){
        $("#part_C_navbar_two").trigger( "click" );
      })
    })


    $(".part_C_navbar_one").siblings().hide()

    $(".part_C_nav ul li").click(function(){
      s = $(this).attr('id')
      selector = $("."+s);
      // console.log(selector["selector"])
      $(selector).siblings().hide();
      $(selector["selector"]).show();
    })










    //開始時，頁首的畫面
    $(".part_A_moon").hide()
    $(".part_A_page_1").show();

    //part_A_page_1.js
    //control the form of first page

    $(".four_one_eight_submit").click(function(){
        $(".part_A_page_1").hide();

        var y = ""
        // y += "<div data-role='collapsible-set'>"

      // Question_2
        if($('#back_pay').hasClass('ui-checkbox-on')) {
          y += "<div data-role='collapsible' data-collapsed='true'>\
          <h2>2. 欠薪</h2>\
            <p>老闆是否破產走佬？\
            <div class='Question_2' data-role='controlgroup' data-type='horizontal'>\
            <label for='q2_answer_yes'>是</label>\
            <input type='radio' id='q2_answer_yes' name='answer'>\
            <label for='q2_answer_no'>否</label>\
            <input type='radio' id='q2_answer_no' name='answer'>\
            </div>\
            <button class='submit'>提交</button></p>\
          </div>"
        }

      // Question_3
        if($('#holiday_wage').hasClass('ui-checkbox-on')) {
          y += "<div data-role='collapsible' data-collapsed='true'>\
              <h2>3. 假期工資問題</h2>\
                <p>\
                  Content\
                  Content\
                  Content\
                </p>\
              </div>"
        }

      // Question_4
        if($('#fire').hasClass('ui-checkbox-on')) {
          if($('#four_one_eight').hasClass('ui-checkbox-on')){
            y += "<div data-role='collapsible' data-collapsed='true'>\
              <h2>4. 無理解雇</h2>\
                <p>\
                  老闆用以下五項哪幾項罪名炒你？</br>\
                  <div data-role='controlgroup'>\
                    <label for='q4_one'>罪名1</label>\
                    <input type='checkbox' id='q4_one'>\
                  </div>\
                  <div data-role='controlgroup'>\
                    <label for='q4_two'>罪名2</label>\
                    <input type='checkbox' id='q4_two'>\
                  </div>\
                  <div data-role='controlgroup'>\
                    <label for='q4_three'>罪名3</label>\
                    <input type='checkbox' id='q4_three'>\
                  </div>\
                  <div data-role='controlgroup'>\
                    <label for='q4_four'>罪名4</label>\
                    <input type='checkbox' id='q4_four'>\
                  </div>\
                  <div data-role='controlgroup'>\
                    <label for='q4_five'>罪名5</label>\
                    <input type='checkbox' id='q4_five'>\
                  </div>\
                  <button class='submit'>提交</button>\
                </p>\
              </div>"
          } else {
              y += "<div data-role='collapsible' data-collapsed='true'>\
                <h2>4. 無理解雇</h2>\
                  <p>\
                    你不符合418的條件，所以老闆無理解雇你並沒有違法。\
                  </p>\
                </div>"
          }
        }

      // Question_5
      if($('#severance_pay').hasClass('ui-checkbox-on')) {
        y += "<div data-role='collapsible' data-collapsed='true'>\
          <h2>5. 遣散費</h2>\
            <p>\
              a. 你是否做滿兩年你是否被裁員\
              <div class='Question_5_a' data-role='controlgroup' data-type='horizontal'>\
              <label for='answer_a_yes'>是</label>\
              <input type='radio' id='answer_a_yes' name='answer'>\
              <label for='answer_a_no'>否</label>\
              <input type='radio' id='answer_a_no' name='answer'>\
              </div>\
              \
              b. 公司是否倒閉\
              <div class='Question_5_b' data-role='controlgroup' data-type='horizontal'>\
                <label for='answer_b_yes'>是</label>\
                <input type='radio' id='answer_b_yes' name='answer_b'>\
                \
                <label for='answer_b_no'>否</label>\
                <input type='radio' id='answer_b_no' name='answer_b'>\
              </div>\
              <button class='submit'>提交</button>\
            </p>\
          </div>"
      }

      // Question_6

        if($('#salary').hasClass('ui-checkbox-on')) {
          y += "<div data-role='collapsible' data-collapsed='true'>\
            <h2>6. 標準工時計算器</h2>\
              <p>\
                如果立法標準工時，每週超過44小時就要補水，老細要畀多幾多錢你呢？(計算只供參考，或與實際情況有誤差)\
                <form id='cal'>\
                <table>\
                <tr>\
                <td>每天正常工時(小時)</td>\
                <td><input type='text' id='hour'></td> \
                </tr>\
                <tr>\
                <td>每日平均超時（小時）</td>\
                <td><input type='text' id='extraHour'></td>\
                </tr>\
                <tr>\
                <td>每月工作日數</td>\
                <td><input type='text' id='days'></td> \
                </tr>\
                <tr>\
                <td>月薪</td>\
                <td><input type='text' id='salary'></td>\
                </tr>\
                </table>\
                </form>\
                <div id='area'>\
                <button class='submit'>提交</button>\
              </div>\
              </p>\
            </div>"
        }

      // Question_7
        if($('#discrimination').hasClass('ui-checkbox-on')) {
          y += "<div data-role='collapsible' data-collapsed='true'>\
            <h2>7. 平機會、勞工處</h2>\
              <p>\
                Content<br>\
                Content<br>\
                Content<br>\
                Content<br>\
              </p>\
            </div>"
        }

        y += "</ul>"
        $(".page_A_page_1").hide();
        $("#form_result").show();
        $("#form_result").children().show();
        $("#form_result .part_A_box").html(y).enhanceWithin()



      //Q6 工時計算器
        $("#area .submit").on('click', function(){
          var hour = parseInt($('#hour').val()); //A
          var extraHour = parseInt($('#extraHour').val());		//B
          var days = $('#days').val(); //C
          var salary = $('#salary').val(); //D
          var eachWeek = parseInt(44 * 30 /7)


          var e = days * (hour +  extraHour) - eachWeek //extraTime
          var f = days* hour - eachWeek //included
          var g = days * extraHour  //excluded


          function maths(hour, days, salary, extraHour){
          var hourlyPaid =  salary / (hour*days)

            var moneyNotPaid = (hourlyPaid * f * 0.5) + (g * 1.5 *hourlyPaid)
            return moneyNotPaid

          }

          var value = parseInt(maths(hour, days, salary, extraHour))

          alert("你老細欠你"+ value + "元")
        })//end of 工時計算器

        $(".return").on('click', function(){
            $("#form_result").hide();
            $(".part_A_moon").show();
            $(".part_A_page_2, .part_A_page_3, .part_A_page_4").hide();
        })//end of on
      })//end of .four_one_eight_submit




    // Swtiches between Page_A 的 1, 2, 3
    // $(".part_A_navbar_one").siblings().hide()
    $(".part_A_navbar_one").siblings().hide()

    $(".part_A_nav ul li").click(function(){
      s = $(this).attr('id')
      selector = $("."+s);
      $(selector).siblings().hide();
      $(selector["selector"]).show();
    })
})//end of ready funciton
