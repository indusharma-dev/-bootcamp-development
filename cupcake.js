function placeOrder(quantity, flavor) {
  let total = 0;
  if (flavor === "chocolate") {
    total = quantity * 2;
  } else if (flavor === "vanilla") {
    total = quantity * 1.5;
  } else {
    console.log("Invalid flavor");
  }
  return total;
}

console.log(placeOrder(10, "chocolate"));
console.log(placeOrder(5, "vanilla"));
console.log(placeOrder(10, "strawberry"));
