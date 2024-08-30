import Big from "big.js";
import operators from "./operators";
import isNumber from "./isNumber"

export default function operations(state, buttonName) {

  if (buttonName === "AC") {
    return {
      total: null,
      next: null,
      operator: null,
    };
  }

  if (isNumber(buttonName)) {

    if (buttonName === "0" && state.next === "0") return { data: "ninguna" };

    if (state.operator) {
      if (state.next) return { next: state.next + buttonName };
      return { next: buttonName };
    }

    if (state.next) {
      const next = state.next === "0" ? buttonName : state.next + buttonName;
      return {
        next,
        total: null,
      };
    }

    return {
      next: buttonName,
      total: null,
    };
  }

  if (buttonName === "%") {
    if (state.operator && state.next) {
      const result = operators(state.total, (Big(state.next).times(Big("0.01")).toString()), state.operator);
      return {
        total: result,
        next: null,
        operator: null,
      };
    }

    if (state.next) {
      return {
        next: Big(state.next).times(Big("0.01")).toString(),
      };
    }

    return {};
  }

  if (buttonName === ".") {
    if (state.next) {
      if (state.next.includes(".")) {
        return {};
      }
      return { next: state.next + "." };
    }
    return { next: "0." };
  }

  if (buttonName === "=") {
    if (state.next && state.operator) {
      return {
        total: operators(state.total, state.next, state.operator),
        next: null,
        operator: null,
      };
    } else return {};
  }

  if (buttonName === "+/-") {
    if (state.next) return { next: (-1 * parseFloat(state.next)).toString() };
    if (state.total) return { total: (-1 * parseFloat(state.total)).toString() };
    return {};
  }

  if (state.operator) {
    return {
      total: operators(state.total, state.next, state.operator),
      next: null,
      operator: buttonName,
    };
  }

  if (!state.next) return { operator: buttonName };

  return {
    total: state.next,
    next: null,
    operator: buttonName,
  };
}
