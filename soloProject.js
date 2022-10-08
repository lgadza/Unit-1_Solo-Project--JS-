/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

 */
let test = "Louis";

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/
let sum = 10 + 20;

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/

let random = Math.floor(Math.random() * 20);

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/
let me = {
  name: "Louis",
  surname: "Gadza",
  age: 24,
};

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/
delete me.age;

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/

me.skills = ["HTML", "CSS", "JavaScript"];

/* EXERCISE G


Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/

let skillsArr = Object.values(me.skills);
skillsArr.pop();
me.skills = skillsArr;
console.log(me);

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/

function dice() {
  let int = Math.floor(Math.random() * 6 + 1);
  return int;
}
console.log(dice());
/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/
function whoIsBigger(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(whoIsBigger(10, 10));

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/
function splitMe(str) {
  let array = [];
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    let capitalised = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    array.push(capitalised);
  }
  return array;
}
console.log(splitMe("Louis Gadza and Lelo and Anaa"));

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/

function deleteOne(str, boolean) {
  if (boolean === true) {
    return str.slice(1);
  } else if (boolean === false) {
    return str.slice(0, str.length - 1);
  }
}
console.log(deleteOne("Louis Gadza and Lelo and AnaaRe", false));

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/
function onlyLetters(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() !== str[i].toLowerCase() || str[i] === " ") {
      result += str[i];
    }
  }
  return result;
}

console.log(onlyLetters("I have 4 dogs!"));
/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/

function isThisAnEmail(str) {
  if (str.includes("@gmail.com")) {
    return true;
  } else {
    return false;
  }
}
console.log(isThisAnEmail("louisgadza@gmail.com"));
/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/
function whatDayIsIt(x) {
  switch (x) {
    case 1:
      console.log("Current day of the week: Sun");
      break;
    case 2:
      console.log("Current day of the week: Mon");
      break;
    case 3:
      console.log("Current day of the week: Tue");
      break;
    case 4:
      console.log("Current day of the week: Wen");
      break;
    case 5:
      console.log("Current day of the week: Thu");
    case 6:
      console.log("Current day of the week: Fri");
      break;
    case 7:
      console.log("Current day of the week: Sat");
      break;
    default:
      console.log("The number you entered is not valid");
  }
}
whatDayIsIt(8);

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/
let results = rollTheDices(5);

console.log(results[0]);
console.log(results[1]);

function rollTheDices(n) {
  let valueArr = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let value = dice();
    valueArr.push(value);
    sum += value;
  }
  return [valueArr, sum];
}
/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
TODO 4

*/
// date=dd/mm/yy
// function howManyDays(d,m,y) {
//   let currentDate;
//   if(m)

// }

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/
function isTodayMyBirthday(day) {
  if (day === 11) {
    return true;
  } else {
    return false;
  }
}
console.log(isTodayMyBirthday(1));

// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.
TODO-----5

*/
let obj = {
  name: "Louis",
  surname: "Gadza",
  age: 24,
};

function deleteProp(obj, str) {
  // delete obj.str;
  // let objEntres = Object.entries(obj);
  delete obj.str;
  console.log(obj);
}
deleteProp(obj, "name");
// console.log(
//   deleteOne(
//     {
//       name: "Louis",
//       surname: "Gadza",
//       age: 24,
//     },
//     "surname"
//   )
// );

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },

  {
    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },

  {
    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

function oldestMovie(arr) {
  let productionYr = [];
  for (let i = 0; i < arr.length; i++) {
    productionYr.push(Number.parseInt(arr[i].Year));
  }
  let max = productionYr[0];
  for (let i = 1; i < productionYr.length; ++i) {
    if (productionYr[i] < max) {
      max = productionYr[i];
    }
  }
  return max;
}
console.log(oldestMovie(movies));

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/
function countMovies(movies) {
  let count = 0;
  for (let i = 0; i < movies.length; i++) {
    count++;
  }
  return count;
}
console.log(countMovies(movies));

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/
function onlyTheTitles(movies) {
  let moveTitles = [];
  for (let i = 0; i < movies.length; i++) {
    moveTitles.push(movies[i].Title);
  }
  return moveTitles;
}
console.log(onlyTheTitles(movies));
/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/
function onlyInThisMillennium(arr) {
  let newMovies = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].Year >= 2000) {
      newMovies.push(arr[i]);
    }
  }
  return newMovies;
}
console.log(onlyInThisMillennium(movies));

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/
function getMovieById(id) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === id) {
      return movies[i];
    }
  }
}
console.log(getMovieById("tt0848228"));

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/
function sumAllTheYears(arr) {
  let sum = 0;
  let currentYr = 2022;
  let years;

  for (let i = 0; i < arr.length; i++) {
    years = currentYr - Number.parseInt(arr[i].Year);
    sum += years;
  }
  return sum;
}
console.log(sumAllTheYears(movies));
/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/

function searchByTitle(str) {
  let filterArr = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.toLocaleUpperCase().includes(str.toLocaleUpperCase())) {
      filterArr.push(movies[i]);
    }
    // return title;
  }
  return filterArr;
}
console.log(searchByTitle("game"));
/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.
*/
function searchAndDivide(str) {
  let object = {};
  let matchArr = [];
  let unmatchArr = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.includes(str)) {
      matchArr.push(movies[i]);
    } else if (!movies[i].Title.includes(str)) {
      unmatchArr.push(movies[i]);
    }
  }
  object.match = matchArr;
  object.unmatch = unmatchArr;
  return object;
}
console.log(searchAndDivide("game"));

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/
function removeIndex(n) {
  let filteredArr = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i] !== movies[n]) {
      filteredArr.push(movies[i]);
    }
  }
  return filteredArr;
}
console.log(removeIndex(2));

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/
function halfTree(n) {
  let tree = "";
  for (let i = 0; i < n; i++) {
    let branch = "";
    branch += "*";
    tree += branch;
    console.log(tree);
  }
}

halfTree(3);

/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****
TODO LAst

*/
function tree(n) {
  let tree2 = "";
  for (let i = 0; i < n; i++) {
    let branch = "";

    branch += "*";
    tree2 += branch;
    console.log(tree2);
  }
}

halfTree(3);

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/

function isItPrime(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isItPrime(2));
