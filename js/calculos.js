// document.querySelector("#btnSomar").addEventListener("click", somarValores);

// function somarValores(){
//     var n1= parseFloat(document.querySelector("#numero1").value);
//     var n2= parseFloat(document.querySelector("#numero2").value);
//     var soma = n1+n2;
//     document.querySelector("#resultado").value = soma;

// }

document.querySelector("#btnSomar").addEventListener("click", function
(){
  var n1 = parseFloat(document.querySelector("#numero1").value);
  var n2 = parseFloat(document.querySelector("#numero2").value);
  var soma = n1+n2;
  document.querySelector("#resultado").value = soma;
});