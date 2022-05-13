import { setBarHeight, setBarColor } from "./render.js";

export function insertionSort(array) {
  let animationsOrder = [];
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {

      // Store comparison start and end animations.
      let startAnimation = {};
      startAnimation.isComparison = true;
      startAnimation.isComparisonStart = true;
      startAnimation.isShift = false;
      startAnimation.isKeySet = false;
      startAnimation.indices = [i, j];
      animationsOrder.push(startAnimation);

      let endAnimation = {};
      endAnimation.isComparison = true;
      endAnimation.isComparisonStart = false;
      endAnimation.isShift = false;
      endAnimation.isKeySet = false;
      endAnimation.indices = [i, j];
      animationsOrder.push(endAnimation);

      array[j + 1] = array[j];

      // Store animation for shifting array elements.
      let shiftAnimation = {};
      shiftAnimation.isComparison = false;
      shiftAnimation.isComparisonStart = false;
      shiftAnimation.isShift = true;
      shiftAnimation.isKeySet = false;
      shiftAnimation.shiftIndex = j + 1;
      shiftAnimation.height = array[j + 1];
      animationsOrder.push(shiftAnimation);

      j--;
    }
    array[j + 1] = key;

    // Store animation for setting key.
    let settingKeyAnimation = {};
    settingKeyAnimation.isComparison = false;
    settingKeyAnimation.isComparisonStart = false;
    settingKeyAnimation.isShift = false;
    settingKeyAnimation.isKeySet = true;
    settingKeyAnimation.keyIndex = j + 1;
    settingKeyAnimation.height = array[j + 1];
    animationsOrder.push(settingKeyAnimation);

    // Store animation for already sorted bars.
    let completedAnimation = {}
    completedAnimation.isComparison = false;
    completedAnimation.isComparisonStart = false;
    completedAnimation.isShift = false;
    completedAnimation.isKeySet = false;
    completedAnimation.sortedBars = [];
    for (let k = 0; k <= i; k++) {
      completedAnimation.sortedBars.push(k);
    }
    animationsOrder.push(completedAnimation);
  }
  return animationsOrder;
}