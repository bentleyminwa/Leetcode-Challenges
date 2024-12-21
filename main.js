// function that takes in any number of arguments and returns the sum of all those numbers
function add(...args) {
  let sum = 0;

  // for (let i = 0; i < args.length; i++) {
  //   sum += args[i];
  // }

  for (num of args) {
    sum += num;
  }

  return sum;
}

// console.log("sum all", add(2, 3, 4, 5));

function getNames(users) {
  const names = users.map((user) => {
    // evaluates to true if the object contains the property 'name'
    if (user.hasOwnProperty("name")) {
      return user.name;
    } else {
      console.log("user has no property 'name'.");
    }
  });
  return names;
}

const userNames = getNames([
  {
    id: 1,
    name: "Daryl",
  },
  {
    id: 2,
    name: "Rick",
  },
  {
    id: 3,
    name: "Maggie",
  },
]);

// console.log(userNames);

// closures
function outerFunc() {
  let count = 0;

  return function innerFunc() {
    count++;
    return count;
  };
}

const increment = outerFunc();

// console.log(increment());

function calculateDaysBetweenDates(date1, date2) {
  const diff = date2 - date1;
  const days = diff / (1000 * 60 * 60 * 24);
  return Math.abs(days);
}

const result = calculateDaysBetweenDates(
  new Date(2024, 1, 1),
  new Date(2024, 12, 31)
);
console.log(result);
