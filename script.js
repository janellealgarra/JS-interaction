var valueInput = document.getElementById("half-input");
var solveButton = document.getElementById("half-button");
var nameInput = document.getElementById("fortune-input");
var fortuneButton = document.getElementById("fortune-button");
var fortuneOutput = document.getElementById("fortune-output");


solveButton.addEventListener("click", halfNumber);

function halfNumber(){
  var x = valueInput.value;
  var y = parseFloat(x);
  console.log("half of your number " + x + " is equal to " + x/2);
  alert(y/2);
}

fortuneButton.addEventListener("click", fortune);

function fortune(){
  var colors = ["pink: ur a softboi", "purple: u shady af", "red: u scery", "blue: u kalm like zen", "orange: u sweet like citrus", "yellow: u shiny boi", "green: u like organic dirt", "rainbow: u amazeballs of a hooman"];
  var colorPicker = Math.floor(Math.random() * colors.length);
  var name = nameInput.value;
  fortuneOutput.innerHTML = name + " your vibe is " + colors[colorPicker];
  restyle();
}

function restyle(){
  var r = Math.random() * 255;
  var g = Math.random() * 255;
  var b = Math.random() * 255;

  var change = "rgb(" + r + "," + g + "," + b + ")"

  fortuneOutput.style.color = change;
}
