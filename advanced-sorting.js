var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


//sort by name
students.sort(function(a,b){
  var nameA = a.name;
  var nameB = b.name;

  //Sorts Names in Alphabetical Order
  if (nameA < nameB) {
      return -1;
  }

  if (nameA > nameB) {
      return 1;
  }

    // names must be equal
  else if(nameA === nameB) {
    if(a.age < b.age){
    //FLIP and return
      return b.age-a.age;
    }
  }
});
console.log(students);