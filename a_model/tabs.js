const tabs = browser.tabs.query({})
/**
 * Creates a context menu item.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs}
 * @public
 * @param {string} title
 * @param {Object} properties
 * @returns {Promise}
 */
export default class BrowserTabs {

    _onError(error) {
        console.log(`Error on BrowserTabs: ${error}`);
    }

    /**
     * @returns the result from onSuccess
     * @param {function} onSuccess 
     */
    async getAllTabs(onSuccess) {
        return await browser.tabs.query({})
            .then(onSuccess).catch(this._onError);
    }

    findTabWithUrl(tabs, url) {
        return tabs.find((item) => {
            return item.url.endsWith(url);
        });
    }

    findTabWithTabId(tabs, id) {
        return tabs.find((item) => {
            return item.id === id;
        });
    }
}