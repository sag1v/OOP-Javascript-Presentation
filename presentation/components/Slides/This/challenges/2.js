const myObject = { x: 3, run: runMe }

function runMe() {
    console.log(this.x)
}

myObject.run()