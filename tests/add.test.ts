import { describe, expect, it } from "vitest";
import { add } from "../nodejs/wasm_template";

it("add", () => {
  expect(add(0, 2)).toBe(2);
});
