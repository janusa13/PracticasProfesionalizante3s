let nombres = [];
let nombresOrdenados = [];
let nombresOrdenadosComparacion = [];
let nombresAlfabeticos = [];

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
        crearNombre.setAttribute("draggable", "true");
        crearNombre.setAttribute("ondragstart", "arrastrar(event)");
        let listItem = document.createElement("li");
        listItem.appendChild(crearNombre);
        listaNombres.appendChild(listItem);
      }
      nombresOrdenadosComparacion = ordernarNombres(nombres);
      console.log(nombresOrdenadosComparacion);
    });
}

obtenerNombres();

function arrastrar(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function permitirSoltar(ev) {
  ev.preventDefault();
}

function soltar(ev) {
  ev.preventDefault();
  let data = ev.dataTransfer.getData("text");
  let nombreArrastrado = document.getElementById(data).textContent;
  nombresOrdenados.push(nombreArrastrado);
  actualizarNombresOrdenados();
  document.getElementById(data).parentNode.remove();
}

function actualizarNombresOrdenados() {
  let nombresOrdenadosDiv = document.getElementById("nombresOrdenados");
  nombresOrdenadosDiv.innerHTML = "";
  nombresOrdenados.forEach((nombre) => {
    let nombreDiv = document.createElement("div");
    nombreDiv.textContent = nombre;
    nombresOrdenadosDiv.appendChild(nombreDiv);
  });
}

function ordernarNombres(nombres) {
  nombresAlfabeticos = nombres
    .slice()
    .sort((c, d) => c.toLowerCase().localeCompare(d.toLowerCase()));

  return nombresAlfabeticos;
}
