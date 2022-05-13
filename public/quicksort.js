import { setBarHeight, setBarColor, renderBars } from "./render.js";

export function quicksort(array) {
  let animationsOrder = [];
  qsort(array, 0, array.length - 1, animationsOrder);
  return animationsOrder;
}

function qsort(array, low, high, animationsOrder) {
  if (low < high) {
    let pivot = partition(array, low, high, animationsOrder);
    qsort(array, low, pivot - 1, animationsOrder);
    qsort(array, pivot + 1, high, animationsOrder);
  }
}

function partition(array, low, high, animationsOrder) {
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {

    // Store comparison start and end animations.
    const startComparisonAnimation = {};
    startComparisonAnimation.type = "Start Comparison Animation";
    startComparisonAnimation.indices = [j, high];
    animationsOrder.push(startComparisonAnimation);

    const endComparisonAnimation = {};
    endComparisonAnimation.type = "End Comparison Animation";
    endComparisonAnimation.indices = [j, high];
    animationsOrder.push(endComparisonAnimation);

    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);

      // Store swap animation.
      const swapAnimation = {};
      swapAnimation.type = "Swap Animation"
      swapAnimation.indices = [i, j];
      swapAnimation.heights = [array[i], array[j]];
      animationsOrder.push(swapAnimation);
    }
  }
  swap(array, i + 1, high);

  // Store swap animation.
  const swapAnimation = {};
  swapAnimation.type = "Swap Animation"
  swapAnimation.indices = [i + 1, high];
  swapAnimation.heights = [array[i + 1], array[high]];
  animationsOrder.push(swapAnimation);

  return i + 1;
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
}