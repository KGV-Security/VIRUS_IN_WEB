import {gsap} from "gsap";

export default function TopAnimation() {

    var logo = document.getElementById("logo");
    var top = document.getElementById("top");
    var Menu = document.getElementById("menu");
    var main = document.getElementById("main");

    gsap.set(top, {
        position: "fixed",
        zIndex: 9999
    })

    gsap.to(logo, {
        duration: 1,
        x: "37dvw"
    })

    gsap.to(Menu, {
        duration: 1,
        opacity: 0
    })

    gsap.set(main, {
        paddingTop: "10vh"
    })



}
