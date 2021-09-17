document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('bj_newtab');
    checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
        chrome.tabs.create({active: true, url: "https://breadjar.herokuapp.com/success?o=true"});
    });
    }, false);
}, false);