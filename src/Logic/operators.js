import Big from "big.js";

export default function operators(numerOne, numberTwo, operator) {
  const one = Big(numerOne || "0")
  const two = Big(numberTwo || (operator === "/" || operator === "x" ? "1" : "0"))

  if (operator === "+")
    return one.plus(two).toString()

  if (operator === "-")
    return one.minus(two).toString()

  if (operator === "x")
    return one.times(two).toString()

    if (operator === "/") {
      if (two.eq(0)) { // Usando eq() de Big.js para comparar
        return "Error"; // Devuelve "Error" que puede ser mostrado en la pantalla
      }
      return one.div(two).toString();
    }
  }