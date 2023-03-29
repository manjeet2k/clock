const date = new Date();
const seconds = date.getSeconds();
window.onload = function () {
  const date = new Date();
  document.querySelector(".seconds").style.rotate = `${
    6 * date.getSeconds()
  }deg`;
  document.querySelector(".minutes").style.rotate = `${
    6 * date.getMinutes()
  }deg`;
  document.querySelector(".hours").style.rotate = `${(30 * (date.getHours() % 12 ) + (0.5 * date.getMinutes()))}deg`;
};

setInterval(() => {
  const date = new Date();
  document.querySelector(".seconds").style.rotate = `${
    6 * date.getSeconds()
  }deg`;

  document.querySelector(".minutes").style.rotate = `${6 * date.getMinutes()}deg`;
  document.querySelector(".hours").style.rotate = `${(30 * (date.getHours() % 12 ) + (0.5 * date.getMinutes()))}deg`;
}, 1000);
