
const Imagelabel1 = document.getElementById("js--image-1");
const Imagelabel2 = document.getElementById("js--image-2");
const Imagelabel3 = document.getElementById("js--image-3");
const Imagelabel4 = document.getElementById("js--image-4");
const Imagelabel5 = document.getElementById("js--image-5");
const Imagelabel6 = document.getElementById("js--image-6");
const Imagelabel7 = document.getElementById("js--image-7");
const Imagelabel8 = document.getElementById("js--image-8");
const Imagelabel9 = document.getElementById("js--image-9");
const Imagelabel10 = document.getElementById("js--image-10");
const Imagelabel11 = document.getElementById("js--image-11");
const Imagelabel12 = document.getElementById("js--image-12");
const Imagelabel13 = document.getElementById("js--image-13");
const Imagelabel14 = document.getElementById("js--image-14");


let Imagedata = fetch("data.json").then(
    function (incomingData) {
        return incomingData.json();
    }).then(
        function (realData) {
            Imagelabel1.setAttribute('src', realData.img1);
            Imagelabel2.setAttribute('src', realData.img1);
            Imagelabel3.setAttribute('src', realData.img1);
            Imagelabel4.setAttribute('src', realData.img1);
            Imagelabel5.setAttribute('src', realData.img2);
            Imagelabel6.setAttribute('src', realData.img2);
            Imagelabel7.setAttribute('src', realData.img2);
            Imagelabel8.setAttribute('src', realData.img2);
            Imagelabel9.setAttribute('src', realData.img2);
            Imagelabel10.setAttribute('src', realData.img2);
            Imagelabel11.setAttribute('src', realData.img3);
            Imagelabel12.setAttribute('src', realData.img3);
            Imagelabel13.setAttribute('src', realData.img3);
            Imagelabel14.setAttribute('src', realData.img3);
        }
    );

//** 

let allGames = document.getElementsByClassName("priceProduct");

let filters = document.getElementsByClassName("filterButton");

for (let index = 0; index < filters.length; index++) {
    filters[index].checked = true;

}

let cheapFilter = document.getElementById("checkbox-100");
let mediumFilter = document.getElementById("checkbox-150");
let expensiveFilter = document.getElementById("checkbox-300");


filters[0].onchange = function () {
    console.log(filters[0].checked)
    if (filters[0].checked === true) {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "100") {
                allGames[index].style.display = "block";


            }

        }

    }
    else {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "100") {
                allGames[index].style.display = "none";
            }


        }
    }


}

filters[1].onchange = function () {
    console.log(filters[1].checked)
    if (filters[1].checked === true) {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "150") {
                allGames[index].style.display = "block";


            }

        }

    }
    else {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "150") {
                allGames[index].style.display = "none";
            }


        }
    }


}

filters[2].onchange = function () {
    console.log(filters[2].checked)
    if (filters[2].checked === true) {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "300") {
                allGames[index].style.display = "block";


            }

        }

    }
    else {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "300") {
                allGames[index].style.display = "none";
            }


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