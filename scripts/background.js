chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.isChecked !== undefined) {
    chrome.storage.local.set({ [`checkbox-${message.id}`]: message.isChecked });
  } else {
    chrome.storage.local.get([`checkbox-${message.id}`], (result) => {
      sendResponse({ isChecked: result[`checkbox-${message.id}`] });
    });
    return true;
  }
});
