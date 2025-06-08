const board = document.getElementById("game-board");
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg', 'pic8.jpg'];
const cards = [...images, ...images];

let flippedCard = null;
let lockBoard = false;

cards.sort(() => Math.random() - 0.5);


cards.forEach(img => {
  const card = document.createElement("div");
  card.className = "card";
  const image = document.createElement("img");
  image.src = "img/" + img;

  card.appendChild(image);
  card.addEventListener("click", () => handleFlip(card));
  board.appendChild(card);
});

function handleFlip(card) {
  if (lockBoard || card.classList.contains("flipped") || card.classList.contains("matched")) return;
  card.classList.add("flipped");

  if (!flippedCard) {
    flippedCard = card;
    return;
  }
  const match = flippedCard.querySelector("img").src === card.querySelector("img").src;

  if (match) {
    flippedCard.classList.add("matched");
    card.classList.add("matched");
    flippedCard = null;
  }
  else {

    lockBoard = true;
    setTimeout(() => {
      flippedCard.classList.remove("flipped");
      card.classList.remove("flipped");
      flippedCard = null;
      lockBoard = false;
    }, 1000);
  }
}
