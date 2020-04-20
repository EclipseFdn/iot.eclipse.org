/*
* tests if json_adopters in ../static/assets/js/eclipsefdn.adopters.js 
* has a value
* run test with $ npm test
*/

var expect = require('chai').expect;
var fs = require('fs');
var path = require('path');
var json_adopters = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../static/assets/js/eclipsefdn.adopters.json'), 'utf8'));

describe('Adopters', function(){
    describe('json_adopters', function(){
        it("Adopters should not be empty", function(){
            expect(json_adopters).to.not.empty;
        })
    });
});
