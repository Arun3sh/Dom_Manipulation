// For changing the color of para using tag name
// function myFunction() {
//   var a = document.getElementsByTagName("p")[0];
//   var b = document.getElementsByTagName("p")[1];
//   a.style.color ="red";
//   b.style.color ="blue";
// }

//task - 2
function myFunction() {
var a = document.getElementsByTagName("p")[0].innerHTML;
var newPara = document.createElement("p");
newPara.innerHTML = a;
document.getElementById("insert").appendChild(newPara);

var b = document.getElementsByTagName("p")[1].innerHTML;
var newPara1 = document.createElement("p");
newPara1.innerHTML = b;
document.getElementById("insert").appendChild(newPara1);

}