//贴吧屏蔽工具

//屏蔽回复我的中的
var ul=[];
var bl=[];
var url = window.location.href;

chrome.runtime.sendMessage(null, function(response) {
    ul=response.ul;
    bl=response.bl;
    console.log(ul);
    //识别为回复我的
    if(url.indexOf("i/replyme")>=0){
        var x=document.getElementsByClassName('feed_item clearfix feed_replyme j_feed_replyme');
        for(i=0;i<x.length;i++){
            for(j=0;j<ul.length;j++){
                if(x[i].innerText.indexOf(ul[j])>=0){
                    x[i].style='display:none';
                }   
            }
        }
    }else if(url.indexOf("tieba.baidu.com/f")>=0){
        var x=document.getElementsByClassName(" j_thread_list clearfix");
        for(i=0;i<x.length;i++){
            for(j=0;j<ul.length;j++){
                if(x[i].getElementsByClassName("tb_icon_author ")[0].getAttribute('title').indexOf(ul[j])>=0){
                    x[i].style='display:none';
                }   
            }
            for(k=0;k<bl.length;k++){
                if(x[i].getElementsByTagName("a")[0].getAttribute('title').indexOf(bl[k])>=0){
                    x[i].style='display:none';
                }   
            }
        }
    }else if(url.indexOf("i/atme")>=0){
        var x=document.getElementsByClassName("feed_item clearfix feed_atme j_feed_atme");
        for(i=0;i<x.length;i++){
            for(j=0;j<ul.length;j++){
                if(x[i].innerText.indexOf(ul[j])>=0){
                    x[i].style='display:none';
                }   
            }
            for(k=0;k<bl.length;k++){
                if(x[i].innerText.indexOf(bl[k])>=0){
                    x[i].style='display:none';
                }   
            }
        }
    }
    console.log('屏蔽完成');
});

