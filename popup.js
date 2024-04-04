document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggleButton');
  toggleButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'toggleDarkMode'});
      toggleButton.classList.toggle('off');
      toggleButton.textContent = toggleButton.classList.contains('off') ? 'Desactivar modo oscuro' : 'Activar modo oscuro';
    });
  });
});
