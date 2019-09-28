document.addEventListener("DOMContentLoaded",function(){
    var userIn = document.querySelector('#user-in'),
        passIn = document.querySelector('#pass-in'),
        nav = document.querySelector('nav'),
        signInEd = document.querySelector('.sign-in-ed');
    
        

    fLogin = () => {
        if(userIn.value == "" || passIn.value == ""){
            alert("Bạn chưa nhập đầy đủ thông tin");
            return false;
        }
        if(userIn && passIn){
            nav.style.display='none';
            signInEd.style.display='block';
        }
        
    }
},false)