let backgroundPage = browser.extension.getBackgroundPage();

// NOTE: A different event, load, should be used only to detect a fully-loaded page. It is a common mistake to use load where DOMContentLoaded would be more appropriate.
document.addEventListener("DOMContentLoaded", function(e) {
  // Send the query from the form to the background page.
  console.log('DOM fully loaded and parsed');
  backgroundPage.find();
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