document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let loader = document.getElementById("loader");
        let content = document.querySelector(".contenth");

        // Loader eltüntetése
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none"; // Teljesen eltávolítjuk

            // Tartalom megjelenítése
            content.style.opacity = "1";
        }, 400); // Várunk, hogy az animáció lemenjen
    }, 500); // 3 másodperc töltési idő
});