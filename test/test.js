var test_algorithm_github_scm_234 = require('../src/test_algorithm_github_scm_234.js');

describe('Algorithm', function() {
  describe('#apply()', function() {
    it('should result in a hello message', function(done) {
      test_algorithm_github_scm_234.apply("Jane", function(err, res) {
        if(err) { return done(err); }

        if(res == "Hello Jane") {
          done();
        } else {
          done("Expected 'Hello Jane'. Receieved '" + res + "'.");
        }
      });
    });
  });
});
