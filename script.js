let btn = document.getElementById("btn");
let image = document.getElementById("image");
let nummer = 100;

btn.addEventListener("click", function () {
  image.style.left = nummer + "px";
  nummer += 100;
});
