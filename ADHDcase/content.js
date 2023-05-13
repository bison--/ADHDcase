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
            words[j] = boldFirstSyllable(words[j]);
        }
        all[i].innerHTML = words.join(' ');
    }
}

function boldFirstLetterOfSelectedText() {
    let selection = window.getSelection();
    let selectedText = selection.toString();
    let words = selectedText.split(' ');
    for (let j = 0; j < words.length; j++) {
        words[j] = boldFirstSyllable(words[j]);
    }
    let newContent = words.join(' ');
    let range = selection.getRangeAt(0);
    range.deleteContents();
    let newNode = document.createElement("span");
    newNode.innerHTML = newContent;
    range.insertNode(newNode);
}

function boldFirstSyllable(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (word.length === 1 || vowels.includes(word[0])) {
        return '<b>' + word.charAt(0) + '</b>' + word.substr(1);
    }
    for (let i = 1; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            return '<b>' + word.substring(0, i + 1) + '</b>' + word.substr(i + 1);
        }
    }
    return '<b>' + word.charAt(0) + '</b>' + word.substr(1);
}



