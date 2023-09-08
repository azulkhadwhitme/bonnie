var flashlightActive = false;

function updateFlashlightPosition(event) {
    const flashlight = document.getElementById('flashlight');
    
    if (flashlightActive) {
        const x = event.clientX;
        const y = event.clientY;
        
        flashlight.style.left = `${x - 50}px`;
        flashlight.style.top = `${y - 50}px`;
    }
}

function playSound() {
    var sound = document.getElementById("nariz-audio");
    sound.currentTime = 0;
    sound.play();
}

var neonSound = null;

function playNeonSound() {
    if (neonSound === null || neonSound.paused) {
        neonSound = document.getElementById("neon-audio");
        neonSound.currentTime = 0;
        neonSound.play();
    }
}

function stopNeonSound() {
    if (neonSound !== null) {
        neonSound.pause();
    }
}

function flashlightClicked() {
    playSound();
}

function toggleLights() {
    const followButton = document.getElementById('follow-button');
    const flashlight = document.getElementById('flashlight');
    
    if (followButton.classList.contains('active')) {
        followButton.classList.remove('active');
        flashlightActive = false;
    } else {
        followButton.classList.add('active');
        flashlightActive = true;
    }
}

document.addEventListener('mousemove', updateFlashlightPosition);

const container = document.querySelectorAll(".container .card");

container.forEach(el => {
    el.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
        el.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    el.addEventListener('mouseenter', (e) => {
        el.style.transition = 'none';
    });

    el.addEventListener('mouseleave', (e) => {
        el.style.transition = 'all 0.5s ease';
        el.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });

    el.addEventListener("click", function () {
        el.classList.toggle("flipped");
    });
});

const introButtons = document.querySelectorAll(".btn");
const cards = document.querySelectorAll(".card");

introButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        cards[index].classList.toggle("flipped");
    });
});

const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}

