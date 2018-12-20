(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
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
  planetSection.textContent += `${planet}   `;
});
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
console.log("UpperCase Planets", planetsUpper);
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    COMPLETED ---------------------------
*/

const theE = planets.filter(lookforE => lookforE.includes("e"));
console.log("planets with E in them", theE); // Use the reduce method to create a sentence from the words in the following array

const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
let sentenceFromWords = words.reduce((newWord, oldWord) => {
  return `${newWord} ` + oldWord;
});
console.log(sentenceFromWords);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0VBLE1BQU0sT0FBTyxHQUFHLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsRUFBc0MsU0FBdEMsRUFBaUQsUUFBakQsRUFBMkQsUUFBM0QsRUFBcUUsU0FBckUsQ0FBaEI7QUFFQTs7Ozs7OztBQU1BLE1BQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLFNBQXZCLENBQXhCO0FBQ0EsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBdEI7QUFDQSxhQUFhLENBQUMsWUFBZCxDQUEyQixJQUEzQixFQUFpQyxTQUFqQztBQUNBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLE1BQU0sSUFBSTtBQUN4QixFQUFBLGFBQWEsQ0FBQyxXQUFkLElBQThCLEdBQUUsTUFBTyxLQUF2QztBQUNELENBRkQ7QUFJQSxlQUFlLENBQUMsV0FBaEIsQ0FBNEIsYUFBNUI7QUFFQSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixTQUF4QixDQUFqQjtBQUVBOzs7Ozs7Ozs7QUFRQSxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsR0FBUixDQUFZLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBUCxDQUFjLENBQWQsRUFBaUIsaUJBQWpCLEtBQXVDLE1BQU0sQ0FBQyxTQUFQLENBQWlCLENBQWpCLENBQTdELENBQXJCO0FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxtQkFBWixFQUFnQyxZQUFoQztBQUdBOzs7Ozs7Ozs7QUFTQSxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBUixDQUFlLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBVCxDQUFrQixHQUFsQixDQUEzQixDQUFiO0FBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBWixFQUFxQyxJQUFyQyxFLENBS0E7O0FBQ0EsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixNQUFqQixFQUF5QixPQUF6QixFQUFrQyxLQUFsQyxFQUF5QyxLQUF6QyxFQUFnRCxNQUFoRCxFQUF3RCxLQUF4RCxFQUErRCxLQUEvRCxFQUFzRSxRQUF0RSxFQUFnRixPQUFoRixFQUF5RixNQUF6RixFQUFpRyxLQUFqRyxFQUF3RyxRQUF4RyxDQUFkO0FBRUEsSUFBSSxpQkFBaUIsR0FBRyxLQUFLLENBQUMsTUFBTixDQUFhLENBQUMsT0FBRCxFQUFVLE9BQVYsS0FBc0I7QUFDekQsU0FBUSxHQUFFLE9BQVEsR0FBWCxHQUFnQixPQUF2QjtBQUNELENBRnVCLENBQXhCO0FBR0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlxuXG5jb25zdCBwbGFuZXRzID0gW1wibWVyY3VyeVwiLCBcInZlbnVzXCIsIFwiZWFydGhcIiwgXCJtYXJzXCIsIFwianVwaXRlclwiLCBcInNhdHVyblwiLCBcInVyYW51c1wiLCBcIm5lcHR1bmVcIl1cblxuLypcbiAgICBVc2UgdGhlIGZvckVhY2ggbWV0aG9kIHRvIGFkZCB0aGUgbmFtZSBvZiBlYWNoIHBsYW5ldFxuICAgIHRvIGEgc2VjdGlvbiBlbGVtZW50IGluIHlvdXIgSFRNTCB3aXRoIGFuIGlkIG9mIFwicGxhbmV0c1wiLlxuICAgIFVzZSBzdHJpbmcgdGVtcGxhdGVzIHRvIGNvbnN0cnVjdCB0aGUgRE9NIGVsZW1lbnRzLlxuICAgIENPTVBMRVRFRC0tLS0tLS0tLS1cbiovXG5jb25zdCBwYXJlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKTtcbmNvbnN0IHBsYW5ldFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbnBsYW5ldFNlY3Rpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwbGFuZXRzXCIpO1xucGxhbmV0cy5mb3JFYWNoKHBsYW5ldCA9PiB7XG4gIHBsYW5ldFNlY3Rpb24udGV4dENvbnRlbnQgKz0gYCR7cGxhbmV0fSAgIGBcbn0pXG5cbnBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwbGFuZXRTZWN0aW9uKTtcblxuY29uc3QgcGxhbmV0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYW5ldHNcIik7XG5cbi8qXG4gICAgVXNlIHRoZSBtYXAgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBhcnJheSB3aGVyZSB0aGVcbiAgICBmaXJzdCBsZXR0ZXIgb2YgZWFjaCBwbGFuZXQgaXMgY2FwaXRhbGl6ZWQuIFVzZSB0aGVcbiAgICBgdG9VcHBlckNhc2UoKWAgbWV0aG9kIG9uIHN0cmluZ3MuXG5cbiAgICBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvdG9VcHBlckNhc2VcbiAgICBDT01QTEVURUQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbmNvbnN0IHBsYW5ldHNVcHBlciA9IHBsYW5ldHMubWFwKHBsYW5ldCA9PiBwbGFuZXQuY2hhckF0KDApLnRvTG9jYWxlVXBwZXJDYXNlKCkgKyBwbGFuZXQuc3Vic3RyaW5nKDEpKTtcbmNvbnNvbGUubG9nKFwiVXBwZXJDYXNlIFBsYW5ldHNcIixwbGFuZXRzVXBwZXIpO1xuXG5cbi8qXG4gICAgVXNlIHRoZSBmaWx0ZXIgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBhcnJheSB0aGF0XG4gICAgY29udGFpbnMgcGxhbmV0cyB3aXRoIHRoZSBsZXR0ZXIgJ2UnLiBVc2UgdGhlIGBpbmNsdWRlcygpYFxuICAgIG1ldGhvZCBvbiBzdHJpbmdzLlxuXG4gICAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL2luY2x1ZGVzXG4gICAgQ09NUExFVEVEIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cblxuY29uc3QgdGhlRSA9IHBsYW5ldHMuZmlsdGVyKGxvb2tmb3JFID0+IGxvb2tmb3JFLmluY2x1ZGVzKFwiZVwiKSk7XG5jb25zb2xlLmxvZyhcInBsYW5ldHMgd2l0aCBFIGluIHRoZW1cIix0aGVFKTtcblxuXG5cblxuLy8gVXNlIHRoZSByZWR1Y2UgbWV0aG9kIHRvIGNyZWF0ZSBhIHNlbnRlbmNlIGZyb20gdGhlIHdvcmRzIGluIHRoZSBmb2xsb3dpbmcgYXJyYXlcbmNvbnN0IHdvcmRzID0gW1wiVGhlXCIsIFwiZWFybHlcIiwgXCJiaXJkXCIsIFwibWlnaHRcIiwgXCJnZXRcIiwgXCJ0aGVcIiwgXCJ3b3JtXCIsIFwiYnV0XCIsIFwidGhlXCIsIFwic2Vjb25kXCIsIFwibW91c2VcIiwgXCJnZXRzXCIsIFwidGhlXCIsIFwiY2hlZXNlXCJdO1xuXG5sZXQgc2VudGVuY2VGcm9tV29yZHMgPSB3b3Jkcy5yZWR1Y2UoKG5ld1dvcmQsIG9sZFdvcmQpID0+IHtcbiAgcmV0dXJuIGAke25ld1dvcmR9IGAgKyBvbGRXb3JkXG59KTtcbmNvbnNvbGUubG9nKHNlbnRlbmNlRnJvbVdvcmRzKSJdfQ==
