require("@testing-library/jest-dom");
module.exports = {
    // ...
    
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(axios)/).*'
    ]
};
