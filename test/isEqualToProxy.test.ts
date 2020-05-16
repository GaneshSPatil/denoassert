import { assertThrows } from "https://deno.land/std/testing/asserts.ts";

import { assert } from "../index.ts";

Deno.test("[lib/isEqualTo] should not fail when actual is equal to expected for numbers", function (): void {
  assert(0).isEqualTo(0);
  assert(1).isEqualTo(1);
  assert(-1).isEqualTo(-1);
});

Deno.test("[lib/isEqualTo] should not fail when actual is equal to expected for infinity", function (): void {
  assert(Infinity).isEqualTo(Infinity);
});

Deno.test("[lib/isEqualTo] should not fail when actual is equal to expected for null", function (): void {
  assert(null).isEqualTo(null);
});

Deno.test("[lib/isEqualTo] should not fail when actual is equal to expected for undefined", function (): void {
  assert(undefined).isEqualTo(undefined);
});

Deno.test("[lib/isEqualTo] should not fail when actual is equal to expected for boolean", function (): void {
  assert(true).isEqualTo(true);
  assert(false).isEqualTo(false);
});

Deno.test("[lib/isEqualTo] should not fail when actual is equal to expected for string", function (): void {
  assert("").isEqualTo("");
  assert("string").isEqualTo("string");
});

Deno.test("[lib/isEqualTo] should not fail when actual is equal to expected for array of numbers", function (): void {
  assert([]).isEqualTo([]);
  assert([1, 2, 3]).isEqualTo([1, 2, 3]);
});

Deno.test("[lib/isEqualTo] should not fail when actual is equal to expected for array of strings", function (): void {
  assert([]).isEqualTo([]);
  assert(["a", "b", "c"]).isEqualTo(["a", "b", "c"]);
});

Deno.test("[lib/isEqualTo] should not fail when actual is equal to expected for array of objects", function (): void {
  assert([]).isEqualTo([]);
  assert([{}, { key: "value" }]).isEqualTo([{}, { key: "value" }]);
});

Deno.test("[lib/isEqualTo] should not fail when actual is equal to expected for objects", function (): void {
  assert({}).isEqualTo({});
  assert({ key: "value" }).isEqualTo({ key: "value" });
});

// failure tests

Deno.test("[lib/isEqualTo] should fail when actual is not equal to expected for numbers", function (): void {
  assertThrows(() => assert(0).isEqualTo(1));
  assertThrows(() => assert(1).isEqualTo(-1));
  assertThrows(() => assert(-1).isEqualTo(1));
});

Deno.test("[lib/isEqualTo] should fail when actual is not equal to expected for infinity", function (): void {
  assertThrows(() => assert(Infinity).isEqualTo(0));
});

Deno.test("[lib/isEqualTo] should fail when actual is not equal to expected for null", function (): void {
  assertThrows(() => assert(null).isEqualTo(undefined));
});

Deno.test("[lib/isEqualTo] should fail when actual is not equal to expected for undefined", function (): void {
  assertThrows(() => assert(undefined).isEqualTo(null));
});

Deno.test("[lib/isEqualTo] should fail when actual is not equal to expected for boolean", function (): void {
  assertThrows(() => assert(true).isEqualTo(false));
  assertThrows(() => assert(false).isEqualTo(true));
});

Deno.test("[lib/isEqualTo] should fail when actual is not equal to expected for string", function (): void {
  assertThrows(() => assert("").isEqualTo("string"));
  assertThrows(() => assert("string").isEqualTo("  string "));
});

Deno.test("[lib/isEqualTo] should fail when actual is not equal to expected for array of numbers", function (): void {
  assertThrows(() => assert([]).isEqualTo([1]));
  assertThrows(() => assert([1, 2, 3]).isEqualTo([1, 2]));
});

Deno.test("[lib/isEqualTo] should fail when actual is not equal to expected for array of strings", function (): void {
  assertThrows(() => assert([]).isEqualTo(["a"]));
  assertThrows(() => assert(["a", "b", "c"]).isEqualTo(["a", "b"]));
});

Deno.test("[lib/isEqualTo] should fail when actual is not equal to expected for array of objects", function (): void {
  // deno-fmt-ignore
  assertThrows(() => assert([{}, { key: "value" }]).isEqualTo([{}, { key: "valu2" }]));
});

Deno.test("[lib/isEqualTo] should fail when actual is not equal to expected for objects", function (): void {
  assertThrows(() => assert({ key: "value" }).isEqualTo({ key: "valu2" }));
});
