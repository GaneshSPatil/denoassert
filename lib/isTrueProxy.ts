import {equal} from "https://deno.land/std/testing/asserts.ts";

export function isTrueProxy(actual: any, self: any) {
  return function (): any {
    if (!equal(actual, true)) {
      throw new Error(`Expected '${actual}' to be true.`);
    }

    return self;
  }
}
