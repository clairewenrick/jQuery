console.log("i'm here")
var imgs = $("img");
var msg = "Hover over an image below.";
imgs.each( function( ){
	imgs.mouseover(function() {
	 	$('#image').css("backgroundImage",'url(' +this.src+')');
	 	$('#image').html(this.alt);
	 })

	 imgs.focus(function() {
		$('#image').css("backgroundImage",'url(' +this.src+')');
		$('#image').html(this.alt);
		console.log("here");
	 })

	 imgs.mouseout(function() {
		$('#image').css("backgroundImage",'url()');
	 	$('#image').html(msg);
	 })

	 imgs.blur(function() {
		$('#image').css("backgroundImage",'url()');
	 	$('#image').html(msg);
	 })
});
