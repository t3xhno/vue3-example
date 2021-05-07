module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-recommended"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        // In Vue3, it is no longer required to have just one root element (this is now called "fragments"),
        // So this option should be disabled to allow for such behavior.
        "vue/no-multiple-template-root": "off",
        // For automatically fixing identation levels within the template tags in a .vue file.
        "vue/html-indent": ["error", 4, {
            "attribute": 1, // Intents attributes within a tag.
            "baseIndent": 1,
            "closeBracket": 0, // Does not indent the closing bracket of a tag.
            "alignAttributesVertically": true,
            "ignores": []
        }],
        // Must use === / !==, except when comparing with null, two literals, or with typeof.
        "eqeqeq": ["error", "smart"],
        // No reduntant else after the the if returns a value. Fixed automatically.
        "no-else-return": ["error", {
            "allowElseIf": false
        }],
        // GET BACK TO THE MAGIC NUMBERS - NEEDS BETTER DEFINITION
        "no-magic-numbers": ["error"],
        "no-multi-spaces": ["error", {
            "ignoreEOLComments": true,
            "exceptions": {
                // Ignore these, so we can format the declarations vertically.
                "Property": true,
                "VariableDeclarator": true,
                "ImportDeclaration": true
            }
        }]
        // ADD STYLE RULES! TO BE CONTINUED!
        // https://eslint.org/docs/rules/#stylistic-issues
    }
};
