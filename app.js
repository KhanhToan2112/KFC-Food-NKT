let menu_sec = document.getElementById("menu_sec");
let left_arrow = document.getElementById("left_arrow");
let right_arrow = docment.getElementById("right_arrow");


right_arrow.addEventListener('click', () =>{
    menu_sec.scrollLeft += 115;
});

left_arrow.addEventListener('click', () =>{
    menu_sec.scrollLeft -=115;
});

let videos = document.getElementsByTagName("video")[0];
let plays = document.getElementsByClassName("play")[0];
let pauses = document.getElementsByClassName("pauses")[0];
let screens = document.getElementsByClassName("screen")[0];


plays.addEventListener('click', () =>{
    videos.play();
    plays.style.display = "none";
    screens.style.display = "none";
    pauses.style.display = "flex";
})

pauses.addEventListener('click', () =>{
    videos.pause();
    plays.style.display = "flex";
    screens.style.display = "flex";
    pauses.style.display = "none";
})

videos.addEventListener('ended', () =>{
    plays.style.display = "flex";
    screens.style.display = "flex";
    pauses.style.display = "none";
})

const dataload = () => {
    const sec_title = docment.getElementById("sec_title");
    const h6_dot = docment.getElementsByTagName("h6");

    setTimeout(() => {
        sec_title.innerHTML = " BAGAIN <br>BUCKET MENU <br> CAMPAIGN";
        h6_dot[1].classList.add("head_dots_main");
        h6_dot[2].classList.remove("head_dots_main");
        h6_dot[3].classList.remove("head_dots_main");
        h6_dot[4].classList.remove("head_dots_main");
    },0000);
    setTimeout(() => {
        sec_title.innerHTML = " BAGAIN <br>FRIES MENU <br> CAMPAIGN";
        h6_dot[1].classList.remove("head_dots_main");
        h6_dot[2].classList.add("head_dots_main");
        h6_dot[3].classList.remove("head_dots_main");
        h6_dot[4].classList.remove("head_dots_main");
    },3000);
    setTimeout(() => {
        sec_title.innerHTML = " BAGAIN <br>BURGEAR MENU <br> CAMPAIGN";
        h6_dot[1].classList.remove("head_dots_main");
        h6_dot[2].classList.remove("head_dots_main");
        h6_dot[3].classList.add("head_dots_main");
        h6_dot[4].classList.remove("head_dots_main");
    },6000);
    setTimeout(() => {
        sec_title.innerHTML = " BAGAIN <br>CHICKEN MENU <br> CAMPAIGN";
        h6_dot[1].classList.remove("head_dots_main");
        h6_dot[2].classList.remove("head_dots_main");
        h6_dot[3].classList.remove("head_dots_main");
        h6_dot[4].classList.add("head_dots_main");
    },9000);
}


setInterval(dataload, 12000);

dataload();