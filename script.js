

var valor1 = 0;
var valor2 = 0;
var value1 = 0;
var value2 = 0;

var signal;
var lastSignal;

var flag = false;
var flag1 = false;
var liberaCalc = false;


function addNumero(n) {
    liberaCalc = true;
    let recebe = document.getElementById("textResult").innerHTML;
    document.getElementById("textResult").style.color = "lawngreen"
    if (recebe.length < 10) {

        const cb = document.getElementById("check");
        if(cb.checked == false)
        {
        snd.play();
        }



        if (recebe == "0") {
            document.getElementById("textResult").innerText = "";
        }
        if (flag == false) {
            document.getElementById("textResult").innerText = document.getElementById("textResult").innerText + n;
            valor1 = document.getElementById("textResult").innerHTML;
        }
        else {
            if (flag1 == true) {
                document.getElementById("textResult").innerText = "";
                flag1 = false;
            }
            document.getElementById("textResult").innerText = document.getElementById("textResult").innerText + n;
            valor2 = document.getElementById("textResult").innerHTML;
        }




    }

}


function addSinal(n) {

    if (liberaCalc == true) {
        const cb = document.getElementById("check");
        if(cb.checked == false)
        {
        snd.play();
        }
        signal = document.getElementById("pSinal").innerHTML;
        if (signal == ".") {
            document.getElementById("pSinal").innerText = "";
        }

        document.getElementById("pSinal").innerText = n;
        lastSignal = document.getElementById("pSinal").innerHTML;
        flag = true;
        flag1 = true;
        value1 = parseInt(valor1);
        value2 = parseInt(valor2);
  
        switch (signal) {

            case '+': document.getElementById("textResult").innerText = value1 + value2;
                valor1 = value1 + value2;
                document.getElementById("textResult").style.color = "red"
                break;
            case '-': document.getElementById("textResult").innerText = value1 - value2;
                document.getElementById("textResult").style.color = "red"
                valor1 = value1 - value2;
                break;
            case '/': document.getElementById("textResult").innerText = value1 / value2;
                document.getElementById("textResult").style.color = "red"
                valor1 = value1 / value2;
                break;
            case '*': document.getElementById("textResult").innerText = value1 * value2;
                document.getElementById("textResult").style.color = "red"
                valor1 = value1 * value2;
                break;


        }
    }
    else{
        alert("Digite um número !");
    }




}


function result() {

    const cb = document.getElementById("check");
        if(cb.checked == false)
        {
        snd.play();
        }
    value1 = parseFloat(valor1);   
    value2 = parseFloat(valor2);

    
    switch (lastSignal) {

        case '+': document.getElementById("textResult").innerText = value1 + value2;
            valor1 = value1 + value2;
            break;
        case '-': document.getElementById("textResult").innerText = value1 - value2;
            valor1 = value1 - value2;
            break;
        case '/': document.getElementById("textResult").innerText = value1 / value2;
            valor1 = value1 / value2;
            break;
        case '*': document.getElementById("textResult").innerText = value1 * value2;
            valor1 = value1 * value2;
            break;


    }
    let testaZero = parseFloat(valor1);
    if (testaZero != 0) {
        document.getElementById("textResult").style.color = "red"
       
    }
    document.getElementById("pSinal").innerText = ".";
    signal = "";
    lastSignal = "";

}

function floatNumber(){
    const cb = document.getElementById("check");
        if(cb.checked == false)
        {
        snd.play();
        }
    let recebe = document.getElementById("textResult").innerHTML;
    document.getElementById("textResult").style.color = "lawngreen"   
    document.getElementById("textResult").innerText = document.getElementById("textResult").innerText + ".";
        


}




function limpa() {
    const cb = document.getElementById("check");
        if(cb.checked == false)
        {
        snd.play();
        }
    liberaCalc = false;
    flag = false;
    flag1 = false;
    valor1 = "0";
    valor2 = "";
    value1 = 0;
    value2 = 0;
    signal = ".";
    lastSignal = "";

    document.getElementById("textResult").style.color = "lawngreen"
    document.getElementById("pSinal").innerText = signal;
    document.getElementById("textResult").innerText = "0";
}

var snd = new Audio("beep.wav"); 
