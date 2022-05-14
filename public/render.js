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

export function animate(animationsOrder, bars, speedInMilliseconds, inProgress) {
  inProgress = true;
  animationsOrder.forEach((animation, animationIndex) => {
    const {
      type,
      index,
      indices,
      height,
      heights,
      sortedBars } = animation;
    const yellow = "yellow", white = "white", green = "#00CDAB";
    switch (type) {
      case "Start Comparison Animation": {
        const [i, j] = indices;
        setTimeout(() => {
          setBarColor(bars, i, yellow);
          setBarColor(bars, j, yellow);
        }, animationIndex * speedInMilliseconds);
        break;
      }
      case "End Comparison Animation": {
        const [i, j] = indices;
        setTimeout(() => {
          setBarColor(bars, i, white);
          setBarColor(bars, j, white);
        }, animationIndex * speedInMilliseconds);
        break;
      }
      case "Swap Animation": {
        const [i, j] = indices;
        const [heightI, heightJ] = heights;
        setTimeout(() => {
          setBarHeight(bars, i, heightI);
          setBarHeight(bars, j, heightJ);
        }, animationIndex * speedInMilliseconds);
        break;
      }
      case "Swap Animation - Color Sorted Bar": {
        const [i, j] = indices;
        const [heightI, heightJ] = heights;
        setTimeout(() => {
          setBarHeight(bars, i, heightI);
          setBarHeight(bars, j, heightJ);
          setBarColor(bars, i, green);
        }, animationIndex * speedInMilliseconds);
        break;
      }
      case "Shift Animation":
      case "Set Pivot Animation": {
        setTimeout(() => {
          setBarHeight(bars, index, height);
        }, animationIndex * speedInMilliseconds);
        break;
      }
      case "Sorted Bar Animation - Set Color": {
        setTimeout(() => {
          setBarColor(bars, index, green);
        }, animationIndex * speedInMilliseconds);
        break;
      }
      case "Sorted Bar Animation - Set Color and Height": {
        setTimeout(() => {
          setBarHeight(bars, index, height);
          setBarColor(bars, index, green);
        }, animationIndex * speedInMilliseconds);
        break;
      }
      case "Sorted Bars Animation": {
        setTimeout(() => {
          sortedBars.forEach((sortedBarIndex) => {
            setBarColor(bars, sortedBarIndex, green);
          })
        }, animationIndex * speedInMilliseconds);
        break;
      }
      default:
    }
    if (animationIndex === animationsOrder.length - 1) {
      // Completed Sort Animation.
      setTimeout(() => {
        for (let i = 0; i < bars.length; i++) {
          setTimeout(() => {
            setBarColor(bars, i, green);
          }, i * speedInMilliseconds);
        }
        inProgress = false;
      }, animationIndex * speedInMilliseconds);
    }
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

// function getBarColor(array, index) {
//   const id = `#${index}`;
//   return $(id).css("background-color");
// }