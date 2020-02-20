var ul=[];
var bl=[];

get();

function set(newlane,user){
    if(user==='user'){
        if(typeof(newlane)=='string'){
            ul=ul.concat(newlane);
        }else{
            ul=newlane;
        }
        chrome.storage.sync.set({'user':ul}, function() {
            console.log('用户名关键字：'+ul);
        });
    }else{
        if(typeof(newlane)=='string'){
            bl=bl.concat(newlane);
        }else{
            bl=newlane;
        }
        chrome.storage.sync.set({'blog':bl}, function() {
            console.log('帖子关键字：'+bl);
        });
    }

    get();
}

function get(){
    chrome.storage.sync.get(null,function(result){
        if(result.user){
            ul=result.user;
        }else{
            ul=[];
        }
        if(result.blog){
            bl=result.blog;
        }else{
            bl=[];
        }
    });
}



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        get();
        sendResponse({'ul':ul,'bl':bl});
    });
  