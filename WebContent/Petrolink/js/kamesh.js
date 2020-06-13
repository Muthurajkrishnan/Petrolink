    $("#right").hide();
    var video = document.getElementById("myVideo");
     $("#playVideo").click(function(){
        video.play();
     });
     $("#pauseVideo").click(function(){
        video.pause();
     });
     $("#Fullscreen").click(function(){
         $(".expand-player").css("display","none");
         $(".compress-player").css("display","block");
         $("#hideContent").css("display","none");
         $("#overlay").removeClass("overlay");
     });
     $("#closeFullScreen").click(function(){
        $(".expand-player").css("display","block");
        $(".compress-player").css("display","none");
        $("#hideContent").css("display","block");
        $("#overlay").addClass("overlay");
     });
     $(".moreInformation").click(function () {
         video.pause();
         $("#player-nav").css("display","none");
         var effect = 'slide';

         // Set the options for the effect type chosen
         var options = { direction: 'right' };

         // Set the duration (default: 400 milliseconds)
         var duration = this.id;
         $(".left").removeClass("col-md-12");
         $(".left").addClass("col-md-6");
         //$('.right').toggle(effect, options, duration);
         //$("#myVideo").css("min-width","50% !important");
         $(".right").show(effect, options, duration);
         //$(".content").css("width","50%");
         $("#home-wrap").addClass("hide-left")
         $("#overlay").addClass("global-overlay hide-overlay");
         $("#info-wrap").addClass("show-info");
         $(".command-info-wrap").addClass("show-command");
    });
     
     $(".to-close").click(function () {
         $("#home-wrap").removeClass("hide-left")
         $("#overlay").removeClass("global-overlay hide-overlay");
         $("#info-wrap").removeClass("show-info");
         $(".command-info-wrap").removeClass("show-command");
     });
     

    $(".to-close").click(function () {
         video.pause();
         $("#player-nav").css("display","block");
         var effect = 'slide';

         // Set the options for the effect type chosen
         var options = { direction: 'left' };

         // Set the duration (default: 400 milliseconds)
         var duration = this.id;
         $(".left").addClass("col-md-12");
         $(".left").removeClass("col-md-6");
         //$('.right').toggle(effect, options, duration);
         //$("#myVideo").css("min-width","50% !important");
         $(".right").hide(effect, options, duration);
         $(".content").css("width","100%");
  });
  $(".notifyMe").click(function(){
      //$('.modal-backdrop').css('background-color','none !important');
  });
  $("#valid-form").click(function(){
      var name = $("#name").val();
      var email = $("#email").val();
      var subject = $("#subject").val();
      var message = $("#message").val();
      if(name != "" && email != "" && subject != "" && message != ""){
         $("#contactSubmitMessage").modal("show");
         return true;
      }else{
         $("#error").css("display","block");
         return false;
      }
  });
