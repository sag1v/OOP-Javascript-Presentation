function double(num){
    return num * 2;
}

double.toString() // where is this method coming from?

Function.prototype // {toString: [f], call: [f], bind: [f]}

double.hasOwnProperty('name') // where is this method coming from?

Function.prototype.__proto__ // -> Object.prototype {hasOwnProperty: [f]}