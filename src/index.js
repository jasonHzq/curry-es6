export const __ = {
  '@@functional/placeholder': true,
};

const isPlaceHolder = val => val === __;

const _curry0 = (fn) => {
  return function _curried(...args) {
    if (args.length === 0 || args.length === 1 && isPlaceHolder(args[0])) {
      return _curried;
    }

    return fn(...args);
  };
};

const curryN = (n, fn) => {
  if (n === 1) {
    return fn;
  }

  return _curry0((...args) => {
    const argsLength = args.filter(arg => arg !== __).length;

    if (argsLength >= n) {
      return fn(...args);
    }

    return curryN(n - argsLength, _curry0((...restArgs) => {
      const newArgs = args.map(arg =>
        isPlaceHolder(arg) ? restArgs.shift() : arg
      );

      return fn(...newArgs, ...restArgs);
    }));
  });
};

export const curry = fn => {
  return curryN(fn.length, fn);
};
