function multiply(x, y) {
  // throw Error("Not implemented yet!");
  return x + y;
}

// This line is what allows us functions from one javascript file inside of another.
// In this particular case, we do this so that we can use our multiply function in
// our test file (math.test.js).
module.exports = { multiply };
