


var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);
//получаем числа от 1 до 6

var randomImageSource = "images/dice" + randomNumber1 + ".png"
 
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
 
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
// делаем выборку картинок от 1.png до 6.png

if( randomNumber1> randomNumber2) {
   document.querySelector("h1").innerHTML = "player 1 won";
}
else if (randomNumber1 < randomNumber2) {
   document.querySelector("h1").innerHTML = "player 2 won";
}
else {
   document.querySelector("h1").innerHTML = "draw";
}

//меняем расположение картинки слева




//меняем расположение картинки справа







//  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

//  var randomImageSource = "images/dice" + randomNumber1 + ".png";

//  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
//  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//  var randomImageSource2 = "images/dice" + randomNumber2 + ".png"
//  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
//  if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "player 1 won"
// }
//  else if (randomNumber1 < randomNumber2) {     document.querySelector("h1").innerHTML = "player 2 won" }
//  else {
//     document.querySelector("h1").innerHTML = "Draw" }



