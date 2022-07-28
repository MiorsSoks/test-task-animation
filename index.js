const button = document.querySelector(".button");

const firstBarrel = document.querySelector(".barrel-first");
const secondBarrel = document.querySelector(".barrel-second");
const thirdBarrel = document.querySelector(".barrel-third");

function handleClick(event) {
  var loopBegan = 0;
var loopCompleted = 5;
  firstBarrel.classList.toggle("loop-first");
  secondBarrel.classList.toggle("loop-second");
  thirdBarrel.classList.toggle("loop-third");
anime({
  targets: '.loop-first',
  translateX: 270,
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  loopBegin: function(anim) {
    loopBegan++;
    beginLogEl.value = 'loop began : ' + loopBegan;
  },
  loopComplete: function(anim) {
    loopCompleted++;
    completeLogEl.value = 'loop completed : ' + loopCompleted;
  }
  
});
  anime({
  targets: '.loop-second',
    translateX: 200,
  direction: 'alternate',
    loop: true,
  easing: 'easeInOutSine',
    delay: 100,
    endDelay: 100,
    
  });
    anime({
  targets: '.loop-third',
  translateX: -350,
  direction: 'alternate',
  loop: true,
      easing: 'easeInOutSine',
  
});
}

const addSelector = (event) => {
  event.target.classList.toggle("barrel-up");
  anime({
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
