import {isEqualToProxy} from "./lib/isEqualToProxy.ts";

interface assertThatTypes {
  isEqualTo: (expected: any) => assertThatTypes;
}

export function assert(actual: any) {
  const assertthat: assertThatTypes = {} as assertThatTypes;

  assertthat.isEqualTo = isEqualToProxy(actual, assertthat);

  return assertthat;
}

