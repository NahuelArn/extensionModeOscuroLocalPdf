document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("toggleButton");

  btn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: toggleDarkMode,
    });
  });

  function toggleDarkMode() {
    const html = document.documentElement;
    if (html.style.filter === "invert(1) hue-rotate(180deg)") {
      html.style.filter = "";
    } else {
      html.style.filter = "invert(1) hue-rotate(180deg)";
    }
  }
});
