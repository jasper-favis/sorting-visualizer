import { setBarHeight, setBarColor } from "./render.js";

export function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      setTimeout(() => {
        setBarHeight(array, j);
        setBarHeight(array, j + 1);
        setBarColor(array, j, "rgb(212, 205, 171)");
        setBarColor(array, j + 1, "rgb(212, 205, 171)");
      }, 30 * i);
      j--;
    }
    array[j + 1] = key;
    setTimeout(() => {
      setBarHeight(array, j + 1);
      setBarHeight(array, i);
      if (i === array.length - 1) { sortCompleted(array); }
    }, 30 * i);
  }
}

function sortCompleted(array) {
  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      setBarColor(array, i, "rgb(0, 205, 171)");
    }, 10 * i);
  }
}