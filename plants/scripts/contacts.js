const formSelectTitle = document.querySelector(".form__select-title");
const formArrow = document.querySelector(".form__arrow");
const formSelectCity = document.querySelector(".form__select-city");
const formSelectList = document.querySelector(".form__select-list");
const formSelectItems = document.querySelectorAll(".form__select-item");
const formInfo = document.querySelector(".form__info");
const formNameCity = document.querySelector(".form__name-city");



const cities = [
    {
        name: "Canandaigua, NY",
        phone: "+1	585	393 0001",
        adress: "151 Charlotte Street"
    },
    {
        name: "New York City",
        phone: "+1	212	456 0002",
        adress: "9 East 91st Street"
    },
    {
        name: "Yonkers, NY",
        phone: "+1	914	678 0003",
        adress: "511 Warburton Ave"
    },
    {
        name: "Sherrill, NY",
        phone: "+1	315	908 0004",
        adress: "14 WEST Noyes BLVD"
    }
];

let selectedCity = false;

formSelectTitle.addEventListener("click", () => {
    if(!selectedCity) formSelectCity.classList.toggle("_active");
    formSelectList.classList.toggle("_active");
    formArrow.classList.toggle("_active");
});

formSelectItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        selectCity(index);
    });
});

function selectCity(index) {
    formArrow.classList.remove("_active");
    formSelectList.classList.remove("_active");
    formNameCity.innerHTML = cities[index].name;
    formInfo.classList.add("_active");

    formInfo.innerHTML = `
            <div class="form__rows">
                <div class="form__row">
                    <p class="form__row-name">City:</p>
                    <p class="form__row-value">${cities[index].name}</p>
                </div>
                <div class="form__row">
                    <p class="form__row-name">Phone:</p>
                    <p class="form__row-value">${cities[index].phone}</p>
                </div>
                <div class="form__row">
                    <p class="form__row-name">Office adress:</p>
                    <p class="form__row-value">${cities[index].adress}</p>
                </div>
             </div>

            <a href="tel:${cities[index].phone.replace(/\s/g, '')}" class="form__button button">Call us</a>
    `;

    selectedCity = true;

}