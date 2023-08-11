import {gsap} from "gsap";

export function LeftAnimation() {

    var Left = document.getElementById("Left");
    var Right = document.getElementById("Right");

    gsap.to(Left, {
        delay: 2.2,
        duration: 0.5,
        opacity: 1
    })

    gsap.to(Right, {
        delay: 2.3,
        duration: 0.5,
        opacity: 1
    })

}

window.onload = LeftAnimation;