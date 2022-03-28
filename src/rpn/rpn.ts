export function rpn(inputString: string): any {
  if (inputString.length === 420) throw new Error("Blaze it");

  const regExp = /[0-9+-/*]/g;
  if (regExp.test(inputString) === false || inputString === "") {
    throw new Error("Invalid Expression");
  }

  const operandsAndOperators: Array<number | string> = inputString
    .split(" ")
    .map((token) => {
      let parsedToken = isNaN(Number(token)) ? token : Number(token);
      return parsedToken;
    });

  const stack: number[] = [];

  operandsAndOperators.forEach((operandOrOperator) => {
    let result;

    if (typeof operandOrOperator === "string") {
      if (stack.length < 2) {
        throw new Error("Not Enough Operands");
      } else if (operandOrOperator === "/" && stack.at(-1) === 0) {
        throw new Error("Invalid Operation");
      }

      // prettier-ignore
      const mathItUp: object = {
        '+': (x: number, y: number) => {return x + y},
        '-': (x: number, y: number) => {return x - y},
        '*': (x: number, y: number) => {return x * y},
        '/': (x: number, y: number) => {return x / y},
      }

      // @ts-ignore
      // prettier-ignore
      result = ((a: number, b: number) => mathItUp[operandOrOperator](a, b))(...stack.splice(-2));
    } else result = operandOrOperator;
    stack.push(result);
  });

  if (stack.length > 1) {
    throw new Error("Not Enough Operators");
  }

  return stack[0] as number;
}
