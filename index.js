const button = document.querySelector(".button");

const firstBarrel = document.querySelector(".barrel-first");
const secondBarrel = document.querySelector(".barrel-second");
const thirdBarrel = document.querySelector(".barrel-third");


function handleClick(event) {

  firstBarrel.classList.toggle("loop-first");
  secondBarrel.classList.toggle("loop-second");
  thirdBarrel.classList.toggle("loop-third");
  anime({
  targets: '.loop-first',
  translateX: 270,
  direction: 'alternate',
  loop: 2,
  easing: 'easeInOutSine',
  
});
  anime({
  targets: '.loop-second',
    translateX: 200,
  direction: 'alternate',
    loop: 2,
  easing: 'easeInOutSine',
    delay: 100,
    endDelay: 100,
    
  });
    anime({
  targets: '.loop-third',
  translateX: -350,
  direction: 'alternate',
  loop: 2,
      easing: 'easeInOutSine',
          delay: 20,
    endDelay: 20,
  
    });
}

const addSelector = (event) => {
  event.target.classList.toggle("barrel-up");
  firstBarrel.classList.toggle("loop-first");
  secondBarrel.classList.toggle("loop-second");
  thirdBarrel.classList.toggle("loop-third");
  var first = anime({
    targets: ".barrel-up",
    translateY: -60,
    duration: 1200,
    easing: "easeInOutExpo",
    rotate: {
      value: -30,
      duration: 1200,
    },
  });
};

button.addEventListener("click", handleClick);

firstBarrel.addEventListener("click", addSelector);
secondBarrel.addEventListener("click", addSelector);
thirdBarrel.addEventListener("click", addSelector);
