# extend-context

like _.bind() and _.bindAll() but extends the context (`this`) instead of replacing it

### Usage:

```javascript
var extendContext = require('extend-context');

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

##### To do an object of functions all at once (like `_.bindAll`)
```javascript
var someObject = {
  foo: function () { ... },
  bar: function () { ... },
  baz: function () { ... }
};
someObject = extendContext.all(someObject, {
  sails: require('sails')
});

// Now I can do:
someObject.foo();
someObject.bar();
someObject.baz();

// And they'll all have access to `sails`.


```


## License

MIT
c. Mike McNeil 2014
