import {equal} from "https://deno.land/std/testing/asserts.ts";

export function isFalsyProxy(actual: any, self: any) {
  return function (): any {
    if (!!actual) {
      throw new Error(`Expected '${actual}' to be Falsy.`);
    }

    return self;
  }
}
