// ----------------------------
// 🌱 Virtual Plant Care App - JavaScript Logic
// Author: Vanesa Carrillo
// Description: This script manages a gamified virtual plant, handling user data, plant growth, interactivity, badges, session tracking and care feedback.
// ----------------------------

// -----  SCREEN ELEMENTS (HTML sections of the app)
const welcomeScreen = document.getElementById("welcome-screen");
const loadingScreen = document.getElementById("loading-screen");
const mainScreen = document.getElementById("main-screen");

// -----  FORM ELEMENTS (User inputs to personalize the plant)
const form = document.getElementById("user-form");
const ownerNameInput = document.getElementById("ownerName");
const ownerAgeInput = document.getElementById("ownerAge");
const plantNameInput = document.getElementById("plantName");

// -----  DISPLAY ELEMENTS (Dynamic content shown on screen)
const userNameDisplay = document.getElementById("user-name");
const userAgeDisplay = document.getElementById("user-age");
const plantNameDisplay = document.getElementById("plant-name");
const interactionCountDisplay = document.getElementById("interaction-count");
const currentStageDisplay = document.getElementById("current-stage");
const plantImage = document.getElementById("plant-image");
const careMessage = document.getElementById("care-message");

// -----  INTERACTION BUTTONS (Triggers for plant care actions)
const waterBtn = document.getElementById("btn-water");
const sunBtn = document.getElementById("btn-sun");
const fertilizerBtn = document.getElementById("btn-fertilizer");
const talkBtn = document.getElementById("btn-talk");
const resetBtn = document.getElementById("btn-reset");

// -----  GROWTH STAGES (Each stage updates image and name)
const stages = [
    { name: "Seed 🌰", image: "assets/img/0.png" },
    { name: "Sprout 🌿", image: "assets/img/1.png" },
    { name: "Tiny Plant 🌱", image: "assets/img/2.png" },
    { name: "Young Plant 🌼", image: "assets/img/3.png" },
    { name: "Growing Tree 🌳", image: "assets/img/4.png" },
    { name: "Big Tree 🌲", image: "assets/img/5.png" },
    { name: "Mature Tree 🌳✨", image: "assets/img/6.png" }
];

// -----  CARE MESSAGES (Shown randomly when a care action is done)
const messages = {
    water: [
        "💧 Water helps carry nutrients and gives strength.",
        "💦 Too much water can be harmful. Watch its little leaves.",
        "🌱 Some plants need water only when the soil is dry."
    ],
    sun: [
        "☀️ Sunlight activates photosynthesis.",
        "🌞 Some plants prefer indirect sun.",
        "🔆 Sunrays bring life to its leaves."
    ],
    fertilizer: [
        "🌿 Fertilizer provides nutrients for growth.",
        "🪴 Use only when needed.",
        "🌼 A good fertilizer helps roots and leaves."
    ],
    talk: [
        "🗣️ You spoke kindly!",
        "🎵 Your voice is energy.",
        "💚 Attention and care help plants thrive!"
    ]
};

// -----  BADGES SYSTEM (Milestones that reward user care)
const badges = [
    { count: 5, icon: "🥉", text: "Novice Gardener – First steps caring!" },
    { count: 10, icon: "🥐", text: "Passionate Gardener – Your plant loves you!" },
    { count: 15, icon: "🥇", text: "Expert Gardener – You're growing a forest!" },
    { count: 20, icon: "🌟", text: "Master of Growth – Plant master level unlocked!" }
];

// -----  SADNESS STATE TIMER (Triggers sadness if ignored)
const TIME_TO_SADNESS = 10000; // 30 seconds of inactivity
let sadnessTimeout;

function startSadnessTimer() {
    clearTimeout(sadnessTimeout);
    sadnessTimeout = setTimeout(makePlantSad, TIME_TO_SADNESS);
}

function makePlantSad() {
    const count = parseInt(localStorage.getItem("interactions")) || 0;
    const maxStage = stages.length - 1;
    const currentStageIndex = Math.floor(count / 3);

    if (currentStageIndex >= maxStage) {
        plantImage.src = "assets/img/flowerSik.png";
        careMessage.textContent = "🌸😭 Your fully grown plant is feeling down...";
    } else {
        plantImage.src = getSadImage();
        careMessage.textContent = "😭 Your plant feels a bit lonely...";
    }
}

function getSadImage() {
    const count = parseInt(localStorage.getItem("interactions")) || 0;
    if (count < 3) return "assets/img/babySik.png";
    else if (count < 9) return "assets/img/midSik.png";
    else return "assets/img/oldSik.png";
}

// -----  LOAD USER DATA (Loads name, age, plant, interactions)
function loadUserData() {
    const name = localStorage.getItem("ownerName");
    const age = localStorage.getItem("ownerAge");
    const plant = localStorage.getItem("plantName");
    const count = parseInt(localStorage.getItem("interactions")) || 0;

    userNameDisplay.textContent = name;
    userAgeDisplay.textContent = age;
    plantNameDisplay.textContent = plant;
    interactionCountDisplay.textContent = count;

    updateStage(count);
    updateProgressBar(count);
    renderBadges();
    startSadnessTimer();
}

// -----  GROWTH STAGE UPDATER (Based on interaction count)
function updateStage(count) {
    let stageIndex = Math.floor(count / 3);
    if (stageIndex >= stages.length) stageIndex = stages.length - 1;

    const stage = stages[stageIndex];
    currentStageDisplay.textContent = stage.name;
    plantImage.src = stage.image;
}

// -----  PROGRESS BAR FUNCTION (Visual stage progress)
function updateProgressBar(count) {
    const maxPerStage = 3;
    const progressBar = document.getElementById("progress-bar");
    if (!progressBar) return;

    const clicksInCurrentStage = count % maxPerStage;
    const percent = (clicksInCurrentStage / maxPerStage) * 100;
    progressBar.style.width = percent + "%";
}

// -----  RANDOM CARE MESSAGE (Feedback when user interacts)
function showCareMessage(type) {
    const options = messages[type];
    const random = options[Math.floor(Math.random() * options.length)];
    careMessage.textContent = random;
}

// -----  SOUND EFFECT (Each interaction plays a sound)
function playSound() {
    const audio = new Audio("assets/sounds/click.mp3");
    audio.play();
}

// -----  HANDLE USER INTERACTION (Main care handler)
function handleInteraction(type) {
    let count = parseInt(localStorage.getItem("interactions")) || 0;
    count++;
    localStorage.setItem("interactions", count);

    interactionCountDisplay.textContent = count;
    updateStage(count);
    updateProgressBar(count);
    showCareMessage(type);
    checkBadge(count);
    playSound();
    startSadnessTimer();
    updateSessionInteractionCount();

    plantImage.style.transform = "scale(1.05)";
    setTimeout(() => {
        plantImage.style.transform = "scale(1)";
    }, 150);
}

// -----  BADGE CHECKER (Checks if new badge is unlocked)
function checkBadge(count) {
    const unlocked = JSON.parse(localStorage.getItem("unlockedBadges")) || [];
    const newBadge = badges.find(b => b.count === count && !unlocked.includes(b.count));

    if (newBadge) {
        showBadgePopup(newBadge);
        unlocked.push(newBadge.count);
        localStorage.setItem("unlockedBadges", JSON.stringify(unlocked));
        renderBadges();
    }
}

// -----  BADGE RENDERER (Shows all earned + progress to others)
function renderBadges() {
    const badgeList = document.getElementById("badge-list");
    if (!badgeList) return;

    const count = parseInt(localStorage.getItem("interactions")) || 0;
    const unlocked = JSON.parse(localStorage.getItem("unlockedBadges")) || [];
    badgeList.innerHTML = "";

    badges.forEach(badge => {
        const isUnlocked = unlocked.includes(badge.count);
        const progress = Math.min((count / badge.count) * 100, 100);

        const li = document.createElement("li");
        li.className = "badge-container";

        const info = document.createElement("div");
        info.className = "badge-info";
        info.innerText = isUnlocked ? `${badge.icon} ${badge.text}` : `🔒 ${badge.text}`;

        const bar = document.createElement("div");
        bar.className = "progress-bar small";

        const fill = document.createElement("div");
        fill.className = "progress-fill";
        fill.style.width = `${progress}%`;

        bar.appendChild(fill);
        li.appendChild(info);
        li.appendChild(bar);

        badgeList.appendChild(li);
    });
}

// -----  BADGE POPUP (Appears when a badge is unlocked)
function showBadgePopup(badge) {
    const popup = document.getElementById("badge-popup");
    const icon = document.getElementById("badge-icon");
    const title = document.getElementById("badge-title");
    const description = document.getElementById("badge-description");

    if (popup && icon && title && description) {
        icon.textContent = badge.icon;
        title.textContent = "🎉 New Badge!";
        description.textContent = badge.text;

        popup.classList.remove("hidden");
        setTimeout(() => {
            popup.classList.add("hidden");
        }, 3000);
    }
}

// -----  SESSION STORAGE INTERACTION COUNTER
function updateSessionInteractionCount() {
    let sessionCount = parseInt(sessionStorage.getItem("sessionInteractionCount")) || 0;
    sessionCount++;
    sessionStorage.setItem("sessionInteractionCount", sessionCount);
    console.log(`🔍 Session Interactions: ${sessionCount}`);
}

// -----  RESET APP (Clears everything and reloads)
function resetApp() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "index.html";
}

// -----  FORM SUBMISSION (When user sets up the plant)
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const ownerName = ownerNameInput.value.trim();
        const ownerAge = ownerAgeInput.value.trim();
        const plantName = plantNameInput.value.trim();

        localStorage.setItem("ownerName", ownerName);
        localStorage.setItem("ownerAge", ownerAge);
        localStorage.setItem("plantName", plantName);
        localStorage.setItem("interactions", 0);
        localStorage.setItem("unlockedBadges", JSON.stringify([]));

        welcomeScreen.style.display = "none";
        loadingScreen.style.display = "block";

        setTimeout(() => {
            loadingScreen.style.display = "none";
            mainScreen.style.display = "block";
            loadUserData();
        }, 2000);
    });
}

// -----  INITIALIZE APP ON LOAD
window.addEventListener("DOMContentLoaded", () => {  //window.onload
    const name = localStorage.getItem("ownerName");
    const popup = document.getElementById("badge-popup");
    if (popup) popup.classList.add("hidden");
    sessionStorage.setItem("sessionInteractionCount", 0); // Reset session count

    if (name) {
        welcomeScreen.style.display = "none";
        loadingScreen.style.display = "none";
        mainScreen.style.display = "block";
        loadUserData();
    }
});

// -----  EVENT LISTENERS FOR CARE BUTTONS
if (waterBtn) waterBtn.addEventListener("click", () => handleInteraction("water"));
if (sunBtn) sunBtn.addEventListener("click", () => handleInteraction("sun"));
if (fertilizerBtn) fertilizerBtn.addEventListener("click", () => handleInteraction("fertilizer"));
if (talkBtn) talkBtn.addEventListener("click", () => handleInteraction("talk"));
if (resetBtn) resetBtn.addEventListener("click", resetApp);
