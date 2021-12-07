const body = document.querySelector("body"); //select the body

////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
animalArr = [
  "Crow",
  "Peacock",
  "Dove",
  "Sparrow",
  "Goose",
  "Stork",
  "Pigeon",
  "TurkeyHawk",
  "Bald",
  "eagle",
  "Raven",
  "Parrot",
  "Flamingo",
  "Seagull",
  "Ostrich",
  "Swallow",
  "Penguin",
  "Robin",
  "Swan",
  "Owl",
  "Squirrel",
  "Dog",
  "Chimpanzee",
  "Ox",
  "Lion",
  "Panda",
  "Walrus",
  "Otter",
  "Mouse",
  "Kangaroo",
  "Goat",
  "Horse",
  "MonkeyCow",
  "Koala",
  "Mole",
  "Elephant",
  "Leopard",
  "Hippopotamus",
  "Giraffe",
  "Fox",
  "Coyote",
  "Hedgehong",
  "Sheep",
  "Deer",
];

moviesArr = [
  "Seven",
  "Parasite",
  "Leon",
  "Gladiator",
  "Whiplash",
  "Memento",
  "Oldboy",
  "Avengers",
  "Hamilton",
  "Incendies",
  "Metropolis",
  "Unforgiven",
  "Chinatown",
  "Trainspotting",
  "Prisoners",
  "Andhadhun",
  "Spotlight",
  "Inception",
  "Goodfellas",
  "Interstellar",
  "Eternals",
  "Ghostbusters",
  "The Godfather",
  "Forrest Gump",
  "Life Is Beautiful",
  "The Usual Suspects",
  "The Departed",
  "Django Unchained",
  "Reservoir Dogs",
  "Taxi Driver",
  "There Will Be Blood",
  "Shutter Island",
  "Before Sunrise",
  "Gone Girl",
];

countriesArr = [
  "Afghanistan",
  "Albania",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Botswana",
  "Gabon",
  "Gambia",
  "Georgia",
  "German",
  "Ghana",
  "Iraq",
  "Ireland",
  "Palau",
  "Palestine",
  "Poland",
  "Portugal",
  "Slovakia",
  "Slovenia",
  "Somalia",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

fruitsArr = [
  "Apple",
  "Apricot",
  "Blueberries",
  "Cantaloupe",
  "Cherries",
  "Grapes",
  "Mango",
  "Raspberry",
  "Strawberry",
  "Watermelon",
  "Papaya",
  "Clementines",
  "Banana",
  "Avocado",
  "Coconut",
  "Pineapple",
  "Pumpkin",
  "Pomegranate",
];

electricArray = [
  "Blower",
  "Blender",
  "Epilator",
  "Freezer",
  "Mixer",
  "Juicer",
  "Lighter",
  "Refrigerator",
  "Toaster",
  "Washer",
  "Humidifier",
  "Dishwasher",
  "Coffeemaker",
];

carsArr = [
  "Bentley",
  "Acura",
  "Audi",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Genesis",
  "Ford",
  "Infiniti",
  "Hyundai",
  "Jaguar",
  "Lincoln",
  "Maserati",
  "Mazda",
  "Mercury",
  "Mitsubishi",
  "Polestar",
  "Porsche",
  "Rivian",
  "Saturn",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Volvo",
];

capitalArray = [
  "Buenos Aires",
  "Vienna",
  "Brussels",
  "Brasilia",
  "London",
  "Helsinki",
  "New Delhi",
  "Monaco",
  "Moscow",
  "Damascus",
  "Abu Dhabi",
  "Cardiff",
  "Bucharest",
  "Muscat",
  "	Riyadh",
  "Madrid",
  "Stockholm",
  "Ankara",
  "Beirut",
];
///////////////////////////////////////////////////////
alphatetArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let trials = 0; //number of wrong guesses

let wordsList = [
  animalArr,
  moviesArr,
  countriesArr,
  fruitsArr,
  electricArray,
  carsArr,
  capitalArray,
];

let randArr = Math.floor(Math.random() * wordsList.length);
word = wordsList[randArr];

let hint = "";
switch (word) {
  case animalArr:
    hint = "ANIMAL";
    break;
  case moviesArr:
    hint = "MOVIE";
    break;
  case countriesArr:
    hint = "COUNTRY";
    break;
  case fruitsArr:
    hint = "FRUIT";
    break;
  case electricArray:
    hint = "ELECTRIC";
    break;
  case carsArr:
    hint = "CAR";
    break;
  case capitalArray:
    hint = "CAPITAL CITY";
    break;
}

//array of words to play.
let wordNum = Math.floor(Math.random() * word.length); //variable to select array item.
let word1 = word[wordNum].toUpperCase();

const allInputs = document.querySelector("#lettersDiv"); //reference for letters parent div

//add inputs equal to the word letters count. and append them to allInputs div.
word1.split("").forEach((el) => {
  const inp = document.createElement("input");

  inp.classList = "addedInput";
  if (el === " ") {
    inp.value = "-";
    inp.style.backgroundColor = "#7FFF00";
  }
  inp.disabled = true;
  allInputs.appendChild(inp);
});

const inputAll = document.querySelectorAll(".addedInput"); //array for all inputs
const divInputs = document.querySelector("div");
const inputs = document.querySelectorAll("input");
const guesses = document.querySelector("#trials"); //reference for trials tag.
const reloadtButton = document.querySelector("#reload"); //Play again button.
const helpBut = document.querySelector("#help"); //Support button
const exclude = document.querySelector("#excludeBut"); //Exclude button
const hint1 = document.querySelector("#hint"); //Exclude button
const scoreLabel = document.querySelector("#scoreLabel"); //Exclude button

//////////////////////////////////////////////////////////////////
//sounds.
const correct = document.querySelector("#correct");
const wrong = document.querySelector("#wrong");
const helpa = document.querySelector("#helpa");
const winning = document.querySelector("#winning");
const losing = document.querySelector("#losing");
const rescue = document.querySelector("#rescue");
const danger = document.querySelector("#danger");
const hoversound = document.querySelector("#hoverSound");

///////////////////////////////////////////////////////////////////
//reference for hanged man images and hide them.
const hangedHead = document.getElementById("Head");
const hangedLHand = document.querySelector("#lHand");
const hangedRHand = document.querySelector("#rHand");
const HangedUBody = document.querySelector("#uBody");
const hangedLLeg = document.querySelector("#lLeg");
const hangedRLeg = document.querySelector("#rLeg");
const letDiv = document.querySelector("#letter");

//hide images.
hangedHead.style.visibility = "hidden";
hangedLHand.style.visibility = "hidden";
hangedRHand.style.visibility = "hidden";
HangedUBody.style.visibility = "hidden";
hangedLLeg.style.visibility = "hidden";
hangedRLeg.style.visibility = "hidden";
////////////////////////////////////////////////////

alphatetArray.forEach((el) => {
  const but = document.createElement("button");

  but.className = "letter1";
  but.innerText = el.toUpperCase();
  letDiv.appendChild(but);
});
///////////////////////////////////////////////////////////////

const letters = document.querySelectorAll(".letter1"); //array of all letters buttons.

///////////////////////////////////////////////////////////////////////

reloadtButton.style.visibility = "hidden"; ///hide play again button
word1Arr = word1.split("");
if (word1Arr.includes(" ")) {
  word1Arr.splice(word1Arr.indexOf(" "), 1);
}
let helpWord = word1Arr.join("");

// word1Arr.join("");
// .split("").splice(indexOf(" "), 1); //variable for the remaining letters from the word.

//////////////////////////////////////////////////////////
///////////////Help Button////////////////////////////
//hide help buttons.
let helpUsed = 4;
helpBut.style.visibility = "hidden";
exclude.style.visibility = "hidden";
hint1.style.visibility = "hidden";

let score =
  (6 - trials) * 99 + (word1.length - helpWord.length) * 19 + helpUsed * 19;
let helpQty = 0;
//callback function for eventlistener.
const helpF = () => {
  helpBut.style.visibility = "hidden"; //hide the button after one click.
  rescue.play(); //play click sound
  helpUsed--;
  score =
    (6 - trials) * 99 + (word1.length - helpWord.length) * 19 + helpUsed * 18;
  let helpLetter = helpWord[Math.floor(Math.random() * helpWord.length)]; //pick a letter from remaining letters to help with
  //copy help letter to its index in inputs.
  console.log(helpLetter);
  let ind1 = 0;
  word1.split("").forEach((el1) => {
    if (el1 === helpLetter) {
      inputs[ind1].value = el1;
      inputs[ind1].style.backgroundColor = "#7FFF00";
    }
    ind1++;
  });
  //filter the remaining letters variable (helpWord) from helpLetter.
  helpWordArr = helpWord.split("");
  const newHelpWord = helpWordArr.filter((el) => {
    return el !== helpLetter;
  });

  helpWord = newHelpWord.join("");
  score =
    (6 - trials) * 99 + (word1.length - helpWord.length) * 19 + helpUsed * 19;
  //disable and color the letter from the letters pad.
  letters.forEach((el) => {
    if (helpLetter === el.innerText) {
      el.disabled = true;
      el.style.backgroundColor = "#7FFF00";
    }
  });

  //////////check wining case.
  let check = true;
  for (i = 0; i < inputAll.length; i++) {
    if (inputAll[i].value === "") {
      check = false;
    }
  }
  if (check === true) {
    for (i = 0; i < inputAll.length; i++) {
      inputAll[i].style.backgroundColor = "#7FFF00";
    }
    guesses.innerText = "YOU SURVIVED"; //winning sentence.
    reloadtButton.style.visibility = "visible"; //show play again button

    winning.play(); //winning sound
    //disable letters pad.
    letters.forEach((el) => {
      el.disabled = true;
    });
  }
  ////////////////////////////////////////////////////
  //show body parts
  switch (trials) {
    case 1:
      hangedLLeg.style.visibility = "visible";
      break;
    case 2:
      hangedRLeg.style.visibility = "visible";
      break;
    case 3:
      HangedUBody.style.visibility = "visible";
      break;
    case 4:
      hangedRHand.style.visibility = "visible";
      break;
    case 5:
      hangedLHand.style.visibility = "visible";

      break;
  }
};

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
//Kill button call back function

const excludeFun = () => {
  rescue.play();
  exclude.style.visibility = "hidden";
  helpUsed--;
  score =
    (6 - trials) * 99 + (word1.length - helpWord.length) * 19 + helpUsed * 19;
  exclude.disabled = true;
  let foundQty = 0;
  while (foundQty < helpWord.length) {
    let randExclude = Math.floor(Math.random() * 26);

    if (
      !word1.includes(letters[randExclude].innerText) &&
      letters[randExclude].disabled === false
    ) {
      letters[randExclude].style.backgroundColor = "#FF0000";
      letters[randExclude].disabled = true;

      foundQty++;
    }
  }
};

/////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

const hintFun = () => {
  rescue.play();
  helpUsed--;
  // hint1.style.visibility = "hidden";
  score =
    (6 - trials) * 99 + (word1.length - helpWord.length) * 19 + helpUsed * 19;
  hint1.disabled = true;
  hint1.innerText = hint;
};

///////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////
//add event listener for all letters buttons

const add = letters.forEach((el) => {
  //call back function for event listener
  const cb = () => {
    el.disabled = true; //disable the letter when clicked.
    //check if the letter is correct.
    if (word1.includes(el.innerText)) {
      el.style.backgroundColor = "#7FFF00";
      correct.play();
      //move the letter to its index in inputs array(all instances).
      let ind = 0;
      word1.split("").forEach((el1) => {
        if (el1 === el.innerText) {
          inputs[ind].value = el1;
          inputs[ind].style.backgroundColor = "#7FFF00";
        }
        ind++;
      });

      //remove the letter from helpWord.
      helpWordArr = helpWord.split("");

      const helpWordNew = helpWordArr.filter((el1) => {
        return el1 !== el.innerText;
      });

      helpWord = helpWordNew.join("");
      score =
        (6 - trials) * 99 +
        (word1.length - helpWord.length) * 19 +
        helpUsed * 19;
      //show body parts
    } else {
      el.style.backgroundColor = "#FF0000";
      wrong.play();
      trials++;
      score =
        (6 - trials) * 99 +
        (word1.length - helpWord.length) * 19 +
        helpUsed * 19;
      switch (trials) {
        case 1:
          hangedLLeg.style.visibility = "visible";
          break;
        case 2:
          hangedRLeg.style.visibility = "visible";
          break;
        case 3:
          HangedUBody.style.visibility = "visible";

          break;
        case 4:
          hangedRHand.style.visibility = "visible";
          hint1.addEventListener("click", hintFun);
          hint1.style.visibility = "visible";
          break;
        case 5:
          hangedLHand.style.visibility = "visible";
          danger.play();

          if (
            (helpWord.length >= 3 && word1.length <= 5) ||
            helpWord.length >= 5
          ) {
            helpBut.style.visibility = "visible";
            exclude.style.visibility = "visible";
          }
          exclude.addEventListener("click", excludeFun);
          helpBut.addEventListener("click", helpF);

          break;
        case 6:
          hangedHead.style.visibility = "visible";

          letters.forEach((el) => {
            el.disabled = true;
          });
          document.getElementById("HelpBut").disabled = true;
          exclude.style.visibility = "hidden";
          helpBut.style.visibility = "hidden";
          hint1.style.visibility = "hidden";
          losing.play();
          guesses.innerText = "you are dead. The word is " + word1;
          scoreLabel.textContent = "SCORE: " + score;
          reloadtButton.style.visibility = "visible";

          break;
      }
    }
  };
  el.addEventListener("click", cb);
});

//function to check wining case.
const checking = letters.forEach((el1) => {
  let check = true;
  const checkAll = () => {
    //callback function for event
    for (i = 0; i < inputAll.length; i++) {
      if (inputAll[i].value === "") {
        check = false;
      }
    }

    if (check === true) {
      for (i = 0; i < inputAll.length; i++) {
        inputAll[i].style.backgroundColor = "#7FFF00";
      }
      exclude.style.visibility = "hidden";
      helpBut.style.visibility = "hidden";
      hint1.style.visibility = "hidden";
      guesses.innerText = "YOU SURVIVED";
      scoreLabel.textContent = "SCORE: " + score;
      reloadtButton.style.visibility = "visible";

      winning.play();
      document.getElementById("HelpBut").disabled = true;
      letters.forEach((el) => {
        el.disabled = true;
      });
    }
  };

  el1.addEventListener("click", checkAll);
});

///////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////
//score
