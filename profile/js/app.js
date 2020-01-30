document.addEventListener("DOMContentLoaded",function(){
	var nav = document.querySelector('nav'),
		protontech = document.querySelector('nav .protontech'),
		navitems = document.querySelectorAll('nav .nav-link'),
		scrollStatus = 'smaller100',
		backToTopStatus = 'ok',
		aboutLeft = document.querySelector('.about .col-sm-6.left'),
		aboutRight = document.querySelector('.about .col-sm-6.right'),
		experience = document.querySelector('.experience'),
		backToTop = document.querySelector('.back_to_top'),
		header = document.querySelector('header'),
		oneSkill = document.querySelectorAll('.one_skill'),
		skill = document.querySelector('.skill'),
		more = document.querySelector('.more'),
		project = document.querySelector('.project'),
		oneProject = document.querySelectorAll('.one_project'),
		contact = document.querySelector('.contact'),
		footer = document.querySelector('footer'),
		nav_li = document.querySelectorAll('nav li'),
		nav_a = document.querySelectorAll('nav .nav-link'),
		body = document.querySelector('body'),
		footer = document.querySelector('footer'),
		b_all = document.querySelector('b.all'),
		b_template = document.querySelector('b.template'),
		b_reactjs = document.querySelector('b.reactjs'),
		one_project = document.querySelectorAll('.one_project'),
		jstemplate = document.querySelectorAll('.jstemplate'),
		jsreact = document.querySelectorAll('.jsreact');

	window.addEventListener('scroll',function(){
		if(window.pageYOffset > 100){
			if(scrollStatus == 'smaller100'){
				nav.classList.add('scroll_nav');
				protontech.classList.add('scroll_profile');
				for(var i=0;i<navitems.length;i++){
					navitems[i].classList.add('scroll_item');
				}
				scrollStatus = 'bigger100';
			}
			nav_li[0].classList.add('border_li');
		}
		else if(window.pageYOffset < 100){
			if(scrollStatus == 'bigger100'){
				nav.classList.remove('scroll_nav');
				protontech.classList.remove('scroll_profile');
				for(var i=0;i<navitems.length;i++){
					navitems[i].classList.remove('scroll_item');
				}
				scrollStatus = 'smaller100';
			}
		}
		
		if(window.pageYOffset > (aboutLeft.offsetTop - 150)){
			nav_li[0].classList.remove('border_li');
			nav_li[1].classList.add('border_li');
		}
		if(window.pageYOffset > 100 && window.pageYOffset < (aboutLeft.offsetTop - 300)){
			nav_li[0].classList.add('border_li');
			nav_li[1].classList.remove('border_li');
		}
		if(window.pageYOffset > (experience.offsetTop - 400)){
			experience.classList.add('appear_experience');
		}
		if(window.pageYOffset > (experience.offsetTop - 150)){
			nav_li[1].classList.remove('border_li');
			nav_li[2].classList.add('border_li');
		}
		if(window.pageYOffset > (aboutLeft.offsetTop - 300) && window.pageYOffset < (experience.offsetTop - 300)){
			nav_li[1].classList.add('border_li');
			nav_li[2].classList.remove('border_li');
		}
		if(window.pageYOffset > 500){
			if(backToTopStatus == 'ok'){
				backToTop.classList.add('appear_backtotop');
				backToTop.classList.remove('hide_backtotop');
				backToTopStatus = 'no';
			}
		}
		else if(window.pageYOffset < 500){
			if(backToTopStatus == 'no'){
				backToTop.classList.add('hide_backtotop');
				backToTop.classList.remove('appear_backtotop');
				backToTopStatus = 'ok';
			}
		}
		
		if(window.pageYOffset > (skill.offsetTop - 150)){
			nav_li[2].classList.remove('border_li');
			nav_li[3].classList.add('border_li');
		}
		if(window.pageYOffset > (experience.offsetTop - 300) && window.pageYOffset < (skill.offsetTop - 300)){
			nav_li[2].classList.add('border_li');
			nav_li[3].classList.remove('border_li');
		}
		if(window.pageYOffset > (more.offsetTop - 400)){
			more.classList.add('appear_more');
		}
		if(window.pageYOffset > (more.offsetTop - 150)){
			nav_li[3].classList.remove('border_li');
			nav_li[4].classList.add('border_li');
		}
		if(window.pageYOffset < (more.offsetTop - 150)){
			nav_li[4].classList.remove('border_li');
		}
		if(window.pageYOffset > (project.offsetTop - 150)){
			nav_li[4].classList.remove('border_li');
			nav_li[5].classList.add('border_li');
		}
		if(window.pageYOffset > (more.offsetTop - 300) && window.pageYOffset < (project.offsetTop - 300)){
			nav_li[4].classList.add('border_li');
			nav_li[5].classList.remove('border_li');
		}
		if(window.pageYOffset > (contact.offsetTop - 150)){
			nav_li[5].classList.remove('border_li');
			nav_li[6].classList.add('border_li');
		}
		if(window.pageYOffset > (project.offsetTop - 300) && window.pageYOffset < (contact.offsetTop - 300)){
			nav_li[5].classList.add('border_li');
			nav_li[6].classList.remove('border_li');
		}
	})

	b_template.addEventListener('click', function(){
		for(var i=0;i<jsreact.length;i++){
			jsreact[i].classList.add('hidden_click_oneproject');
			jstemplate[i].classList.remove('hidden_click_oneproject');
			b_template.classList.add('active_project');
			b_reactjs.classList.remove('active_project');
			b_all.classList.remove('active_project');
		}
	})
	b_reactjs.addEventListener('click', function(){
		for(var i=0;i<jstemplate.length;i++){
			jstemplate[i].classList.add('hidden_click_oneproject');
			jsreact[i].classList.remove('hidden_click_oneproject');
			b_reactjs.classList.add('active_project');
			b_template.classList.remove('active_project');
			b_all.classList.remove('active_project');
		}
	})
	b_all.addEventListener('click', function(){
		for(var i=0;i<one_project.length;i++){
			one_project[i].classList.remove('hidden_click_oneproject');
			b_all.classList.add('active_project');
			b_template.classList.remove('active_project');
			b_reactjs.classList.remove('active_project');
		}
	})

},false)



