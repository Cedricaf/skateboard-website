let arrowButtons = document.getElementsByClassName("arrow");
let reviews = document.getElementsByClassName("review");
let modes = "first-sight";




for (let index = 0; index < arrowButtons.length; index++) {
    arrowButtons[index].onclick = function () {
        if (modes === "first-sight") {
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "block";
            reviews[4].style.display = "block";
            reviews[5].style.display = "block";
            reviews[6].style.display = "none";
            reviews[7].style.display = "none";
            reviews[8].style.display = "none";
            modes = "second-sight";
        }

        else if (modes === "second-sight") {
            reviews[0].style.display = "none";
            reviews[1].style.display = "none";
            reviews[2].style.display = "none";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            reviews[6].style.display = "block";
            reviews[7].style.display = "block";
            reviews[8].style.display = "block";
            modes = "third-sight";

        }

        else if (modes === "third-sight") {
            reviews[0].style.display = "block";
            reviews[1].style.display = "block";
            reviews[2].style.display = "block";
            reviews[3].style.display = "none";
            reviews[4].style.display = "none";
            reviews[5].style.display = "none";
            reviews[6].style.display = "none";
            reviews[7].style.display = "none";
            reviews[8].style.display = "none";
            modes = "first-sight";

        }
        else {
            console.log("error");

        }
    }
}


const toggleButton = document.querySelector(".toggle-button");
const toggleButtonIcon = document.querySelector(".toggle-button i");
const dropDownMenu = document.querySelector(".dropdown")




toggleButton.onclick = function () {
    dropDownMenu.style.display = "block";
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleButtonIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'

}

const cartButton = document.getElementsByClassName("product-content-button");
const cartAmount = document.getElementsByClassName("itemAmount")[0];

let cartMessage = 0;

for (let index = 0; index < cartButton.length; index++) {
    cartButton[index].onclick = function () {
        cartMessage += 1;
        cartAmount.innerHTML = cartMessage;
        cartAmount.style.color = "#29A945";
    }

}


const image = document.getElementById("js--imageChange");
const circleButton1 = document.getElementById("js--circleButton1");
const circleButton2 = document.getElementById("js--circleButton2");
const circleButton3 = document.getElementById("js--circleButton3");

console.log("hjellofsdf");
circleButton1.onmouseenter = function () {
    image.src = "img/rs(1.1).webp";
    circleButton1.style.border = '0.4rem solid black';
}

circleButton1.onmouseleave = function () {
    image.src = "img/rs(1).webp";
    circleButton1.style.border = "0rem";
    
}


circleButton2.onmouseover = function () {
    image.src = "img/rs(1.2).webp";
    circleButton2.style.border = '0.4rem solid black';
}

circleButton2.onmouseleave = function () {
    image.src = "img/rs(1).webp";
    circleButton2.style.border = "0";

}


circleButton3.onmouseover = function () {
    image.src = "img/rs(1.3).webp";
    circleButton3.style.border = '0.4rem solid black';
}

circleButton3.onmouseleave = function () {
    image.src = "img/rs(1).webp";
    circleButton3.style.border = '0rem';

}


const image2 = document.getElementById("js--imageChange2");
const circleButton4 = document.getElementById("js--circleButton4");
const circleButton5 = document.getElementById("js--circleButton5");
const circleButton6 = document.getElementById("js--circleButton6");

console.log("hjellofsdf");
circleButton4.onmouseover = function () {
    image.src = "img/rs(2.1).webp";
}

circleButton4.onmouseleave = function () {
    image.src = "img/rs(2).webp";

}


circleButton5.onmouseover = function () {
    image.src = "img/rs(2.2).webp";
}

circleButton5.onmouseleave = function () {
    image.src = "img/rs(2).webp";

}

circleButton6.onmouseover = function () {
    image.src = "img/rs(2.3).webp";
}

circleButton6.onmouseleave = function () {
    image.src = "img/rs(2).webp";

}











