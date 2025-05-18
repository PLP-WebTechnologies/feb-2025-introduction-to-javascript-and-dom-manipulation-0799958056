document.getElementById("changeText").addEventListener("click", function() {
    let title = document.getElementById("title");
    let description = document.getElementById("description");

    title.textContent = "Content Updated!";
    description.textContent = "You just changed the text dynamically.";

    // Modify styles
    title.style.color = "blue";
    description.style.fontSize = "18px";
});

document.getElementById("toggleElement").addEventListener("click", function() {
    let extraContent = document.getElementById("extraContent");

    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
    } else {
        extraContent.style.display = "none";
    }
});