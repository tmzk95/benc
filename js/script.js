const CARD_IMAGES = [
  { src: "images/cards/card1.png", type: "green" },
  { src: "images/cards/card2.png", type: "gold" },
  { src: "images/cards/card3.png", type: "green" },
  { src: "images/cards/card4.png", type: "green" },
  { src: "images/cards/card5.png", type: "gold" },
  { src: "images/cards/card6.png", type: "gold" },
];

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
}

function displayGradientContainer(type) {
  if (type === "gold") {
    const gradientContainer = document.getElementsByClassName(
      "gradient-container-gold"
    );
    gradientContainer[0].classList.remove("opacity-off");
  }
  if (type === "green") {
    const gradientContainer = document.getElementsByClassName(
      "gradient-container-green"
    );
    gradientContainer[0].classList.remove("opacity-off");
  }
}

function drawCard() {
  let index = Math.round(Math.random() * (CARD_IMAGES.length - 1));
  return CARD_IMAGES[index];
}
