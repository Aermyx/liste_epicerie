const tlEmoji = gsap.timeline({
    defaults: {
        ease: "linear"
    },
    repeat: -1,
    yoyo: true,
})
.to(".pommeRouge", {scale: "1.25", duration: 0.5})
.to(".pizza", {scale: "1.25", duration: 0.5}, "-=0.25")
.to(".brocoli", {scale: "1.25", duration: 0.5}, "-=0.25")
.to(".fraise", {scale: "1.25", duration: 0.5}, "-=0.25")
.to(".burger", {scale: "1.25", duration: 0.5}, "-=0.25")
.to(".melon", {scale: "1.25", duration: 0.5}, "-=0.25")
.to(".poulet", {scale: "1.25", duration: 0.5}, "-=0.25")
.to(".raisin", {scale: "1.25", duration: 0.5}, "-=0.25")
.to(".pommeVerte", {scale: "1.25", duration: 0.5}, "-=0.25")

gsap.registerPlugin(ScrollTrigger);

const tlForm = gsap.timeline({
    scrollTrigger: {
        markers: true,
        start: "top 25%",
        trigger: ".wrapperFormulaire",
        toggleActions: "restart complete reverse reverse"
    }
})
.from(".formulaire", {opacity: 0, duration: 1})


const tlCrayon = gsap.timeline({
    scrollTrigger: {
        markers: true,
        start: "top bottom",
        end: "bottom bottom",
        trigger: ".wrapperFormulaire",
        scrub: true,
    }
})
.to(".crayon", {
    x: "900%",
    rotate: "-35deg"
})
.to(".wrapperFormulaire", {backgroundColor: "#fdf1ec"}, "<" )

const bouton = document.querySelector(".bouton");
const inputTxt = document.querySelector(".inputTxt");
const entrees = document.querySelector(".entrees");
const crochet = document.querySelector(".crochet");
const ajout = document.querySelector(".ajout");

bouton.addEventListener("click", () => {
    const ajoutElement = document.createElement("div");
    ajoutElement.classList.add("ajoutElement");

    const element =`<div class="entrees">${inputTxt.value}</div>
    <div class="crochet">🚫</div>`;

    ajoutElement.innerHTML = element;
    ajout.appendChild(ajoutElement);

    inputTxt.value = "";
});

class Item {
    constructor() {
        barre();
        supprimer();
    }

    barre() {

    }

    supprimer() {
        
    }
}