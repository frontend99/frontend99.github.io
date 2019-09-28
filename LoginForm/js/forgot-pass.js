document.addEventListener("DOMContentLoaded",function(){
    var userForgot = document.querySelector('#user-forgot'),
        btnForgotpass = document.querySelector('.btn-forgotpass'),
        divForgot = document.querySelector('.forgot-ko'),
        divForgotOk = document.querySelector('.forgot-ok');
        
    btnForgotpass.addEventListener('click', function(){
        if(userForgot.value == "" ){
            alert("Bạn chưa nhập tài khoản");
        }
        else if(userForgot){
            divForgot.style.display = "none";
            divForgotOk.style.display = "block";
        }
    })
},false)