const { Given, When, Then } = require('@wdio/cucumber-framework');
const SettingsPage = require('../../pages/settings.page');

Given('que estou na tela de Settings', async () => {
    console.log("Settings aberto");
});

When('clico em Network & internet', async () => {
    await SettingsPage.clicarNetwork();
});

Then('devo acessar as configurações de rede', async () => {
    await browser.pause(3000);
});