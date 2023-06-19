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
    function (incomingData) {
        return incomingData.json();
    }).then(
        function (realData) {
            Image1.setAttribute('src', realData.img1);
            Image2.setAttribute('src', realData.img1);
            Image3.setAttribute('src', realData.img1);
            Image4.setAttribute('src', realData.img1);
            Image5.setAttribute('src', realData.img2);
            Image6.setAttribute('src', realData.img2);
            Image7.setAttribute('src', realData.img2);
            Image8.setAttribute('src', realData.img2);
            Image9.setAttribute('src', realData.img2);
            Image10.setAttribute('src', realData.img2);
            Image11.setAttribute('src', realData.img3);
            Image12.setAttribute('src', realData.img3);
            Image13.setAttribute('src', realData.img3);
            Image14.setAttribute('src', realData.img3);
        }
    );



let allGames = document.getElementsByClassName("product");

let filters = document.getElementsByClassName("category-filter");

for (let index = 0; index < filters.length; index++) {
    filters[index].checked = true;

}

let adventureFilter = document.getElementById("checkbox-adventure");
let horrorFilter = document.getElementById("checkbox-horror");
let fantasyFilter = document.getElementById("checkbox-fantasy");


filters[0].onchange = function () {
    console.log(filters[0].checked)
    if (filters[0].checked === true) {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "adventure") {
                allGames[index].style.display = "block";


            }

        }

    }
    else {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "adventure") {
                allGames[index].style.display = "none";
            }


        }
    }


}

filters[1].onchange = function () {
    console.log(filters[1].checked)
    if (filters[1].checked === true) {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "horror") {
                allGames[index].style.display = "block";


            }

        }

    }
    else {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "horror") {
                allGames[index].style.display = "none";
            }


        }
    }


}

filters[2].onchange = function () {
    console.log(filters[2].checked)
    if (filters[2].checked === true) {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "fantasy") {
                allGames[index].style.display = "block";


            }

        }

    }
    else {
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "fantasy") {
                allGames[index].style.display = "none";
            }


        }
    }


}