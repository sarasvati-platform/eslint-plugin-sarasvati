const rule = require('../../../lib/rules/business-rule-should-have-check-func')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    }
})

ruleTester.run('business-rule-should-have-check-func', rule, {
    valid: [
        'class TestRule { check() {} }'
    ],

    invalid: [
        {
            code: 'class TestRule {}',
            errors: [{
                message: 'Business rule TestRule must have check method',
                type: 'Identifier'
            }]
        }
    ]
})
