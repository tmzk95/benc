const CARD_IMAGES = [
  { src: "images/cards/card1.png", type: "red" },
  { src: "images/cards/card2.png", type: "gold" },
  { src: "images/cards/card3.png", type: "green" },
  { src: "images/cards/card4.png", type: "green" },
  { src: "images/cards/card5.png", type: "gold" },
  { src: "images/cards/card6.png", type: "gold" },
];

const FLAG_COLORS = ["red", "green", "blue", "black", "silver", "pink"];

function startNewGame() {
  const selectedCard = drawCard();
  displayGradientContainer(selectedCard.type);

  const cardContainer = document.getElementsByClassName("card-container");
  cardContainer[0].classList.remove("hidden");

  const imageFront = document.getElementsByClassName("image-front");
  imageFront[0].src = selectedCard.src;

  const card = document.getElementsByClassName("card");
  card[0].classList.add("card-flip");

  const buttonContainer = document.getElementsByClassName("button-container");
  buttonContainer[0].classList.add("hidden");

  displayRandomCoinAmount();
  displayRandomCardAmount();
  displayRandomFlagColor();

  const lines = document.getElementsByClassName("stats-line");
  Array.from(lines).forEach((line, index) => {
    setTimeout(() => {
      line.classList.remove("opacity-off");
    }, index * 1000 + 3000);
  });
}

function displayGradientContainer(type) {
  if (type === "gold") {
    const gradientContainer = document.getElementsByClassName("gradient-gold");
    gradientContainer[0].classList.remove("opacity-off");
  }
  if (type === "green") {
    const gradientContainer = document.getElementsByClassName("gradient-green");
    gradientContainer[0].classList.remove("opacity-off");
  }
  if (type === "red") {
    const gradientContainer = document.getElementsByClassName("gradient-red");
    gradientContainer[0].classList.remove("opacity-off");
  }
}

function displayRandomCoinAmount() {
  let index = Math.round(Math.random() * 2);
  const coin1 = document.getElementsByClassName("coin-1");
  const coin2 = document.getElementsByClassName("coin-2");
  const coin3 = document.getElementsByClassName("coin-3");
  if (index == 0) {
    coin1[0].classList.remove("hidden");
  }
  if (index == 1) {
    coin2[0].classList.remove("hidden");
  }
  if (index == 2) {
    coin3[0].classList.remove("hidden");
  }
}

function displayRandomCardAmount() {
  let index = Math.round(Math.random() * 2) + 6;
  const amount = document.getElementsByClassName("stats-card-amount");
  amount[0].textContent = index;
}

function displayRandomFlagColor() {
  let index = Math.round(Math.random() * (FLAG_COLORS.length - 1));
  const flag = document.getElementsByClassName("stats-flag");
  flag[0].classList.add(FLAG_COLORS[index]);
}

function drawCard() {
  let index = Math.round(Math.random() * (CARD_IMAGES.length - 1));
  return CARD_IMAGES[index];
}
