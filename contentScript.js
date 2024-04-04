let darkModeEnabled = false;

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;
  var cover = document.createElement("div");
  let css = `
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    mix-blend-mode: difference;
    z-index: 9999;
  `;
  cover.setAttribute("style", css);
  document.body.appendChild(cover);
  return darkModeEnabled;
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'toggleDarkMode') {
    const isDarkModeEnabled = toggleDarkMode();
    sendResponse({ darkModeEnabled: isDarkModeEnabled });
  }
});
