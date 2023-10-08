/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};
const excuseGenerator = () => {
  let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
  let action = ["eat ", "peed ", "crushed ", "broke "];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let whoRandom = Math.floor(Math.random() * who.length);
  let actionRandom = Math.floor(Math.random() * action.length);
  let whatRandom = Math.floor(Math.random() * what.length);
  let whenRandom = Math.floor(Math.random() * when.length);
  return (
    who[whoRandom] + action[actionRandom] + what[whatRandom] + when[whenRandom]
  );
};
let refresh = document.getElementById("refresh");
refresh.addEventListener("click", _ => {
  location.reload();
});
