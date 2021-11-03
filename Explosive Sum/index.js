var cache = {};

function sum(a, b = a) {
  if (a === 0) {
    return 1;
  }

  if (a < 0 || b === 0) {
    return 0;
  }

  if (cache[a] && cache[a][b]) {
    return cache[a][b];
  }

  var ret = sum(a, b - 1) + sum(a - b, b);

  cache[a] = cache[a] || {};
  cache[a][b] = ret;

  return ret;
}


describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sum(1), 1);
Test.assertEquals(sum(2), 2);
Test.assertEquals(sum(3), 3);
Test.assertEquals(sum(4), 5);

Test.assertEquals(sum(5), 7);

Test.assertEquals(sum(10), 42);
  });
});
