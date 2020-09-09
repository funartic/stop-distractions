async function find() {
    browser.runtime.sendMessage({msg: "clear-results"});
  
    let this_tab_url = browser.runtime.getURL("../ext_webpage/distraction_overview.html");
    let tabs = await browser.tabs.query({});
    let activeTab = await browser.tabs.query({active: true});

    // check if distraction_overview is loaded.

    for (let tab of tabs) {
      // Iterate through the tabs, but exclude the current tab.
      if (tab.url === this_tab_url) {
        continue;
      }
  

      browser.runtime.sendMessage({
        msg: "found-result",
        id: tab.id,
        url: tab.url,
        asd: tab
       // count: result.count
      });
    }
  }

  browser.browserAction.onClicked.addListener(() => {
    // do not allow to open multiple time
  browser.tabs.create({"url": "../ext_webpage/distraction_overview.html"});
  });