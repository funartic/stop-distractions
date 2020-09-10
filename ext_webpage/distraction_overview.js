
function onGot(page) {
  console.log(page);
  window.runtime.find();
}

function onError(error) {
  console.log(`Error: ${error}`);
}

let backgroundPage = browser.runtime.getBackgroundPage();

// NOTE: A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use load where DOMContentLoaded would be more appropriate.
document.addEventListener("DOMContentLoaded", function(e) {
  // Send the query from the form to the background page.
  console.log('DOM fully loaded and parsed');
  backgroundPage.then(onGot, onError);
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
  backgroundPage.find();
});

browser.tabs.onCreated.addListener((tab) => {
  console.log(`The tab with id: ${tab.id}, is created`);
  backgroundPage.find();
});