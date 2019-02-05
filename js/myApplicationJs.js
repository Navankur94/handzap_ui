 $('.slate2').hide();
  $('#color1').css('color','#006400');
  $('.tb1').css('color','#006400');
  $('#color1').click(function(){
      $('#color1').css('color','#006400');
      $('.slate1').show();
      $('.slate2').hide();
      $('.tb1').css('color','#006400');
      $('#color2').css('color',''); 
  });
   $('#color2').click(function(){
      $('#color2').css('color','#006400');
      $('.slate1').hide();
      $('.slate2').show();
      $('.tb2').css('color','#006400');
      $('#color1').css('color','');
  });
   $(window).resize(function() {
      if ($(window).width() >= 1100) 
      { 
          $(".pbody,.pbody2").css("background-color", "green");
      } 
      else if($(window).width() >= 800 && $(window).width() <= 1100)
      {
          $(".pbody,.pbody2").css("background-color", "blue");
      }
       else if($(window).width() >= 500 && $(window).width() <= 800)
      {
          $(".pbody,.pbody2").css("background-color", "black");
      }
      else{
        $(".pbody,.pbody2").css("background-color", "red");
      }
  });
