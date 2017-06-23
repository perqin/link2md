var titleDiv;
var urlDiv;
var markdownDiv;

chrome.tabs.getSelected(function (tab) {
    console.log(tab.title);
    console.log(tab.url);
    console.log('[' + tab.title + '](' + tab.url + ')');

    var mardown = '[' + tab.title + '](' + tab.url + ')';

    titleDiv = document.getElementById('title-div');
    urlDiv = document.getElementById('url-div');
    markdownDiv = document.getElementById('markdown-div');

    titleDiv.innerText = tab.title;
    urlDiv.innerText = tab.url;
    markdownDiv.innerText = mardown;
    markdownDiv.onclick = selectText;
});

function selectText() {
    if (document.selection) {
        var range = document.body.createTextRange();
        range.moveToElementText(markdownDiv);
        range.select();
    } else if (window.getSelection) {
        var range = document.createRange();
        range.selectNode(markdownDiv);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}
