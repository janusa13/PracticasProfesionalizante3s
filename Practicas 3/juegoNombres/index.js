let nombres = [];
let nombresOrdenados = [];
let nombresOrdenadosComparacion = [];

function obtenerNombres() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function pasarNombres(data) {
      let listaNombres = document.getElementById("listaNombres");
      for (i = 0; i < 10; i++) {
        nombres[i] = data[i].name;
        let crearNombre = document.createElement("button");
        crearNombre.textContent = nombres[i];
        crearNombre.setAttribute("id", i);
        crearNombre.setAttribute("class", "nombre");
        let listItem = document.createElement("li");
        listItem.appendChild(crearNombre);
        listaNombres.appendChild(listItem);
      }
    });
}

obtenerNombres();

let nombreSelected = [];
function clickearNombres() {
  let nombre = document.getElementsByClassName("nombre").value;
  nombreSelected.push(nombre);
}
