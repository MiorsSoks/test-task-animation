const button = document.querySelector(".button");

const handleClick = () => {
  console.log("Button was clicked");
};

button.addEventListener("click", handleClick);
anime({
  targets: '.barrel-up',
  translateY: -60,
  duration: 1200,
  easing: 'easeInOutExpo',
  rotate: {
    value: -30,
    duration: 1200,
  },
},
);
