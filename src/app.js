/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excusegenerator();
};
let excusegenerator = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whIndx = Math.floor(Math.random() * who.length);
  let actIndex = Math.floor(Math.random() * action.length);
  let whaIndex = Math.floor(Math.random() * what.length);
  let wheIndex = Math.floor(Math.random() * when.length);

  return (
    who[whIndx] +
    " " +
    action[actIndex] +
    " " +
    what[whaIndex] +
    " " +
    when[wheIndex]
  );
};
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", _ => {
  location.reload();
});
