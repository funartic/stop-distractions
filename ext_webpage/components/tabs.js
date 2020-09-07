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

    static getAll() {
        console.log("getAll");
        return new Promise(async (resolve, reject) => {
            let success = await tabs;
            resolve(success);
            return Promise.resolve();
        });
    }

    static getSpecificTabsWithFilter(filter) {
        let tabs = browser.tabs.query({filter})
        .catch(console.error)
        .then(() => console.log('We do cleanup here'));
        return tabs;
    }

}