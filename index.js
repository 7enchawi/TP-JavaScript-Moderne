// Exercice 1
var x = 5;
let y = 10;
const z = 15;

// On peut modifier var et let, mais pas const
x = 20;
y = 30;
// z = 40; //  Erreur si on essaie de changer const
console.log(x, y, z);

// Exercice 2
function testScope() {
  if (true) {
    var a = "var visible partout";
    let b = "let visible ici seulement";
  }
  console.log(a); // OK
  // console.log(b); //  Erreur car b est dans le bloc if
}
testScope();


// Exercice 3
function sayHello(name) {
  return `Bonjour ${name}`;
}

const sayHelloArrow = (name) => `Bonjour ${name}`;

console.log(sayHello("Hamza"));
console.log(sayHelloArrow("Hamza"));

// Exercice 4
const person = {
  name: "Sara",
  sayHello: function () {
    console.log("Bonjour " + this.name);
  },
  sayHelloArrow: () => {
    console.log("Bonjour " + this.name); // ici this ne pointe pas sur l'objet
  },
};

person.sayHello();
person.sayHelloArrow();



// IMPORT / EXPORT


import message, { PI, carre } from "./mathUtils.js";

message();
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));


// TABLEAUX


// Exercice 5
const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log(fruits);

// Exercice 6
const nums = [1, 2, 3, 4, 5];

console.log(nums.map(n => n * 2)); // multiplie chaque nombre
console.log(nums.filter(n => n % 2 === 0)); // garde les pairs
console.log(nums.reduce((sum, n) => sum + n, 0)); // somme totale

// Exercice 7
console.log(nums.find(n => n > 3)); // premier nombre > 3
console.log(nums.some(n => n < 0)); // au moins un nombre négatif ?
console.log(nums.every(n => n > 0)); // tous positifs ?


// OBJETS ET DÉSTRUCTURATION


const user = { id: 1, name: "Ali", city: "Rabat" };

const { name, city } = user;
console.log(`${name} habite à ${city}`);

const { name: fullName, ...rest } = user;
console.log(fullName);
console.log(rest);


// PROMESSES ET ASYNC/AWAIT


// Exercice 9
const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then(result => console.log(result));

// Exercice 10
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error("Erreur :", e.message);
  }
}
getUsers();


// Exercice 11
const prenom = "Nadia";
const heure = new Date().getHours();
console.log(`Bonjour ${prenom}, il est ${heure}h`);

// Exercice 12
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4));

// Exercice 13
const settings = { theme: null };
console.log(settings.theme ?? "light");

const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email);
console.log(user2.address?.city);

const produits = [
  { nom: "Lait", prix: 10, expireLe: "2025-12-01" },
  { nom: "Yaourt", prix: 5, expireLe: "2024-01-01" },
  { nom: "Jus", prix: 8, expireLe: "2026-02-15" },
];

// Date actuelle
const aujourdHui = new Date();

// Garde seulement les produits non expirés
const valides = produits.filter(p => new Date(p.expireLe) > aujourdHui);

// Calcule le total des prix valides
const total = valides.reduce((s, p) => s + p.prix, 0);

console.log("Produits valides :", valides);
console.log("Total :", total, "DH");
