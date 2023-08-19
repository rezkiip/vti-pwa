$('header').load('./vti_header.html');
$('footer').load('./vti_footer.html');

const fileUpload = function(t){
	$(t).next().click();
}
const readURL = function(input,t) {
	var img = '.carousel-item[data-slide='+t+']',
		thumb = '#carousel-img+div>div[data-slide='+t+']>a';
	if(!$.isNumeric(t)) {
	  img = null;
	  thumb = '#'+t;
	};
	if(input.files && input.files[0]) {
	  var reader = new FileReader();
	  reader.onload = function (e) {
		var image = new Image();
		image.src = e.target.result;
		image.addEventListener('load', function () {
		  var w = $(this.width)[0],
			  h = $(this.height)[0],
			  i = false;
		  if(w>h) console.log('landscape', w, h);
		  else if(h>w) console.log('portrait', w, h);
		  else console.log('square', w, h);

		  if(h>w) i = true;
		  $(img).toggleClass('bg-contain',i);
		  $('#carousel-img').carousel($(img).index());
		  $(img).css('background-image', 'url(' + e.target.result + ')');
		});
		$(thumb).css('background-image', 'url(' + e.target.result + ')').addClass('filled').children().css('style','display:none');

		if(t==10) $('#modal-image img').attr('src', e.target.result);	// product preview
	  } 
	  reader.readAsDataURL(input.files[0]);
	} else if(t==3) {	// youtube link
	  if(input=='yourvideoID' || input=='') return;
	  $(img).children('iframe').attr('src','https://www.youtube.com/embed/'+input);
	  $(thumb).css('background-image', 'url(https://img.youtube.com/vi/' + input + '/0.jpg)').addClass('filled').children().css('style','display:none');
	  $('#carousel-img').carousel(3);
	}
};
$('.cta_share').on('click',function(){
	var t = $(this).data('title') || document.title,
		u = $(this).data('url') || window.location.href;
	navigator.share({
	  title: t,
	  url: u
	})
  })


$(document).ready(function(){
	$(':input').prop('autocomplete','off');
})