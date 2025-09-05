//creating an object
const student1 = {
  name: "Keerthana",
  age: 28,
  isStudent: true,
  greet: function () {
    return "Hello, my name is " + this.name;
  },
};

//accessing the property
console.log("Name is " + student1.name, "Age is " + student1.age);

//updating the property
student1.age = 30;
console.log(student1.age);

//accessing the property
console.log(
  "After updating : Name is " + student1.name,
  "Age is " + student1.age
);

//adding new property
student1.city = "Stockholm";
console.log(student1);

//deleting a property
delete student1.isStudent;
console.log(student1);

//calling a function
console.log(student1.greet());
