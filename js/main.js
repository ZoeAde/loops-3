var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

//forEach(), map(), filter(), and reduce()

//Problem 1: 25, 28, 31, 23, 19
function objectAge(object) {
  for (var i = 0; i < object.length; i++) {
    console.log(object[i].age);
  }
}
objectAge(students);

// Problem 2:
// Derek, Boulder
// Liz, Denver
// Carl, Boulder
// Peter, Boulder
// Megan, Denver
function studentNameCity(object) {
  for (var i = 0; i < object.length; i++) {
    console.log(object[i].name,",", object[i].city);
  }
}
studentNameCity(students);

// Problem 3
// Derek is from Boulder
// Carl is from Boulder
// Peter is from Boulder

function studentFrom(object) {
  for (var i = 0; i < object.length; i++) {
    if (i !== 1 && i !== 4) {
    console.log(object[i].name + " is from " + object[i].city);
    }
  }
}
studentFrom(students);

// Problem 4
// Liz is older than 25
// Carl is older than 25

function older(object) {
  for (var i = 0; i < object.length; i++) {
    if (object[i].age > 25) {
    console.log(object[i].name + " is older than 25");
    }
  }
}
older(students);






