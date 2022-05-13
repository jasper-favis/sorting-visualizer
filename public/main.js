import { renderBars, animateSelectionSort } from "./render.js";
import { selectionSort } from "./selectionSort.js";
import { insertionSort } from "./insertionSort.js";
import { bubbleSort } from "./bubbleSort.js";
import { quicksort } from "./quicksort.js";

const SIZE = 150;
const MIN_HEIGHT = 50;
const MAX_HEIGHT = 600;
let bars = [];
let algorithm = selectionSort;
let animation = animateSelectionSort;

$(document).ready(function () {
  bars = getRandomBars();
  renderBars(bars);
})

$("#choose-algorithm-button").click(function (event) {
  $(".algorithms-list").toggle("display");
})

$(".algorithms-list>li").click(function (event) {
  const algorithmType = $(this).text();
  switch (algorithmType) {
    case "Selection Sort":
      algorithm = selectionSort;
      animation = selectionSort;
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
  $(".selected-algorithm").text(algorithmType);
})

$("#sort-button").click(function (event) {
  const animationOrder = algorithm(bars);
  animation(animationOrder, bars);
})

$("#random-button").click(function (event) {
  bars = getRandomBars();
  renderBars(bars);
})

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