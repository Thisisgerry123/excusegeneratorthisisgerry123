/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.body.style.backgroundColor = "#678";

  let who = [
    "The dog",
    "My grandma",
    "Tony Hinchcliffe",
    "Brett Kreischer",
    "The mailman",
    "My bird",
    "Avatar Aang",
    "DeezNuts",
    "Ernesto the chicken"
  ];
  const personName = chooseRandomItem(who);

  let action = [
    "ate",
    "peed on",
    "lost",
    "stole",
    "crushed",
    "ran over",
    "sent an air strike on",
    "broke",
    "ripped up",
    "sliced",
    "demolished",
    "nuked"
  ];
  const whatDid = chooseRandomItem(action);

  let what = [
    "my homework",
    "my PlayStation 5",
    "my phone",
    "my car keys",
    "the car",
    "my textbook",
    "on Israel",
    "my house",
    "my backyard",
    "my computer"
  ];
  const objectBroke = chooseRandomItem(what);

  let when = [
    "before the class",
    "after church",
    "before church",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
    "during my class",
    "after recess"
  ];
  const timeBroke = chooseRandomItem(when);

  const newExcuse = `${personName} ${whatDid} ${objectBroke} ${timeBroke};`;

  const p = document.querySelector("p");
  p.textContent = newExcuse;
};

function chooseRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
