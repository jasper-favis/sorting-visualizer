import { setBarHeight, setBarColor } from "./render.js";

export function insertionSort(array) {
  let animationsOrder = [];
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {

      // Store comparison start and end animations.
      const startComparisonAnimation = {};
      startComparisonAnimation.type = "Start Comparison Animation";
      startComparisonAnimation.indices = [i, j];
      animationsOrder.push(startComparisonAnimation);

      const endComparisonAnimation = {};
      endComparisonAnimation.type = "End Comparison Animation";
      endComparisonAnimation.indices = [i, j];
      animationsOrder.push(endComparisonAnimation);

      array[j + 1] = array[j];

      // Store animation for shifting array elements.
      const shiftAnimation = {};
      shiftAnimation.type = "Shift Animation";
      shiftAnimation.index = j + 1;
      shiftAnimation.height = array[j + 1];
      animationsOrder.push(shiftAnimation);

      j--;
    }
    array[j + 1] = key;

    // Store animation for setting pivot.
    const setPivotAnimation = {};
    setPivotAnimation.type = "Set Pivot Animation";
    setPivotAnimation.index = j + 1;
    setPivotAnimation.height = array[j + 1];
    animationsOrder.push(setPivotAnimation);

    // Store animation for already sorted bars.
    const sortedBarsAnimation = {}
    sortedBarsAnimation.type = "Sorted Bars Animation";
    sortedBarsAnimation.sortedBars = [];
    for (let s = 0; s <= i; s++) {
      sortedBarsAnimation.sortedBars.push(s);
    }
    animationsOrder.push(sortedBarsAnimation);
  }
  return animationsOrder;
}