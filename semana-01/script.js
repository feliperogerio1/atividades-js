function ex01() {
    let response = document.getElementById("response-ex01");
    let data = prompt("Digite algo:");
    if (confirm("Deseja verificar o tipo de seu dado?")) {
        if (parseInt(data) == data) {
            type = "int";
        } else if (parseFloat(data) == data) {
            type = "float";
        } else {
            type = "string";
        }
        result = "O tipo do dado é: " + type;
    } else {
        result = "Obrigado por visitar esta página.";
    }
    response.innerHTML = "";
    response.innerHTML = result;
}

function ex02() {
    let number1 = prompt("Digite um número inteiro positivo:");
    let count = 0;
    for (i = 0; i <= number1; i++) {
        if (number1 % i == 0) {
            count++;
        }
    }
    if (count > 2) {
        alert(number1 + " não é um número primo.");
    } else {
        alert(number1 + " é um número primo.");
    }
} 
      
function ex03() {
    let number2 = prompt("Digite um número inteiro positivo:");
    if (number2 % 2 == 0) {
        alert(number2 + " é um número par.");
    } else {
        alert(number2 + " é um número ímpar.");
    }
}

function ex04() {
    let number3 = prompt("Digite um número inteiro positivo:");
    if (number3 > 0) {
        let factorial = 1;
        for (i = 0; i < number3; i++) {
            factorial = factorial + (factorial * i);
        }
        alert("O fatorial de " + number3 + " é: " + factorial);
    } else {
        alert("Este não é um número válido!");
    }
}