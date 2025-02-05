import { assertEquals } from "@std/assert/equals";
import { maximumWealth } from "./main.ts";

Deno.test("problem 1672", () => {
  assertEquals(
    maximumWealth([
      [1, 2, 3],
      [3, 2, 1],
    ]),
    6
  );
  assertEquals(
    maximumWealth([
      [1, 5],
      [7, 3],
      [3, 5],
    ]),
    10
  );
  assertEquals(
    maximumWealth([
      [2, 8, 7],
      [7, 1, 3],
      [1, 9, 5],
    ]),
    17
  );
});
