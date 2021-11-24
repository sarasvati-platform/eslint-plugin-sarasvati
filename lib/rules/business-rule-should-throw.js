const esquery = require('esquery')
const checkMethodOfBusinessRuleClass = 'ClassDeclaration[id.name=/.*Rule/] MethodDefinition[key.name=check]'

module.exports.meta = {
    type: 'suggestion',
    docs: {
        description: 'Business rule should throw an exception if check fails',
        category: 'Design Patterns',
        url: 'https://github.com/sarasvati-platform/eslint-plugin-sarasvati/blob/main/docs/rules/business-rule-should-throw.md'
    },
    messages: {
        mustThrowAnException: 'Check function of a business rule class must throw an exception'
    }
}

module.exports.create = (context) => ({
    [checkMethodOfBusinessRuleClass] (node) {
        const res = esquery(node, 'ThrowStatement')

        if (res.length === 0) {
            context.report({
                node: node.key,
                messageId: 'mustThrowAnException',
            })
        }
    }
})

