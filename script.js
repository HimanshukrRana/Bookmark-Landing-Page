
const control = document.getElementsByClassName("control");
const img = document.getElementById("tab1");
const heading = document.getElementById("heading");
const paragraph = document.getElementById("paragraph");

control[0].onclick = function () {
    img.src = "./images/illustration-features-tab-1.df5775d6.svg";
    heading.innerHTML = "Bookmark in one click";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
}

control[1].onclick = function () {
    img.src = "./images/illustration-features-tab-2.c867494c.svg";
    heading.innerHTML = "Intelligent Search";
    remove();
    this.classList.add("active");
    paragraph.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
}

control[2].onclick = function () {
    img.src = "./images/illustration-features-tab-3.bb91f4bb.svg";
    heading.innerHTML = "Share your Bookmarks";
    remove();
    this.classList.remove("active");
    paragraph.innerHTML = "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
}

function remove() {
    for (a of control) {
        a.classList.remove("active");
    }
}


// faq section
const qtn = document.getElementsByClassName("qtn");
const answer = document.getElementsByClassName("drop-down-text");

qtn[0].onclick = function () {
    if (answer[0].style.display == "none") {
        answer[0].style.display = "block";
    } else {
        answer[0].style.display = "none";
    }
}

qtn[1].onclick = function () {
    if (answer[1].style.display == "none") {
        answer[1].style.display = "block";
    } else {
        answer[1].style.display = "none";
    }
}
qtn[2].onclick = function () {
    if (answer[2].style.display == "none") {
        answer[2].style.display = "block";
    } else {
        answer[2].style.display = "none";
    }
}
qtn[3].onclick = function () {
    if (answer[3].style.display == "none") {
        answer[3].style.display = "block";
    } else {
        answer[3].style.display = "none";
    }
}