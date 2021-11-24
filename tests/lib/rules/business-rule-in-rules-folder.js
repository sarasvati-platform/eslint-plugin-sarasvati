const rule = require('../../../lib/rules/business-rule-should-throw')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    }
})

ruleTester.run('business-rule-in-rules-folder', rule, {
    valid: [
        {
            code: 'class TestRule { check() { throw new Exception() } }',
            filename: 'rules/test-rule.js'
        }
    ],

    invalid: [
        {
            code: 'class TestRule { check() {} }',
            filename: 'somethere/test-rule.js',
            errors: [{
                message: 'Check function of a business rule class must throw an exception',
                type: 'Identifier'
            }]
        }
    ]
})
