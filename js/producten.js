const Image1 = document.getElementById("js--image-dark1");
const Image2 = document.getElementById("js--image-dark2");
const Image3 = document.getElementById("js--image-dark3");
const Image4 = document.getElementById("js--image-dark4");
const Image5 = document.getElementById("js--image-light5");
const Image6 = document.getElementById("js--image-light6");
const Image7 = document.getElementById("js--image-light7");
const Image8 = document.getElementById("js--image-light8");
const Image9 = document.getElementById("js--image-light9");
const Image10 = document.getElementById("js--image-light10");
const Image11 = document.getElementById("js--image-wood11");
const Image12 = document.getElementById("js--image-wood12");
const Image13 = document.getElementById("js--image-wood13");
const Image14 = document.getElementById("js--image-wood14");


let data = fetch("js/data.json").then(
    function(incomingData){
        return incomingData.json();
    }).then(
        function(realData){
            Image1.setAttribute('src',realData.img1);
            Image2.setAttribute('src',realData.img1);
            Image3.setAttribute('src',realData.img1);
            Image4.setAttribute('src',realData.img1);
            Image5.setAttribute('src',realData.img2);
            Image6.setAttribute('src',realData.img2);
            Image7.setAttribute('src',realData.img2);
            Image8.setAttribute('src',realData.img2);
            Image9.setAttribute('src',realData.img2);
            Image10.setAttribute('src',realData.img2);
            Image11.setAttribute('src',realData.img3);
            Image12.setAttribute('src',realData.img3);
            Image13.setAttribute('src',realData.img3);
            Image14.setAttribute('src',realData.img3);
        }
    );