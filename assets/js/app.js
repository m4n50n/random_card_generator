/* - Icons and class - */
const MainIconsDefinition = {
    "♦": "diamond",
    "♥": "heart",
    "♠": "spade",
    "♣": "club"
}

/* - Card numbers - */
const MainNumbersDefinition = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

/* - DOM elements - */
const MainCard = document.querySelector(".main-card");
const MainIcons = document.querySelectorAll(".main-icon");
const MainNumber = document.querySelector(".main-number");


/* - Functions - */
const SetRandomCard = () => {
    const RandomIcon = Object.keys(MainIconsDefinition)[Math.floor(Math.random() * 4)];
    const IconClass = MainIconsDefinition[RandomIcon];

    for (DomIcon of MainIcons) {
        DomIcon.innerHTML = `<span class="${IconClass}">${RandomIcon}</span>`;
    }

    MainNumber.innerHTML = MainNumbersDefinition[Math.floor(Math.random() * MainNumbersDefinition.length)];
}

const SetTimer = () => window.setInterval(SetRandomCard, 10000); // Generate card every 10 seconds

const Resizecard = () => {
    const NewWidth = parseInt(document.querySelector("#new-width").value);
    const NewHeight = parseInt(document.querySelector("#new-height").value);
    
    if (!isNaN(NewWidth) && NewWidth > 0 && !isNaN(NewHeight) && NewHeight > 0) { 
        MainCard.style.width = NewWidth + "px";
        MainCard.style.height = NewHeight + "px";
    }
}

/* - DOM loaded - */
window.onload = () => {
    SetRandomCard();
    SetTimer();
} 
