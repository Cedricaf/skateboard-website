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
const circleButtons = [
  document.getElementById("js--circleButton1"),
  document.getElementById("js--circleButton2"),
  document.getElementById("js--circleButton3")
];

function setActiveButton(activeIndex) {
  for (let i = 0; i < circleButtons.length; i++) {
    circleButtons[i].style.border = i === activeIndex ? "0.4rem solid black" : "0";
  }
}

circleButtons[0].onclick = function () {
  image.src = "img/rs(1.1).webp";
  setActiveButton(0);
};

circleButtons[1].onclick = function () {
  image.src = "img/rs(1.2).webp";
  setActiveButton(1);
};

circleButtons[2].onclick = function () {
  image.src = "img/rs(1.3).webp";
  setActiveButton(2);
};












