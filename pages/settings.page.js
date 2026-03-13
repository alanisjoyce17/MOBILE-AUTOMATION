class SettingsPage {

    get networkInternet() {
        return $('//android.widget.TextView[@text="Network & internet"]');
    }

    async clicarNetwork() {
        await this.networkInternet.click();
    }

}

module.exports = new SettingsPage();