'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order (mainIngredients , ...ingredients) {
    console.log("main ingredients", mainIngredients);
    console.log(`voici votre commande .. ${ingredients} `)
  }

};

const people = ({age= 18, name ="bailla"} ) => {
  //iformation = {name , age}
  console.log(name, age)

}

const information1 = {
  name : "binta ",

}

const {age, na } = information1


people(information1)

/// spread operators 
const tab = [11, 3 , 5]

// const tab2 = [1, 2, tab[0], tab[1], tab[2]]

const tab2 = [1, 2, ...tab]

// console.log("sans ", tab2)
// console.log("avec ",...tab2)
// console.log(2, 4, 4, 5,3)
// console.log(`$le tableau {}`)

const tab3  = [...tab, ...tab2]

console.log(tab3);

const tab3copy = [...tab3]

tab3copy[0] = "hello"

console.log("tab3", tab3)
console.log("tab3copy", tab3copy)


const newMenu = [...restaurant.mainMenu, "salade"]

console.log(newMenu)

const completeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]


console.log(completeMenu)

const name = "Barry"

const name1 = [...name, "e"]

console.log(name1)



const ingredients = [
  // prompt("Entrez le premier ingredient"),
  // prompt(" ingredient 2"),
  // prompt(" ingredient 3 "), 
]

console.log(restaurant.order(...ingredients))

//objets 

const restaurantCopy = {...restaurant, founder: "sadou", isOpen : true};
console.log(restaurantCopy)


/// Rest patern and parameter

const arr0 = [2, 4, 5, 4, 5, 3]

//a droite de l affectation 
const arr = [3, 4, 7,8, ...arr0]

// [3, 4, 2, 4,5]

//a gauche de l affectation
const [,,,a, ...others] = arr

console.log(a,  others)

const [Pizza, pasta , ...resteduMenu] = completeMenu

console.log(Pizza, pasta, resteduMenu);


const { sat, ...restjours}  = restaurant.openingHours

console.log(sat, restjours)

restaurant.order("pizza", "taccos", "salades")

//add(3,4)
//add(3,4, 5)
//add(3,4, 7, 45)
//add(3,4, 5, 8, 9, 0)

const processLibrary = (...books) => {
  let idBook = 1;
 const library =  []

 for (let i = 0; i < books.length; i++) {
  const book = books[i];

  const {title , author } =  book;

  const processBook = {...book, id: idBook}
  library.push(processBook)
  idBook++
  
 }
 

  return library
}

console.log("-------------------------------------");

const book1 = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  pages: 180,
  isAvailable: true,
};
const book2 = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  pages: 281,
  isAvailable: false,
};
const book3 = {
  title: '1984',
  author: 'George Orwell',
  pages: 328,
  isAvailable: true,
};

const library = processLibrary(book1, book2, book3);
console.log(library);
console.log("-------------------------------------");


/// ||

console.log( 3 || "")
console.log( "" || false)
console.log( false || "jones")

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuest = 0;
// const guess = restaurant.numGuest || 10

// console.log(guess);

console.log('---- AND ----');
console.log( 4 && false)

console.log('Hello' && 23 && null && 'jonas');

if(restaurant.order){
  restaurant.order("pizza")
}

restaurant.order && restaurant.order("pizza")


// The Nullish  Operator
restaurant.numGuest = 0
const guess = restaurant.numGuest ?? 10
console.log(guess);

// TODO: logical assignment  
const rest1 = {
  name: 'Capri',
  numGuests: 20,
  // numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};


rest1.numGuests ||=   10
rest2.numGuests &&=  10

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players
const [gk, ...fieldPlayers] = players1
const allPlayers = [...players1,...players2]
const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic']
const {team1,x:draw,team2} = game.odds

const printGoals = function (...players){
  console.log(`Les jouers sont ${players},
  Nombre de buts ${players.length}`)
}

 console.log(team1 <team2 && "Equipe 1"||"Equipe 2")

 // TODO: the for of loop

 const menus = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log("---------------For of -----------  ", menus);


 for (const [index, value] of menus.entries()) {
  
  console.log(` ${index }: ${value}`)
 }

 /// optional chaining
 console.log("---------------optional chaining-----------  ", );


 console.log(restaurant.openingHours.mon?.open)

 const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days){
  const open = restaurant.openingHours[day]?.open ?? "close"

  console.log(`on ${day} open ${open} `);
}

restaurant.orderK = () => {console.log("helo");}

restaurant.orderK?.()

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];


