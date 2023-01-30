const pricesItems = document.querySelectorAll(".prices__item");
const pricesArrows = document.querySelectorAll(".prices__arrow");


pricesArrows.forEach(item => item.addEventListener("click", () => openItem(item.closest(".prices__item"))));

function openItem(item) {
    if (item.classList.contains("_active")) {
        item.classList.remove("_active");
    } else {
        pricesItems.forEach(item => item.classList.remove("_active"));
        item.classList.toggle("_active");
    }
}