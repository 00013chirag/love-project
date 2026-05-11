const noBtn =
document.getElementById("noBtn");

const yesBtn =
document.getElementById("yesBtn");

const result =
document.getElementById("result");


// MOVE NO BUTTON

noBtn.addEventListener(
  "mouseover",
  () => {

    const x =
      Math.random() *
      (window.innerWidth - 100);

    const y =
      Math.random() *
      (window.innerHeight - 100);

    noBtn.style.left = `${x}px`;

    noBtn.style.top = `${y}px`;

  }
);


// YES BUTTON CLICK

yesBtn.addEventListener(
  "click",
  () => {

    result.classList.remove("hidden");
confetti({
  particleCount:150,
  spread:100,
  origin:{ y:0.6 }
});
  }
);