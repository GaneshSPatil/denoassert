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

Asserts `actual` is equal to `expected`

```typescript
assert(1).isEqualTo(1);
assert(true).isEqualTo(true);
assert([1, 2, 3]).isEqualTo([1, 2, 3]);
assert({key: "value"}).isEqualTo({key: "value"});
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

