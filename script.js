"use strict";

const display = document.querySelector(".display");
const display2 = document.querySelector(".display2");
const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal");
const clearAll = document.querySelector(".clearAll");
const clearLast = document.querySelector(".clearLast");
const decimal = document.querySelector("#decimal");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let content = button.getAttribute("data-action");
    let operation = button.getAttribute("data-operation");
    if (display2.textContent === "0" && content === ".") {
      display2.textContent += content;
    } else if (display2.textContent === "0") {
      display2.textContent = content;
      if (
        operation === "+" ||
        operation === "-" ||
        operation === "*" ||
        operation === "/"
      ) {
        display.textContent = 0 + " " + operation;
      }
    } else if (content === "." && display2.textContent.includes(".")) {
      return;
    } else if (content === "-") {
      display2.textContent = "-" + display2.textContent;
    } else if (display2.textContent === "" && operation != null) {
      return;
    } else if (
      display.textContent !== "" &&
      display2.textContent !== "" &&
      operation
    ) {
      const getTotal = `${display.textContent} ${display2.textContent}`;
      let result = eval(getTotal);
      display2.textContent = result;
      display.textContent = "";
      display2.textContent += " " + operation;
      if (operation != null) {
        display.textContent = `${display2.textContent}`;
        display2.textContent = "";
      } else {
        display2.textContent += content;
      }
    } else {
      if (operation != null) {
        display.textContent = `${display2.textContent} ${operation}`;
        display2.textContent = "";
      } else {
        display2.textContent += content;
      }
    }
  });
});
equal.addEventListener("click", () => {
  if (display.textContent === "" || display2.textContent === "") {
    return;
  }
  const values = `${display.textContent} ${display2.textContent}`;
  let total = eval(values);
  display.textContent = "";
  display2.textContent = total;
});

clearAll.addEventListener("click", () => {
  display2.textContent = "0";
  display.textContent = "";
});

clearLast.addEventListener("click", () => {
  let digits = display2.textContent;
  let digit = digits.split("");
  digit.pop();
  display2.textContent = digit.join("");
  if (digit.length == 0) {
    display2.textContent = "0";
    display.textContent = "";
  }
});
