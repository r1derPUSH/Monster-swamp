// DOM
const main = document.querySelector('.main');
const mainMenu = document.querySelector('.start-menu');
const go123 = document.querySelector('.threeTwoOneGo');
const monsterEasy = document.querySelector('.monsterEasy');
const monsterMedium = document.querySelector('.monsterMedium');
const monsterHard = document.querySelector('.monsterHard');
const sq1 = document.querySelector('.sq1');
const sq2 = document.querySelector('.sq2');
const sq3 = document.querySelector('.sq3');
const sq4 = document.querySelector('.sq4');
const sq5 = document.querySelector('.sq5');
const sq6 = document.querySelector('.sq6');
const sq7 = document.querySelector('.sq7');
const sq8 = document.querySelector('.sq8');
const sq9 = document.querySelector('.sq9');
const sq10 = document.querySelector('.sq10');
const sq11 = document.querySelector('.sq11');
const sq12 = document.querySelector('.sq12');
const containerOfMonsters = document.querySelector('.containerOfBlocks');
const infoText = document.querySelector('.typewriter');
const level = document.querySelector('.level');
const hp = document.querySelector('.hpBar');
const hpInside = document.querySelector('.hpBarInside');
const bulletHole = document.querySelector('.bulletHole');
const squares = document.getElementById('sq');
const hpMedium = document.querySelector('.hpBarMedium');
const hpMediumInside = document.querySelector('.hpBarInsideMedium');
const hpHard = document.querySelector('.hpBarHard');
const hpHardInside = document.querySelector('.hpBarInsideHard');
const score = document.querySelector('.score');

let scoreCounter = 0;
let levelCounter = 1;
let countOfMonsters = 0;
let isWinning = false;
let counterOfShootsEasyLevel = 0;
let counterOfShootsMediumLevel = 0;
let counterOfShootsHardLevel = 0;
let currentSquare = 0;
let currentSquareMM = 0;
let isLevelOneFinished = false;
let isLevelTwoFinished = false;
let isLevelThreeFinished = false;
let isMediumBossDefeatedLevel2 = false;
let isEasyBossDefeatedLevel2 = false;
let isMediumBossDefeatedLevel3 = false;
let isEasyBossDefeatedLevel3 = false;
let isHardBossDefeatedLevel3 = false;
let currentSquareHM = 0;

function shootAudio () {
    let audio = new Audio('shooting.mp3');
    audio.play();
    audio.volume = 0.03;
}


function wait (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function easyAttack() {
    counterOfShootsEasyLevel++;
    shootAudio();
    console.log(counterOfShootsEasyLevel);
    //level 1
    if (!isLevelOneFinished) {
        if (counterOfShootsEasyLevel == 1) {
            monsterEasy.classList.add('blinkAnimation');
            await wait(200);
            monsterEasy.classList.remove('blinkAnimation');
            hpInside.className = 'hpBarEasy2';
            hp.classList.add('shake');
            await wait(300);
            hp.classList.remove('shake');
    }
        if (counterOfShootsEasyLevel == 2) {
            monsterEasy.classList.add('blinkAnimation');
            await wait(200);
            monsterEasy.classList.remove('blinkAnimation');
            hpInside.className = 'hpBarEasy3';
            hp.classList.add('shake');
            await wait(300);
            hp.classList.remove('shake');
            console.log('dasd')
    }
        if (counterOfShootsEasyLevel == 3) {
            monsterEasy.classList.add('blinkAnimation');
            await wait(200);
            monsterEasy.classList.remove('blinkAnimation');
            hpInside.className = 'hpBarEasy4';
            hp.classList.add('shake');
            await wait(300);
            hp.classList.remove('shake');
            console.log('майже вмер')
    }
        if (counterOfShootsEasyLevel >= 4) {
            monsterEasy.classList.add('blinkAnimation');
            await wait(200);
            monsterEasy.classList.remove('blinkAnimation');
            hpInside.className = 'hpBarEasy5';
            hp.classList.add('shake');
            await wait(300);
            hp.classList.remove('shake');
            console.log('dead')
            await wait(100);
            monsterEasy.classList.add('dyeAnimation');
            hp.classList.add('dyeAnimation');
            await wait(1000);
            monsterEasy.style.display = 'none';
            hp.style.display = 'none';
            levelCounter = 2;
            isLevelOneFinished = true;
            await wait(500);
            counterOfShootsEasyLevel = 0;
            isLevelOneFinished = true;
            levelCounter = 2;
            level2();
        }
    }

    // level 2 
    if (!isLevelTwoFinished && isLevelOneFinished) {
        monsterEasy.style.display = 'block';
        hp.style.display = 'block';
        hpInside.style.display = 'block';
        hpInside.className = 'hpBarInside';
    if (counterOfShootsEasyLevel == 1) {
        monsterEasy.classList.add('blinkAnimation');
        hpInside.className = 'hpBarEasy2';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
        monsterEasy.classList.remove('blinkAnimation');
    }
    if (counterOfShootsEasyLevel == 2) {
        monsterEasy.classList.add('blinkAnimation');
        hpInside.className = 'hpBarEasy3';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
        monsterEasy.classList.remove('blinkAnimation');
    }
    if (counterOfShootsEasyLevel == 3) {
        monsterEasy.classList.add('blinkAnimation');
        hpInside.className = 'hpBarEasy4';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
        monsterEasy.classList.remove('blinkAnimation');
    }
    if (counterOfShootsEasyLevel > 3) {
        console.log('awaiting...')
        await wait(200);
        hpInside.className = 'hpBarEasy5';
        counterOfShootsEasyLevel = 0;
        isEasyBossDefeatedLevel2 = true;
        levelCounter = 3;
        monsterEasy.classList.remove('dyeAnimation');
        hp.classList.remove('dyeAnimation');
        await wait(800);
        monsterEasy.classList.add('dyeAnimation');
        hp.classList.add('dyeAnimation');
        await wait(500);
        monsterEasy.style.display = 'none';
        hp.style.display = 'none';
    }
    
    if (isMediumBossDefeatedLevel2 && isEasyBossDefeatedLevel2) {
            scoreCounter += 50;
            score.textContent = `Score: ${scoreCounter}`;
        }
}
    if (!isLevelThreeFinished && isLevelTwoFinished) {
        monsterEasy.style.display = 'block';
        hp.style.display = 'block';
        hpInside.style.display = 'block';
        hpInside.className = 'hpBarInside';
    if (counterOfShootsEasyLevel == 1) {
        monsterEasy.classList.add('blinkAnimation');
        hpInside.className = 'hpBarEasy2';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
        monsterEasy.classList.remove('blinkAnimation');
    }
    if (counterOfShootsEasyLevel == 2) {
        monsterEasy.classList.add('blinkAnimation');
        hpInside.className = 'hpBarEasy3';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
        monsterEasy.classList.remove('blinkAnimation');
    }
    if (counterOfShootsEasyLevel == 3) {
        monsterEasy.classList.add('blinkAnimation');
        hpInside.className = 'hpBarEasy4';
        hp.classList.add('shake');
        await wait(300);
        hp.classList.remove('shake');
        monsterEasy.classList.remove('blinkAnimation');
    }
    if (counterOfShootsEasyLevel > 3) {
        console.log('awaiting...')
        await wait(200);
        hpInside.className = 'hpBarEasy5';
        counterOfShootsEasyLevel = 0;
        isEasyBossDefeatedLevel2 = true;
        levelCounter = 3;
        monsterEasy.classList.remove('dyeAnimation');
        hp.classList.remove('dyeAnimation');
        await wait(800);
        monsterEasy.classList.add('dyeAnimation');
        hp.classList.add('dyeAnimation');
        await wait(500);
        monsterEasy.style.display = 'none';
        hp.style.display = 'none';
        isEasyBossDefeatedLevel3 = true;
    }
    }
}

async function mediumAttack () {
    // level 2 
     console.log(counterOfShootsMediumLevel);
    if (!isLevelTwoFinished) {
        counterOfShootsMediumLevel++;
        shootAudio();
        monsterMedium.style.display = 'block';
        hpMedium.style.display = 'block';
        hpMediumInside.style.display = 'block';
        hpMediumInside.style.opacity = '1';
    if (counterOfShootsMediumLevel == 1) {
        console.log(counterOfShootsMediumLevel);
        monsterMedium.classList.add('blinkAnimation');
        await wait(100);
        monsterMedium.classList.remove('blinkAnimation');
        hpMediumInside.className = 'hpBarInsideMedium';
        hpMedium.classList.add('shake');
        await wait(100);
        hpMedium.classList.remove('shake');
    }
    if (counterOfShootsMediumLevel == 2) {
        console.log(counterOfShootsMediumLevel);
        monsterMedium.classList.add('blinkAnimation');
        await wait(100);
        monsterMedium.classList.remove('blinkAnimation');
        hpMediumInside.className = 'hpBarMedium2';
        hpMedium.classList.add('shake');
        await wait(100);
        hpMedium.classList.remove('shake');
    }
    if (counterOfShootsMediumLevel == 3) {
        console.log(counterOfShootsMediumLevel);
        monsterMedium.classList.add('blinkAnimation');
        await wait(100);
        monsterMedium.classList.remove('blinkAnimation');
        hpMediumInside.className = 'hpBarMedium3';
        hpMedium.classList.add('shake');
        await wait(100);
        hpMedium.classList.remove('shake');
    }
    if (counterOfShootsMediumLevel == 4) {
        monsterMedium.classList.add('blinkAnimation');
        await wait(100);
        monsterMedium.classList.remove('blinkAnimation');
        hpMediumInside.className = 'hpBarMedium4';
        hpMedium.classList.add('shake');
        await wait(100);
        hpMedium.classList.remove('shake');
    }
    if (counterOfShootsMediumLevel == 5) {
        monsterMedium.classList.add('blinkAnimation');
        await wait(100);
        monsterMedium.classList.remove('blinkAnimation');
        hpMediumInside.className = 'hpBarMedium5';
        hpMedium.classList.add('shake');
        await wait(100);
        hpMedium.classList.remove('shake');
    }
    if (counterOfShootsMediumLevel == 6) {
        monsterMedium.classList.add('blinkAnimation');
        await wait(100);
        monsterMedium.classList.remove('blinkAnimation');
        hpMediumInside.className = 'hpBarMedium6';
        hpMedium.classList.add('shake');
        await wait(100);
        hpMedium.classList.remove('shake');
    }
    if (counterOfShootsMediumLevel == 7) {
        monsterMedium.classList.add('blinkAnimation');
        await wait(100);
        monsterMedium.classList.remove('blinkAnimation');
        hpMediumInside.className = 'hpBarMedium7';
        hpMedium.classList.add('shake');
        await wait(100);
        hpMedium.classList.remove('shake');
    }
    if (counterOfShootsMediumLevel == 8) {
        monsterMedium.classList.add('blinkAnimation');
        await wait(100);
        monsterMedium.classList.remove('blinkAnimation');
        hpMediumInside.className = 'hpBarMedium8';
        hpMedium.classList.add('shake');
        await wait(100);
        hpMedium.classList.remove('shake');
        isMediumBossDefeatedLevel2 = true;
    }
    console.log(isEasyBossDefeatedLevel2);
    console.log(isMediumBossDefeatedLevel2);
    if (counterOfShootsMediumLevel >= 9) {
        if (isMediumBossDefeatedLevel2 && isEasyBossDefeatedLevel2) {
            monsterMedium.classList.remove('dyeAnimation');
            hpMedium.classList.remove('dyeAnimation');
            await wait (500);
            console.log('worked out finish func')
            isLevelTwoFinished = true;
            counterOfShootsMediumLevel = 0;
            score.textContent = `Score: ${scoreCounter += 50}`;
            counterOfShootsMediumLevel = 0;
            monsterMedium.classList.add('dyeAnimation');
            hpMedium.classList.add('dyeAnimation');
            await wait(1500);
            monsterMedium.classList.remove('dyeAnimation');
            hpMedium.classList.remove('dyeAnimation');
            monsterMedium.style.display = 'none';
            hpMedium.style.display = 'none';
            isMediumBossDefeatedLevel2 = true;
            scoreCounter += 50;
            score.textContent = `Score: ${scoreCounter}`;
            level3();
        }
    }
}


    // level 3 medium
    if (!isLevelThreeFinished && isLevelTwoFinished) {
        counterOfShootsMediumLevel++;
        shootAudio();
        if (counterOfShootsMediumLevel == 1) {
            console.log(counterOfShootsMediumLevel);
            monsterMedium.classList.add('blinkAnimation');
            await wait(100);
            monsterMedium.classList.remove('blinkAnimation');
            hpMediumInside.className = 'hpBarInsideMedium';
            hpMedium.classList.add('shake');
            await wait(100);
            hpMedium.classList.remove('shake');
        }
        if (counterOfShootsMediumLevel == 2) {
            console.log(counterOfShootsMediumLevel);
            monsterMedium.classList.add('blinkAnimation');
            await wait(100);
            monsterMedium.classList.remove('blinkAnimation');
            hpMediumInside.className = 'hpBarMedium2';
            hpMedium.classList.add('shake');
            await wait(100);
            hpMedium.classList.remove('shake');
        }
        if (counterOfShootsMediumLevel == 4) {
            console.log(counterOfShootsMediumLevel);
            monsterMedium.classList.add('blinkAnimation');
            await wait(100);
            monsterMedium.classList.remove('blinkAnimation');
            hpMediumInside.className = 'hpBarMedium3';
            hpMedium.classList.add('shake');
            await wait(100);
            hpMedium.classList.remove('shake');
        }
        if (counterOfShootsMediumLevel == 5) {
            console.log(counterOfShootsMediumLevel);
            monsterMedium.classList.add('blinkAnimation');
            await wait(100);
            monsterMedium.classList.remove('blinkAnimation');
            hpMediumInside.className = 'hpBarMedium4';
            hpMedium.classList.add('shake');
            await wait(100);
            hpMedium.classList.remove('shake');
        }
        if (counterOfShootsMediumLevel == 6) {
            console.log(counterOfShootsMediumLevel);
            monsterMedium.classList.add('blinkAnimation');
            await wait(100);
            monsterMedium.classList.remove('blinkAnimation');
            hpMediumInside.className = 'hpBarMedium5';
            hpMedium.classList.add('shake');
            await wait(100);
            hpMedium.classList.remove('shake');
        }
        if (counterOfShootsMediumLevel == 7) {
            console.log(counterOfShootsMediumLevel);
            monsterMedium.classList.add('blinkAnimation');
            await wait(100);
            monsterMedium.classList.remove('blinkAnimation');
            hpMediumInside.className = 'hpBarMedium6';
            hpMedium.classList.add('shake');
            await wait(100);
            hpMedium.classList.remove('shake');
        }
        if (counterOfShootsMediumLevel == 8) {
            console.log(counterOfShootsMediumLevel);
            monsterMedium.classList.add('blinkAnimation');
            await wait(100);
            monsterMedium.classList.remove('blinkAnimation');
            hpMediumInside.className = 'hpBarMedium7';
            hpMedium.classList.add('shake');
            await wait(100);
            hpMedium.classList.remove('shake');
            isMediumBossDefeatedLevel3 = true;
        }
        if (isMediumBossDefeatedLevel3 && isEasyBossDefeatedLevel3 ) {
            monsterMedium.classList.remove('dyeAnimation');
            hpMedium.classList.remove('dyeAnimation');
            await wait (500);
            isLevelThreeFinished = true;
            score.textContent = `Score: ${scoreCounter += 50}`;
            counterOfShootsMediumLevel = 0;
            monsterMedium.classList.add('dyeAnimation');
            hpMedium.classList.add('dyeAnimation');
            await wait(1500);
            monsterMedium.classList.remove('dyeAnimation');
            hpMedium.classList.remove('dyeAnimation');
            monsterMedium.style.display = 'none';
            hpMedium.style.display = 'none';
            isMediumBossDefeatedLevel2 = true;
            scoreCounter += 50;
            score.textContent = `Score: ${scoreCounter}`;
        }
    }

    
}

function level3() {
    level.textContent = `Level: 3 🏹`;
    randomSpawnForThirdLevel();
}

function level2() {
    level.textContent = `Level: ${levelCounter} 🏹`;
    randomSpawnForSecondLevel();
}

function randomSpawnForThirdLevel () {
    countOfMonsters = 2;
    alert('Game is finished for now! 😯 To be continued soon...')
    const randomLocation = Math.floor(Math.random() * (12 - 1) + 1);
    const randomLocation2 = Math.floor(Math.random() * (12 - 1) + 1);
    if (randomLocation == randomLocation2) {
            currentSquare = 9;
            currentSquareMM = 6;
            currentSquareHM = 12;
            sq9.appendChild(hp);
            sq6.appendChild(hpMedium);
            sq12.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq9.appendChild(monsterEasy);
            sq6.appendChild(monsterMedium);
            sq12.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation2 == 1) {
            currentSquare = 4;
            currentSquareMM = 2;
            currentSquareHM = 9;
            sq4.appendChild(hp);
            sq2.appendChild(hpMedium);
            sq9.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq4.appendChild(monsterEasy);
            sq2.appendChild(monsterMedium);
            sq9.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 2) {
            currentSquare = 1;
            currentSquareMM = 5;
            currentSquareHM = 9;
            sq1.appendChild(hp);
            sq5.appendChild(hpMedium);
            sq9.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq1.appendChild(monsterEasy);
            sq5.appendChild(monsterMedium);
            sq9.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 3) {
            currentSquare = 2;
            currentSquareMM = 8;
            currentSquareHM = 5;
            sq2.appendChild(hp);
            sq8.appendChild(hpMedium);
            sq5.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq2.appendChild(monsterEasy);
            sq8.appendChild(monsterMedium);
            sq5.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 4) {
            currentSquare = 2;
            currentSquareMM = 9;
            currentSquareHM = 4;
            sq2.appendChild(hp);
            sq9.appendChild(hpMedium);
            sq4.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq2.appendChild(monsterEasy);
            sq9.appendChild(monsterMedium);
            sq4.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 5) {
            currentSquare = 1;
            currentSquareMM = 9;
            currentSquareHM = 6;
            sq1.appendChild(hp);
            sq9.appendChild(hpMedium);
            sq6.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq1.appendChild(monsterEasy);
            sq9.appendChild(monsterMedium);
            sq6.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 6) {
            currentSquare = 2;
            currentSquareMM = 7;
            currentSquareHM = 8;
            sq2.appendChild(hp);
            sq7.appendChild(hpMedium);
            sq8.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq2.appendChild(monsterEasy);
            sq7.appendChild(monsterMedium);
            sq8.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 7) {
            currentSquare = 2;
            currentSquareMM = 1;
            currentSquareHM = 6;
            sq2.appendChild(hp);
            sq1.appendChild(hpMedium);
            sq6.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq2.appendChild(monsterEasy);
            sq1.appendChild(monsterMedium);
            sq6.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 8) {
            currentSquare = 2;
            currentSquareMM = 12;
            currentSquareHM = 9;
            sq2.appendChild(hp);
            sq12.appendChild(hpMedium);
            sq9.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq2.appendChild(monsterEasy);
            sq12.appendChild(monsterMedium);
            sq9.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 9) {
            currentSquare = 2;
            currentSquareMM = 5;
            currentSquareHM = 4;
            sq2.appendChild(hp);
            sq5.appendChild(hpMedium);
            sq4.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq2.appendChild(monsterEasy);
            sq5.appendChild(monsterMedium);
            sq4.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 10) {
            currentSquare = 1;
            currentSquareMM = 9;
            currentSquareHM = 5;
            sq1.appendChild(hp);
            sq9.appendChild(hpMedium);
            sq5.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq1.appendChild(monsterEasy);
            sq9.appendChild(monsterMedium);
            sq5.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 11) {
            currentSquare = 2;
            currentSquareMM = 6;
            currentSquareHM = 8;
            sq2.appendChild(hp);
            sq6.appendChild(hpMedium);
            sq8.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq2.appendChild(monsterEasy);
            sq6.appendChild(monsterMedium);
            sq8.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
        if (randomLocation == 12) {
            currentSquare = 12;
            currentSquareMM = 7;
            currentSquareHM = 9;
            sq12.appendChild(hp);
            sq7.appendChild(hpMedium);
            sq9.appendChild(hpHard);
            hp.style.display = 'block';
            hpMedium.style.display = 'block';
            hpHard.style.display = 'block';
            sq12.appendChild(monsterEasy);
            sq7.appendChild(monsterMedium);
            sq9.appendChild(monsterHard);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
            monsterHard.style.display = 'block';
        }
}

function randomSpawnForSecondLevel () {
        countOfMonsters = 2;
        const randomLocation = Math.floor(Math.random() * (12 - 1) + 1);
        const randomLocation2 = Math.floor(Math.random() * (12 - 1) + 1);
        monsterMedium.style.display = 'block';
        hpMedium.style.display = 'block';
        hpMediumInside.style.display = 'block';
        hpMediumInside.style.opacity = '1';
        hpInside.className = 'hpBarInside';
        if (randomLocation == randomLocation2) {
            currentSquare = 9;
            currentSquareMM = 6;
            sq9.appendChild(hp);
            sq6.appendChild(hpMedium);
            hp.style.display = 'block';
            sq9.appendChild(monsterEasy);
            sq6.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation2 == 1) {
            currentSquare = 5;
            currentSquareMM = 1;
            sq5.appendChild(hp);
            sq1.appendChild(hpMedium);
            hp.style.display = 'block';
            sq5.appendChild(monsterEasy);
            sq1.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 2) {
            currentSquare = 6;
            currentSquareMM = 2;
            sq6.appendChild(hp);
            sq2.appendChild(hpMedium);
            hp.style.display = 'block';
            sq6.appendChild(monsterEasy);
            sq2.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 3) {
            currentSquare = 11;
            currentSquareMM = 3;
            sq11.appendChild(hp);
            sq3.appendChild(hpMedium);
            hp.style.display = 'block';
            sq11.appendChild(monsterEasy);
            sq3.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 4) {
            currentSquare = 8;
            currentSquareMM = 4;
            sq8.appendChild(hp);
            sq4.appendChild(hpMedium);
            hp.style.display = 'block';
            sq8.appendChild(monsterEasy);
            sq4.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 5) {
            currentSquare = 2;
            currentSquareMM = 5;
            sq2.appendChild(hp);
            sq5.appendChild(hpMedium);
            hp.style.display = 'block';
            sq2.appendChild(monsterEasy);
            sq5.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 6) {
            currentSquare = 12;
            currentSquareMM = 6;
            sq12.appendChild(hp);
            sq6.appendChild(hpMedium);
            hp.style.display = 'block';
            sq12.appendChild(monsterEasy);
            sq6.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 7) {
            currentSquare = 4;
            currentSquareMM = 7;
            sq4.appendChild(hp);
            sq7.appendChild(hpMedium);
            hp.style.display = 'block';
            sq4.appendChild(monsterEasy);
            sq7.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 8) {
            currentSquare = 3;
            currentSquareMM = 8;
            sq3.appendChild(hp);
            sq8.appendChild(hpMedium);
            hp.style.display = 'block';
            sq3.appendChild(monsterEasy);
            sq8.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 9) {
            currentSquare = 12;
            currentSquareMM = 9;
            sq12.appendChild(hp);
            sq9.appendChild(hpMedium);
            hp.style.display = 'block';
            sq12.appendChild(monsterEasy);
            sq9.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 10) {
            currentSquare = 4;
            currentSquareMM = 10;
            sq4.appendChild(hp);
            sq10.appendChild(hpMedium);
            hp.style.display = 'block';
            sq4.appendChild(monsterEasy);
            sq10.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 11) {
            currentSquare = 3;
            currentSquareMM = 11;
            sq3.appendChild(hp);
            sq11.appendChild(hpMedium);
            hp.style.display = 'block';
            sq3.appendChild(monsterEasy);
            sq11.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
        if (randomLocation == 12) {
            currentSquare = 4;
            currentSquareMM = 12;
            sq4.appendChild(hp);
            sq12.appendChild(hpMedium);
            hp.style.display = 'block';
            sq4.appendChild(monsterEasy);
            sq12.appendChild(monsterMedium);
            monsterEasy.style.display = 'block';
            monsterMedium.style.display = 'block';
        }
    }

async function runGame() {
    containerOfMonsters.style.display = 'block';
    if (levelCounter == 1) {
        countOfMonsters = 1;
        const randomLocation = Math.floor(Math.random() * (12 - 1) + 1);
        if (randomLocation == 1) {
            currentSquare = 1;
            sq1.appendChild(hp);
            hp.style.display = 'block';
            sq1.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 2) {
            currentSquare = 2;
            sq2.appendChild(hp);
            hp.style.display = 'block';
            sq2.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 3) {
            currentSquare = 3;
            sq3.appendChild(hp);
            hp.style.display = 'block';
            sq3.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 4) {
            currentSquare = 4;
            sq4.appendChild(hp);
            hp.style.display = 'block';
            sq4.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 5) {
            currentSquare = 5;
            sq5.appendChild(hp);
            hp.style.display = 'block';
            sq5.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 6) {
            currentSquare = 6;
            sq6.appendChild(hp);
            hp.style.display = 'block';
            sq6.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 7) {
            currentSquare = 7;
            sq7.appendChild(hp);
            hp.style.display = 'block';
            sq7.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 8) {
            currentSquare = 8;
            sq8.appendChild(hp);
            hp.style.display = 'block';
            sq8.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 9) {
            currentSquare = 9;
            sq9.appendChild(hp);
            hp.style.display = 'block';
            sq9.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 10) {
            currentSquare = 10;
            sq10.appendChild(hp);
            hp.style.display = 'block';
            sq10.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 11) {
            currentSquare = 11;
            sq11.appendChild(hp);
            hp.style.display = 'block';
            sq11.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
        if (randomLocation == 12) {
            currentSquare = 12;
            sq12.appendChild(hp);
            hp.style.display = 'block';
            sq12.appendChild(monsterEasy);
            monsterEasy.style.display = 'block';
        }
    }
}

async function startCounter() {
    console.log('Function startCounter started');
    go123.style.fontSize = '4rem'
    go123.textContent = '3';
    await wait(1000);
    go123.textContent = '2';
    await wait(1000);
    go123.textContent = '1';
    await wait(1000);
    go123.textContent = 'Go!';
    await wait(500);
    go123.textContent = '';
    console.log('Function startCounter ended');
    runGame();
}

async function start() {
    infoText.textContent = 'Game Started!';
    level.textContent = `Level ${levelCounter} 🏹`;
    mainMenu.className = 'moveMenu';
    console.log('Function worked out!');
    await wait(1000);
    mainMenu.style.display = 'none';
    await startCounter();
}