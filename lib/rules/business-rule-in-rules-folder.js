const businessRuleClass = 'ClassDeclaration[id.name=/.*Rule/]'

module.exports.meta = {
    type: 'suggestion',
    docs: {
        description: 'You should put business rule classes into rules folder',
        category: 'Design Patterns',
        url: 'https://github.com/sarasvati-platform/eslint-plugin-sarasvati/blob/main/docs/rules/business-rule-should-throw.md'
    },
    messages: {
        wrongLocation: 'Put {{name}} into rules folder'
    }
}

module.exports.create = (context) => ({
    [businessRuleClass] (node) {
        const fileName = context.getFilename()

        if (!fileName.includes('rules')) {
            context.report({
                node: node.id,
                messageId: 'wrongLocation',
                data: { name: node.id.name }
            })
        }
    }
})
