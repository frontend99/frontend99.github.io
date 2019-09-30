document.addEventListener("DOMContentLoaded",function(){
    var btnLogin = document.querySelector('.btn-login'),
        divRight = document.querySelector('.right'),
        divLoginOk = document.querySelector('.sign-in-ok'),
        bSignUp = document.querySelector('.a-sign-up'),
        divSignUp = document.querySelector('.sign-up'),
        btnBack = document.querySelector('.btn-back'),
        btnSignup = document.querySelector('.btn-signup'),
        divSignUpOk = document.querySelector('.sign-up-ok'),
        btnLoginnow = document.querySelector('.btn-loginnow'),
        emailIn = document.querySelector('#email-in'),
        passIn = document.querySelector('#pass-in'),
        spanSignInOk = document.querySelector('.sign-in-ok span'),
        emailUp = document.querySelector('#email-up'),
        passUp = document.querySelector('#pass-up'),
        repassUp = document.querySelector('#repass-up'),
        phoneUp = document.querySelector('#phone-up'),
        spanSignUpOk = document.querySelector('.sign-up-ok span');

        fLogin = () => {
            if(emailIn.value == "" || passIn.value == ""){
                alert('Bạn chưa nhập đủ thông tin');
                return false;
            }
            else{
                divRight.classList.remove('display');
                divRight.classList.add('hiden');
                divLoginOk.classList.add('display');
                spanSignInOk.innerHTML = emailIn.value;
                return false;
            }
        }
        fSignUp = () => {
            if(emailUp.value == "" || passUp.value == "" || repassUp.value == "" || phoneUp.value == ""){
                alert('Bạn chưa nhập đủ thông tin');
                return false;
            }
            else if(passUp.value != repassUp.value){
                alert("Nhập lại mật khẩu không đúng");
                return false;
            }
            else{
                divSignUp.classList.remove('display');
                divSignUp.classList.add('hiden');
                divSignUpOk.classList.add('display');
                spanSignUpOk.innerHTML = emailUp.value;
                return false;
            }
        }
        btnBack.onclick = function(){
            divSignUp.classList.add('hiden');
            divSignUp.classList.remove('display');
            divRight.classList.add('display-back');
        }
        
        bSignUp.onclick = function(){
            divRight.classList.remove('display-back');
            divRight.classList.add('hiden');
            divSignUp.classList.add('display');
        }
        
},false)