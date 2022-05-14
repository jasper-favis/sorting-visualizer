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
    // const sortedBarAnimation = {};
    // sortedBarAnimation.type = "Sorted Bar Animation - Set Color and Height";
    // sortedBarAnimation.index = i;
    // sortedBarAnimation.height = array[i];
    // animationsOrder.push(sortedBarAnimation);

    // Store swap animation but only color sorted bar.
    const swapAnimation = {};
    swapAnimation.type = "Swap Animation - Color Sorted Bar";
    swapAnimation.indices = [i, indexOfSmallest];
    swapAnimation.heights = [array[i], array[indexOfSmallest]];
    animationsOrder.push(swapAnimation);
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