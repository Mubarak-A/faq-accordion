var faq1 = document.querySelector("#faq--one");
var faq2 = document.querySelector("#faq--two");
var faq3 = document.querySelector("#faq--three");
var faq4 = document.querySelector("#faq--four");
var imgOne = document.querySelector("#iconOne");
var imgTwo = document.querySelector("#iconTwo");
var imgThree = document.querySelector("#iconThree");
var imgFour = document.querySelector("#iconFour");
var highlightOne = document.querySelector("#btnOne");
var highlightTwo = document.querySelector("#btnTwo");
var highlightThree = document.querySelector("#btnThree");
var highlightFour = document.querySelector("#btnFour"); 


// Click event
// First click-dropdown
document.querySelectorAll(".title--and--btn")[0].addEventListener("click", function() {
    highlightOne.focus();
    if(faq1.innerHTML === "") {
        faq1.innerHTML = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
        faq1.classList.add("twenty--padding");
        faq1.classList.remove("zero--padding");
        imgOne.classList.add("icon--minus");
        faq2.classList.add("zero--padding");
        faq2.innerHTML = "";
        imgTwo.classList.remove("icon--minus");
        faq3.classList.add("zero--padding");
        faq3.innerHTML = "";
        imgThree.classList.remove("icon--minus");
        faq4.classList.add("zero--padding");
        faq4.innerHTML = "";
        imgFour.classList.remove("icon--minus");
    } else if(faq1.innerHTML !== "") {
        faq1.innerHTML = "";
        faq1.classList.remove("twenty--padding");
        imgOne.classList.remove("icon--minus");
        faq2.classList.remove("zero--padding");
        faq2.classList.remove("twenty--padding");
        faq3.classList.remove("zero--padding");
        faq3.classList.remove("twenty--padding");
        faq4.classList.remove("zero--padding");
        faq4.classList.remove("twenty--padding");
    }
})

// Second click-dropdown
document.querySelectorAll(".title--and--btn")[1].addEventListener("click", function() {
    highlightTwo.focus();
    if(faq2.innerHTML === "") {
        faq2.innerHTML = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
        faq2.classList.add("twenty--padding");
        faq2.classList.remove("zero--padding");
        imgTwo.classList.add("icon--minus");
        faq1.classList.add("zero--padding");
        faq1.innerHTML = "";
        imgOne.classList.remove("icon--minus");
        faq3.classList.add("zero--padding");
        faq3.innerHTML = "";
        imgThree.classList.remove("icon--minus");
        faq4.classList.add("zero--padding");
        faq4.innerHTML = "";
        imgFour.classList.remove("icon--minus");
    } else if(faq2.innerHTML !== "") {
        faq2.innerHTML = "";
        faq2.classList.remove("twenty--padding");
        imgTwo.classList.remove("icon--minus");
        faq1.classList.remove("zero--padding");
        faq1.classList.remove("twenty--padding");
        faq3.classList.remove("zero--padding");
        faq3.classList.remove("twenty--padding");
        faq4.classList.remove("zero--padding");
        faq4.classList.remove("twenty--padding");
    }
})

// Third click-dropdown
document.querySelectorAll(".title--and--btn")[2].addEventListener("click", function() {
    highlightThree.focus();
    if(faq3.innerHTML === "") {
        faq3.innerHTML = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
        faq3.classList.add("twenty--padding");
        faq3.classList.remove("zero--padding");
        imgThree.classList.add("icon--minus");
        faq1.classList.add("zero--padding");
        faq1.innerHTML = "";
        imgOne.classList.remove("icon--minus");
        faq2.classList.add("zero--padding");
        faq2.innerHTML = "";
        imgTwo.classList.remove("icon--minus");
        faq4.classList.add("zero--padding");
        faq4.innerHTML = "";
        imgFour.classList.remove("icon--minus");
    } else if(faq3.innerHTML !== "") {
        faq3.innerHTML = "";
        faq3.classList.remove("twenty--padding");
        imgThree.classList.remove("icon--minus");
        faq1.classList.remove("zero--padding");
        faq1.classList.remove("twenty--padding");
        faq2.classList.remove("zero--padding");
        faq2.classList.remove("twenty--padding");
        faq4.classList.remove("zero--padding");
        faq4.classList.remove("twenty--padding");
    }
})

// Fourth click-dropdown
document.querySelectorAll(".title--and--btn")[3].addEventListener("click", function() {
    highlightFour.focus();
    if(faq4.innerHTML === "") {
        faq4.innerHTML = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
        faq4.classList.add("twenty--padding");
        faq4.classList.remove("zero--padding");
        imgFour.classList.add("icon--minus");
        faq1.classList.add("zero--padding");
        faq1.innerHTML = "";
        imgOne.classList.remove("icon--minus");
        faq2.classList.add("zero--padding");
        faq2.innerHTML = "";
        imgTwo.classList.remove("icon--minus");
        faq3.classList.add("zero--padding");
        faq3.innerHTML = "";
        imgThree.classList.remove("icon--minus");
    } else if(faq4.innerHTML !== "") {
        faq4.innerHTML = "";
        faq4.classList.remove("twenty--padding");
        imgFour.classList.remove("icon--minus");
        faq1.classList.remove("zero--padding");
        faq1.classList.remove("twenty--padding");
        faq2.classList.remove("zero--padding");
        faq2.classList.remove("twenty--padding");
        faq3.classList.remove("zero--padding");
        faq3.classList.remove("twenty--padding");
    }
})


// kepress for navigation
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown" && highlightOne === document.activeElement) {
        highlightTwo.focus();
    } else if (event.key === "ArrowDown" && highlightTwo === document.activeElement) {
        highlightThree.focus();
    } else if (event.key === "ArrowDown" && highlightThree === document.activeElement) {
        highlightFour.focus();
    } else if (event.key === "ArrowUp" && highlightFour === document.activeElement) {
        highlightThree.focus();
    } else if (event.key === "ArrowUp" && highlightThree === document.activeElement) {
        highlightTwo.focus();
    } else if (event.key === "ArrowUp" && highlightTwo === document.activeElement) {
        highlightOne.focus();
    } else if (event.key === "ArrowUp" && highlightOne === document.activeElement) {
        highlightFour.focus();
    }  else if (event.key === "ArrowDown") {
        highlightOne.focus();
}
})


// Keypress for toggle
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && faq1.innerHTML === "" && document.activeElement === highlightOne) {
        faq1.innerHTML = "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.";
        faq1.classList.add("twenty--padding");
        faq1.classList.remove("zero--padding");
        imgOne.classList.add("icon--minus");
        faq2.classList.add("zero--padding");
        faq2.innerHTML = "";
        imgTwo.classList.remove("icon--minus");
        faq3.classList.add("zero--padding");
        faq3.innerHTML = "";
        imgThree.classList.remove("icon--minus");
        faq4.classList.add("zero--padding");
        faq4.innerHTML = "";
        imgFour.classList.remove("icon--minus");
    } else if (event.key === "Enter" && faq1.innerHTML !== "" && document.activeElement === highlightOne) {
        faq1.innerHTML = "";
        faq1.classList.remove("twenty--padding");
        imgOne.classList.remove("icon--minus");
        faq2.classList.remove("zero--padding");
        faq2.classList.remove("twenty--padding");
        faq3.classList.remove("zero--padding");
        faq3.classList.remove("twenty--padding");
        faq4.classList.remove("zero--padding");
        faq4.classList.remove("twenty--padding");
    } else if (event.key === "Enter" && faq2.innerHTML === "" && document.activeElement === highlightTwo) {
        faq2.innerHTML = "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.";
        faq2.classList.add("twenty--padding");
        faq2.classList.remove("zero--padding");
        imgTwo.classList.add("icon--minus");
        faq1.classList.add("zero--padding");
        faq1.innerHTML = "";
        imgOne.classList.remove("icon--minus");
        faq3.classList.add("zero--padding");
        faq3.innerHTML = "";
        imgThree.classList.remove("icon--minus");
        faq4.classList.add("zero--padding");
        faq4.innerHTML = "";
        imgFour.classList.remove("icon--minus");
    } else if (event.key === "Enter" && faq2.innerHTML !== "" && document.activeElement === highlightTwo) {
        faq2.innerHTML = "";
        faq2.classList.remove("twenty--padding");
        imgTwo.classList.remove("icon--minus");
        faq1.classList.remove("zero--padding");
        faq1.classList.remove("twenty--padding");
        faq3.classList.remove("zero--padding");
        faq3.classList.remove("twenty--padding");
        faq4.classList.remove("zero--padding");
        faq4.classList.remove("twenty--padding");
    } else if (event.key === "Enter" && faq3.innerHTML === "" && document.activeElement === highlightThree) {
        faq3.innerHTML = "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!";
        faq3.classList.add("twenty--padding");
        faq3.classList.remove("zero--padding");
        imgThree.classList.add("icon--minus");
        faq1.classList.add("zero--padding");
        faq1.innerHTML = "";
        imgOne.classList.remove("icon--minus");
        faq2.classList.add("zero--padding");
        faq2.innerHTML = "";
        imgTwo.classList.remove("icon--minus");
        faq4.classList.add("zero--padding");
        faq4.innerHTML = "";
        imgFour.classList.remove("icon--minus");
    } else if (event.key === "Enter" && faq3.innerHTML !== "" && document.activeElement === highlightThree) {
        faq3.innerHTML = "";
        faq3.classList.remove("twenty--padding");
        imgThree.classList.remove("icon--minus");
        faq1.classList.remove("zero--padding");
        faq1.classList.remove("twenty--padding");
        faq2.classList.remove("zero--padding");
        faq2.classList.remove("twenty--padding");
        faq4.classList.remove("zero--padding");
        faq4.classList.remove("twenty--padding");
    } else if (event.key === "Enter" && faq4.innerHTML === "" && document.activeElement === highlightFour) {
        faq4.innerHTML = "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.";
        faq4.classList.add("twenty--padding");
        faq4.classList.remove("zero--padding");
        imgFour.classList.add("icon--minus");
        faq1.classList.add("zero--padding");
        faq1.innerHTML = "";
        imgOne.classList.remove("icon--minus");
        faq2.classList.add("zero--padding");
        faq2.innerHTML = "";
        imgTwo.classList.remove("icon--minus");
        faq3.classList.add("zero--padding");
        faq3.innerHTML = "";
        imgThree.classList.remove("icon--minus");
    } else if (event.key === "Enter" && faq4.innerHTML !== "" && document.activeElement === highlightFour) {
        faq4.innerHTML = "";
        faq4.classList.remove("twenty--padding");
        imgFour.classList.remove("icon--minus");
        faq1.classList.remove("zero--padding");
        faq1.classList.remove("twenty--padding");
        faq2.classList.remove("zero--padding");
        faq2.classList.remove("twenty--padding");
        faq3.classList.remove("zero--padding");
        faq3.classList.remove("twenty--padding");
    }
})