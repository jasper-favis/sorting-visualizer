// import {
//   renderBars,
//   animateSelectionSort,
//   animateInsertionSort,
//   animateBubbleSort,
//   animateQuicksort
// } from "./render.js";
import { renderBars, animate, stopAnimations, grayOutSortButton } from "./render.js";
import { selectionSort } from "./selectionSort.js";
import { insertionSort } from "./insertionSort.js";
import { bubbleSort } from "./bubbleSort.js";
import { quicksort } from "./quicksort.js";

const SIZE = 60;
const MIN_HEIGHT = 25;
const MAX_HEIGHT = 600;
const isSorting = { inProgress: false };
const ANIMATION_SPEEDS = {
  "very slow": 250,
  "slow": 100,
  "normal": 1,
  "fast": 1 / 2
}
let bars = [];
let animationSpeed = 1;
let algorithm = selectionSort;


$(document).ready(function () {
  bars = getRandomBars();
  renderBars(bars);
})

$("#choose-algorithm-button").click(function (event) {
  $(".algorithms-list").toggle("displayBlock");
})

$(".algorithms-list>li").click(function (event) {
  const algorithmType = $(this).text();
  switch (algorithmType) {
    case "Selection Sort":
      algorithm = selectionSort;
      break;
    case "Insertion Sort":
      algorithm = insertionSort;
      break;
    case "Bubble Sort":
      algorithm = bubbleSort;
      break;
    case "Quicksort":
      algorithm = quicksort;
      break;
    default:
      algorithm = selectionSort;
  }
  isSorting.inProgress = false;
  grayOutSortButton(isSorting.inProgress);
  generateRandomBars();
  $(".selected-algorithm").text(algorithmType);
})

$("#sort-button").click(function (event) {
  if (isSorting.inProgress) return;
  const animationsOrder = algorithm(bars);
  animate(animationsOrder, bars, animationSpeed, isSorting);
})

$("#random-button").click(function (event) {
  isSorting.inProgress = false;
  grayOutSortButton(isSorting.inProgress);
  generateRandomBars();
})

$("#speed-button").click(function (event) {
  $(".speed-list").toggleClass("displayBlock");
})

$(".speed-list>li").click(function (event) {
  const speed = $(this).text();
  $("#speed-button>p").text(speed);
  animationSpeed = ANIMATION_SPEEDS[speed];
})

function generateRandomBars() {
  stopAnimations();
  bars = getRandomBars();
  renderBars(bars);
}

function getRandomBars() {
  let newBars = [];
  for (let i = 0; i < SIZE; i++) {
    const height = randomRange(MIN_HEIGHT, MAX_HEIGHT + 1);
    newBars.push(height);
  }
  return newBars;
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}