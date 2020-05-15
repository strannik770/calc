"use strict"

let result = document.querySelector(".result");
let numbers = document.querySelector(".numbers");
let operations = document.querySelector(".operations");

numbers.addEventListener("click", addNumber);
operations.addEventListener("click", addOperation);

function addNumber(event) {
	let target = event.target;
	if (target.className != "cell") return;

	result.innerHTML += target.id;
}

function addOperation(event) {
	let target = event.target;
	if (target.className != "cell") return;

	switch (target.id) {
		case "C":
			result.innerHTML = "";
			break;
		case "del":
			deleteLastElem();
			break;
		case "^2":
			square();
			break;
		case "=":
			calculate();
			break;
		default:
			calculate();
			result.innerHTML += " " +target.id+ " ";
	}
}

function calculate() {
	let arr =[];
	arr = result.innerHTML.split(" ");
	
	if (arr.length < 3 ) return;

	let a = +arr[0];
	let b = +arr[2];
	let op = arr[1];


	switch (op) {
		case "+":
			result.innerHTML = a + b;
			break;
		case "-":
			result.innerHTML = a - b;
			break;
		case ":":
			result.innerHTML = a/b;
			break;
		case "*":
			result.innerHTML = a * b;
			break;
	}
}

function square() {
	result.innerHTML =  Math.pow(+(result.innerHTML),2);
}

function deleteLastElem() {
	result.innerHTML = result.innerHTML.slice(0,result.innerHTML.length-1);
}



