document.addEventListener('mouseup', function() {
  let selection = window.getSelection();
  if (selection) {
      let selectedText = selection.toString().trim();
      if (selectedText.length > 0) {
          chrome.runtime.sendMessage({
              text: selectedText,
              url: window.location.href,
              date: new Date().toISOString()
          });
      }
  }
});
