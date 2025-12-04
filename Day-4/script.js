function calculate() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let op = document.getElementById("op").value;
    let result;

    if (op == "+") {
        result = a + b;
    }
    else if (op == "-") {
        result = a - b;
    }
    else if (op == "*") {
        result = a * b;
    }
    else if (op == "/") {
        if (b == 0) {
            result = "Cannot divide by zero";
        } else {
            result = a / b;
        }
    }
    else {
        result = "Invalid operator";
    }

    document.getElementById("result").innerHTML = result;
}
