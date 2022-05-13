import { setBarHeight, setBarColor } from "./render.js";

export function selectionSort(array) {
  let animationOrder = [];
  let indexOfSmallest;
  for (let i = 0; i < array.length; i++) {
    indexOfSmallest = getIndexOfSmallest(array, i, animationOrder);

    // Store start and end comparison animations.
    let startAnimation = {};
    startAnimation.isComparison = true;
    startAnimation.isComparisonStart = true;
    startAnimation.indices = [i, indexOfSmallest];
    animationOrder.push(startAnimation);

    let endAnimation = {};
    endAnimation.isComparison = true;
    endAnimation.isComparisonStart = false;
    endAnimation.indices = [i, indexOfSmallest];
    animationOrder.push(endAnimation);

    swap(array, i, indexOfSmallest);

    // Store swap animation.
    let swapAnimation = {};
    swapAnimation.isComparison = false;
    swapAnimation.isComparisonStart = false;
    swapAnimation.indices = [i, indexOfSmallest];
    animationOrder.push(swapAnimation);
  }
  return animationOrder;
}

function getIndexOfSmallest(array, start, animationOrder) {
  let indexOfSmallest = start;
  for (let i = start + 1; i < array.length; i++) {

    // Store start and end comparison animations.
    let startAnimation = {};
    startAnimation.isComparison = true;
    startAnimation.isComparisonStart = true;
    startAnimation.indices = [i, indexOfSmallest];
    animationOrder.push(startAnimation);

    let endAnimation = {};
    endAnimation.isComparison = true;
    endAnimation.isComparisonStart = false;
    endAnimation.indices = [i, indexOfSmallest];
    animationOrder.push(endAnimation);

    if (array[i] < array[indexOfSmallest]) {
      indexOfSmallest = i;
    }
  }
  return indexOfSmallest;
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
}