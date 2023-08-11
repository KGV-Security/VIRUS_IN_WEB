import {gsap} from "gsap";

export function Main_Ani() {

    var DP = document.getElementById("DP");
    var logo = document.getElementById("logo");
    var top = document.getElementById("top");
    var Menu = document.getElementById("menu");
    var menu1 = document.getElementById("menu1");
    var menu2 = document.getElementById("menu2");
    var menu3 = document.getElementById("menu3");
    var down = document.getElementById("DownloadPage");
    var SP = document.getElementById("SubPage");

    gsap.to(DP, {
        delay: 1,
        opacity: 1
    })

    gsap.to(top, {
        delay: 1.1,
        duration: 0.8,
        width: "100dvw"
    })

    gsap.to(logo, {
        delay: 1.5,
        opacity: 1
    })

    gsap.to(Menu, {
        delay: 2,
        opacity: 1
    })

    gsap.to(menu1, {
        delay: 2.2,
        duration: 1,
        opacity: 1
    })

    gsap.to(menu2, {
        delay: 2.3,
        duration: 1,
        opacity: 1
    })

    gsap.to(menu3, {
        delay: 2.4,
        duration: 1,
        opacity: 1,
        display: "flex"
    })

    gsap.to(SP, {
        delay: 2.5,
        duration: 1,
        opacity: 1,
        display: "flex"
    })
    gsap.to(down, {
        delay: 2.5,
        duration: 1,
        opacity: 1,
        display: "flex"
    })


}

window.onload = Main_Ani;