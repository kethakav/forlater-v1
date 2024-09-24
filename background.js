chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.text) {
    chrome.storage.local.get({highlights: []}, function(result) {
      let highlights = result.highlights;
      highlights.push({
        text: request.text,
        url: request.url,
        date: request.date
      });
      chrome.storage.local.set({highlights: highlights});
    });
  }
});