import OverviewExtensionPage from './a_view/page_overview.js';
console.log('Opened the page extension');

var overview_page = new OverviewExtensionPage();

overview_page.onReady(() => {
    logMessage('All doms loaded of the page extension');
    overview_page.loadOpenTabs();
});

browser.tabs.onRemoved.addListener((tabId, removeInfo) => {
    console.log(`The tab with id: ${tabId}, is closing`);
    overview_page.loadOpenTabs();
});

browser.tabs.onCreated.addListener((tab) => {
    console.log(`The tab with id: ${tab.id}, is created`);
    overview_page.loadOpenTabs();
});