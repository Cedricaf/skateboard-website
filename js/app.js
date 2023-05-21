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




