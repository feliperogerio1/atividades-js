function ex01() {
    let currentDate = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }
    document.getElementById('response-ex01').innerText = currentDate.toLocaleDateString('pt-BR', options);
}

function ex02() {
    const date = new Date();
    document.getElementById("response-ex02").innerHTML = date.toLocaleTimeString();
    setTimeout(function() {ex02()}, 1000);
}

function ex03() {
    let text = document.getElementById("data").value;
    let reverseText = "";
    for (let i = 0; i < text.length; i++) {
        reverseText = reverseText + text[(text.length - 1) - i];
    }
    textFormatted = text.toLowerCase().replace(/ /g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, '');
    reverseTextFormatted = reverseText.toLowerCase().replace(/ /g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, '');
    if (textFormatted == reverseTextFormatted) {
        alert(text + " é um palíndromo.");
    } else {
        alert(text + " não é um palíndromo.");
    }
}