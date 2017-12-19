## Promisify
nodeCallback Promise,deprecated in favor of util.promisify

## Example

```js
const fs = require("fs");
const promisify = require("simple-node-promisify");

const read = promisify(fs.readFile);

read("./hello.txt", "utf8")
  .then(res => console.assert(res === "Hello,Promise!", "test fail!"))
  .catch(console.log);
```

## License
MIT