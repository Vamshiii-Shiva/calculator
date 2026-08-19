const display = document.getElementById("display");

const buttons = document.querySelectorAll(".buttons button");

const historyList = document.getElementById("historyList");

const clearHistory = document.getElementById("clearHistory");


function calculate() {

    try {

        const expression = display.value;

        const result = eval(expression);

        display.value = result;


        const historyItem = document.createElement("li");

        historyItem.textContent =
            expression + " = " + result;

        historyList.prepend(historyItem);

    }

    catch {

        display.value = "Error";

    }

}


buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const value = button.textContent;


        if (value === "C") {

            display.value = "";

        }


        else if (value === "⌫") {

            display.value =
                display.value.slice(0, -1);

        }


        else if (value === "%") {

            if (display.value !== "") {

                display.value =
                    Number(display.value) / 100;

            }

        }


        else if (value === "=") {

            if (display.value !== "") {

                calculate();

            }

        }


        else {

            display.value += value;

        }

    });

});


/* Keyboard */

document.addEventListener("keydown", function(event) {

    const key = event.key;


    if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
    ) {

        display.value += key;

    }


    else if (key === "Enter") {

        calculate();

    }


    else if (key === "Backspace") {

        display.value =
            display.value.slice(0, -1);

    }


    else if (key === "Escape") {

        display.value = "";

    }

});


/* Clear History */

clearHistory.addEventListener("click", function() {

    historyList.innerHTML = "";

});