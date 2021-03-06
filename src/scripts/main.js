

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
    COMPLETED----------
*/
const parentContainer = document.querySelector(".output");
const planetSection = document.createElement("section");
planetSection.setAttribute("id", "planets");
planets.forEach(planet => {
  planetSection.textContent += `${planet}   `
})

parentContainer.appendChild(planetSection);

const planetEl = document.getElementById("planets");

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
    COMPLETED ----------------------
*/
const planetsUpper = planets.map(planet => planet.charAt(0).toLocaleUpperCase() + planet.substring(1));
console.log("UpperCase Planets",planetsUpper);


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    COMPLETED ---------------------------
*/

const theE = planets.filter(lookforE => lookforE.includes("e"));
console.log("planets with E in them",theE);




// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let sentenceFromWords = words.reduce((newWord, oldWord) => {
  return `${newWord} ` + oldWord
});
console.log(sentenceFromWords)