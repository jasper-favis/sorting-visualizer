import {
  renderBars,
  animateSelectionSort,
  animateInsertionSort,
  animateBubbleSort,
  animateQuicksort
} from "./render.js";
import { selectionSort } from "./selectionSort.js";
import { insertionSort } from "./insertionSort.js";
import { bubbleSort } from "./bubbleSort.js";
import { quicksort } from "./quicksort.js";

const SIZE = 100;
const MIN_HEIGHT = 25;
const MAX_HEIGHT = 600;
const SPEED = 3;
let bars = [];
let algorithm = selectionSort;
let animation = animateSelectionSort;
let sortingInProgress = false;

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
      animation = animateSelectionSort;
      break;
    case "Insertion Sort":
      algorithm = insertionSort;
      animation = animateInsertionSort;
      break;
    case "Bubble Sort":
      algorithm = bubbleSort;
      animation = animateBubbleSort;
      break;
    case "Quicksort":
      algorithm = quicksort;
      animation = animateQuicksort;
      break;
    default:
      algorithm = selectionSort;
      animation = animateSelectionSort;
  }
  $(".selected-algorithm").text(algorithmType);
})

$("#sort-button").click(function (event) {
  const animationsOrder = algorithm(bars);
  animation(animationsOrder, bars, SPEED);
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