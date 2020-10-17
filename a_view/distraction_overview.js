import OverviewExtensionPage from '../a_view/page_overview.js';
let backgroundPage = browser.extension.getBackgroundPage();
let overviewExtensionPage = new OverviewExtensionPage();



browser.runtime.onMessage.addListener(request => {
    let results = document.getElementById("result-list");
    if (request.msg === "clear-results") {
        results.innerHTML = "";
      }
      if (request.msg === "found-result") {
        // List out responses from the background page as they come in.
        let li = document.createElement("li");
        li.innerText = `Tab id: ${request.id} at url: ${request.url} `;
        results.appendChild(li);
      }
  });