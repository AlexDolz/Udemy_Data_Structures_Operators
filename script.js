'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   startIndex: 2,
// });
// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   startIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// Nested destructuring
// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// Perezapis peremennih starim obrazom
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main]; // perezapis peremennih novim sposobom
// console.log(main, secondary);

// ********************** Spread operator **************************

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const goodNewArr = [1, 2, ...arr];
// console.log(goodNewArr);

// console.log(...goodNewArr); // 1 2 7 8 9
// console.log(1, 2, 7, 8, 9); // 1 2 7 8 9 the same

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngridients) {
//     console.log(mainIngredient);
//     console.log(otherIngridients);
//   },
// };

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// Join 2 or more arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);

// real world example
// const ingridients = [
//   prompt("Let's make pasta! Ingridient 1?"),
//   prompt('Ingridient 2?'),
//   prompt('Ingridient 1?'),
// ];
// console.log(ingridients);

// restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]) old way

// restaurant.orderPasta(...ingridients); // new way

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// ******************** rest operator *******************************

// 1. destructuring

// // spread, because on right side of =
// const arr = [1, 2, ...[3, 4]];

// // rest, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // Objects
// const { sat, ...weekdays } = restaurant.openingHours;

// console.log(weekdays);

// // 2. Functions
// const add = function (...numbers) {
//   // pack all into arrays
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

// restaurant.orderPizza('mushrooms');

// // ************************** short circuiting (||) **************

// // Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || 'Jonas'); // returns first value if its truthly
// console.log('' || 'Jonas'); // Jonas because '' false value
// console.log(true || 0); // true because true is true
// console.log(undefined || null); // null because undefined is false

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

// // restaurant.numGuests = 0; // not wokrs with 0, 0 is false
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// // ************************** short circuiting (&&) ****************

// console.log(0 && 'Jonas'); // 0 when first value is false
// console.log(7 && 'Jonas'); // Jonas. because 7 is true

// console.log('Hello' && 23 && null && 'Jonas'); // null, because null is first false value

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// // if there is no this, then goes forward and gives what after &&
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// // ********************?? Nullish coalescing operator*****************

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;

// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // ******************* Logical assignment operators ******************

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// // rest1.numGuests ||= 10; // the same as on top
// // rest2.numGuests ||= 10; // the same as on top

// // nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// // ************************ The For of loop *******************************

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// // console.log([...menu.entries()]);

// // ************************** object literall *****************************

// // const weekdays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// // const openingHours = {
// //   [weekdays[3]]: {
// //     open: 12,
// //     close: 22,
// //   },
// //   [weekdays[4]]: {
// //     open: 11,
// //     close: 23,
// //   },
// //   [`day-${2 + 4}`]: {
// //     open: 0, // Open 24 hours
// //     close: 24,
// //   },
// // };

// // const restaurant = {
// //   name: 'Classico Italiano',
// //   location: 'Via Angelo Tavanti 23, Firenze, Italy',
// //   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// //   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
// //   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// //   // ES6 enhanced object literals
// //   openingHours,

// //   order(starterIndex, mainIndex) {
// //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// //   },

// //   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
// //     console.log(
// //       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
// //     );
// //   },
// // };

// // *********************** Optional chaining ***********************

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open); // error

// // WITH optional chaining
// console.log(restaurant.openingHours.mon?.open); // only if Monday exists than open is works. If not undefined is returned, but not an error
// console.log(restaurant.openingHours?.mon?.open);

// // Example
// const weekdays2 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of weekdays2) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open || 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods Optional chaining
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays optional chaining
// const user = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(user[0]?.name ?? 'User array empty'); // Jonas

// // the same as on top
// if (user.length > 0) {
//   console.log(user[0].name);
// } else {
//   console.log('user array empty');
// }

// // **** Looping objects, Object(key), Object(value), Object(entries) ******

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += `${day}`;
// }

// console.log(openStr);

// // Propery VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Property ENTRIES
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// // **************************** Sets ****************************

// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size); // 3

// console.log(ordersSet.has('Pizza')); // true
// console.log(ordersSet.has('Bread')); // false

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// // ordersSet.clear(); // clear all Set

// console.log(ordersSet);

// // console.log(ordersSet[0]); // undefined. Not working. No indexes

// for (const order of ordersSet) {
//   console.log(order);
// } // looping also

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// ); // 3

// console.log(new Set('jonasschmedtmann').size);

// // *********************** Maps fundamental ***************************

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :)')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// rest.clear();

// const arr3 = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest.size);
// rest.clear(rest.size);
// // rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest.get([1, 2]));

// console.log(rest.get(arr));

// ************************ Maps iterations **************************

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct🎀'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }

// const answer = Number(prompt('Your naswer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// ********************** Strings **************************************
// Always returns a new string

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  //  B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat ☺');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas')); // object

console.log(typeof new String('jonas').slice(1)); // string

// -------------------------------

console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// Fix capitalization in name

const passenger = 'jOnAS'; // Jonas must be
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect); // Jonas

// Comparing emails

const email = 'hello@joans.io';
const loginEmail = '  Hello@Jonas.io  \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();

console.log(normalizedEmail); // hello@jonas.io

// replacing

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23';

console.log(announcement.replace('door', 'gate')); // replace only first word
console.log(announcement.replaceAll('door', 'gate')); // All passengers come to boarding gate 23. Boarding gate 23
console.log(announcement.replace(/door/g, 'gate')); // All passengers come to boarding gate 23. Boarding gate 23

// Booleans

const plane2 = 'A320neo';
console.log(plane2.includes('A320')); // true
console.log(plane2.includes('Boeing')); // false
console.log(plane2.startsWith('Air')); // false
console.log(plane2.startsWith('A320')); // true

if (plane2.startsWith('A320') && plane2.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};

checkBaggage('I have a laptop, some Food and the pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks adn a gun for protection');

// ************************Split and join*****************************

console.log('a+very+nice+string'.split('+'));

console.log('Jonas Schmedtmann'.split(' '));

const [firstname, lastname] = 'Jonas Schmedtmann'.split(' ');
console.log(firstname, lastname);

const newName = ['Mr.', firstname, lastname.toUpperCase()].join(' ');

console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1)); // the same result
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('alex dolz');

// *************************padStart, padEnd *****************************
// padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(434343454636567));
console.log(maskCreditCard('13424325436536'));

// ************************** Repeat *********************************

const message2 = 'Bad weather... All departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
