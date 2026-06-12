// ============================================================
// DADOS DOS ESTADOS (27 ESTADOS COM FLAGS COMPLETAS)
// ============================================================
const estadosAPI = [
    { "uf": "AC", "name": "Acre", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ac-full.svg", "capital": "Rio Branco", "regiao": "Norte", "curiosidade": "Maior produtor de castanha-do-pará." },
    { "uf": "AL", "name": "Alagoas", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/al-full.svg", "capital": "Maceió", "regiao": "Nordeste", "curiosidade": "Lagoas e coqueirais, paraísos naturais." },
    { "uf": "AP", "name": "Amapá", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ap-full.svg", "capital": "Macapá", "regiao": "Norte", "curiosidade": "Cortado pela Linha do Equador." },
    { "uf": "AM", "name": "Amazonas", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/am-full.svg", "capital": "Manaus", "regiao": "Norte", "curiosidade": "Maior estado brasileiro em área." },
    { "uf": "BA", "name": "Bahia", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ba-full.svg", "capital": "Salvador", "regiao": "Nordeste", "curiosidade": "Berço do acarajé e do samba de roda." },
    { "uf": "CE", "name": "Ceará", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ce-full.svg", "capital": "Fortaleza", "regiao": "Nordeste", "curiosidade": "Famoso pelas dunas e jangadas." },
    { "uf": "DF", "name": "Distrito Federal", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/df-full.svg", "capital": "Brasília", "regiao": "Centro-Oeste", "curiosidade": "Projetado por Oscar Niemeyer." },
    { "uf": "ES", "name": "Espírito Santo", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/es-full.svg", "capital": "Vitória", "regiao": "Sudeste", "curiosidade": "Famoso pelo convento da Penha." },
    { "uf": "GO", "name": "Goiás", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/go-full.svg", "capital": "Goiânia", "regiao": "Centro-Oeste", "curiosidade": "Águas quentes e cidades históricas." },
    { "uf": "MA", "name": "Maranhão", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ma-full.svg", "capital": "São Luís", "regiao": "Nordeste", "curiosidade": "Lençóis Maranhenses, beleza única." },
    { "uf": "MT", "name": "Mato Grosso", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/mt-full.svg", "capital": "Cuiabá", "regiao": "Centro-Oeste", "curiosidade": "Portal do Pantanal." },
    { "uf": "MS", "name": "Mato Grosso do Sul", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ms-full.svg", "capital": "Campo Grande", "regiao": "Centro-Oeste", "curiosidade": "Ecoturismo e pesca esportiva." },
    { "uf": "MG", "name": "Minas Gerais", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/mg-full.svg", "capital": "Belo Horizonte", "regiao": "Sudeste", "curiosidade": "Maior produtor de café do Brasil." },
    { "uf": "PA", "name": "Pará", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/pa-full.svg", "capital": "Belém", "regiao": "Norte", "curiosidade": "Mercado Ver-o-Peso e açaí." },
    { "uf": "PB", "name": "Paraíba", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/pb-full.svg", "capital": "João Pessoa", "regiao": "Nordeste", "curiosidade": "Ponta do Seixas, ponto mais oriental." },
    { "uf": "PR", "name": "Paraná", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/pr-full.svg", "capital": "Curitiba", "regiao": "Sul", "curiosidade": "Cataratas do Iguaçu." },
    { "uf": "PE", "name": "Pernambuco", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/pe-full.svg", "capital": "Recife", "regiao": "Nordeste", "curiosidade": "Berço do frevo e maracatu." },
    { "uf": "PI", "name": "Piauí", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/pi-full.svg", "capital": "Teresina", "regiao": "Nordeste", "curiosidade": "Parque Nacional Serra da Capivara." },
    { "uf": "RJ", "name": "Rio de Janeiro", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/rj-full.svg", "capital": "Rio de Janeiro", "regiao": "Sudeste", "curiosidade": "Cristo Redentor, cartão postal." },
    { "uf": "RN", "name": "Rio Grande do Norte", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/rn-full.svg", "capital": "Natal", "regiao": "Nordeste", "curiosidade": "Dunas de Genipabu." },
    { "uf": "RS", "name": "Rio Grande do Sul", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/rs-full.svg", "capital": "Porto Alegre", "regiao": "Sul", "curiosidade": "Tradição do chimarrão e churrasco." },
    { "uf": "RO", "name": "Rondônia", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/ro-full.svg", "capital": "Porto Velho", "regiao": "Norte", "curiosidade": "Fronteira com a Bolívia." },
    { "uf": "RR", "name": "Roraima", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/rr-full.svg", "capital": "Boa Vista", "regiao": "Norte", "curiosidade": "Monte Roraima, ponto tríplice." },
    { "uf": "SC", "name": "Santa Catarina", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/sc-full.svg", "capital": "Florianópolis", "regiao": "Sul", "curiosidade": "Destino com influência alemã e italiana." },
    { "uf": "SP", "name": "São Paulo", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/sp-full.svg", "capital": "São Paulo", "regiao": "Sudeste", "curiosidade": "Maior economia do país." },
    { "uf": "SE", "name": "Sergipe", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/se-full.svg", "capital": "Aracaju", "regiao": "Nordeste", "curiosidade": "Menor estado do Brasil." },
    { "uf": "TO", "name": "Tocantins", "flag_url": "https://assets.codante.io/codante-apis/bandeiras-dos-estados/to-full.svg", "capital": "Palmas", "regiao": "Norte", "curiosidade": "Estado mais jovem, criado em 1988." }
];

// ============================================================
// PLAYER STATE
// ============================================================
let player = {
    xp: 0,
    totalCorrectAnswers: 0,
    unlockedStates: new Array(27).fill(false),
    levelIndex: 0,
    achievements: {
        firstHit: false, fiveCombo: false, northComplete: false,
        northeastComplete: false, centerwestComplete: false,
        southeastComplete: false, southComplete: false, allFlags: false
    }
};

const patentes = ["🥉 Explorador", "🥈 Conhecedor Regional", "🥇 Especialista em Bandeiras", "💎 Cartógrafo Nacional", "👑 Mestre do Brasil"];
const xpThresholds = [0, 30, 100, 220, 420];

let gameSession = {
    currentQuestionIndex: 0,
    shuffledIndices: [],
    score: 0,
    combo: 0,
    maxCombo: 0,
    answered: false,
    currentCorrectAnswer: null,
    timerInterval: null,
    secondsElapsed: 0,
    autoNextTimeout: null,
    regionFilter: "all"
};

// ============================================================
// CORE FUNCTIONS
// ============================================================
function saveToLocal() {
    localStorage.setItem("missaoBandeiras_neo_v2", JSON.stringify({
        xp: player.xp,
        totalCorrect: player.totalCorrectAnswers,
        unlocked: player.unlockedStates,
        levelIdx: player.levelIndex,
        achievements: player.achievements
    }));
}

function loadFromLocal() {
    const data = localStorage.getItem("missaoBandeiras_neo_v2");
    if (data) {
        const p = JSON.parse(data);
        player.xp = p.xp || 0;
        player.totalCorrectAnswers = p.totalCorrect || 0;
        player.unlockedStates = p.unlocked || new Array(27).fill(false);
        player.levelIndex = p.levelIdx || 0;
        player.achievements = p.achievements || {
            firstHit: false, fiveCombo: false, northComplete: false,
            northeastComplete: false, centerwestComplete: false,
            southeastComplete: false, southComplete: false, allFlags: false
        };
        updatePatenteByXP();
    }
}

function resetAllProgress() {
    player = {
        xp: 0,
        totalCorrectAnswers: 0,
        unlockedStates: new Array(27).fill(false),
        levelIndex: 0,
        achievements: {
            firstHit: false, fiveCombo: false, northComplete: false,
            northeastComplete: false, centerwestComplete: false,
            southeastComplete: false, southComplete: false, allFlags: false
        }
    };
    saveToLocal();
    updatePatenteByXP();
    updateGameUIStats();
    updateCollectionUI();
    updateXPBar();
}

function updatePatenteByXP() {
    let lvl = 0;
    for (let i = xpThresholds.length - 1; i >= 0; i--) {
        if (player.xp >= xpThresholds[i]) { lvl = i; break; }
    }
    player.levelIndex = lvl;
    saveToLocal();
}

function addXP(amount) {
    const oldLevel = player.levelIndex;
    player.xp += amount;
    updatePatenteByXP();
    updateXPBar();
    
    if (player.levelIndex > oldLevel) {
        showLevelUpAnimation();
    }
}

function showLevelUpAnimation() {
    const feedbackArea = document.getElementById("feedbackArea");
    if (feedbackArea && !gameSession.answered) {
        const levelUpMsg = document.createElement("div");
        levelUpMsg.className = "result-panel result-correct";
        levelUpMsg.innerHTML = `<h2>🎉 LEVEL UP! 🎉</h2><p>Você agora é ${patentes[player.levelIndex]}!</p>`;
        feedbackArea.appendChild(levelUpMsg);
        setTimeout(() => { if (levelUpMsg.parentNode) levelUpMsg.remove(); }, 2000);
    }
}

function updateXPBar() {
    const currentThreshold = xpThresholds[player.levelIndex];
    const nextThreshold = xpThresholds[player.levelIndex + 1] || xpThresholds[player.levelIndex] + 200;
    const xpInLevel = player.xp - currentThreshold;
    const xpNeeded = nextThreshold - currentThreshold;
    const percentage = Math.min(100, Math.max(0, (xpInLevel / xpNeeded) * 100));
    const fillBar = document.getElementById("xpBarFill");
    if (fillBar) fillBar.style.width = `${percentage}%`;
    const xpText = document.getElementById("xpProgressText");
    if (xpText) xpText.innerText = `${xpInLevel} / ${xpNeeded} XP`;
    const nextPatenteSpan = document.getElementById("nextPatenteLabel");
    if (nextPatenteSpan && player.levelIndex < patentes.length - 1) {
        nextPatenteSpan.innerText = patentes[player.levelIndex + 1];
    } else if (nextPatenteSpan) {
        nextPatenteSpan.innerText = "👑 MÁXIMO";
    }
}

function unlockAchievement(achievementId) {
    if (player.achievements[achievementId]) return false;
    player.achievements[achievementId] = true;
    saveToLocal();
    
    const feedbackArea = document.getElementById("feedbackArea");
    if (feedbackArea) {
        const achMsg = document.createElement("div");
        achMsg.className = "result-panel result-correct";
        achMsg.innerHTML = `<h2>🏆 CONQUISTA DESBLOQUEADA!</h2><p>${getAchievementName(achievementId)}</p>`;
        feedbackArea.appendChild(achMsg);
        setTimeout(() => { if (achMsg.parentNode) achMsg.remove(); }, 2500);
    }
    return true;
}

function getAchievementName(id) {
    const names = {
        firstHit: "🎯 Primeiro Acerto!",
        fiveCombo: "🔥 5 Acertos Seguidos!",
        northComplete: "🌴 Região Norte Completa!",
        northeastComplete: "🏖️ Região Nordeste Completa!",
        centerwestComplete: "🏞️ Centro-Oeste Completo!",
        southeastComplete: "🏙️ Sudeste Completo!",
        southComplete: "❄️ Sul Completo!",
        allFlags: "👑 Coleção Completa!"
    };
    return names[id] || "Nova Conquista!";
}

function checkAchievements() {
    if (!player.achievements.firstHit && player.totalCorrectAnswers >= 1) unlockAchievement('firstHit');
    if (!player.achievements.fiveCombo && gameSession.combo >= 5) unlockAchievement('fiveCombo');
    
    const regioesCount = { "Norte": 0, "Nordeste": 0, "Centro-Oeste": 0, "Sudeste": 0, "Sul": 0 };
    const totalPorRegiao = { "Norte": 7, "Nordeste": 9, "Centro-Oeste": 4, "Sudeste": 4, "Sul": 3 };
    
    estadosAPI.forEach((est, idx) => {
        if (player.unlockedStates[idx]) regioesCount[est.regiao]++;
    });
    
    if (!player.achievements.northComplete && regioesCount["Norte"] === totalPorRegiao["Norte"]) unlockAchievement('northComplete');
    if (!player.achievements.northeastComplete && regioesCount["Nordeste"] === totalPorRegiao["Nordeste"]) unlockAchievement('northeastComplete');
    if (!player.achievements.centerwestComplete && regioesCount["Centro-Oeste"] === totalPorRegiao["Centro-Oeste"]) unlockAchievement('centerwestComplete');
    if (!player.achievements.southeastComplete && regioesCount["Sudeste"] === totalPorRegiao["Sudeste"]) unlockAchievement('southeastComplete');
    if (!player.achievements.southComplete && regioesCount["Sul"] === totalPorRegiao["Sul"]) unlockAchievement('southComplete');
    if (!player.achievements.allFlags && player.unlockedStates.filter(u => u === true).length === 27) unlockAchievement('allFlags');
}

function updateGameUIStats() {
    const profileXp = document.getElementById("profileXp");
    const profileLevel = document.getElementById("profileLevel");
    const profileTotalCorrect = document.getElementById("profileTotalCorrect");
    if (profileXp) profileXp.innerText = player.xp;
    if (profileLevel) profileLevel.innerText = patentes[player.levelIndex];
    if (profileTotalCorrect) profileTotalCorrect.innerText = player.totalCorrectAnswers;
    updateXPBar();
}

function getFilteredIndices() {
    const filter = gameSession.regionFilter;
    if (filter === "all") return [...Array(27).keys()];
    return estadosAPI.reduce((acc, est, idx) => {
        if (est.regiao === filter) acc.push(idx);
        return acc;
    }, []);
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getRandomDistractors(correctName, count = 3) {
    let others = estadosAPI.filter(e => e.name !== correctName).map(e => e.name);
    for (let i = others.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [others[i], others[j]] = [others[j], others[i]];
    }
    return others.slice(0, count);
}

function renderCurrentQuestion() {
    const idx = gameSession.shuffledIndices[gameSession.currentQuestionIndex];
    const estado = estadosAPI[idx];
    gameSession.currentCorrectAnswer = estado.name;
    
    const flagImg = document.getElementById("flagImg");
    if (flagImg) flagImg.src = estado.flag_url;
    
    const alternatives = [estado.name, ...getRandomDistractors(estado.name, 3)];
    for (let i = alternatives.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [alternatives[i], alternatives[j]] = [alternatives[j], alternatives[i]];
    }
    
    const container = document.getElementById("alternativesContainer");
    if (container) {
        container.innerHTML = "";
        alternatives.forEach(alt => {
            const card = document.createElement("div");
            card.className = "alt-card";
            card.innerText = alt;
            card.onclick = () => handleAnswer(alt);
            container.appendChild(card);
        });
    }
    
    const feedbackArea = document.getElementById("feedbackArea");
    if (feedbackArea) feedbackArea.innerHTML = "";
    gameSession.answered = false;
    
    const allCards = document.querySelectorAll(".alt-card");
    allCards.forEach(card => card.classList.remove("disabled"));
}

function clearAutoNext() {
    if (gameSession.autoNextTimeout) {
        clearTimeout(gameSession.autoNextTimeout);
        gameSession.autoNextTimeout = null;
    }
}

function startAutoNext() {
    clearAutoNext();
    gameSession.autoNextTimeout = setTimeout(() => {
        nextQuestion();
    }, 3000);
}

function animateCombo() {
    const comboElement = document.getElementById("comboCount");
    if (comboElement) {
        comboElement.classList.add("combo-burst");
        setTimeout(() => comboElement.classList.remove("combo-burst"), 300);
    }
}

function handleAnswer(selected) {
    if (gameSession.answered) return;
    gameSession.answered = true;
    clearAutoNext();
    
    const allCards = document.querySelectorAll(".alt-card");
    allCards.forEach(card => card.classList.add("disabled"));
    
    const idx = gameSession.shuffledIndices[gameSession.currentQuestionIndex];
    const stateObj = estadosAPI[idx];
    const isCorrect = (selected === stateObj.name);
    let xpGain = 0;
    
    if (isCorrect) {
        gameSession.combo++;
        if (gameSession.combo > gameSession.maxCombo) gameSession.maxCombo = gameSession.combo;
        let comboBonus = Math.min(gameSession.combo * 2, 18);
        xpGain = 10 + comboBonus;
        gameSession.score += 10 + comboBonus;
        addXP(xpGain);
        player.totalCorrectAnswers++;
        animateCombo();
        
        let unlockMessage = "";
        if (!player.unlockedStates[idx]) {
            player.unlockedStates[idx] = true;
            unlockMessage = `<p style="font-weight:bold; margin-top:0.3rem;">🏆 NOVO ESTADO DESBLOQUEADO: ${stateObj.name}!</p>`;
            saveToLocal();
            checkAchievements();
        }
        
        const feedbackArea = document.getElementById("feedbackArea");
        if (feedbackArea) {
            feedbackArea.innerHTML = `<div class="result-panel result-correct">
                <h2>🎉 ACERTOU! ${stateObj.name}</h2>
                <p>📍 ${stateObj.capital} | 🗺️ ${stateObj.regiao}</p>
                <p>✨ ${stateObj.curiosidade}</p>
                <p>🔥 +${xpGain} XP | Combo ${gameSession.combo}x</p>
                ${unlockMessage}
                <p style="font-size:0.7rem; margin-top:0.4rem;">⏩ Próxima em 3 segundos...</p>
            </div>`;
        }
        checkAchievements();
    } else {
        gameSession.combo = 0;
        addXP(2);
        
        const feedbackArea = document.getElementById("feedbackArea");
        if (feedbackArea) {
            feedbackArea.innerHTML = `<div class="result-panel result-wrong">
                <h2>❌ OPS! É ${stateObj.name}</h2>
                <p>📍 ${stateObj.capital} | 🌎 ${stateObj.regiao}</p>
                <p>📖 ${stateObj.curiosidade}</p>
                <p>✨ +2 XP de consolação</p>
                <p style="font-size:0.7rem; margin-top:0.4rem;">⏩ Próxima em 3 segundos...</p>
            </div>`;
        }
    }
    
    const comboCountSpan = document.getElementById("comboCount");
    if (comboCountSpan) comboCountSpan.innerText = gameSession.combo;
    const currentScoreSpan = document.getElementById("currentScore");
    if (currentScoreSpan) currentScoreSpan.innerText = gameSession.score;
    updateGameUIStats();
    saveToLocal();
    startAutoNext();
}

function nextQuestion() {
    clearAutoNext();
    if (gameSession.currentQuestionIndex + 1 < gameSession.shuffledIndices.length) {
        gameSession.currentQuestionIndex++;
        renderCurrentQuestion();
        const progressSpan = document.getElementById("progressIndex");
        if (progressSpan) progressSpan.innerText = gameSession.currentQuestionIndex + 1;
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    if (gameSession.timerInterval) clearInterval(gameSession.timerInterval);
    clearAutoNext();
    
    const accuracy = Math.round((gameSession.score / 270) * 100);
    const minutes = Math.floor(gameSession.secondsElapsed / 60);
    const seconds = gameSession.secondsElapsed % 60;
    const timeFormatted = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    document.getElementById("finalScore").innerText = gameSession.score / 10;
    document.getElementById("finalAccuracy").innerText = accuracy;
    document.getElementById("finalTime").innerText = timeFormatted;
    document.getElementById("finalPatente").innerText = patentes[player.levelIndex];
    document.getElementById("finalMaxCombo").innerText = gameSession.maxCombo;
    
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("finalResultScreen").classList.remove("hidden");
}

function resetGameSession() {
    if (gameSession.timerInterval) clearInterval(gameSession.timerInterval);
    clearAutoNext();
    
    const filteredIndices = getFilteredIndices();
    gameSession.shuffledIndices = shuffleArray([...filteredIndices]);
    gameSession.currentQuestionIndex = 0;
    gameSession.score = 0;
    gameSession.combo = 0;
    gameSession.maxCombo = 0;
    gameSession.answered = false;
    gameSession.secondsElapsed = 0;
    
    const timerSecSpan = document.getElementById("timerSec");
    if (timerSecSpan) timerSecSpan.innerText = "00";
    const progressSpan = document.getElementById("progressIndex");
    if (progressSpan) progressSpan.innerText = "1";
    const totalStatesSpan = document.getElementById("totalStates");
    if (totalStatesSpan) totalStatesSpan.innerText = filteredIndices.length;
    const currentScoreSpan = document.getElementById("currentScore");
    if (currentScoreSpan) currentScoreSpan.innerText = "0";
    const comboCountSpan = document.getElementById("comboCount");
    if (comboCountSpan) comboCountSpan.innerText = "0";
    
    gameSession.timerInterval = setInterval(() => {
        gameSession.secondsElapsed++;
        const timerSpan = document.getElementById("timerSec");
        if (timerSpan) timerSpan.innerText = gameSession.secondsElapsed.toString().padStart(2, '0');
    }, 1000);
    
    updateGameUIStats();
    renderCurrentQuestion();
}

function startGame() {
    const regionSelect = document.getElementById("regionFilter");
    if (regionSelect) {
        gameSession.regionFilter = regionSelect.value;
    }
    resetGameSession();
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("gameScreen").classList.remove("hidden");
    document.getElementById("finalResultScreen").classList.add("hidden");
    document.getElementById("collectionScreen").classList.add("hidden");
}

function goToStartScreen() {
    if (gameSession.timerInterval) clearInterval(gameSession.timerInterval);
    clearAutoNext();
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("collectionScreen").classList.add("hidden");
    document.getElementById("finalResultScreen").classList.add("hidden");
    document.getElementById("startScreen").classList.remove("hidden");
    updateGameUIStats();
    updateCollectionUI();
}

function openCollection() {
    updateCollectionUI();
    document.getElementById("startScreen").classList.add("hidden");
    document.getElementById("collectionScreen").classList.remove("hidden");
    if (gameSession.timerInterval) clearInterval(gameSession.timerInterval);
    clearAutoNext();
    document.getElementById("gameScreen").classList.add("hidden");
    document.getElementById("finalResultScreen").classList.add("hidden");
}

function updateCollectionUI() {
    const container = document.getElementById("collectionList");
    if (!container) return;
    container.innerHTML = "";
    estadosAPI.forEach((est, idx) => {
        const unlocked = player.unlockedStates[idx];
        const cardDiv = document.createElement("div");
        cardDiv.className = `state-card-col ${!unlocked ? 'locked' : ''}`;
        cardDiv.onclick = () => {
            if (unlocked) openStateModal(est, unlocked);
            else alert("🔒 Desbloqueie esta bandeira respondendo corretamente no jogo!");
        };
        cardDiv.innerHTML = `
            <img class="state-flag-mini" src="${est.flag_url}" alt="${est.name}">
            <div><strong>${est.name}</strong></div>
            <div style="font-size:0.65rem;">${est.regiao}</div>
            <div style="font-size:0.6rem; margin-top:2px;">${unlocked ? '✅' : '🔒'}</div>
        `;
        container.appendChild(cardDiv);
    });
    const collectionPatente = document.getElementById("collectionPatente");
    if (collectionPatente) collectionPatente.innerText = patentes[player.levelIndex];
}

function openStateModal(estado, unlocked) {
    document.getElementById("modalStateName").innerText = estado.name;
    document.getElementById("modalFlag").src = estado.flag_url;
    document.getElementById("modalCapital").innerText = estado.capital;
    document.getElementById("modalRegion").innerText = estado.regiao;
    document.getElementById("modalCuriosity").innerText = estado.curiosidade;
    document.getElementById("modalStatus").innerHTML = unlocked ? '✅ Desbloqueado' : '🔒 Bloqueado';
    document.getElementById("stateModal").classList.remove("hidden");
}

function openAchievementsModal() {
    const achievementsList = document.getElementById("achievementsList");
    const achievementsData = [
        { id: "firstHit", title: "Primeiro Acerto", desc: "Acertar sua primeira bandeira", icon: "🎯" },
        { id: "fiveCombo", title: "5 Acertos Seguidos", desc: "Alcançar combo 5x", icon: "🔥" },
        { id: "northComplete", title: "Região Norte", desc: "Desbloquear todos os 7 estados", icon: "🌴" },
        { id: "northeastComplete", title: "Região Nordeste", desc: "Desbloquear todos os 9 estados", icon: "🏖️" },
        { id: "centerwestComplete", title: "Centro-Oeste", desc: "Desbloquear todos os 4 estados", icon: "🏞️" },
        { id: "southeastComplete", title: "Sudeste", desc: "Desbloquear todos os 4 estados", icon: "🏙️" },
        { id: "southComplete", title: "Sul", desc: "Desbloquear todos os 3 estados", icon: "❄️" },
        { id: "allFlags", title: "Coleção Completa", desc: "Desbloquear os 27 estados", icon: "👑" }
    ];
    if (achievementsList) {
        achievementsList.innerHTML = "";
        achievementsData.forEach(ach => {
            const unlocked = player.achievements[ach.id];
            const div = document.createElement("div");
            div.className = `achievement-item ${!unlocked ? 'locked' : ''}`;
            div.innerHTML = `
                <div class="achievement-icon">${ach.icon}</div>
                <div class="achievement-info">
                    <div class="achievement-title">${unlocked ? '✅ ' : '🔒 '}${ach.title}</div>
                    <div class="achievement-desc">${ach.desc}</div>
                </div>
            `;
            achievementsList.appendChild(div);
        });
    }
    document.getElementById("achievementsModal").classList.remove("hidden");
}

function openResetModal() {
    document.getElementById("resetModal").classList.remove("hidden");
}

function closeResetModal() {
    document.getElementById("resetModal").classList.add("hidden");
}

function confirmReset() {
    resetAllProgress();
    closeResetModal();
    goToStartScreen();
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.getElementById("startGameBtn")?.addEventListener("click", startGame);
document.getElementById("openCollectionBtn")?.addEventListener("click", openCollection);
document.getElementById("closeCollectionBtn")?.addEventListener("click", goToStartScreen);
document.getElementById("backToMenuFromGame")?.addEventListener("click", goToStartScreen);
document.getElementById("resetProgressBtn")?.addEventListener("click", openResetModal);
document.getElementById("confirmResetBtn")?.addEventListener("click", confirmReset);
document.getElementById("cancelResetBtn")?.addEventListener("click", closeResetModal);
document.getElementById("closeModalBtn")?.addEventListener("click", () => {
    document.getElementById("stateModal")?.classList.add("hidden");
});
document.getElementById("closeAchievementsBtn")?.addEventListener("click", () => {
    document.getElementById("achievementsModal")?.classList.add("hidden");
});
document.getElementById("openAchievementsBtn")?.addEventListener("click", openAchievementsModal);
document.getElementById("playAgainFinalBtn")?.addEventListener("click", () => {
    document.getElementById("finalResultScreen").classList.add("hidden");
    startGame();
});
document.getElementById("closeFinalBtn")?.addEventListener("click", () => {
    document.getElementById("finalResultScreen").classList.add("hidden");
    openCollection();
});

window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) e.target.classList.add("hidden");
});

// Inicialização
loadFromLocal();
updatePatenteByXP();
updateGameUIStats();
updateCollectionUI();
updateXPBar();
document.getElementById("totalStates").innerText = "27";