/**
 * Includes: Esta función de los arrays nos permite evuluar si un argumento está dentro de él
 */
const statusCodes = [101, 102, 103, 109];
if (statusCodes.includes(103)) {
  console.log("El estado si se encuetra válido");
} else {
  console.log("El estado no se encuetra");
}

/**
 * Exponete: unar forma más fácil de usar las potencias en JS
 */
const base = 5;
const exponent = 2;
const result = base ** exponent;
console.log(result);
