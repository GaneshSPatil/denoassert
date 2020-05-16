import {isEqualToProxy} from "./lib/isEqualToProxy.ts";
import {isNotEqualToProxy} from "./lib/isNotEqualToProxy.ts";
import {isTrueProxy} from "./lib/isTrueProxy.ts";
import {isFalseProxy} from "./lib/isFalseProxy.ts";
import {isTruthyProxy} from "./lib/isTruthyProxy.ts";
import {isFalsyProxy} from "./lib/isFalsyProxy.ts";

interface assertThatTypes {
  isEqualTo: (expected: any) => assertThatTypes;
  isNotEqualTo: (expected: any) => assertThatTypes;
  isTrue: () => assertThatTypes;
  isFalse: () => assertThatTypes;
  isTruthy: () => assertThatTypes;
  isFalsy: () => assertThatTypes;
}

export function assert(actual: any) {
  const assertthat: assertThatTypes = {} as assertThatTypes;

  assertthat.isEqualTo    = isEqualToProxy(actual, assertthat);
  assertthat.isNotEqualTo = isNotEqualToProxy(actual, assertthat);
  assertthat.isTrue       = isTrueProxy(actual, assertthat);
  assertthat.isFalse      = isFalseProxy(actual, assertthat);
  assertthat.isTruthy     = isTruthyProxy(actual, assertthat);
  assertthat.isFalsy      = isFalsyProxy(actual, assertthat);

  return assertthat;
}

