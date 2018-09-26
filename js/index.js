window.onload=function(){

//search tabs
(function(){
	var oBar=document.getElementsByClassName("bar")[0];
	var oUl=oBar.getElementsByClassName("tabs")[0];
	var aLi=oUl.getElementsByTagName("li");
	var oText=oBar.getElementsByClassName("text")[0];
	var aText=["例如：荷棠鱼坊烤鱼 或 樱花日本料理","例如：aaaaaa坊烤鱼 或 樱花日本料理","例如：bbbbbb坊烤鱼 或 樱花日本料理","例如：cccccc坊烤鱼 或 樱花日本料理","例如：ddddddd烤鱼 或 樱花日本料理"];
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].className="";
			}
			this.className="active";
			oText.value=aText[this.index];

		}
	}
})();
//search update
(function(){
	var oUpdate=document.getElementsByClassName("update")[0];
	var oUl=oUpdate.getElementsByTagName("ul")[0];
	var oUp=oUpdate.getElementsByClassName("trigger-up")[0];
	var oDown=oUpdate.getElementsByClassName("trigger-down")[0];
	var aText=[{name:"宣萱",time:"54分钟",text:"写了一篇新文章：那些灿烂华美的瞬间"},
			  {name:"木木",time:"52分钟",text:"写了22篇新文章：那些灿烂华美的瞬间"},
			  {name:"大大",time:"59分钟",text:"写了45篇新文章：那些灿烂华美的瞬间"},
			  {name:"ququ",time:"53分钟",text:"写了67篇新文章：那些灿烂华美的瞬间"},
			  {name:"rrrr",time:"51分钟",text:"写了87篇新文章：那些灿烂华美的瞬间"},
			  {name:"4444",time:"50分钟",text:"写了00篇新文章：那些灿烂华美的瞬间"}];
	//初始化 li
	oUl.innerHTML="";
	for(var i=0;i<aText.length;i++){
		var oLi=document.createElement("li");
		oLi.innerHTML='<span>'+aText[i].name+'</span> <em>'+aText[i].time+'</em> <a href="#">'+aText[i].text+'</a>';
		oUl.appendChild(oLi);
	}
	var aLi=oUl.getElementsByTagName("li");
		var liHeight=parseInt(getStyle(aLi[0],"height"));
	var index=0;
	var timer=setInterval(function(){
		oUp.onclick();
	},1500);
	oUpdate.onmouseover=function(){
		clearInterval(timer);
	};
	oUpdate.onmouseout=function(){
		timer=setInterval(function(){
		oUp.onclick();
		},1500);
	};
	oUp.onclick=function(){
		index++;
		var ulTop=parseInt(getStyle(oUl,"top"));
		if(index==aLi.length){
		   index=0;
		}
		console.log(index+"=");
		animate(oUl,{top:(-index*liHeight)});
		console.log(ulTop);
	}
	oDown.onclick=function(){
		index--;
		var ulTop=parseInt(getStyle(oUl,"top"));
		if(index<0){
		   index=aLi.length-1;
		}
		console.log(index+"=");
		animate(oUl,{top:(-index*liHeight)});
		console.log(ulTop);
	}

})();
//wrap1 options-tab
(function(){
	var aLi=document.getElementsByClassName("options-tab")[0].getElementsByTagName("li");
	var aDiv=document.getElementsByClassName("options-con")[0].getElementsByClassName("img-list");
	selection(aLi,aDiv);
})();

//map(地铁图) options-tab
(function(){
	var aLi=document.getElementsByClassName("options-tab")[1].getElementsByTagName("li");
	var aDiv=document.getElementsByClassName("options-tab")[1].getElementsByClassName("map");
	selection(aLi,aDiv);
})();

//.wrap6 tab-list
(function(){
	var aLi=document.getElementsByClassName("tab-list")[1].getElementsByTagName("li");
	var aDiv=document.getElementsByClassName("wrap6")[0].getElementsByClassName("list-item");
	selection(aLi,aDiv);
})();
//.wrap7 tab-list
(function(){
	var aLi=document.getElementsByClassName("tab-list")[0].getElementsByTagName("li");
	var aDiv=document.getElementsByClassName("wrap7")[0].getElementsByClassName("list-item");
	selection(aLi,aDiv);
})();
//hot
(function(){
	aText=["区域：xx<br>人气：11",
		   "用户名：性感宝贝<br/>区域：朝阳CBD<br/>人气：123215",
		   "区域：xx<br>人气：12",
		   "区域：xx<br>人气：13",
		   "区域：xx<br>人气：14",
		   "区域：xx<br>人气：15",
		   "区域：xx<br>人气：622",
		   "区域：xx<br>人气：182",
		   "区域：xx<br>人气：172",
		   "区域：xx<br>人气：121"];
	var aLi=document.getElementsByClassName("wrap8")[0].getElementsByTagName("ol")[0].getElementsByTagName("li");
	for(var i=1;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			console.log(this);
			if(this.getElementsByTagName("p")[0]){
				console.log(this.getElementsByTagName("p")[0]);
				this.getElementsByTagName("p")[0].innerHTML=aText[this.index-1];
			}else{
				var oP=document.createElement("p");
				oP.innerHTML=aText[this.index-1];
				this.appendChild(oP);
			}
			for(var j=1;j<aLi.length;j++){
				if(aLi[j].getElementsByTagName("p")[0]){
					aLi[j].getElementsByTagName("p")[0].style.display = 'none';
				}
				aLi[this.index].getElementsByTagName("p")[0].style.display = 'block';
			}
		}
	}
})();
//auto-img
(function(){
	var oDiv=document.getElementsByClassName("auto-img")[0];
	var aLi1=oDiv.getElementsByTagName("ul")[0].getElementsByTagName("li");
	var aLi2=oDiv.getElementsByTagName("ol")[0].getElementsByTagName("li");
	var oP=oDiv.getElementsByTagName("p")[0];
	var aText=["爸爸去222~","爸爸去111~","爸爸去去哪儿~"];
	console.log(aLi2);
	selection(aLi2,aLi1);
	var index=0;
	var timer=setInterval(function(){
		index++;
		if(index==aLi2.length){
			index=0;
		}
		aLi2[index].onclick();
	}, 1500);
	oDiv.onmouseover=function(){
		clearInterval(timer);
	};
	oDiv.onmouseout=function(){
		timer=setInterval(function(){
		index++;
		if(index==aLi2.length){
			index=0;
		}
		aLi2[index].onclick();
		}, 1500);
	};
	for(var i=0;i<aLi2.length;i++){
		aLi2[i].index=i;
		aLi2[i].onclick=function(){
			index=this.index;
			for(var j=0;j<aLi1.length;j++){
				aLi1[j].style.display = "none";
				removeCls(aLi2[j],"active");
			}
			aLi1[index].style.display = "block";
			addCls(aLi2[index],"active");
			oP.innerHTML=aText[index];
		}
	}
	})();
//bbs
(function(){
	var aLi=document.getElementsByClassName("list-item3")[0].getElementsByTagName("li");
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].className="";
			}
			this.className="active";

		}
	}
})();
//最后一个 日历
(function(){
	var oCalendar=document.getElementsByClassName("calendar")[0];
	var aLi=oCalendar.getElementsByTagName("ol")[0].getElementsByTagName("li");
	var nowInfo=document.getElementsByClassName("now-info")[0];
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseover=function(){
			nowInfo.style.display = 'block';
			nowInfo.style.left=this.offsetLeft+50+"px";
			nowInfo.style.top=this.offsetTop-30+"px";
			
		};
		aLi[i].onmouseout=function(){
			nowInfo.style.display = 'none';
		};
	}
})();
//选项卡以及对应的块
function selection(opt,opt_con){
		for(var i=0;i<opt.length;i++){
			opt[i].index=i;
			opt[i].onclick=function(){//trigger
				for(var j=0;j<opt_con.length;j++){
					opt_con[j].style.display = "none";
					if(opt[j].getElementsByTagName("a")[0]){
						removeCls(opt[j].getElementsByTagName("a")[0],"trigger-down");
						addCls(opt[j].getElementsByTagName("a")[0],"trigger");
					}
					removeCls(opt[j],"active");
				}
				opt_con[this.index].style.display = "block";
				addCls(opt[this.index],"active");
				if(opt[this.index].getElementsByTagName("a")[0]){
					removeCls(opt[this.index].getElementsByTagName("a")[0],"trigger");
					addCls(opt[this.index].getElementsByTagName("a")[0],"trigger-down");
				}
				
			}
		}
	}

//class删除
function removeCls(obj,cls){
	var r=new RegExp('\\b'+cls+'\\b',"g");
	obj.className=obj.className.replace(r,"");
	return obj.className;
}
//class增加
function addCls(obj,cls){
	obj.className=obj.className.concat(" "+cls);
	return obj.className;
}
//以前学的运动框架
function animate(obj,/*attr,value*/json,addfun){
	//清除定时器，用于动画结束与动画开始，避免定时器叠加
	clearInterval(obj.timer);
	//设置定时器事件
	obj.timer=setInterval(
		function(){
		  //##为了避免因为其中一个值达标而突然清除定时器得事情发生而设定一个开关，即在都达标后才清除定时器
		  obj.flag=true;
	  	  //##遍历json，即一个定时器完成多个任务后再继续				  
	 	  for(var attr in json){
			//需要改变的值，最终值，以及兼容个别属性改变的判断
			var speed,curtV;
			if(attr=='opacity'){
				//透明度与一般长宽/位置的不同在于，他们现在值的获取一个是浮点一个是整数
				curtV=Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				curtV=parseInt(getStyle(obj,attr));
			} 
				//改变值的正负取决于初始值与目标值的差值
			speed=(json[attr]-curtV)/8;
			speed=json[attr]>curtV?Math.ceil(speed):Math.floor(speed);
			curtV+=speed;
			//改变属性值
			if(attr=='opacity'){
				obj.style[attr]=curtV/100;
				obj.style.filter='alpha(opacity:'+curtV+')';
			}else{
			obj.style[attr]=curtV+'px';
			}
			//##如果未达标则flag为false
			if(curtV!=json[attr]){
				obj.flag=false;
			}
			//最后到达目标值后定时器清除
			/*if(curtV==json[attr]){
				clearInterval(obj.timer);
				//#如果有追加的函数则在清除后执行
				if(addfun){
					addfun();	
				}
			}*/
		  }//json遍历
		  //##遍历过后检测是否都达标
		  if(obj.flag){
				clearInterval(obj.timer);
				//#如果有追加的函数则在清除后执行
				if(addfun){
					addfun();	
				}
			}
		},30);
}
//用于获取元素属性
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];	
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
}

/*


*/