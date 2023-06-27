const female = document.getElementById("female")
const headline1 = document.getElementById("headline1")
const headline2 = document.getElementById("headline2")
const subheadline = document.getElementById("subheadline")
const learnmore = document.getElementById("learnmore")
const logo = document.getElementById("logo")
const replay = document.getElementById("replay")

female.style.opacity = "0"
headline1.style.transform = "translateX(-100%)"
headline2.style.transform = "translateX(100%) translateY(-20%)"
subheadline.style.opacity = "0"
learnmore.style.opacity = "0"
logo.style.transform = "translateX(-80%) translateY(-15%)"
replay.style.opacity = "0"

setTimeout(() => {
    female.style.opacity = "1"
}, 1000)

setTimeout(() => {
    headline1.style.transform = "translateX(0%)"
}, 1500)

setTimeout(() => {
    female.style.opacity = "0"
}, 3000)

setTimeout(() => {
    headline1.style.transform = "scale(1.5)"
}, 3300)

setTimeout(() => {
    headline1.style.transform = "scale(0.01)"
}, 3500)

setTimeout(() => {
    headline2.style.transform = "translateX(0%) translateY(-20%)"
}, 3500)

setTimeout(() => {
    subheadline.style.opacity = "1"
}, 4000)

setTimeout(() => {
    learnmore.style.opacity = "1"
}, 4500)

setTimeout(() => {
    logo.style.transform = "translateX(70%) translateY(-15%)"
}, 5000)

setTimeout(() => {
    replay.style.opacity = "1"
}, 5500)

replay.addEventListener("click", () => {
    location.reload();
});
