import { sum, substract, multiply, divide } from "./App";

describe("Math functions test", () => {
  it("두 가지 값을 더합니다.", () => {
    expect(sum(1, 1)).toBe(2);
    expect(sum()).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  it("두 가지 값을 뺍니다", () => {
    expect(substract(1, 1)).toBe(0);
    expect(substract()).toBe(0);
  });

  it("두 가지 값을 곱합니다", () => {
    expect(multiply(1, 2)).toBe(2);
    expect(multiply()).toBe(0);
    expect(multiply(3.1, 2)).toBe(6.2);
    expect(multiply(-1, -1)).toBe(1);
  });

  it("두 가지 값을 나눕니다", () => {
    expect(divide(3, 4)).toBe(0.75);
    expect(() => divide(3, 0)).toThrowError();
    expect(divide(-2, 0.1)).toBe(-20);
  });
});
