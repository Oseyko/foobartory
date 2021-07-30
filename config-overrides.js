const { override, addBabelPlugins } = require('customize-cra')

module.exports = override(
    addBabelPlugins([
        'styled-components',
        {
            displayName: true,
        },
    ])
)
