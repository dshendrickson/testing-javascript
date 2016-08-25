// describe('Random Junk', function () {
//   it('should whatever', function () {
//     assert.strictequal(true, 1);
//   });  
// });

describe('square', function () {

  it('returns the square of a number', function () {
    assert.equal(square(2), 4);
  });

});

describe('add', function () {

  it('should return the sum of tow numbers', function () {
  assert.equal(add(2, 2), 4);
  assert.equal(add(2, 4), 6);
  });

});

describe('modulo', function () {

  it('should return a number', function () {
    assert.isNumber(modulo(2,2));
  });
  
});