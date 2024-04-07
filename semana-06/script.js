let container = document.getElementById("container");
let displaySpanValue = '0';

window.onload = function() {
    loadPage();
    getKeys();
}

function getKeys() {
    const keys = document.getElementsByClassName("key");
    for (let i = 0; i < keys.length; i++){
        keys[i].addEventListener('click', e => {
            const key = e.currentTarget;
            const span = key.querySelector("span");
            const action = span.getAttribute("data-action");
            const spanTextContent = span.textContent;
            const previousKeyType = container.dataset.previousKeyType;
            if (!action) {
                if (displaySpanValue == '0' || previousKeyType == 'operator') {
                    displaySpanValue = spanTextContent;
                } else {
                    displaySpanValue = displaySpanValue + spanTextContent;
                }
                container.dataset.previousKeyType = 'number';
            }
            if (action == 'decimal') {
                container.dataset.previousKeyType = 'number'
                if (!displaySpanValue.includes('.')) {
                    displaySpanValue = displaySpanValue + '.';
                } else if (previousKeyType == 'operator') {
                    displaySpanValue = '0.';
                }
                container.dataset.previousKeyType = 'decimal';
            }
            if (action == 'change') {
                if (displaySpanValue != '0') {
                    displaySpanValue = parseFloat(displaySpanValue);
                    displaySpanValue *= -1;
                }
            }
            if (action == 'clear') {
                container.dataset.firstValue = '';
                container.dataset.operator = '';
                container.dataset.previousKeyType = '';
                container.dataset.previousKeyType = 'clear';
                displaySpanValue = '0';
            }
            if (action == 'percentage') {
                displaySpanValue = parseFloat(displaySpanValue) / 100;
            }
            if (action == 'add' || 
                action == 'subtract' ||
                action == 'multiply' ||
                action == 'divide') {
                container.dataset.previousKeyType = 'operator';
                container.dataset.firstValue = displaySpanValue;
                container.dataset.operator = action;
            }
            if (action == 'calculate') {
                const firstValue = container.dataset.firstValue;
                const operator = container.dataset.operator;
                const secondValue = displaySpanValue;
                if (firstValue) {
                    displaySpanValue = calculate(firstValue, operator, secondValue);
                    container.dataset.previousKeyType = 'calculate';
                }
            }
            displaySpanValue = displaySpanValue.toString();
            if (displaySpanValue.length < 10) {
                displaySpan.style.fontSize = '45px';
            } else if (displaySpanValue.length < 15) {
                displaySpan.style.fontSize = '30px';
            } else if (displaySpanValue.length < 20) {
                displaySpan.style.fontSize = '20px'
            }
            if (displaySpanValue.length < 20) {
                updateDisplay();
            }
        });
    }
}

function updateDisplay() {
    const displaySpan = document.getElementById('displaySpan');
    displaySpan.textContent = displaySpanValue;
}

function calculate(value1, operator, value2) {
    let result = '';

    if (operator == 'add') {
        result = parseFloat(value1) + parseFloat(value2);
    } else if (operator == 'subtract') {
        result = parseFloat(value1) - parseFloat(value2);
    } else if (operator == 'multiply') {
        result = parseFloat(value1) * parseFloat(value2);
    } else if (operator == 'divide') {
        result = parseFloat(value1) / parseFloat(value2);
    }

    return result;
}

function loadPage() {
    container.innerHTML = "";
    var mainContainer = document.createElement("div");

    var containerDisplay = document.createElement("div");
    var containerDisplaySpan = document.createElement("div");
    var displaySpan = document.createElement("p");
    var displaySpanContent = document.createTextNode(displaySpanValue);
    displaySpan.appendChild(displaySpanContent);
    containerDisplaySpan.appendChild(displaySpan);
    containerDisplay.appendChild(containerDisplaySpan);

    var firstContainer = document.createElement("div");

    var firstContainerCol1 = document.createElement("div");
    var firstContainerCol1SpanContainer = document.createElement("div");
    var firstContainerCol1Span = document.createElement("span");
    var firstContainerCol1SpanContent = document.createTextNode("AC");
    firstContainerCol1Span.appendChild(firstContainerCol1SpanContent);
    firstContainerCol1SpanContainer.appendChild(firstContainerCol1Span);
    firstContainerCol1.appendChild(firstContainerCol1SpanContainer);
    
    var firstContainerCol2 = document.createElement("div");
    var firstContainerCol2SpanContainer = document.createElement("div");
    var firstContainerCol2Span = document.createElement("span");
    var firstContainerCol2SpanContent = document.createTextNode("+/-");
    firstContainerCol2Span.appendChild(firstContainerCol2SpanContent);
    firstContainerCol2SpanContainer.appendChild(firstContainerCol2Span);
    firstContainerCol2.appendChild(firstContainerCol2SpanContainer);

    var firstContainerCol3 = document.createElement("div");
    var firstContainerCol3SpanContainer = document.createElement("div");
    var firstContainerCol3Span = document.createElement("span");
    var firstContainerCol3SpanContent = document.createTextNode("%");
    firstContainerCol3Span.appendChild(firstContainerCol3SpanContent);
    firstContainerCol3SpanContainer.appendChild(firstContainerCol3Span);
    firstContainerCol3.appendChild(firstContainerCol3SpanContainer);
    
    var firstContainerCol4 = document.createElement("div");
    var firstContainerCol4SpanContainer = document.createElement("div");
    var firstContainerCol4Span = document.createElement("span");
    var firstContainerCol4SpanContent = document.createTextNode("/");
    firstContainerCol4Span.appendChild(firstContainerCol4SpanContent);
    firstContainerCol4SpanContainer.appendChild(firstContainerCol4Span);
    firstContainerCol4.appendChild(firstContainerCol4SpanContainer);

    firstContainer.appendChild(firstContainerCol1);
    firstContainer.appendChild(firstContainerCol2);
    firstContainer.appendChild(firstContainerCol3);
    firstContainer.appendChild(firstContainerCol4);

    var secondContainer = document.createElement("div");

    var secondContainerCol1 = document.createElement("div");
    var secondContainerCol1SpanContainer = document.createElement("div");
    var secondContainerCol1Span = document.createElement("span");
    var secondContainerCol1SpanContent = document.createTextNode("7");
    secondContainerCol1Span.appendChild(secondContainerCol1SpanContent);
    secondContainerCol1SpanContainer.appendChild(secondContainerCol1Span);
    secondContainerCol1.appendChild(secondContainerCol1SpanContainer);

    var secondContainerCol2 = document.createElement("div");
    var secondContainerCol2SpanContainer = document.createElement("div");
    var secondContainerCol2Span = document.createElement("span");
    var secondContainerCol2SpanContent = document.createTextNode("8");
    secondContainerCol2Span.appendChild(secondContainerCol2SpanContent);
    secondContainerCol2SpanContainer.appendChild(secondContainerCol2Span);
    secondContainerCol2.appendChild(secondContainerCol2SpanContainer);

    var secondContainerCol3 = document.createElement("div");
    var secondContainerCol3SpanContainer = document.createElement("div");
    var secondContainerCol3Span = document.createElement("span");
    var secondContainerCol3SpanContent = document.createTextNode("9");
    secondContainerCol3Span.appendChild(secondContainerCol3SpanContent);
    secondContainerCol3SpanContainer.appendChild(secondContainerCol3Span);
    secondContainerCol3.appendChild(secondContainerCol3SpanContainer);
    
    var secondContainerCol4 = document.createElement("div");
    var secondContainerCol4SpanContainer = document.createElement("div");
    var secondContainerCol4Span = document.createElement("span");
    var secondContainerCol4SpanContent = document.createTextNode("X");
    secondContainerCol4Span.appendChild(secondContainerCol4SpanContent);
    secondContainerCol4SpanContainer.appendChild(secondContainerCol4Span);
    secondContainerCol4.appendChild(secondContainerCol4SpanContainer);

    secondContainer.appendChild(secondContainerCol1);
    secondContainer.appendChild(secondContainerCol2);
    secondContainer.appendChild(secondContainerCol3);
    secondContainer.appendChild(secondContainerCol4);

    var thirdContainer = document.createElement("div");

    var thirdContainerCol1 = document.createElement("div");
    var thirdContainerCol1SpanContainer = document.createElement("div");
    var thirdContainerCol1Span = document.createElement("span");
    var thirdContainerCol1SpanContent = document.createTextNode("4");
    thirdContainerCol1Span.appendChild(thirdContainerCol1SpanContent);
    thirdContainerCol1SpanContainer.appendChild(thirdContainerCol1Span);
    thirdContainerCol1.appendChild(thirdContainerCol1SpanContainer);

    var thirdContainerCol2 = document.createElement("div");
    var thirdContainerCol2SpanContainer = document.createElement("div");
    var thirdContainerCol2Span = document.createElement("span");
    var thirdContainerCol2SpanContent = document.createTextNode("5");
    thirdContainerCol2Span.appendChild(thirdContainerCol2SpanContent);
    thirdContainerCol2SpanContainer.appendChild(thirdContainerCol2Span);
    thirdContainerCol2.appendChild(thirdContainerCol2SpanContainer);
    
    var thirdContainerCol3 = document.createElement("div");
    var thirdContainerCol3SpanContainer = document.createElement("div");
    var thirdContainerCol3Span = document.createElement("span");
    var thirdContainerCol3SpanContent = document.createTextNode("6");
    thirdContainerCol3Span.appendChild(thirdContainerCol3SpanContent);
    thirdContainerCol3SpanContainer.appendChild(thirdContainerCol3Span);
    thirdContainerCol3.appendChild(thirdContainerCol3SpanContainer);
    
    var thirdContainerCol4 = document.createElement("div");
    var thirdContainerCol4SpanContainer = document.createElement("div");
    var thirdContainerCol4Span = document.createElement("span");
    var thirdContainerCol4SpanContent = document.createTextNode("-");
    thirdContainerCol4Span.appendChild(thirdContainerCol4SpanContent);
    thirdContainerCol4SpanContainer.appendChild(thirdContainerCol4Span);
    thirdContainerCol4.appendChild(thirdContainerCol4SpanContainer);

    thirdContainer.appendChild(thirdContainerCol1);
    thirdContainer.appendChild(thirdContainerCol2);
    thirdContainer.appendChild(thirdContainerCol3);
    thirdContainer.appendChild(thirdContainerCol4);

    var fourthContainer = document.createElement("div");

    var fourthContainerCol1 = document.createElement("div");
    var fourthContainerCol1SpanContainer = document.createElement("div");
    var fourthContainerCol1Span = document.createElement("span");
    var fourthContainerCol1SpanContent = document.createTextNode("1");
    fourthContainerCol1Span.appendChild(fourthContainerCol1SpanContent);
    fourthContainerCol1SpanContainer.appendChild(fourthContainerCol1Span);
    fourthContainerCol1.appendChild(fourthContainerCol1SpanContainer);

    var fourthContainerCol2 = document.createElement("div");
    var fourthContainerCol2SpanContainer = document.createElement("div");
    var fourthContainerCol2Span = document.createElement("span");
    var fourthContainerCol2SpanContent = document.createTextNode("2");
    fourthContainerCol2Span.appendChild(fourthContainerCol2SpanContent);
    fourthContainerCol2SpanContainer.appendChild(fourthContainerCol2Span);
    fourthContainerCol2.appendChild(fourthContainerCol2SpanContainer);

    var fourthContainerCol3 = document.createElement("div");
    var fourthContainerCol3SpanContainer = document.createElement("div");
    var fourthContainerCol3Span = document.createElement("span");
    var fourthContainerCol3SpanContent = document.createTextNode("3");
    fourthContainerCol3Span.appendChild(fourthContainerCol3SpanContent);
    fourthContainerCol3SpanContainer.appendChild(fourthContainerCol3Span);
    fourthContainerCol3.appendChild(fourthContainerCol3SpanContainer);

    var fourthContainerCol4 = document.createElement("div");
    var fourthContainerCol4SpanContainer = document.createElement("div");
    var fourthContainerCol4Span = document.createElement("span");
    var fourthContainerCol4SpanContent = document.createTextNode("+");
    fourthContainerCol4Span.appendChild(fourthContainerCol4SpanContent);
    fourthContainerCol4SpanContainer.appendChild(fourthContainerCol4Span);
    fourthContainerCol4.appendChild(fourthContainerCol4SpanContainer);

    fourthContainer.appendChild(fourthContainerCol1);
    fourthContainer.appendChild(fourthContainerCol2);
    fourthContainer.appendChild(fourthContainerCol3);
    fourthContainer.appendChild(fourthContainerCol4);

    var fifthContainer = document.createElement("div");
    
    var fifthContainerCol1 = document.createElement("div");
    var fifthContainerCol1SpanContainer = document.createElement("div");
    var fifthContainerCol1Span = document.createElement("span");
    var fifthContainerCol1SpanContent = document.createTextNode("0");
    fifthContainerCol1Span.appendChild(fifthContainerCol1SpanContent);
    fifthContainerCol1SpanContainer.appendChild(fifthContainerCol1Span);
    fifthContainerCol1.appendChild(fifthContainerCol1SpanContainer);

    var fifthContainerCol2 = document.createElement("div");
    var fifthContainerCol2SpanContainer = document.createElement("div");
    var fifthContainerCol2Span = document.createElement("span");
    var fifthContainerCol2SpanContent = document.createTextNode(".");
    fifthContainerCol2Span.appendChild(fifthContainerCol2SpanContent);
    fifthContainerCol2SpanContainer.appendChild(fifthContainerCol2Span);
    fifthContainerCol2.appendChild(fifthContainerCol2SpanContainer);

    var fifthContainerCol3 = document.createElement("div");
    var fifthContainerCol3SpanContainer = document.createElement("div");
    var fifthContainerCol3Span = document.createElement("span");
    var fifthContainerCol3SpanContent = document.createTextNode("=");
    fifthContainerCol3Span.appendChild(fifthContainerCol3SpanContent);
    fifthContainerCol3SpanContainer.appendChild(fifthContainerCol3Span);
    fifthContainerCol3.appendChild(fifthContainerCol3SpanContainer);

    fifthContainer.appendChild(fifthContainerCol1);
    fifthContainer.appendChild(fifthContainerCol2);
    fifthContainer.appendChild(fifthContainerCol3);

    mainContainer.appendChild(containerDisplay);
    mainContainer.appendChild(firstContainer);
    mainContainer.appendChild(secondContainer);
    mainContainer.appendChild(thirdContainer);
    mainContainer.appendChild(fourthContainer);
    mainContainer.appendChild(fifthContainer);

    container.appendChild(mainContainer);

    container.setAttribute("class", "container d-flex justify-content-center");
    container.setAttribute("style", "padding-top: 50px;")
    mainContainer.setAttribute("style", "width: 250px; height: 350px; padding: 6px; background-color: #000000");

    containerDisplay.setAttribute("class", "row mb-2");
    firstContainer.setAttribute("class", "row mb-2");
    secondContainer.setAttribute("class", "row mb-2");
    thirdContainer.setAttribute("class", "row mb-2");
    fourthContainer.setAttribute("class", "row mb-2");
    fifthContainer.setAttribute("class", "row");

    containerDisplaySpan.setAttribute("class", "d-flex justify-content-end");
    
    displaySpan.setAttribute("style", "font-size: 45px; color: #FFFFFF; width: 100%; text-align: right; margin-right: 8px;");
    displaySpan.setAttribute("id", "displaySpan")

    firstContainerCol1.setAttribute("class", "col-3");
    firstContainerCol2.setAttribute("class", "col-3");
    firstContainerCol3.setAttribute("class", "col-3");
    firstContainerCol4.setAttribute("class", "col-3");

    firstContainerCol1SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #A5A5A5; border-radius: 25px; cursor: default;");
    firstContainerCol1SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    firstContainerCol1Span.setAttribute("data-action", "clear");
    firstContainerCol2SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #A5A5A5; border-radius: 25px; cursor: default;");
    firstContainerCol2SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    firstContainerCol2Span.setAttribute("data-action", "change");
    firstContainerCol3SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #A5A5A5; border-radius: 25px; cursor: default;");
    firstContainerCol3SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    firstContainerCol3Span.setAttribute("data-action", "percentage");
    firstContainerCol4SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #FF9A00; border-radius: 25px; cursor: default;");
    firstContainerCol4SpanContainer.setAttribute("class", "d-flex justify-content-center key operator");
    firstContainerCol4Span.setAttribute("data-action", "divide");

    firstContainerCol1Span.setAttribute("style", "font-size: 21px; color: #1B1B1B");
    firstContainerCol2Span.setAttribute("style", "font-size: 21px; color: #1B1B1B");
    firstContainerCol3Span.setAttribute("style", "font-size: 21px; color: #1B1B1B");
    firstContainerCol4Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    
    secondContainerCol1.setAttribute("class", "col-3");
    secondContainerCol2.setAttribute("class", "col-3");
    secondContainerCol3.setAttribute("class", "col-3");
    secondContainerCol4.setAttribute("class", "col-3");

    secondContainerCol1SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    secondContainerCol1SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    secondContainerCol2SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    secondContainerCol2SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    secondContainerCol3SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    secondContainerCol3SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    secondContainerCol4SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #FF9A00; border-radius: 25px; cursor: default;");
    secondContainerCol4SpanContainer.setAttribute("class", "d-flex justify-content-center key operator");
    secondContainerCol4Span.setAttribute("data-action", "multiply");

    secondContainerCol1Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    secondContainerCol2Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    secondContainerCol3Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    secondContainerCol4Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");

    thirdContainerCol1.setAttribute("class", "col-3");
    thirdContainerCol2.setAttribute("class", "col-3");
    thirdContainerCol3.setAttribute("class", "col-3");
    thirdContainerCol4.setAttribute("class", "col-3");

    thirdContainerCol1SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    thirdContainerCol1SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    thirdContainerCol2SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    thirdContainerCol2SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    thirdContainerCol3SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    thirdContainerCol3SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    thirdContainerCol4SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #FF9A00; border-radius: 25px; cursor: default;");
    thirdContainerCol4SpanContainer.setAttribute("class", "d-flex justify-content-center key operator");
    thirdContainerCol4Span.setAttribute("data-action", "subtract");

    thirdContainerCol1Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    thirdContainerCol2Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    thirdContainerCol3Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    thirdContainerCol4Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");

    fourthContainerCol1.setAttribute("class", "col-3");
    fourthContainerCol2.setAttribute("class", "col-3");
    fourthContainerCol3.setAttribute("class", "col-3");
    fourthContainerCol4.setAttribute("class", "col-3");

    fourthContainerCol1SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    fourthContainerCol1SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    fourthContainerCol2SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    fourthContainerCol2SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    fourthContainerCol3SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    fourthContainerCol3SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    fourthContainerCol4SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #FF9A00; border-radius: 25px; cursor: default;");
    fourthContainerCol4SpanContainer.setAttribute("class", "d-flex justify-content-center key operator");
    fourthContainerCol4Span.setAttribute("data-action", "add")

    fourthContainerCol1Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    fourthContainerCol2Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    fourthContainerCol3Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    fourthContainerCol4Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");

    fifthContainerCol1.setAttribute("class", "col-6");
    fifthContainerCol2.setAttribute("class", "col-3");
    fifthContainerCol3.setAttribute("class", "col-3");

    fifthContainerCol1SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    fifthContainerCol1SpanContainer.setAttribute("class", "d-flex justify-content-start key");
    fifthContainerCol2SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #333333; border-radius: 25px; cursor: default;");
    fifthContainerCol2SpanContainer.setAttribute("class", "d-flex justify-content-center key");
    fifthContainerCol2Span.setAttribute("data-action", "decimal")
    fifthContainerCol3SpanContainer.setAttribute("style", "width: 100%; height: 100%; padding: 5px; background-color: #FF9A00; border-radius: 25px; cursor: default;");
    fifthContainerCol3SpanContainer.setAttribute("class", "d-flex justify-content-center key equal");
    fifthContainerCol3Span.setAttribute("data-action", "calculate");

    fifthContainerCol1Span.setAttribute("style", "font-size: 21px; color: #FFFFFF; margin-left: 9px;");
    fifthContainerCol2Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
    fifthContainerCol3Span.setAttribute("style", "font-size: 21px; color: #FFFFFF");
}