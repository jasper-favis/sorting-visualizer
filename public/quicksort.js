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
    setTimeout(() => {
      setBarHeight(array, i);
      setBarHeight(array, j);
      setBarColor(array, j, "rgb(0, 205, 171)");
    }, time);
  }
  swap(array, i + 1, high);
  setTimeout(() => {
    setBarHeight(array, high);
    setBarHeight(array, i + 1);
    setBarColor(array, i + 1, "rgb(0, 205, 171)");
  }, time + 200);
  return i + 1;
}

function swap(array, indexA, indexB) {
  [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
}