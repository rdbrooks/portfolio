const workHeading = document.querySelector("#work-nav");
console.log(workHeading);
const workSection = document.querySelector("#work");

document.addEventListener("scroll", function () {
  if (isInView(workSection)) {
    workHeading.classList.add("underline");
    console.log("true");
  } else {
    workHeading.classList.remove("underline");
    console.log("false");
  }
});

function isInView(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top <= windowHeight / 3;
}
