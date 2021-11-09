var fortuneInput;
var getFortuneButton;
var fortuneOutput;


var fortunes = [
  'drink boba teaaa',
  'floooof a cat',
  'smile smileeee smile',
  'wiggle your toesss',
  'do the happy dance',
  'rua rua a kitty',
  'drink moar waterr',
];


document.addEventListener("DOMContentLoaded", function(){
  getFortuneButton = document.getElementById("getFortuneButton");
  fortuneOutput = document.getElementById("fortuneOutput");
  fortuneInput = document.getElementById("fortuneInput");

  //executeButton.addEventListener("click", demonstrationFunction);
  getFortuneButton.addEventListener("click", function(){
    generateFortune();
    restyleOutput();
  });
});


function mouseMovedFunc(eventDetails) {

  var mouseX = eventDetails.screenX;
  var mouseY = eventDetails.screenY;

  console.log("Cursor is at: " + mouseX + "," + mouseY + ".");

  getFortuneButton.style.transform = "translate(" + mouseX + "px," + mouseY + "px)";
}

function generateFortune () {
  var currentInputText = fortuneInput.value;

  var randomFortuneIndex = Math.floor(Math.random()*fortunes.length);

  fortuneOutput.innerText = currentInputText + "," + "\n GOOD fortune will come to you if you " + fortunes[randomFortuneIndex] + "!";

  restyleOutput();
}

function restyleOutput() {
//border-type
  var borderstyle = [
    'solid',
    'dashed',
    'dotted',
  ];
  var randomBorderStyle = Math.floor(Math.random()*borderstyle.length);

  document.getElementById("mainBody").style.borderStyle = borderstyle[randomBorderStyle];

//font color
  var randomRed = Math.random() * 255;
  var randomGreen = Math.random() * 255;
  var randomBlue = Math.random() * 255;

  var outputColorString = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  fortuneOutput.style.color = outputColorString;

//border-color
  document.getElementById("mainBody").style.borderColor = outputColorString;

//
}
