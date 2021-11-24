const rule = require('../../../lib/rules/business-rule-should-throw')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    }
})

ruleTester.run('business-rule-should-throw', rule, {
    valid: [
        'class TestRule { check() { throw new Exception() } }'
    ],

    invalid: [
        {
            code: 'class TestRule { check() {} }',
            errors: [{
                message: 'Check function of a business rule class must throw an exception',
                type: 'Identifier'
            }]
        }
    ]
})
