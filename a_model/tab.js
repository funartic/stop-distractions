/**
 * Creates a context menu item.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab}
 * @public
 * @param {string} title
 * @param {Object} properties
 * @returns {Promise}
 */
export default class BrowserTab {

    constructor(id, url, active) {
        this.id = id;
        this.url = url;
        this.active = active;
    }

    toConsole() {
        console.log(this.toString);
    }

    toString() {
        return `Created tab = { id: ${this.id}, url: ${this.url}, active: ${this.active} }`;
    }
}