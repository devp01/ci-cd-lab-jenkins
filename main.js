function greet(name = 'world') {
  return `hi, ${name}!`;
}

if (typeof module !== 'undefined') module.exports = { greet }; // for tests

