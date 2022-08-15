function MakingASandwich() {
  let sandwich = [];

  //get two slices of bread.
  sandwich.push("bread");
  sandwich.push("bread");
  console.log("Sandwich components", sandwich);

  //Spread peanut butter on one piece of bread.
  sandwich[0] = "bread covered in peanut butter";
  console.log("Sandwich components", sandwich);

  //Spread jelly on the other piece of bread.
  sandwich[1] = "bread covered in jelly";
  console.log("Sandwich components", sandwich);

  //Put the two slices of bread together.
  let result = sandwich[0] + " and " + sandwich[1];
  return result;
}

console.log("Go to grocery store");
console.log(MakingASandwich());
console.log("Eat the sandwich");
