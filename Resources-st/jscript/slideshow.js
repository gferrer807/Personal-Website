	var active = 1;
	var slides = $('#slide-track img').length;
  var frameWidth = $('#slideshow').width();

	buildSlider(slides);

function nextSlide(){
	$('#slideLeft').show();
	if(active < slides){
  	$('#slide-track').animate({right: '-=' + frameWidth}, 500);
    active++;
    if(active == slides) $('#slideRight').hide();
  } 
}

function prevSlide(){
	$('#slideRight').show();
	if(active > 1){
  	$('#slide-track').animate({right: '+=' + frameWidth}, 500);
    active--;
    if(active == 1) $('#slideLeft').hide();
  } 
}

function buildSlider(slides){
	var trackWidth = (slides * 100) + '%';
	$('#slide-track').css('width', trackWidth);
	$('#slideLeft').hide();
}