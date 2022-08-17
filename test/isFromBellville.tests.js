describe('check if car regNumber is from Bellville or Cape Town', function(){
    it("should check if car 'CY 658962' is from Bellville", function(){
        assert.equal(fromWhere('CY 658962'), 'Bellville');
    })

    it("should check if car 'CA 655 988' is from Cape Town", function(){
        assert.equal(fromWhere('CA 655 988'), 'CAPE TOWN');
    })

    


})