let person = {
  name: "Chandan",
  getName: function() {
    return this.name;
  }
};

let john = {
  name: "John"
};

let singh = {
  name: "Singh"
};

let srikanth = {
  name: "Srikanth"
};
console.log(person.getName());
console.log(person.getName.call(john, "hello"));
console.log(person.getName.apply(singh, [""]));

let get = person.getName.bind(srikanth);
console.log(get())
console.log(get())
console.log(get())
console.log(get())
console.log(get())