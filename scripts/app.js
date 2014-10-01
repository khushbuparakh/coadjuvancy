//alert('hello');
$('documnet').ready(function(){
	$('#compose').click(function(){
		//alert('button clicked');
		//$('.user-areain').css('background-color','#000');
		$('.user-areain').animate({left:0},500);
	});
	$('#message').click(function(){
		$('.user-areain').animate({left:-280},500);
	});
});

//for counting the word in the textarea

$('document').ready(function(){
	$('textarea').focusin().keyup(function(){
		var words = $(this).val();
		$('.count').text(150-words.length);
		if(words.length>150){
			$('#fb').css('background-color','red');
			$('#count').css('color','red');
		}
		else {
			$('#fb').css('background-color','green');
			$('#count').css('color','black');
		}

	});
});

$('document').ready(function(){
	$('textarea,input[type="text"]').focusin().keyup(function(){
		$(this).css('color','#333')
	});
});