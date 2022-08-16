describe('the greet function', function(){
    it("should greet Poroto with 'Hello, Poroto'", function () {
        assert.equal('Hello, Poroto', greet('Poroto'));
    });

    it('should greet Archie with "Hello, Archie"', function(){
        assert.equal('Hello, Archie', greet('Archie'));
    });
});