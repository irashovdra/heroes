import heroesTemplate from "../templates/heroes.hbs";
import heroes from "../data-heroes.json";
const body = document.querySelector("body");

const heroesList = heroesTemplate({ heroes });

body.insertAdjacentHTML("beforeend", heroesList);
