// Custom Input Range
export const handlerInputRange = () => {
  const sliderEl = document.querySelector("#range");
  const sliderValue = document.querySelector(".range-info__value");

  sliderEl.addEventListener("input", (event) => {
    const tempSliderValue = event.target.value;

    sliderValue.textContent = tempSliderValue + " %";

    // to show progress bar
    //   const progress = (tempSliderValue / sliderEl.max) * 100 + "%";
    // sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
  });
};
