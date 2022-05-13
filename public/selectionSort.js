import { setBarHeight, setBarColor } from "./render.js";

export function selectionSort(array) {
  let animationsOrder = [];
  let indexOfSmallest;
  for (let i = 0; i < array.length; i++) {
    indexOfSmallest = getIndexOfSmallest(array, i, animationsOrder);

    // Store start and end comparison animations.
    const startComparisonAnimation = {};
    startComparisonAnimation.type = "Start Comparison Animation";
    startComparisonAnimation.indices = [i, indexOfSmallest];
    animationsOrder.push(startComparisonAnimation);

    const endComparisonAnimation = {};
    endComparisonAnimation.type = "End Comparison Animation";
    endComparisonAnimation.indices = [i, indexOfSmallest];
    animationsOrder.push(endComparisonAnimation);

    swap(array, i, indexOfSmallest);

    // Store set animation.
    const sortedAnimation = {};
    sortedAnimation.type = "Sorted Animation";
    sortedAnimation.sortedIndex = i;
    sortedAnimation.sortedHeight = array[i];
    animationsOrder.push(sortedAnimation);
  }
  return animationsOrder;
}

function getIndexOfSmallest(array, start, animationsOrder) {
  let indexOfSmallest = start;
  for (let i = start + 1; i < array.length; i++) {

    // Store start and end comparison animations.
    const startComparisonAnimation = {};
    startComparisonAnimation.type = "Start Comparison Animation";
    startComparisonAnimation.indices = [i, indexOfSmallest];
    animationsOrder.push(startComparisonAnimation);

    const endComparisonAnimation = {};
    endComparisonAnimation.type = "End Comparison Animation";
    endComparisonAnimation.indices = [i, indexOfSmallest];
    animationsOrder.push(endComparisonAnimation);

    if (array[i] < array[indexOfSmallest]) {
      indexOfSmallest = i;
    }
  }
  return indexOfSmallest;
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
}