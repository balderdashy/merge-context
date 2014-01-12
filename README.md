extendContext
=============

like _.bind() and _.bindAll() but it extends the this context instead of replacing it

Usage:

```javascript
var extendContext = require('extendContext');

var someFunction = function () { console.log(this.foo); }

// someFunction();
// $ undefined

someFunction = extendContext(someFunction, {
  foo: true
  'and you know, the stuff': 82385235,
  I: 93529523,
  want: 2352,
  'to inject into': 'someFunction\'s `this` variable'
});

// someFunction();
// $ true
```
