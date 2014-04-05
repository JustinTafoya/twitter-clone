var count = 140;

//STEP 2
$(document).ready(function(){

	$("#tweet-content > .tweet-compose").focus(function(){
		$("#tweet-controls").show();
			$(this).css("height", "8em");
	});

	$(".tweet-compose").focusout(function(){
		if(count === 140){
			$("tweet-controls").hide();
				$(this).css("height", "2.5em");
		}
	});



//STEP 3 & 4
	$(".tweet-compose").on("input", function(){
		var length = $(".tweet-compose").val().length;
	    count = 140 - length;
	    $('#char-count').text(count);

	    if(count <= 10){
	            $("#char-count").css("color", "red");
	    }
	    else if(count >= 0){
	            $("#char-count").css("color", "#999");
	    }
	    else{
	        	$('#char-count').css("color", "#999");
	    }

		if(count < 0){
					$('.button').attr("disable", 'true')
					// $(this).css("background-color", "#999");
	    			
	    		}
	    else if (count >= 0){
					$('.button').removeAttr("enable",'true');
	    		}

	}); //END 3 & 4 END TAG
 

 //STEP 6 CSS
//STEP 5 & 7
	var init = function(){

		$(".tweet").click(function(){
			$(this).find(".reply, .stats").slideDown();
		});

		$(".tweet").mouseleave(function(){
			$(this).find(".reply, .stats").slideUp();
		});

	};



	$("#tweet-submit").on("click", function(){
		var tweetComment= $('.tweet-compose').val();
		var newComment=$("#stream .tweet").first().clone();

		$(newComment).find("p").first().text(tweetComment);
		$(newComment).find("img").first().attr("src", "img/alagoon.jpg");
		// $(newComment).find(".fullname").text(handle);
		// $(newComment).find(".username").text("@hacksaw");
		$("#tweet-content > .tweet-compose").css({"height": "2.5em"})
		$("#tweet-content > .tweet-compose").val("")
		$("#tweet-controls").toggle();
		$("#stream").prepend(newComment);
		$("#char-count").text(140);
		init();
	});//STEP 5 END TAG

init();


//NOTES




});//END TAG