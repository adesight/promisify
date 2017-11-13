const promisify = fn => {
  return function() {
    const ctx = this;
    const args = arguments;
    return new Promise((res, rej) => {
      fn.call(ctx, ...args, function() {
        const args = Array.from(arguments);
        const err = args.shift();
        if (err) {
          rej(err);
        } else {
          const resArgs = args.length > 1 ? args : args[0];
          res(resArgs);
        }
      });
    });
  };
};

module.exports = promisify;
