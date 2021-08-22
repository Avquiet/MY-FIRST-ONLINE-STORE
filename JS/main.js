var myArr = ["product-main-girl.jpg", "promo-bg.png", "product-girl-x.png"];
var curInd = 0;

const girl = (id) => {
var img = document.getElementById(id);

(curInd == 2) ? curInd = 0 : curInd++;

img.src = "img\\" + myArr[curInd]; 
}

const man = (id) => {
    var img = document.getElementById(id);
    
    (curInd == 0) ? curInd = 2 : curInd--;
    
    img.src = "img\\" + myArr[curInd]; 
    }