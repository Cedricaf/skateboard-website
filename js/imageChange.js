



const imageChanger = document.getElementById("js--imageChanger");
const circleButton4 = document.getElementById("js--circleButton4");
const circleButton5 = document.getElementById("js--circleButton5");
const circleButton6 = document.getElementById("js--circleButton6");

circleButton4.onclick = function () {
    imageChanger.src = "img/rs(2.1).webp";
    circleButton4.style.border = '0.4rem solid black';
    circleButton5.style.border = "0";
    circleButton6.style.border = "0";
    console.log(imageChanger);
}


circleButton5.onclick = function () {
    imageChanger.src = "img/rs(2.2).webp";
    circleButton4.style.border = "0rem";
    circleButton5.style.border = '0.4rem solid black';
    circleButton6.style.border = "0";
    console.log(imageChanger);
}



circleButton6.onclick = function () {
    imageChanger.src = "img/rs(2.3).webp";
    circleButton4.style.border = '0rem';
    circleButton5.style.border = '0rem';
    circleButton6.style.border = '0.4rem solid black';
    console.log(imageChanger);
}
