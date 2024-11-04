function getUserName(userName) {
  return userName;
}

let hasError = false;
let isLoading = false;

console.log(hasError || getUserName("John Doe"));

//Template literals

let firstName = "Jane";
let lastName = "Smith";

console.log(firstName + " " + lastName, `${firstName} ${lastName}`);

//Ternary operator

const showDessert = true;

function getDessertName(dessertName) {
  return dessertName;
}

function getDrinkName(drinkName) {
  return drinkName;
}

showDessert
  ? console.log(getDessertName("Cake"))
  : console.log(getDrinkName("Coffee"));

const itemID = 2;
const itemName = "Smartwatch";
const itemRating = 4.5;

const item = {
  id: itemID,
  name: itemName,
  rating: itemRating,
};

console.log(item);

const item2 = {
  description: "Description of Item 2",
  ...item, // Spread operator to copy properties
};

console.log(item2.description);

const numbersArray = [5, 6, 7, 8];

let getFirstValue = numbersArray[0];
let getSecondValue = numbersArray[1];

console.log(getFirstValue, getSecondValue);

const [firstElement, secondElement, thirdElement, fourthElement] = numbersArray;

console.log(
  firstElement,
  secondElement,
  thirdElement,
  fourthElement
);

//default parameters, spread and rest operators

function multiplyTwoNumbers(num1 = 3, num2 = 4) {
  console.log(num1, num2);
  return num1 * num2;
}

console.log(multiplyTwoNumbers(15));

const colorArray = [10, 11, 12];
const anotherColorArray = [13, 14, 15];

console.log([2000, ...colorArray, 20, ...anotherColorArray, 3000]);

function gatherInfo(identifier, ...remainingInfo) {
  console.log(identifier, remainingInfo);

  //

  return "Additional Information";
}

console.log(gatherInfo("item-123", "data 1", "data 2", "data 3"));

//map, filter, find, some, every, includes, indexOf, findIndex

const people = [
  {
    name: "Alice",
    age: 25,
    country: "Canada",
  },
  {
    name: "Bob",
    age: 32,
    country: "USA",
  },
  {
    name: "Charlie",
    age: 41,
    country: "UK",
  },
  {
    name: "David",
    age: 54,
    country: "Australia",
  },
];

let getAllPeopleNames = people.map((person, index) => {
  console.log(person, index);
  return `${person.name} is ${person.age} years old`;
});

console.log(getAllPeopleNames);

let getPersonFromCanada = people.find((person) => {
  return person.country === "Canada";
});

console.log(getPersonFromCanada);

let getAllPeopleFromUSA = people.filter((person) => {
  return person.country === "USA";
});

console.log(getAllPeopleFromUSA);

let isThereAPersonAbove40 = people.some((person) => {
  return person.age > 40;
});

console.log(isThereAPersonAbove40);

let areAllPeopleAbove20 = people.every((person) => {
  return person.age > 20;
});

console.log(areAllPeopleAbove20);

const vegetables = ["tomato", "potato", "carrot"];

console.log(vegetables.includes("broccoli"), vegetables.indexOf("broccoli"));

let getIndexForPersonFromUK = people.findIndex((person) => {
  return person.country === "UK";
});

console.log(getIndexForPersonFromUK);

let getProductListElement = document.querySelector(".product-list");

function displayProducts(products) {
  getProductListElement.innerHTML = products
    .map((product) => `<li>${product.name