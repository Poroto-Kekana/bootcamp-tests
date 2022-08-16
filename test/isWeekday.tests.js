describe('Is it a week day function', function() {
    it("should check if 'Saturday' is a weekday", function(){
        assert.equal(isWeekday('Saturday'), false)
    })

    it("should check if 'Monday' is a weekday", function(){
        assert.equal(isWeekday('Monday'), true);
    })
});