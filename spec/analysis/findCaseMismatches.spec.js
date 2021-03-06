'use strict';

var testMethod = require('../../src/analysis/findCaseMismatches.js');

describe('analysis/findCaseMismatches', function() {

    it('should not add an error when no modules are available', function() {

        var result = {
            scripts: [],
            errors: []
        };

        testMethod(result);

        expect(result.errors.length).toBe(0);
    });

    it('should not add an error when module ids are different than the filenames', function() {

        var result = {
            scripts: [
                {id: 'a', filename: 'moduleA.js', dependencies: [], type: 'module'},
                {id: 'b', filename: 'moduleB.js', dependencies: [], type: 'module'}
            ],
            errors: []
        };

        testMethod(result);

        expect(result.errors.length).toBe(0);

    });

    it('should not add an error when module ids and filenames are equal', function() {

        var result = {
            scripts: [
                {id: 'A', filename: 'A.js', dependencies: [], type: 'module'},
                {id: 'B', filename: 'B.js', dependencies: [], type: 'module'}
            ],
            errors: []
        };

        testMethod(result);

        expect(result.errors.length).toBe(0);

    });

    it('should add an error when a module id and a filename are equal but have different cases', function() {

        var result = {
            scripts: [
                {id: 'a', filename: 'A.js', type: 'module'}
            ],
            errors: []
        };

        testMethod(result);

        expect(result.errors.length).toBe(1);

    });

});
