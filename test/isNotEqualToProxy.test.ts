import {assertThrows} from "https://deno.land/std/testing/asserts.ts";

import {assert} from "../index.ts";

Deno.test("[lib/isNotEqualTo] should fail when actual is not equal to expected for numbers", function (): void {
  assert(0).isNotEqualTo(1);
  assert(1).isNotEqualTo(-1);
  assert(-1).isNotEqualTo(1);
});

Deno.test("[lib/isNotEqualTo] should fail when actual is not equal to expected for infinity", function (): void {
  assert(Infinity).isNotEqualTo(0);
});

Deno.test("[lib/isNotEqualTo] should fail when actual is not equal to expected for null", function (): void {
  assert(null).isNotEqualTo(undefined);
});

Deno.test("[lib/isNotEqualTo] should fail when actual is not equal to expected for undefined", function (): void {
  assert(undefined).isNotEqualTo(null);
});

Deno.test("[lib/isNotEqualTo] should fail when actual is not equal to expected for boolean", function (): void {
  assert(true).isNotEqualTo(false);
  assert(false).isNotEqualTo(true);
});

Deno.test("[lib/isNotEqualTo] should fail when actual is not equal to expected for string", function (): void {
  assert("").isNotEqualTo("string");
  assert("string").isNotEqualTo("  string ");
});

Deno.test("[lib/isNotEqualTo] should fail when actual is not equal to expected for array of numbers", function (): void {
  assert([]).isNotEqualTo([1]);
  assert([1, 2, 3]).isNotEqualTo([1, 2]);
});

Deno.test("[lib/isNotEqualTo] should fail when actual is not equal to expected for array of strings", function (): void {
  assert([]).isNotEqualTo(["a"]);
  assert(["a", "b", "c"]).isNotEqualTo(["a", "b"]);
});

Deno.test("[lib/isNotEqualTo] should fail when actual is not equal to expected for array of objects", function (): void {
  assert([{}, {key: "value"}]).isNotEqualTo([{}, {key: "valu2"}]);
});

Deno.test("[lib/isNotEqualTo] should fail when actual is not equal to expected for objects", function (): void {
  assert({key: "value"}).isNotEqualTo({key: "valu2"});
});


// failure tests

Deno.test("[lib/isNotEqualTo] should not fail when actual is equal to expected for numbers", function (): void {
  assertThrows(() => assert(0).isNotEqualTo(0));
  assertThrows(() => assert(1).isNotEqualTo(1));
  assertThrows(() => assert(-1).isNotEqualTo(-1));
});

Deno.test("[lib/isNotEqualTo] should not fail when actual is equal to expected for infinity", function (): void {
  assertThrows(() => assert(Infinity).isNotEqualTo(Infinity));
});

Deno.test("[lib/isNotEqualTo] should not fail when actual is equal to expected for null", function (): void {
  assertThrows(() => assert(null).isNotEqualTo(null));
});

Deno.test("[lib/isNotEqualTo] should not fail when actual is equal to expected for undefined", function (): void {
  assertThrows(() => assert(undefined).isNotEqualTo(undefined));
});

Deno.test("[lib/isNotEqualTo] should not fail when actual is equal to expected for boolean", function (): void {
  assertThrows(() => assert(true).isNotEqualTo(true));
  assertThrows(() => assert(false).isNotEqualTo(false));
});

Deno.test("[lib/isNotEqualTo] should not fail when actual is equal to expected for string", function (): void {
  assertThrows(() => assert("").isNotEqualTo(""));
  assertThrows(() => assert("string").isNotEqualTo("string"));
});

Deno.test("[lib/isNotEqualTo] should not fail when actual is equal to expected for array of numbers", function (): void {
  assertThrows(() => assert([]).isNotEqualTo([]));
  assertThrows(() => assert([1, 2, 3]).isNotEqualTo([1, 2, 3]));
});

Deno.test("[lib/isNotEqualTo] should not fail when actual is equal to expected for array of strings", function (): void {
  assertThrows(() => assert([]).isNotEqualTo([]));
  assertThrows(() => assert(["a", "b", "c"]).isNotEqualTo(["a", "b", "c"]));
});

Deno.test("[lib/isNotEqualTo] should not fail when actual is equal to expected for array of objects", function (): void {
  assertThrows(() => assert([]).isNotEqualTo([]));
  assertThrows(() => assert([{}, {key: "value"}]).isNotEqualTo([{}, {key: "value"}]));
});

Deno.test("[lib/isNotEqualTo] should not fail when actual is equal to expected for objects", function (): void {
  assertThrows(() => assert({}).isNotEqualTo({}));
  assertThrows(() => assert({key: "value"}).isNotEqualTo({key: "value"}));
});
