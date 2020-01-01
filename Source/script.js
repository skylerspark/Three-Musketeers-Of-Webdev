function link(u) {
    query("iframe").src = u;
}

document.querySelector('.sideNav').style.height = document.querySelector(".content").style.height;

var toggler = document.getElementsByClassName("caret");

for (var i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
}