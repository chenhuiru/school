// var num=3.1415926;
// console.log(num.toFixed(4));
// var str="qwertyuiop";
// var str1="lkjkhfds";
// console.log(str.charAt(3),str[7]);
// console.log(str.concat(str1));
// console.log(str1.slice(2,4));
// console.log(str1.substring(2,4));
// console.log(str1.substr(2,4));
// var num=0;
// var count=0;
// var str="dfkgjsofgjaaaafdlkfsaaaaa";
// for (var i=0;i<str.length;i++){
//     if(str.indexOf("a",num)>-1){
//         count++;
//         num=str.indexOf("a",num)+1;
//     }
// }
// console.log(count);
var num=0;
var str="gfdfgwfffffff";
// console.log(str.toUpperCase());
// console.log(str.replace("f","r"));
for(var i=0;i<str.length;i++){
    if(str.indexOf("f")!=-1){
        str=str.replace("f","r");
    }
}


