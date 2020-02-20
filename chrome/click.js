var textbox=document.getElementById('key');
var area=document.getElementById('area');
var x='';
var nowmode='user';
var bg = chrome.extension.getBackgroundPage();

document.getElementById('saveall').onclick=function(){
    
    x=area.value.replace(/ /g,'');
    if(x.indexOf("\n")==0){
        x=x.replace("\n","");
    }
    if(x.substring(x.length-2)=="\n\n"){
        x=x.substring(0,x.length-2);
    }
    x=x.replace(/\n\n/g,'\n').replace(/\n\n/g,'\n').replace(/\n\n/g,'\n');
    bg.set(x.split('\n'),nowmode);
    getarea();
};

function getarea(){
    if(nowmode=="user"){
        document.getElementById('getallu').click();
    }
    else{
        document.getElementById('getallb').click();
    }
}
document.getElementById('getallu').onclick=function(){
    x='';
    nowmode="user";
    for(i=0;i<bg.ul.length;i++){
        x+=bg.ul[i]+'\n';
    }
    document.getElementById('saveall').value="保存全部用户";
    area.value=x;
    x='';
};
document.getElementById('getallb').onclick=function(){
    x='';
    nowmode="blog";
    for(i=0;i<bg.bl.length;i++){
        x+=bg.bl[i]+'\n';
    }
    document.getElementById('saveall').value="保存全部标题";
    area.value=x;
    x='';
};

document.getElementById('adduser').onclick=function(){
    nowmode="user";
    x=textbox.value;
    textbox.value='';
    bg.set(x,'user');
    getarea();
};

document.getElementById('addblog').onclick=function(){
    nowmode='blog';
    x=textbox.value;
    textbox.value='';
    bg.set(x,'blog');
    getarea();
};

document.getElementById('getallu').click();