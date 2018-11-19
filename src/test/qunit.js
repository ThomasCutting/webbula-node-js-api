/*global QUnit:false*/

import webbula from '../webbula';

export var test = QUnit.test;

export function module(name,lifecycle) {
    QUnit.module(name,{
        // arrow method for scope.
        beforeEach:() => {
            // TODO: Test.
        },
        afterEach:() => {
            // TODO: Test.
        }
    })
}