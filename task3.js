var playerStr = localStorage.ids;               
var newPlayer = JSON.parse(playerStr);          
//console.log("读取：" + newPlayer);
//console.log('数组长度：' + newPlayer.length);
var peopleNum = newPlayer.length;
var paperNum = 1;
var i = 0;
var look = document.getElementById("look");
var hidden = document.getElementById("hidden");
var lookCircle = document.getElementById("lookCircle");
var hiddenCircle = document.getElementById("hiddenCircle");
var char = document.getElementById("char");
var push = document.getElementById("push");
function next() {
	if (paperNum>=peopleNum*2) {//结束页
		location.href = "task4-1.html";
	} else {
		if (paperNum%2==1 && paperNum<peopleNum*2-1) {
			hidden.style.display="block";
			look.style.display="none";
			char.innerHTML="角色："+newPlayer[i];
			hiddenCircle.innerHTML=i+1;
			push.innerHTML="隐藏并传递给"+(i+2)+"号";
			i++;	
		} else {
			if (paperNum%2==0) {
				look.style.display="block";
				hidden.style.display="none";
				lookCircle.innerHTML=i+1;
				push.innerHTML="查看"+(i+1)+"号身份";
			} else　{
				hidden.style.display="block";
				look.style.display="none";
				char.innerHTML="角色："+newPlayer[i];
				hiddenCircle.innerHTML=i+1;
				push.innerHTML="查看法官台本";
			}
		}
		// if (paperNum%2==0) {//翻牌页
		// 	look.style.display="block";
		// 	hidden.style.display="none";
		// 	circle.innerHTML=i+1;
		// 	push.innerHTML="查看"+(i+1)+"号身份";
		// } 
		// else {//角色页
		// 	hidden.style.display="block";
		// 	look.style.display="none";
		// 	char.innerHTML="角色："+newPlayer[i];
		// 	circle.innerHTML=i+1;
		// 	push.innerHTML="隐藏并传递给"+(i+2)+"号";
		// 	i++;
		// }
	}
	console.log(i);
	paperNum++;
}
function reset() {//第一页重写
	lookCircle.innerHTML=1;
	push.innerHTML="查看"+1+"号身份";
}
reset();