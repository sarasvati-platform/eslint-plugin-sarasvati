const esquery = require('esquery')

module.exports.meta = {
    type: 'suggestion',
    docs: {
        description: 'Business rule class must implement specific contract',
        category: 'Design Patterns',
        url: 'https://github.com/sarasvati-platform/eslint-plugin-sarasvati/blob/main/docs/rules/business-rule-should-have-check-func.md'
    },
    messages: {
        mustHaveCheckMethod: 'Business rule {{name}} must have check method'
    }
}

module.exports.create = (context) => ({
    'ClassDeclaration[id.name=/.*Rule/]'(node) {
        const res = esquery(node, 'MethodDefinition[key.name=check]')

        if (res.length != 0) { return }

        context.report({
            node: node.id,
            messageId: 'mustHaveCheckMethod',
            data: { name: node.id.name },
        })
    }
})
