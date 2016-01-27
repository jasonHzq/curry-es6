# Curry-ES6
curry with es6 rest is much easier.

## install
```
npm i --save curry-es6
```
## Usage
```
const add3 = (a, b, c) => a + b + c;
const curryAdd3 = curry(add3);
curryAdd3(__, 2)(__, 3)()(__)(1);
```
## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015-2016 
