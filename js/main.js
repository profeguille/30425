//https://pokeapi.co/api/v2/pokemon/snorlax

function clickEnProducto(id) {
  alert('click en ' + id);
}

/* fetch('./data.json')
  .then((resinicial) => resinicial.json())
  .then((res) => {
    const miArray = res;

    let htmlAux = '';
    for (let i = 0; i < miArray.length; i++) {
      htmlAux =
        htmlAux +
        `<div onclick="clickEnProducto(${miArray[i].id})">
            <h3>${miArray[i].name}</h3>            
            <p>${miArray[i].price}</p>            
        </div>`;
    }
    document.getElementById('listadoDeProductos').innerHTML = htmlAux;
    console.log(htmlAux);
  })
  .catch((e) => {
    console.log(e);
  }); */

/* class Producto {
  constructor(id, name, price) {
    this.name = name;
    this.id = id;
    this.price = price;
  }
  mostrarse() {
    console.log(this.id, this.name, this.price);
  }
}
let miArrayProducto = [];

async function fetchInicial() {
  const res1 = await fetch('./data.json');
  auxArray = await res1.json();

  auxArray.forEach((item) => {
    miArrayProducto.push(new Producto(item.id, item.name, item.price));
  });

  miArrayProducto[0].mostrarse();
}

fetchInicial(); */
