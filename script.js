const hamBtn = document.getElementById("hambar");
    const closeBtn = document.getElementById("close");
    const menu = document.getElementById("hide");

    hamBtn.addEventListener("click", () => {
        menu.style.display = "flex"; // Show the div
    });

    closeBtn.addEventListener("click", () => {
        menu.style.display = "none"; // Hide the div
    });

  
