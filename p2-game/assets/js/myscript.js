update();

function update() {
  document.getElementById("user").innerHTML =
    "User's Score: " + (localStorage.getItem("User") ?? 0);

  document.getElementById("computer").innerHTML =
    "Computer's Score: " + (localStorage.getItem("Computer") ?? 0);

  document.getElementById("draw").innerHTML =
    "Match Drawn: " + (localStorage.getItem("Draw") ?? 0);
}

function press(a) {
  var words = ["Rock", "Paper", "Scissor", "Spock", "Lizzard"];

  var word = words[Math.floor(Math.random() * words.length)];

  if (a === word) {
    Winner("Draw");
  } else if (
    (a === "Rock" && word === "Scissor") ||
    (a === "Rock" && word === "Lizzard") ||
    (a === "Paper" && word === "Rock") ||
    (a === "Paper" && word === "Spock") ||
    (a === "Scissor" && word === "Paper") ||
    (a === "Scissor" && word === "Lizzard") ||
    (a === "Spock" && word === "Scissor") ||
    (a === "Spock" && word === "Rock") ||
    (a === "Lizzard" && word === "Spock") ||
    (a === "Lizzard" && word === "Paper")
  ) {
    Winner("User");
  } else {
    Winner("Computer");
  }

  update();

  document.getElementById("choice").innerHTML = "Computer's Choice: " + word;
}

function Winner(value) {
  let oldValue = localStorage.getItem(value) ?? 0;
  oldValue = +oldValue;

  localStorage.setItem(value, oldValue + 1);
}
