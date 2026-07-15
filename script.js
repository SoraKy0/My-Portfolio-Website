document.addEventListener('DOMContentLoaded', () => {
    
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

    const slimeButton = document.getElementById("slime-button");
    const slimeSound = document.getElementById("slime-sound");

    slimeButton.addEventListener("click", (event) => {
        event.stopPropagation(); 
        
        slimeButton.classList.remove("clicked");
        
        void slimeButton.offsetWidth; 
        
        slimeButton.classList.add("clicked");
        
        slimeSound.currentTime = 0;
        slimeSound.play();
    });

    slimeButton.addEventListener("animationend", () => {
        slimeButton.classList.remove("clicked");
    });

    document.addEventListener("click", () => {
        slimeButton.classList.remove("clicked");
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


    const projectSlots = document.querySelectorAll('.project-slot');
    const projectCards = document.querySelectorAll('.project-window-card');
    const exitButtons = document.querySelectorAll('.exit-button');

    projectSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            const projectId = slot.getAttribute('data-project');
            
            projectCards.forEach(card => card.classList.remove('active'));

            const matchingCard = document.querySelector(`.project-window-card[data-project="${projectId}"]`);
            
            if (matchingCard) {
                matchingCard.classList.add('active');
            }
        });
    });

    exitButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parentCard = button.closest('.project-window-card');
            
            if (parentCard) {
                parentCard.classList.remove('active');
            }
        });
    });

});