import { setBarHeight, setBarColor } from "./render.js";

export function bubbleSort(array) {
  let animationsOrder = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j > i; j--) {

      // Store comparison start and end animations.
      const startComparisonAnimation = {};
      startComparisonAnimation.type = "Start Comparison Animation";
      startComparisonAnimation.indices = [j - 1, j];
      animationsOrder.push(startComparisonAnimation);

      const endComparisonAnimation = {};
      endComparisonAnimation.type = "End Comparison Animation";
      endComparisonAnimation.indices = [j - 1, j];
      animationsOrder.push(endComparisonAnimation);

      if (array[j] < array[j - 1]) {
        swap(array, j - 1, j);

        // Store swap animation.
        const swapAnimation = {};
        swapAnimation.type = "Swap Animation";
        swapAnimation.indices = [j - 1, j];
        swapAnimation.heights = [array[j - 1], array[j]];
        animationsOrder.push(swapAnimation);
      }
    }
    // Store sorted bar animation.
    const sortedBarAnimation = {};
    sortedBarAnimation.type = "Sorted Bar Animation - Set Color";
    sortedBarAnimation.index = i;
    animationsOrder.push(sortedBarAnimation);
  }
  return animationsOrder;
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
}