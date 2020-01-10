document.addEventListener("DOMContentLoaded",function(){
    var divPress = document.querySelector('.press'),
    divContent = document.querySelector('.content'),
    divCrossbar =  document.querySelector('.crossbar'),
    pCLick =  document.querySelector('.pClick'),
    h3 = document.querySelector('h3'),
    statusButton = 0;

    divPress.addEventListener('click', function(){
        divPress.classList.toggle('press-down');
        h3.classList.toggle('h3-hide');
        divContent.classList.toggle('scale-full');
        divCrossbar.classList.toggle('style-crossbar');
        if(statusButton == 0){
            pCLick.innerHTML = "Home";
            statusButton = 1;
        }
        else if(statusButton == 1){
            pCLick.innerHTML = "Click";
            statusButton = 0;
        }
        console.log(statusButton);
        
    })
},false)