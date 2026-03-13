exports.config = {

    runner: 'local',

    hostname: '127.0.0.1',
    port: 4723,
    path: '/',

    framework: 'cucumber',

      reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results'
        }]
    ],

    specs: [
        './features/**/*.feature'
    ],

    cucumberOpts: {
    require: ['./features/step-definitions/**/*.js'],
    timeout: 60000
},

    capabilities: [{
        platformName: "Android",
        "appium:automationName": "UiAutomator2",
        "appium:deviceName": "Android Emulator",
        "appium:appPackage": "com.android.settings",
        "appium:appActivity": ".Settings",
        "appium:noReset": true
    }]
}