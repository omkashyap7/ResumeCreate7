//for box1
function revealcon() {
    var revealcont = document.querySelectorAll(".revealer");

    for (var i = 0; i < revealcont.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealcont[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            revealcont[i].classList.add("active");
        }
        else {
            revealcont[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealcon);

function reveal1() {
    var revealbox1 = document.querySelectorAll("#sub_box1");

    for (var i = 0; i < revealbox1.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealbox1[i].getBoundingClientRect().top;
        var elementVisible = -150;

        if (elementTop < windowHeight - elementVisible) {
            revealbox1[i].classList.add("active");
        }
        else {
            revealbox1[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal1);
function reveal2() {
    var revealbox2 = document.querySelectorAll("#sub_box2");

    for (var i = 0; i < revealbox2.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealbox2[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealbox2[i].classList.add("active");
        }
        else {
            revealbox2[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal2);

//for image
function reveal3() {
    var revealbox3 = document.querySelectorAll("#sub_box3");

    for (var i = 0; i < revealbox3.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealbox3[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealbox3[i].classList.add("active");
        }
        else {
            revealbox3[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal3);

//for small box
//for image
function reveal5() {
    var revealbox5 = document.querySelectorAll("#sub_box5");

    for (var i = 0; i < revealbox5.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealbox5[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealbox5[i].classList.add("active");
        }
        else {
            revealbox5[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal5);




function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

//in section 3 for image1
function revealimg1() {
    var revealsimg1 = document.querySelectorAll(".image1");

    for (var i = 0; i < revealsimg1.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsimg1[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsimg1[i].classList.add("active");
        }
        else {
            revealsimg1[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealimg1);

//in section 3 for image3
function revealimg3() {
    var revealsimg3 = document.querySelectorAll(".image3");

    for (var i = 0; i < revealsimg3.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsimg3[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsimg3[i].classList.add("active");
        }
        else {
            revealsimg3[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealimg3);

//in section 3 for image4
function revealimg4() {
    var revealsimg4 = document.querySelectorAll(".image4");

    for (var i = 0; i < revealsimg4.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsimg4[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsimg4[i].classList.add("active");
        }
        else {
            revealsimg4[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealimg4);


//in section 3 for image5
function revealimg5() {
    var revealsimg5 = document.querySelectorAll(".image5");

    for (var i = 0; i < revealsimg5.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsimg5[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsimg5[i].classList.add("active");
        }
        else {
            revealsimg5[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealimg5);

//for box1 and box3
function revealbox1() {
    var revealsbox1 = document.querySelectorAll(".box1");

    for (var i = 0; i < revealsbox1.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsbox1[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsbox1[i].classList.add("active");
        }
        else {
            revealsbox1[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealbox1);


//for box1 and box3
function revealbox2() {
    var revealsbox2 = document.querySelectorAll(".box2");

    for (var i = 0; i < revealsbox2.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsbox2[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsbox2[i].classList.add("active");
        }
        else {
            revealsbox2[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealbox2);


//for box1 and box4
function revealbox4() {
    var revealsbox4 = document.querySelectorAll(".box4");

    for (var i = 0; i < revealsbox4.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsbox4[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsbox4[i].classList.add("active");
        }
        else {
            revealsbox4[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealbox4);

//for box1 and box5
function revealbox5() {
    var revealsbox5 = document.querySelectorAll(".box5");

    for (var i = 0; i < revealsbox5.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsbox5[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsbox5[i].classList.add("active");
        }
        else {
            revealsbox5[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", revealbox5);



alert("Hello Users Have a nice day...");