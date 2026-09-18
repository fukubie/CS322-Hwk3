let results = [];

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
  let x = prompt("Enter first number:");
  if (x === null) break;
  let y = prompt("Enter second number:");
  if (y === null) break;
  let operator = prompt("Enter operator (+, -, *, /, %):");
  if (operator === null) break;

  let result;
  if (isNaN(x) || isNaN(y) || x.trim() === "" || y.trim() === "") {
    result = "Error";
  } else if (operator === "+") {
    result = Number(x) + Number(y);
  } else if (operator === "-") {
    result = Number(x) - Number(y);
  } else if (operator === "*") {
    result = Number(x) * Number(y);
  } else if (operator === "/") {
    result = Number(x) / Number(y);
  } else if (operator === "%") {
    result = Number(x) % Number(y);
  } else {
    result = "Error";
  }

  if (result !== "Error") {
    results.push(result);
  }

  document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
}
document.write("</table>");

let total = 0;
let min = results[0];
let max = results[0];

for (let i = 0; i < results.length; i++) {
  total += results[i];
  if (results[i] < min) min = results[i];
  if (results[i] > max) max = results[i];
}
let avg = results.length ? total / results.length : 0;

document.write("<table>");
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
document.write("</table>");