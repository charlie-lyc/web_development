// import animals, { createAnimal } from "./data";
// console.log(animals);

/* Destructing Array and Object */
// const [animal1, animal2] = animals;
// console.log(animal1);
// console.log(animal2);

/* Property Name must be same */
// const { name, sound } = animal1;
/* Set Default Value: 만약 해당 키의 값이 없으면 디폴트 값으로 대체 */
// const { name = "Fluffy", sound = "Purr" } = animal1;
// console.log(name);
// console.log(sound);

/* Rename the Value */
// const { name: animal1Name, sound: animal1Sound } = animal1;
// console.log(name);
// console.log(sound);
// console.log(animal1Name);
// console.log(animal1Sound);

/* Destructing Nested Object */
// const { feedingRequirements } = animal1;
// console.log(feedingRequirements);

/* Rename the Value in Nested Object */
// const {
//   feedingRequirements: { food, water }
// } = animal1;
// console.log(feedingRequirements); // ReferenceError!!!
// console.log(food);
// console.log(water);

/* Use Specific Function from the Module */
// const kittie = createAnimal(animal1);
// console.log(kittie);
// const [animalName, makeSound] = kittie;
// console.log(animalName);
// makeSound();

/*** CHALLENGE: uncomment the code below and see the car stats rendered ***/
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
