document.addEventListener("DOMContentLoaded",function(){
    $(document).ready(function() {
        $('#form1').on('submit', function(e) {
            e.preventDefault();
        });
        $('#form2').on('submit', function(e) {
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
        var Result1 = A1**B1-(parseInt(A1**B1/C1))*C1;
        if (Number.isSafeInteger(Result1) == true)
            p1.innerHTML = "KẾT QUẢ = " + Result1;
        else p1.innerHTML = "ERROR - Ngoài phạm vi tính";
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
        if(Result2)
            p2.innerHTML = "KẾT QUẢ = " + Result2;
        else if(Result2 == null)
            p2.innerHTML = "ERROR - Không tồn tại nghịch đảo";
    }
},false)