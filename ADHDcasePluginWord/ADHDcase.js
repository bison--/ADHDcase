document.getElementById('make-bold-button').addEventListener('click', makeBold);

function makeBold() {
    Word.run(function (context) {
        var range = context.document.getSelection();
        context.load(range, 'text');
        return context.sync().then(function () {
            var words = range.text.split(' ');
            for (var i = 0; i < words.length; i++) {
                words[i] = boldFirstSyllable(words[i]);
            }
            range.insertText(words.join(' '), Word.InsertLocation.replace);
            return context.sync();
        });
    }).catch(function (error) {
        console.log(error);
    });
}

function boldFirstSyllable(word) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (word.length === 1 || vowels.includes(word[0])) {
        return word.charAt(0) + word.substr(1);
    }
    for (var i = 1; i < word.length; i++) {
        if (vowels.includes(word[i].toLowerCase())) {
            return word.substring(0, i + 1) + word.substr(i + 1);
        }
    }
    return word.charAt(0) + word.substr(1);
}
