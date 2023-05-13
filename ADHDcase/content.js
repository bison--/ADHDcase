chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.text === 'bold_first_letter') {
        boldFirstLetterOfAllText();
    } else if (request.text === 'bold_selected_first_letter') {
        boldFirstLetterOfSelectedText();
    }
});

function boldFirstLetterOfAllText() {
    let all = document.body.getElementsByTagName('*');
    for (let i = 0; i < all.length; i++) {
        let text = all[i].innerText;
        let words = text.split(' ');
        for (let j = 0; j < words.length; j++) {
            if (words[j].length > 0) {
                words[j] = '<b>' + words[j].charAt(0) + '</b>' + words[j].substr(1);
            }
        }
        all[i].innerHTML = words.join(' ');
    }
}

function boldFirstLetterOfSelectedText() {
    let selection = window.getSelection();
    let selectedText = selection.toString();
    let words = selectedText.split(' ');
    for (let j = 0; j < words.length; j++) {
        if (words[j].length > 0) {
            words[j] = '<b>' + words[j].charAt(0) + '</b>' + words[j].substr(1);
        }
    }
    let newContent = words.join(' ');
    let range = selection.getRangeAt(0);
    range.deleteContents();

    // create a new element and set its innerHTML to the new content
    let newNode = document.createElement("span");
    newNode.innerHTML = newContent;

    // append the new node to the range
    range.insertNode(newNode);
}

