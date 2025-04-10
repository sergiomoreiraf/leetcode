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
  - Test file (main_test.go, etc.)

## Testing

- All code should have associated tests
- Go tests should use the standard testing package
