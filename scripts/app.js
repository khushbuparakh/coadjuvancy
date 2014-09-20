//alert('hello');
$('documnet').ready(function(){
	$('#compose').click(function(){
		//alert('button clicked');
		//$('.user-areain').css('background-color','#000');
		$('.user-areain').animate({left:0},500);
	});
	$('#message').click(function(){
		$('.user-areain').animate({left:-380},500);
	});
});