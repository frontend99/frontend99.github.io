document.addEventListener("DOMContentLoaded",function(){
    $(document).ready(function() {
        $('#form1').on('submit', function(e) {
            e.preventDefault();
        });
    });

    modCalculator = (A1,B1,C1) => {
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
        else {
            p1.innerHTML = "ERROR - Ngoài phạm vi tính";
        }
    }
},false)