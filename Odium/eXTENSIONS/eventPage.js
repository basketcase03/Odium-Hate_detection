var contextMenuItems={
    "id":"getSentiment",
    "title":"GetSentiment",
    "contexts":["selection"]
};
chrome.contextMenus.create(contextMenuItems);


chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId=="getSentiment" && clickData.selectionText){
        if((clickData.selectionText)){
            chrome.storage.sync.get('Svalue',function(sentiment_obj){
                var newTotal=0;
                
                newTotal=(clickData.selectionText);
                chrome.storage.sync.set({'Svalue':newTotal})
            })
        }
    }
})