document.addEventListener("DOMContentLoaded",function(){
	var ctm_left = document.querySelector('.ctm_left');
	var ctm_right = document.querySelector('.ctm_right');
	var audio_left = document.querySelector('.audio_left');
	var audio_right = document.querySelector('.audio_right');

	// js customer
	window.addEventListener('scroll',function(){
		if(window.pageYOffset > 1200){
			ctm_left.classList.add('move_right');
			ctm_right.classList.add('move_left');
		}
		if(window.pageYOffset > 2200){
			audio_left.classList.add('move_right');
			audio_right.classList.add('move_left');
		}
	})
	// end js customer
	
},false)