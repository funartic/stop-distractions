/** @module StopDistraction */
import ExtensionPage from './extension_page.js';
/** @module StopDistraction */
/**
 * @classdesc This class represents the page opens by clicking on addon symbol.
 * 
 * @author Daniel Holzinger <Daniel.Holzinger@dho-dev.de>
 * @name OverviewExtensionPage
 *
 * @class module:Stop-Distraction.OverviewExtensionPage
 * @extends module:StopDistraction.ExtensionPage
 * @property {Function} onReady {@link module:StopDistraction.OverviewExtensionPage#loadOpenTabs}
 * 
 */
class OverviewExtensionPage extends ExtensionPage {

    constructor() {
        super();
    }

    getUrl() {
        return 'a_view/distraction_overview.html';
    }

    /**
     * This method loads 
     * 
     * @method module:StopDistraction.OverviewExtensionPage#loadOpenTabs
     * @name loadOpenTabs
     */
    loadOpenTabs() {
        this._clearOpenTabs();
        let result_list = document.getElementById("result-list");
        let li = document.createElement("li");
        li.innerText = "hi";
        result_list.appendChild(li);

    }

    _clearOpenTabs() {
        let result_list = document.getElementById("result-list");
        result_list.innerHTML = "";
    }

} export default OverviewExtensionPage;