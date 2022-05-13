import { setBarHeight, setBarColor } from "./render.js";

export function selectionSort(array) {
  let animationsOrder = [];
  let indexOfSmallest;
  for (let i = 0; i < array.length; i++) {
    indexOfSmallest = getIndexOfSmallest(array, i, animationsOrder);

    // Store start and end comparison animations.
    let startAnimation = {};
    startAnimation.isComparison = true;
    startAnimation.isComparisonStart = true;
    startAnimation.indices = [i, indexOfSmallest];
    animationsOrder.push(startAnimation);

    let endAnimation = {};
    endAnimation.isComparison = true;
    endAnimation.isComparisonStart = false;
    endAnimation.indices = [i, indexOfSmallest];
    animationsOrder.push(endAnimation);

    swap(array, i, indexOfSmallest);

    // Store swap animation.
    let swapAnimation = {};
    swapAnimation.isComparison = false;
    swapAnimation.isComparisonStart = false;
    swapAnimation.indices = [i, indexOfSmallest];
    animationsOrder.push(swapAnimation);
  }
  return animationsOrder;
}

function getIndexOfSmallest(array, start, animationsOrder) {
  let indexOfSmallest = start;
  for (let i = start + 1; i < array.length; i++) {

    // Store start and end comparison animations.
    let startAnimation = {};
    startAnimation.isComparison = true;
    startAnimation.isComparisonStart = true;
    startAnimation.indices = [i, indexOfSmallest];
    animationsOrder.push(startAnimation);

    let endAnimation = {};
    endAnimation.isComparison = true;
    endAnimation.isComparisonStart = false;
    endAnimation.indices = [i, indexOfSmallest];
    animationsOrder.push(endAnimation);

    if (array[i] < array[indexOfSmallest]) {
      indexOfSmallest = i;
    }
  }
  return indexOfSmallest;
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
}