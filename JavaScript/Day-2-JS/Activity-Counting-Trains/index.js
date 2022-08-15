// const divisbleBy3 = [];
// for (let n = 1; n < 100; n++) {
//   if (n % 3 === 0) {
//     divisbleBy3.push(n);
//   }
// }

// function findAllMultiples(factor, limit) {
//   let multiples = [];
//   for (let n = 1; n < limit; n++) {
//     if (n % factor === 0) {
//       multiples.push(n);
//     }
//   }
//   return multiples;
// }

// const allDivisbleBy4Numbers = findAllMultiples(5, 1000);
// console.log(allDivisbleBy4Numbers);

// console.log(divisbleBy3);

// let n = 1;
// let sum = 0;
// while (n < 101) {
//   sum += 4 * n + 5;
//   n += 1;
// }

// console.log(sum);

//const cars = ["S1", "S1", "S1", "T1", "S1", "T1"];
//const count = {};
//for (let i = 0; i < cars.length; i++) {
//  if (!count[cars[i]] && cars[i] === "S1") count[cars[i]] = 0;
//  if (cars[i] === "S1") count[cars[i]] += 1;
//}

//console.log(count);

let newInventoryCarModels = ["S1", "S1", "S2", "S1", "S2", "S1"];
let newInventoryCarTypes = [
  "StockCar",
  "Refrigerator",
  "StockCar",
  "Lorrie",
  "Lorrie",
  "Lorrie",
];
let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951];

let carModels = 0;
let totalCarmodels = 0;

while (carModels < newInventoryCarModels.length) {
  totalCarmodels++;
  carModels++;
}
console.log("Here are the total amount of cars: " + totalCarmodels);

let typeS1count = 0;
let typeT1count = 0;
for (let i = 0; i < newInventoryCarModels.length; i++) {
  if (newInventoryCarModels[i] === "S1") typeS1count++;
  if (newInventoryCarModels[i] === "T2") typeT1count++;
}
console.log("Numbers of S1 cars is:", typeS1count);

let lorriecount = 0;

for (let i = 0; i < newInventoryCarTypes.length; i++) {
  if (newInventoryCarTypes[i] === "Lorrie") lorriecount++;
}
console.log("Amount of Lorrie cars:", lorriecount);

let totalValue = 0;

for (let i = 0; i < newInventoryYearBuilt.length; i++) {
  totalValue += 2022 - newInventoryYearBuilt[i];
}

let averageYear = totalValue / newInventoryYearBuilt.length;
console.log("THe average is:", averageYear);
