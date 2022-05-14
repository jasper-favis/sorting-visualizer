import { renderBars, animate, stopAnimations, grayOutSortButton } from "./render.js";
import { selectionSort } from "./selectionSort.js";
import { insertionSort } from "./insertionSort.js";
import { bubbleSort } from "./bubbleSort.js";
import { quicksort } from "./quicksort.js";

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
let barCount = 60;
let animationSpeed = 1;
let algorithm = selectionSort;


$(document).ready(function () {
  generateRandomBars();
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

$(window).resize(function (event) {
  generateRandomBars();
})

function generateRandomBars() {
  stopAnimations();
  const windowWidth = $(window).width();
  const barWidthLarge = 15;
  const barWidthMedium = 8;
  const minBarHeightLarge = 25;
  const maxBarHeightLarge = 600;
  const minBarHeightMedium = 5;
  const maxBarHeightMedium = 450;
  const barGap = 1;
  if (windowWidth > 1200) {
    barCount = Math.floor(1100 / (barWidthLarge + barGap));
    bars = getRandomBars(barCount, minBarHeightLarge, maxBarHeightLarge);
    renderBars(bars, barWidthLarge, barGap);
    return;
  }
  if (windowWidth > 900 && windowWidth <= 1200) {
    barCount = Math.floor(800 / (barWidthLarge + barGap));
    bars = getRandomBars(barCount, minBarHeightLarge, maxBarHeightLarge);
    renderBars(bars, barWidthLarge, barGap);
    return;
  }
  if (windowWidth > 700 && windowWidth <= 900) {
    barCount = Math.floor(680 / (barWidthMedium + barGap));
    bars = getRandomBars(barCount, minBarHeightLarge, maxBarHeightLarge);
    renderBars(bars, barWidthMedium, barGap);
    return;
  }
  if (windowWidth > 550 && windowWidth <= 700) {
    barCount = Math.floor(530 / (barWidthMedium + barGap));
    bars = getRandomBars(barCount, minBarHeightMedium, maxBarHeightMedium);
    renderBars(bars, barWidthMedium, barGap);
    return;
  }
  if (windowWidth < 550) {
    barCount = Math.floor((windowWidth - 40) / (barWidthMedium + barGap));
    bars = getRandomBars(barCount, minBarHeightMedium, maxBarHeightMedium);
    renderBars(bars, barWidthMedium, barGap);
    return;
  }
}

function getRandomBars(barCount, minBarHeight, maxBarHeight) {
  let newBars = [];
  for (let i = 0; i < barCount; i++) {
    const height = randomRange(minBarHeight, maxBarHeight + 1);
    newBars.push(height);
  }
  return newBars;
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}