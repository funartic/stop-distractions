import { logMessage } from './background-module.js'
logMessage('Hello World from Background using modules');

  browser.browserAction.onClicked.addListener(() => {
    // do not allow to open multiple time
  browser.tabs.create({"url": "../ext_webpage/distraction_overview.html"});
  });