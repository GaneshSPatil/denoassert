import { assertThrows } from "https://deno.land/std/testing/asserts.ts";

import { assert } from "../index.ts";

Deno.test("[lib/isTrue] should not fail when actual is true", function (): void {
  assert(true).isTrue();
});

Deno.test("[lib/isTrue] should fail when actual is not true", function (): void {
  assertThrows(() => assert(false).isTrue());
  assertThrows(() => assert(1).isTrue());
  assertThrows(() => assert(0).isTrue());
  assertThrows(() => assert(undefined).isTrue());
  assertThrows(() => assert(null).isTrue());
  assertThrows(() => assert([]).isTrue());
  assertThrows(() => assert([1, 2]).isTrue());
  assertThrows(() => assert({}).isTrue());
  assertThrows(() => assert({ "key": "value" }).isTrue());
});
