document.addEventListener("DOMContentLoaded",function(){
    var iconSearch = document.querySelector('.top-menu nav .collapse .nav-item .nav-link.fas'),
        divSearch = document.querySelector('.top-menu-search'),
        buttonBackToTop = document.querySelector('.back-to-top'),
        accordions = document.querySelectorAll('.one-accordion'),
        accordionIs = document.querySelectorAll('.one-accordion h5 i'),
        accordionPs = document.querySelectorAll('.one-accordion p');

        // Search form
        iconSearch.onclick = () => {
            divSearch.classList.toggle('visiable');
        }
        // Back to top Jquery
        $('.back-to-top').on('click', function(event) {
            event.preventDefault();
            $('html').animate({scrollTop: 0}, 1000);
        });
        // Accordion
        for(var i=0;i<accordions.length;i++){
            accordions[i].onclick = function(){
                this.classList.toggle('down');
                accordionIs[i].classList.toggle('rotate90');
            }
        }
        
},false)