import { assertThrows } from "https://deno.land/std/testing/asserts.ts";

import { assert } from "../index.ts";

Deno.test("[lib/isFalse] should not fail when actual is true", function (): void {
  assert(false).isFalse();
});

Deno.test("[lib/isFalse] should fail when actual is not true", function (): void {
  assertThrows(() => assert(true).isFalse());
  assertThrows(() => assert(1).isFalse());
  assertThrows(() => assert(0).isFalse());
  assertThrows(() => assert(undefined).isFalse());
  assertThrows(() => assert(null).isFalse());
  assertThrows(() => assert([]).isFalse());
  assertThrows(() => assert([1, 2]).isFalse());
  assertThrows(() => assert({}).isFalse());
  assertThrows(() => assert({ "key": "value" }).isFalse());
});
