function shoe(shoeName, productCode, quantity, valuePerItem) {
  //object constructor used to plan for multiple objects
  this.shoeName = shoeName; // initialise objects using "this."
  this.productCode = productCode;
  this.quantity = quantity;
  this.valuePerItem = valuePerItem;
}

let shoe1 = new shoe("nike", "NKE1234", 5, 1000); //shoe object created using the object constructor
let shoe2 = new shoe("adidas", "ADI4321", 3, 1500);
let shoe3 = new shoe("new balance", "NBE1324", 2, 800);
let shoe4 = new shoe("puma", "PMA4123", 6, 750);
let shoe5 = new shoe("converse", "CVRS3421", 3, 950);

let shoes = [shoe1, shoe2, shoe3, shoe4, shoe5]; //array of the shoe objects

function shoeSearch(shoes, shoeName) {
  //fuction used to search for  shoeName
  for (let i = 0; i < shoes.length; i++) {
    //for loop goes through the "shoe" array
    if (shoes[i].shoeName === shoeName) {
      // if shoeName entered matches a name in the array, result comes back true if not, false
      console.log("Yay! the shoe you're looking for is available"); // display message
      return; // return if true
    } else {
      console.log(
        "Apologies, the shoe you're looking for is currently not in our inventory"
      );
    }
  }
}
shoeSearch(shoes, "nike"); //call back function

function lowestValuePerItem(lowValue) {
  //create high order function to find lowest value per item
  lowValue.reverse(
    (
      firstShoe,
      secondShoe //used .reverse method.
    ) => (firstShoe.valuePerItem > secondShoe.valuePerItem ? -1 : 1) //teranary operator
  );
  console.log(
    `the shoe with the lowest value per item is the ${lowValue[0].shoeName} with ${lowValue[0].valuePerItem} `
  );
}

lowestValuePerItem(shoes); //callback function to use "shoe" function

function highestValuePerItem(highValue) {
  // create function to find highest value per item
  highValue.sort(
    (
      firstShoe,
      secondShoe //arrow function to excecute logic
    ) => (firstShoe.valuePerItem > secondShoe.valuePerItem ? -1 : 1) //use of teranary operator
  );

  console.log(
    `the shoe with the highest value per item is the ${highValue[0].shoeName} with ${highValue[0].valuePerItem} `
  );
}

highestValuePerItem(shoes); //call back function to use "shoe" array

function tableOrder(lowValue) {
  //function to re-ordeer table in ascending order of value per item
  lowValue.reverse(
    (
      firstShoe,
      secondShoe ///arrow function to excecute logic
    ) => (firstShoe.valuePerItem > secondShoe.valuePerItem ? -1 : 1) //teranary operator
  );
}

tableOrder(shoes); //callback function with "shoes" array

function updateInventory(property, shoeName, newProperty) {
  //function to update inventory with three parameters

  for (i = 0; i < property.length; i++) {
    // for loop to loop through array
    if (property[i].shoeName === shoeName) {
      // for loop will excecute if "if" statemnet is true. if shoeName entered matches the one on the "shoes" array code will allow updates
      property[i].productCode = newProperty.productCode; // will change product code
      property[i].quantity = newProperty.quantity; // will change quantity
      property[i].valuePerItem = newProperty.valuePerItem; // will change value per item
      property[i].shoeName = newProperty.shoeName; // will change shoe name
    }
  }
}

updateInventory(shoes, "nike", {
  // select array, then select shoeName you would like to change.
  shoeName: "jordan", // choose shoeName you would like to apply
  productCode: "JRD455", // choose productName you would like to apply
  quantity: 6, // choose quantity you would like to apply
  valuePerItem: 1200, // choose valuePerItem you would like to apply
});

console.log("updated table"); //heading for table
console.table(shoes); // displays array in table format
