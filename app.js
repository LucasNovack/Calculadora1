
var operador = ""

//Função que realiza a limpeza do display

function limpa(){
    let campoLimpo = document.getElementById("resultado")
    campoLimpo.innerText = "0"
}

// Função que captura o operador escolhido pelo usuário

function operacao(simbolo){ // Switch será realizado no pârametro passado pela função
    switch (simbolo){
        case "+":
            operador = "+"
            break
        case "-":
            operador = "-"
             break 
        case "*":
            operador = "*"
            break  
        case "/":
            operador = "/"
            break         
    }

    let opDisplay = document.getElementById("resultado").innerText += operador 
    
    /*

    BUG A VISTA!!!!!

    Essa função permite que o usuário insira mais de um operador por vez, fazendo com que o calculo com o eval quebre...
    Se você quiser me ajudar a construir isso, podes dar um toque :D

    */

}
   

function capturaNum(num){

    let numDisplay = document.getElementById("resultado").innerText
    let displayLength = numDisplay.length
    const maxLength = 20 // Determina um máximo de carácteres para a calculadora

    if (displayLength < maxLength){

        if (numDisplay == "0"){
            num1 = document.getElementById("resultado").innerText = num
        } else if (numDisplay !== "0"){
            num1 = document.getElementById("resultado").innerText = numDisplay += num
        }
} else{
    alert("A calculadora aceita um máximo de 20 caracteres :(")
    limpa()
}
       
}

function calcular(){
    let resultado = document.getElementById("resultado").innerHTML
    if(resultado){
        document.getElementById("resultado").innerHTML = eval(resultado) // Como não há conexões com o banco de dados, é possivel usar o eval.
    }
}
