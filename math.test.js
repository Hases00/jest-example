const { multiply } = require('./math');

describe("multiplication", () => {
  it('2 x 2 == 4', () => {
    expect(multiply(2, 2)).toBe(4);
  });

  it("should be commutitive (x * y == y * x)", () => {
    expect(multiply(2, 3)).toEqual(multiply(3, 2));
  });

  it("should be associative (x * (y * z)) == (x * (y * z))", () => {
    let x = 2; 
    let y = 10;
    let z = 12;
    expect(multiply(x, multiply(y, z))).toEqual(multiply(multiply(x, y), z));
  })
});
