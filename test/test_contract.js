contract('TestContract', function(accounts) {
  it("should assert true", function(done) {
    var test_contract = TestContract.deployed();
    assert.isTrue(true);
    done();
  });
});
