const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const colors = ["red", "green", "blue", "rgba(133,122,200)", "#f15025"];

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  // console.log(randomNumber);

  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
