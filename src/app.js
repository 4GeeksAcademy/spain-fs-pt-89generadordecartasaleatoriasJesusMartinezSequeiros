/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const getRandomElement = array => {
  return array[Math.floor(Math.random() * array.length)];
};

window.onload = () => {
  const suits = ["♥", "♦", "♠", "♣"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuit = getRandomElement(suits);
  const randomValue = getRandomElement(values);

  const cardElement = document.getElementById("card");
  cardElement.innerHTML = `
    <div class="top-suit">${randomSuit}</div>
    <div class="value">${randomValue}</div>
    <div class="bottom-suit">${randomSuit}</div>
  `;

  cardElement.classList.add(
    randomSuit === "♥"
      ? "heart"
      : randomSuit === "♦"
      ? "diamond"
      : randomSuit === "♠"
      ? "spade"
      : "club"
  );
};
