function hide() {
  var x = document.getElementById("res");
  x.style.display = "none";
  x.style.color = "#37593B";
  var comp = document.getElementById("comp");
  comp.className = "rpsComp";
}

hide();

function randomNumber() {
  return Math.floor(Math.random() * 3) + 1;
}

function res(rps) {
  hide();
  var x = randomNumber();
  var res = document.getElementById("res");
  setTimeout(function () {
    res.style.display = "block";
    res.innerHTML = "3";
  }, 200);
  setTimeout(function () {
    res.innerHTML = "2";
  }, 500);
  setTimeout(function () {
    res.innerHTML = "1";
  }, 700);

  console.log(rps);
  console.log(x);
  console.log(res);
  setTimeout(function () {
    res.innerHTML = result(rps, x, res);
  }, 1000);
}

function result(x, a, res) {
  var comp = document.getElementById("comp");
  switch (x) {
    case "rock":
      if (a == "1") {
        comp.className = "rpsComp rock";
        res.style.color = "black";
        return "Berabere";
      } else if (a == "2") {
        comp.className = "rpsComp paper";
        res.style.color = "red";
        return "Kaybettin";
      } else {
        comp.className = "rpsComp scissor";
        res.style.color = "green";
        return "Kazandın";
      }
    case "paper":
      if (a == "1") {
        comp.className = "rpsComp rock";
        res.style.color = "green";
        return "Kazandın";
      } else if (a == "2") {
        comp.className = "rpsComp paper";
        res.style.color = "black";
        return "Berabere";
      } else {
        comp.className = "rpsComp scissor";
        res.style.color = "red";
        return "Kaybettin";
      }
    default:
      if (a == "1") {
        comp.className = "rpsComp rock";
        res.style.color = "red";
        return "Kaybettin";
      } else if (a == "2") {
        comp.className = "rpsComp paper";
        res.style.color = "green";
        return "Kazandın";
      } else {
        comp.className = "rpsComp scissor";
        res.style.color = "black";
        return "Berabere";
      }
  }
}
