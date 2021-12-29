$(document).ready(function() {

 	$("button").click(function() {

    	alert("Thank you for the feedback.");
    	$("#comments-area").show();

    	let name = $("#user-name").val();
    	let comment = $("#user-comment").val();
    	$(".user-comment").text(name + " says " + comment);
  	});
});