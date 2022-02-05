var d = document.getElementById("dibujito");
var text = document.getElementById("texto_linea");
var bton = document.getElementById("boton");
var lienzo = d.getContext("2d");
boton.addEventListener("click", DibujoPorClick);
var ancho = d.clientWidth;

function dibujarLinea(color, xinicial,yinicial,xfinal,yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function DibujoPorClick(){
  var lineas  = parseInt(text.value);
  var l = 0;
  var yi , xf;
  var color2 = "red";
  var color3 = "blue";
  var espacio = ancho / lineas;


  for (l = 0; l< lineas; l++) {
  yi = espacio *l;
  xf = espacio * (l + 1);
  dibujarLinea(color2, 0 , yi, xf, ancho);
  }
  dibujarLinea(color2, 1, 1, 1 ,300)
  dibujarLinea(color2, 1, 299, 299 ,299)

  for (l = 0 ; l< lineas; l++) {
  yi = espacio * (l + 1);
  xf = espacio *l;
  dibujarLinea(color3, ancho, yi, xf, 0);

  }
  dibujarLinea(color3, 299, 299, 299 ,1);
  dibujarLinea(color3, 300, 1, 1 ,1);

}
