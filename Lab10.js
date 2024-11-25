//function calcSum(){
//let box1 = document.getElementById("box1").value;
//let box2 = document.getElementById("box2").value;
//let sum = Number(box1) + Number(box2);
//document.getElementById("output").value = sum;
//}




var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("output");

document.getElementById("add").addEventListener("click", function() {
  res.value = parseInt(n1.value)+parseInt(n2.value);
});


document.getElementById("sub").addEventListener("click", function() {
  res.value = parseInt(n1.value)-parseInt(n2.value);
});


document.getElementById("mul").addEventListener("click", function() {
  res.value = parseInt(n1.value)*parseInt(n2.value);
});


document.getElementById("divi").addEventListener("click", function() {
  res.value = parseInt(n1.value)/parseInt(n2.value);
});
