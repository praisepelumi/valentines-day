document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  let mainContianer = document.querySelector(".main-container");

  const yes = document.querySelector(".yes");
  const no = document.querySelector(".no");
  let image = document.querySelector("img");
  let noText = document.querySelector('.noText')

  let randomIndex = 0;
  let buttonSize = 25;
  let funnyTexts = [
    "I thought you were my sunshine",
    "I thought I was your honey bun",
    " But Angel.. why??",
    "This is sooo messed up!",
    "I thought you loved me... I guess I'll have to settle for my cat's affection instead.",
    "Really???... but now I'm questioning my life choices."
  ];
  
  let cryingImages = [
    "https://media.tenor.com/Tp3FMHj6RksAAAAj/bunny-cute.gif", 
    "https://media.tenor.com/hLgZBJ7RjzYAAAAj/cute-dog.gif",
    "https://media.tenor.com/xSdP8nYROncAAAAj/milk-and-mocha-crying.gif", 
    "https://media.tenor.com/ozdZ_TviRjoAAAAj/qoobee-running-away.gif",
    "https://media.tenor.com/Kq41HL1vUmsAAAAj/dissatisfied-frustrated.gif",
    "https://media.tenor.com/0VYt5XUxnrUAAAAj/cute-cry.gif"
  ];

  yes.addEventListener("click", async () => {
    window.location.href = "yes.html"
  });

  no.addEventListener("click", async () => {
    image.src = cryingImages[randomIndex];
    noText.textContent = funnyTexts[randomIndex];
    randomIndex = (randomIndex + 1) % funnyTexts.length;
    yes.style.fontSize = `${buttonSize}px`
    buttonSize += 12
  });

});