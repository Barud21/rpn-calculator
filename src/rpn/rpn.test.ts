import { rpn } from "./rpn";

describe("rpn()", () => {
  it("returns number when passed", () => {
    expect(rpn("2")).toBe(2);
  });

  it("correctly adds 2 numbers", () => {
    expect(rpn("2 0 +")).toBe(2);
  });

  it("returns 4 when given '1 3 +'", () => {
    expect(rpn("1 3 +")).toBe(4);
  });

  it("returns 12 when given '2 2 + 3 *'", () => {
    expect(rpn("2 2 + 3 *")).toBe(12);
  });

  it("returns 1 when given '2 2 /'", () => {
    expect(rpn("2 2 /")).toBe(1);
  });

  it("returns 23 when given '4 3 4 + 5 1 + 2 * + +'", () => {
    expect(rpn("4 3 4 + 5 1 + 2 * + +")).toBe(23);
  });

  it("returns error 'Invalid Expression' when given ''", () => {
    try {
      rpn("");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toStrictEqual(Error("Invalid Expression"));
    }
  });

  it("returns error 'Invalid Expression' when given 'abc'", () => {
    try {
      rpn("abc");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toStrictEqual(Error("Invalid Expression"));
    }
  });

  it("returns error 'Not Enough Operands' when given '1 +'", () => {
    try {
      rpn("1 +");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toStrictEqual(Error("Not Enough Operands"));
    }
  });

  it("returns error 'Not Enough Operands' when given '1 2 + + 3'", () => {
    try {
      rpn("1 2 + + 3");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toStrictEqual(Error("Not Enough Operands"));
    }
  });

  it("correctly divides 2 numbers", () => {
    expect(rpn("2 2 /")).toBe(1);
  });

  it("returns error 'Invalid Operation' when dividing by 0", () => {
    try {
      rpn("1 0 /");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toStrictEqual(Error("Invalid Operation"));
    }
  });
});
