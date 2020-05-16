# Deno Assert

An extensible assertion library for deno.

[![Build Status](https://github.com/GaneshSPatil/denoassert/workflows/ci/badge.svg?branch=master)](https://github.com/GaneshSPatil/denoassert/actions)

## Features

* Provides fluent assertions.
* Provides assertion chaining. See [Chaining Multiple Assertions](#chaining-multiple-assertions)
* Extensible. Deno Assert exposes an API endpoint which can be used to extend Deno Assert's capability to add additional features. See [Extending Deno Assert](#extending-deno-assert)

### APIs:
```javascript
assert(actual).isEqualTo(expected);
assert(actual).isNotEqualTo(expected); 
assert(actual).isTrue();
assert(actual).isFalse(); 
assert(actual).isTruthy();
assert(actual).isFalsy(); 
```


### Examples:
```typescript
import { assert } from "https://deno.land/x/denoassert";

assert({key: 'value'}).isEqualTo({key: 'value'}); //asserts 'actual' is equal to 'expected'.
assert([1, 2, 3]).isNotEqualTo([1, [2, 3]]); //asserts 'actual' is not equal to 'expected'.


assert(true).isTrue(); //asserts 'actual' is true.
assert(false).isFalse(); //asserts 'actual' is false.


// Note: 'isTrue' and 'isFalse' assertions will fail for truthy and falsy values.
// Please use 'isTruthy' and 'isTruthy' instead for actual values which evaluates to either true or false.


//asserts 'actual' is truthy. Example: positive numbers, arrays, objects, etc
assert(1).isTruthy(); 
assert("non-blank-strings").isTruthy();
assert([1, 2, 3]).isTruthy();
assert({}).isTruthy();


//asserts 'actual' is false. Example: zero, null, undefined, empty strings, etc.
assert(0).isFalsy();
assert(null).isFalsy();
assert(undefined).isFalsy();
assert("").isFalsy();
```


### Chaining Multiple Assertions

Deno Assert allows chaining multiple assertions. This comes handy when multiple assertions are required to be performed on a value.

```typescript
import { assert } from "https://deno.land/x/denoassert";

assert(1).isEqualTo(1).isNotEqualTo(2);
```


### Extending Deno Assert

Coming Soon...


## License
Deno Assert is an open source project, under the Apache License, Version 2.0.

