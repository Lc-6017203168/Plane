//Contances是一个对象
var Contances={
    STEP:4,//小飞机移动的步长
    W_KEYCODE:87,//W
    S_KEYCODE:83,//S
    A_KEYCODE:65,//A
    D_KEYCODE:68,//D
    BG_HEIGHT:600,
    BG_WIDTH:360,
    PLANE_HEIGHT:64,
    PLANE_WIDTH:40,
}

//小飞机图片的ID
var planeId="myPlane";

var goingUp=false;
var goingLeft=false;
var goingRight=false;
var goingDown=false;

//根据ID获取HTML元素的DOM对象
function $(id) {
     return document.getElementById(id);
}
//获取小飞机的Y轴坐标
function getY(plane) {
    return plane.style.bottom.replace('px','')-0;
}
//获取小飞机的X轴坐标
function getX(plane) {
    return plane.style.left.replace('px','')-0;
}
//设置小飞机的Y轴坐标
function setY(plane,y) {
    plane.style.bottom=y+"px";
}
//设置小飞机的X轴坐标
function setX(plane,x) {
    plane.style.left=x+"px";
}
