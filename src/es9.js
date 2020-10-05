/**
 * Unión de objetos con sprad
 */
const products = {
  productsSelected: [
    {
      name: "Backend whit nodejs and express",
      price: 69.99,
    },
    {
      name: "Backedn whit python and flask",
      price: 89.99,
    },
    {
      name: "Backend ruby on rails",
      price: 49.99,
    },
  ],
};
const user = {
  name: "Andrés M.",
  age: 23,
};
const order = {
  owner: "Edication Team",
  id: 25455,
  ...user,
  ...products,
};
console.log(order);
user.name = "Mauricio A.";
console.log(order);

/**
 * Finally promise: ejecuta un extracto de código al finalizar una promesa
 */
const myPromise = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("user save succesfully");
        }, 3000)
      : reject(new Error("Algo salio mal"));
  });
};
myPromise()
  .then((response) => console.log(response))
  .catch((error) => console.error(error))
  .finally(() => console.log("Termino la petición"));

/**
 * Grupos de regex: permite abstraer información por partes de una regex
 */
const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexDate.exec('2020-02-12')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day);