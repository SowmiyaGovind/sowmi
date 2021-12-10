const persons = [
  {
    id: 2,
    firstName: "Hoyt",
    lastName: "Wiegand",
    jobTitle: "National Markets Analyst",
    prefix: "Ms.",
    suffix: "III",
    jobArea: "Communications",
  },
  {
    id: 3,
    firstName: "Foster",
    lastName: "Kovacek",
    jobTitle: "Global Creative Assistant",
    prefix: "Miss",
    suffix: "II",
    jobArea: "Research",
  },
  {
    id: 4,
    firstName: "Elyse",
    lastName: "Beier",
    jobTitle: "International Accounts Architect",
    prefix: "Dr.",
    suffix: "II",
    jobArea: "Integration",
  },
  {
    id: 5,
    firstName: "Pete",
    lastName: "Fay",
    jobTitle: "Global Research Administrator",
    prefix: "Miss",
    suffix: "MD",
    jobArea: "Assurance",
  },
  {
    id: 6,
    firstName: "Elmer",
    lastName: "Kilback",
    jobTitle: "Direct Data Liaison",
    prefix: "Mr.",
    suffix: "MD",
    jobArea: "Metrics",
  },
];

const addresses = [
  {
    id: 30,
    streetAddress: "08812 Allen Highway",
    city: "Pricechester",
    country: "Ethiopia",
    personId: 2,
  },
  {
    id: 37,
    streetAddress: "8640 Konopelski Valley",
    city: "Collierhaven",
    country: "Guinea-Bissau",
    personId: 4,
  },

  {
    id: 32,
    streetAddress: "270 Von Viaduct",
    city: "Constantinstad",
    country: "Cape Verde",
    personId: 2,
  },
  {
    id: 43,
    streetAddress: "8874 Maximo Crest",
    city: "Luettgenshire",
    country: "Bahamas",
    personId: 5,
  },
  {
    id: 44,
    streetAddress: "954 Isidro Stream",
    city: "Ankeny",
    country: "Bouvet Island (Bouvetoya)",
    personId: 6,
  },
  {
    id: 45,
    streetAddress: "2235 Kian Springs",
    city: "Lake Hilario",
    country: "Congo",
    personId: 6,
  },
  {
    id: 31,
    streetAddress: "81592 Philip Terrace",
    city: "Torpchester",
    country: "Azerbaijan",
    personId: 2,
  },
  {
    id: 33,
    streetAddress: "4899 Fay Loop",
    city: "Lake Hassan",
    country: "Sao Tome and Principe",
    personId: 2,
  },
  {
    id: 34,
    streetAddress: "60687 Adele Knoll",
    city: "Bechtelarview",
    country: "Russian Federation",
    personId: 3,
  },
  {
    id: 38,
    streetAddress: "556 Michale Lodge",
    city: "Port Herman",
    country: "Russian Federation",
    personId: 4,
  },
  {
    id: 39,
    streetAddress: "745 O'Hara Manors",
    city: "Porterview",
    country: "Honduras",
    personId: 5,
  },
  {
    id: 40,
    streetAddress: "9460 Marlen Corner",
    city: "Owenchester",
    country: "Uzbekistan",
    personId: 5,
  },
  {
    id: 35,
    streetAddress: "37152 Lowe Pines",
    city: "New Joshuahbury",
    country: "Iran",
    personId: 3,
  },
  {
    id: 36,
    streetAddress: "360 Koss Hill",
    city: "East Hillary",
    country: "China",
    personId: 4,
  },
  {
    id: 41,
    streetAddress: "3232 Laila Causeway",
    city: "Port Eliseo",
    country: "Pitcairn Islands",
    personId: 5,
  },
  {
    id: 42,
    streetAddress: "93470 Kihn Court",
    city: "New Lupeborough",
    country: "Qatar",
    personId: 5,
  },
];

// Use the personId foreign key to link person and address
// const personAddressJoinList = [
//   // example
//   {
//     id: 2,
//     firstName: "Hoyt",
//     lastName: "Wiegand",
//     jobTitle: "National Markets Analyst",
//     prefix: "Ms.",
//     suffix: "III",
//     jobArea: "Communications",
//     addressId: 30,
//     streetAddress: "08812 Allen Highway",
//     city: "Pricechester",
//     country: "Ethiopia",
//   },
// ];

// // class Definition
// class Person {
//     constructor(addresses) {
//         this.addresses = addresses;
//     }
// }

// // from PersonAddressJoinList construct person object and its related address

// let mergedPersons = persons.map(persons => {
//     let addresses = addresses.find(element => personId === persons.id)
//     return { ...persons, ...addresses }
// })

// const persons_action = persons.map(({ id, ...rest }) => ({
//   id,
//   ...rest,
//   addresses: addresses.filter(({ personId }) => personId === id),
// }));
// console.log(persons_action);

// let result = persons.map((p) => ({
//   ...p,
//   addresses: addresses.filter(({ personId }) => personId === p.id),
// }));

// console.log(result);



let arr3=persons.map((item,i)=>Object.assign({},item,addresses[i]))

console.log(arr3)


// const res = addresses.map(x => Object.assign(x, persons.find(y => y.personId == x.id)));
// console.log(res)



const people = [
  { name: 'Lee', age: 21 },
  { name: 'Ajay', age: 20 },
  { name: 'Jane', age: 20 }
];
function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
     const key = obj[property];
     if (!acc[key]) {
        acc[key] = [];
     }
     // Add object to list for given key's value
     acc[key].push(obj);
     return acc;
  }, {});
}
const groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);
Output
