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

  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];
  function crearTablero() {
    for (let i = 0; i < cardsAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "image/12.png");
      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearcarta);
      cuadricula.appendChild(carta);
    }
  }
  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "image/12.png");
      cards[opcionDosId].setAttribute("src", "image/12.png");
      alert("¡Diste click en la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡correcto!");
      cards[opcionUnoId].setAttribute("src", "image/11.png");
      cards[opcionDosId].setAttribute("src", "image/11.png");
      cards[opcionUnoId].removeEventListener("click", voltearcarta);
      cards[opcionDosId].removeEventListener("click", voltearcarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "image/12.png");
      cards[opcionDosId].setAttribute("src", "image/12.png");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardsAdj.length / 2) {
      resultado.textContent = "¡Felicidades, encontraste todos los pares!";
    }
  }

  function voltearcarta() {
    var carsdId = this.getAttribute("data-id");
    cartasEscogidas.push(cardsAdj[carsdId].name);
    cartasEscogidasId.push(carsdId);
    this.setAttribute("src", cardsAdj[carsdId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
