/* Conteúdo do JavaScript */
function calcular(oper) { /*criando função Calcular */
var valor1 = document.calcform.valor1.value;
var valor2 = document.calcform.valor2.value;

 if (oper == "soma") {
   var res = parseInt(valor1) + parseInt(valor2);
 } else {
   if (oper == "subtracao") {
   var res = valor1-valor2;
   } else {
      if (oper == "multiplicacao") {
      var res = valor1*valor2;
      } else {
      var res = valor1/valor2;
      }
   }
}

document.calcform.res.value = res;
}