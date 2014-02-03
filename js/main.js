$( document ).ready(function() {
    $(".tab2").click(function(){
    	$(".tabs-2").removeClass("hidden");
    	$(".tabs-1").addClass("hidden");
    });

    $(".tab1").click(function(){
    	$(".tabs-1").removeClass("hidden");
    	$(".tabs-2").addClass("hidden");
    });

    $(".layer2").click(function(){

    	$(".displaysecond").animate({
		    "margin-left": 0}, "ease", function(){
		    	$(".displayfirst").addClass("hidden2");
		    });
    });


    $(".layer1").click(function(){

    	$(".displayfirst").animate({
		    "margin-left": -15}, "ease", function(){
		    	$(".getting-started").addClass("hidden2");
		    });
    });


    $(".uploadfirst").click(function(){
    	$(".popup").removeClass("hidden");
    });


    $(".uploadbtn").click(function(){
    	$(".popup").addClass("hidden");
    	$(".video1").removeClass("hidden");
    	$(".uploadfirst").addClass("hidden");
    	$(".clearHover").addClass("hidden");
    	$(".overlay").addClass("blackbg");
    });

    $(".runbtn").click(function(){
    	$(".video1").addClass("hidden");
    	$(".video2").removeClass("hidden");
        $('.buttons').hide();
    });
});
