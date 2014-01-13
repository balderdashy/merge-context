# merge-context

like _.bind() and _.bindAll() but extends the context (`this`) instead of replacing it

### Install

```sh
$ npm install merge-context
```

### Usage

```javascript
var mergeCtx = require('merge-context');

var someFunction = function () { console.log(this.foo); }

// someFunction();
// $ undefined

someFunction = mergeCtx(someFunction, {
  foo: true
  'and you know, the stuff': 82385235,
  I: 93529523,
  want: 2352,
  'to inject into': 'someFunction\'s `this` variable'
});

// someFunction();
// $ true
```

### `.all( objOfFunctions, stuff )`
To do an object of functions all at once (like `_.bindAll`)

```javascript
var mergeCtx = require('merge-context');

var someObject = {
  foo: function () { ... },
  bar: function () { ... },
  baz: function () { ... }
};
someObject = mergeCtx.all(someObject, {
  sails: require('sails')
});

// Now I can do:
someObject.foo();
someObject.bar();
someObject.baz();

// And they'll all have access to `this.sails` in there.


```


### License

MIT &copy; Mike McNeil 2014
