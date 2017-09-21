main();
function main() {
    var oClick1=document.getElementsByClassName("click1")[0];
    var oClick2=document.getElementsByClassName("click2")[0];
    var oshow1=document.getElementsByClassName("middle-right-center1")[0];
    var oshow2=document.getElementsByClassName("middle-right-center2")[0];
    oClick1.onclick=function () {
        oClick1.style.color="#F56600";
        oshow1.style.opacity="1";
        oshow2.style.opacity="0";
        oClick2.style.color="#d3d3d3";
    }


    oClick2.onclick=function () {
        oClick2.style.color="#F56600";
        oshow2.style.opacity="1";
        oshow1.style.opacity="0";
        oClick1.style.color="#d3d3d3";
    }
}