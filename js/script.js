const CARD_IMAGES = [
  { src: "images/cards/card1.png", type: "red" },
  { src: "images/cards/card2.png", type: "gold" },
  { src: "images/cards/card3.png", type: "green" },
  { src: "images/cards/card4.png", type: "green" },
  { src: "images/cards/card5.png", type: "gold" },
  { src: "images/cards/card6.png", type: "red" },
];

const FLAG_COLORS = ["red", "green", "blue", "black", "silver", "pink"];

function startNewGame() {
  const selectedCard = drawCard();
  displayGradientContainer(selectedCard.type);

  const buttonContainer = document.getElementsByClassName("button-container");
  buttonContainer[0].classList.add("hidden");

  const cardContainer = document.getElementsByClassName("card-container");
  cardContainer[0].classList.remove("hidden");

  const statsContainer = document.getElementsByClassName("stats-container");
  statsContainer[0].classList.remove("hidden");

  const imageFront = document.getElementsByClassName("image-front");
  imageFront[0].src = selectedCard.src;

  const card = document.getElementsByClassName("card");
  card[0].classList.add("card-flip");

  displayRandomCoinAmount();
  displayRandomCardAmount();
  displayRandomFlagColor();

  const lines = document.getElementsByClassName("stats-line");
  Array.from(lines).forEach((line, index) => {
    setTimeout(() => {
      line.classList.remove("opacity-off");
    }, index * 500 + 3000);
  });
}

function displayGradientContainer(type) {
  const gradients = document.getElementsByClassName("gradients");
  gradients[0].classList.remove("hidden");

  setTimeout(() => {
    if (type === "gold") {
      const gradientContainer =
        document.getElementsByClassName("gradient-gold");
      gradientContainer[0].classList.remove("opacity-off");
    }
    if (type === "green") {
      const gradientContainer =
        document.getElementsByClassName("gradient-green");
      gradientContainer[0].classList.remove("opacity-off");
    }
    if (type === "red") {
      const gradientContainer = document.getElementsByClassName("gradient-red");
      gradientContainer[0].classList.remove("opacity-off");
    }
  }, 0);
}

function displayRandomCoinAmount() {
  let index = Math.round(Math.random() * 2);
  const coin1 = document.getElementsByClassName("coin-1");
  const coin2 = document.getElementsByClassName("coin-2");
  const coin3 = document.getElementsByClassName("coin-3");
  coin1[0].classList.remove("hidden");
  if (index == 1) {
    coin2[0].classList.remove("hidden");
  }
  if (index == 2) {
    coin2[0].classList.remove("hidden");
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

function displayHelp() {
  const buttonContainer = document.getElementsByClassName("button-container");
  buttonContainer[0].classList.add("hidden");
  const helpContainer = document.getElementsByClassName("help-container");
  helpContainer[0].classList.remove("hidden");

  const lines = document.getElementsByClassName("help-line");
  Array.from(lines).forEach((line, index) => {
    setTimeout(() => {
      line.classList.remove("opacity-off");
    }, index * 80 + 40);
  });
}

function displayStoryOld() {
  const buttonContainer = document.getElementsByClassName("button-container");
  buttonContainer[0].classList.add("hidden");
  const helpContainer = document.getElementsByClassName("story-container");
  helpContainer[0].classList.remove("hidden");

  const lines = document.getElementsByClassName("story-line");
  Array.from(lines).forEach((line, index) => {
    setTimeout(() => {
      line.classList.remove("opacity-off");
    }, index * 80 + 40);
  });
}

function displayStory(storyClass) {
  const buttonContainer = document.getElementsByClassName("button-container");
  buttonContainer[0].classList.add("hidden");
  const helpContainer = document.getElementsByClassName("story-container");
  helpContainer[0].classList.remove("hidden");
  const keysContainer = document.getElementsByClassName("keys-container");
  keysContainer[0].classList.remove("hidden");
  const terminalContainer =
    document.getElementsByClassName("container-terminal");
  terminalContainer[0].classList.remove("hidden");
  const terminalShadowContainer = document.getElementsByClassName(
    "container-terminal-shadow"
  );
  terminalShadowContainer[0].classList.remove("hidden");

  const paragraphs = document.getElementsByClassName(storyClass || "story-1");
  const options = document.getElementsByClassName("story-options");
  let delay = 4500;
  [...Array.from(paragraphs), ...Array.from(options)].forEach((paragraph) => {
    paragraph.classList.remove("hidden");
    delay = displayTextParagraphWithEffect(paragraph, delay);
  });
}

function toogleCardZoom() {
  const image = document.getElementsByClassName("card-container");
  if (Array.from(image[0].classList).includes("card-zoom-in")) {
    image[0].classList.remove("card-zoom-in");
  } else {
    image[0].classList.add("card-zoom-in");
  }
}

function displayTextParagraphWithEffect(paragraph, delay) {
  const storyLines = paragraph.getElementsByClassName("story-line");
  const storyOptions = paragraph.getElementsByClassName("story-option");
  const brs = paragraph.getElementsByTagName("br");

  if (storyLines && storyLines.length) {
    const fullText = Array.from(storyLines[0].textContent);
    let text = "";
    storyLines[0].textContent = "";
    fullText.forEach((letter) => {
      delay += 5;
      setTimeout(() => {
        text = `${text}${letter}`;
        if (text.length === 1) {
          const pointerContainer =
            document.getElementsByClassName("story-pointer");
          pointerContainer[0].classList.add("hidden");
        }
        if (text.length === fullText.length) {
          const pointerContainer =
            document.getElementsByClassName("story-pointer");
          pointerContainer[0].classList.remove("hidden");
          if (brs && brs.length) {
            brs[0].classList.remove("hidden");
          }
        }
        storyLines[0].textContent = text;
        window.scrollTo(0, document.body.scrollHeight);
      }, delay);
    });
  }
  if (storyOptions && storyOptions.length) {
    Array.from(storyOptions).forEach((option) => {
      delay += 5;
      setTimeout(() => {
        option.classList.remove("hidden");
        window.scrollTo(0, document.body.scrollHeight);
      }, delay);
    });
  }

  delay += 1000;
  return delay;
}

function keyDown() {
  const storyOptions = document.getElementsByClassName("story-option");
  const storyOptionsArray = Array.from(storyOptions);
  if (storyOptionsArray && storyOptionsArray.length) {
    const index = storyOptionsArray.findIndex((option) =>
      Array.from(option.classList).includes("option-choosen")
    );
    storyOptions[index].classList.remove("option-choosen");
    if (index >= storyOptionsArray.length - 1) {
      storyOptions[0].classList.add("option-choosen");
    } else {
      storyOptions[index + 1].classList.add("option-choosen");
    }
  }
}

function keyUp() {
  const storyOptions = document.getElementsByClassName("story-option");
  const storyOptionsArray = Array.from(storyOptions);
  if (storyOptionsArray && storyOptionsArray.length) {
    const index = storyOptionsArray.findIndex((option) =>
      Array.from(option.classList).includes("option-choosen")
    );
    storyOptions[index].classList.remove("option-choosen");
    if (index <= 0) {
      storyOptions[storyOptionsArray.length - 1].classList.add(
        "option-choosen"
      );
    } else {
      storyOptions[index - 1].classList.add("option-choosen");
    }
  }
}

const STORY_CLASSES = ["story-1", "story-2", "story-3", "story-4"];

function keyEnter() {
  const storyOptions = document.getElementsByClassName("story-option");
  const storyOptionsArray = Array.from(storyOptions);
  if (storyOptionsArray && storyOptionsArray.length) {
    const index = storyOptionsArray.findIndex((option) =>
      Array.from(option.classList).includes("option-choosen")
    );
    console.log(index);
    const paragraphs = document.getElementsByClassName("story-p");
    Array.from(paragraphs).forEach((paragraph) => {
      paragraph.classList.add("hidden");
    });
    const options = document.getElementsByClassName("story-option");
    Array.from(options).forEach((option) => {
      option.classList.add("hidden");
    });
    const brs = document.getElementsByClassName("br-to-hide");
    Array.from(brs).forEach((br) => {
      br.classList.add("hidden");
    });
    displayStory(STORY_CLASSES[index]);
  }
}
