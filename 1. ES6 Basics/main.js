function retrieveFullName(fullName) {
  return fullName;
}

let isActive = true;
let isComplete = true;

console.log(isActive || retrieveFullName("Alex Johnson"));

//Template literals

let firstName = "Jane";
let lastName = "Smith";

console.log(firstName + " " + lastName, `${firstName} ${lastName}`);

//Ternary operator

const displayRecipeOne = true;

function retrieveRecipeOneName(recipeTitle) {
  return recipeTitle;
}

function retrieveRecipeTwoName(recipeTitle) {
  return recipeTitle;
}

if (displayRecipeOne) {
  console.log(retrieveRecipeOneName("Burger"));
} else {
  console.log(retrieveRecipeTwoName("Pepsi"));
}

displayRecipeOne
  ? console.log(retrieveRecipeOneName("Burger"))
  : console.log(retrieveRecipeTwoName("Pepsi"));

const itemId = 2;
const productTitle = "Product Samsung Galaxy";
const reviewScore = 4;

const item = {
  itemId,
  productTitle,
  reviewScore,
};

console.log(item);

const item2 = {
  description: "Item 2 details",
  itemId,
  productTitle,
  reviewScore,
};

const { description: itemDescription } = item2;

console.log(itemDescription);

const numArray = [5, 6, 7, 8];

let firstNum = numArray[0];
let secondNum = numArray[1];

console.log(firstNum, secondNum);

const [
  numOne,
  numTwo,
  numThree,
  numFour,
] = numArray;

console.log(numOne, numTwo, numThree, numFour);

//default parameters, spread, and rest operators

function multiplyNumbers(factorOne = 3, factorTwo = 4) {
  console.log(factorOne, factorTwo);
  return factorOne * factorTwo;
}

console.log(multiplyNumbers(20));

const additionalArray = [8, 9, 10];
const additionalArray2 = [13, 14, 15];

console.log([1000, ...additionalArray, 80, ...additionalArray2, 20000]);

function displayDetails(info, ...details) {
  console.log(info, details);

  return "Alex Johnson";
}

console.log(displayDetails(11, 12, 13, 14, 15, 16, 17, 18, 19));

//map, filter, find, some, every, includes, indexOf, findIndex

const peopleArray = [
  {
    name: "Individual 01",
    age: 32,
    location: "Canada",
  },
  {
    name: "Individual 02",
    age: 25,
    location: "Canada",
  },
  {
    name: "Individual 03",
    age: 37,
    location: "France",
  },
  {
    name: "Individual 04",
    age: 45,
    location: "Japan",
  },
];

let listNames = peopleArray.map((personDetail, index) => {
  console.log(personDetail, index);
  return `${personDetail.name} age is ${personDetail.age}`;
});

console.log(listNames);

let personFromCanada = peopleArray.find((personDetail, index) => {
  return personDetail.location === "Canada";
});

console.log(personFromCanada);

let allPeopleFromCanada = peopleArray.filter((personDetail, index) => {
  return personDetail.location === "Canada";
});

console.log(allPeopleFromCanada);

let isAgeAboveThirty = peopleArray.some((personDetail) => {
  return personDetail.age > 30;
});

console.log(isAgeAboveThirty);

let isAgeAboveTwenty = peopleArray.every((personDetail) => {
  return personDetail.age > 20;
});

console.log(isAgeAboveTwenty);

const fruitBasket = ["grape", "mango", "berry"];

console.log(fruitBasket.includes("Alex"), fruitBasket.indexOf("Alex"));

let indexFromFrance = peopleArray.findIndex((personDetail) => {
  return personDetail.location === "Germany";
});

console.log(indexFromFrance);

let productListElement = document.querySelector(".products-list");

function displayProducts(products) {
  productListElement.innerHTML = products
    .map((item) => `<p>${item.title}</p>`)
    .join(" ");
}

async function fetchProductList() {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });

    const data = await response.json();

    console.log(data);

    if (data?.products?.length > 0) displayProducts(data?.products);
  } catch (error) {
    console.log(error);
  }
}

fetchProductList();
