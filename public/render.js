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

export function setBarHeight(array, index, height) {
  const id = `#${index}`;
  $(id).css("height", height);
}

export function setBarColor(array, index, color) {
  const id = `#${index}`;
  $(id).css("background-color", color);
}

export function animateSelectionSort(animationsOrder, bars, speedInMilliseconds) {
  animationsOrder.forEach((animation, index) => {
    const { isComparison, isComparisonStart, indices } = animation;
    const [i, j] = indices;
    const blue = "#5E95BD";
    const green = "#00CDAB"
    if (isComparison) {
      const color = isComparisonStart ? blue : "black";
      setTimeout(() => {
        setBarColor(bars, i, color);
        setBarColor(bars, j, color);
      }, index * speedInMilliseconds);
    } else {
      setTimeout(() => {
        setBarHeight(bars, i, bars[i]);
        setBarHeight(bars, j, bars[j]);
        setBarColor(bars, i, green);
      }, index * speedInMilliseconds);
    }
  })
}

export function animateInsertionSort(animationsOrder, bars, speedInMilliseconds) {
  animationsOrder.forEach((animation, index) => {
    const {
      isComparison,
      isComparisonStart,
      isShift,
      isKeySet,
      indices,
      height,
      shiftIndex,
      keyIndex,
      sortedBars } = animation;
    const blue = "#5E95BD";
    const green = "#00CDAB"
    if (isComparison) {
      const [i, j] = indices;
      const color = isComparisonStart ? blue : "black";
      setTimeout(() => {
        setBarColor(bars, i, color);
        setBarColor(bars, j, color);
      }, index * speedInMilliseconds);
    } else if (isShift) {
      setTimeout(() => {
        setBarHeight(bars, shiftIndex, height);
      }, index * speedInMilliseconds);
    } else if (isKeySet) {
      setTimeout(() => {
        setBarHeight(bars, keyIndex, height);
      }, index * speedInMilliseconds);
    } else {
      setTimeout(() => {
        sortedBars.forEach((sortedBarIndex) => {
          setBarColor(bars, sortedBarIndex, green);
        })
      }, index * speedInMilliseconds);

    }
  })
}

export function animateBubbleSort(animationsOrder, bars, speedInMilliseconds) {
  animationsOrder.forEach((animation, index) => {
    const {
      isComparison,
      isComparisonStart,
      isCompleted,
      indices,
      heights,
      sortedIndex } = animation;
    const blue = "#5E95BD";
    const green = "#00CDAB"
    if (isComparison) {
      const [i, j] = indices;
      const color = isComparisonStart ? blue : "black";
      setTimeout(() => {
        setBarColor(bars, i, color);
        setBarColor(bars, j, color);
      }, index * speedInMilliseconds);
    } else if (isCompleted) {
      setTimeout(() => {
        setBarColor(bars, sortedIndex, green);
      }, index * speedInMilliseconds);
    } else {
      const [i, j] = indices;
      const [heightI, heightJ] = heights;
      setTimeout(() => {
        setBarHeight(bars, i, heightI);
        setBarHeight(bars, j, heightJ);
      }, index * speedInMilliseconds);
    }
  })
}

