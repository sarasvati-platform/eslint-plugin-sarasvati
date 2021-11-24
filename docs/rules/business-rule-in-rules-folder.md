# Business rule class must be in the rules folder

A class that describes business rules must follow the specific contract. Ypus should put those classes into `rules` folder.

## Rule Details

Examples of **incorrect** code for this rule:

```js
// path: src/somethere/business-rule.ts
class MyBusinessRule {
}
```

Examples of **correct** code for this rule:

```js
// path: src/flashcards/rules/business-rule.ts
class MyBusinessRule {
    check(data: string, more: int) {
    }
}
```