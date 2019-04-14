function Foo() {
    this.x = 3;
    bar();
}

function bar() {
    'use strict'
    console.log(this.x)
}

Foo.prototype.bar = bar;

const foo = new Foo();

foo.bar()