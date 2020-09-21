const bodyRef = document.querySelector("body");
пше;

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
    this.intervalId = setInterval(() => {
      bodyRef.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
    console.log(this.intervalId);
  },

  stop() {
    clearInterval(this.interval);
    // bodyRef.style.backgroundColor =
  },
};

bodyRef.addEventListener("click", changeColor.start.bind(changeColor));
bodyRef.addEventListener("click", changeColor.stop.bind(changeColor));
