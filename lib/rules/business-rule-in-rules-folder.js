const businessRuleClass = 'ClassDeclaration[id.name=/.*Rule/]'

module.exports.meta = {
    type: 'suggestion',
    docs: {
        description: 'You should put business rule classes into rules folder',
        category: 'Design Patterns',
    },
    messages: {
        wrongLocation: 'Put {{name}} into rules folder'
    }
}

module.exports.create = (context) => ({
    [businessRuleClass] (node) {
        const fileName = context.getFileName()

        if (!fileName.includes('rules')) {
            context.report({
                node: node.key,
                messageId: 'wrongLocation',
                data: { name: node.id.name }
            })
        }
    }
})
