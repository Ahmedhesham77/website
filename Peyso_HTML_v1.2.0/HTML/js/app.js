/* Template Name: Peyso - Bootstrap 5 Landing Page Template
   Author: Themesdesign
   File Description: Main JS file of the template
*/

//  Window scroll sticky class add
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
        if (
            document.body.scrollTop >= 50 ||
            document.documentElement.scrollTop >= 50
        ) {
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("nav-sticky");
        }
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})

// client-slider

var slider = tns({
    container: '.client-slider',
    items: 1,
    loop: true,
    autoplay: true,
    navPosition: "bottom",
    controls: true,
    autoplay: true,
    autoplayButtonOutput: false,
    controlsText: ["<i class='mdi mdi-arrow-left'></i>", "<i class='mdi mdi-arrow-right'></i>"],
    responsive: {
        640: {
            gutter: 20,
            items: 2
        },
        700: {
            gutter: 30,
            items: 1
        },
        900: {
            items: 2
        }
    }
});



// Contact Form
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var comments = document.forms["myForm"]["comments"].value;
    document.getElementById("error-msg").style.opacity = 0;
    document.getElementById('error-msg').innerHTML = "";
    if (name == "" || name == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Name*</div>";
        fadeIn();
        return false;
    }
    if (email == "" || email == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Email*</div>";
        fadeIn();
        return false;
    }
    if (subject == "" || subject == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Subject*</div>";
        fadeIn();
        return false;
    }
    if (comments == "" || comments == null) {
        document.getElementById('error-msg').innerHTML = "<div class='alert alert-warning error_message'>*Please enter a Comments*</div>";
        fadeIn();
        return false;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("simple-msg").innerHTML = this.responseText;
            document.forms["myForm"]["name"].value = "";
            document.forms["myForm"]["email"].value = "";
            document.forms["myForm"]["subject"].value = "";
            document.forms["myForm"]["comments"].value = "";
        }
    };
    xhttp.open("POST", "php/contact.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("name=" + name + "&email=" + email + "&subject=" + subject + "&comments=" + comments);
    return false;
}
function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}

// grid system reveal

for (let i = 1; i < 25; i++) {
    let box = document.createElement("div")
    box.classList.add("box")
    document.querySelector(".container2").appendChild(box)
}
let boxes = document.querySelectorAll(".box")

function scrollTrigger() {
    boxes.forEach(boxxx => {
        if (boxxx.offsetTop < window.scrollY) {
            boxxx.classList.add("active")
        }
        else {
            boxxx.classList.remove("active")
        }
    })
}

addEventListener("scroll", scrollTrigger)


let randomColorBlock = document.querySelectorAll(".box")

function addColor() {
    randomColorBlock.forEach(e => {
        e.style.background = randomColor()
    })
}

function randomColor() {
    let hexadecimal = "1234567890abcdef"
    let colorLength = 6
    let color = ""

    for (let i = 1; i <= colorLength; i++) {
        let randomColors = Math.floor(Math.random() * hexadecimal.length)
        color += hexadecimal.substring(randomColors, randomColors + 1)
    }
    return "#" + color
}
addColor()
