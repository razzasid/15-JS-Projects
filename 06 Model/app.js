const openModel = document.querySelector(".open-btn");
const closeModel = document.querySelector(".close-btn");
const model = document.querySelector(".model-overlay");

openModel.addEventListener("click", function () {
  model.classList.add("open-model");
});
closeModel.addEventListener("click", function () {
  model.classList.remove("open-model");
});
