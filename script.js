const bellButton = document.getElementById("bell-button");
const bellSound = document.getElementById("bell-sound");

bellButton.addEventListener("click", () => {
    bellSound.currentTime = 0;
    bellSound.play();

    bellButton.classList.add("show");

    setTimeout(() => {
        bellButton.classList.remove("show");
    }, 2000);
});

const tillButton = document.getElementById("till-button");
const receipt = document.querySelector(".receipt-popup");

tillButton.addEventListener("click", (event) => {
    event.stopPropagation();

    tillButton.classList.toggle("show");
});


document.addEventListener("click", () => {
    tillButton.classList.remove("show");
});