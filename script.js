function toCapitalize(word) {
  let firstChar = word.slice(0, 1).toUpperCase();

  let lastPartFromWord = word.slice(1);

  return firstChar + lastPartFromWord;
}

// Genarating Letters & Chars & Numbers

let myLetters = "abcdefghijklmnopqrstuvwxyz";

let myChars = "!@#$%.*?+-_:|,'\"/\\[]()<>";

let myNumber = "1234567890";

// Convert The Letters & Chars & Numbers To Array

let lettersArray = Array.from(myLetters);

let charsArray = Array.from(myChars);

let numbersArray = Array.from(myNumber);

// Geting The Div From HTML File And Add To Varibls

let lettersRow = document.querySelector(".letters-upper-row");

let charsRow = document.querySelector(".chars-row");

let numbersRow = document.querySelector(".numbers-row");

let lettersKeyboard = document.querySelector(".letters-row span");

// Add Letters To Div

lettersArray.forEach((e) => {
  let span = document.createElement("span");

  let spanContent = document.createTextNode(e);

  span.appendChild(spanContent);

  span.classList.add("letter-span", "letter-span-upper");

  lettersRow.appendChild(span);
});

// Add Chars To Div

charsArray.forEach((e) => {
  let span = document.createElement("span");

  let spanContent = document.createTextNode(e);

  span.appendChild(spanContent);

  span.classList.add("letter-span", "letter-span-chars");

  charsRow.appendChild(span);
});

// Add Numbers To Div

numbersArray.forEach((e) => {
  let span = document.createElement("span");

  let spanContent = document.createTextNode(e);

  span.appendChild(spanContent);

  span.classList.add("letter-span", "letter-span-number");

  numbersRow.appendChild(span);
});

const words = new Object();

words.programming_Language = [
  "Html",

  "CSS",

  "Java Script",

  "PHP",

  "Python",

  "SQL",

  "C#",

  "C++",

  "C",

  "Java",

  "Swift",

  "Kotlin",

  "Go",

  "Ruby",

  "Rust",

  "Type Script",

  "Dart",

  "Perl",

  "Objective-C",
];
words.Popular_Brands = [
  "Chips",

  "KFC",

  "Pizza Hut",

  "Coca Cola",

  "Mc-Donald's",

  "Nestle",

  "Pepsi Cola",

  "Star bucks",

  "Heinz",
];
words.Arabic_Country = [
  "Algeria",

  "Bahrain",

  "Kuwait",

  "Egypt",

  "Iraq",

  "Jordan",

  "Lebanon",

  "Libya",

  "Morocco",

  "Oman",

  "Palestine",

  "Qatar",

  "Saudi Arabia",

  "Sudan",

  "Syria",

  "Tunisia",

  "United Arab Emirates",

  "Yemen",

  "Somalia",
];
words.series = ["Bab Alhara", "Maraya"];
words.Video_Games = [
  "Grand Theft Auto V",

  "Grand Theft Auto VI",

  "Grand Theft Auto IV",

  "Grand Theft Auto San Andrias",

  "Grand Theft Auto VICE City",

  "Counter Strike Go",

  "Counter Strike 1.6",

  "Counter Strike 2",

  "PUBG Mobile",

  "PUBG Steam",

  "Rocket League",

  "fortnite",

  "Pes 2020",

  "The Legend of Zelda",

  "Minecraft",

  "Red Dead Redemption 2",

  "Call of Duty: Warzone",

  "Among Us",

  "Apex Legends",

  "Cyberpunk 2077",

  "The Witcher 3",

  "FIFA 22",

  "Valorant",

  "Assassins Creed Valhalla",

  "Genshin Impact",

  "Dota 2",

  "Over watch 2",
];
words.phones = [
  "Nokia",

  "Samsung",

  "Iphone",

  "HTC",

  "Redmi",

  "Nothing",

  "Huawei",

  "Honer",

  "Black Berry",

  "Google Pixle",

  "One Plus",

  "Sony",

  "LG",

  "Xiaomi",

  "Motorola",

  "TCL",

  "ZTE",

  "Vivo",

  "Realme",

  "Asus Rog Phone",

  "Infinix",

  "Sony Ericsson",

  "Alcatel",

  "TCL",
];

words.fruits = [
  "apple",

  "banana",

  "cherry",

  "date",

  "elderberry",

  "fig",

  "grape",

  "honeydew",

  "kiwi",

  "lemon",

  "mango",

  "orange",

  "papaya",

  "quince",

  "raspberry",

  "strawberry",

  "tangerine",

  "watermelon",
];

words.soft_Drinks = [
  "Coca-Cola",

  "Pepsi",

  "Sprite",

  "Fanta",

  "Mountain Dew",

  "Dr Pepper",

  "7UP",

  "Root Beer",

  "Ginger Ale",

  "Lemonade",

  "Iced Tea",

  "Orange Crush",

  "Cream Soda",

  "Cola",

  "Tonic Water",

  "Club Soda",

  "Lime Soda",

  "Cherry Cola",

  "Grape Soda",

  "Birch Beer",

  "Sarsaparilla",

  "Seltzer Water",
];
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

let objectKeys;

let randomPropOfObject;

let randomValueFromObjectProp;

let randomWordFromObjectPropValue;

let randomGuessWord;

let randomGuessWordArray;

let wordFrom;

let guessWordDiv;

let nativeRandomWord;

let nativeGuessWord;

function randomizingValues() {
  // objectKeys = Object.keys(words).reverse();

  objectKeys = Object.keys(words);

  randomPropOfObject = Math.floor(Math.random() * objectKeys.length);

  randomValueFromObjectProp = words[objectKeys[randomPropOfObject]];

  randomWordFromObjectPropValue = Math.floor(
    Math.random() * randomValueFromObjectProp.length
  );

  randomGuessWord =
    words[objectKeys[randomPropOfObject]][randomWordFromObjectPropValue];

  randomGuessWordArray = [...randomGuessWord];

  wordFrom = document.querySelector(".game-info .word-type span");

  wordFrom.innerHTML = toCapitalize(objectKeys[randomPropOfObject]);

  guessWordDiv = document.querySelectorAll(".guess-word");

  let nativeArrayWord = [];

  Array.from(randomGuessWord).forEach((e) => {
    nativeArrayWord.push(e === " " ? "" : e);
  });

  nativeRandomWord = nativeArrayWord.join("").toLowerCase();
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

let continueBtn = document.getElementById("continue-btn");

let startBtn = document.createElement("button");

let changeNameBtn = document.getElementById("change-name");

let resetNameBtn = document.getElementById("reset-name");

let limitTimes;

let limitTimesInput = document.getElementById("limit-times-input");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

let defaultName = "@player_99";

let selectWordNumbers = document.getElementById("select-word-numbers");

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

let inputName = document.getElementById("name");

inputName.className = "mainName";

inputName.placeholder = "Your Name";

inputName.value = defaultName;

inputName.maxLength = 15;

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// Name Functions

changeNameBtn.addEventListener("click", () => {
  inputName.value = "";

  inputName.focus();

  inputName.oninput = () => localStorage.setItem("mainName", inputName.value);
});

resetNameBtn.addEventListener("click", () => {
  inputName.value = defaultName;

  localStorage.setItem("mainName", inputName.value);
});

inputName.onfocus = () => inputName.classList.add("no-event");

window.addEventListener("load", () => {
  if (localStorage.getItem("mainName") === undefined) {
    localStorage.setItem("mainName", defaultName);
  } else {
  }
  if (localStorage.getItem("isDark") === "true") {
    document.getElementById("change-mode").checked = true;
    let headTag = document.getElementsByTagName("head")[0];

    let styleTag = document.createElement("style");

    headTag.appendChild(styleTag);

    styleTag.innerHTML = `
    :root {
      --black-color: white;
      --white-color:black;
    }
    `;
  }
  if (localStorage.getItem("mainName").length > 0) {
    inputName.value = localStorage.getItem("mainName");
  }
  startPopup();

  document.getElementsByClassName("container")[0].style.opacity = 1;
});

document.getElementsByClassName("container")[0].style.opacity = 0.2;

let wrongTimes = 0;

let numberOfMistakeSpan = document.getElementById("wrong-times");

let successSound = document.getElementById("success");

let errorSound = document.getElementById("error");

let gameOver = document.getElementById("game-over");

let nextWord = document.querySelector(".words");

let guessSpansArray = document.getElementsByClassName("guess-span");

let guessBasicSpansArray = document.getElementsByClassName("basic-span");

let submitWord = document.getElementById("submit-btn");

let winStatus = false;

let correctSpans = document.querySelectorAll(".correct-word-span");

let wordLength;

let clickedTarget;

function clickerWords() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("letter-span")) {
      e.target.classList.add("clicked");

      clickedTarget = e.target.innerText.toLowerCase();

      // Set Status Value

      let theStatus = false;

      // Checking Guess Word And Random Word

      let theNeededLetter = e.target.innerText.toLowerCase();

      [...randomGuessWord].forEach(function (letter, index) {
        let arrayLetter = letter.toLowerCase();

        if (theNeededLetter === arrayLetter) {
          guessSpansArray[index].innerHTML = theNeededLetter;

          theStatus = true;

          successSound.play();
        }
      });

      if (theStatus !== true) {
        wrongTimes++;

        document.querySelector(".draw-row").classList.add(`show-${wrongTimes}`);

        errorSound.play();
      }

      let nativeGuessArray = [];

      [...guessSpansArray].forEach((span) => {
        nativeGuessArray.push(span.innerHTML !== " " ? span.innerHTML : " ");
      });

      nativeGuessWord = nativeGuessArray.join("").toLowerCase();
      ifGameOver();

      numberOfMistakeSpan.innerHTML = `Number Of Mistake Is : <span>'${wrongTimes} / 10'</span>`;
    }

    let basicGuessArray = document.querySelectorAll("basic-span");

    let emptySpansArray = [];

    [...guessBasicSpansArray].forEach((span) => {
      span.innerHTML === "" ? emptySpansArray.push(span) : false;
    });
    if (emptySpansArray.length === 0) {
      submitWord.click();
    }
  });
}
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/,

function correctWord() {
  let correctWordDiv = document.querySelector(".words-container");

  let correctWordSpan = document.createElement("span");

  correctWordSpan.id = "correct-word-span";

  correctWordSpan.className = "correct-word-span";

  correctWordSpan.textContent = randomGuessWord;

  correctWordDiv.appendChild(correctWordSpan);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

let wordTypeArray = [];

function DeclareGuessSpans() {
  Array.from(randomGuessWord).forEach(function (letter, index) {
    let guessWordDiv = document.querySelector(".guess-word");

    let guessSpans = document.createElement("span");

    guessSpans.classList.add("guess-span");
    guessSpans.classList.add("basic-span");

    guessWordDiv.appendChild(guessSpans);

    if (letter === " ") {
      guessSpans.classList.add("space-span");
      guessSpans.classList.remove("basic-span");

      letter.innerHTML = " 1";
    }
  });
  littersLength = document.createElement("div");

  littersLength.classList.add("word-length");

  littersLength.innerHTML = randomGuessWord.length;

  document.querySelector(".game-draw").appendChild(littersLength);

  wordTypeArray.push(objectKeys[randomPropOfObject]);
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

function submitFunction() {
  submitWord.addEventListener("click", (click) => {
    if (nativeGuessWord === nativeRandomWord) {
      correctWord();

      submitWord.classList.add("no-event");

      continueBtn.style.pointerEvents = "all";

      document
        .querySelectorAll(".letter-span")
        .forEach((e) => e.classList.remove("clicked"));
      [...document.querySelector(".guess-word").childNodes].forEach((e) => {
        e.remove();

        littersLength.remove();

        submitWord.style.pointerEvents = "none";

        continueBtn.style.pointerEvents = "all";

        if (
          document.querySelectorAll(".correct-word-span").length === limitTimes
        ) {
          youWinPopup();
        }
      });
    }
    continueBtn.click();
  });
}

//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/

function ifGameOver() {
  if (document.getElementById("draw-row-div").classList.contains("show-10")) {
    // Add No Event Class To All Spans

    Array.from(lettersRow).forEach((span) => span.classList.add("no-event"));
    document.body.style.pointerEvents = "none";

    setTimeout(() => {
      gameOverPopup();

      gameOver.play();
    }, 1000);
  }
}

function operationFunction() {
  randomizingValues();

  DeclareGuessSpans();
}

continueBtn.onclick = () => {
  if (document.querySelectorAll(".correct-word-span").length <= limitTimes) {
    operationFunction();

    submitWord.style.pointerEvents = "all";
  }
};

if (limitTimesInput.value == "") {
  startBtn.style.pointerEvents = "none";

  limitTimesInput.classList.add("error-border");

  limitTimesInput.addEventListener("input", () => {
    if (limitTimesInput.value.length === 1) {
      limitTimesInput.classList.remove("error-border");

      startBtn.style.pointerEvents = "all";

      if (limitTimesInput.value.length === 3) {
        limitTimesInput.blur();
      }
    }
  });

  startBtn.addEventListener("click", (e) => {
    continueBtn.style.pointerEvents = "none";

    limitTimes = parseInt(limitTimesInput.value);

    if (document.querySelectorAll(".correct-word-span").length < limitTimes) {
      operationFunction();

      clickerWords();

      submitFunction();
    }
  });
}
// document.querySelector(".words-container").childNodes.length;

function startPopup() {
  disebleContainerEvents();
  let startPopupDiv = document.createElement("div");

  startPopupDiv.className = "popup";

  startPopupDiv.innerHTML = `
  <h3 class="popup-header basmala"> بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ </h3>
  <h3 class="popup-words"> Hello <span class="popup-spans ctm-font"> ${localStorage.getItem(
    "mainName"
  )} </span> </h3>
  <h3 class="popup-words">Let's start guessing the words</h3>`;

  startPopupDiv.appendChild(selectWordNumbers);

  startBtn.className = "start-btn";

  startBtn.innerText = "Start";

  startBtn.style.marginBottom = "20px";

  startPopupDiv.appendChild(startBtn);

  document.body.appendChild(startPopupDiv);
  limitTimesInput.focus();

  startBtn.addEventListener("click", () => {
    startPopupDiv.remove();
    document.querySelector(".container").classList.remove("diseble");
  });
}

function gameOverPopup() {
  disebleContainerEvents();
  document.body.style.pointerEvents = "none";
  1;

  let div = document.createElement("div");

  div.classList.add("popup");

  div.innerHTML = `
  <h1 class=" popup-header" > Game Over </h1>

  <h3 class="popup-words" >The Word Is  <span class="popup-spans"> ${randomGuessWord} </span> </h3>
  
  <h3 class="popup-words" >Word From  <span class="popup-spans"> ${
    objectKeys[randomPropOfObject]
  }</span> </h3>
  
  <p class="popup-words">  Thank You <span class="popup-spans">${
    inputName.value === "" ? '" "' : inputName.value
  }</span></p>`;

  document.body.appendChild(div);

  document.getElementsByClassName("container")[0].style.opacity = 0.2;
  timerToReload();
}

function youWinPopup() {
  timerToReload();
  disebleContainerEvents();
  let winPopup = document.createElement("div");

  winPopup.className = "popup";

  document.body.appendChild(winPopup);

  winPopup.innerHTML = `<h1 class="popup-header">YOU WIN</h1>

    <p class="popup-words">You Can Replay This Game By Clicking The<span onclick="location.reload();" id="reset" class="popup-spans has-event">Replay</span></p>

    <p class="popup-words">The number of words you have guessed <span  id="reset" class="popup-spans">${limitTimes}</span> <span  onclick="showWordsContainerPopup()" id="reset" class="popup-spans has-event">Show</span></p>
  `;
}

function showWordsContainerPopup() {
  document.querySelectorAll(".popup").forEach((popup) => popup.remove());
  let containerDiv = document.createElement("div");

  containerDiv.classList.add("popup", "no-flexing");
  containerDiv.innerHTML = `<span class=" small-words popup-words">number <i class="fa-solid fa-minus ctm-pupup"></i> Word <i class="fa-solid fa-arrow-right-long ctm-pupup"></i> WordFrom  </span>`;

  [...document.querySelectorAll(".correct-word-span")].forEach(
    (span, index) => {
      let wordSpan = document.createElement("span");

      wordSpan.className = "popup-words";

      wordSpan.innerHTML = `${
        index + 1
      }<i class="fa-solid fa-minus ctm-pupup"></i> ${span.innerHTML}  
      <i class="fa-solid fa-arrow-right-long ctm-pupup"></i> ${
        wordTypeArray[index]
      }`;

      containerDiv.appendChild(wordSpan);
    }
  );

  document.body.appendChild(containerDiv);
}

function timerToReload() {
  let countDiv = document.getElementById("count");
  countDiv.style.opacity = "1";

  countDiv.innerHTML = "10";

  let downCount = setInterval(() => {
    countDiv.innerHTML = parseInt(countDiv.innerHTML) - 1;

    countDiv.innerHTML < 0 ? (countDiv.innerHTML = 0) : "";
  }, 1000);

  setTimeout(() => {
    location.reload();

    clearInterval(downCount);
  }, 10000);
}

// Array.from(document.querySelector(".words-container").childNodes).forEach(
//   (word) => {}
// );

let changeModeToggle = document.getElementById("change-mode");

changeModeToggle.addEventListener("click", () => {
  let headTag = document.getElementsByTagName("head")[0];

  let styleTag = document.createElement("style");

  if (changeModeToggle.checked === true) {
    localStorage.setItem("isDark", true);
    styleTag.innerHTML = `
  :root {
    --black-color: white;
    --white-color:black;
  }
  `;
    headTag.appendChild(styleTag);
  } else {
    localStorage.setItem("isDark", false);

    headTag.appendChild(styleTag);

    styleTag.innerHTML = `
    :root {
      --mov-color: #e91e63;
      --blue-color: #03a9f4;
      --black-color: #000;
      --white-color: #fff;
    }`;
  }
});

let css = document.querySelector(".words");

let showCorrectBtn = document.getElementById("show-correct");

showCorrectBtn.addEventListener("click", () => {
  let closeWordsTap = setTimeout(() => {
    if (window.getComputedStyle(nextWord).right === "0px") {
      nextWord.style.right = `-${window.getComputedStyle(nextWord).width}`;
    }
  }, 5000);

  if (parseInt(window.getComputedStyle(nextWord).right) !== 0) {
    nextWord.style.right = "0px";
  } else if (window.getComputedStyle(nextWord).right === "0px") {
    nextWord.style.right = `-${window.getComputedStyle(nextWord).width}`;

    clearTimeout(closeWordsTap);
  }
});

function disebleContainerEvents() {
  document.querySelector(".container").classList.add("diseble");
}
