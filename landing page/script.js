document.addEventListener("DOMContentLoaded", () => {
    let mode = document.querySelector(".myclass");
    let currmode = "light";
    let body = document.querySelector("body");

    mode.addEventListener("click", () => {
        if (currmode === "light") {
            body.classList.add("dark");
            body.classList.remove("light");
            currmode = "dark";
        } else {
            body.classList.add("light");
            body.classList.remove("dark");
            currmode = "light";
        }
        console.log(currmode); // Log the current mode for debugging
    });
});
