// /*var num=6;//6
// var num2=num++;//6
// var num3=--num;//6
// console.log(num,num2,num3);
// var bol=0;
// var str='a';
// var num4=bol?1:2&&str||8;
// console.log(num4);
// var oInp=document.getElementById('logo');
// var oBtn=document.getElementById('btn');
// oBtn.onclick=function () {
//     if(oInp.value=="龙门飞甲"){
//         alert("正确");
//     }else{
//         alert("错误");
//     }
// }
// oBtn.onclick=function () {
//     switch (oInp.value) {
//         case "龙门飞甲":
//             alert("便知真假");
//             break;
//         case "天王盖地虎":
//             alert("宝塔镇河妖");
//             break;
//         default:
//             alert("打死")
//     }
// }
// var a=8;
// while (a>5){
//     console.log(a);//8 7 6
//     a--;
// }
// var b=8;
// do{
//     console.log(b);//8 7 6
//     b--;
// }while (b>5);*/


// var m=1;//第几次
// var zHeight=100;
// var count=50;
// while (m<=count){
//
//     zHeight=zHeight/2;
//     m++;
// }
// console.log(zHeight);
// var str="";
// var json={
//     "web":1706,"bec":13,
// }
// // console.log(json.mmm);
// // console.log(json[str]);
// for(var i in json){
//     if(i=="web"){
//         str="我所在的班级在W"+json[i];
//     }else if(i=="bec"){
//         str=str+",班里有"+json[i]+"人"
//     }
// }
// console.log(str);
// document.body.innerHTML=""
var str="";
for(var i=0;i<2;i++){
    str+="<ul>";
    for(var e=0;e<2;e++){
        str+="<li>"+e+"</li>";
    }
    str+="</ul>";

}
document.body.innerHTML=str;
