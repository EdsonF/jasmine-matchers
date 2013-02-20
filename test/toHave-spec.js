require([], function() {

  describe('toHaveLength', function() {

    describe('matches', function() {
      it('should work for `{length:null}`', function() {
        expect({length:null}).toHaveLength(null);
      });
    });

  });

  describe('toHaveProperties', function() {

    describe('matches', function() {
      it('should work for `{x:0, y:undefined}`', function() {
        var obj = {x:0, y:undefined};
        expect(obj).toHaveProperties('x', 'y');
      });
    });

  });

  describe('toHaveOwnProperties', function() {

    describe('matches', function() {
      it('should work for `{x:0, y:undefined}`', function() {
        var obj = {x:0, y:undefined};
        expect(obj).toHaveOwnProperties('x', 'y');
      });
    });

  });

  describe('toHaveBeenCalledXTimes', function() {

    describe('matches', function() {
      it('should work for 1', function() {
        var func = jasmine.createSpy('func');
        func();
        expect(func).toHaveBeenCalledXTimes(1);
      });

      it('should work for 2', function() {
        var func = jasmine.createSpy('func');
        func();
        func();
        expect(func).not.toHaveBeenCalledXTimes(1);
      });
    });

  });

  describe('toExactlyHaveProperties', function() {

    describe('matches', function() {
      it('should work for `{x:0, y:undefined}`', function() {
        var obj = {x:0, y:undefined};
        expect(obj)
          .toExactlyHaveProperties('x', 'y');
      });
      it('should work in any order', function() {
        var obj = {x:0, y:undefined};
        expect(obj)
          .toExactlyHaveProperties('y', 'x');
      });
    });

    describe('non-matches', function() {
      it('should work for too many properties', function() {
        var obj = {x:0, y:undefined};
        expect(obj)
          .not.toExactlyHaveProperties('x');
      });
      it('should work for missing properties', function() {
        var obj = {x:0, y:undefined};
        expect(obj)
          .not.toExactlyHaveProperties('x', 'y', 'z');
      });
    });

  });

});
