import {equal} from "https://deno.land/std/testing/asserts.ts";

export function isFalseProxy(actual: any, self: any) {
  return function (): any {
    if (!equal(actual, false)) {
      throw new Error(`Expected '${actual}' to be false.`);
    }

    return self;
  }
}
