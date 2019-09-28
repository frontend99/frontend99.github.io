document.addEventListener("DOMContentLoaded",function(){
    var userUp = document.querySelector('#user-up'),   
        passUp = document.querySelector('#pass-up'),
        rePassUp = document.querySelector('#repass-up'),
        nameUp = document.querySelector('#name-up'),
        birthUp = document.querySelector('#birth-up'),
        addressUp = document.querySelector('#address-up'),
        emailUp = document.querySelector('#email-up'),
        phoneUp = document.querySelector('#phone-up'),
        btnSignup = document.querySelector('.btn-signup'),     
        divSignUp = document.querySelector('.sign-up-ko'),       
        divSignUpOk = document.querySelector('.sign-up-ok'),       
        spanSignUp = document.querySelector('.sign-up-ok span');


    btnSignup.addEventListener('click', function(){
        if(userUp.value == "" || passUp.value == "" || rePassUp.value == "" || nameUp.value == "" || birthUp.value == "" || addressUp.value == "" || emailUp.value == "" || phoneUp.value == ""){
            alert("Bạn chưa nhập đầy đủ thông tin");
            
        }
        else if(passUp.value !== rePassUp.value){
            alert("Nhập lại mật khẩu bị sai");
            
        }
        else if(userUp && passUp && rePassUp && nameUp && birthUp && addressUp && emailUp && phoneUp){
            divSignUp.style.display = "none";
            divSignUpOk.style.display = "block";
            spanSignUp.innerHTML = userUp.value;
        } 
    }) 
},false)