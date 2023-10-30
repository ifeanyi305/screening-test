// A math teacher gives his students the following problem:
// Solve the following three tasks and create three more in the same
// style:
// 364 * 2475 = x
// 308 * 2925 = x
// 165 * 5460 = x
// The students quickly realize that the factor is always 900900.
// The lazy teacher doesn’t want to calculate every single equation the students have come up with.
// Therefore, he prefers a list of all possible products of two factors that add up to 900900, in ascending
// order by the first factor, where the first factor should always be smaller than the second factor.
// 900900 = 1 * 900900
// = 2 * 450450
// = 3 * 300300
// ...
// Write a program that outputs such a list so that the lazy teacher can quickly check the correct results.

//////////

// Solution
// 1. Define a function findFactorPairs(target):
//    - Create an empty list factorPairs to store the factor pairs.
//    - Iterate from i = 1 to the square root of target:
//      - If target is divisible by i (i.e., target % i == 0):
//        - Calculate factor1 = i
//        - Calculate factor2 = target / i
//        - Add [factor1, factor2] to factorPairs.
//    - Return factorPairs.

// 2. Define a function generateFactorPairs(target):
//    - Call findFactorPairs(target) and store the result in factorPairs.
//    - Filter factorPairs to keep only pairs where factor1 is less than or equal to factor2.
//    - Return the filtered factorPairs.

// 3. Set the target variable to 900900.

// 4. Call generateFactorPairs(target) and store the result in factorPairs.

// 5. Iterate over factorPairs and print each pair in the format "factor1 * factor2 = target" where target is 900900.

function findFactorPairs(target) {
  const factorPairs = [];
  
  for (let i = 1; i <= Math.sqrt(target); i++) {
    if (target % i === 0) {
      const factor1 = i;
      const factor2 = target / i;
      factorPairs.push([factor1, factor2]);
    }
  }
  
  return factorPairs;
}

function generateFactorPairs(target) {
  const factorPairs = findFactorPairs(target);
  const result = factorPairs.filter(pair => pair[0] <= pair[1]);
  return result;
}

const target = 900900;
const factorPairs = generateFactorPairs(target);

for (const pair of factorPairs) {
  console.log(pair[0] + ' * ' + pair[1] + ' = ' + target);
}
