import BrowserTabs from '../a_model/tabs.js';

/*
 * Variable declarations
 */
let browserTabs = new BrowserTabs();

/*
 * initialize listener
 */
initialExtensionPage(browserTabs);

/*
 * function declarations
 */

async function initialExtensionPage(browserTabs) {
    browser.browserAction.onClicked.addListener(() => {
        let extensionUrl = 'a_view/distraction_overview.html';
        browserTabs.getAllTabs((tabs) => {
            let extensionTab = browserTabs.findTabWithUrl(tabs, extensionUrl);
            if (extensionTab === undefined) {
                browser.tabs.create({ "url": "../a_view/distraction_overview.html" }).then((tab) => {
                    sendMessageToTab(tab, tabs);
                }, onError);

            } else {
                sendMessageToTab(extensionTab, tabs);
            }
        });

    });
}


function handleActivated(activeInfo) {
    console.log("Tab " + activeInfo.tabId +
        " was activated");
}

browser.tabs.onActivated.addListener(handleActivated);



function sendMessageToTab(tab, tabs) {
    for (let element in tabs) {
        browser.tabs.sendMessage(
            tab.id,
            {
                msg: "found-result",
                id: tabs[element].id,
                url: tabs[element].url
            })
    }
};

function onError(error) {
    console.error(`Error: ${error}`);
}