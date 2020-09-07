/**
 * Creates a context menu item.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/Tab}
 * @public
 * @param {string} title
 * @param {Object} properties
 * @returns {Promise}
 */
export default class Tab {

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toConsole() {
        console.log(`Created tab obj ${id}`);
    }
}