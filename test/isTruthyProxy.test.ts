import {assertThrows} from "https://deno.land/std/testing/asserts.ts";

import {assert} from "../index.ts";

Deno.test("[lib/isTruthy] should not fail when actual is evaluated to true", function (): void {
  assert(true).isTruthy();
  assert(1).isTruthy();
  assert([]).isTruthy();
  assert([1, 2]).isTruthy();
  assert({}).isTruthy();
  assert({"key": "value"}).isTruthy();
});

Deno.test("[lib/isTruthy] should fail when actual is not evaluated to true", function (): void {
  assertThrows(() => assert(false).isTruthy());
  assertThrows(() => assert(0).isTruthy());
  assertThrows(() => assert(undefined).isTruthy());
  assertThrows(() => assert(null).isTruthy());
});
