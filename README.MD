## Deprecated
in favor of util.promisify

## Example

```js
const fs = require("fs");
const promisify = require("./index.js");

const read = promisify(fs.readFile);

read("./hello.txt", "utf8")
  .then(res => console.assert(res === "Hello,Promise!", "test fail!"))
  .catch(console.log);
```

```js
const { promisify } = require("util");
const { readFile } = require("fs");

read("./hello.txt", "utf8")
  .then(res => console.assert(res === "Hello,Promise!", "test fail!"))
  .catch(console.log);
```
## License
MIT
