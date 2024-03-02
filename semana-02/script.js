array = [];

function insert() {
    let data = document.getElementById("data").value;
    array.push(data);
    array.sort();
    document.getElementById("form").reset();
    show(array);
}

function show(array) {
    let ol = document.getElementById("list");
    ol.innerHTML = "";
    for (i = 0; i < array.length; i++) {
        let li = document.createElement("li");
        let content = document.createTextNode(array[i]);
        li.appendChild(content);
        ol.appendChild(li);
    }
}