import { setBarHeight, setBarColor, renderBars } from "./render.js";

export function quicksort(array) {
  qsort(array, 0, array.length - 1);
}

function qsort(array, low, high) {
  if (low < high) {
    let pivot = partition(array, low, high);
    qsort(array, low, pivot - 1);
    qsort(array, pivot + 1, high);
  }
}

function partition(array, low, high) {
  let time;
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    time = 200 * j;
    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, high);
  return i + 1;
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
}