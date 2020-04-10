//HTML TARGETS------------------------------------------------------//
const dialog = document.querySelector(".dialog");
const choiceOne = document.querySelector("#A");
const choiceTwo = document.querySelector("#B");
const choiceThree = document.querySelector("#C");
const choiceFour = document.querySelector("#D");
let heroLife = document.querySelector(".life");
let ennemyLife = document.querySelector(".ennemy");
const startMusic = document.querySelector("#start-music");
let next = document.querySelector("#question");
let nextSong = document.querySelector("button.good-answer");
let divChoices = document.querySelector("#funkOne");
let startGame = document.querySelector("#start-the-game");
let choices = document.querySelector(".choices");

//LIFE COUNT----------------------------------------------------------//

let numberOfheroLife = 5;
heroLife.innerHTML = `<p>DJ Goodvibes x${numberOfheroLife} <span style="font-family:vinyle; color:#FFD700">O</span></p>`;

// ennemyLife.innerHTML = `<p>ennemy x${numberOfEnnemyLife} <span style="font-family:vinyle; color:#FFD700">O</span></p>`;

//EVENT LISTENERS-----------------------------------------------------------//
startGame.addEventListener("click", initQuizz);

// startMusic.addEventListener("click", initQuizz);

choices.addEventListener("click", choiceSelected);

function choiceSelected(e) {
  if (e.target.innerText === quizz[i].correctAnswer) {
    good.play();

    if (quizz[i].end === true) {
      dialog.innerText = quizz[i].death;
      document.querySelector(".image").innerHTML = quizz[i].image;
      ennemyLife.innerHTML = `<p class="playing">ennemy x${0} <span style="font-family:vinyle; color:#FFD700">O</span></p>`;
      next.innerHTML =
        "<h3><button class='good-answer'> YOU DEFEATED DR BADMOOD ! CLICK HERE </button></h3>";
      next.addEventListener("click", lastScreen);
      choices.removeEventListener("click", choiceSelected);
    } else if (
      quizz[i].nmbOfLife ===
      `<p class="playing">ennemy x${1} <span style="font-family:vinyle; color:#FFD700">O</span></p>`
    ) {
      e.target.classList.add("good-answer");
      document.querySelector(".image").innerHTML = quizz[i].image;
      dialog.innerText = quizz[i].death;
      ennemyLife.innerHTML = `<p class="playing">ennemy x${0} <span style="font-family:vinyle; color:#FFD700">O</span></p>`;
      next.innerHTML =
        "<h3><button class='good-answer'> click here for the next opponent </button></h3>";
      next.addEventListener("click", nextQuestion);
      choices.removeEventListener("click", choiceSelected);
    } else {
      document.querySelector(".image").innerHTML = quizz[i].image;
      e.target.classList.add("good-answer");
      next.innerHTML =
        "<h3><button class='good-answer'> click here for the next song </button></h3>";
      next.addEventListener("click", nextQuestion);
      choices.removeEventListener("click", choiceSelected);
    }
  } else {
    bad.play();
    console.log(e);
    e.target.classList.add("bad-answer");
    if (numberOfheroLife > 1) {
      heroLife.innerHTML = `<p>DJ Goodvibes x${(numberOfheroLife -= 1)} <span style="font-family:vinyle; color:#FFD700">O</span></p>`;
      e.target.setAttribute("disabled", "");
    } else {
      heroLife.innerHTML = `<p>you lose... try again ! :(</p>`;
      next.innerHTML =
        "<button class='your-dead'> click here to restart the game </button>";
      startMusic.innerHTML = "<h3 class='playing'>XXXXXXX</h3>";
      document.querySelector(".your-dead").addEventListener("click", resetGame);
      choices.removeEventListener("click", choiceSelected);
    }
  }
}

//QUIZZ ONE-------------------------------------------------------------------//

const quizz = [
  {
    level: "level 1",
    ennemy: "Discofunkmaster",
    nmbOfLife: "",
    question: `<p style="text-aligned:justified">So you found my sweet funky den DJ Goodvibe! You've got yourself a mighty fine name ! The
      question is...
      ARE YOU WORTHY OF IT?</p>`,
    answers: {
      a: `<button class="playing">click me</button>`,
      b: `<button class="playing">click me</button>`,
      c: `<button class="playing">click me</button>`,
      d: `<button class="playing">click me</button>`,
    },
    playing: "<h3>Prepare yourself !</h3>",
    audio: audio4,
    baseImage: '<img src="./ressource/images/disco.jpg" alt="discofunkmaster">',
    image: '<img src="./ressource/images/disco.jpg" alt="discofunkmaster">',
    correctAnswer: "click me",
    next: "<h3>click a button to begin</h3>",
    // end:true,
  },

  {
    level: "level 1",
    ennemy: "Discofunkmaster",
    nmbOfLife: `<p>ennemy x${4} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "Can you guess the title of that sweet funky song ?",
    answers: {
      a: `<button>Move on up</button>`,
      b: `<button>Cold Sweat</button>`,
      c: `<button>sex machine</button>`,
      d: `<button>it's your thing</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: audio0,
    baseImage: '<img src="./ressource/images/disco.jpg" alt="discofunkmaster">',
    image:
      '<img id="img-funk-one" src="./ressource/images/funk1.jpg" alt="funk-one">',
    correctAnswer: "sex machine",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "level 1",
    ennemy: "Discofunkmaster",
    nmbOfLife: `<p>ennemy x${3} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "Hmm what about this one ?",
    answers: {
      a: `<button>One Nation under a groove</button>`,
      b: `<button>Jungle Boogie</button>`,
      c: `<button>Rapper's Delight</button>`,
      d: `<button>Get Down On it</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: audio1,
    baseImage: '<img src="./ressource/images/disco.jpg" alt="discofunkmaster">',
    image:
      '<img id="img-funk-two" src="./ressource/images/funk2.jpg" alt="funk-two">',
    correctAnswer: "Jungle Boogie",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "level 1",
    ennemy: "Discofunkmaster",
    nmbOfLife: `<p>ennemy x${2} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "Is it hot in here or is it just me?",
    answers: {
      a: `<button>Boogie Wonderland</button>`,
      b: `<button>Dance !</button>`,
      c: `<button>Let's Groove</button>`,
      d: `<button>Play That Funky Music</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: audio2,
    baseImage: '<img src="./ressource/images/disco.jpg" alt="discofunkmaster">',
    image:
      '<img id="img-funk-three" src="./ressource/images/funk3.jpg" alt="funk-three">',
    correctAnswer: "Boogie Wonderland",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "level 1",
    ennemy: "Discofunkmaster",
    nmbOfLife: `<p class="playing">ennemy x${1} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "Good luck finding this one !",
    answers: {
      a: `<button>People groovin'</button>`,
      b: `<button>Keep On dancing</button>`,
      c: `<button>Top Floor</button>`,
      d: `<button>Higher Ground</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: audio3,
    baseImage: '<img src="./ressource/images/disco.jpg" alt="discofunkmaster">',
    image:
      '<img id="img-funk-four" src="./ressource/images/funk4.jpg" alt="funk-four">',
    correctAnswer: "Higher Ground",
    next: "<h3>MAKE YOUR CHOICE</h3>",
    death: "AAAARRRRGH you're too funky for me dj Goodvibes",
  },

  {
    level: "level 2",
    ennemy: "Major Generalist",
    nmbOfLife: "",
    question:
      "<p style='text-aligned:justified'>Discofunkmaster was a fool not to take you seriously. My playlist is lethal weapon. Prepare to be destroyed !</p>",
    answers: {
      a: `<button class="playing">click me</button>`,
      b: `<button class="playing">click me</button>`,
      c: `<button class="playing">click me</button>`,
      d: `<button class="playing">click me</button>`,
    },
    playing: "<h3>Prepare yourself</h3>",
    audio: general4,
    baseImage:
      '<img id="img-funk-four" src="./ressource/images/general.jpg" alt="generalist1"></img>',
    image:
      '<img id="img-funk-four" src="./ressource/images/general.jpg" alt="generalist1"></img>',
    correctAnswer: "click me",
    next: "<h3>click a button to begin</h3>",
    click: "<h3>Click to play</h3>",
  },

  {
    level: "level 2",
    ennemy: "Major Generalist",
    nmbOfLife: `<p>ennemy x${4} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "Nothing like this to get the morning exercices done",
    answers: {
      a: `<button>I did it again</button>`,
      b: `<button>Baby one more time</button>`,
      c: `<button>I still believe</button>`,
      d: `<button>Oh baybay baybay</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: general0,
    baseImage: '<img src="./ressource/images/general.jpg" alt="general">',
    image:
      '<img id="img-funk-four" src="./ressource/images/generalist1.jpg" alt="generalist1"></img>',
    correctAnswer: "Baby one more time",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "level 2",
    ennemy: "Major Generalist",
    nmbOfLife: `<p>ennemy x${3} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "just admit that you are weak",
    answers: {
      a: `<button>Going solo</button>`,
      b: `<button>Wake me up before you go-go</button>`,
      c: `<button>Breakfast Coco</button>`,
      d: `<button>Careless Whisper</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: general1,
    baseImage: '<img src="./ressource/images/general.jpg" alt="general">',
    image:
      '<img id="img-funk-four" src="./ressource/images/generalist4.jpg" alt="generalist2"></img>',
    correctAnswer: "Wake me up before you go-go",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "level 2",
    ennemy: "Major Generalist",
    nmbOfLife: `<p>ennemy x${2} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "you don't deserve this one",
    answers: {
      a: `<button>Christian life</button>`,
      b: `<button>Young men</button>`,
      c: `<button>YMCA</button>`,
      d: `<button>Macho Man</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: general2,
    baseImage: '<img src="./ressource/images/general.jpg" alt="general">',
    image:
      '<img id="img-funk-four" src="./ressource/images/generalist2.jpg" alt="generalist2"></img>',
    correctAnswer: "YMCA",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "level 2",
    ennemy: "Major Generalist",
    nmbOfLife: `<p class="playing">ennemy x${1} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "AARRRRGGGH I have to resist !",
    answers: {
      a: `<button>Everybody's looking for something</button>`,
      b: `<button>Sweet Dreams</button>`,
      c: `<button>Strange love</button>`,
      d: `<button>Abused</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: general3,
    baseImage: '<img src="./ressource/images/general.jpg" alt="general">',
    image:
      '<img id="img-funk-four" src="./ressource/images/generalist3.jpg" alt="generalist3"></img>',
    correctAnswer: "Sweet Dreams",
    next: "<h3>MAKE YOUR CHOICE</h3>",
    death: "How did a nobody like you managed beat me ! ",
  },
  {
    level: "level 3",
    ennemy: "Pat Rockenberg",
    nmbOfLife: "",
    question:
      "<p style='text-aligned:justified'>I hope you have some energy left in you, DJ Goodvibes. Let's rock !</p>",
    answers: {
      a: `<button class="playing">click me</button>`,
      b: `<button class="playing">click me</button>`,
      c: `<button class="playing">click me</button>`,
      d: `<button class="playing">click me</button>`,
    },
    playing: "<h3>Prepare yourself</h3>",
    audio: rock0,
    baseImage:
      '<img id="img-funk-four" src="./ressource/images/rock.jpg" alt="rock"></img>',
    image:
      '<img id="img-funk-four" src="./ressource/images/rock.jpg" alt="rock"></img>',
    correctAnswer: "click me",
    next: "<h3>click a button to begin</h3>",
    click: "<h3>Click to play</h3>",
  },

  {
    level: "level 3",
    ennemy: "Pat Rockenberg",
    nmbOfLife: `<p>ennemy x${4} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "I won't go easy on you !",
    answers: {
      a: `<button>Puppets Master</button>`,
      b: `<button>Master of Puppets</button>`,
      c: `<button>Obey Your Master</button>`,
      d: `<button>Mind twist</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: rock1,
    baseImage: '<img src="./ressource/images/rock.jpg" alt="rock">',
    image:
      '<img id="img-funk-four" src="./ressource/images/rock1.jpg" alt="rock1"></img>',
    correctAnswer: "Master of Puppets",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "level 3",
    ennemy: "Pat Rockenberg",
    nmbOfLife: `<p>ennemy x${3} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "Hahaha your good, boy !",
    answers: {
      a: `<button>Listen to me !</button>`,
      b: `<button>She's gonna set you free</button>`,
      c: `<button>Girl</button>`,
      d: `<button>Woman</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: rock2,
    baseImage: '<img src="./ressource/images/rock.jpg" alt="rock">',
    image:
      '<img id="img-funk-four" src="./ressource/images/rock2.jpg" alt="rock2"></img>',
    correctAnswer: "Woman",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "level 3",
    ennemy: "Pat Rockenberg",
    nmbOfLife: `<p>ennemy x${2} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "You're a tough one eh, let's see what you'll think of this one.",
    answers: {
      a: `<button>Song for the Deaf</button>`,
      b: `<button>Pills to Swallow</button>`,
      c: `<button>No One Knows</button>`,
      d: `<button>Street Life</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: rock3,
    baseImage: '<img src="./ressource/images/rock.jpg" alt="rock">',
    image:
      '<img id="img-funk-four" src="./ressource/images/rock3.jpg" alt="rock3"></img>',
    correctAnswer: "No One Knows",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "level 3",
    ennemy: "Dr Rockenberg",
    nmbOfLife: `<p class="playing">ennemy x${1} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "I have one more in store for you",
    answers: {
      a: `<button>Seven Nation Army</button>`,
      b: `<button>Red Stripes</button>`,
      c: `<button>Five Continent Army</button>`,
      d: `<button>That's what I do</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: rock4,
    baseImage: '<img src="./ressource/images/rock.jpg" alt="rock">',
    image:
      '<img id="img-funk-four" src="./ressource/images/rock4.jpeg" alt="rock4"></img>',
    correctAnswer: "Seven Nation Army",
    next: "<h3>MAKE YOUR CHOICE</h3>",
    death: "I won't forget this boyo !!!",
  },

  {
    level: "FINAL BOSS",
    ennemy: "Dr Badmood",
    nmbOfLife: "",
    question:
      "<p style='text-aligned:justified'>At last ! I thought you would never come DJ Goodvibes. I hope my minions didn't cause you too much trouble ? It's time to send you back in the hole where you came from !</p>",
    answers: {
      a: `<button class="playing">click me</button>`,
      b: `<button class="playing">click me</button>`,
      c: `<button class="playing">click me</button>`,
      d: `<button class="playing">click me</button>`,
    },
    playing: "<h3>Prepare yourself</h3>",
    audio: boss0,
    baseImage:
      '<img id="img-funk-four" src="./ressource/images/badmood.jpg" alt="badmood"></img>',
    image:
      '<img id="img-funk-four" src="./ressource/images/badmood.jpg" alt="badmood"></img>',
    correctAnswer: "click me",
    next: "<h3>click a button to begin</h3>",
    click: "<h3>Click to play</h3>",
  },

  {
    level: "FINAL BOSS",
    ennemy: "Dr Badmood",
    nmbOfLife: `<p>ennemy x${4} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "I'll start easy on you.",
    answers: {
      a: `<button>Bad</button>`,
      b: `<button>Thriller</button>`,
      c: `<button>I'm bad</button>`,
      d: `<button>I'm really really bad</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: boss1,
    baseImage: '<img src="./ressource/images/badmood.jpg" alt="badmood">',
    image:
      '<img id="img-funk-four" src="./ressource/images/boss1.jpg" alt="boss1"></img>',
    correctAnswer: "Bad",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "FINAL BOSS",
    ennemy: "Dr Badmood",
    nmbOfLife: `<p>ennemy x${3} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "What about movie scores ?",
    answers: {
      a: `<button>The good, the bad and the weird</button>`,
      b: `<button>Once upon a time in the west</button>`,
      c: `<button>The goood, the bad and the ugly</button>`,
      d: `<button>Whisle thingy</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: boss2,
    baseImage: '<img src="./ressource/images/badmood.jpg" alt="badmood">',
    image:
      '<img id="img-funk-four" src="./ressource/images/boss2.jpg" alt="boss2"></img>',
    correctAnswer: "The goood, the bad and the ugly",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "FINAL BOSS",
    ennemy: "Dr Badmood",
    nmbOfLife: `<p>ennemy x${2} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "I think this one suits me well",
    answers: {
      a: `<button>The Stepfather</button>`,
      b: `<button>The Godfather</button>`,
      c: `<button>Don Corleon</button>`,
      d: `<button>Thuglife</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: boss3,
    baseImage: '<img src="./ressource/images/badmood.jpg" alt="badmood">',
    image:
      '<img id="img-funk-four" src="./ressource/images/boss3.jpg" alt="boss3"></img>',
    correctAnswer: "The Godfather",
    next: "<h3>MAKE YOUR CHOICE</h3>",
  },
  {
    level: "FINAL BOSS",
    ennemy: "Dr Badmood",
    nmbOfLife: `<p class="playing">ennemy x${1} <span style="font-family:vinyle; color:#FFD700">O</span></p>`,
    question: "WHAT THE HELLLLL ??",
    answers: {
      a: `<button>Shake that booty</button>`,
      b: `<button>In Da Club</button>`,
      c: `<button>Disco Inferno</button>`,
      d: `<button>This is how we do</button>`,
    },
    playing: "<h3 class='playing' >playing...</h3>",
    audio: boss4,
    baseImage: '<img src="./ressource/images/badmood.jpg" alt="badmood">',
    image:
      '<img id="img-funk-four" src="./ressource/images/boss4.jpg" alt="boss4"></img>',
    correctAnswer: "Disco Inferno",
    next: "<h3>MAKE YOUR CHOICE</h3>",
    death:
      "Whyyyyy?? Please spare me DJ Goodvibes. I just wanted to feel loved :(",
    end: true,
  },
];

let i = 0;

//PLAYING THE GAME ------------------------------------------------------------

function lastScreen() {
  document.querySelector(".screen").classList.add("hidden");
  document.getElementById("last-screen").classList.remove("hidden");
  quizz[i].audio.pause();
  lastSong.play();
}

function resetGame() {
  location.reload();
}

function initGame() {
  document.getElementById("first-screen").classList.add("hidden");
  document.querySelector(".screen").classList.remove("hidden");
}
function initQuizz() {
  LETSGO.play();
  document.getElementById("first-screen").classList.add("hidden");
  document.querySelector(".screen").classList.remove("hidden");
  document.getElementById("question").style.visibility = "visible";
  document.querySelector(".choices").style.visibility = "visible";
  setQuestion(quizz, [0]);
}

function setQuestion(arr) {
  document.querySelector(".text h2").innerText = quizz[i].level;
  document.querySelector(".text h1").innerText = quizz[i].ennemy;
  dialog.innerHTML = `<p style= text-align:center>${arr[i].question}<p>`;
  ennemyLife.innerHTML = arr[i].nmbOfLife;
  choiceOne.innerHTML = arr[i].answers.a;
  choiceTwo.innerHTML = arr[i].answers.b;
  choiceThree.innerHTML = arr[i].answers.c;
  choiceFour.innerHTML = arr[i].answers.d;
  arr[i].audio.play();
  startMusic.innerHTML = arr[i].playing;
  next.innerHTML = arr[i].next;
  // startMusic.classList.add("playing");
}

function nextQuestion() {
  document.getElementById("question").style.visibility = "visible";
  document.querySelector(".choices").style.visibility = "visible";
  i += 1;
  document.querySelector(".image").innerHTML = quizz[i].baseImage;
  next.removeEventListener("click", nextQuestion);
  quizz[i - 1].audio.pause();
  setQuestion(quizz, [i]);
  choices.addEventListener("click", choiceSelected);
  choiceOne.classList.remove("good-answer");
  choiceOne.classList.remove("bad-answer");
  choiceTwo.classList.remove("good-answer");
  choiceTwo.classList.remove("bad-answer");
  choiceThree.classList.remove("good-answer");
  choiceThree.classList.remove("bad-answer");
  choiceFour.classList.remove("good-answer");
  choiceFour.classList.remove("bad-answer");
  choiceOne.removeAttribute("disabled");
  choiceTwo.removeAttribute("disabled");
  choiceThree.removeAttribute("disabled");
  choiceFour.removeAttribute("disabled");
}
