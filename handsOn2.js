const mobile = {
  brand: "Samsung",
  model: "Galaxy S22",
  price: 12000,
  call: function () {
    console.log("Calling from " + this.model);
  },
};

//ACCESS AND PRINT THE PROPERTIES
console.log(mobile.brand, mobile.model, mobile.price);

//UPDATE THE PRICE
mobile.price = 10000;
console.log("Price after updation " + mobile.price);

//ADDING NEW PROPERTY
mobile.color = "Red";
console.log(mobile);

//DELETING THE BRAND PROPERTY
delete mobile.brand;
console.log("After deletion :");

console.log(mobile);

//CALL THE METHOD
mobile.call();
