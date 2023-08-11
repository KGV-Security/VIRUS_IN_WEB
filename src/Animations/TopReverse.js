import {gsap} from "gsap";

export default function TopReverse() {

    var logo = document.getElementById("logo");
    var top = document.getElementById("top");
    var Menu = document.getElementById("menu");
    var main = document.getElementById("main");

    gsap.set(top, {
        position: "unset",
        zIndex: 9999
    })

    gsap.to(logo, {
        duration: 1,
        x: "0"
    })

    gsap.to(Menu, {
        duration: 1,
        opacity: 1
    })

    gsap.set(main, {
        paddingTop: "0"
    })
}