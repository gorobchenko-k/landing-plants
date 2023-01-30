const serviceButtons = document.querySelectorAll(".service__button");
const serviceItems = document.querySelectorAll(".service__item");

let filters = {};
serviceButtons.forEach(item => {
    filters[item.dataset.service] = false;
});

serviceButtons.forEach(item => item.addEventListener("click", (e) => {
    const button = e.target;
    filters[button.dataset.service] = !filters[button.dataset.service];

    if (Object.values(filters).every(item => !item) || Object.values(filters).every(item => item)) {
        serviceButtons.forEach(item => item.classList.remove("_active"));
        serviceItems.forEach(item => item.classList.remove("_blured"));
        for (const key in filters) {
            filters[key] = false;
        }
        return;
    }

    serviceButtons.forEach(item => {
        filters[item.dataset.service] ? item.classList.add("_active") : item.classList.remove("_active");
    });

    serviceItems.forEach(item => {
        filters[item.dataset.service] ? item.classList.remove("_blured") : item.classList.add("_blured");
    });
}));