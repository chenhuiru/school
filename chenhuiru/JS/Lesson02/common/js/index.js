/*
* 第一题
* */
var money=document.getElementById("form");
var vehicle=document.getElementById("btn");
vehicle.onclick=function () {
    if(money.value>=100000){
        alert("买小汽车上班");
    }else if(money.value>=5000){
        alert("买摩托车上班");
    }else if(money.value>=300){
        alert("买自行车上班");
    }else if(money.value>=20){
        alert("坐公交上班");
    }else {
        alert("不行上班");
    }
}
/*
* 第二题
* */

for(var a=1;a<=100;a++){
    if(a%3==0){
        console.log(a);
    }
}
/*
* 第三题
* */
var count=0;//偶数的个数
for(var b=1;b<=1000;b++){
    if(b%2==0&&b%3==0){
        count++;
    }
}
console.log(count);
/*
* 第四题
* */
var num=0;
var json={
    "1":1,"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,
}
for (var i in json){
    num++;
}
console.log(num);
/*
* 第五题
* */
var str="";
var json2={
    "ice":"Haagen-Dazs",
    "vegetables":"tomato",
    "fruit":"potato",
    "food":"water",
}
for(var x in json2){
    if(x=="ice"){
        // str+="<ul>";
        str+="<li>"+json2[x]+"</li>";
        // str+="</ul>";
    }
    else if(x=="vegetables"){
        // str+="<ul>";
        str+="<li>"+json2[x]+"</li>";
        // str+="</ul>";
    }
    else if(x=="fruit"){
        // str+="<ul>";
        str+="<li>"+json2[x]+"</li>";
        // str+="</ul>";
    }
    else if(x=="food"){
        // str+="<ul>";
        str+="<li>"+json2[x]+"</li>";
        // str+="</ul>";
    }
    document.body.innerHTML=str;
}


