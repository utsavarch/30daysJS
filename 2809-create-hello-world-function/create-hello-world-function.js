/**
 * @return {Function}
 */
let createHelloWorld = function() {
    
    return function() {
        return "Hello World"
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */