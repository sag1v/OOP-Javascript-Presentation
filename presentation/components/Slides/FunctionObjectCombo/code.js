function double(num) {
    return num * 2;
}

double.someProp = 'Hi there!';

double(5); // 10
double.someProp // Hi there!

double.prototype // {}
