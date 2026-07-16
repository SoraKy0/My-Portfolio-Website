document.addEventListener('DOMContentLoaded', () => {
    
    const bellButton = document.getElementById("bell-button");
    const bellSound = document.getElementById("bell-sound");

    bellButton.addEventListener("click", () => {
        bellSound.currentTime = 0;
        bellSound.play();

        bellButton.classList.add("show");
        void bellButton.offsetWidth; 
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
    const tillsound = document.getElementById("till-sound");

    tillButton.addEventListener("click", (event) => {
        tillsound.currentTime = 0;
        tillsound.play();
        event.stopPropagation(); 
        tillButton.classList.toggle("show");
    });

    document.addEventListener("click", () => {
        tillButton.classList.remove("show");
    });

    const githubsound = document.getElementById("github-sound");


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

    const topLight = document.querySelector('.light');
    const floorLamp = document.querySelector('.lantern');
    const lightsound = document.getElementById("light-sound")

    const body = document.body;

    const toggleDarkMode = (event) => {
        event.stopPropagation();
        lightsound.volume = 0.4; 
        lightsound.currentTime = 0;
        lightsound.play();

        body.classList.toggle('dark-mode');
    };

    topLight.addEventListener('click', toggleDarkMode);
    floorLamp.addEventListener('click', toggleDarkMode);

});

    const hoverSound = document.getElementById("hover-sound");
    const projectSlots = document.querySelectorAll('.project-slot');

    projectSlots.forEach(slot => {
        slot.addEventListener('mouseenter', () => {

            const soundClone = hoverSound.cloneNode(true);
            
            soundClone.volume = 0.3; 
            
            soundClone.play().catch(error => {
            });

            soundClone.addEventListener('ended', () => {
                soundClone.remove();
            });
        });
    });