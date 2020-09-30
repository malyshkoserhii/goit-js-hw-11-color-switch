const bodyRef = document.querySelector("body");
const startBtnRef = document.querySelector('button[data-action="start"]');
const stopBtnRef = document.querySelector('button[data-action="stop"]');

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = {
  intervalId: null,

  start() {
    startBtnRef.setAttribute("disabled", "true");
    this.intervalId = setInterval(() => {
      bodyRef.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    startBtnRef.removeAttribute("disabled");
  },
};

startBtnRef.addEventListener("click", changeColor.start.bind(changeColor));
stopBtnRef.addEventListener("click", changeColor.stop.bind(changeColor));
