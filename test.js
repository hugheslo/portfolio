function openEmail() {
    window.location.href = "mailto:loganahughes05@gmail.com";
}
const aboutMeText = document.getElementById('aboutMeText');
const projectsText = document.getElementById('projectsText');
const gamingSection = document.getElementById('gamingSection');

// Helper to hide all
function hideAllSections() {
    aboutMeText.style.display = 'none';
    projectsText.style.display = 'none';
    gamingSection.style.display = 'none';
}

function toggleAboutMe() {
    const isHidden = aboutMeText.style.display === 'none' || !aboutMeText.style.display;
    hideAllSections();
    if (isHidden) aboutMeText.style.display = 'block';
}

function togglProjects() {
    const isHidden = projectsText.style.display === 'none' || !projectsText.style.display;
    hideAllSections();
    if (isHidden) projectsText.style.display = 'block';
}
let controllerTimeout;

let controllerTimeout;

function toggleGaming() {
    const gamingSection = document.getElementById('gamingSection');
    const controller = document.querySelector('.easter-egg');
    const isMobileOrTablet = window.innerWidth <= 1024; // Adjust breakpoint if needed

    // Toggle gaming section visibility
    gamingSection.style.display = (gamingSection.style.display === 'block') ? 'none' : 'block';

    if (isMobileOrTablet) {
        // Reset any hiding/fade if it was already running
        if (controllerTimeout) clearTimeout(controllerTimeout);

        controller.style.display = 'block';
        controller.style.transition = 'none'; // Cancel any ongoing transition immediately
        controller.style.opacity = 0.15; // Start with 15% visibility right away

        // Force reflow to re-trigger animation
        void controller.offsetWidth;

        // Now start fadeout after 2 seconds
        controllerTimeout = setTimeout(() => {
            controller.style.transition = 'opacity 0.5s ease';
            controller.style.opacity = 0;
            controllerTimeout = setTimeout(() => {
                controller.style.display = 'none'; 
            }, 500); // Wait for fade to finish before hiding
        }, 2000); // Wait 2 seconds before starting fade out
    } else {
        // On desktop: controller stays whatever normal behavior you want (you left it empty)
    }
}

// function toggleGaming() {
//     const isHidden = gamingSection.style.display === 'none' || !gamingSection.style.display;
//     hideAllSections();
//     if (isHidden) gamingSection.style.display = 'block';
// }



const games = {
    ticTacToe: "https://hl-tic-tac-toe.netlify.app",
    rockPaperScissors: "https://rock-paper-scissors-lh.netlify.app",
    skillStream: "https://skillstreamte.netlify.app"
   
};

function openGame(gameKey) {
    if (games[gameKey]) {
        document.getElementById('gameOverlay').style.display = 'flex';
        document.getElementById('gameFrame').src = games[gameKey]; // Load the game URL
    } else {
        alert("Game not found!");
    }
}

function closeGame() {
    document.getElementById('gameOverlay').style.display = 'none';
    document.getElementById('gameFrame').src = ""; // Stop the game when closing
}



function openResume() {
    window.open('images/LoganHughesResume.pdf', '_blank');
}

document.addEventListener("DOMContentLoaded", function () {
    const typedText = document.getElementById("typedText");
    const text = "Hi, I'm Logan Hughes!";
    let i = 0;

    function typeText() {
        if (i < text.length) {
            typedText.textContent += text.charAt(i);
            i++;
            setTimeout(typeText, 100); // Adjust the speed here
        }
    }

    // Start typing after the page loads
    typeText();
    
});