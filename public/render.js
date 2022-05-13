export function renderBars(bars) {
  $(".bars").empty();
  bars.forEach((bar, index) => {
    const div = $("<div></div>")
      .attr("id", `${index}`)
      .attr("class", "bar")
      .css("height", `${bar}px`)
    $(".bars").append(div);
  })
}

export function setBarHeight(array, index) {
  const id = `#${index}`;
  $(id).css("height", array[index]);
}

export function setBarColor(array, index, color) {
  const id = `#${index}`;
  $(id).css("background-color", color);
}

export function animateSelectionSort(animations, bars) {
  // FOR DEBUGGING PURPOSES
  console.log("animate selection sort called");
  console.log(animations.length);

  animations.forEach((animation, index) => {
    const { isComparison, isComparisonStart, indices } = animation;
    const [i, j] = indices;
    const IDi = `#${i}`;
    const IDj = `#${j}`;
    if (isComparison) {
      const color = isComparisonStart ? "#00CDAB" : "black";
      setTimeout(() => {
        $(IDi).css("background-color", color);
        $(IDj).css("background-color", color);
      }, index);
    } else {
      setTimeout(() => {
        $(IDi).css("height", `${bars[i]}px`);
        $(IDj).css("height", `${bars[j]}px`);
      }, index);
    }
  })
}

// FOR DEBUGGING PURPOSES
function print(array) {
  for (let x of array) {
    console.log(x);
  }
}