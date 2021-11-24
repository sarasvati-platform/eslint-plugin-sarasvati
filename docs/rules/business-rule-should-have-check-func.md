# Business rule class must have a check function

A class that describes business rules must follow the specific contract. It must have a `check` function.

## Rule Details

Examples of **incorrect** code for this rule:

```js
class MyBusinessRule {
    // no check method
}
```

Examples of **correct** code for this rule:

```js
class MyBusinessRule {
    check(data: string, more: int) {
    }
}
```