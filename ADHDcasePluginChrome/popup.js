/*
document.getElementById('boldButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {text: 'bold_first_letter'});
    });
});
*/

document.getElementById('boldSelectedButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: function() {
                window.postMessage({text: 'bold_selected_first_letter'}, '*');
            },
            args: []
        });
    });
});
