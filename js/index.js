const updateWidth = (ratioWidth, ratioHeight, height, width) => () => {
  try {
    const aspectRatio = ratioWidth.value / ratioHeight.value;
    width.value = parseFloat((height.value * aspectRatio).toFixed(2));
  } catch (error) {
    console.error(error);
    // Handle the error in an appropriate way, e.g., display a message to the user
  }
};

const updateHeight = (ratioWidth, ratioHeight, height, width) => () => {
  try {
    const aspectRatio = ratioWidth.value / ratioHeight.value;
    height.value = parseFloat((width.value / aspectRatio).toFixed(2));
  } catch (error) {
    console.error(error);
    // Handle the error in an appropriate way, e.g., display a message to the user
  }
};

const ratioWidth = document.getElementById("ratio-width");
const ratioHeight = document.getElementById("ratio-height");
const width = document.getElementById("width");
const height = document.getElementById("height");

height.addEventListener(
  "input",
  updateWidth(ratioWidth, ratioHeight, height, width)
);
width.addEventListener(
  "input",
  updateHeight(ratioWidth, ratioHeight, height, width)
);
ratioHeight.addEventListener(
  "input",
  updateWidth(ratioWidth, ratioHeight, height, width)
);
ratioWidth.addEventListener(
  "input",
  updateHeight(ratioWidth, ratioHeight, height, width)
);
