function Foo() {
    this.x = 3;
    bar();
}

function bar() {
    //'use strict'
    console.log(this.x)
}

const foo = new Foo();

console.log(foo.x)