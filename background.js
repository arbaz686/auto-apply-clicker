// Send a message every 2 seconds to trigger a click
setInterval(() => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "clickApply" });
    });
  }, 5000);
  
