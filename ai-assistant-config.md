# AI Assistant Configuration

This file contains instructions and conventions to follow when generating or modifying code in this repository.

## Go Code Conventions

- All Go files under the `problems` directory must use `package problems` as the package name
- Follow standard Go formatting (gofmt)

## TypeScript Code Conventions

- Use TypeScript for all problems with `.ts` extension

## Project Structure

- Each LeetCode problem should be in its own directory under `problems/`
- Directory naming convention: `{problem-number}.{ProblemName}`
- Each problem directory should contain:
  - Implementation file (main.go, main.ts, etc.)
  - Test file (main_test.go, main.test.ts, etc.)
  - readme.md containing the description of the problem

## Testing

- All code should have associated tests
- Go tests MUST use the testify package for assertions (github.com/stretchr/testify/assert)
- TypeScript implementations MUST include a test file (main.test.ts) for Deno with the following format:

  - Import the implementation using relative path with .ts extension
  - Import assert functions from "@std/assert" modules
  - Use Deno.test() function for individual test cases
  - Example:

    ```typescript
    import { myFunction } from "./main.ts";
    import { assertEquals } from "@std/assert/equals";

    Deno.test("test case description", () => {
      assertEquals(myFunction(input), expected);
    });
    ```
