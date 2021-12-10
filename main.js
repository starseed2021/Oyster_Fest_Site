const mainSection = document.getElementById("main-section");

// h1
const oysterHeading = document.createElement("h1");
oysterHeading.textContent = "🦪 Welcome to Oyster Fest! 🦪 ";
// Places images near or on the sides of the text?

// h2
const introText = document.createElement("h2");
introText.textContent = "Whoever consumes the most oysters goes home with the grand prize!";

// h2
const secondHeading = document.createElement("p");
secondHeading.textContent = "Fun Facts About Oysters:"

// Need more thorough explaination of this logic
// list of fact-strings
const oysterFacts = [
   "Humans have be cultivating and eating oysters for thousands of years",
   "Oysters change their gender once or more during their lifetime",
   "Oysters are rich in vitamins (B1, B3, B12, & D) and nutrients (copper, selenium, magnesium, phosophorous, & zinc)",
   "Similar to wine 🍷, oysters have a variety of flavor profiles",
   "A single oyster can filter 30-50 gallons of water a day",
];

const oysterList = document.createElement("ol");
const oysterElems = [];

for (const fact of oysterFacts) {
    let temp = document.createElement("li");
    temp.textContent = fact;
    oysterElems.push(temp);
};

for (const elem of oysterElems) {
    oysterList.appendChild(elem);
};

// Oyster Count
const state = {
    oysterCount: 0
};

// addOyster Event Handler

const addOyster = (event) => {
    console.log("in addOyster", event);
    const newOyster = document.createElement("span");
    const oysterContainer = document.getElementById("oysterContainer");
    newOyster.textContent = "🦪";
    oysterContainer.appendChild(newOyster);

    // Oyster Count Behavior
    state.oysterCount += 1;
    const oysterCountContainer = document.getElementById("oysterCount");
    oysterCountContainer.textContent = `Oyster Count: ${state.oysterCount}`;
};

// Dark Mode/Light Mode
const darkMode = () => {
    const darkModeButton = document.body;
    darkModeButton.classList.toggle("dark-mode");
};


const registerEventHandlers = (event) => {
    console.log("in registerEventHandlers:", event);
    const oysterButton = document.getElementById("addOysterButton");
    oysterButton.addEventListener("click", addOyster);
    const switchMode = document.getElementById("switchButton");
    switchMode.addEventListener("click", darkMode);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);




console.log("oysterHeading");
console.log("introText");
console.log("secondHeading");
console.log("oysterList");


mainSection.appendChild(oysterHeading);
mainSection.appendChild(introText);
mainSection.appendChild(secondHeading);
mainSection.appendChild(oysterList);
