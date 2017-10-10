// var data = [1, 2, 3];
//         var paragraph = d3.select("body")
//                 .selectAll("p")
//                 .data(data)
//                 .text(function (d, i) {
//                     console.log("d: " + d);
//                     console.log("i: " + i);
//                     console.log("this: " + this);
//
//                     return d;
//                 });


// var text = this.innerText;
//
// if (text.indexOf("Error") >= 0) {
//   return 'red';
// } else if (text.indexOf("Warning") >= 0) {
//   return yellow;
// }



  var datos = [135, 100, 150, 125, 225, 175];
  var config = {
    columnWidth: 55,
    columnGap: 25,
    margin: 100,
    height: 300
  };

  d3.select("svg")
      .selectAll("rect") // seleccionamos todos los rectangulos
      .data(datos)      // El use de los elementos del array
      .enter().append("rect") // si no hay rectangulos con ese metodo se crean


      // lo que sigue son las indicaciones para calcular los distintos atributos de rect
      .attr("width", config.columnWidth) //calculamos el ancho
      .attr("x", function(d,i) {      //calculamos la ubicacion x
         return config.margin + i * (config.columnWidth + config.columnGap)
       })
      .attr("y", function(d,i) {
        return config.height - d
        })
      .attr("height", function(d,i) {
        return d
        });
