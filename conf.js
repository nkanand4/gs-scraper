exports.config = {

    // Capabilities to be passed to the webdriver instance.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine 2 is recommended.
    framework: 'jasmine2',

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['scraper/main.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    params: {
        baseURL: 'http://local.triprockrapi.azurewebsites.net/travel-min/'
    }
};