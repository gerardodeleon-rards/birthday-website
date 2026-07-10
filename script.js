// ===============================
// OPEN GIFT BUTTON
// ===============================

const startBtn = document.getElementById("startBtn");
const bgMusic = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let musicPlaying = false;


musicBtn.addEventListener("click",()=>{


    if(!musicPlaying){

        bgMusic.play();

        musicBtn.innerHTML="⏸️ Pause Music";

        musicPlaying=true;


    }else{


        bgMusic.pause();

        musicBtn.innerHTML="🎵 Play Music";

        musicPlaying=false;


    }


});

startBtn.addEventListener("click", () => {

    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });

    // Play music after user interaction
    bgMusic.play().catch(() => {});

});

// ===============================
// FLOATING HEARTS
// ===============================

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,600);

// ===============================
// TYPEWRITER LOVE LETTER
// ===============================

const letter = `Happy Birthday, my love. ❤️

Sana kahit sa simpleng website na ini mapaugma taka sa espesyal na araw mo.
Hindi man ito ang pinakamahal na regalo, pero ginawa ko ni ning buong puso dahil gusto kong maramdaman mo kung gaano ka kahalaga sa akin.

I admire your beauty, your strength, and your kind heart.

Thank you for always taking care of me.

Thank you for making me smile every single day.

These past 3 years and 9 months have been the happiest moments of my life.

I hope we continue creating more memories together.

🍽️ Eating together

🎮 Playing games

🎤 Singing our favorite songs

Iloveyousomuchhhh.

Happy Birthday, Padaba. ❤️`;

const target = document.getElementById("typewriter");

let i = 0;
let started = false;

function typeWriter(){

    if(i < letter.length){

        target.textContent += letter.charAt(i);

        i++;

        setTimeout(typeWriter,30);

    }

}

window.addEventListener("scroll",()=>{

    const section = document.getElementById("letter");

    if(!started && section.getBoundingClientRect().top < window.innerHeight - 100){

        started = true;

        typeWriter();

    }

});

// ===============================
// IMAGE POPUP
// ===============================

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.getElementById("closePopup");

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        popup.style.display="flex";

        popupImg.src=img.src;

    });

});

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});

// ===============================
// BIRTHDAY CAKE
// ===============================

const cake = document.getElementById("cake");
const wish = document.getElementById("wishMessage");

cake.addEventListener("click",()=>{

    cake.classList.add("popCake");

    cake.innerHTML="🎉";

    wish.classList.add("showWish");

    startConfetti();

    setTimeout(()=>{

        cake.innerHTML="🎂";

        cake.classList.remove("popCake");

    },1000);

});

// ===============================
// CONFETTI EFFECT
// ===============================

function createConfetti(){

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    confetti.innerHTML = "🎊";

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.animationDuration = (Math.random() * 2 + 2) + "s";

    document.body.appendChild(confetti);


    setTimeout(()=>{

        confetti.remove();

    },4000);

}


function startConfetti(){

    for(let i = 0; i < 80; i++){

        setTimeout(()=>{

            createConfetti();

        }, i * 20);

    }

}

// ===============================
// SCROLL FADE ANIMATION
// ===============================

const fadeSections = document.querySelectorAll(".fade-section");


function revealSections(){

    fadeSections.forEach(section=>{

        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;


        if(position < screenHeight - 100){

            section.classList.add("show");

        }

    });

}


window.addEventListener("scroll", revealSections);

revealSections();

// ===============================
// STAR BACKGROUND
// ===============================

const starsContainer = document.getElementById("stars-container");


for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    star.classList.add("star");


    star.style.left = Math.random()*100 + "vw";

    star.style.top = Math.random()*100 + "vh";


    star.style.animationDelay =
    Math.random()*3 + "s";


    starsContainer.appendChild(star);

}

// ===============================
// FINAL MESSAGE REVEAL
// ===============================

const finalSection = document.querySelector(".final-message");


window.addEventListener("scroll",()=>{

    const position = finalSection.getBoundingClientRect().top;


    if(position < window.innerHeight - 150){

        finalSection.classList.add("show");

    }

});