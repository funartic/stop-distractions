async function find() {
  console.log("find");
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

function onGot(page) {
  console.log(page);
  find();
}

function onError(error) {
  console.log(`Error: ${error}`);
}


// NOTE: A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use load where DOMContentLoaded would be more appropriate.
document.addEventListener("DOMContentLoaded", function(e) {
  // Send the query from the form to the background page.
  console.log('DOM fully loaded and parsed');
  find();
  e.preventDefault();
});

let results = document.getElementById("result-list");

function handleMessage(request, sender, response) {
  // Handle responses coming back from the background page.
  if (request.msg === "clear-results") {
    results.innerHTML = "";
  }
  if (request.msg === "found-result") {
    // List out responses from the background page as they come in.
    let li = document.createElement("li");
    li.innerText = `Tab id: ${request.id} at url: ${request.url}`;
    results.appendChild(li);
  }
}

browser.runtime.onMessage.addListener(handleMessage);

browser.tabs.onRemoved.addListener((tabId, removeInfo) => {
  console.log(`The tab with id: ${tabId}, is closing`);
  find();
});

browser.tabs.onCreated.addListener((tab) => {
  console.log(`The tab with id: ${tab.id}, is created`);
  find();
});