const promisify = fn => {
  return function() {
    const ctx = this;
    return new Promise((res, rej) => {
      fn.call(ctx, ...arguments, function() {
        const args = Array.from(arguments);
        const err = args.shift();
        if (err) {
          rej(err);
        } else {
          res(args.length > 1 ? args : args[0]);
        }
      });
    });
  };
};

module.exports = promisify;
