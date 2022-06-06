var stuff = [
  "cars",
  "blankets",
  "sunflowers",
  "sky",
  "yellow",
  "code",
  "perfume",
  "coffee",
  "books"
];

stuff.forEach(function (item, index) {
  if (index % 2 === 0) {
    console.log(item);
  }
});

var removeItem = function (array, item) {
  var index = array.indexOf(item);

  if (index === -1) {
    console.log(`Sorry, no such item in this array`);
  } else {
    array.splice(index, 1);
    console.log(`Removing ${item}`);
  }
};

removeItem(stuff, "code");
console.log(stuff);
removeItem(stuff, "sky");
console.log(stuff);
removeItem(stuff, "snowflake");
console.log(stuff);

var s = stuff.filter(function (item) {
  return item.includes("s");
});

console.log(s);

var newArray = [];
for (var item of stuff) {
  if (item.includes("s")) {
    newArray.push(item);
  }
}

console.log(newArray);
