/**
 * Defaults params:
 * Desde la versión de ecmascript6 se pudene setiar valores por default en los parametros de una función
 */
function setUser(name = "Andrés", age = 25, country = "Colombia") {
  console.log(name, age, country);
}
setUser();

/**
 * Concatenación:
 * Templeate literal -> con el uso de comillas francesas ` podemos interporal texto en JS de manera mas agradable
 */
function logFullNameUser() {
  let firstName = "Andrés";
  let lastName = "Acelas";
  console.log(`My full name is: ${firstName} ${lastName} :)`);
}
logFullNameUser();

/**
 * Multilínea:
 * Con esta funcionalidad permite evitar el salto de linea -> /n y mostarlo de una mejor manera
 */
function multiLine() {
  let description = `Esto es un salto
  multiniea
  `;
  console.log(description);
}
multiLine();

/**
 * Desestructuración:
 * Esto permite extraer propoedades de un objeto y asignaralas a una variable, también pude ser llamada en los parametros de una función
 */
const person = { name: "Andres", age: 22, email: "andres@fk.co" };

function destructuringParams({ name, age, email }) {
  console.log(name, age, email);
}
function destructuring() {
  const { name, age, email } = person;
  console.log(name, age, email);
}
destructuring();
destructuringParams(person);

/**
 * Spread Operator:
 * Permite trae todos los elemento de un arreglo y crea un nuevo elemento
 */
function spreadOperator() {
  let teamOne = ["Andres", "Mauricio"];
  let teamTwo = ["Paola", "Geraldinee"];
  let fullTeam = ["Doe", ...teamOne, ...teamTwo];
  console.log(fullTeam);
}
spreadOperator();

/**
 * Creación de objetos con ecmascript6
 */
const nameUser = "Andres";
const ageUser = 23;
const obj = { nameUser, ageUser };
console.log(obj);

/**
 * Arrow fuctions nueva formas declarar funciones e impletar en anonimas
 */
const detailPersons = [
  { name: "andy", age: 23 },
  { name: "pao", age: 24 },
];
detailPersons.map((item) => console.log(item.name));

const thisArrowFuction = () => console.log(5 + 5);
thisArrowFuction();

/**
 * Promesas: la forma en la que manejamos código asincrono de mejor manera
 */
function hiMyPromis() {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("¡Todo bien!");
    } else {
      reject("Algo salio mal :(");
    }
  });
}
hiMyPromis()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

/**
 * Clases: Una forma más elegante que nos provee js para escribir código y usar POO
 */
class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sumNumber(oneValue, twoValue) {
    this.valueA = oneValue;
    this.valueb = twoValue;
    return this.valueA + this.valueB;
  }
}
const firstCalculator = new Calculator();
console.log(firstCalculator.sumNumber(456 + 4));

/**
 * modulos: con esta opción podemos importar clases, funciones o cualquier extracto de código de otro archivo
 */
// import {hello} from "./es6-module";
// hello()
