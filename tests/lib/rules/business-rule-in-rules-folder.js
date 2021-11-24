const rule = require('../../../lib/rules/business-rule-in-rules-folder')
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
            code: 'class TestRule { }',
            filename: 'rules/test-rule.js'
        }
    ],

    invalid: [
        {
            code: 'class TestRule { }',
            filename: 'somethere/test-rule.js',
            errors: [{
                message: 'Put TestRule into rules folder',
                type: 'Identifier'
            }]
        }
    ]
})
