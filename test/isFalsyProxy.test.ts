import { assertThrows } from "https://deno.land/std/testing/asserts.ts";

import { assert } from "../index.ts";

Deno.test("[lib/isFalsy] should not fail when actual is evaluated to false", function (): void {
  assert(false).isFalsy();
  assert(0).isFalsy();
  assert(undefined).isFalsy();
  assert(null).isFalsy();
});

Deno.test("[lib/isFalsy] should fail when actual is not evaluated to false", function (): void {
  assertThrows(() => assert(true).isFalsy());
  assertThrows(() => assert(1).isFalsy());
  assertThrows(() => assert([]).isFalsy());
  assertThrows(() => assert([1, 2]).isFalsy());
  assertThrows(() => assert({}).isFalsy());
  assertThrows(() => assert({ "key": "value" }).isFalsy());
});
