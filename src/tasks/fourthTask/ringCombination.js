// Task 4
// Alice owns 4 rings: one agate ring, two identical diamond rings and one citrine ring.
// Every time Alice leaves the house she wears a different combination of her rings, with the following
// constraints:
// - She never wears rings on her thumbs.
// - She always wears at least one ring.
// - She always wears at least one ring on her right ring finger.
// - She wears a maximum of two rings on one finger.
// - Since the diamond rings look identical, they are interchangeable.
// - She can wear the rings on one or both hands.

// 2

// Write a program that tells Alice 365 possible combinations (and the number of total combinations) so
// that she can wear a different combination every day of the year.

/////////

// solution

// 1. Define a function getRingCombinations():
//    - Create an array "rings" containing ["agate", "diamond", "diamond", "citrine"].
//    - Create an empty array "combinations" to store the ring combinations.

//    - Generate combinations for one hand:
//      - For each element at index i from 0 to (length of rings - 1):
//        - For each element at index j from (i + 1) to (length of rings - 1):
//          - Add the combination [rings[i], rings[j]] to the "combinations" array.

//    - Generate combinations for both hands:
//      - For each combination in the "combinations" array:
//        - For each element in the "rings" array:
//          - If the element is not already in the combination:
//            - Create a new combination by adding the element to the existing combination.
//            - Add the new combination to the "combinations" array.

//    - Return the "combinations" array.

// 2. Call the getRingCombinations() function and store the result in a variable "ringCombinations".

// 3. Display the total number of combinations (length of "ringCombinations").

// 4. Display the first 365 possible combinations for a year:
//    - For each combination in "ringCombinations" at indices 0 to 364:
//      - Display the combination as a string (e.g., "agate, diamond, citrine").

function getRingCombinations() {
  const rings = ["agate", "diamond", "diamond", "citrine"];
  const combinations = [];

  for (let i = 0; i < rings.length; i++) {
    for (let j = i + 1; j < rings.length; j++) {
      combinations.push([rings[i], rings[j]]);
    }
  }

  for (let i = 0; i < combinations.length; i++) {
    for (let j = 0; j < rings.length; j++) {
      if (!combinations[i].includes(rings[j])) {
        const combination = [...combinations[i], rings[j]];
        combinations.push(combination);
      }
    }
  }

  return combinations;
}

const ringCombinations = getRingCombinations();
const numCombinations = ringCombinations.length;
console.log("Number of total combinations:", numCombinations);
console.log("365 possible combinations for a year:");

for (let i = 0; i < Math.min(numCombinations, 365); i++) {
  console.log(ringCombinations[i].join(", "));
}
