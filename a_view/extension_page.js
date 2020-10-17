/** @module StopDistraction */
/**
 * @classdesc This "interface" represents the extension pages
 *            and needs to be extended by them.
 * 
 * @author Daniel Holzinger <Daniel.Holzinger@dho-dev.de>
 * @name ExtensionPage
 * @abstract
 * @class module:Stop-Distraction.ExtensionPage
 * 
 * @property {Function} onReady {@link module:StopDistraction.ExtensionPage#onReady}
 * 
 */
class ExtensionPage {
    /**
     * This method callback the given function in case that the DOM elements of the 
     * extension page are loaded.
     * 
     * @async
     * @method module:StopDistraction.ExtensionPage#onReady
     * @name onReady
     * @callback functionOnReady 
     */
    onReady = (functionOnReady) => {
        document.addEventListener("DOMContentLoaded", (e) => {
            functionOnReady();
            e.preventDefault();
        });
    }
} export default ExtensionPage;