import {isEqualToProxy} from "./lib/isEqualToProxy.ts";
import {isNotEqualToProxy} from "./lib/isNotEqualToProxy.ts";

interface assertThatTypes {
  isEqualTo: (expected: any) => assertThatTypes;
  isNotEqualTo: (expected: any) => assertThatTypes;
}

export function assert(actual: any) {
  const assertthat: assertThatTypes = {} as assertThatTypes;

  assertthat.isEqualTo = isEqualToProxy(actual, assertthat);
  assertthat.isNotEqualTo = isNotEqualToProxy(actual, assertthat);

  return assertthat;
}

