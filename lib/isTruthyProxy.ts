import {equal} from "https://deno.land/std/testing/asserts.ts";

export function isTruthyProxy(actual: any, self: any) {
  return function (): any {
    if (!actual) {
      throw new Error(`Expected '${actual}' to be truthy.`);
    }

    return self;
  }
}
