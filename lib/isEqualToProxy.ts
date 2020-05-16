import { equal } from "https://deno.land/std/testing/asserts.ts";

export function isEqualToProxy(actual: any, self: any) {
  return function (expected: any): any {
    if (!equal(actual, expected)) {
      // deno-fmt-ignore
      throw new Error(`Expected '${JSON.stringify(actual, null, 2)}' to equal '${JSON.stringify(expected, null, 2)}'`);
    }

    return self;
  };
}
