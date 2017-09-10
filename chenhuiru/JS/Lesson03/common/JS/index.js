/*
* 第一题
* */

var str="qwertyuiop";
var str1="";
// for(var i=str.length-1;i>=0;i--){
//    str1+=str.charAt(i);
// }
// console.log(str1);
for(var i=1;i<=str.length;i++){
    str1+=str.charAt(str.length-i);
}
console.log(str1);
/*
*
* 第二题
*
* */
var str3="mnbvcnxzbnnbb";
for (var a=0,l=str3.length;a<l;a++){
    // if(str3.substr(i,1)=="b"){
    //     str3=str3.replace("b","w");
    // }

    str3=str3.replace("b","w");
    if(str3.indexOf("b")==-1){
        break;
    }
}
console.log(str3);









var str="dklffjowefjsdkfh";
var json={}
for(var i=0;i<str.length;i++){
    if(json[str[i]]){
        json[str[i]]++;
    }else {
        json[str[i]]=1;
    }
}
for (var i in json){
    // console.log(json[i]);
    var num=0;
    var key;
    if(json[i]>num){
        num=json[i];
        key=i;
    }
}


























