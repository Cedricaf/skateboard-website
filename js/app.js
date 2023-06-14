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

        else if (modes === "third-sight"){
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
        else{
            console.log("error");
            
        }
    }
}


const toggleButton = document.querySelector(".toggle-button");
const toggleButtonIcon = document.querySelector(".toggle-button i");
const dropDownMenu = document.querySelector(".dropdown")




toggleButton.onclick = function(){
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
    cartButton[index].onclick = function(){
        cartMessage += 1;
        cartAmount.innerHTML = cartMessage;
        cartAmount.style.color = "#29A945";
    }
    
}

let allGames = document.getElementsByClassName("product");

let filters = document.getElementsByClassName("category-filter");

for (let index = 0; index < filters.length; index++) {
    filters[index].checked = true;
    
}

let adventureFilter = document.getElementById("checkbox-adventure");
let horrorFilter = document.getElementById("checkbox-horror");
let fantasyFilter = document.getElementById("checkbox-fantasy");


filters[0].onchange = function(){
    console.log(filters[0].checked)
    if (filters[0].checked === true){
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "adventure") {
                allGames[index].style.display = "block";

            
            }
            
        }
        
    }
    else{
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "adventure"){
                allGames[index].style.display= "none";
            }
            
    
        }
    }


}

filters[1].onchange = function(){
    console.log(filters[1].checked)
    if (filters[1].checked === true){
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "horror") {
                allGames[index].style.display = "block";

            
            }
            
        }
        
    }
    else{
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "horror"){
                allGames[index].style.display= "none";
            }
            
    
        }
    }


}

filters[2].onchange = function(){
    console.log(filters[2].checked)
    if (filters[2].checked === true){
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "fantasy") {
                allGames[index].style.display = "block";

            
            }
            
        }
        
    }
    else{
        for (let index = 0; index < allGames.length; index++) {
            if (allGames[index].dataset.category === "fantasy"){
                allGames[index].style.display= "none";
            }
            
    
        }
    }


}


