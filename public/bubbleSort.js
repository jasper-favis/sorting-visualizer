import { setBarHeight, setBarColor } from "./render.js";

export function bubbleSort(array) {
  let animationsOrder = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j > i; j--) {

      // Store comparison start and end animations.
      let startAnimation = {};
      startAnimation.isComparison = true;
      startAnimation.isComparisonStart = true;
      startAnimation.isCompleted = false;
      startAnimation.indices = [j - 1, j];
      animationsOrder.push(startAnimation);

      let endAnimation = {};
      endAnimation.isComparison = true;
      endAnimation.isComparisonStart = false;
      endAnimation.isCompleted = false;
      endAnimation.indices = [j - 1, j];
      animationsOrder.push(endAnimation);

      if (array[j] < array[j - 1]) {
        swap(array, j - 1, j);

        // Store swap animation.
        let swapAnimation = {};
        swapAnimation.isComparison = false;
        swapAnimation.isComparisonStart = false;
        swapAnimation.isCompleted = false;
        swapAnimation.indices = [j - 1, j];
        swapAnimation.heights = [array[j - 1], array[j]];
        animationsOrder.push(swapAnimation);
      }
    }
    // Store sorted bar.
    let completedAnimation = {};
    completedAnimation.isComparison = false;
    completedAnimation.isComparisonStart = false;
    completedAnimation.isCompleted = true;
    completedAnimation.sortedIndex = i;
    animationsOrder.push(completedAnimation);
  }
  return animationsOrder;
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
}