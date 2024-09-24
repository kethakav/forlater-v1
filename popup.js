document.addEventListener('DOMContentLoaded', function() {
  // Display saved highlights
  chrome.storage.local.get({highlights: []}, function(result) {
    let highlightsDiv = document.getElementById('highlights');
    result.highlights.reverse().forEach(function(highlight) {
      let div = document.createElement('div');
      div.className = 'highlight';
      div.innerHTML = `
        <p>${highlight.text}</p>
        <p class="date">${new Date(highlight.date).toLocaleString()}</p>
        <a href="${highlight.url}" class ="url" target="_blank">${highlight.url}</a>
      `;
      highlightsDiv.appendChild(div);
    });
  });

  // Handle the "Clear All" button
  document.getElementById('clear-button').addEventListener('click', function() {
    if (confirm("Are you sure you want to clear all highlights?")) {
      chrome.storage.local.set({highlights: []}, function() {
        document.getElementById('highlights').innerHTML = ''; // Clear the displayed highlights
      });
    }
  });
});
