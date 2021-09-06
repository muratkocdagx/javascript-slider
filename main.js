$(document).ready(function(){
    $slider_count = $( ".slider li" ).length - 1;

	$(".slider li:first").show();
	$index=0;

	/*##################################################*/
    $navigation_count = $( ".slider li" ).length ;
	
	for (i=1; i<=$navigation_count; i++){
		$(".navigation").append("<li><a href='javascript:;'>" + i + "</a></li>");
	}

	$(".navigation li:first").find("a").addClass("active");
	/*###################################################*/
	
	$(".navigation li").click(function(){
		$index = $(this).index();
		$(".slider li").hide();
		$(".slider li:eq("+ $index +")").fadeIn();

		$(".navigation li a").removeClass();

		$(this).find("a").addClass("active");
	});
	$("#prev").click(function(){

		if ($index == 0) {
		$index = $slider_count;	
		}
		else{
			$index--;	
		}

		$(".slider li").hide();
		$(".slider li:eq("+ $index +")").fadeIn();

		$(".navigation li a").removeClass();

		$(".navigation li:eq(" + $index + ")").find("a").addClass("active");


	});
	$("#next").click(function(){

		if ($index == $slider_count) {
		$index = 0;	
		}
		else{
			$index++;	
		}

		$(".slider li").hide();
		$(".slider li:eq("+ $index +")").fadeIn();

		$(".navigation li a").removeClass();

		$(".navigation li:eq(" + $index + ")").find("a").addClass("active");



	});
});