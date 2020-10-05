/**
 * array.flat : este metodo permite aplanar matices en un niver
 * @param(2): resive un numero para evaluar la profundidad
 */
let statusShopping = [10, 12, 13, [25, 32, 9, [8, 0, 66]]];
console.log(statusShopping);
console.log(statusShopping.flat(1));
console.log(statusShopping.flat(2));

/**
 * array.flatMap : Lo mismo del flat, solo que primero manifula la data
 */
let statusOrder = [10, 20, 30, 40];
console.log(statusOrder.flatMap((value) => [value, value * 2]));

/**
 * trimStart y trinEnd: Permite quitar los espacios en blanco de una lugar espesisifico
 */
let name = "andrés  ";
let lastName = "  mauricio";
console.log(name.trimEnd());
console.log(lastName.trimStart());

/**
 * Optional error try catch: permite resivier opcinalmente el parametro de error
 */
try {
  console.log("Todo bien");
} catch {
  console.error("Todo mal");
}

/**
 * Transformar arreglos a objetos
 */
let userInfo = [
  ["name", "andrés"],
  ["age", 23],
];
console.log(Object.fromEntries(userInfo));

/**
 * Symbol description: permite saber la descripción de una objeto tipo symbolo
 */
let mySymbol = "Detail the my symbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
