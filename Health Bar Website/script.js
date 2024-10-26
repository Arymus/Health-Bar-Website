const healthBar = document.getElementById("healthBar");
const thwack = document.getElementById("thwack");
const hit = document.getElementById("hit");
const dead = document.getElementById("dead");
const healthLabel = document.getElementById("label");

let restart;
let deathMessage;

function youAreDead() {
    checkForDupe();
    if (parseInt(healthBar.value) === 0) {
        dead.currentTime = 0;
        dead.play();

        hit.remove();
        healthBar.remove();
        healthLabel.remove();

        deathMessage = document.createElement("p");
        deathMessage.innerText = "You are dead!";
        document.body.appendChild(deathMessage);

        restart = document.createElement("button");
        restart.innerText = "Restart?";
        restart.addEventListener("click", restartGame);
        document.body.appendChild(restart);
    };
};

function restartGame() {
    healthBar.value = 10;
    checkForDupe();

    document.body.innerHTML = "<h1>JavaScript Health Bar</h1>";
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(healthLabel);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(healthBar);
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(hit);
    
    checkForHitDupe();
};

function checkForHitDupe() {
    hit.removeEventListener("click", hitListener);
    hit.addEventListener("click", hitListener);
};

function hitListener() {
    if (parseInt(healthBar.value) > 0) {
        healthBar.value -= 1;

        thwack.currentTime = 0;
        thwack.play();
    } else {
        youAreDead();
    };
};

function checkForDupe() {
    if (restart) {
        restart.remove();
        restart = null;
    }

    if (deathMessage) {
        deathMessage.remove();
        deathMessage = null;
    }
};

youAreDead();
checkForHitDupe();