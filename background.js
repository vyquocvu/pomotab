chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://pomoday.app";
    chrome.tabs.create({ url: newURL });
});