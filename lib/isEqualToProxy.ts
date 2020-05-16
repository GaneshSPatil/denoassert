import {equal} from "https://deno.land/std/testing/asserts.ts";

export function isEqualToProxy(actual: any, self: any) {
  return function (expected: any): any {
    if (!equal(actual, expected)) {
      throw new Error("Boom!");
    }

    return self;
  }
}
