// elements
const calcContainer = document.querySelector(".calc-container");
const navbar = document.querySelector(".navbar");
const resulsElement = document.getElementById("result");
const clearButton = document.getElementById("clear");
const backspaceButton = document.getElementById("backspace");
const percentButton = document.getElementById("percent");
const operators = document.getElementById("operators").children;
const numsElements = document.getElementById("nums").children;

calcContainer.style.height = (window.innerHeight - navbar.scrollHeight) + "px";

// result section
// result structure
const resultHistory = document.createElement("div");
const currentResult = document.createElement("div");
// add classes
resultHistory.classList.add("history");
currentResult.classList.add("current-result");
// add structure to resulsElement
resulsElement.appendChild(resultHistory);
resulsElement.appendChild(currentResult);

// equation
let equation = {
    var1: "",
    sign: "",
    var2: ""
};

// controllers
// clear button
clearButton.addEventListener("click", function() {
    equation = {
        var1: "",
        sign: "",
        var2: ""
    };
    resultHistory.innerText = "";
    currentResult.innerText = "";
});
// backspace button
backspaceButton.addEventListener("click", function() {
    resultHistory.innerText = "";
    if(equation.var2 !== ""){
        equation.var2 = equation.var2.substring(0, equation.var2.length - 1);
        currentResult.innerText = `${equation.var1} ${equation.sign} ${equation.var2}`;
    }else if(equation.sign !== ""){
        equation.sign = "";
        currentResult.innerText = equation.var1;
    }else{
        if(equation.var1 !== ""){
            equation.var1 = equation.var1.substring(0, equation.var1.length - 1);
            currentResult.innerText = equation.var1;
        }else{
            console.log("there is no data in the equation");
        }
    }
})
// percent button
percentButton.addEventListener("click", function() {
    resultHistory.innerText = "";
    equation.sign = "/";
    if(equation.var2 !== ""){
        equation.var2 = equation.var2 / 100 + "";
        currentResult.innerText = `${equation.var1} ${equation.sign} ${equation.var2}`;
    }else if(equation.var1 !== ""){
        equation.var2 = "100";
        currentResult.innerText = `${equation.var1} ${equation.sign} ${equation.var2}`;
    }else{
        console.log("no values to handle");
    }
});

// nums
[...numsElements].forEach(element => {
    element.addEventListener("click", function() {
        if(equation.sign === ""){
            equation.var1 = `${equation.var1}${element.getAttribute("data-value")}`;
        }else{
            equation.var2 = `${equation.var2}${element.getAttribute("data-value")}`;
        }
        currentResult.innerText = `${equation.var1} ${equation.sign} ${equation.var2}`;
    });
});

// operators
[...operators].forEach(element => {
    element.addEventListener("click", function() {
        resultHistory.innerText = "";
        if(equation.var1 !== ""){
            switch (element.getAttribute("id")){
                case "division":
                    equation.sign = "/";
                    break;
                case "multiply":
                    equation.sign = "×";
                    break;
                case "subtract":
                    equation.sign = "-";
                    break;
                case "addition":
                    equation.sign = "+";
                    break;
                default:
                    getResult();
                    break;
            }
        }else{
            console.log("the first numper must not be empty");
        }
        currentResult.innerText = `${equation.var1} ${equation.sign} ${equation.var2}`;
    });
});

function getResult() {
    if(equation.var1 !== "" && equation.sign !== "" && equation.var2 !== "" ){
        const firstValue = Number(equation.var1.replace(/[^0-9]/g, ""));
        const secondValue = Number(equation.var2.replace(/[^0-9]/g, ""));
        console.log(firstValue);
        console.log(secondValue);

        var finalResult = "";
        switch (equation.sign){
            case "/":
                finalResult = firstValue / secondValue;
                break;
            case "×":
                finalResult = firstValue * secondValue;
                break;
            case "-":
                finalResult = firstValue - secondValue;
                break;
            default:
                finalResult = firstValue + secondValue;
                break;
        }
        resultHistory.innerText = `${equation.var1} ${equation.sign} ${equation.var2}`;
        console.log(finalResult);
        equation.var1 = finalResult.toString();
        equation.sign = "";
        equation.var2 = "";
        currentResult.innerText = finalResult;
    }else{
        console.log("the equation is missing a part");
    }
}