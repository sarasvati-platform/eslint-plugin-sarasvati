# Check function of a business rule class must throw an exception

A class that describes business rules must follow the specific contract.  Check function of a business rule class must throw an exception if rule is violated.

## Rule Details

Examples of **incorrect** code for this rule:

```js
class MyBusinessRule {
    check() {
        return false
    }
}
```

Examples of **correct** code for this rule:

```js
class MyBusinessRule {
    check() {
        if (failed) { throw new Exception('') }
    }
}
```