"use strict";
exports.__esModule = true;
var architect_1 = require("@angular-devkit/architect");
var childProcess = require("child_process");
exports["default"] = architect_1.createBuilder(function (options, context) {
    var child = childProcess.spawn('ng', [
        'e2e',
        'ui-common-test-bed-e2e',
        '--watch'
    ]);
    return new Promise(function (resolve) {
        child.on('close', function (code) {
            resolve({ success: code === 0 });
        });
    });
});
