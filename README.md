# Deno Assert

An extensible assertion library for deno.

## Features

* Provides fluent assertions.
* Provides assertion chaining. See [Chaining Multiple Assertions](#chaining-multiple-assertions)
* Extensible. Deno Assert exposes an API endpoint which can be used to extend Deno Assert's capability to add additional features. See [Extending Deno Assert](#extending-deno-assert)

### Usage Import:

```typescript
import { assert } from "https://deno.land/x/denoassert";
```

### Assertions

#### isEqualTo
Asserts `actual` is equal to `expected`.

```typescript
assert(actual).isEqualTo(expected);
```


#### isNotEqualTo
Asserts `actual` is not equal to `expected`.

```typescript
assert(actual).isNotEqualTo(expected);
```


#### isTrue
Asserts `actual` is true. 
Note: the `actual` value needs to be `true`. This assertions will fail for truthy values such as positive numbers, arrays, objects, etc.   
To verify whether `actual` is evaluated to true, use `isTruthy` instead.
 
```typescript
assert(actual).isTrue();
```


#### isFalse
Asserts `actual` is false. 
Note: the `actual` value needs to be `false`. This assertions will fail for falsy values such as zero, null, undefined, empty strings, etc.   
To verify whether `actual` is evaluated to false, use `isFalsy` instead.
 
```typescript
assert(actual).isFalse();
```


#### isTruthy
Asserts `actual` is evaluated to true.

```typescript
assert(actual).isTruthy();
```


#### isFalsy
Asserts `actual` is evaluated to false.

```typescript
assert(actual).isFalsy();
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

