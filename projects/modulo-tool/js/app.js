document.addEventListener("DOMContentLoaded",function(){
    $(document).ready(function() {
        $('#form1').on('submit', function(e) {
            e.preventDefault();
        });
        $('#form2').on('submit', function(e) {
            e.preventDefault();
        });
        $('#form3').on('submit', function(e) {
            e.preventDefault();
        });
    });

    modCalculator = () => {
        var p1 = document.getElementById("result-mod-calculator");
        var inputA1 = document.getElementById("input-mod-calculator-A").value;
        var inputB1 = document.getElementById("input-mod-calculator-B").value;
        var inputC1 = document.getElementById("input-mod-calculator-C").value;
        var A1 = parseInt(inputA1);
        var B1 = parseInt(inputB1);
        var C1 = parseInt(inputC1);
        if(inputA1=="" || inputB1=="" || inputC1=="")
            p1.innerHTML = `<i class="fas fa-exclamation-triangle" style="margin-right:10px;"></i> ERROR - Chưa nhập đủ số`;
        else{
            var Result1 = recursiveModCalculator(A1,B1,C1);
            if(A1==0 && B1==0){
                p1.innerHTML = `<i class="fas fa-exclamation-triangle" style="margin-right:10px;"></i> ERROR - Làm gì có 0 mũ 0 ?`;
            }
            else if(C1==0){
                p1.innerHTML = `<i class="fas fa-exclamation-triangle" style="margin-right:10px;"></i>ERROR - số C phải khác 0`;
            }
            else if (Number.isSafeInteger(Result1) == true && Result1)
                {
                    p1.innerHTML = `${A1}^${B1} mod ${C1} = ${Result1}`;
                    document.getElementById("input-mod-calculator-A").value = "";
                    document.getElementById("input-mod-calculator-B").value = "";
                    document.getElementById("input-mod-calculator-C").value = "";
                }
            else p1.innerHTML = `<i class="fas fa-exclamation-triangle" style="margin-right:10px;"></i> ERROR - Ngoài phạm vi tính`;
        }
    }


    // code Javascript x^n mod m
    recursiveModCalculator = (x,n,m) => {
        var p = null;
        var q = parseInt(n/2);
        if (n==0)
            return 1;
        else {
            p=parseInt(recursiveModCalculator(x,q,m));
            if (n%2==0) 
                return (p*p)%m;
            else
                return (p*p*x)%m;
        }
    }
    
    

    modInverse = () => {
        var p2 = document.getElementById("result-mod-inverse");
        var inputA2 = document.getElementById("input-mod-inverse-A").value;
        var inputB2 = document.getElementById("input-mod-inverse-B").value;
        var A2 = parseInt(inputA2);
        var B2 = parseInt(inputB2);
        var Result2 = null;
        for(var i=1;i<B2;i++){
            if((A2*i-1)%B2 == 0)
                Result2 = i;
        }
        if(inputA2=="" || inputB2=="" )
            p2.innerHTML = `<i class="fas fa-exclamation-triangle" style="margin-right:10px;"></i>ERROR - Chưa nhập đủ số`;
        else {
            if(A2==0 || B2==0){
                p2.innerHTML = `<i class="fas fa-exclamation-triangle" style="margin-right:10px;"></i> ERROR - A và B phải khác 0`;
            }
            else if(Result2)
                p2.innerHTML = "NGHỊCH ĐẢO = " + Result2;
            else if(Result2 == null)
                p2.innerHTML = `<i class="fas fa-exclamation-triangle" style="margin-right:10px;"></i> ERROR - Không tồn tại nghịch đảo`;
        }
    }

    modPrimitiveRoot = () => {
        var p3 = document.getElementById("result-mod-primitive-root");
        var inputA3 = document.getElementById("input-mod-primitive-root-A").value;
        var inputB3 = document.getElementById("input-mod-primitive-root-B").value;
        var A3 = parseInt(inputA3);
        var B3 = parseInt(inputB3);
        var Result3 = B3-1;
        for(var i=1;i<Result3;i++){
            var check3 = recursiveModCalculator(A3,i,B3);
            if(check3 && check3==1){
                Result3 = i;
            }
            else
                Result3 = B3-1;
        }
        if(inputA3=="" || inputB3=="" )
            p3.innerHTML = `<i class="fas fa-exclamation-triangle" style="margin-right:10px;"></i> ERROR - Chưa nhập đủ số`;
        else {
            if(Result3!=B3-1){
                p3.innerHTML = `KHÔNG - vì tồn tại <br> ${A3}^${Result3} mod ${B3} = 1`;
            }
            else if(Result3==B3-1)
                p3.innerHTML = `CÓ nha <i class="fas fa-heart ml-2"></i>`;
        } 
    }
},false)