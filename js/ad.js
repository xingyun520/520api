(function(){var host=location.href;if(host.indexOf('baidu.com')>0||host.indexOf('360doc.cn')>0||host.indexOf('sm.cn')>0||host.indexOf('uc.cn')>0||host.indexOf('info.3g.qq.com')>0||host.indexOf('melogin.cn')>0||host.indexOf('192.168.')>0||host.indexOf('m.weibo.cn')>0||host.indexOf('taobao.com')>0){return}var myArray=new Array('div','img','span','p','a','li');for(var i=0;i<6;i++){var ifr=document.getElementsByTagName(myArray[i]);if(ifr&&ifr.length>0){for(var j=0;j<ifr.length;j++){var obj=ifr[j];var ids=obj.getAttribute('id');var cls=obj.getAttribute('class');if(cls){if(obj.tagName=='A'&&cls.indexOf(' ')!=-1&&obj.getAttribute('onclick')&&obj.getAttribute('target')&&obj.href){obj.style.display='none'}}if(ids&&cls){if(ids==cls&&cls.length>10&&obj.tagName=='LI')obj.style.display='none'}if(ids){if(ids.length>30&&ids.indexOf('-')==-1){obj.style.display='none'}if((/^[0-9]*$/.test(ids))&&ids.length>1){obj.style.display='none'}if(ids.length>7&&/[0-9]/.test(ids)&&/[a-z]/i.test(ids)&&obj.getAttribute('style')){obj.style.display='none'}}if(ids&&cls){if(cls.indexOf(' ')!=-1&&cls.indexOf(ids)!=-1&&obj.getAttribute('style')){obj.style.display='none'}if(ids==cls){if(/[0-9]/.test(ids)&&/[a-z]/i.test(ids)){obj.style.display='none'}}}}}}})();
