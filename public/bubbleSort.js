import { setBarHeight, setBarColor } from "./render.js";

export function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        swap(array, j - 1, j);
      }
      setTimeout(() => {
        setBarHeight(array, j - 1);
        setBarHeight(array, j);
      }, 10 * j);
    }
  }
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
}