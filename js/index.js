const app = (() => {
  // Get DOM elements
  const ratioWidth = document.getElementById("ratio-width");
  const ratioHeight = document.getElementById("ratio-height");
  const width = document.getElementById("width");
  const height = document.getElementById("height");
  const errorContainerWidth = document.getElementById("error-container-width");
  const errorContainerHeight = document.getElementById(
    "error-container-height"
  );

  // calculate aspect ratio Width and error handling
  const updateWidth = (ratioWidth, ratioHeight, height, width) => () => {
    try {
      const aspectRatio = ratioWidth.value / ratioHeight.value;
      const newWidth = parseFloat((height.value * aspectRatio).toFixed(2));

      if (ratioHeight.value <= 0) {
        throw new Error("A largura deve ser maior que 0");
      }

      width.value = ratioHeight.value > 0 ? newWidth : 0;
      errorContainerWidth.textContent = "";
      errorContainerWidth.classList.remove("error-container-width");
    } catch (error) {
      errorContainerWidth.textContent = "Atenção: " + error.message;
      errorContainerWidth.classList.add("error-container-width");
    }
  };

  // calculate aspect ratio Height and error handling
  const updateHeight = (ratioWidth, ratioHeight, height, width) => () => {
    try {
      const aspectRatio = ratioWidth.value / ratioHeight.value;
      const newHeight = parseFloat((width.value / aspectRatio).toFixed(2));

      if (ratioWidth.value <= 0) {
        throw new Error("A altura deve ser maior que 0");
      }

      height.value = ratioWidth.value > 0 ? newHeight : 0;
      errorContainerHeight.textContent = "";
      errorContainerHeight.classList.remove("error-container-height");
    } catch (error) {
      errorContainerHeight.textContent = "Atenção: " + error.message;
      errorContainerHeight.classList.add("error-container-height");
    }
  };

  // insert the event in the input to update field
  ratioHeight.addEventListener(
    "input",
    updateWidth(ratioWidth, ratioHeight, height, width)
  );
  ratioWidth.addEventListener(
    "input",
    updateHeight(ratioWidth, ratioHeight, height, width)
  );
})();
