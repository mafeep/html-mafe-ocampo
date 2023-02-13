document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
      name: "1",
      img: "image/1.png"
    },
    {
      name: "2",
      img: "image/2.png"
    },
    {
      name: "3",
      img: "image/3.png"
    },
    {
      name: "4",
      img: "image/4.png"
    },
    {
      name: "5",
      img: "image/5.png"
    },
    {
      name: "6",
      img: "image/6.png"
    },
    {
      name: "1",
      img: "image/1.png"
    },
    {
      name: "2",
      img: "image/2.png"
    },
    {
      name: "3",
      img: "image/3.png"
    },
    {
      name: "4",
      img: "image/4.png"
    },
    {
      name: "5",
      img: "image/5.png"
    },
    {
      name: "6",
      img: "image/6.png"
    }
  ];
});
const cuadricula = document.querySelector(".cuadricula");
const resultado = document.querySelector("#resultado");
var cartasEscogidas  = []:
var cartasEscogidasId = [];
var cartasGanadas = [];
function crearTablero () {
  for (let i = 0; i< cardsAdj.length; i++) {
    var carta = document.createElement ('img');
    carta.setAttribute('src', 'image/reverso.png');
    carta.setAttribute('data-id', i);
    carta.addEventListener('click', voltearcarta);
    cuadricula.appendChild(carta);
   }
  }  
});

