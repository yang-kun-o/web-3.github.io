var curIndex=0;
//时间间隔(单位毫秒)，每秒钟显示一张，数组共有5张图片放在Photos文件夹下。
var timeInterval=2500;
var arr=new Array();
    arr[0]="images/banner/4_banner.jpg";
    arr[1]="images/banner/3_banner.jpg";
    arr[2]="images/banner/1_banner.jpg";
    arr[3]="images/banner/5_banner.jpg";
setInterval(changeImg,timeInterval);
function changeImg()
{
    var obj=document.getElementById("obj");
    if (curIndex==arr.length-1) 
    {
       curIndex=0;
    }
    else
    {
       curIndex+=1;
    }
    obj.src=arr[curIndex];
}

function judge_name(){
	var name=fullname.value;
	var span;
	if(name==""){
	    span = "姓名不能为空！";
	}
	 else if(name.length<2) {
	 	span="长度应为2~18个字符!";
	 }
	 else {
	     span = "<font color=green>√</font>";
	 }
	fullname_result.innerHTML=span;
}
function checkemail() {
    var obj1 = document.getElementById("mailbox");
    if (obj1.value != "") {
        var str = obj1.value;
        if (str.indexOf("@") != -1) {
            if (str.indexOf(".") != -1) {
                var a = str.split("@");
                if (a[0].length > 2) {
                    document.getElementById("mess").innerHTML = "<font color=green>正确</font>";
                }
                else {
                    document.getElementById("mess").innerHTML = "<font color=red>email账号长度太短</font>";
                }
            }
            else {
                document.getElementById("mess").innerHTML = "<font color=red>缺少符号.</font>";
            }
        }
        else {
            document.getElementById("mess").innerHTML = "<font color=red>缺少符号@</font>";
        }
    }
    else {
        document.getElementById("mess").innerHTML = "<font color=red>email不能为空</font>";
    }
}
