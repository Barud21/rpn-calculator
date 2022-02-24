import { rpn } from "./rpn";

describe("rpn()", () => {
  it("returs number when passed", () => {
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

  it("correctly divides  2  numbers", () => {
    expect(rpn("2 2 /")).toBe(1);
  });
});
