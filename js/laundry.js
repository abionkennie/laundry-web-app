const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const form = document.querySelector("#form");
const switches = document.querySelectorAll(".switch");
const Navigation = document.querySelector(".navigation");

let current = 1;

function tab2() {
    form.style.marginLeft = "-100%";
    login.style.background = "none";
    signup.style.background = "linear-gradient(45deg, #eecda7,var(--blue))";
    switches[current - 1].classList.add("active");
}

function tab1() {
    form.style.marginLeft = "0";
    signup.style.background = "none";
    login.style.background = "linear-gradient(45deg, #eecda7, var(--orange))";
    switches[current - 1].classList.remove("active");
}

function showDropdown() {
    $dropdownContent = $(".dropdown-content").css("display");
    if ($dropdownContent === "flex") {
        $(".dropdown-content").css("display", "none");
    } else {
        $(".dropdown-content").css({ "display": "flex", "flex-direction": "column" });
    }
}

function closeMe() {
    $dropdownContent = $(".dropdown-content").css("display");
    if ($dropdownContent === "flex") {
        $(".dropdown-content").css("display", "none");
    }
}

// document.querySelector(".navbar ul li:nth-child(2)").addEventListener("click",
//     function() {
//         this.classList.add(".subnav");

//     });