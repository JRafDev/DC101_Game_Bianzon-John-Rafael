const gameState = {
    currentLevel: 1,
    flippedCards: [],
    matchedPairs: 0,
    totalPairs: 0,
    flipsLeft: 0,
    isPaused: false
};

const images = [
    "Assets/Miyabi2.jpg",
    "Assets/Miyabi3.jpg",
    "Assets/Miyabi4.jpg",
    "Assets/Miyabi5.jpg",
    "Assets/Miyabi6.jpg",
    "Assets/Miyabi7.jpg",
    "Assets/Miyabi8.jpg",
    "Assets/Miyabi9.jpg"
];

// MEDIA
const bgMusic = document.getElementById("bg-music");
const flipSound = document.getElementById("flip-sound");

// DOM
const startMenu = document.getElementById("start-menu");
const gameScreen = document.getElementById("game-screen");
const gameBoard = document.getElementById("game-board");
const levelDisplay = document.getElementById("level-display");
const movesDisplay = document.getElementById("moves-display");
const pauseMenu = document.getElementById("pause-menu");
const levelComplete = document.getElementById("level-complete");
const gameOver = document.getElementById("game-over");
const toggleMusicBtn = document.getElementById("toggle-music-btn");

// BUTTON EVENTS
document.getElementById("start-btn").onclick = startGame;
document.getElementById("pause-btn").onclick = pauseGame;
document.getElementById("resume-btn").onclick = resumeGame;
document.getElementById("menu-btn").onclick = backToMenu;
document.getElementById("next-level-btn").onclick = nextLevel;
document.getElementById("retry-btn").onclick = retryLevel;
toggleMusicBtn.onclick = toggleMusic;

// --- FUNCTIONS ---

function startGame() {
    gameState.isPaused = false;
    gameScreen.classList.remove("game-paused"); // ✅ IMPORTANT FIX

    bgMusic.volume = 0.25;
    bgMusic.play().catch(() => {});

    startMenu.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    initializeLevel();
}

function initializeLevel() {
    gameState.flippedCards = [];
    gameState.matchedPairs = 0;
    gameBoard.innerHTML = "";

    const { rows, cols } = getGridSize(gameState.currentLevel);
    gameState.totalPairs = (rows * cols) / 2;
    gameState.flipsLeft = 30 + (gameState.currentLevel - 1) * 10;

    levelDisplay.textContent = `Level ${gameState.currentLevel}`;
    movesDisplay.textContent = `Flips left: ${gameState.flipsLeft}`;

    const selectedImages = getRandomItems(images, gameState.totalPairs);
    const cards = [...selectedImages, ...selectedImages];
    shuffle(cards);

    gameBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

    cards.forEach(src => {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.src = src;

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front"></div>
                <div class="card-back">
                    <img src="${src}">
                </div>
            </div>
        `;

        card.addEventListener("click", () => flipCard(card));
        gameBoard.appendChild(card);
    });
}

function flipCard(card) {
    if (gameState.isPaused) return;
    if (card.classList.contains("flipped")) return;
    if (gameState.flippedCards.length === 2) return;
    if (gameState.flipsLeft <= 0) return;

    flipSound.currentTime = 0;
    flipSound.play();

    gameState.flipsLeft--;
    movesDisplay.textContent = `Flips left: ${gameState.flipsLeft}`;

    card.classList.add("flipped");
    gameState.flippedCards.push(card);

    if (gameState.flippedCards.length === 2) checkMatch();

    if (gameState.flipsLeft === 0 && gameState.matchedPairs < gameState.totalPairs) {
        setTimeout(showGameOver, 600);
    }
}

function checkMatch() {
    const [a, b] = gameState.flippedCards;

    if (a.dataset.src === b.dataset.src) {
        gameState.matchedPairs++;
        gameState.flippedCards = [];

        if (gameState.matchedPairs === gameState.totalPairs) {
            setTimeout(() => levelComplete.classList.remove("hidden"), 600);
        }
    } else {
        setTimeout(() => {
            a.classList.remove("flipped");
            b.classList.remove("flipped");
            gameState.flippedCards = [];
        }, 900);
    }
}

function showGameOver() {
    gameOver.classList.remove("hidden");
}

function retryLevel() {
    gameOver.classList.add("hidden");
    initializeLevel();
}

function pauseGame() {
    gameState.isPaused = true;
    pauseMenu.classList.remove("hidden");
    gameScreen.classList.add("game-paused");
}

function resumeGame() {
    gameState.isPaused = false;
    pauseMenu.classList.add("hidden");
    gameScreen.classList.remove("game-paused"); // ✅ FIX
}

function backToMenu() {
    gameState.currentLevel = 1;
    gameState.isPaused = false;
    gameState.flippedCards = [];

    pauseMenu.classList.add("hidden");
    levelComplete.classList.add("hidden");
    gameOver.classList.add("hidden");

    gameScreen.classList.remove("game-paused"); // ✅ MOST IMPORTANT FIX
    gameScreen.classList.add("hidden");
    startMenu.classList.remove("hidden");

    gameBoard.innerHTML = "";
}

function nextLevel() {
    gameState.currentLevel++;
    levelComplete.classList.add("hidden");

    if (gameState.currentLevel > 10) backToMenu();
    else initializeLevel();
}

function toggleMusic() {
    bgMusic.muted = !bgMusic.muted;
    toggleMusicBtn.textContent = bgMusic.muted ? "Unmute Music" : "Mute Music";
}

function getGridSize(level) {
    return [
        { rows: 3, cols: 4 },
        { rows: 4, cols: 4 },
        { rows: 4, cols: 5 },
        { rows: 5, cols: 5 },
        { rows: 5, cols: 6 },
        { rows: 6, cols: 6 },
        { rows: 6, cols: 7 },
        { rows: 7, cols: 7 },
        { rows: 8, cols: 8 },
        { rows: 8, cols: 10 }
    ][level - 1];
}

function getRandomItems(arr, count) {
    return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
}

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
